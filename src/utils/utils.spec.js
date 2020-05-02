const { formatDate } = require("./utils");

describe("formatDate()", () => {
  test("Returns an empty object if an article has no input", () => {
    const article = {};

    const actual = formatDate(article);

    const expected = {};

    expect(actual).toEqual(expected);
  });
  test("Returns an object with the date appropriately formated", () => {
    const article = {
      article: {
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
    };

    const actual = formatDate(article);

    const expected = {
      article_id: 1,
      title: "Running a Node App",
      body:
        "This is part two of a series on how to get up and running with Systemd and Node.js. This part dives deeper into how to successfully run your app with systemd long-term, and how to set it up in a production environment.",
      votes: 0,
      topic: "coding",
      author: "jessjelly",
      newTime: "18/8/2016",
      comment_count: "8",
    };

    expect(actual).toEqual(expected);
  });
  test("Does not mutate the original object", () => {
    const article = {
      article: {
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
    };

    const actual = formatDate(article);

    expect(actual).toEqual({
      article: {
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
    });
  });
});
