import express, {json} from 'express'
//import tareas from './local_db/tareas.js'

const app = express()
app.use(json())

//ENDPOINTS
app.get('/',(request,response) => {
    response.send('Inicio')
})


//PUERTO
const port = process.env.PORT || 300

app.listen(port,()=>{
    console.log(`El servidor esta corriendo en el puerto:${port}`)
})