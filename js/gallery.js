
// Activates the image gallery.
// Main task: Attach an event listener to each image
// in the gallery and respond appropriately on click.

function activateGallery() {
    let thumbnails = document.querySelectorAll("#gallery-thumbs img");
    let largeImage = document.querySelector   ("#gallery-photo  img");

    thumbnails.forEach(function(thumbnail) {
        thumbnail.addEventListener("click", function() {
            // Get current dataset.
            let dataset = thumbnail.dataset;

            // Obtain main image and title via dataset.
            let largeImageSrc   = dataset.largeVersion;
            let largeImageTitle = dataset.title;

            // Set main image's src, alt and title properties, all-in-one-go.
            Object.assign(largeImage, {
                src:   largeImageSrc,
                alt:   largeImageTitle,
                title: largeImageTitle,
            });
        });
    });
}

