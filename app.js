import  express  from 'express'
const app = express()
const port = process.env.PORT || '8000'


app.get('/', (req, res) => {
      res.send('hello world!')
    })



app.listen(port, () => {
console.log(`Yupp! Express server listening at http://localhost:${port}`)
})


