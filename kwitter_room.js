var firebaseConfig = {
      apiKey: "AIzaSyD_i_pIyMEvqfoLls_ZmKZj8N-YeqQCBds",
      authDomain: "kwitter-75b55.firebaseapp.com",
      databaseURL: "https://kwitter-75b55-default-rtdb.firebaseio.com",
      projectId: "kwitter-75b55",
      storageBucket: "kwitter-75b55.appspot.com",
      messagingSenderId: "741492998903",
      appId: "1:741492998903:web:41a7d2f313f67ab79c89f2",
      measurementId: "G-QNR09E59S4"
    };
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);
 
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
