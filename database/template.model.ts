import mongoose, { Mongoose, Schema, Types } from "mongoose";

export interface IModel {}

const ModelSchema = new mongoose.Schema<IModel>({}, { timestamps: true });

const Model =
  mongoose.models?.Model || mongoose.model<IModel>("Model", ModelSchema);

export default Model;
