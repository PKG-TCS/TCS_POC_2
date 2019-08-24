// PoC - Building a Serverless Web App on AWS Services
// Created by Pradeep Gupta

const AWS = require("aws-sdk");
const dynamodb = new AWS.DynamoDB({
  region: "us-east-2",
  apiVersion: "2019-08-20"
});

exports.handler = (event, context, callback) => {
  const params = {
    TableName: "courses"
  };
  dynamodb.scan(params, (err, data) => {
    if (err) {
      console.log(err);
      callback(err);
    } else {
      const courses = data.Items.map(item => {
        return {
          id: item.id.S,
          title: item.title.S,
          watchHref: item.watchHref.S,
          authorId: item.authorId.S,
          length: item.length.S,

