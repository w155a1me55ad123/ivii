
  
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDjCI_BOx9EIgmJKTxykX7M-MYjiYC8jS4",
    authDomain: "ivi-l-18d6a.firebaseapp.com",
    databaseURL: "https://ivi-l-18d6a.firebaseio.com",
    projectId: "ivi-l-18d6a",
    storageBucket: "ivi-l-18d6a.appspot.com",
    messagingSenderId: "38615696076"
  };
  firebase.initializeApp(config);
var ref = firebase.database().ref("ivi")

ref.once("value").then(function(snapshot){
var tableau = snapshot.val()
for (var i in tableau){
   
    
   
    var email=tableau[i]["email"]
    var name=tableau[i]["name"]
    var datef=tableau[i]["datef"]
    var dateto=tableau[i]["dateto"]
    var trans=tableau[i]["trans"]
    var acc=tableau[i]["acc"]
    var exp=tableau[i]["exp"]
    var hh=tableau[i]["hh"]
    image=tableau[i]["img"]
    bechyodhher='<div class="col" style="border:1px solid white;">' +'<img src="'+image+'"/>'+'<h3> name:'+name+'</h3>'+'<h3>email:'+email+'</h3>'+'<h3>means of transport : '+trans+'</h3>'+'<h3>accomodation :'+acc+'</h3>'
    +'<h3>from : '+datef+' to : '+dateto+'</h3>'+'<h3>it coast : '+hh+'$</h3>'+'<h3> experinces there :  '+exp+'</h3>'+'</div><br>'
    $("#affiche").append(bechyodhher)

}
})
document.getElementById("#tof").addEventListener("mousemove", tofm);

function tofm() {
    document.getElementById("demo").innerHTML = transform(scale)
}

function removeHandler() {
    document.getElementById("myDIV").removeEventListener("mousemove", tofm);
}