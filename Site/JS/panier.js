fetch("header.html").then(contenu => contenu.text()).then(texte => {document.getElementById("header").innerHTML = texte;})
fetch("footer.html").then(contenu => contenu.text()).then(texte => {document.getElementById("footer").innerHTML = texte;})

prixtot=0;
prixpanier=0;
prixexpress=0;
fdl=0;

function recupadress() {
    adress = document.getElementById("adresse").value;
    console.log("1")
    fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(adress)}.json?access_token=pk.eyJ1IjoiYXJ0aHVwIiwiYSI6ImNrdW5zZ3JjMjBidnIyd3FybGZmeWgydm8ifQ.MEgNYhco5LuBrDYGmKn8OQ`)
        .then(res => res.json())
        .then(data => {
            coord = data.features[0].center;
            long=coord[0];
            lat=coord[1];
            fetch(`https://api.mapbox.com/directions/v5/mapbox/driving/${encodeURIComponent(long)}%2C${encodeURIComponent(lat)}%3B4.8593999%2C45.7611438?alternatives=true&geometries=geojson&steps=true&access_token=pk.eyJ1IjoiYXJ0aHVwIiwiYSI6ImNrdW5zZ3JjMjBidnIyd3FybGZmeWgydm8ifQ.MEgNYhco5LuBrDYGmKn8OQ`)
                .then(res2 => res2.json())
                .then(data2 => {
                    dist = data2.routes[0].distance;
                    calculfdl(dist)
                    panier() 
        });
    });   
};
    
function calculfdl(dist) {
        fdl = 0;
        prixpanierfldtemp=prixpanier
        if (dist>20000) {
            fdl = 5 + 0.07*dist/1000
            fdl = Math.round(fdl)
        }
        document.getElementById("somme_livraison").innerHTML=fdl +"€";
    }
    
    function calculDateLivraison (){ 
        var dateControl = document.querySelector('input[type="date"]');
        var today = new Date().toISOString().substring(0, 10);
        
        today = today.split('-');
        today_annee = parseInt(today[0]);
         today_mois = parseInt(today[1]);
         today_jours = parseInt(today[2]);
        
         dateControl1=dateControl.value 
         dateControl1 = dateControl1.split('-');
         dateControl1_annee = parseInt(dateControl1[0]);
         dateControl1_mois = parseInt(dateControl1[1]);
         dateControl1_jours = parseInt(dateControl1[2]);
        
         diff_mois= (dateControl1_mois-today_mois);
         if (diff_mois==1){
             diffDuMoisApres=dateControl1_jours;
             diffDuMoisAvant=31-today_jours;
             totalHeures=(diffDuMoisAvant+diffDuMoisApres)*24;
            }else {
                totalHeures=(dateControl1_jours-today_jours)*24;
            }
        prixpaniertemp=prixpanier
        if (totalHeures<73){
            livraisonExpress=true;
            document.getElementById("optionexpress").innerHTML="Oui"
            prixexpress=8
            panier();
        }
        if (totalHeures<=0){
            livraisonExpress=false;
            document.getElementById("optionexpress").innerHTML="Livrason impossible"
            prixexpress=0
            panier();
        }
        if (totalHeures>73){
            livraisonExpress=false;
            document.getElementById("optionexpress").innerHTML="Non"
            prixexpress=0
            panier();
        }
        
        }


function recupobj() {
    nbps5=parseInt(localStorage.getItem("idps5"));
    nbxbox=parseInt(localStorage.getItem("idxbox"));
    nbswitch=parseInt(localStorage.getItem("idswitch"));
    if (isNaN(nbps5)==false){
        for (k=0;k<=nbps5;k++){
            nomobj="panierps5"+k;
            ps5tempstring=localStorage.getItem("panierps5"+k);
            ps5tempobj=JSON.parse(ps5tempstring);
            modeleps5="Modèle :" + ps5tempobj["modele"];
            fondps5="Fond :" + ps5tempobj["fond"];
            jdps5="Joystick Droit :" + ps5tempobj["joystickdroit"];
            jgps5="Joystick Gauche :" + ps5tempobj["joystickgauche"];
            btnps5="Bouton :" + ps5tempobj["bouton"];
            crxps5="Croix directionelle :" + ps5tempobj["croixdir"]
            quantiteps5="Quantité :" + ps5tempobj["quantite"]

            prixps5int=ps5tempobj["prix"]

            if (ps5tempobj["quantite"]>1==true) {
                prixps5int=ps5tempobj["prix"]*ps5tempobj["quantite"];
            }

            if (ps5tempobj["quantite"]>10==true) {
                prixps5int=ps5tempobj["prix"]*ps5tempobj["quantite"]*0.9;
            }

            prixps5="Prix :" + prixps5int
            iddiv="divps5"+k;

            document.getElementById("nom_achat").innerHTML+="<p id=iddiv style=white-space:nowrap;>" + modeleps5 + 
            `<img style='float:right;height:180px;margin-left:130px' src='' id=tableBannerps5${k} />` +  "<br>"
            + fondps5 + "<br>" + jdps5  + "<br>" + jgps5  + "<br>" + btnps5 + 
            "<br>" + crxps5 + "<br>" + quantiteps5 + "<br>" + prixps5 + "<br>" + "<br>"  + "</p>" ;
            document.getElementById("iddiv").id=iddiv;
            prixtot=prixtot+prixps5int;
            dataImage = localStorage.getItem(`imgDataps5${k}`);
            bannerImg = document.getElementById(`tableBannerps5${k}`);
            bannerImg.src = "data:image/png;base64," + dataImage;

        }
        
    }
    if (isNaN(nbps5)==true){nbps5=0;}
    if (isNaN(nbxbox)==false){
        for (p=0;p<=nbxbox;p++){
            xboxtempstring=localStorage.getItem("panierxbox"+p);
            xboxtempobj=JSON.parse(xboxtempstring);
            modelexbox="Modèle :" + xboxtempobj["modele"];
            fondxbox="Fond :" + xboxtempobj["fond"];
            jdxbox="Joystick Droit :" + xboxtempobj["joystickdroit"];
            jgxbox="Joystick Gauche :" + xboxtempobj["joystickgauche"];
            btnxbox="Bouton :" + xboxtempobj["bouton"];
            crxxbox="Croix directionelle :" + xboxtempobj["croixdir"]
            quantitexbox="Quantité :" + xboxtempobj["quantite"]
    
            prixxboxint=xboxtempobj["prix"]
    
            if (xboxtempobj["quantite"]>1==true) {
                prixxboxint=xboxtempobj["prix"]*xboxtempobj["quantite"];
            }
    
            if (xboxtempobj["quantite"]>10==true) {
                prixxboxint=xboxtempobj["prix"]*xboxtempobj["quantite"]*0.9;
            }
    
            prixxbox="Prix :" + prixxboxint
            iddiv="divxbox"+p;
    
            document.getElementById("nom_achat").innerHTML+="<p id=iddiv style=white-space:nowrap;>" + modelexbox + 
            `<img style='float:right;height:180px;margin-left:130px' src='' id=tableBannerxbox${p} />` + "<br>"
            + fondxbox + "<br>" + jdxbox + "<br>" + jgxbox + "<br>" + btnxbox + 
            "<br>" + crxxbox + "<br>" + quantitexbox + "<br>" + prixxbox + "<br>" + "<br>" + "<br>";
            document.getElementById("iddiv").id=iddiv;
            dataImage = localStorage.getItem(`imgDataxbox${p}`);
            bannerImg = document.getElementById(`tableBannerxbox${p}`);
            bannerImg.src = "data:image/png;base64," + dataImage;
            prixtot=prixtot+prixxboxint;
        }
        
    }
    if (isNaN(nbxbox)==true){nbxbox=0;}
    if (isNaN(nbswitch)==false){
        for (i=0;i<=nbswitch;i++){
            switchtempstring=localStorage.getItem("panierswitch"+i);
            switchtempobj=JSON.parse(switchtempstring);
            modeleswitch="Modèle :" + switchtempobj["modele"];
            fondswitchd="Fond Droit:" + switchtempobj["fondd"];
            fondswitchg="Fond Gauche:" + switchtempobj["fondg"];
            jdswitch="Joystick Droit :" + switchtempobj["joystickdroit"];
            jgswitch="Joystick Gauche :" + switchtempobj["joystickgauche"];
            btnswitch="Bouton :" + switchtempobj["bouton"];
            crxswitch="Croix directionelle :" + switchtempobj["croixdir"]
            prixswitch="Prix :" + switchtempobj["prix"]
            prixswitchint=switchtempobj["prix"]
            quantiteswitch="Quantité :" + switchtempobj["quantite"]
    
            if (switchtempobj["quantite"]>1==true) {
                prixswitchint=switchtempobj["prix"]*switchtempobj["quantite"];
            }

            if (switchtempobj["quantite"]>10==true) {
                prixswitchint=switchtempobj["prix"]*switchtempobj["quantite"]*0.9;
            }

            prixswitch="Prix :" + prixswitchint
            iddiv="divswitch"+i;

            document.getElementById("nom_achat").innerHTML+="<p id=iddiv style=white-space:nowrap;>" + modeleswitch + 
            `<img style='float:right;height:200px;margin-left:90px' src='' id=tableBannerswitch${i} />` + "<br>"
            + fondswitchd + "<br>" + fondswitchg + "<br>" + jdswitch + "<br>" + jgswitch 
            + "<br>" + btnswitch + "<br>" + crxswitch + "<br>" + quantiteswitch + "<br>" + prixswitch + "<br>" + "<br>";
            document.getElementById("iddiv").id=iddiv;
            dataImage = localStorage.getItem(`imgDataswitch${i}`);
            bannerImg = document.getElementById(`tableBannerswitch${i}`);
            bannerImg.src = "data:image/png;base64," + dataImage;
            prixtot=prixtot+prixswitchint;
        }
    }
    if (isNaN(nbswitch)==true){nbswitch=0;}
    if(nbps5+nbswitch+nbxbox==0){
        document.getElementById("textprix").innerHTML="Prix de la manette :";
        document.getElementById("somme_prix").innerHTML=prixtot + " €";
        prixpanier=prixtot;
        document.getElementById("somme_totale").innerHTML=prixpanier +"€";
    }
    if(nbps5+nbswitch+nbxbox>0){
        document.getElementById("textprix").innerHTML='Prix des manettes :';
        document.getElementById("somme_prix").innerHTML=prixtot + " €";
        prixpanier=prixtot;
        document.getElementById("somme_totale").innerHTML=prixpanier +"€";
    }
}

function clearcart() {
    localStorage.clear();
    document.getElementById("nom_achat").innerHTML="";
    document.getElementById("somme_prix").innerHTML="0";
    prixpanier=0;
    document.getElementById("somme_totale").innerHTML=prixpanier +"€";
}

function panier(){
    prixpanier=prixtot+prixexpress+fdl
    document.getElementById("somme_totale").innerHTML=prixpanier + "€";
}