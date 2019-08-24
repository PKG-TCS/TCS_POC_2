// PoC - Building a Serverless Web App on AWS Services
// Created by Pradeep Gupta

const AWS = require("aws-sdk");
const dynamodb = new AWS.DynamoDB({
  region: "us-east-2",
  apiVersion: "2019-08-20"
});

exports.handler = (event, context, callback) => {
  const params = {
    Item: {
      id: {
        S: event.id
      },
      title: {
        S: event.title
      },
      watchHref: {
        S: event.watchHref
      },
      authorId: {
        S: event.authorId
      },
      length: {
        S: event.length
      },
      category: {
        S: event.category
      }
    },
    TableName: "courses"
  };
  dynamodb.putItem(params, (err, data) => {
    if (err) {
      console.log(err);
      callback(err);
    } else {
      callback(null, {
        id: params.Item.id.S,
        title: params.Item.title.S,
        watchHref: params.Item.watchHref.S,
        authorId: params.Item.authorId.S,
        length: params.Item.length.S,
        category: params.Item.category.S
      });
    }
  });
};
