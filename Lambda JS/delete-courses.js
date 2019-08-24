// PoC - Building a Serverless Web App on AWS Services
// Created by Pradeep Gupta

const AWS = require("aws-sdk");
const dynamodb = new AWS.DynamoDB({
  region: "us-east-2",
  apiVersion: "2019-08-20"
});

exports.handler = (event, context, callback) => {
  const params = {
    Key: {
      id: {
        S: event.id
      }
    },
    TableName: "courses"
  };
  dynamodb.deleteItem(params, (err, data) => {
    if (err) {
      console.log(err);
      callback(err);
    } else {
      callback(null, data);
    }
  });
};
