function addUser(){
    user_name = document.getElementById("user_name").ariaValueMax;
    localStorage.setItem("user_name" , user_name);
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    window.location = "kwitter_room.html";
}