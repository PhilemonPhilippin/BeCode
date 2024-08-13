const express = require("express");
const { User, Joboffer } = require("../models/Schema");
const router = express.Router();

const uriBase = "/api/user/:userId/joboffer";

router.use(uriBase, async (req, res, next) => {
  const userId = req.params.userId;
  const idExist = await User.exists({ _id: userId });
  if (!idExist) {
    res.status(404).send("This user id does not exist.");
  } else {
    next();
  }
});

router.get(uriBase, async (req, res) => {
  try {
    const userId = req.params.userId;
    const user = await User.findById(userId);
    const joboffers = user.joboffers;
    res.status(200).json(joboffers);
  } catch (err) {
    console.log(err);
    res.status(500).send("An error occurred on the server.");
  }
});

router.get(uriBase + "/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const userId = req.params.userId;
    const user = await User.findById(userId);

    const joboffer = user.joboffers.find((joboffer) => joboffer._id == id);
    if (joboffer) {
      res.status(200).json(joboffer);
    } else {
      res.status(404).send("This joboffer id does not exist.");
    }
  } catch (err) {
    console.log(err);
    res.status(500).send("An error occurred on the server.");
  }
});

router.post(uriBase, async (req, res) => {
  try {
    const userId = req.params.userId;
    const user = await User.findById(userId);

    const {
      jobTitle,
      company,
      website,
      contactName,
      contactEmail,
      contactPhone,
      contactAddress,
      origin,
      status,
      comment,
    } = req.body;

    const newJoboffer = {
      jobTitle,
      company,
      website,
      contactName,
      contactEmail,
      contactPhone,
      contactAddress,
      origin,
      status,
      comment,
    };

    user.joboffers.push(newJoboffer);
    await user.save();
    res.status(201).json(newJoboffer);
  } catch (err) {
    console.log(err);
    res.status(500).send("An error occurred on the server.");
  }
});

router.put(uriBase + "/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const userId = req.params.userId;
    const user = await User.findById(userId);

    const {
      jobTitle,
      company,
      website,
      contactName,
      contactEmail,
      contactPhone,
      contactAddress,
      origin,
      status,
      comment,
    } = req.body;

    const jobofferIndex = user.joboffers.findIndex(
      (joboffer) => joboffer._id.toString() === id
    );

    if (jobofferIndex != -1) {
      user.joboffers[jobofferIndex].jobTitle = jobTitle;
      user.joboffers[jobofferIndex].company = company;
      user.joboffers[jobofferIndex].website = website;
      user.joboffers[jobofferIndex].contactName = contactName;
      user.joboffers[jobofferIndex].contactEmail = contactEmail;
      user.joboffers[jobofferIndex].contactPhone = contactPhone;
      user.joboffers[jobofferIndex].contactAddress = contactAddress;
      user.joboffers[jobofferIndex].origin = origin;
      user.joboffers[jobofferIndex].status = status;
      user.joboffers[jobofferIndex].comment = comment;
      await user.save();
      res.sendStatus(204);
    } else {
      res.status(404).send("This joboffer id does not exist.");
    }
  } catch (err) {
    console.log(err);
    res.status(500).send("An error occurred on the server.");
  }
});

router.delete(uriBase + "/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const userId = req.params.userId;
    const user = await User.findById(userId);
    const jobofferIndex = user.joboffers.findIndex(
      (joboffer) => joboffer._id.toString() === id
    );
    if (jobofferIndex != -1) {
      user.joboffers.splice(jobofferIndex, 1);
      await user.save();
      res.sendStatus(204);
    } else {
      res.status(404).send("This joboffer id does not exist.");
    }
  } catch (err) {
    console.log(err);
    res.status(500).send("An error occurred on the server.");
  }
});

module.exports = router;
