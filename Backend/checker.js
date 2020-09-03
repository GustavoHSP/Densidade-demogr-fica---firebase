const firebaseConfig = {
    apiKey: "AIzaSyB7RVo08ph6xEEqG8NiqodCTC4ZLQNXzrY",
    authDomain: "densidade-demografica.firebaseapp.com",
    databaseURL: "https://densidade-demografica.firebaseio.com",
    projectId: "densidade-demografica",
    storageBucket: "densidade-demografica.appspot.com",
    messagingSenderId: "942843029691",
    appId: "1:942843029691:web:98e9540864f9c14567e19e",
    measurementId: "G-PXP64Y3T3Y"
  };
  
  firebase.initializeApp(firebaseConfig);
  const userRef = firebase.database().ref("cadastro");



function inserirDados(){


     const txtSjc =  document.getElementById("txtSjc").value;
     const txtLondres = document.getElementById("txtLondres").value;
     const txtJacarei = document.getElementById("txtJacarei").value; 
     const txtSP = document.getElementById("txtSP").value;
     const txtOrlando = document.getElementById("txtOrlando").value; 
     const txtToquio = document.getElementById("txtToquio").value; 
     const txtPalermo =  document.getElementById("txtPalermo").value; 
     const txtEstocolmo = document.getElementById("txtEstocolmo").value; 

     const txtSPCrp = btoa(txtSP);

     const insert = userRef.child(txtSPCrp).push({
        Sjc: txtSjc,
        Londres: txtLondres,
        Jacarei: txtJacarei,
        SP: txtSP,
        Orlando: txtOrlando,
        Toquio: txtToquio,
        Palermo: txtPalermo,
        Estocolmo: txtEstocolmo,
     });
     alert("Densidade demográfica cadastrada em nosso banco de dados, caso haja uma mudança retorne outra hora");
}




function lerDados(){

    const email = document.getElementById("txtSP").value;
    userRef.child(btoa(email)).on("child_added", snap=>{

        document.getElementById("lblSjc").innerHTML = snap.child("Sjc").val();
        document.getElementById("lblLondres").innerHTML = snap.child("Londres").val();
        document.getElementById("lblJacarei").innerHTML = snap.child("Jacarei").val();
        document.getElementById("lblSP").innerHTML = snap.child("SP").val();
        document.getElementById("lblOrlando").innerHTML = snap.child("Orlando").val();
        document.getElementById("lblToquio").innerHTML = snap.child("Toquio").val();
        document.getElementById("lblPalermo").innerHTML = snap.child("Palermo").val();
        document.getElementById("lblEstocolmo").innerHTML = snap.child("Estocolmo").val();
        document.getElementById("txtSjc").value =  snap.child("Sjc").val();
        document.getElementById("txtLondres").value = snap.child("Londres").val();
        document.getElementById("txtJacarei").value = snap.child("Jacarei").val();
        document.getElementById("txtSP").value = snap.child("SP").val();
        document.getElementById("txtOrlando").value =  snap.child("Orlando").val();
        document.getElementById("txtToquio").value = snap.child("Toquio").val();
        document.getElementById("txtPalermo").value = snap.child("Palermo").val();
        document.getElementById("txtEstocolmo").value = snap.child("Estocolmo").val();
    });

}

function excluirDados(){
  const encEmail = btoa(document.getElementById("txtSP").value);
  userRef.child(encEmail).remove();
}

function alterarDados(){
  const atualizacao = {
    Sjc:  document.getElementById("txtSjc").value,
    SP: document.getElementById("txtSP").value,
    Orlando: document.getElementById("txtOrlando").value,
    Jacarei: document.getElementById("txtJacarei").value,
    Toquio: document.getElementById("txtToquio").value,
    Estocolmo: document.getElementById("txtEstocolmo").value,
    Palermo: document.getElementById("txtPalermo").value
  }

  const email = document.getElementById("txtSP").value;
  const encodedEmail = btoa(email.toString());
const newKey =  firebase.database().ref("cadastro").child(encodedEmail).push().key;
  const updateRef =   firebase.database().ref("cadastro").child(encodedEmail);
  const updates = {};
  updates[newKey] = atualizacao;
  updateRef.update(updates);
}