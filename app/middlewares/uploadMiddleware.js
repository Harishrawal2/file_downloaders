// uploadMiddleware.js

import multer from "multer";

// Multer configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // Destination folder for storing uploaded files
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname); // Unique filename
  },
});

// File filter function
const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image") || file.mimetype.startsWith("video")) {
    cb(null, true); // Accept only image and video files
  } else {
    cb(new Error("Only image and video files are allowed!"), false);
  }
};

// Initialize multer with the configured storage and file filter
const upload = multer({ storage: storage, fileFilter: fileFilter });

export default upload;
