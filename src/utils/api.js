import axios from "axios";

export const fetchTopics = () => {
  return axios
    .get("https://joseph-nc-news.herokuapp.com/api/topics")
    .then(({ data: { topics } }) => {
      return topics;
    });
};

export const getArticles = (topic_slug, sort_by) => {
  return axios
    .get("https://joseph-nc-news.herokuapp.com/api/articles", {
      params: { topic: topic_slug, sort_by: sort_by },
    })
    .then(({ data: { articles } }) => {
      return articles;
    });
};

export const getSingleArticle = (article_id) => {
  return axios
    .get(`https://joseph-nc-news.herokuapp.com/api/articles/${article_id}`)
    .then(({ data: { article } }) => {
      return article;
    });
};

export const getCommentsByArticleId = (article_id) => {
  return axios
    .get(
      `https://joseph-nc-news.herokuapp.com/api/articles/${article_id}/comments`
    )
    .then(({ data: { comments } }) => {
      return comments;
    });
};

export const postComment = (article_id, newComment) => {
  return axios
    .post(
      `https://joseph-nc-news.herokuapp.com/api/articles/${article_id}/comments`,
      newComment
    )
    .then(({ data }) => {
      return data.comment;
    });
};
export const removeCommentsByCommentId = (comment_id) => {
  return axios.delete(
    `https://joseph-nc-news.herokuapp.com/api/comments/${comment_id}`
  );
};

export const updateVotes = (type, comment_id, voteChange) => {
  return axios.patch(
    `https://joseph-nc-news.herokuapp.com/api/${type}/${comment_id}`,
    {
      inc_votes: voteChange,
    }
  );
};
