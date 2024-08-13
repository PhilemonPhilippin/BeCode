const express = require("express");
const cloudinary = require("cloudinary").v2;
const User = require("../models/Schema").User;
const argon2 = require("argon2");
const multer = require("multer");
const router = express.Router();

const storage = multer.memoryStorage();
const fileFilter = (req, file, cb) => {
  const allowedMimeTypes = ["application/pdf", "image/jpeg", "image/png"];
  if (allowedMimeTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(
      new Error("Invalid file type. Only PDF, JPG, and PNG files are allowed."),
      false
    );
  }
};

const upload = multer({ storage: storage, fileFilter: fileFilter });

router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.findById(id);
    if (user) {
      const userResponse = {
        email: user.email,
        firstname: user.firstname,
        lastname: user.lastname,
        github: user.github,
        profilepicture: user.profilepicture,
        cv: user.cv,
      };
      res.status(200).json(userResponse);
    }
  } catch (err) {
    console.log(err);
    res.status(500).send("An error occurred on the server.");
  }
});

router.put("/picture", upload.single("profilepicture"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        message: "Invalid file type. Only PDF, JPG, and PNG files are allowed.",
      });
    } else {
      const fileBuffer = req.file.buffer;
      const base64String = fileBuffer.toString("base64");
      const dataUri = `data:${req.file.mimetype};base64,${base64String}`;

      cloudinarySetup();
      const cloudinaryResponse = await cloudinary.uploader.upload(dataUri);
      const profilepictureUrl = cloudinaryResponse.url;

      const id = req.body.id;
      const user = await User.findById(id);
      if (user) {
        user.profilepicture = profilepictureUrl;
        await user.save();
        res.sendStatus(204);
      }
    }
  } catch (err) {
    console.log(err);
    res.status(500).send("An error occurred on the server.");
  }
});

router.put("/password", async (req, res) => {
  try {
    const { id, oldPassword, newPassword } = req.body;
    const user = await User.findById(id);
    if (user) {
      const auth = await argon2.verify(user.password, oldPassword);
      if (auth) {
        user.password = await argon2.hash(newPassword);
        await user.save();
        res.sendStatus(204);
      } else {
        res.status(400).send("incorrect password");
      }
    }
  } catch (err) {
    console.log(err);
    res.status(500).send("An error occurred on the server.");
  }
});

router.put("/github", async (req, res) => {
  try {
    const { id, github } = req.body;
    const user = await User.findById(id);
    if (user) {
      user.github = github;
      await user.save();
      res.sendStatus(204);
    }
  } catch (err) {
    console.log(err);
    res.status(500).send("An error occurred on the server.");
  }
});

router.put("/cv", upload.single("cv"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        message: "Invalid file type. Only PDF, JPG, and PNG files are allowed.",
      });
    }

    const fileBuffer = req.file.buffer;
    const base64String = fileBuffer.toString("base64");
    const dataUri = `data:${req.file.mimetype};base64,${base64String}`;

    cloudinarySetup();
    const cloudinaryResponse = await cloudinary.uploader.upload(dataUri);

    let cvUrl = cloudinaryResponse.url;
    cvUrl = replaceFileExtension(cvUrl);

    const id = req.body.id;
    const user = await User.findById(id);
    if (user) {
      user.cv = cvUrl;
      await user.save();
      res.sendStatus(204);
    }
  } catch (err) {
    console.log(err);
    res.status(500).send("An error occurred on the server.");
  }
});

function cloudinarySetup() {
  cloudinary.config({
    cloud_name: "dlpd4swf7",
    api_key: "221462339246618",
    api_secret: "KD6fAvLZAcgvV65i11MyqBrn1XM",
    secure: true,
  });
}

function replaceFileExtension(fileUrl) {
  const lastIndex = fileUrl.lastIndexOf(".");
  const fileWithoutExtension = fileUrl.slice(0, lastIndex);
  return fileWithoutExtension + ".jpg";
}

module.exports = router;
