fetch('https://refactored-space-guacamole-97jj57qxpjf7jr-4000.app.github.dev/', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ query: `
  {
    cursos {
      nome
      coordenador {
        nome
      }
    }
  }` }),
})
  .then(res => res.json())
  .then(res => console.log(res.data));