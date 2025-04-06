// BURGER MENU
const burger = document.querySelector(".header_burger");
const menu = document.querySelector(".header_menu");
const menuLinks = document.querySelectorAll(".header_link");

burger.addEventListener("click", () => {
  menu.classList.toggle("active");
  burger.classList.toggle("active");
});

menuLinks.forEach((link) =>
  link.addEventListener("click", () => {
    menu.classList.remove("active");
    burger.classList.remove("active");
  })
);



// FEEDBACK
// const TOKEN = "7917242117:AAHljMdbaq9bFwqgybP5C-MtU6QFJ5uapGw";
// const CHAT_ID ="6004515059";
// const URI_API = `https://api.telegram.org/bot${ TOKEN }/sendMessage`;
// const succes = document.querySelector('.succes');

// document.getElementById('form').addEventListener('submit', function(e) {
//   e.preventDefault();

//   let message = `Заявка з сайту TerivaPro!\n` + `Ім'я: ` + this.name.value + `\n` + `Номер телефону: ` + this.phone.value;

//   axios.post(URI_API, {
//     chat_id: CHAT_ID,
//     parse_mode: 'html',
//     text: message
//   })

//   .then((res) => {
//     succes.classList.remove('disp');
//     document.getElementById("form").reset();
//   })

//   .catch((err) => {
//     console.warn(err);
//   })

// })


$(document).ready(function(){
  $('.rewievs-slider').slick({
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    pauseOnFocus: true,
    pauseOnНover: true,
    touchThreshold: 5,
    autoplay: true
  });
});