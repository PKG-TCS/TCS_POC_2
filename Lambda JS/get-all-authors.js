// PoC - Building a Serverless Web App on AWS Services
// Created by Pradeep Gupta

const AWS = require("aws-sdk");
const dynamodb = new AWS.DynamoDB({
  region: "us-east-2",
  apiVersion: "2019-08-20"
});

exports.handler = (event, context, callback) => {
  const params = {
    TableName: "authors"
  };
  dynamodb.scan(params, (err, data) => {
    if (err) {
      console.log(err);
      callback(err);
    } else {
      
      const authors = data.Items.map(item => 
      {
      return { id: item.id.S, firstName: item.firstName.S, lastName: item.lastName.S };
      }
      );
      callback(null, data);
    }
  });
};

