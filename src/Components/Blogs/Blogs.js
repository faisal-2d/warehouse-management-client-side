import React from "react";

const Blogs = () => {
  return (
    <div className="text-start">
      <div className="container my-5">
        <article>
          <h3>What is difference between javascript and nodejs?</h3>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Javascript</th>
                <th scope="col">NodeJs</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>	
Javascript is a programming language that is used for writing scripts on the website. </td>
                <td>NodeJS is a Javascript runtime environment.</td>
              </tr>
              <tr>
                <td>Javascript can only be run in the browsers. </td>
                <td>We can run Javascript outside the browser with the help of NodeJS.</td>
              </tr>
            </tbody>
          </table>
        </article>
        <article>
          <h3>
          When should you use nodejs and when should you use mongodb?
          </h3>
          <p>
          Node.js is an interpreter or runtime of JavaScript. Which is built on Chrome's V8 JavaScript engine. NodeJs executes a program.
on the other hand, Mongodb is a No-SQL database. It stores data. It provides high availability of data with automatic, fast, and instant data recovery.
          </p>
        </article>
        <article>
          <h3>What are the differences between SQL and noSQL databases?</h3>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">SQL</th>
                <th scope="col">noSQL</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS)</td>
                <td>Non-relational or distributed database system.</td>
              </tr>
              <tr>
                <td>These databases are not suited for hierarchical data storage.</td>
                <td>These databases are best suited for hierarchical data storage.</td>
              </tr>
              <tr>
                <td>Vertically Scalable</td>
                <td>Horizontally scalable</td>
              </tr>
            </tbody>
          </table>
        </article>
        <article>
          <h3>
          What is the purpose of JWT and how does it work?
          </h3>
          <p>
          JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. It works with encription system.
          </p>
        </article>
      </div>
    </div>
  );
};

export default Blogs;
