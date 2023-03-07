const URL = 'https://rekrutacja.webdeveloper.rtbhouse.net/files/banner.json';

let productsContainer = document.querySelector('.products-container');
let activeElementIdx = 0;

const main = () => {
  fetchPhotos();
  setInterval(borderAnimation, 1000);
};

const fetchPhotos = () => {
  fetch(URL)
    .then((res) => res.json())
    .then((data) => {
      const randomProducts = data.offers
        .sort(() => 0.5 - Math.random())
        .slice(0, 4);
      console.log(randomProducts);
      randomProducts.map((product) => {
        const newProduct = createProductCard(product);
        productsContainer.append(newProduct);
      });
      borderAnimation();
    })
    .catch((err) => console.error(err));
};

const createProductCard = (product) => {
  const productCard = document.createElement('div');
  productCard.classList.add('product');

  const productImage = document.createElement('img');
  productImage.setAttribute('src', product.imgURL);
  productImage.setAttribute('alt', product.name);
  productImage.classList.add('product__image');

  const productPrice = document.createElement('span');
  productPrice.textContent = product.price + product.currency;
  productPrice.classList.add('product__price');

  productCard.append(productImage, productPrice);

  return productCard;
};

const borderAnimation = () => {
  const allProducts = document.querySelectorAll('.product');
  allProducts[activeElementIdx].classList.remove('active');
  activeElementIdx === allProducts.length - 1
    ? (activeElementIdx = 0)
    : (activeElementIdx += 1);
  allProducts[activeElementIdx].classList.add('active');
  console.log(activeElementIdx);
};

document.addEventListener('DOMContentLoaded', main);
