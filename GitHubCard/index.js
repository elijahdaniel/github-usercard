/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

axios
  .get('https://api.github.com/users/elijahdaniel')
  .then(res => {
    console.log(res.data);
    const card = myCard(res.data);
    const cards = document.querySelector('.cards');
    cards.appendChild(card);
  })
  .catch(err => console.log(err));

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github notes! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

function myCard(user) {
  const card = document.createElement('div');
  card.classList.add('card');

  const photo = document.createElement('img');
  photo.setAttribute('src', `${user.avatar_url}`);

  const notes = document.createElement('div');
  notes.classList.add('card-notes');

  const name = document.createElement('h3');
  name.textContent = `Elijah`;
  name.classList.add('name');

  const userName = document.createElement('p');
  userName.textContent = user.login;
  userName.classList.add('username');

  const location = document.createElement('p');
  location.textContent = `Location: ${user.location}`;

  const linkText = document.createElement('p');
  linkText.textContent = 'Profile: ';

  const link = document.createElement('a');
  link.href = user.html_url;
  link.textContent = `https://github.com/${user.login}`;

  const followers = document.createElement('p');
  followers.textContent = `Followers: ${user.followers}`;

  const following = document.createElement('p');
  following.textContent = `Following: ${user.following}`;

  const bio = document.createElement('p');
  bio.textContent = `Bio: ${user.bio || 'none'}`;

  card.appendChild(photo);
  card.appendChild(notes);
  notes.appendChild(name);
  notes.appendChild(userName);
  notes.appendChild(location);
  notes.appendChild(linkText);
  linkText.appendChild(link);
  notes.appendChild(followers);
  notes.appendChild(following);
  notes.appendChild(bio);

  return card;
}

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = []

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class='card'>
  <img src={image url of user} />
  <div class='card-notes'>
    <h3 class='name'>{users name}</h3>
    <p class='username'>{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
