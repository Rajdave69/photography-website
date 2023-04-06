function populateImageGallery(image, title) {
  /*
  <div class="image-box">
    <img src="images/img-1.jpg" alt="img.jpg" />
  </div>
  */

  const imageBox = document.createElement("div");
  imageBox.classList.add("image-box");
  const _image = document.createElement("a");
  _image.href = "./images/" + image;
  _image.setAttribute("data-lightbox", `image-${image}`);
  _image.setAttribute("data-title", title || image);
  const img = document.createElement("img");
  img.src = "./images/" + image;
  img.alt = image;
  _image.appendChild(img);

  imageBox.appendChild(_image);

  return imageBox;
}

document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM fully loaded and parsed");
  let images = [];
  for (let i = 1; i < 90; i++) {
    images.push("f (" + i + ").jpg");
  }

  images.forEach((image) => {
    const imageBox = populateImageGallery(image);
    document.getElementById("image-gallery").appendChild(imageBox);
  });
});
