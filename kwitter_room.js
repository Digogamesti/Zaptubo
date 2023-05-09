const firebaseConfig = {
  apiKey: "AIzaSyCjZLbhxEMJNCXvFwTnwMJPasoLeUBOmFo",
  authDomain: "kwittwer-26386.firebaseapp.com",
  databaseURL: "https://kwittwer-26386-default-rtdb.firebaseio.com",
  projectId: "kwittwer-26386",
  storageBucket: "kwittwer-26386.appspot.com",
  messagingSenderId: "168145921329",
  appId: "1:168145921329:web:e265506606e80e22033c10"
};

firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Bem-vindo(a), " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adicionando nome da sala"
  });

    localStorage.setItem("room_name", room_name);

    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = "";
snapshot.forEach(function(childSnapshot) { childkey = childSnapshot.key;
      Room_names = childkey;
      console.log("Nome da sala: " + Room_names);
    row = "<div class ='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names + "</div><hr>";
    document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "index.html";
}
