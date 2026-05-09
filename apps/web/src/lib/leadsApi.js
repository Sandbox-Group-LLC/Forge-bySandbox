export async function createLead(data) {
  const res = await fetch('/api/leads', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    let detail;
    try {
      detail = await res.json();
    } catch {
      detail = { error: res.statusText };
    }
    const err = new Error(detail.error || 'Request failed');
    err.status = res.status;
    err.fieldErrors = detail.fieldErrors;
    throw err;
  }

  return res.json();
}
