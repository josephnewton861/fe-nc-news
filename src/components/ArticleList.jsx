import React, { Component } from "react";

class ArticleList extends Component {
  state = {
    articles: [
      {
        article_id: 8,
        title: "Express.js: A Server-Side JavaScript Framework",
        body:
          "You’re probably aware that JavaScript is the programming language most often used to add interactivity to the front end of a website, but its capabilities go far beyond that—entire sites can be built on JavaScript, extending it from the front to the back end, seamlessly. Express.js and Node.js gave JavaScript newfound back-end functionality—allowing developers to build software with JavaScript on the server side for the first time. Together, they make it possible to build an entire site with JavaScript: You can develop server-side applications with Node.js and then publish those Node.js apps as websites with Express. Because Node.js itself wasn’t intended to build websites, the Express framework is able to layer in built-in structure and functions needed to actually build a site. It’s a pretty lightweight framework that’s great for giving developers extra, built-in web application features and the Express API without overriding the already robust, feature-packed Node.js platform. In short, Express and Node are changing the way developers build websites.",
        votes: 0,
        topic: "coding",
        author: "cooljmessy",
        created_at: "2016-06-30T06:59:39.654Z",
        comment_count: "7",
      },
      {
        article_id: 17,
        title: "Which current Premier League manager was the best player?",
        body:
          "Premier League managers work with some of the top players in world football - but were they any good in their day? From European Cup and league title winners to one manager who only played at university, there's a diverse range of experience among the top-flight bosses. We've taken a look at the playing achievements and ability of the current Premier League managers and ranked them. Read on to see who ranks where...",
        votes: 0,
        topic: "football",
        author: "cooljmessy",
        created_at: "2016-07-12T21:43:31.740Z",
        comment_count: "12",
      },
      {
        article_id: 1,
        title: "Running a Node App",
        body:
          "This is part two of a series on how to get up and running with Systemd and Node.js. This part dives deeper into how to successfully run your app with systemd long-term, and how to set it up in a production environment.",
        votes: 0,
        topic: "coding",
        author: "jessjelly",
        created_at: "2016-08-18T12:07:52.389Z",
        comment_count: "8",
      },
      {
        article_id: 14,
        title: "Who Will Manage Your Club in 2021?",
        body:
          "Managerial changes are too common in the modern day game. Already in the 16/17 season, we have seen 14 managers lose their job from the Premier League to League Two. Swansea’s Francesco Guidolin became the first top division manager to lose his job but already question marks are raised regarding the future of the likes of David Moyes and Mike Phelan.",
        votes: 0,
        topic: "football",
        author: "happyamy2016",
        created_at: "2016-08-25T17:08:25.177Z",
        comment_count: "3",
      },
    ],
  };
  render() {
    const { articles } = this.state;
    return <main></main>;
  }
}

// title and related topic as the only shown render parts

export default ArticleList;
