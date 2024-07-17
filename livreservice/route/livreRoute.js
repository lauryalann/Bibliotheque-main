// routes/book.routes.js
const express = require("express");
const router = express.Router();
const BookController = require("../controller/livreController");

router.get("/", BookController.findAll);
router.get("/:id", BookController.findById);
router.post("/", BookController.create);
router.put("/:id", BookController.update);
router.delete("/:id", BookController.delete);

module.exports = router;
