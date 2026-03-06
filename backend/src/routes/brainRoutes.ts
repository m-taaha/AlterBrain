import express from 'express'
import { getShareBrain, shareBrain } from '../controllers/brainController';
import { authMiddleware } from '../middleware/authMiddleware';

const brainRouter = express.Router();

brainRouter.post("/share", authMiddleware, shareBrain);
brainRouter.get("/:shareLink", getShareBrain);

export default brainRouter;