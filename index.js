import express from 'express';
import { resolve } from 'path';

const app = express();
app.use(express.static('client'));
app.get('/', (req, res) => {
    res.sendFile(resolve('client', 'index.html'));
});
const port = 8080;
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
