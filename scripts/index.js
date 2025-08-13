//console.log("Test the script file is linked");

//Edit button var
const editBtn = document.querySelector(".profile__edit-btn");
const editModule = document.querySelector("#edit-profile-modal");
const editCloseBtn = editModule.querySelector(".modal__close-btn");
//Post button var
const postBtn = document.querySelector(".profile__post-btn");
const postModule = document.querySelector("#new-post-modal");
const postCloseBtn = postModule.querySelector(".modal__close-btn");
//edit module
const profileFormElement = editModule.querySelector(".modal__form"); // Use querySelector();
const profileNameInput = profileFormElement.querySelector(
  "#profile-name-input"
);
const profileJobInput = profileFormElement.querySelector(
  "#profile-description-input"
);
//Profile Elements
const profileNameElement = document.querySelector(".profile__username");
const profileJobElement = document.querySelector(".profile__description");
//Post Elements
const addCardFormElement = postModule.querySelector(".modal__form");
const cardLinkInput = addCardFormElement.querySelector("#card-image-input");
const cardNameInput = addCardFormElement.querySelector("#card-caption");

//Call Functions
function openModal(module) {
  module.classList.add("modal_is-opened");
}

function closeModal(module) {
  module.classList.remove("modal_is-opened");
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileNameElement.textContent = profileNameInput.value;
  profileJobElement.textContent = profileJobInput.value;
  closeModal(editModule);
}

function handleAddCardSubmit(evt) {
  evt.preventDefault();
  console.log(cardLinkInput.value);
  console.log(cardNameInput.value);
  closeModal(postModule);
}

//Related to edit modal
editBtn.addEventListener("click", function () {
  openModal(editModule);
  profileNameInput.value = profileNameElement.textContent;
  profileJobInput.value = profileJobElement.textContent;
});

editCloseBtn.addEventListener("click", function () {
  closeModal(editModule);
});

profileFormElement.addEventListener("submit", handleProfileFormSubmit);

//Related to post modal
postBtn.addEventListener("click", function () {
  openModal(postModule);
});

postCloseBtn.addEventListener("click", function () {
  closeModal(postModule);
});

addCardFormElement.addEventListener("submit", handleAddCardSubmit);
