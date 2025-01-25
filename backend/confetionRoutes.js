const express = require("express");
const Confession = require("./confetionModel");

const router = express.Router();

// POST: Submit a confession
router.post("/", async (req, res) => {
  const { message } = req.body;
  console.log(req.body);

  if (!message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    const newConfession = new Confession({ message, anonymityLevel });
    const savedConfession = await newConfession.save();
    res.status(201).json(savedConfession);
  } catch (err) {
    res.status(500).json({ error: "Failed to save confession" });
  }
});

// GET: Fetch all confessions
router.get("/", async (req, res) => {
  try {
    const confessions = await Confession.find().sort({ createdAt: -1 });
    res.status(200).json(confessions);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch confessions" });
  }
});

module.exports = router;
