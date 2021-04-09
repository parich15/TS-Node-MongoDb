import { Router } from 'express'
const router: Router = Router()
import {booksController} from '../Controllers/booksController'

router.get('/', booksController.index)
router.get('/formulario', booksController.renderFormBook)
router.post('/formulario', booksController.guardarLibro)
export default router
