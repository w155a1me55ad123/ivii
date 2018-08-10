
 var config = {
    apiKey: "AIzaSyDjCI_BOx9EIgmJKTxykX7M-MYjiYC8jS4",
    authDomain: "ivi-l-18d6a.firebaseapp.com",
    databaseURL: "https://ivi-l-18d6a.firebaseio.com",
    projectId: "ivi-l-18d6a",
    storageBucket: "ivi-l-18d6a.appspot.com",
    messagingSenderId: "38615696076"
  };
  firebase.initializeApp(config);
  function getInputVal (id){
    return document.getElementById(id).value
    }
    document.getElementById("contactform").addEventListener("submit",submiteForm)
    
    
    
    function submiteForm(e){
        e.preventDefault()
        //alert("hey")
        var name = getInputVal("name")
        var email  = getInputVal("email")
        var datef = getInputVal("datef")
        var dateto = getInputVal("dateto")
        var  acc = getInputVal("acc")
        var trans=getInputVal("trans")
        var picture =getInputVal("img")
        var  hh = getInputVal("$$")
        var exp = getInputVal("exp")
        var place = getInputVal("place")
    
        console.log(email,name,picture,dateto,acc,trans,exp,hh,datef,place)
        saveMessage(name,email,datef,dateto,acc,trans,hh,exp,picture,place)

        window.location.href="index.html";
    }
    var message = firebase.database().ref("ivi")
    
    function saveMessage(name,email,datef,dateto,acc,trans,hh,exp,img,place){
        var neww = message.push()
        var ww = {
            name:name,
            email: email,
            trans:trans,
            datef:datef,
            dateto:dateto,
            acc:acc,
            hh:hh,
            exp:exp,
            img:img,
            place:place
        }
        neww.set(ww)
    }
    
       
