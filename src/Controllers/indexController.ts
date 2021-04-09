import {Request, Response} from 'express'
class IndexController {
    public index(req: Request, res: Response):void{
        res.render('index',{title:'Bienvenido a la bookApp'})
    }
}

export const indexController = new IndexController();