function scrollToTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
}

window.onscroll = function() {
    var scrollHeight, totalHeight, scrollY;
    
    scrollHeight = document.body.scrollHeight;
    totalHeight = window.scrollY + window.innerHeight;
    scrollY = window.scrollY;

    if (scrollY > 500 || totalHeight >= scrollHeight) {
        document.getElementById("scrollToTopButton").style.display = "block";
    } else {
        document.getElementById("scrollToTopButton").style.display = "none";
    }
};

document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.getElementById('mobile-menu');
    const navList = document.querySelector('.nav-list');

    menuToggle.addEventListener('click', function() {
        navList.classList.toggle('active');
    })
    
    document.getElementById("mobile-menu").addEventListener("click", function() {
        var navList = document.querySelector("nav ul");
        if (navList.style.display === "block") {
          navList.style.display = "none";
        } else {
          navList.style.display = "block";
        }
      });
      ;
});