import express from "express";
import { router } from "./routes";
import cors from 'cors';

const app = express();


app.listen(4000, () => console.log('Server is running, please initial yours testing'));

app.use(express.json());

app.use(cors());

app.use(router);