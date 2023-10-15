let scrollToTop = document.querySelector(".scroll-to-top"); // Scroll To Top Button

let mainHeader = document.querySelector(".main-header"); // Main Header
let navbarAside = document.querySelector(".main-header .navbar-aside"); // Main Header Aside Navbar

let ourMenu = document.querySelector(".our-menu"); // Our Menu Section In Home Page
let Menu = document.querySelectorAll(".our-menu .menu"); // In Our Menu Section In Home Page

let ourAtmosphere = document.querySelector(".our-atmosphere"); // Our Atmosphere Section In Home Page
let ourAtmosphereH2 = document.querySelector(".our-atmosphere h2"); // h2 In Our Atmosphere Section In Home Page
let ourAtmosphereS1 = document.querySelector(".our-atmosphere .s1"); // Span In Our Atmosphere Section In Home Page

let ourProducts = document.querySelector(".selected-pizzas .our-products"); // In Selected Pizzas Section In Home Page

let ourSale = document.querySelector(".our-sale"); // Our Sale Section In Home Page
let ourSaleH2 = document.querySelector(".our-sale h2"); // h2 In Our Sale Section In Home Page
let ourSaleS1 = document.querySelector(".our-sale .s1"); // Span In Our Sale Section In Home Page

let ourResturant = document.querySelector(".our-resturant"); // Our Resturant Section In Home Page
let ourResturantBoxs = document.querySelectorAll(".our-resturant .box"); // Boxs In Our Resturant Section In Home Page

// Start Scroll To Top Button     >>>>>
scrollToTop.onclick = () => {
    window.scrollTo({
        top: 0,
    });
};
// End Scroll To Top Button     <<<<<

// Start Page Animated On Scroll      >>>>>
window.onscroll = () => {
    // Main Header
    if (window.scrollY >= 50) {
        mainHeader.classList.add("scrolling-header");
        navbarAside.classList.add("hidden");
    } else {
        mainHeader.classList.remove("scrolling-header");
        navbarAside.classList.remove("hidden");
    }
    // Scroll To Top Button
    window.scrollY >= 800
        ? scrollToTop.classList.add("show")
        : scrollToTop.classList.remove("show");
    // Our Menu Section
    if (window.scrollY > ourMenu.offsetTop - 400) {
        Menu.forEach((m) => {
            m.classList.add("show");
        });
    }
    // Our Atmosphere Section
    if (window.scrollY > ourAtmosphere.offsetTop - 400) {
        ourAtmosphereH2.classList.add("show");
        ourAtmosphereS1.classList.add("show");
    }
    // Selected Pizzas Section
    if (window.scrollY > ourProducts.offsetTop - 400) {
        ourProducts.style = "transform: translateX(0); opacity: 1;";
    }
    // Our Sale Section
    if (window.scrollY > ourSale.offsetTop - 400) {
        ourSaleH2.classList.add("show");
        ourSaleS1.classList.add("show");
    }
    // Our Resturant Section
    if (window.scrollY > ourResturant.offsetTop - 400) {
        ourResturantBoxs.forEach((b) => {
            b.classList.add("show");
        });
    }
};
// End Page Animated On Scroll     >>>>>

// Start Swiper Section     >>>>>
// Swiper-Section Customization
let swipers = document.querySelectorAll(".swiper-section .swiper");
let swipersContainer = document.querySelectorAll(
    ".swiper-section .swiper .container"
);
let sidePictures = document.querySelectorAll(
    ".swiper-section .side-slider .picture"
);
let index = 0;

let swipersInterval = setInterval(() => {
    // Pictures Auto Swaping In Swiper-Section
    swaping(swipers, swipersContainer, sidePictures);
}, 5000);

document.addEventListener("click", (e) => {
    // Pictures Manual Swaping In Swiper-Section
    if (e.target.parentElement.parentElement.classList.contains("side-slider") || e.target.parentElement.classList.contains("side-slider")) {
        clearInterval(swipersInterval);
        swaping(swipers, swipersContainer, sidePictures);
    }
});

function swaping(arr1, arr2, arr3) {
    // Swaping Handling Function Inside Swiper-Section
    for (ele of arr1) {
        ele.classList.remove("show");
    }
    for (ele of arr2) {
        ele.classList.remove("show");
    }
    arr1[index].classList.add("show");
    arr2[index].classList.add("show");
    index === 0 ? (index = 1) : (index = 0);
    for (ele of arr3) {
        ele.style.backgroundImage = arr1[index].style.backgroundImage;
    }
}
// End Swiper Section     <<<<<

// Start Favorite Pizza Section     >>>>>
let favoritePizzaForm = document.querySelector(".favorite-pizza form");
let favoritePizzaType = document.getElementById("pizza-type");
let pizzaDetails = document.querySelector(
    ".favorite-pizza .content .pizza-details"
);

favoritePizzaForm.onsubmit = (e) => {
    e.preventDefault();
    fetch("https://private-anon-4101a34f2b-pizzaapp.apiary-mock.com/restaurants/restaurantId/menu?category=Pizza&orderBy=rank")
        .then((response) => response.json())
        .then((response) => {
            pizzaDetails.innerHTML = "";
            for (e of response) {
                if (e.name === favoritePizzaType.value) {
                    for (ele in e) {
                        let pizzaInfo = document.createElement("div");
                        pizzaInfo.className = "pizza-info";
                        if (ele === "price") {
                            pizzaInfo.appendChild(
                                document.createTextNode(
                                    `${ele} is "${e[ele]}$"`
                                )
                            );
                        } else {
                            pizzaInfo.appendChild(
                                document.createTextNode(`${ele} is "${e[ele]}"`)
                            );
                        }
                        pizzaDetails.appendChild(pizzaInfo);
                    }
                }
            }
        });
};
// End Favorite Pizza Section     <<<<<

// Start our Advantages Section     >>>>>
let advantagesContent = document.querySelector(".our-advantages .content");
let fourSwiperButtons = document.querySelectorAll(".our-advantages .four-btns span");
let twoSwiperButtons = document.querySelectorAll(".our-advantages .two-btns span");

fourSwiperButtons.forEach((e, i, myArr) => {
    e.onclick = _ => {
        advantagesSwiper(e, i, myArr, advantagesContent);
    }
});

twoSwiperButtons.forEach((e, i, myArr) => {
    e.onclick = _ => {
        advantagesSwiper(e, i, myArr, advantagesContent);
    }
});

function advantagesSwiper(ele, index, array, parentElement) {
    // Swaping Handling Function Inside Advantages Section
    parentElement.style = `transform: translateX(-${index * parseInt(ele.parentElement.dataset.translate)}%);`;
    array.forEach(e => {
        e.classList.remove("active");
    })
    ele.className = "active";
}
// End our Advantages Section     <<<<<