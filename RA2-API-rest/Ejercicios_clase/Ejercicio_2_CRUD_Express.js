import express from "express"

const app = express()
app.use(express.json())
let students = [
    {id:"A001", nombre:"Arbil",curso:"1 dam"},
    {id:"A002", nombre:"Marzo",curso:"2 dam"}
]

app.get("/students", (req, res) => {
    res.json(students)
})

app.get("/students/:id", (req,res)=>{
    const student = students.find(s=> s.id === req.params.id)
    if(student){
        res.json(student)
    }
    else{
        res.status(404).json({error:"Estudiante no encontrado"})
    }
})

app.delete("/students/:id", (req,res)=>{
    const student = students.find(s=> s.id === req.params.id)
    if(!student){
        res.status(404).json({error:"Estudiante no encontrado"})
    }
    else{
        students = students.filter(s=> s.id !== req.params.id)
        res.status(204).send()
    }
})

app.post("/students", (req,res)=>{
    
    const {id,nombre,curso}= req.body
    const student = students.find(s=> s.id === id)
    
    if(!id||!nombre||!curso){
        res.status(400).json({error:"no existen todos los campos mencionados"})
    }
    if(!student){
        const nuevoEstudiante = {id,nombre,curso}
        students.push(nuevoEstudiante)
        res.status(201).json({succes:"se añadio un nuevo usuario"})
    }else{
        res.status(409).json({error:"ya existe un usuario con ese ID"})
    }
})

app.put("/students/:id",(req,res)=>{
    const student = students.find(s=> s.id === req.params.id)
    const {nombre,curso}= req.body
    if(!student){
        res.status(404).json({error:"Estudiante no encontrado"})
    }else{
        student.nombre = nombre
        student.curso = curso
        res.status(200).json({student})
    }
})

app.listen(3001,()=> {
    console.log("Servidor escuchando en puerto 3001")
})