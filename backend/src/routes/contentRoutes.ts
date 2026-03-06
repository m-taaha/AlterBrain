import express from 'express'
import { createContent, deleteContent, getContent } from '../controllers/contentController';
import { authMiddleware } from '../middleware/authMiddleware';

const contentRouter = express.Router();

contentRouter.post("/create", authMiddleware, createContent);
contentRouter.get("/contents", authMiddleware, getContent);
contentRouter.delete("/delete/:id", authMiddleware, deleteContent);


export default contentRouter;
