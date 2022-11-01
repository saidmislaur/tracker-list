import path from 'path';
import express from 'express';
import { fileURLToPath } from 'url';

const app = express();

const __filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(__filename);
const publicPath = path.join(dirname, '..', 'public');
const port = 3000;

app.use(express.static(publicPath));

app.get('*', (req, res) => {
   res.sendFile(path.join(publicPath, 'index.html'));
});
app.listen(port, () => {
   console.log('Server is up!');
});