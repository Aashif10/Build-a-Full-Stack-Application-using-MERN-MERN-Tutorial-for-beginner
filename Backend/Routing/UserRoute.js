const {Router} = require("express");
const { createUser, fetchAll, SingleUser, DeleteItem, UpdateData,  } = require("../Controller/UserController");

const router = Router();

router.post("/create", createUser)
router.get("/fetch", fetchAll)
router.get("/single/:id", SingleUser)
router.delete("/delete/:id", DeleteItem)
router.patch("/update/:id",UpdateData)

module.exports = router;