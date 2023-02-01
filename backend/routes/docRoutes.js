const { addDocController, getAlldocsController, deleteAllController } = require("../controller/docController")

const router = require("express").Router()

router
    .get("/", getAlldocsController)
    .delete("/delete", deleteAllController)
    .post("/add", addDocController)

module.exports = router