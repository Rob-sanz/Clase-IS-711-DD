import express, {json, request, response} from 'express'
import tareas from './local_db/tareas.json' with {type: 'json'}

const app = express()
app.use(json())

const generarNuevoID = () => {
    const maxId = tareas.reduce((max, tarea) => (tarea.id > max ? tarea.id : max), 0);
    return maxId + 1;
}

//ENDPOINTS
app.get('/',(request,response) => {
    response.send('Inicio')
})

app.get('/tareas', (request,respponse) => {
    respponse.json(tareas)
})

app.get('/tareas/:tareaId', (request, response) => {
    const { tareaId } = request.params

    const parseID = Number(tareaId)

    if (isNaN(parseID)) {
        return response.status(400).json({
            success: false,
            message: 'El id debe ser un número' 
        })
    }

    const tarea = tareas.find(t => t.id === parseID)

    if (!tarea) {
        return response.status(404).json({
            success: false,
            message: 'Tarea no encontrada'
        })
    }

    response.json(tarea)
});

app.post('/tareas', (request, response) => {

    const {titulo, descripcion} = request.body

    if(!titulo){
        response.status(400).json({
            success: false, 
            menssage: 'El titulo es obligatorio'
        })
    }
    if(descripcion.length < 20){
        response.status(400).json({
            success: false, 
            message: 'La descreipcion debe tener al menos 20 caracteres'
        })
    }

    const nuevaTarea = {
        id: generarNuevoID(),
        titulo,
        descripcion,
        completada: false,
        fecha_creacion: new Date().toISOString(),
    };

    tareas.push(nuevaTarea);

    response.status(201).json({ success: true, data: nuevaTarea });
})


app.put('/tareas/:tareaId', (request, response) => {
    const { tareaId } = request.params
    const { titulo, descripcion, completada } = request.body
  
    const parseID = Number(tareaId)
  
    if (isNaN(parseID)) {
        response.status(400).json({
            success: false,
            message: 'El id debe ser un número'
        })
    }
  
    const tareaIndex = tareas.findIndex(t => t.id === parseID)
  
    if (tareaIndex === -1) {
        response.status(404).json({
            success: false, 
            message: 'Tarea no encontrada'
        })
    }
  
    const tareaActualizada = {
      ...tareas[tareaIndex],
      titulo: titulo || tareas[tareaIndex].titulo,
      descripcion: descripcion || tareas[tareaIndex].descripcion,
      completada: completada !== undefined ? completada : tareas[tareaIndex].completada,
    }
  
    tareas[tareaIndex] = tareaActualizada
  
    response.json({
        success: true,
        data: tareaActualizada
    })
})

app.delete('/tareas/:tareaId', (request, response) => {
    const { tareaId } = request.params
  
    const parseID = Number(tareaId)
  
    if (isNaN(parseID)) {
        response.status(400).json({
            success: false,
            message: 'El id debe ser un número'
        })
    }
  
    const tareaIndex = tareas.findIndex(t => t.id === parseID)
  
    if (tareaIndex === -1) {
        response.status(404).json({
            success: false,
            message: 'Tarea no encontrada'
        })
    }
 
    tareas.splice(tareaIndex, 1)
  
    response.json({
        success: true,
        message: 'Tarea eliminada'
    })
  });
  

//PUERTO
const port = process.env.PORT || 300

app.listen(port,()=>{
    console.log(`El servidor esta corriendo en http://localhost:${port}`)
})