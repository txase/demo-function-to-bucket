const AWS = require('aws-sdk');
const s3 = new AWS.S3();

exports.handler = async (event, context) => {
  // Log the event argument for debugging and for use in local development.
  console.log(JSON.stringify(event, undefined, 2));

  console.log(process.env.BUCKET_NAME);

  await s3.upload({
    Bucket: process.env.BUCKET_NAME,
    Key: 'hello-world.txt',
    Body: 'Hello World! I was placed here by Stackery!'
  }).promise();

  return {};
};
