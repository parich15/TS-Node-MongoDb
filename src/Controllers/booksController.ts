import {Request, Response} from 'express'
import Bookmodel, { Book } from '../Models/book'

class BookController {
    public async index (req:Request, res:Response): Promise<void>{
       const books: Book[] =  await Bookmodel.find({}).lean()
        res.render('Books/index', {
            title: 'Libros',
            books
        })
    }
    public renderFormBook (req: Request, res: Response):void {
        res.render('Books/form', {
            title: 'Agregar Libro'
        })
    }
    public async guardarLibro (req:Request, res:Response){
            const { title, author, isbn } = req.body
            const book: Book = new Bookmodel( {title,author,isbn});
            await book.save()
            res.redirect('/Books')
    }
}
export const booksController = new BookController()