let scrollToTop = document.querySelector(".scroll-to-top"); // Scroll To Top Button

let mainHeader = document.querySelector(".main-header"); // Main Header
let navbarAside = document.querySelector(".main-header .navbar-aside"); // Main Header Aside Navbar

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
    window.scrollY >= 500
        ? scrollToTop.classList.add("show")
        : scrollToTop.classList.remove("show");
};
// // End Page Animated On Scroll     >>>>>