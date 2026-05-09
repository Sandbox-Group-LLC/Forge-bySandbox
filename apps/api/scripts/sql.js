// Relay client. Sends a SQL query to RELAY_URL/api/admin/relay,
// which executes it against Neon via the production pg pool.
//
// Required env: RELAY_URL, ADMIN_PASSWORD
// Usage:
//   node scripts/sql.js "SELECT count(*) FROM leads"
//   node scripts/sql.js < query.sql

import { readFileSync } from 'node:fs';

const { RELAY_URL, ADMIN_PASSWORD } = process.env;

if (!RELAY_URL || !ADMIN_PASSWORD) {
  console.error('RELAY_URL and ADMIN_PASSWORD must be set in env');
  process.exit(1);
}

const arg = process.argv.slice(2).join(' ').trim();
const query = arg || readFileSync(0, 'utf-8').trim();

if (!query) {
  console.error('Usage: node scripts/sql.js "<query>"  (or pipe via stdin)');
  process.exit(1);
}

const url = `${RELAY_URL.replace(/\/$/, '')}/api/admin/relay`;

const res = await fetch(url, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ adminPassword: ADMIN_PASSWORD, query }),
});

const body = await res.json().catch(() => ({}));

if (!res.ok || !body.success) {
  console.error(`relay error (HTTP ${res.status}):`, body.error || res.statusText);
  process.exit(1);
}

console.log(JSON.stringify({ rowCount: body.rowCount, rows: body.rows }, null, 2));
