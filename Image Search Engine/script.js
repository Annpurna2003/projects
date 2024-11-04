const accessKey = "VK_4wAPS04Ppnj9lF8dAl191Z1st9tFXEfxdJ8Ujp30";

const searchForm = document.getElementById("search-form");
const searchBox = document.getElementById("search-box");
const searchResult = document.getElementById("search-result");
const showMoreBtn = document.getElementById("show-more-btn");

let keyword = "";
let page = 1;

async function searchImages() {
    keyword = searchBox.value;
    const url = `https://api.unsplash.com/search/collections?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;
    const response = await fetch(url);
    const data = await response.json();
    const results = data.results;

    if (page === 1) {
        searchResult.innerHTML = "";
    }

    results.map((result) => {
        // Loop through preview photos to display them
        result.preview_photos.forEach(photo => {
            const image = document.createElement("img");
            image.src = photo.urls.small;
            image.alt = photo.alt_description || "Unsplash Image";
            searchResult.appendChild(image);
            const imageLink = document.createElement("a");
            imageLink.href= result.links.html;
            imageLink.target="_blank";
            imageLink.appendChild(image);
            searchResult.appendChild(imageLink);


        });
    });

    showMoreBtn.style.display = results.length > 0 ? "block" : "none";
}

searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    page = 1;
    searchImages();
});

showMoreBtn.addEventListener("click", () => {
    page++;
    searchImages();
});
