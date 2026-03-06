import { Request, Response } from "express";
import { Content } from "../model/Content";

export const createContent = async (req: Request, res: Response) => {
  try {
    if (!req.user) {
      return res.status(401).json({
        message: "Unauthorized",
      });

      const { title, link, type, tags } = req.body;

      if (!title || !link || !type) {
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
        message: "Content created successfuly",
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: "Server Error",
    });
  }
};

export const getContenct = async (req: Request, res: Response) => {
  try {
    if (!req.user) {
      return res.status(401).json({
        message: "Unauthorized",
      });
    }

    const contents = await Content.find({
      userId: req.user._id,
    }).populate("userId", "name email");

    return res.status(200).json({
      message: "Content fetched successfully",
      contents,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Server Error",
    });
  }
};

export const deleteContent = async (req: Request, res: Response) => {
  try {
    if (!req.user) {
      return res.status(401).json({
        message: "Unauthorized",
      });
    }

    const contentID = req.params.id;

    const content = await Content.findById(contentID);

    if (!content) {
      return res.status(404).json({
        message: "Content not found",
      });
    }

    if (content.userId.toString() !== req.user._id.toString()) {
      return res.status(403).json({
        message: "Forbidden: Not your content",
      });
    }

    await Content.deleteOne({ _id: contentID });

    return res.status(200).json({
      message: "Content deleted successfully",
    });
  } catch (error) {
    return res.status(500).json({
      message: "Server Error",
    });
  }
};