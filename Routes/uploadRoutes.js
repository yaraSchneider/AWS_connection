const express = require('express');
const multer = require('multer');
const { uploadHandler } = require('../Controller/uploadController');

const router = express.Router();

// Configuração do multer para armazenar arquivos temporariamente na pasta "uploads"
const upload = multer({ dest: 'uploads/' });

router.post('/upload', upload.single('imagem'), uploadHandler);

module.exports = router;