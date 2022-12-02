import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
let accessToken =
  "15042~5aPm1Li9BUEEM1HSraSURhxy4yByeNJ8yW9KGLnPDpdR5V7DUzwFbIVGqNS3z2VW";

let canvasApiUrl = `https://courses.bootcampspot.com/api/v1/users/37897/courses?access_token=${accessToken}`;

fetch(canvasApiUrl, {
  mode: "no-cors",
})
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.log(error));

//   https://courses.bootcampspot.com/courses/2756/users/37897
