
// Activates the image gallery.
// Main task: Attach an event listener to each image
// in the gallery and respond appropriately on click.

function activateGallery() {
    let thumbnails  = document.querySelectorAll("#gallery-thumbs img");
    let largeImage  = document.querySelector   ("#gallery-photo  img");
    let galleryInfo = document.querySelector   ("#gallery-info");

    let galleryInfoTitle       = galleryInfo.querySelector(".title");
    let galleryInfoDescription = galleryInfo.querySelector(".description");

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

            // Change which thumbnail which is the current one.
            let theClass = "current";

            document.querySelector("." + theClass).classList.remove(theClass);
            thumbnail.parentNode.classList.add(theClass);

            // Update current main image's title and description.
            let largeImageDescription = dataset.description;

            galleryInfoTitle.innerHTML       = largeImageTitle;
            galleryInfoDescription.innerHTML = largeImageDescription;
        });
    });
}

