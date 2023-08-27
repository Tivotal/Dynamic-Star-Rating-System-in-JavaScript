/* Created by Tivotal */

let btn = document.querySelector("button");
let post = document.querySelector(".post");
let wrapper = document.querySelector(".wrapper");
let editBtn = document.querySelector(".edit");

btn.onclick = () => {
  wrapper.style.display = "none";
  post.style.display = "block";
  editBtn.onclick = () => {
    wrapper.style.display = "block";
    post.style.display = "none";
  };
};
