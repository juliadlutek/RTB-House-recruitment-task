const URL = 'https://rekrutacja.webdeveloper.rtbhouse.net/files/banner.json';

const main = () => {
  fetchPhotos();
  productsContainer = document.querySelector('.products-container');
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

document.addEventListener('DOMContentLoaded', main);
