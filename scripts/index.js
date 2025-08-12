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
const profilejobInput = profileFormElement.querySelector(
  "#profile-description-input"
);
//Profile Elements
const profileNameElement = document.querySelector(".profile__username");
const profileJobElement = document.querySelector(".profile__description");
//Post Elements
const addCardFormElement = postModule.querySelector(".modal__form");
const cardLinkInput = addCardFormElement.querySelector("#card-image-input");
const cardNameInput = addCardFormElement.querySelector("#card-caption");

function delay(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}
//Related to edit modal
editBtn.addEventListener("click", function () {
  editModule.classList.add("modal_is-opened");
  profileNameInput.value = profileNameElement.textContent;
  profileJobInput.value = profileJobElement.textContent;
});

async function closeEditModal() {
  editModule.classList.add("modal_is-closed");
  await delay(1000);
  editModule.classList.remove("modal_is-closed");
  editModule.classList.remove("modal_is-opened");
}

editCloseBtn.addEventListener("click", closeEditModal);

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileNameElement.textContent = profileNameInput.value;
  profileJobElement.textContent = profileJobInput.value;
  closeEditModal();
}

profileFormElement.addEventListener("submit", handleProfileFormSubmit);

//Related to post modal
postBtn.addEventListener("click", function () {
  postModule.classList.add("modal_is-opened");
});

async function closePostModal() {
  postModule.classList.add("modal_is-closed");
  await delay(1000);
  postModule.classList.remove("modal_is-closed");
  postModule.classList.remove("modal_is-opened");
}

postCloseBtn.addEventListener("click", closePostModal);

function handleAddCardSubmit(evt) {
  evt.preventDefault();
  console.log(cardLinkInput.value);
  console.log(cardNameInput.value);
  closePostModal();
}

addCardFormElement.addEventListener("submit", handleAddCardSubmit);
