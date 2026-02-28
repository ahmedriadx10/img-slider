const photos = ["photo-1.jpg", "photo-2.jpg", "photo-3.jpg",'drone-1.jpg','drone-2.jpg'];

const imgContainer = document.getElementById("img-container");
let clickCount = 0;
const img = document.getElementById("img-node");

imgContainer.addEventListener("click", (event) => {
  const sliderButton = event.target;

  if (sliderButton.classList.contains("left-btn")) {
   


if(clickCount>0){
   clickCount--
  img.setAttribute('src',`./assets/${photos[clickCount]}`)
  sliderButton.nextElementSibling.removeAttribute('disabled')
}
else{
  sliderButton.setAttribute('disabled',true)
}


  } else if (sliderButton.classList.contains("right-btn")) {
    console.log("right clicked");
    clickCount++;
    if (clickCount < photos.length) {
      if (clickCount === photos.length - 1)
        sliderButton.setAttribute("disabled", true);
    }
    img.setAttribute("src", `./assets/${photos[clickCount]}`);
    sliderButton.previousElementSibling.removeAttribute('disabled')
  }
});
