import express from 'express';
import diary from './routes/diaries'
const app = express();
app.use(express.json());

const PORT = 3002; 

app.get('/ping', (_req, res) => {
    console.log("someone pinged here");
    res.send("pong");
});

app.use('/api/diaries', diary)

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});