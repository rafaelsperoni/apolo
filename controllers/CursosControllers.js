import db from '../config/db.js'

class CursosController{
    async getAll(){

        const cursos = await db.query('SELECT * FROM cursos')

        return cursos.rows
    }

    //demais metodos

    //graphql
    async getCursos(id){
        let sql = `SELECT cursos.id as id_curso, cursos.nome as nome_curso, cursos.descricao as desc_curso, 
                    cursos.id_coordenador, 
                    professor.nome as nome_professor, professor.email as email_professor
                    FROM cursos 
                    INNER JOIN professor ON cursos.id_coordenador=professor.id
                    `
        let params = null
        if (id){
            sql += ` AND cursos.id=$1`
            params = [id]
        }
        const cursos = await db.query(sql, params)

        return cursos.rows.map((curso) => ({
            'id': curso.id_curso,
            'nome': curso.nome_curso,
            'descricao': curso.desc_curso,
            'coordenador': {
                'id': curso.id_coordenador,
                'nome': curso.nome_professor,
                'email': curso.email_professor
            },
        }))

//        return cursos.rows        
    }

}
export { CursosController }