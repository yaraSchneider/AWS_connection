const express = require('express');
const multer = require('multer');
const { uploadHandler, getUserImagesHandler } = require('../Controller/uploadController');

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

router.post('/upload', upload.single('imagem'), uploadHandler);
router.get('/imagens/:userId', getUserImagesHandler);

module.exports = router;