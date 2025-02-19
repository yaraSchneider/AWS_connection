const AWS = require('aws-sdk');

AWS.config.update({
  region: 'us-east-1',  // Substitua pela sua região
  accessKeyId: 'AKIA5RRHCKYZZ7ADAU6V',
  secretAccessKey: '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'
});

const s3 = new AWS.S3();

module.exports = s3;
