document.addEventListener("DOMContentLoaded", function() {
    var buton1 = document.getElementById("buton1");
    var buton2 = document.getElementById("buton2");
    var buton1Text = document.querySelector("#buton1 span");
    var valentineMessage = document.getElementById("valentine-message");
    var valentineImage = document.getElementById("valentine-image");
    var newText = document.getElementById("new-text");
    var newImage = document.getElementById("new-image");

    buton2.addEventListener("click", function() {
        var currentWidth = buton1.offsetWidth;
        var currentHeight = buton1.offsetHeight;

        var newWidth = currentWidth * 1.1;
        var newHeight = currentHeight * 1.1;
        buton1.style.width = newWidth + "px";
        buton1.style.height = newHeight + "px";

        var currentFontSize = parseInt(window.getComputedStyle(buton1Text).fontSize);
        var newFontSize = currentFontSize + 1;
        buton1Text.style.fontSize = newFontSize + "px";
    });

    buton1.addEventListener("click", function() {
        buton1.style.display = "none";
        buton2.style.display = "none";
        valentineMessage.style.display = "none";
        valentineImage.style.display = "none";

        setTimeout(function() {
            newText.style.display = "block";
            newImage.style.display = "block";
        }, 300);
    });

    newText.style.display = "none";
    newImage.style.display = "none";
});
