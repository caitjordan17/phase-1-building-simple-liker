// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

document.addEventListener('DOMContentLoaded',() => {
  console.log('Dom content loaded')
  const errorMessage = document.querySelector('#modal')
  errorMessage.classList.add('hidden')
  //findLikes()
  clickListener()
})
//document.getElementsByClassName("like-glyph").addEventListener("click", mimicServerCall);

function clickListener(){
  document.addEventListener('click', (event)=>{
    //if i click on heart, console log "like"
    //otherwise do nothing
    if(event.target.classList[0] === 'like-glyph'){
      mimicServerCall()
        .then((resp) => {
          const activated = event.target.classList.contains('activated-heart');
          if(activated){
            event.target.classList.remove('activated-heart')
            event.target.innerHTML = EMPTY_HEART;
          } else {
            event.target.classList.add('activated-heart')
            event.target.innerHTML = FULL_HEART;
          }
          activated
        })
        .catch((error) => {
          document.querySelector('#modal').classList.remove('hidden');
          setTimeout(() => document.querySelector('#modal').classList.add('hidden'), 3000);
        });
    }
    //console.log(event.target)
    });
  }

// function findLikes(){
//   const likeArr = document.querySelectorAll(".like-glyph")
  
//   likeArr.forEach((singularLike)=> {
//     singularLike.addEventListener('click', ()=> console.log("you found me"))
//   })
// }







//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
