import mongoose from 'mongoose'
import { mongodb } from './keys'

mongoose.connect(mongodb.URI, {
    useNewUrlParser: true
})
    .then(db => console.log('DB Conectada'))
    .catch(err => 'No se ha podido conectar')