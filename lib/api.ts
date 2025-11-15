export async function fetchProducts() {
  const res = await fetch('/api/products');
  return res.json();
}

export async function submitContact(data: {
  name: string;
  email: string;
  message: string;
}) {
  const res = await fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  return res.json();
}
