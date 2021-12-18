
//ADD YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyBKjr8f9-3vzb1vGF5TAYIq0LC-R8briE0",
    authDomain: "kwitter-15a50.firebaseapp.com",
    databaseURL: "https://kwitter-15a50-default-rtdb.firebaseio.com",
    projectId: "kwitter-15a50",
    storageBucket: "kwitter-15a50.appspot.com",
    messagingSenderId: "1062931630266",
    appId: "1:1062931630266:web:c6f6e934c44b1f730e1a83"
  };
  firebase.initializeApp(firebaseConfig)
  function addUser()
  {

user_name=document.getElementById("user_name").value
firebase.database().ref("/").child(user_name).update({

purpose:"adding user"

});
document.getElementById("user_name").value=""
  }