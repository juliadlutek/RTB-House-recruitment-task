const URL = 'https://rekrutacja.webdeveloper.rtbhouse.net/files/banner.json';

let productsContainer = document.querySelector('.products-container');
let activeElementIdx = 0;

const fetchPhotos = () => {
  fetch(URL)
    .then((res) => res.json())
    .then((data) => {
      const randomProducts = data.offers
        .sort(() => 0.5 - Math.random())
        .slice(0, 4);

      randomProducts.map((product) => {
        const newProduct = createProductCard(product);
        productsContainer.append(newProduct);
      });

      borderAnimationHandler();
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

const borderAnimationHandler = () => {
  const allProducts = document.querySelectorAll('.product');
  let borderInterval = setInterval(borderAnimation, 2000);

  [...allProducts].map((product, idx) => {
    product.addEventListener('mouseover', () => {
      clearInterval(borderInterval);
      allProducts[activeElementIdx].classList.remove('product--active');
      activeElementIdx = idx;
      allProducts[activeElementIdx].classList.add('product--active');
    });

    product.addEventListener('mouseout', () => {
      borderInterval = setInterval(borderAnimation, 2000);
    });
  });
};

const borderAnimation = () => {
  const allProducts = document.querySelectorAll('.product');
  allProducts[activeElementIdx].classList.remove('product--active');

  activeElementIdx === allProducts.length - 1
    ? (activeElementIdx = 0)
    : (activeElementIdx += 1);

  allProducts[activeElementIdx].classList.add('product--active');
};

document.addEventListener('DOMContentLoaded', fetchPhotos);
