import mongoose from "mongoose";

export interface ITag {
  name: string;
  questions: number;
}

const TagSchema = new mongoose.Schema<ITag>(
  {
    name: { type: String, required: true, unique: true },
    questions: { type: Number, default: 0 },
  },
  { timestamps: true }
);

const Tag = mongoose.models?.Tag || mongoose.model<ITag>("Tag", TagSchema);

export default Tag;
