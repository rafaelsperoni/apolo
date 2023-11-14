import dotenv from 'dotenv'
import express from 'express'
import { router }  from './routes/index.js'

dotenv.config()

const app = express()

app.use(express.json());

//servir arquivos estáticos, na pasta public
app.use(express.static('public'))

app.use('/api', router)

const server = app.listen(process.env.PORT, ()=>{
    console.log('Rodando na porta '+process.env.PORT)
})