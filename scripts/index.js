const initialCards = [
  {
    name: "Val Thorens",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/1-photo-by-moritz-feldmann-from-pexels.jpg",
  },
  {
    name: "Restaurant terrace",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/2-photo-by-ceiline-from-pexels.jpg",
  },
  {
    name: "An outdoor cafe",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/3-photo-by-tubanur-dogan-from-pexels.jpg",
  },
  {
    name: "A very long bridge, over the forest and through the trees",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/4-photo-by-maurice-laschet-from-pexels.jpg",
  },
  {
    name: "Tunnel with morning light",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/5-photo-by-van-anh-nguyen-from-pexels.jpg",
  },
  {
    name: "Mountain house",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/6-photo-by-moritz-feldmann-from-pexels.jpg",
  },
];

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

initialCards.forEach(function (item) {
  console.log(item.name);
});
