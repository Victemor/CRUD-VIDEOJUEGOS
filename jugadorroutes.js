const express = require("express");
const router = express.Router();
const jugadorcontroller = require("../controllers/jugadorcontrollers.js");

router.get("/", jugadorcontroller.consultar);
router.post("/", jugadorcontroller.ingresar);

/*
router.route("/:id")
    .get(jugadorcontroller.consultarDetalle)
    .put(jugadorcontroller.actualizar)
    .delete(jugadorcontroller.borrar);
*/

module.exports = router;
