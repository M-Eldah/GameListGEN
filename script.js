function screamthename(tex, element) {
    console.log(tex);
    items = document.getElementsByClassName('items')
    Array.from(items).forEach(item => { item.classList.remove('activeItem') })
    element.classList.add('activeItem');
    const Carousel = document.getElementById("GalleryInner");
    carouselItems = document.getElementsByClassName("carousel-item")
    Array.from(carouselItems).forEach(item => { Carousel.removeChild(item) })
    tex.gImg.forEach((srcLink, index2) => {
        const ImgHolder = document.createElement('div')
        if (index2 == 0) {
            ImgHolder.className = 'carousel-item active'
        }
        else {
            ImgHolder.className = 'carousel-item'
        }
        ImgHolder.innerHTML = `<img
                                src=${srcLink}
                                class="d-block w-100 h-100" alt="...">`;
        Carousel.appendChild(ImgHolder);
    })
    document.getElementById("GalleryParagraph").innerText = tex.description
}

const holder = document.querySelector('.MotherData');

fetch('./data.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to load JSON: ' + response.status);
        }
        return response.json();
    })
    .then(data => {
        if (!holder) {
            throw new Error('Container .MotherData not found');
        }

        holder.innerHTML = '';

        data.forEach((item, index) => {
            const button = document.createElement('button');
            button.type = 'button';
            button.className = 'd-flex items';
            button.style = `background-image: url(${item.cover});`
            button.innerHTML = `
            <div class='d-flex'>
          <h3 class="mb-1">${item.gName}</h3></div>`;
            button.addEventListener('click', () => screamthename(data[index], button));
            holder.appendChild(button);

        });


    })
    .catch(error => console.error(error));