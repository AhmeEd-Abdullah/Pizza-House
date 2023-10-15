let scrollToTop = document.querySelector(".scroll-to-top"); // Scroll To Top Button

let mainHeader = document.querySelector(".main-header"); // Main Header
let navbarAside = document.querySelector(".main-header .navbar-aside"); // Main Header Aside Navbar

let aboutUs = document.querySelector(".about-us"); // About Us Section
let aboutUsLists = document.querySelectorAll(".about-us .experience ul li"); // Lists In About Us Section

let ourTeam = document.querySelector(".our-team"); // Our Team Section
let ourTeamMembers = document.querySelector(".our-team .members"); // Members In Our Team Section

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
    // About Us Section
    if (window.scrollY > aboutUs.offsetTop - 300) {
        aboutUsLists.forEach((li) => {
            li.classList.add("show");
        });
    }
    // Our Team Section
    if (window.scrollY > ourTeam.offsetTop - 300) {
        ourTeamMembers.classList.add("show");
    }
};
// // End Page Animated On Scroll     >>>>>

// Start Our History Header     >>>>>
let contentTabs = document.querySelectorAll(".our-history .content .tab");
let listHistoryYears = document.querySelectorAll(
    ".our-history .list-history li"
);
let listHistoryShapes = document.querySelectorAll(
    ".our-history .list-history .shape"
);

listHistoryYears.forEach((e, index, arr) => {
    e.onclick = _ => {
        displaying(listHistoryShapes, contentTabs, index);
    };
});
// End Our History Header     <<<<<

// Start Our Ratings Section     >>>>>
let rating = document.querySelectorAll(".our-ratings .ratings .rating");
let peoplePictures = document.querySelectorAll(
    ".our-ratings .people-pictures .picture"
);

peoplePictures.forEach((e, index) => {
    e.onclick = _ => {
        displaying(peoplePictures, rating, index);
    };
});
// End Our Ratings Section     <<<<<

function displaying(arr1, arr2, i) {
    // Displaying Handling Function
    arr1.forEach((ele) => ele.classList.remove("active"));
    arr1[i].classList.add("active");
    arr2.forEach((ele) => ele.classList.remove("active"));
    arr2[i].classList.add("active");
};
