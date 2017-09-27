const express = require('express');
const controller = require('./foto-estado-cama.controller');

const router = express.Router();

router.get('/', controller.getAll);
router.get('/:id', controller.getById);
router.post('/', controller.insert);
router.put('/:id', controller.update);
router.delete('/:id', controller.remove);

module.exports = router;
