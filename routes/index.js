import { Router } from 'express'
import { cursosRoute } from './cursos.js'
import { disciplinasRoute } from './disciplinas.js'
import { professoresRoute } from './professores.js'

const router = Router() 

//rotas com /cursos
router.use('/cursos', cursosRoute)
// //rotas com /disciplinas
router.use('/disciplinas', disciplinasRoute)
// //rotas com /professores
router.use('/professores', professoresRoute)

export { router }