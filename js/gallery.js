document.addEventListener("DOMContentLoaded", function () {
  const images = [
    {
      large: "images/flowers-pink-large.jpg",
      small: "images/flowers-pink-small.jpg",
      caption: "Pink Flowers",
    },
    {
      large: "images/flowers-purple-large.jpg",
      small: "images/flowers-purple-small.jpg",
      caption: "Purple Flowers",
    },
    {
      large: "images/flowers-red-large.jpg",
      small: "images/flowers-red-small.jpg",
      caption: "Red Flowers",
    },
    {
      large: "images/flowers-white-large.jpg",
      small: "images/flowers-white-small.jpg",
      caption: "White Flowers",
    },
    {
      large: "images/flowers-yellow-large.jpg",
      small: "images/flowers-yellow-small.jpg",
      caption: "Yellow Flowers",
    },
  ];

  const thumbnailContainer = document.getElementById("thumbnails");
  const featuredImage = document.getElementById("featured");
  const figcaption = document.querySelector("figcaption");

  images.forEach((image, index) => {
    const li = document.createElement("li");
    const img = document.createElement("img");
    img.src = image.small;
    img.alt = image.caption;
    img.width = 240;
    img.height = 160;
    img.dataset.index = index;

    li.appendChild(img);
    thumbnailContainer.appendChild(li);
  });

  thumbnailContainer.addEventListener("click", function (event) {
    if (event.target.tagName === "IMG") {
      const index = event.target.dataset.index;
      const selectedImage = images[index];
      featuredImage.src = selectedImage.large;
      featuredImage.alt = selectedImage.caption;
      figcaption.textContent = selectedImage.caption;

      document.querySelectorAll("#thumbnails img").forEach((img) => {
        img.classList.remove("active");
      });
      event.target.classList.add("active");
    }
  });
});
