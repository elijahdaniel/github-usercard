axios
  .get('https://api.github.com/users/elijahdaniel')
  .then (data => {
    const myInfo = data.data;
    const cards = document.querySelector('.cards');
    const cardInfo = myCard(myInfo);
    cards.appendChild(cardInfo);
  })

const cards = document.querySelector('.cards');

const myCard = (info) => {
  const card = document.createElement('div');
  const img = document.createElement('img');
  const cardInfo = document.createElement('div');
  const name = document.createElement('h3');
  const userName = document.createElement('p');
  const location = document.createElement('p');
  const profile = document.createElement('p');
  const profileAnchor = document.createElement('a');
  const followers = document.createElement('p');
  const following = document.createElement('p');
  const bio = document.createElement('p');

  img.classList.add('img')
  card.classList.add('card');
  name.classList.add('name');
  userName.classList.add('username');
  bio.classList.add('p');

  card.appendChild(img);
  card.appendChild(cardInfo);
  cardInfo.appendChild(name);
  cardInfo.appendChild(userName);
  cardInfo.appendChild(location);
  cardInfo.appendChild(profile);
  profile.appendChild(profileAnchor);
  cardInfo.appendChild(followers);
  cardInfo.appendChild(following);
  cardInfo.appendChild(bio);

  img.src = info.avatar_url;
  location.textContent = info.location;
  name.textContent = info.name;
  userName.textContent = info.login;
  const aprofileAnchor = info.html_url;
  profileAnchor.innerHTML = aprofileAnchor.link(info.html_url);
  followers.textContent = `Followers: ${info.followers}`;
  following.textContent = `Following: ${info.following}`;
  bio.textContent = info.bio;

  return card;
}

const followersArray = [
  'benjidoyle',
  'jscamacho',
  'LittleBoGeek',
  'kayladailey',
  'zbtaylor'
];

followersArray.forEach((user) => {
  axios
    .get(`https://api.github.com/users/${user}`)
    .then (data => {
      const myInfo = data.data;
      const cards = document.querySelector('.cards');
      const cardInfo = myCard(myInfo);
      cards.appendChild(cardInfo);
    });
})
