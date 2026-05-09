import { serve } from '@hono/node-server';
import { Hono } from 'hono';
import { pool } from './db.js';

const app = new Hono();

app.get('/api/health', async (c) => {
  const r = await pool.query('select 1 as ok');
  return c.json({ ok: r.rows[0].ok === 1 });
});

const MAX_LEN = 255;
const COMPANY_SIZES = new Set(['SMB', 'Enterprise']);
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateLead(body) {
  const errors = {};
  const get = (k) => (typeof body?.[k] === 'string' ? body[k].trim() : '');

  const firstName = get('firstName');
  const lastName = get('lastName');
  const email = get('email');
  const company = get('company');
  const jobTitle = get('jobTitle');
  const companySize = get('companySize');
  const comments = typeof body?.comments === 'string' ? body.comments : '';

  if (!firstName) errors.firstName = 'First name is required';
  else if (firstName.length > MAX_LEN) errors.firstName = `Must be ≤ ${MAX_LEN} chars`;

  if (!lastName) errors.lastName = 'Last name is required';
  else if (lastName.length > MAX_LEN) errors.lastName = `Must be ≤ ${MAX_LEN} chars`;

  if (!email) errors.email = 'Email is required';
  else if (!EMAIL_RE.test(email)) errors.email = 'Invalid email';

  if (!company) errors.company = 'Company is required';
  else if (company.length > MAX_LEN) errors.company = `Must be ≤ ${MAX_LEN} chars`;

  if (!jobTitle) errors.jobTitle = 'Job title is required';
  else if (jobTitle.length > MAX_LEN) errors.jobTitle = `Must be ≤ ${MAX_LEN} chars`;

  if (!companySize) errors.companySize = 'Company size is required';
  else if (!COMPANY_SIZES.has(companySize)) errors.companySize = 'Invalid company size';

  return {
    errors,
    values: { firstName, lastName, email, company, jobTitle, companySize, comments },
  };
}

app.post('/api/leads', async (c) => {
  let body;
  try {
    body = await c.req.json();
  } catch {
    return c.json({ error: 'Invalid JSON' }, 400);
  }

  const { errors, values } = validateLead(body);
  if (Object.keys(errors).length > 0) {
    return c.json({ error: 'Validation failed', fieldErrors: errors }, 400);
  }

  const { rows } = await pool.query(
    `INSERT INTO leads (first_name, last_name, email, company, job_title, company_size, comments)
     VALUES ($1, $2, $3, $4, $5, $6, $7)
     RETURNING id, first_name AS "firstName", last_name AS "lastName", email,
               company, job_title AS "jobTitle", company_size AS "companySize",
               comments, created, updated`,
    [
      values.firstName,
      values.lastName,
      values.email,
      values.company,
      values.jobTitle,
      values.companySize,
      values.comments || null,
    ],
  );

  return c.json(rows[0], 201);
});

app.onError((err, c) => {
  console.error('[api] error:', err);
  return c.json({ error: 'Internal server error' }, 500);
});

const port = Number(process.env.PORT) || 8787;
serve({ fetch: app.fetch, port }, (info) => {
  console.log(`[api] listening on http://localhost:${info.port}`);
});
