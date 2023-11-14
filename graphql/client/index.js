fetch('http://localhost:4000', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ query: '{cursos { id, nome } }' }),
})
  .then(res => res.json())
  .then(res => console.log(res.data));