import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.sendFile('d:/work/react-global-training/client/index.html');
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));
