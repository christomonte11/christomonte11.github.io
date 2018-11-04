
// Activates the image gallery.
// Main task: Attach an event listener to each image
// in the gallery and respond appropriately on click.

function activateGallery() {
    // Obtain general gallery colunms' info.
    let thumbnails  = document.querySelectorAll("#gallery-thumbs img");
    let largeImage  = document.querySelector   ("#gallery-photo  img");
    let galleryInfo = document.querySelector   ("#gallery-info");

    let galleryInfoTitle       = galleryInfo.querySelector(".title");
    let galleryInfoDescription = galleryInfo.querySelector(".description");

    thumbnails.forEach(function(thumbnail) {
        // Get current dataset.
        let dataset = thumbnail.dataset;

        // Obtain main image, title and description via dataset.
        let largeImageSrc         = dataset.largeVersion;
        let largeImageTitle       = dataset.title;
        let largeImageDescription = dataset.description;

        // The class name marking the current thumbnail.
        let theClass = "current";

        // When clicking on a new thumbnail image on the live site, you might
        // notice a slight delay before the main image appears in the center.
        // This is because, unlike the thumbnails, the large versions haven’t
        // been downloaded yet.

        // It’s a common practice to prevent this small but annoying delay by
        // preloading the images in the background, thereby putting them into
        // the browser cache - a task we can accomplish with JavaScript.

        // The trick is to create a new Image object and assign it the src of
        // the main image corresponding to each thumbnail forcing the browser
        // to download all the large images - before the page is even loaded.

        // Preload the large images.
        let largeVersion = new Image();
        largeVersion.src = largeImageSrc;

        thumbnail.addEventListener("click", function() {
            // Set main image's src, alt and title properties, all-in-one-go.
            Object.assign(largeImage, {
                src:   largeImageSrc,
                alt:   largeImageTitle,
                title: largeImageTitle,
            });

            // Change which thumbnail which is the current one.
            document.querySelector("." + theClass).classList.remove(theClass);
            thumbnail.parentNode.classList.add(theClass);

            // Update current main image's title and description.
            galleryInfoTitle.innerHTML       = largeImageTitle;
            galleryInfoDescription.innerHTML = largeImageDescription;
        });
    });
}

