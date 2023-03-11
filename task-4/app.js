const URL =
  'https://rekrutacja.webdeveloper.rtbhouse.net/files/banner_vip.json';

let offersContainer = document.querySelector('.offers-container');

let activeElementIdx = 0;

const fetchOffers = () => {
  fetch(URL)
    .then((res) => res.json())
    .then((data) => {
      data.offers.map((offer) => {
        const newOffer = createOfferCard(offer);
        offersContainer.append(newOffer);
      });
      offersContainer.firstChild.classList.add('offer--active');
      sliderAnimationHandler();
    })
    .catch((err) => console.error(err));
};

const createOfferCard = (offer) => {
  const offerCard = document.createElement('div');
  offerCard.classList.add('offer');
  offerCard.style.backgroundImage = `url(${offer.imgURL})`;

  const offerCountry = document.createElement('div');
  offerCountry.classList.add('offer__country');

  const offerCountryText = document.createElement('span');
  offerCountryText.textContent = offer.country;
  offerCountryText.classList.add('offer__country__text');

  offerCountry.append(offerCountryText);

  const offerCity = document.createElement('div');
  offerCity.classList.add('offer__city');

  const offerCityText = document.createElement('span');
  offerCityText.textContent = offer.city;
  offerCityText.classList.add('offer__city__text');

  offerCity.append(offerCityText);

  const offerPrice = document.createElement('div');
  offerPrice.classList.add('offer__price');

  const fromText = document.createElement('span');
  fromText.textContent = offer.priceText;
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
  bookNowArrowEnd.setAttribute('src', 'assets/arrow.png');

  bookNow.append(bookNowArrowStart, bookNowButton, bookNowArrowEnd);

  offerCard.append(offerCountry, offerCity, offerPrice, bookNow);

  return offerCard;
};

let animationTimeout;

const sliderAnimationHandler = () => {
  setTimeout(() => {
    animationTimeout = setInterval(() => {
      const allOffers = document.querySelectorAll('.offer');
      allOffers[activeElementIdx].classList.remove('offer--active');
      activeElementIdx === allOffers.length - 1
        ? clearInterval(animationTimeout)
        : (activeElementIdx += 1);
      allOffers[activeElementIdx].classList.add('offer--active');
    }, 5000);
  }, 3000);
};

document.addEventListener('DOMContentLoaded', fetchOffers);
