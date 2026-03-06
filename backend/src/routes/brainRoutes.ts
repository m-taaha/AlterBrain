import express from 'express'
import { getShareBrain, shareBrain } from '../controllers/brainController';

const brainRouter = express.Router();

brainRouter.post("/share", shareBrain);
brainRouter.get("/:shareLink", getShareBrain);

export default brainRouter;