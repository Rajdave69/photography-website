function loadImage(image) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = `./images/lowres/${image}`;
    img.onload = () => resolve(img);
    img.onerror = reject;
  });
}

function populateImageGallery(low_res_image, high_res_image, title) {
  // Create a container for the image
  const imageBox = document.createElement("div");
  imageBox.classList.add("image-box");

  // Create a link to the high-resolution image with a title
  const _image = document.createElement("a");
  _image.href = `./images/highres/${high_res_image}`;
  _image.setAttribute("data-lightbox", `image-${high_res_image}`);
  _image.setAttribute("data-title", title || low_res_image);

  // Create a placeholder image element with alt text
  const imgPlaceholder = document.createElement("img");
  imgPlaceholder.src = "placeholder.png";
  imgPlaceholder.alt = low_res_image;
  _image.appendChild(imgPlaceholder);

  // Load the low-resolution image and replace the placeholder image with it
  loadImage(low_res_image)
    .then((img) => {
      _image.removeChild(imgPlaceholder);
      _image.appendChild(img);
    })
    .catch((err) => console.error(err));

  // Append the link to the container
  imageBox.appendChild(_image);

  // Return the container
  return imageBox;
}

// Wait for the DOM to be fully loaded before running the code
document.addEventListener("DOMContentLoaded", function() {
  console.log("DOM fully loaded and parsed");

  // Loop through the image filenames in reverse order and create an image gallery for each one
  for (let i = 101; i > 0; i--) {
    const image = `${i}.webp`;
    const high_res_image = `${i}.jpg`;
    const imageBox = populateImageGallery(image, high_res_image);
    document.querySelector("#image-gallery").appendChild(imageBox);
  }
});
