
// Activates the image gallery.
// Main task: Attach an event listener to each image
// in the gallery and respond appropriately on click.

function activateGallery() {
    let thumbnails = document.querySelectorAll("#gallery-thumbs img");
    let largeImage = document.querySelector   ("#gallery-photo  img");

    thumbnails.forEach(function(thumbnail) {
        thumbnail.addEventListener("click", function() {
            let dataset = thumbnail.dataset;

            // Set clicked image as main image.
            largeImage.src = dataset.largeVersion;

            // Set alt attribute of main image.
            largeImage.alt = dataset.title;
        });
    });
}

