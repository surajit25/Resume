window.onscroll = function() {
    scrolling();
}


function scrolling() {
    var header = document.querySelector("header");
    header.classList.toggle("scrolly", window.scrollY > 300);
}

/* skip and restore the content */