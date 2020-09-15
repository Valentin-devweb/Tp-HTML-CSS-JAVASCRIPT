function navBurger() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
}
$(function(){
  // nombre de li pour #question
  let length = $('#question > *').length;  
  // Boucle pour parcourir les a des li et 
  for (let index = 1; index < length+1; index++) {
    // récupérer la valeur de l'attribut href
    let target = $('#question li:nth-child('+index+') a').attr('href');    
    // si a cliqué
    $('#question li:nth-child('+index+') a').click(function() {
      // appel fonction de supprétion classe backcolor
      removeAll(length);
      // la réponse surlignée via classe backcolor
      $(target).addClass('backcolor');
    });
    // fonction qui supprime la classe backcolor si déja attribuée
    function removeAll(l){
      // parcourir les réponses une par une
      for (let index = 1; index < l+1; index++) {
        // supprimer la classe backcolor si elle a été attribuée
        $('#reponse li:nth-child('+index+') ').removeClass('backcolor');
      };
    } ;
  }; // fin du for
});

