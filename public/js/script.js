// import * as dotenv from "dotenv";
// dotenv.config();
// import express from "express";
let accessToken =
  "15042~5aPm1Li9BUEEM1HSraSURhxy4yByeNJ8yW9KGLnPDpdR5V7DUzwFbIVGqNS3z2VW";

let canvasApiUrl =
  "https://courses.bootcampspot.com/api/v1/courses/2756/users?access_token=15042~5aPm1Li9BUEEM1HSraSURhxy4yByeNJ8yW9KGLnPDpdR5V7DUzwFbIVGqNS3z2VW";

fetch(canvasApiUrl, {
  // mode: "no-cors",
  header: "GET",
  headers: {
    Accept: 'application/json',
  },
}).then(
  function(response) {
    console.log(response)
    return response.json();
  },
  // function (rej) {
  //   console.log("promise rejected");
  //   throw "promise rejected";
  // }
);
// fetch(canvasApiUrl, {
//   mode: "no-cors",
//   header: "GET",
// })
//   .then((response) => console.log(response))
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));

// try {
//   const result = JSON.parse("");
//   console.log(result);
// } catch (err) {
//   // 👇️ SyntaxError: Unexpected end of JSON input
//   console.log("error", err);
// }

// This is for the UofO course # and my User #
//   https://courses.bootcampspot.com/courses/2756/users/37897

// this finds all users for a course
// https://courses.bootcampspot.com/api/v1/courses/2756/users

// then get the most recent grade for each of them and sort into groups..
//   Get a users most recently graded submissions /v1/users/{id}/graded_submissions

// list assignments for users
// /api/v1/users/:user_id/courses/:course_id/assignments
