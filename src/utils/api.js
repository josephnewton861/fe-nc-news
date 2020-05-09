import axios from "axios";

export const fetchTopics = async () => {
  const response = await axios.get(
    "https://joseph-nc-news.herokuapp.com/api/topics"
  );
  return response.data.topics;
};

export const getArticles = async (topic_slug, sort_by) => {
  const response = await axios.get(
    "https://joseph-nc-news.herokuapp.com/api/articles",
    {
      params: { topic: topic_slug, sort_by: sort_by },
    }
  );
  return response.data.articles;
};

export const getSingleArticle = async (article_id) => {
  const response = await axios.get(
    `https://joseph-nc-news.herokuapp.com/api/articles/${article_id}`
  );
  return response.data.article;
};

export const getCommentsByArticleId = async (article_id) => {
  const response = await axios.get(
    `https://joseph-nc-news.herokuapp.com/api/articles/${article_id}/comments`
  );
  return response.data.comments;
};

export const postComment = async (article_id, newComment) => {
  const response = await axios.post(
    `https://joseph-nc-news.herokuapp.com/api/articles/${article_id}/comments`,
    newComment
  );
  return response.data.comment;
};

export const removeCommentsByCommentId = async (comment_id) => {
  await axios.delete(
    `https://joseph-nc-news.herokuapp.com/api/comments/${comment_id}`
  );
};

export const updateVotes = async (type, comment_id, voteChange) => {
  await axios.patch(
    `https://joseph-nc-news.herokuapp.com/api/${type}/${comment_id}`,
    {
      inc_votes: voteChange,
    }
  );
};
