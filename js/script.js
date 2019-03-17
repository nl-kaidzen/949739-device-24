var link_write = document.querySelector(".write-us");
var link_map = document.querySelector(".contacts-map");
var letter_popup = document.querySelector(".modal-letter");
var map_popup = document.querySelector(".modal-map");
var letter_close = document.querySelector(".letter-close");
var map_close = document.querySelector(".map-close");

var form = document.querySelector(".form-letter");
var username = document.querySelector("[name=contact-data]");
var e_mail = document.querySelector("[name=contact-email]");
var text_subject = document.querySelector("[name=subject]");

var isStorageSupport = true;
var un_storage = ""; /*Хранилище Username*/
var em_storage = ""; /*Хранилище email*/

try {
  un_storage = localStorage.getItem("username");
} catch (err) {
  isStorageSupport = false;
}

try {
  em_storage = localStorage.getItem("e_mail");
} catch (err_1) {
  isStorageSupport = false;
}

link_write.addEventListener("click", function (evt) {
  evt.preventDefault();
  letter_popup.classList.add("modal-show");
  if (un_storage) {
    username.value = un_storage;
    e_mail.focus();
  } else {
    username.focus();
  }
  if (em_storage) {
    e_mail.value = em_storage;
    text_subject.focus();
  }
});

link_map.addEventListener("click", function (evt) {
  evt.preventDefault();
  map_popup.classList.add("modal-show");
})

letter_close.addEventListener("click", function (evt) {
  evt.preventDefault();
  letter_popup.classList.remove("modal-show");
  letter_popup.classList.remove("modal-error");

});

map_close.addEventListener("click", function (evt) {
  evt.preventDefault();
  map_popup.classList.remove("modal-show");
});

form.addEventListener("submit", function (evt) {
  if (!username.value || !e_mail.value) {
    evt.preventDefault();
    letter_popup.classList.remove("modal-error");
    letter_popup.offsetWidth = letter_popup.offsetWidth;
    letter_popup.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("username", username.value);
      localStorage.setItem("e_mail", e_mail.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (letter_popup.classList.contains("modal-show")) {
      letter_popup.classList.remove("modal-show");
      letter_popup.classList.remove("modal-error");
    }
    if (map_popup.classList.contains("modal-show")) {
      map_popup.classList.remove("modal-show");
    }
  }
});
