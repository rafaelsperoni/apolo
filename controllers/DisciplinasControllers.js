import db from '../config/db.js'

class DisciplinasController{
    async getAll(){

        const disciplina = await db.query('SELECT * FROM disciplina')

        return disciplina.rows
    }

    //demais metodos

    //graphql
    async getDisciplinas(codigo){
        let sql = `SELECT * from disciplina `
        let params = null
        if (codigo){
            sql += ` AND codigo=$1`
            params = [codigo]
        }
        const disciplinas = await db.query(sql, params)

        return disciplinas.rows

    }

}
export { DisciplinasController }