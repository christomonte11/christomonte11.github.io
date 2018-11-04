
// Activates the image gallery.
// Main task: Attach an event listener to each image
// in the gallery and respond appropriately on click.

function activateGallery() {
    let thumbnails = document.querySelectorAll("#gallery-thumbs img");
    let largeImage = document.querySelector   ("#gallery-photo  img");

    thumbnails.forEach(function(thumbnail) {
        thumbnail.addEventListener("click", function() {
            // Set clicked image as main image.
            let newImageSrc = thumbnail.dataset.largeVersion;
            largeImage.setAttribute("src", newImageSrc);

            // Set alt attribute of main image.
            let newImageAlt = thumbnail.dataset.title;
            largeImage.setAttribute("alt", newImageAlt);
        });
    });
}

