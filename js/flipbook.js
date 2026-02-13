document.addEventListener("DOMContentLoaded", function() {
    const flipbookContainer = document.getElementById("flipbook");
    const images = [];
    for (let i = 1; i <= 18; i++) {
        images.push(`images/${i}.png`);
    }

    let currentPage = 0;

    function showPage(page) {
        flipbookContainer.innerHTML = `<img src="${images[page]}" alt="Page ${page + 1}" />`;
    }

    function nextPage() {
        if (currentPage < images.length - 1) {
            currentPage++;
            showPage(currentPage);
        }
    }

    function prevPage() {
        if (currentPage > 0) {
            currentPage--;
            showPage(currentPage);
        }
    }

    document.getElementById("next").addEventListener("click", nextPage);
    document.getElementById("prev").addEventListener("click", prevPage);

    showPage(currentPage);

    const audio = new Audio("music/background.mp3");
    audio.loop = true;
    audio.play();
});