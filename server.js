// ── Neon SQL Relay ────────────────────────────────────────────────────────────
app.post('/api/admin/relay', express.json({ limit: '500kb' }), async (req, res) => {
  const { adminPassword, query, values } = req.body;
  if (adminPassword !== process.env.ADMIN_PASSWORD) {
    return res.status(403).json({ success: false, error: 'Unauthorized' });
  }
  try {
    const result = await pool.query(query, values || []);
    return res.json({ success: true, rows: result.rows, rowCount: result.rowCount });
  } catch(e) {
    res.status(500).json({ success: false, error: e.message });
  }
});
