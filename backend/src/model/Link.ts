import mongoose, {Schema, Document} from "mongoose";

export interface ILink extends Document {
    hash: string;
    userId: mongoose.Types.ObjectId,
    isActive: boolean //to allow toggling sharing on/off
}

const LinkSchema = new Schema<ILink>({
    hash: {
        type: String,
        required: true,
        unique: true,
    },

    userId: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
        unique: true,
    },

    isActive: {
        type: Boolean,
        default: true,
    }
}, {timestamps: true});

export const Link = mongoose.model<ILink>("Link", LinkSchema);