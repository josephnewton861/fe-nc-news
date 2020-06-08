

# NC News FE React-App 

#### This project highlights everything learned during the frontend section of the Northcoders bootcamp. It includes using my backend server, react, css and bootstrap to create a responsive web application using routers and links. The App gives frontend access containing articles, comments, topics and the logged in user.

### Getting Started

#### View the hosted backend API on Heruko on the following link: https://joseph-nc-news.herokuapp.com/api/

#### View the hosted frontend application on Netify on the following link: https://jn-news.netlify.app/ 

### Available Endpoints

#### “https://jn-news.netlify.app/”.
##### Responds with the home page of the app displaying a navbar with available topics and all the articles available on the site displayed as cards, which are responsive depending on the users screen size.

#### “https://jn-news.netlify.app/articles/coding”. 
##### Responds with a filtered article list corresponding to coding.

#### “https://jn-news.netlify.app/article/1”.
##### Responds with a single article. Displaying the chosen articles title, author current votes, current comments date of publication and the article_id itself.

#### “https://jn-news.netlify.app/article/1”. 
##### User is able to interact and view comments if the so with with a show/hide button feature. 
##### Additionally the user if they like/dislike the chosen article can vote up or down that article for one time only.

#### “https://jn-news.netlify.app/article/1”. 
##### If user clicks read comments. Responds with a list of comments that relate to the chosen article. 

##### Furthermore, if the user chooses to read the comments they can submit their own on their feeling towards the chosen article. This when submitted will add the new comment to the top of the comments list. The user can also increase/decrease votes accordingly one time only.

##### Finally, If the user decides that they no longer want to publish the comment they can choose to delete the comment, however only if it relates to the user that is logged in. If the user mistakenly clicks the delete button they will be asked for additional verification through a prompt that they do indeed want to delete the article so that they understand the consequences of deletion. Or alternatively can abort the deletion the delete button was mistakenly pressed and go back the list of comments for the chosen article. 

### Additional functionality I would like to implement in the future:
##### Pagination on the showing of articles and comments on a specific article, as currently there is quite a long list of articles. Pagination would make it easier for the user to navigate around pages

##### Hamburger that can show or hide the topics the articles can be filtered by. This would look clearer to the user if they are using a smart phone instead of a desktop.
