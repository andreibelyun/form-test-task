import "@fortawesome/fontawesome-free/css/fontawesome.css";
import "@fortawesome/fontawesome-free/css/brands.css";
import "@fortawesome/fontawesome-free/css/solid.css";
import "./index.css";

const form = document.querySelector(".form");
const input = document.querySelector("#phone-input");

const sendPhoneNumber = (number) => {
  const fakeAPI = "https://jsonplaceholder.typicode.com";

  return fetch(`${fakeAPI}/posts`, {
    method: "POST",
    body: JSON.stringify({
      phone: number,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  sendPhoneNumber(input.value)
    .then((res) => {
      if (res.ok) {
        alert("Ваш заказ успешно оформлен.");
        input.value = "";
      } else {
        throw new Error("Something went wrong");
      }
    })
    .catch((err) => {
      alert("Произошла ошибка, попробуйте ещё раз.");
    });
});
