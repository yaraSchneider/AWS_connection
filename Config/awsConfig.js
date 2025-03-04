const AWS = require('aws-sdk');

AWS.config.update({
  region: 'us-east-1', 
  accessKeyId: 'AKIA5RRHCKYZ3ZDRWAA6',
  secretAccessKey: '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'
});

const s3 = new AWS.S3();

module.exports = s3;
