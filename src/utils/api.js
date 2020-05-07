import axios from "axios";

export const fetchTopics = () => {
  return axios
    .get("https://joseph-nc-news.herokuapp.com/api/topics")
    .then(({ data: { topics } }) => {
      return topics;
    });
};

export const getArticles = (topic_slug) => {
  return axios
    .get("https://joseph-nc-news.herokuapp.com/api/articles", {
      params: { topic_slug },
    })
    .then(({ data: { articles } }) => {
      return articles;
    });
};
