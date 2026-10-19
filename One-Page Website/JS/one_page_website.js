const modal = document.getElementById("salonLightbox");
const modalImg = document.getElementById("lightboxTargetImage");

// Function triggered when thumbnail image clicked
function openLightbox(imageSrc) {
    modal.style.display = "flex";
    modalImg.src = imageSrc;
}

// Function triggered when closed (x) button clicked
function closeLightbox() {
    modal.style.display = "none";
}

//Close lightbox automatically if user clicks background overlay instead of image
modal.addEventListener("click", function(event) {
    if (event.target === modal) {
        closeLightbox();
    }
})