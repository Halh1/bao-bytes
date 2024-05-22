const express = require("express");
const router = express.Router();
const itemsCtrl = require("../../controllers/api/items");

router.post("/", itemsCtrl.create);
router.delete("/:id", itemsCtrl.delete);
router.get("/", itemsCtrl.index);
router.get('/user/:userId/pantry', itemsCtrl.getPantryItems);
router.delete('/user/:userId/pantry/:itemId', itemsCtrl.deletePantryItems);
router.get('/user/:userId', itemsCtrl.getUserItems);
router.post('/transfer/:itemId', itemsCtrl.transferItem);
router.put("/:id", itemsCtrl.update);


module.exports = router;
