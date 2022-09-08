import express from 'express';
import bodyParser from "body-parser";
const port = 8000;
const app = express();

app.use(bodyParser.json());
app.get('/', (req, res) => {
    res.end('<h1>Hello World</h1>')
})



app.listen(port, 'localhost', () => {
    console.log(`running at http://localhost:${port}`);
})