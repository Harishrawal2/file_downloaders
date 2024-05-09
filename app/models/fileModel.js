import mongoose from "mongoose";

const fileSchema = new mongoose.Schema({
  filename: {
    type: String,
    required: true,
  },
  path: {
    type: String,
    required: true,
  },
  size: {
    type: Number,
    required: true,
  },
  uploadDate: {
    type: Date,
    default: Date.now,
  },
  description: {
    type: String,
    default: "",
  },
  fileType: {
    type: String,
    enum: ["image", "document", "video", "audio", "other"],
    default: "other",
  },
  uploadedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

const File = mongoose.model("File", fileSchema);

export default File;
