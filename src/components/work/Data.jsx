import tictactoe from "../../assets/tictactoe.png";
import ecommerce from "../../assets/ecommerce.jpg";
//import recipe from "../../assets/recipe.jpg";
import blog from "../../assets/blog.jpg";
import notes from "../../assets/notes.jpg";
import quiz from "../../assets/quiz.jpg";

export const projectsData = [
  {
    id: 1,
    image: quiz,
    url: "https://samsmindsprint.netlify.app/",
    title: "Quiz App",
    category: "web",
  },
  {
    id: 2,
    image: notes,
    url: "https://my-notevault.netlify.app/",
    title: "Notes Vault",
    category: "web",
  },
  {
    id: 3,
    image: blog,
    url: "https://penned.netlify.app/",
    title: "Penned",
    category: "web",
  },
  // {
  //   id: 4,
  //   image: recipe,
  //   url: "https://sams-recipe-app.netlify.app/",
  //   title: "Recipe",
  //   category: "web",
  // },
  {
    id: 5,
    image: ecommerce,
    url: "https://sams-ecommerce-website.netlify.app/",
    title: "E-Commerce",
    category: "web",
  },
  {
    id: 6,
    image: tictactoe,
    url: "https://samuel-tic-tac-toe.netlify.app/",
    title: "Tic-Tac-Toe",
    category: "web",
  },
];

export const projectsNav = [
  {
    name: "all",
  },
  {
    name: "web",
  },
  {
    name: "app",
  },
  {
    name: "design",
  },
];
