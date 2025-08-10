console.log("Test the script file is linked");

const editBtn = document.querySelector(".profile__edit-btn");
const editModule = document.querySelector("#edit-profile-modal");
const editCloseBtn = editModule.querySelector(".modal__close-btn");

const postBtn = document.querySelector(".profile__post-btn");
const postModule = document.querySelector("#new-post-modal");
const postCloseBtn = postModule.querySelector(".modal__close-btn");

editBtn.addEventListener("click", function () {
  editModule.classList.add("modal_is-opened");
});

editCloseBtn.addEventListener("click", function () {
  editModule.classList.remove("modal_is-opened");
});

postBtn.addEventListener("click", function () {
  postModule.classList.add("modal_is-opened");
});

postCloseBtn.addEventListener("click", function () {
  postModule.classList.remove("modal_is-opened");
});
