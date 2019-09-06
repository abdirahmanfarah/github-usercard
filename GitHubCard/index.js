/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
const profileShow = document.querySelector('.cards');

axios
      .get("https://api.github.com/users/abdirahmanfarah")
      .then(response =>{
          console.log(response.data);

          profileShow.appendChild(profileCard(response.data));
          
          // const newProfileCard = profileCard();
          // profileShow.appendChild(newProfileCard);

          // response.data.message.forEach( item => {
          //   const newProfileCard = profileCard(item);
          //   profileShow.appendChild(newProfileCard);
          // });
          
      })
      .catch(err => console.log('No Data: ', err)
      );

      function profileCard(item){

        // Creating Elements 
        const
            newCard = document.createElement('div'),
            newImage = document.createElement('img'),
            cardInfo = document.createElement('div'),
            usersName= document.createElement('h3'),
            usersUserName = document.createElement('p'),
            location = document.createElement('p'),
            profile = document.createElement('p'),
            gitAddress = document.createElement('a'),
            followers = document.createElement('p'),
            following = document.createElement('p'),
            bio = document.createElement('p');
      
            // console.log(newCard);
      
            // Creating Classes 
      
            newCard.classList.add('card');
            cardInfo.classList.add('card-info');
            usersName.classList.add('name');
            usersUserName.classList.add('username');
      
            // Append 
            // profileShow.appendChild(newCard);
            newCard.appendChild(newImage);
            newCard.appendChild(cardInfo);
            cardInfo.appendChild(usersName);
            cardInfo.appendChild(usersUserName);
            cardInfo.appendChild(location);
            cardInfo.appendChild(profile);
            profile.appendChild(gitAddress);
            cardInfo.appendChild(followers);
            cardInfo.appendChild(following);
            cardInfo.appendChild(bio);
      
             //Text Content
             newImage.setAttribute('src', item.avatar_url );
            usersName.textContent = `user: ${item.name}`;
            usersUserName.textContent = `login: ${item.login}`;
            location.textContent = `location: ${item.location}`;
            followers.textContent = `followers: ${item.followers}`;
            following.textContent = `following: ${item.following}`;
            bio.textContent = `bio: ${item.bio}`;
      
            
            return newCard;
      }


/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/


// console.log(profileShow);



/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

// const followersArray = [];

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
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

// const mainH = document.querySelector('.cards');

// console.log(mainH);



// profileCard();

     
// profileCard(git);

// console.log(profileCard());


/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
