const uploadService = require('../Service/uploadService');

const uploadHandler = async (req, res) => {
  const { userId } = req.body; // userId vem do corpo da requisição
  const imagem = req.file; // multer coloca o arquivo em req.file

  if (!imagem) {
    return res.status(400).json({ message: 'Nenhuma imagem foi enviada!' });
  }

  try {
    const fileUrl = await uploadService.uploadFile(imagem, userId);
    res.json({ message: 'Upload realizado com sucesso!', fileUrl });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao fazer upload', error });
  }
};

module.exports = { uploadHandler };
