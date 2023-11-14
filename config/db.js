import pg from 'pg'
import dotenv from 'dotenv'

dotenv.config()

const { Pool } = pg

//dotenv.config()

const pool = new Pool({
    connectionString: process.env.DATABASE_URL
})
pool.on('connect', ()=>{
    console.log('DB connected')

})


export default {
    query: (text, params) => pool.query(text, params)
}