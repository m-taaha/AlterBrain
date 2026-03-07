import { Request, Response } from "express";
import CryptoJS from "crypto-js";
import { Link } from "../model/Link";
import { Content } from "../model/Content";
import { User } from "../model/User";

export const shareBrain = async (req: Request, res: Response) => {
    try {

        if(!req.user) {
            return res.status(401).json({
                message: "Unauthorized",
            });
        }

        const {share} = req.body;

        if(share) {

            const existingLink = await Link.findOne({
                userId: req.user._id,
            });

            if(existingLink) {
                return res.json({
                    shareLink: existingLink.hash,
                });
            }

            const random = CryptoJS.lib.WordArray.random(16).toString();
            const hash = CryptoJS.SHA256(random).toString(CryptoJS.enc.Hex);

            const link = await Link.create({
                hash,
                userId: req.user._id,
            });

            return res.json({
                shareLink: link.hash,
            });

        } else {

            // turning off sharing by deleting the record
            await Link.deleteOne({userId: req.user._id});

            return res.json({
                message: "Sharing disabled",
            })

        }

    } catch (error) {
        return res.status(500).json({
            message: "Server Error", 
        })
    }
}

export const getShareBrain = async (req: Request, res: Response) => {
    try {

        const hash = req.params.shareLink as string;

        const link = await Link.findOne({hash});

        if(!link) {
            return res.status(404).json({
                message: "Invalid share link",
            });
        }

        // fetching the user details so teh public page can say "Welcome to [Name]'s Brain"
        const user = await User.findById(link.userId).select('name email');

        const contents = await Content.find({
            userId: link.userId,
        });

        return res.json({
            username: user?.name,
            contents,
        });



    } catch (error) {
        return res.status(500).json({
            message: "Server Error",
        })
    }
}