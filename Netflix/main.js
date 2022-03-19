// Flèche gauche
function leftScroll(carousel, lefttArrow) {

    var scroll = document.querySelector(carousel);
    var left = document.querySelector(lefttArrow);   
    scroll.scrollLeft -= scroll.offsetWidth;
}

// Flèche droite
function rightScroll(carousel, rightArrow) {

    var scroll = document.querySelector(carousel);
    var right = document.querySelector(rightArrow);   
    scroll.scrollLeft += scroll.offsetWidth;
}

////////////////////////////////////////////////////////////////////////
// Objet contenant toutes les images par catégories
const images = {
    "my_list":["one-piece.png","classroom.png","arcane.png","neverland.png","fairy.png","naruto.png","titan.png"],
    "tv_show":["strangers.png","peaky.png","witcher.png","narcos.jpg","papel.png","squid.png","saul.png"],
    "trending_now":["death.png","orange.jpg","frozen.png","vikings.png","lucifer.png","morty.png","nemo.png"],
    "continue_watching":["jojo.png","jojo2.jpg","jojo3.png","jojo4.png","jojo5.jpg","jojo6.png","jojo7.png"],
    "originals":["originals_why.png","originals_boss.png","originals_kissing.png","originals_papel.png","originals_crown.png","originals_stranger.png","originals_frontiers.png","originals_order.png"],
    "western":["western1.png","western2.png","western3.png","western4.png","western5.png","western6.png","western7.png"],
    "documentary":["docu1.png","docu2.png","docu3.png","docu4.png","docu5.png","docu6.png","docu7.png"],
    "science":["sci1.png","sci2.png","sci3.png","sci4.png","sci5.png","sci6.png","sci7.png"],
    "action":["action1.png","action2.png","action3.png","action4.png","action5.png","action6.png","action7.png"],
    "horror":["horror1.png","horror2.png","horror3.png","horror4.png","horror5.png","horror6.png","horror7.png"]
}

function random(img_class){
    // Choix de la catégorie selon le nom
    var category_length; var double = [];
    if(img_class=="listRandom"){category_length=images.my_list.length+1};
    if(img_class=="showRandom"){category_length=images.tv_show.length+1};
    if(img_class=="trendingRandom"){category_length=images.trending_now.length+1};
    if(img_class=="continueRandom"){category_length=images.continue_watching.length+1};
    if(img_class=="originalsRandom"){category_length=images.originals.length+1};
    if(img_class=="westernRandom"){category_length=images.western.length+1};
    if(img_class=="docuRandom"){category_length=images.documentary.length+1};
    if(img_class=="sciRandom"){category_length=images.science.length+1};
    if(img_class=="actionRandom"){category_length=images.action.length+1};
    if(img_class=="horrorRandom"){category_length=images.horror.length+1};
    // Empêche l'apparition de deux images identiques
    for(let i=1;i<7;i++){
        var random = Math.floor(Math.random() * (category_length-1))
        if(!double.includes(random)){double.push(random)}
        else{
            while(double.includes(random)){
            random = Math.floor(Math.random() * (category_length-1))
            }
            double.push(random)
        }
        // Attribution de l'image aléatoire en fonction de la catégorie
        var img_name = img_class + i
        var randomImg;
        if(img_class=="listRandom"){randomImg = images.my_list[random]};
        if(img_class=="showRandom"){randomImg = images.tv_show[random]};
        if(img_class=="trendingRandom"){randomImg = images.trending_now[random]};
        if(img_class=="continueRandom"){randomImg = images.continue_watching[random]};
        if(img_class=="originalsRandom"){randomImg = images.originals[random]};
        if(img_class=="westernRandom"){randomImg = images.western[random]};
        if(img_class=="docuRandom"){randomImg = images.documentary[random]};
        if(img_class=="sciRandom"){randomImg = images.science[random]};
        if(img_class=="actionRandom"){randomImg = images.action[random]};
        if(img_class=="horrorRandom"){randomImg = images.horror[random]};
            
        var class_selected = document.getElementById(img_name);
        class_selected.src = "assets/img/" + randomImg
    }

}
// Charge les images aléatiores une fois la fenêtre chargée
window.onload = function() {
   random("listRandom")
   random("showRandom")
   random("trendingRandom")
   random("continueRandom")
   random("originalsRandom")
   random("westernRandom")
   random("docuRandom")
   random("sciRandom")
   random("actionRandom")
   random("horrorRandom")
};