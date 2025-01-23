import mongoose, { Schema, Types } from "mongoose";

export interface ITagQuestion {
  tag: Types.ObjectId;
  question: Types.ObjectId;
}

const TagQuestionSchema = new mongoose.Schema<ITagQuestion>(
  {
    tag: { type: Schema.Types.ObjectId, ref: "Tag", required: true },
    question: { type: Schema.Types.ObjectId, ref: "Question", required: true },
  },
  { timestamps: true }
);

const TagQuestion =
  mongoose.models?.TagQuestion ||
  mongoose.model<ITagQuestion>("TagQuestion", TagQuestionSchema);

export default TagQuestion;
