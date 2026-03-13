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

app.listen(3001,()=> {
    console.log("Servidor escuchando en puerto 3001")
})