// Ad-hoc SQL utility using Neon's HTTP driver. Works through HTTPS only —
// useful from sandboxed envs where direct Postgres (5432) is blocked.
//
// Usage:
//   node scripts/sql.js "SELECT count(*) FROM leads"
//   node scripts/sql.js < query.sql

import { neon } from '@neondatabase/serverless';
import { readFileSync } from 'node:fs';

if (!process.env.DATABASE_URL) {
  console.error('DATABASE_URL is not set');
  process.exit(1);
}

const sql = neon(process.env.DATABASE_URL);

const arg = process.argv.slice(2).join(' ').trim();
const query = arg || readFileSync(0, 'utf-8').trim();

if (!query) {
  console.error('Usage: node scripts/sql.js "<query>"  (or pipe via stdin)');
  process.exit(1);
}

try {
  const rows = await sql.query(query);
  console.log(JSON.stringify(rows, null, 2));
} catch (err) {
  console.error('SQL error:', err.message);
  process.exit(1);
}
