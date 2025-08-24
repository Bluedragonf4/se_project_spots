const initialCards = [
  {
    name: "Golden Gate Bridge",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/7-photo-by-griffin-wooldridge-from-pexels.jpg",
  },
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

//Preview Modal element
const previewModal = document.querySelector("#preview-img");
const previewCloseBtn = previewModal.querySelector(".modal__close-btn");
const previewImgEl = previewModal.querySelector(".modal__image");
const previewCaptionEl = previewModal.querySelector(".modal__caption");

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
//Cards
const cardsTemplate = document.querySelector("#cards__template");
const cardsList = document.querySelector(".cards__list");

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

function getCardElement(data) {
  let cardElement = cardsTemplate.content
    .querySelector(".card")
    .cloneNode(true);
  const cardTitleEl = cardElement.querySelector(".card__title");
  const cardImageEl = cardElement.querySelector(".card__image");
  cardTitleEl.textContent = data.name;
  cardImageEl.alt = data.name;
  cardImageEl.src = data.link;

  const cardLikeBtnEl = cardElement.querySelector(".card__like-btn");
  cardLikeBtnEl.addEventListener("click", () => {
    cardLikeBtnEl.classList.toggle("card__like-btn_liked");
  });

  const cardDeleteBtnEl = cardElement.querySelector(".card__delete-btn");
  cardDeleteBtnEl.addEventListener("click", () => {
    cardElement.remove();
    cardElement = null;
  });

  cardImageEl.addEventListener("click", () => {
    openModal(previewModal);
    previewCaptionEl.textContent = data.name;
    previewImgEl.alt = data.name;
    previewImgEl.src = data.link;
  });

  return cardElement;
}

function handleAddCardSubmit(evt) {
  evt.preventDefault();
  const inputValues = { name: cardNameInput.value, link: cardLinkInput.value };
  const cardElement = getCardElement(inputValues);
  cardsList.prepend(cardElement);
  addCardFormElement.reset();
  closeModal(postModule);
}

function showPreview() {}

//Related to edit modal
editBtn.addEventListener("click", () => {
  openModal(editModule);
  profileNameInput.value = profileNameElement.textContent;
  profileJobInput.value = profileJobElement.textContent;
});

editCloseBtn.addEventListener("click", () => {
  closeModal(editModule);
});

profileFormElement.addEventListener("submit", handleProfileFormSubmit);

//Related to post modal
postBtn.addEventListener("click", () => {
  openModal(postModule);
});

postCloseBtn.addEventListener("click", () => {
  closeModal(postModule);
  addCardFormElement.reset();
});

addCardFormElement.addEventListener("submit", handleAddCardSubmit);

initialCards.forEach(function (item) {
  const cardElement = getCardElement(item);
  cardsList.prepend(cardElement);
});

//Related to preview modal

previewCloseBtn.addEventListener("click", () => {
  closeModal(previewModal);
});
