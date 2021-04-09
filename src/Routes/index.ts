import { Router } from 'express'

const router: Router = Router()

import {indexController} from '../Controllers/indexController'

router.get('/', indexController.index);

export default router
