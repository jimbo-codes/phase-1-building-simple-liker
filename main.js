// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
let likes = document.getElementsByClassName("like-glyph");
for (like of likes){
  like.addEventListener("click", (e) => fakeserver(e));
}

function fakeserver(e){
mimicServerCall()
  .then(() => {
    if(e.target.textContent === FULL_HEART){
    e.target.classList.remove('activated-heart')
    e.target.textContent = EMPTY_HEART;
    }
    else{
    e.target.classList.add('activated-heart')
    e.target.textContent = FULL_HEART;
    console.log('server worked')}})  
    .catch((error) => {
    console.error('Random server error');
  message = document.getElementById('modal');
  message.classList.remove('hidden');
  document.getElementById('modal-message').textContent = error;
  console.log(document.getElementById('modal'));
  setTimeout(() => message.classList.add('hidden'), 3000)
  // let er = 
  })
}

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
