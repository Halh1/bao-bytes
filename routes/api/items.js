const express = require("express");
const router = express.Router();
const itemsCtrl = require("../../controllers/api/items");

router.post("/", itemsCtrl.create);
router.delete("/:id", itemsCtrl.delete);
router.get("/", itemsCtrl.index);
router.get('/user/:userId', itemsCtrl.getUserItems);
module.exports = router;