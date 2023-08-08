// Function to handle content drops
function handleDrop(event) {
    event.preventDefault();

    const data = event.dataTransfer.getData("text");
    const dropzone = event.target;
    dropzone.innerHTML = data;
}

// Set up event listeners for dropzones
document.querySelectorAll(".dropzone").forEach(dropzone => {
    dropzone.addEventListener("dragover", event => {
        event.preventDefault();
    });

    dropzone.addEventListener("drop", handleDrop);
});
