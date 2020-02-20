
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDwLKqgCXR3BXNAvQiEQPDDVIJhA4kaURk",
    authDomain: "antaragni-contact-form.firebaseapp.com",
    databaseURL: "https://antaragni-contact-form.firebaseio.com",
    projectId: "antaragni-contact-form",
    storageBucket: "antaragni-contact-form.appspot.com",
    messagingSenderId: "811481927437"
  };
  firebase.initializeApp(config);


  //reference messages collection
  var messagesRef=firebase.database().ref('messages');




document.getElementById('main-contact-form').addEventListener('submit',submitForm);


function submitForm(e){
    e.preventDefault();


var name=getInputVal('name');

var email=getInputVal('email');

var message=getInputVal('message');

savemessge(name,email,message);

   document.querySelector('.alert').style.display='block';

   setTimeout(function(){
    document.querySelector('.alert').style.display='none';

   },3000);
   document.getElementById('main-contact-form').reset();
}


function getInputVal(id){
    return document.getElementById(id).value;

}


///save message

function savemessge(name,email,message){
    var newMessageRef=messagesRef.push();
    newMessageRef.set({
        name:name,
        email:email,
        message:message
    });

}