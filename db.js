const AWS = require('aws-sdk');

AWS.config.update({
  region: "us-east-1", 
  accessKeyId: "AKIAZI2LFLECPKUY6SOI", 
  secretAccessKey: "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" 
});

const dynamodb = new AWS.DynamoDB.DocumentClient();

module.exports = dynamodb;