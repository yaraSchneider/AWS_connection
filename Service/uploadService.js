const fs = require('fs');
const s3 = require('../Config/awsConfig');
const { v4: uuidv4 } = require('uuid'); // Biblioteca para gerar UUID

const uploadFile = (imagem, userId) => {
  return new Promise((resolve, reject) => {
    const filePath = imagem.path; // multer salva o arquivo e fornece esse caminho
    const fileContent = fs.readFileSync(filePath);

    const bucketName = "bucketmi74";
    const ref = uuidv4(); // Gera um nome único para o arquivo

    const params = {
      Bucket: bucketName,
      Key: ref,
      Body: fileContent
    };

    s3.upload(params, (err, data) => {
      if (err) {
        console.error('Erro ao fazer o upload:', err);
        reject(err);
      } else {
        console.log('Arquivo carregado com sucesso:', data.Location);
        resolve(data.Location);
      }
    });
  });
};

module.exports = { uploadFile };
