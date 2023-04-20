const burgerMenu = document.querySelector(".nav__burger");
const navList = document.querySelector(".nav__list");

 burgerMenu.addEventListener("click", () => {
       
        burgerMenu.classList.toggle("_active");
        navList.classList.toggle("_active");
    })


const openButton = document.querySelector(".modal__open");  
const closeButton = document.querySelector(".modal__close");  

openButton.addEventListener("click", () => {
        const modalContainer = document.querySelector('.modal__wrapper');
        modalContainer.classList.add('_active');
        document.body.style.overflow = 'hidden'; // to disable scrolling
})

closeButton.addEventListener("click", () => {
        const modalContainer = document.querySelector('.modal__wrapper');
        modalContainer.classList.remove('_active');
        document.body.style.overflow = 'auto'; // to enable scrolling again
      });


const form = document.querySelector('.article__form');
const container = document.querySelector('.articles__wrapper');
  
    form.addEventListener('submit', (event) => {
      event.preventDefault(); 

    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const imageFile = document.getElementById('image').files[0];

    const articleWrapper = document.createElement('div');
    articleWrapper.classList.add('article__wrapper');

    const articleImage = document.createElement('div');
    articleImage.classList.add('article__image');

    const articleImg = document.createElement('img');
    articleImage.appendChild(articleImg);

    const reader = new FileReader();
    reader.readAsDataURL(imageFile);
    reader.onload = () => {
      articleImg.setAttribute('src', reader.result);
      console.log(reader.result)
    };
   
    const articleTitle = document.createElement('h2');
    articleTitle.classList.add('article__title');
    articleTitle.textContent = title;

    const articleInfo = document.createElement('p');
    articleInfo.classList.add('article__info');
    articleInfo.textContent = description;

    articleWrapper.appendChild(articleImage);
    articleWrapper.appendChild(articleTitle);
    articleWrapper.appendChild(articleInfo);

    container.appendChild(articleWrapper);

    form.reset();

    const modalContainer = document.querySelector('.modal__wrapper');
    modalContainer.classList.remove('_active');
    document.body.style.overflow = 'auto'; // to enable scrolling again
    
  });
    


  