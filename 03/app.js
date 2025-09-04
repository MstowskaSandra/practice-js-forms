const ul = document.querySelector(".images-list");
const input = document.querySelector('input');
const prototype = document.querySelector('.images-list__item--prototype');

input.addEventListener('change', showImages);

function showImages(e) {
    const files = e.target.files;
    
    for (let i = 0; i < files.length; i++) {
        const file = files[i];

        if(!file.type.includes('image')) continue;

        const clone = prototype.cloneNode(true);
        clone.classList.remove('images-list__item--prototype');

        clone.querySelector('.images-list__item-name').innerText = file.name;

        const img = clone.querySelector('.images-list__item-img');
        img.src = URL.createObjectURL(file);

        clone.querySelector('.images-list__item-size').innerText =
            (file.size / (1024 * 1024)).toFixed(2) + "MB";

        ul.appendChild(clone);
    }
}