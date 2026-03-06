import express from 'express'
import { createContent, deleteContent, getContent } from '../controllers/contentController';

const contentRouter = express.Router();

contentRouter.post("/create", createContent);
contentRouter.get("/contents", getContent);
contentRouter.delete("/delete/:id", deleteContent);


export default contentRouter;
