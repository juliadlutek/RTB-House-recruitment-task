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

  return offerCard;
};

document.addEventListener('DOMContentLoaded', fetchOffers);
