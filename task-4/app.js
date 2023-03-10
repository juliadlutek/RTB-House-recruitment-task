const URL =
  'https://rekrutacja.webdeveloper.rtbhouse.net/files/banner_vip.json';

let offersContainer = document.querySelector('.offers-container');

const fetchOffers = () => {
  fetch(URL)
    .then((res) => res.json())
    .then((data) => {
      data.offers.map((offer) => {
        const newOffer = createOfferCard(offer);
        offersContainer.append(newOffer);
      });
    })
    .catch((err) => console.error(err));
};

const createOfferCard = (offer) => {
  const offerCard = document.createElement('div');
  offerCard.classList.add('offer');
  offerCard.style.backgroundImage = `url(${offer.imgURL})`;

  const offerCountry = document.createElement('div');
  offerCountry.textContent = offer.country;
  offerCountry.classList.add('offer__country');

  const offerCity = document.createElement('div');
  offerCity.textContent = offer.city;
  offerCity.classList.add('offer__city');

  const offerPrice = document.createElement('div');
  offerPrice.classList.add('offer__price');

  const fromText = document.createElement('span');
  fromText.textContent = 'from';
  fromText.classList.add('offer__price__from');

  const priceText = document.createElement('span');
  priceText.textContent = `${offer.price} ${offer.currency}`;
  priceText.classList.add('offer__price__price');

  offerPrice.append(fromText, priceText);

  const bookNow = document.createElement('div');
  bookNow.classList.add('offer__book-now');

  const bookNowArrowStart = document.createElement('div');
  bookNowArrowStart.classList.add('offer__book-now__arrow__start');

  const bookNowButton = document.createElement('button');
  bookNowButton.textContent = 'Book now';
  bookNowButton.classList.add('offer__book-now__button');

  const bookNowArrowEnd = document.createElement('img');
  bookNowArrowEnd.classList.add('offer__book-now__arrow__end');
  bookNowArrowEnd.setAttribute('src', 'arrow.png');

  bookNow.append(bookNowArrowStart, bookNowButton, bookNowArrowEnd);

  offerCard.append(offerCountry, offerCity, offerPrice, bookNow);

  return offerCard;
};

document.addEventListener('DOMContentLoaded', fetchOffers);
