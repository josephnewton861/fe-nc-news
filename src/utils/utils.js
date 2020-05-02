const formatDate = (articleObj) => {
  if (Object.keys(articleObj).length === 0) return {};

  for (let key in articleObj) {
    const clonedArticle = { ...articleObj };
    console.log(clonedArticle);
    const {
      created_at,
      article_id,
      title,
      author,
      body,
      comment_count,
      topic,
      votes,
    } = clonedArticle.article;

    let oldTimeStamp = created_at;

    console.log(oldTimeStamp);

    let newTimeStamp = new Date(oldTimeStamp);

    let newTime = `${newTimeStamp.getDate()}/${
      newTimeStamp.getMonth() + 1
    }/${newTimeStamp.getFullYear()}`;

    console.log(newTime);

    const newObj = {
      title,
      topic,
      author,
      body,
      votes,
      comment_count,
      newTime,
      article_id,
    };
    // console.log(newObj);
    return newObj;
  }
};

module.exports = { formatDate };
