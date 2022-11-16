// Initialize Firebase (ADD YOUR OWN DATA)
var config = {
  apiKey: "AIzaSyCIJbGjnr9rcjUqPsCtTlfGrpAyHn4Jxr0",
    authDomain: "add-games.firebaseapp.com",
    databaseURL: "https://add-games-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "add-games",
    storageBucket: "add-games.appspot.com",
    messagingSenderId: "223940707393",
    appId: "1:223940707393:web:a1f559a3247b03debe32c0"
};
firebase.initializeApp(config);

// Reference messages collection
var messagesRef = firebase.database().ref('gamesAdded');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var company = getInputVal('company');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var message = getInputVal('message');

  // Save message
  saveMessage(name, company, email, phone, message);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, company, email, phone, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    company:company,
    email:email,
    phone:phone,
    message:message
  });
}