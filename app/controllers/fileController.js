import fs from "fs";
import path from "path";
import File from "../models/fileModel.js";

// function create to handle file upload
export const uploadeFile = async (req, res) => {
  try {
    const { originalname, path: filePath, size } = req.file;

    // Save file information to the database
    const file = await File.create({
      filename: originalname,
      path: filePath,
      size,
      uploadedBy: req.user._id,
    });

    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    await File.save();

    res.status(201).json({ message: "File uploaded successfully", file });
  } catch (error) {
    console.log("Error while uplaoding file", error);
    res.status(500).json({ message: "Error while uplaoding file" });
  }
};
