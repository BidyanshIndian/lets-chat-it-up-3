var firebaseConfig = {
    apiKey: "AIzaSyDOn2wB_1FNhfZAikCUIxyzfFG41NkXZF4",
    authDomain: "let-s-chat-up.firebaseapp.com",
    databaseURL: "https://let-s-chat-up-default-rtdb.firebaseio.com",
    projectId: "let-s-chat-up",
    storageBucket: "let-s-chat-up.appspot.com",
    messagingSenderId: "988861679539",
    appId: "1:988861679539:web:a159a1efca3feacbf72dc6"
  };
  
  firebase.initializeApp(firebaseConfig);

function addUser()
{
  user_name = document.getElementById("user_name").value;
  firebase.database().ref("/").child(user_name).update({
    purpose : "adding user"
  });
}
