import { Request, Response } from "express";
import { Content } from "../model/Content";

export const createContent = async (req: Request, res: Response) => {
    try {

        if(!req.user) {
            return res.status(401).json({
                message: "Unauthorized",
            });

            const {title, link, type, tags} = req.body;

            if(!title || !link || !type) {
                return res.status(400).json({
                    message: "Title, link and type are required",
                });
            }

               const content = await Content.create({
                 title,
                 link,
                 type,
                 tags,
                 userId: req.user._id,
               });

               return res.status(201).json({
                message: "Content created successfuly"
               })
        }
    } catch (error) {
        return res.status(500).json({
            message: "Server Error"
        })
    }
}