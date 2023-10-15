// Start Main Header     >>>>>

// Toggel Menu & Toggel Pictuers
let navbarMain = document.querySelector(".main-header .navbar-main ul"); // Main Header Main Navbar
let mobileNavbar = document.querySelector(".main-header .mobile-navbar"); // Main Header Mobile Navbar

let toggelMenu = document.querySelector(".main-header .toggel-menu");
let toggelPictures = document.querySelector(".main-header .toggel-pictures");
let closeIcon = document.querySelector(".main-header .close-icon");
let toggelPicture = document.querySelectorAll(
    ".main-header .toggel-pictures .picture"
);
let iconTimeout;

toggelMenu.addEventListener("click", () => {
    toggelMenu.classList.add("hidden");
    toggelPictures.classList.add("show");
    iconTimeout = setTimeout(() => {
        closeIcon.classList.add("apperence");
    }, 400);
});

closeIcon.addEventListener("click", () => {
    setTimeout(() => {
        clearTimeout(iconTimeout);
        toggelPictures.classList.remove("show");
        toggelMenu.classList.remove("hidden");
    }, 0);
    closeIcon.classList.remove("apperence");
});

// Create Overlay When Toggel Picture is clicked
let popupOverlay = document.createElement("div");
popupOverlay.classList.add("popup-overlay");

let popupPictuer = document.createElement("div");
popupPictuer.classList.add("popup-pictuer");

let popImg = document.createElement("img");

let closeSpan = document.createElement("span");
closeSpan.appendChild(document.createTextNode("x"));
closeSpan.className = "close-span";

toggelPicture.forEach((picture) => {
    picture.onclick = () => {
        let imageName = picture.innerHTML.substr(
            picture.innerHTML.indexOf("proj"),
            10
        );
        let picturesArray = [
            "project-1-",
            "project-2-",
            "project-3-",
            "project-4-",
            "project-5-",
            "project-6-",
        ];

        popImg.src = `./images/${imageName}1200x800-original.jpg`;

        let picturesControl = document.createElement("div");
        picturesControl.className = "pictures-control";

        for (pic of picturesArray) {
            let pictureInControl = document.createElement("div");
            pictureInControl.className = "picture-in-control";
            let img = document.createElement("img");
            img.src = `./images/${pic}195x164.jpg`;
            pictureInControl.appendChild(img);
            if (pic !== imageName) {
                img.classList.add("notselected-img");
                img.parentElement.classList.add("notselected-picture");
            } else {
                img.parentElement.classList.add("active");
            }
            picturesControl.appendChild(pictureInControl);
        }
        popupPictuer.appendChild(closeSpan);
        popupPictuer.appendChild(popImg);
        popupOverlay.appendChild(popupPictuer);
        popupOverlay.appendChild(picturesControl);
        document.body.appendChild(popupOverlay);
    };
});

document.addEventListener("click", (e) => {
    // When The Picture inside Pictures Control Box is Clicked
    if (e.target.classList.contains("notselected-img")) {
        let imgs = document.querySelectorAll(".picture-in-control img");
        for (image of imgs) {
            image.classList.add("notselected-img");
            image.parentElement.classList.remove("active");
        }
        e.target.classList.remove("notselected-img");
        e.target.parentElement.classList.add("active");

        let SelectedImageName = e.target.src.substr(
            e.target.src.indexOf("proj"),
            10
        );
        popImg.src = `./images/${SelectedImageName}1200x800-original.jpg`;
    }
});

document.addEventListener("click", (e) => {
    // Remove Overlay
    if (e.target.className === "close-span") {
        e.target.parentElement.parentElement.remove();
    } else if (e.target.className === "popup-overlay") {
        e.target.remove();
    }
});

// Mobile-Navbar Customization in Mobile Screen
mobileNavbar.onclick = function () {
    this.classList.toggle("active");
    if (this.classList.contains("active")) {
        navbarAside.classList.add("show");
        navbarMain.classList.add("show");
    } else {
        navbarAside.classList.remove("show");
        navbarMain.classList.remove("show");
    }
};
// End Main Header      <<<<<