import express from 'express'
import exphbs from 'express-handlebars'
import path from 'path'

//Importamos las rutas
import indexRoutes from './Routes/index'
import bookRoutes from './Routes/books'

//Inicialización
const app = express()
import './database'
//Ajustes
app.set('port', process.env.PORT || 3000)
app.set('views', path.join(__dirname, 'views'))
app.engine('.hbs', exphbs({
    extname: '.hbs',
    layoutsDir: path.join(app.get('views'),'layouts'),
    partialsDir: path.join(app.get('views'),'partials'),
    helpers: require('./lib/helpers'),
    defaultLayout: 'main'
}))
app.set('view engine', '.hbs')

//Middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}))

//Rutas
app.use('/', indexRoutes)
app.use('/books', bookRoutes)
//Archivos Estáticos
app.use(express.static(path.join(__dirname, 'public')))

//Encender el servidor
app.listen(app.get('port'), ()=> {
    console.log(`Servidor en puerto ${app.get('port')}`)
})