const uploadService = require('../Service/uploadService');


//POST recebe e armazena a imagem no AWS S3 e no banco de dados
const uploadHandler = async (req, res) => {
  const { userId } = req.body;
  const imagem = req.file;

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

//GET para buscar as imagens pelo userId
const getUserImagesHandler = async (req, res) => {
  const { userId } = req.params;

  try {
    const images = await uploadService.getUserImages(userId);
    res.json({ images });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar imagens', error });
  }
};

module.exports = { uploadHandler, getUserImagesHandler };