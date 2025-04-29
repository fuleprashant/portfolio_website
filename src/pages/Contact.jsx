import React, { useState } from "react";
import html from "../images/html 2.png";
import css from "../images/css 2.png";
import javascript from "../images/javscript 2.png";
import tailwindcss from "../images/tailwinnd css.png";
import react from "../images/react pic.png";
import redux from "../images/redux.png";
import reacthookform from "../images/reacthookform.png";
import formik from "../images/formik.png";

// for backend
import node from "../images/node.png";
import express from "../images/express.png";

//for databasr

import mysql from "../images/mysql.png";
import mongodb from "../images/mongodb.png";
import aws from "../images/aws.png";
import { FaMinus, FaPlus } from "react-icons/fa6";

const response = [
  {
    name: "Web Development",
    value: [
      {
        id: 1,
        path: html,
        title: "HTML Basics",
        description: "Learn the structure of web pages using HTML.",
      },
      {
        id: 2,
        path: css,
        title: "CSS Fundamentals",
        description: "Style your web pages with modern CSS techniques.",
      },
      {
        id: 3,
        path: javascript,
        title: "JavaScript Essentials",
        description: "Make your websites interactive with JavaScript.",
      },
      {
        id: 4,
        path: react,
        title: "React Mastery",
        description: "Build powerful front-end apps using React.js.",
      },
    ],
  },
  {
    name: "Backend Development",
    value: [
      {
        id: 1,
        path: node,
        title: "Node.js Introduction",
        description: "Learn server-side programming with Node.js.",
      },
      {
        id: 2,
        path: express,
        title: "Express.js Framework",
        description: "Develop APIs and servers easily using Express.js.",
      },
      {
        id: 3,
        path: tailwindcss,
        title: "GraphQL Basics",
        description: "Efficiently query APIs using GraphQL.",
      },
    ],
  },
  {
    name: "Databases",
    value: [
      {
        id: 1,
        path: mongodb,
        title: "MongoDB Fundamentals",
        description: "NoSQL database for modern web applications.",
      },
      {
        id: 2,
        path: mysql,
        title: "MySQL Basics",
        description: "Relational database management with MySQL.",
      },
      {
        id: 3,
        path: redux,
        title: "PostgreSQL Essentials",
        description: "Advanced SQL and database management.",
      },
    ],
  },
  {
    name: "DevOps",
    value: [
      {
        id: 1,
        path: reacthookform,
        title: "Docker for Beginners",
        description: "Learn containerization with Docker.",
      },
      {
        id: 2,
        path: formik,
        title: "Kubernetes Basics",
        description: "Manage containerized apps with Kubernetes.",
      },
      {
        id: 3,
        path: aws,
        title: "AWS Cloud Introduction",
        description: "Deploy and manage applications on AWS.",
      },
    ],
  },
];

console.log(response);
const Contact = () => {
  return <div>contact</div>;
};

export default Contact;
