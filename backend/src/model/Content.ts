import mongoose, { Schema, Document } from "mongoose";

export enum ContentType  {
    Document = 'document',
    TWEET = 'tweet',
    YOUTUBE = 'youtube',
    LINK = 'link',
}

export interface IContent extends Document {
    title: string;
    link: string;
    type: ContentType;
    tags: string[];
    userId: mongoose.Types.ObjectId;
}

const ContentSchema = new Schema<IContent>({
    title: {
        type: String,
        required: true,
        trim: true,
    },

    link: {
        type: String,
        enum: Object.values(ContentType),
        required: true,
    },

    tags: [
        {
            type: String,
        },
    ],

    userId: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
}, {timestamps: true});

export const Content = mongoose.model<IContent>("Content", ContentSchema)