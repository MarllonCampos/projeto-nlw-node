import express from 'express'


const app = express();
app.use(express.json());


app.get('/',(req,res) => {
    return res.json({
        message:'Hello World'
    })
})

app.post('/users', (req,res) => {
    console.log(req.body)
    
    return res.json({
        message:req.body.nome || 'Nada',
        title:'Its Working'
    })
})



app.listen(3333, () => {
    console.log('Server is running on port 3333')
})