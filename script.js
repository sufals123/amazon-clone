document.addEventListener("DOMContentLoaded", () => {
    let pictures = [];
    let noOfPhotos = 6;
    let currentImge = 0;

    for (let i = 1; i <= noOfPhotos; i++) {
        pictures.push(`img/img-${i}.jpg`);
    }

    setInterval(() => {
        currentImge++;
        if (currentImge >= noOfPhotos) {
            currentImge = 0;
        }
        document.querySelector(".body-img").src = pictures[currentImge];
    }, 5000);

    let img = [];
    let numberOfPhotos = 23;

    for (let i = 1; i <= numberOfPhotos; i++) {
        img.push(`img-2/img-${i}.jpg`);
    }

    const imgContainer = document.querySelector(".best-sellers");

    for (let i = 1; i <= numberOfPhotos; i++) {
        const imgElement = document.createElement("img");
        imgElement.className = "best-sellers-inner";
        imgElement.src = img[i - 1];
        imgContainer.append(imgElement);
    }

    const slider = document.querySelector(".best-sellers");

    slider.addEventListener("mouseenter", () => {
        slider.style.animationPlayState = "paused";
    });

    slider.addEventListener("mouseleave", () => {
        slider.style.animationPlayState = "running";
    });
});
