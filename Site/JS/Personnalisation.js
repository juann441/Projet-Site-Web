fetch("header.html").then(contenu => contenu.text()).then(texte => {document.getElementById("header").innerHTML = texte;})
fetch("footer.html").then(contenu => contenu.text()).then(texte => {document.getElementById("footer").innerHTML = texte;})

produit_id = new URLSearchParams(window.location.search).get("id");
document.getElementById("1").style.display="none";
document.getElementById("2").style.display="none";
document.getElementById("3").style.display="none";

var select = '';
for (i=1;i<=100;i++){
    select += '<option val=' + i + '>' + i + '</option>';
}
$('#some_selectorps5').html(select);
$('#some_selectorxbox').html(select);
$('#some_selectorswitch').html(select);

function getBase64Image(img) {
  var canvas = document.createElement("canvas");
  canvas.width = img.width;
  canvas.height = img.height;

  var ctx = canvas.getContext("2d");
  ctx.drawImage(img, 0, 0);

  var dataURL = canvas.toDataURL("image/png");

  return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
}

if (produit_id=="1"){
  document.title="Manette PS5"
  document.getElementById("1").style.display="block"
  item=[]


  if (localStorage.getItem("idps5")==null){
    idps5=0;
  }
  else {
    idps5=parseInt(localStorage.getItem("idps5"))+1;
  }


  window.onload = function() {origin();};

  canvas = document.getElementById('imageps5');
  context = canvas.getContext('2d');
  imageObj = new Image();

  imageObj.src = 'images/ps5/ps5.png';

  function origin() {
    context.drawImage(imageObj,0,0,canvas.width,canvas.height)
  };

  function imagebase() {
      imageObj.src = "images/ps5/ps5.png";
      imageObj.onload = event => {
          context.drawImage(imageObj,0, 0,canvas.width,canvas.height);
      };
  }

  function draw () {
      context.drawImage(imageObj,0, 0,canvas.width,canvas.height);
  }

  p1=p2=p3=p4=p5=0;

  var jd;
  savejd="noir";
  function joystickd(jd) {
    savejd=jd;
    p1=0;
    if (jd=="rouge") {
      imageObj.src="images/ps5/joydrouge.png";
      imageObj.onload = event => {draw()}
      p1=3
    }
    if (jd=="vert") {
      imageObj.src="images/ps5/joydvert.png";
      imageObj.onload = event => {draw()}
      p1=3
    }
    if (jd=="bleu") {
      imageObj.src="images/ps5/joydbleu.png";
      imageObj.onload = event => {draw()}
      p1=3
    }
    if (jd=="noir") {
      imageObj.src="images/ps5/joyd.png";
      imageObj.onload = event => {draw()}
      p1=0
    }
    calculprix()
  }

  var jg;
  savejg="noir";
  function joystickg(jg) {
    savejg=jg;
    p2=0;
    if (jg=="rouge") {
      imageObj.src="images/ps5/joygrouge.png";
      imageObj.onload = event => {draw()}
      p2=3
    }
    if (jg=="vert") {
      imageObj.src="images/ps5/joygvert.png";
      imageObj.onload = event => {draw()}
      p2=3
    }
    if (jg=="bleu") {
      imageObj.src="images/ps5/joygbleu.png";
      imageObj.onload = event => {draw()}
      p2=3
    }
    if (jg=="noir") {
      imageObj.src="images/ps5/joyg.png";
      imageObj.onload = event => {draw()}
      p2=0
    }
    calculprix()
  }

  var bt;
  var savebt='blanc';
  function btn(bt) {
    savebt=bt;
    p3=0;
    if (bt=="rouge") {
      imageObj.src="images/ps5/btnrouge.png";
      imageObj.onload = event => {draw()}
      p3=5
    }
    if (bt=="vert") {
      imageObj.src="images/ps5/btnvert.png";
      imageObj.onload = event => {draw()}
      p3=5
    }
    if (bt=="bleu") {
      imageObj.src="images/ps5/btnbleu.png";
      imageObj.onload = event => {draw()}
      p3=5
    }
    if (bt=="blanc") {
      imageObj.src="images/ps5/btn.png";
      imageObj.onload = event => {draw()}
      p3=0
    }
    calculprix()
  }

  var back;
  var saveback='blanc';
  function fond(back) {
    saveback=back;
    p4=0;
    if (back=="rouge") {
      imageObj.src="images/ps5/fondrouge.png";
      imageObj.onload = event => {draw()}
      p4=7
    }
    if (back=="vert") {
      imageObj.src="images/ps5/fondvert.png";
      imageObj.onload = event => {draw()}
      p4=7
    }
    if (back=="bleu") {
      imageObj.src="images/ps5/fondbleu.png";
      imageObj.onload = event => {draw()}
      p4=7
    }
    if (back=="blanc") {
      imageObj.src="images/ps5/fond.png";
      imageObj.onload = event => {draw()}
      p4=0
    }
    calculprix()
  }

  var crx;
  var savecroix="blanc";
  function croix(crx) {
    savecroix=crx;
    p5=0;
    if (crx=="rouge") {
      imageObj.src="images/ps5/croixrouge.png";
      imageObj.onload = event => {draw()}
      p5=5
    }
    if (crx=="vert") {
      imageObj.src="images/ps5/croixvert.png";
      imageObj.onload = event => {draw()}
      p5=5
    }
    if (crx=="bleu") {
      imageObj.src="images/ps5/croixbleu.png";
      imageObj.onload = event => {draw()}
      p5=5
    }
    if (crx=="blanc") {
      imageObj.src="images/ps5/croix.png";
      imageObj.onload = event => {draw()}
      p5=0
    }
    calculprix()
  }

  function resetall() {
    imageObj.src="images/ps5/btn.png";
    imageObj.onload = event => {draw();
      imageObj.src="images/ps5/joyg.png";
      imageObj.onload = event => {draw();
        imageObj.src="images/ps5/joyd.png";
        imageObj.onload = event => {draw();
          imageObj.src="images/ps5/fond.png";
          imageObj.onload = event => {draw();
            imageObj.src="images/ps5/croix.png";
            imageObj.onload = event => {draw()};};};};
    };
    p1=p2=p3=p4=p5=0
    calculprix()
  }


  prix=50;
  function calculprix() {
      prix=50 + p1 + p2 + p3 + p4 + p5 ;
      document.getElementById("prixps5").innerHTML = "Prix : " + prix +"€"
  }

  function addcart (){
      quantite=parseInt(document.getElementById("some_selectorps5").value)
      itemps5=new manette("PS5",saveback,savejd,savejg,savebt,savecroix,idps5,quantite,prix);
      item=JSON.stringify(itemps5);
      localStorage.setItem("idps5",idps5)
      localStorage.setItem("panierps5"+idps5,item);
      alert("L'article a été ajouté au panier !")
      bannerImage = document.getElementById('imageps5');
      imgData = getBase64Image(bannerImage);
      localStorage.setItem("imgDataps5"+idps5, imgData);
      idps5=idps5+1;
  }


  class manette{

    constructor(modele,fond,joystickdroit,joystickgauche,bouton,croixdir,idps5,quantite,prix){
        this.modele = modele;
        this.fond = fond;
        this.joystickdroit = joystickdroit;
        this.joystickgauche = joystickgauche;
        this.bouton = bouton;
        this.croixdir = croixdir;
        this.prix = prix;
        this.idps5 = idps5;
        this.quantite = quantite;
    }
  }
}

else if (produit_id=="2"){
  document.title="Manette Xbox X"
  document.getElementById("2").style.display="block"
  item=[]
  if (localStorage.getItem("idxbox")==null){
    idxbox=0;
  }
  else {
    idxbox=parseInt(localStorage.getItem("idxbox"))+1;
  }
  
  
  window.onload = function() {origin();};
  
  canvas = document.getElementById('imagexbox');
  context = canvas.getContext('2d');
  imageObj = new Image();
  
  imageObj.src = 'images/xbox/xbox.png';
  
  function origin() {
  context.drawImage(imageObj,0,0,canvas.width,canvas.height)
  };
  
  function imagebase() {
    imageObj.src = "images/xbox/xbox.png";
    imageObj.onload = event => {
        context.drawImage(imageObj,0, 0,canvas.width,canvas.height);
    };
  }
  
  function draw () {
    context.drawImage(imageObj,0, 0,canvas.width,canvas.height);
  }
  
  p1=p2=p3=p4=p5=0;
  
  var jd;
  savejd="noir";
  function joystickd(jd) {
  savejd=jd;
  p1=0;
  if (jd=="rouge") {
    imageObj.src="images/xbox/xboxjoydrouge.png";
    imageObj.onload = event => {draw()}
    p1=3
  }
  if (jd=="vert") {
    imageObj.src="images/xbox/xboxjoydvert.png";
    imageObj.onload = event => {draw()}
    p1=3
  }
  if (jd=="bleu") {
    imageObj.src="images/xbox/xboxjoydbleu.png";
    imageObj.onload = event => {draw()}
    p1=3
  }
  if (jd=="noir") {
    imageObj.src="images/xbox/xboxjoyd.png";
    imageObj.onload = event => {draw()}
    p1=0
  }
  calculprix()
  }
  
  var jg;
  savejg="noir";
  function joystickg(jg) {
  savejg=jg;
  p2=0;
  if (jg=="rouge") {
    imageObj.src="images/xbox/xboxjoygrouge.png";
    imageObj.onload = event => {draw()}
    p2=3
  }
  if (jg=="vert") {
    imageObj.src="images/xbox/xboxjoygvert.png";
    imageObj.onload = event => {draw()}
    p2=3
  }
  if (jg=="bleu") {
    imageObj.src="images/xbox/xboxjoygbleu.png";
    imageObj.onload = event => {draw()}
    p2=3
  }
  if (jg=="noir") {
    imageObj.src="images/xbox/xboxjoyg.png";
    imageObj.onload = event => {draw()}
    p2=0
  }
  calculprix()
  }
  
  var bt;
  var savebt='blanc';
  function btn(bt) {
  savebt=bt;
  p3=0;
  if (bt=="rouge") {
    imageObj.src="images/xbox/xboxbtnrouge.png";
    imageObj.onload = event => {draw()}
    p3=5
  }
  if (bt=="vert") {
    imageObj.src="images/xbox/xboxbtnvert.png";
    imageObj.onload = event => {draw()}
    p3=5
  }
  if (bt=="bleu") {
    imageObj.src="images/xbox/xboxbtnbleu.png";
    imageObj.onload = event => {draw()}
    p3=5
  }
  if (bt=="blanc") {
    imageObj.src="images/xbox/xboxbtn.png";
    imageObj.onload = event => {draw()}
    p3=0
  }
  calculprix()
  }
  
  var back;
  var saveback='blanc';
  function fond(back) {
  saveback=back;
  p4=0;
  if (back=="rouge") {
    imageObj.src="images/xbox/xboxfondrouge.png";
    imageObj.onload = event => {draw()}
    p4=7
  }
  if (back=="vert") {
    imageObj.src="images/xbox/xboxfondvert.png";
    imageObj.onload = event => {draw()}
    p4=7
  }
  if (back=="bleu") {
    imageObj.src="images/xbox/xboxfondbleu.png";
    imageObj.onload = event => {draw()}
    p4=7
  }
  if (back=="blanc") {
    imageObj.src="images/xbox/xboxfond.png";
    imageObj.onload = event => {draw()}
    p4=0
  }
  calculprix()
  }
  
  var crx;
  var savecroix="blanc";
  function croix(crx) {
  savecroix=crx;
  p5=0;
  if (crx=="rouge") {
    imageObj.src="images/xbox/xboxcroixrouge.png";
    imageObj.onload = event => {draw()}
    p5=5
  }
  if (crx=="vert") {
    imageObj.src="images/xbox/xboxcroixvert.png";
    imageObj.onload = event => {draw()}
    p5=5
  }
  if (crx=="bleu") {
    imageObj.src="images/xbox/xboxcroixbleu.png";
    imageObj.onload = event => {draw()}
    p5=5
  }
  if (crx=="blanc") {
    imageObj.src="images/xbox/xboxcroix.png";
    imageObj.onload = event => {draw()}
    p5=0
  }
  calculprix()
  }
  
  function resetall() {
  imageObj.src="images/xbox/xboxbtn.png";
  imageObj.onload = event => {draw();
    imageObj.src="images/xbox/xboxjoyg.png";
    imageObj.onload = event => {draw();
      imageObj.src="images/xbox/xboxjoyd.png";
      imageObj.onload = event => {draw();
        imageObj.src="images/xbox/xboxfond.png";
        imageObj.onload = event => {draw();
          imageObj.src="images/xbox/xboxcroix.png";
          imageObj.onload = event => {draw()};};};};
  };
  
  p1=p2=p3=p4=p5=0
  calculprix()
  }
  
  
  prix=70;
  function calculprix() {
    prix=70 + p1 + p2 + p3 + p4 + p5 ;
    document.getElementById("prixxbox").innerHTML = "Prix : " + prix +"€"
  }
  
  function addcart (){
    quantite=parseInt(document.getElementById("some_selectorxbox").value);
    itemxbox=new manette("XBOX",saveback,savejd,savejg,savebt,savecroix,quantite,idxbox,prix);
    item=JSON.stringify(itemxbox);
    localStorage.setItem("idxbox",idxbox)
    localStorage.setItem("panierxbox"+idxbox,item);
    bannerImage = document.getElementById('imagexbox');
    imgData = getBase64Image(bannerImage);
    localStorage.setItem("imgDataxbox"+idxbox, imgData);
    idxbox=idxbox+1;
    alert("L'article a été ajouté au panier !")
  }
  
  
  class manette{
  
  constructor(modele,fond,joystickdroit,joystickgauche,bouton,croixdir,quantite,idxbox,prix){
      this.modele = modele;
      this.fond = fond;
      this.joystickdroit = joystickdroit;
      this.joystickgauche = joystickgauche;
      this.bouton = bouton;
      this.croixdir = croixdir;
      this.prix = prix;
      this.idxbox = idxbox;
      this.quantite = quantite;
  }
  }
  
  }
  
else if (produit_id=="3"){
  document.title="Manette Switch"
  document.getElementById("3").style.display="block"
  item=[]
  if (localStorage.getItem("idswitch")==null){
    idswitch=0;
  }
  else {
    idswitch=parseInt(localStorage.getItem("idswitch"))+1;
  }
  
  
  window.onload = function() {origin();};
  
  canvas = document.getElementById('imageswitch');
  context = canvas.getContext('2d');
  imageObj = new Image();
  
  imageObj.src = 'images/switch/switch.png';
  
  function origin() {
  context.drawImage(imageObj,0,0,canvas.width,canvas.height)
  };
  
  function imagebase() {
    imageObj.src = "images/switch/switch.png";
    imageObj.onload = event => {
        context.drawImage(imageObj,0, 0,canvas.width,canvas.height);
    };
  }
  
  function draw () {
    context.drawImage(imageObj,0, 0,canvas.width,canvas.height);
  }
  
  p1=p2=p3=p4=p5=0;
  
  var jd;
  savejd="noir";
  function joystickd(jd) {
  savejd=jd;
  p1=0;
  if (jd=="rouge") {
    imageObj.src="images/switch/switchjoydrouge.png";
    imageObj.onload = event => {draw()}
    p1=3
  }
  if (jd=="vert") {
    imageObj.src="images/switch/switchjoydvert.png";
    imageObj.onload = event => {draw()}
    p1=3
  }
  if (jd=="bleu") {
    imageObj.src="images/switch/switchjoydbleu.png";
    imageObj.onload = event => {draw()}
    p1=3
  }
  if (jd=="noir") {
    imageObj.src="images/switch/switchjoyd.png";
    imageObj.onload = event => {draw()}
    p1=0
  }
  calculprix()
  }
  
  var jg;
  savejg="noir";
  function joystickg(jg) {
  savejg=jg;
  p2=0;
  if (jg=="rouge") {
    imageObj.src="images/switch/switchjoygrouge.png";
    imageObj.onload = event => {draw()}
    p2=3
  }
  if (jg=="vert") {
    imageObj.src="images/switch/switchjoygvert.png";
    imageObj.onload = event => {draw()}
    p2=3
  }
  if (jg=="bleu") {
    imageObj.src="images/switch/switchjoygbleu.png";
    imageObj.onload = event => {draw()}
    p2=3
  }
  if (jg=="noir") {
    imageObj.src="images/switch/switchjoyg.png";
    imageObj.onload = event => {draw()}
    p2=0
  }
  calculprix()
  }
  
  var bt;
  var savebt='blanc';
  function btn(bt) {
  savebt=bt;
  p3=0;
  if (bt=="rouge") {
    imageObj.src="images/switch/switchbtnrouge.png";
    imageObj.onload = event => {draw()}
    p3=5
  }
  if (bt=="vert") {
    imageObj.src="images/switch/switchbtnvert.png";
    imageObj.onload = event => {draw()}
    p3=5
  }
  if (bt=="bleu") {
    imageObj.src="images/switch/switchbtnbleu.png";
    imageObj.onload = event => {draw()}
    p3=5
  }
  if (bt=="blanc") {
    imageObj.src="images/switch/switchbtn.png";
    imageObj.onload = event => {draw()}
    p3=0
  }
  calculprix()
  }
  
  var backg;
  var savebackg='blanc';
  function fondg(backg) {
  savebackg=backg;
  p4=0;
  if (backg=="rouge") {
    imageObj.src="images/switch/switchfondgrouge.png";
    imageObj.onload = event => {draw()}
    p4=7
  }
  if (backg=="vert") {
    imageObj.src="images/switch/switchfondgvert.png";
    imageObj.onload = event => {draw()}
    p4=7
  }
  if (backg=="bleu") {
    imageObj.src="images/switch/switchfondgbleu.png";
    imageObj.onload = event => {draw()}
    p4=7
  }
  if (backg=="orange") {
    imageObj.src="images/switch/switchfondgorange.png";
    imageObj.onload = event => {draw()}
    p4=7
  }
  if (backg=="blanc") {
    imageObj.src="images/switch/switchfondg.png";
    imageObj.onload = event => {draw()}
    p4=0
  }
  calculprix()
  }
  
  
  var backd;
  var savebackd='blanc';
  function fondd(backd) {
  savebackd=backd;
  p6=0;
  if (backd=="rouge") {
    imageObj.src="images/switch/switchfonddrouge.png";
    imageObj.onload = event => {draw()}
    p6=7
  }
  if (backd=="vert") {
    imageObj.src="images/switch/switchfonddvert.png";
    imageObj.onload = event => {draw()}
    p6=7
  }
  if (backd=="bleu") {
    imageObj.src="images/switch/switchfonddbleu.png";
    imageObj.onload = event => {draw()}
    p6=7
  }
  if (backd=="orange") {
    imageObj.src="images/switch/switchfonddorange.png";
    imageObj.onload = event => {draw()}
    p6=7
  }
  if (backd=="blanc") {
    imageObj.src="images/switch/switchfondd.png";
    imageObj.onload = event => {draw()}
    p6=0
  }
  calculprix()
  }
  
  var crx;
  var savecroix="blanc";
  function croix(crx) {
  savecroix=crx;
  p5=0;
  if (crx=="rouge") {
    imageObj.src="images/switch/switchcroixrouge.png";
    imageObj.onload = event => {draw()}
    p5=5
  }
  if (crx=="vert") {
    imageObj.src="images/switch/switchcroixvert.png";
    imageObj.onload = event => {draw()}
    p5=5
  }
  if (crx=="bleu") {
    imageObj.src="images/switch/switchcroixbleu.png";
    imageObj.onload = event => {draw()}
    p5=5
  }
  if (crx=="blanc") {
    imageObj.src="images/switch/switchcroix.png";
    imageObj.onload = event => {draw()}
    p5=0
  }
  calculprix()
  }
  
  function resetall() {
  imageObj.src="images/switch/switchbtn.png";
  imageObj.onload = event => {draw();
    imageObj.src="images/switch/switchjoyg.png";
    imageObj.onload = event => {draw();
      imageObj.src="images/switch/switchjoyd.png";
      imageObj.onload = event => {draw();
        imageObj.src="images/switch/switchfondd.png";
        imageObj.onload = event => {draw();
            imageObj.src="images/switch/switchfondg.png";
            imageObj.onload = event => {draw();
                imageObj.src="images/switch/switchcroix.png";
                imageObj.onload = event => {draw()};};};};};
  };
  p1=p2=p3=p4=p5=p6=0
  calculprix()
  }
  
  
  prix=90;
  function calculprix() {
    prix=90 + p1 + p2 + p3 + p4 + p5 + p6;
    document.getElementById("prixswitch").innerHTML = "Prix : " + prix +"€"
  }
  
  function addcart (){
    quantite=parseInt(document.getElementById("some_selectorswitch").value);
    itemswitch=new manette("SWITCH",savebackg,savebackd,savejd,savejg,savebt,savecroix,idswitch,quantite,prix);
    item=JSON.stringify(itemswitch);
    localStorage.setItem("idswitch",idswitch)
    localStorage.setItem("panierswitch"+idswitch,item);
    bannerImage = document.getElementById('imageswitch');
    imgData = getBase64Image(bannerImage);
    localStorage.setItem("imgDataswitch"+idswitch, imgData);
    idswitch=idswitch+1;
    alert("L'article a été ajouté au panier !")
  }
  
  
  class manette{
  
  constructor(modele,fondd,fondg,joystickdroit,joystickgauche,bouton,croixdir,idswitch,quantite,prix){
      this.modele = modele;
      this.fondd = fondd;
      this.fondg = fondg;
      this.joystickdroit = joystickdroit;
      this.joystickgauche = joystickgauche;
      this.bouton = bouton;
      this.croixdir = croixdir;
      this.prix = prix;
      this.idswitch = idswitch;
      this.quantite = quantite;
  }
  }
  
  function test() {
  document.getElementById("test").innerHTML = itemswitch
  }
  }

else{
  document.title="Perdu"
  document.getElementById("1").style.display="block"
  document.getElementById("1").innerHTML="<br> Ta rien à faire ici ! <br><br> <a href=index.html style='font-style: oblique;'>Retour à la page d'accueil</a>"
}


