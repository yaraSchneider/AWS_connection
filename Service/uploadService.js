const fs = require('fs');
const s3 = require('../Config/awsConfig');
const db = require('../Config/dbConfig');
const { v4: uuidv4 } = require('uuid');


//Envia a imagem para AWS S3 e salva o URL no MySQL.
const uploadFile = (imagem, userId) => {
  return new Promise(async (resolve, reject) => {
    const filePath = imagem.path;
    const fileContent = fs.readFileSync(filePath);

    const bucketName = "bucketmi74";
    const ref = uuidv4();

    const params = {
      Bucket: bucketName,
      Key: ref,
      Body: fileContent
    };

    s3.upload(params, async (err, data) => {
      if (err) {
        console.error('Erro ao fazer upload:', err);
        reject(err);
      } else {
        console.log('Arquivo carregado com sucesso:', data.Location);

        // Salvar no banco
        try {
          await db.execute('INSERT INTO imagens (userId, fileUrl) VALUES (?, ?)', [userId, data.Location]);
          resolve(data.Location);
        } catch (dbError) {
          console.error('Erro ao salvar no banco:', dbError);
          reject(dbError);
        }
      }
    });
  });
};


//Busca imagens no banco pelo userId.
const getUserImages = async (userId) => {
  try {
    const [rows] = await db.execute('SELECT fileUrl FROM imagens WHERE userId = ?', [userId]);
    return rows;
  } catch (error) {
    console.error('Erro ao buscar imagens:', error);
    throw error;
  }
};

module.exports = { uploadFile, getUserImages };
