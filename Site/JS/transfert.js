prixswitchint=switchtempobj["prix"]
    
if (switchtempobj["quantite"]>1==true) {
    prixswitchint=switchtempobj["prix"]*switchtempobj["quantite"];
}

if (switchtempobj["quantite"]>10==true) {
    prixswitchint=switchtempobj["prix"]*switchtempobj["quantite"]*0.9;
}

prixswitch="Prix :" + prixswitchint