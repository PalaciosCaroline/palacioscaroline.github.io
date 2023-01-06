import { displayModal } from '../utils/contactForm.js';

function updateTotalLikes(numberToAdd) {
  const totalDOM = document.querySelector('.totalLikesTitle');
  const newTotal = parseInt(totalDOM.textContent, 10) + numberToAdd;
  totalDOM.textContent = newTotal;
}

export default function PageMediaFactory(photograph, data) {
  const pictureVideo = `../../../assets/assetsProjet6/${data.photographerId}/${data.video}`;
  const pictureImg = `../../../assets/assetsProjet6/${data.photographerId}/${data.image}`;

  function getUserHeaderDOM() {
    const header = document.querySelector('.photograph-header');
    const contactbtn = document.querySelector('.contact_button');
    const article = document.createElement('article');
    const h1 = document.createElement('h1');
    h1.ariaLabel = photograph.name;
    h1.tabIndex = 0;
    h1.textContent = photograph.name;
    const h2 = document.createElement('h2');
    h2.textContent = `${photograph.city}, ${photograph.country}`;
    h2.classList.add('photograph_city');
    h2.tabIndex = 0;
    const legende = document.createElement('p');
    legende.textContent = photograph.tagline;
    const divPortrait = document.createElement('div');
    divPortrait.classList.add('divPortrait');
    const imgChoisi = document.createElement('img');
    divPortrait.appendChild(imgChoisi);
    imgChoisi.setAttribute('src', `../../../assets/assetsProjet6/photographers/photographers_ID_Photos/${photograph.portrait}`);
    imgChoisi.alt = '';
    header.appendChild(article);
    article.appendChild(h1);
    article.appendChild(h2);
    article.appendChild(legende);
    header.appendChild(divPortrait);
    divPortrait.parentNode.insertBefore(contactbtn, divPortrait);
    contactbtn.addEventListener('click', displayModal);
    return article;
  }
  function getMediaCardDOM() {
    const article = document.createElement('article');
    article.classList.add('card');
    const divmedia = document.createElement('div');
    divmedia.classList.add('card_media');
    article.appendChild(divmedia);
    const a = document.createElement('a');
    divmedia.appendChild(a);
    a.className = 'link_card';
    a.rel = 'lightbox';
    a.title = `${data.title}.${data.description}.vers l'affichage en grand`;
    a.setAttribute('id', `${data.title}`);
    if (data.image) {
      a.setAttribute('href', `../../../assets/assetsProjet6/${data.photographerId}/${data.image}`);
      const imgphoto = document.createElement('img');
      imgphoto.classList.add('cardImg');
      imgphoto.setAttribute('src', pictureImg);
      imgphoto.alt = '';
      a.appendChild(imgphoto);
    } else if (data.video) {
      a.setAttribute('href', `../../../assets/assetsProjet6/${data.photographerId}/${data.video}`);
      const iconVideo = document.createElement('icon');
      divmedia.appendChild(iconVideo);
      iconVideo.className = 'fa-regular fa-circle-play iconVideo';
      const imgphoto = document.createElement('video');
      imgphoto.classList.add('cardImg');
      imgphoto.setAttribute('src', pictureVideo);
      a.appendChild(imgphoto);
    }
    const divtext = document.createElement('div');
    divtext.classList.add('card_text');
    const titlemedia = document.createElement('h3');
    titlemedia.textContent = data.title;
    const btnLikes = document.createElement('button');
    btnLikes.classList.add('btnLikes');
    const btnLiketitle = document.createElement('span');
    const btnAccess = document.createElement('span');
    btnAccess.classList.add('sr-only');
    btnAccess.textContent = 'likes, donner un like à l\'oeuvre';
    btnLiketitle.classList.add('likestitle');
    btnLiketitle.textContent = data.likes;
    const heart = document.createElement('i');
    heart.className = 'far fa-heart heart';

    article.appendChild(divtext);
    divtext.appendChild(titlemedia);
    divtext.appendChild(btnLikes);
    btnLikes.appendChild(btnLiketitle);
    btnLikes.appendChild(heart);
    btnLikes.appendChild(btnAccess);

    btnLikes.addEventListener('click', () => {
      if (btnLikes.dataset.liked !== 'true') {
        btnLiketitle.textContent = parseInt(btnLiketitle.textContent, 10) + 1;
        btnLikes.dataset.liked = true;
        heart.classList.remove('effectSmall');
        btnAccess.textContent = 'likes, like ajoutés,retirer un like à l\'oeuvre';
        heart.className = 'fas fa-heart heart';
        heart.classList.add('effectBig');
        updateTotalLikes(+1);
      } else {
        btnLiketitle.textContent = parseInt(btnLiketitle.textContent, 10) - 1;
        heart.classList.remove('effectBig');
        btnAccess.textContent = 'likes, donner un like à l\'oeuvre';
        heart.className = 'far fa-heart heart';
        heart.classList.add('effectSmall');
        btnLikes.dataset.liked = false;
        updateTotalLikes(-1);
      }
    });
    return article;
  }

  function getTotalLikes() {
    const totallikes = data
      .map((item) => item.likes)
      .reduce((prev, curr) => prev + curr, 0);
    const TotalLikessum = document.createElement('article');
    TotalLikessum.tabIndex = 0;
    const divlike = document.createElement('div');
    TotalLikessum.classList.add('cardLikes');
    const totalLiketitle = document.createElement('span');
    totalLiketitle.ariaRoleDescription = 'nombre total';
    totalLiketitle.classList.add('totalLikesTitle');
    totalLiketitle.textContent = totallikes;
    totalLiketitle.ariaRoleDescription = 'likes';
    const heart2 = document.createElement('img');
    heart2.setAttribute('src', '../../../assets/assetsProjet6/icons/heartblack.png');
    heart2.alt = 'likes totals';
    const pricejour = document.createElement('span');
    pricejour.textContent = `${photograph.price}€ / jour`;
    const btnLikeTarifAccess = document.createElement('span');
    btnLikeTarifAccess.classList.add('sr-only');
    btnLikeTarifAccess.textContent = 'tarif du photographe';
    TotalLikessum.appendChild(divlike);
    divlike.appendChild(totalLiketitle);
    divlike.appendChild(heart2);
    divlike.appendChild(btnLikeTarifAccess);
    TotalLikessum.appendChild(pricejour);
    return TotalLikessum;
  }
  return { getUserHeaderDOM, getMediaCardDOM, getTotalLikes };
}
