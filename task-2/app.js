const URL = 'https://rekrutacja.webdeveloper.rtbhouse.net/files/banner.json';

let productsContainer = document.querySelector('.products-container');
let activeElementIdx = 0;

const fetchPhotos = () => {
  fetch(URL)
    .then((res) => res.json())
    .then((data) => {
      const randomProducts = data.offers
        .sort(() => 0.5 - Math.random())
        .slice(0, 3);
      randomProducts.map((product) => {
        const newProduct = createProductCard(product);
        productsContainer.append(newProduct);
      });
      productsContainer.firstChild.classList.add('active');
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

  const productName = document.createElement('span');
  productName.textContent = product.name;
  productName.classList.add('product__name');

  const productPrice = document.createElement('span');
  productPrice.textContent = product.price + product.currency;
  productPrice.classList.add('product__price');

  const productButton = document.createElement('button');
  productButton.textContent = 'Check';
  productButton.classList.add('product__button');

  productCard.append(productImage, productName, productPrice, productButton);

  return productCard;
};

document.addEventListener('DOMContentLoaded', fetchPhotos);
