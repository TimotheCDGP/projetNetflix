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
    "tv_show":["strangers.png","peaky.png","witcher.png","narcos.jpg","papel.png","squid.png"],
    "trending_now":["death.png","orange.jpg","frozen.png","vikings.png","lucifer.png","morty.png"],
    "continue_watching":["jojo.png","jojo2.jpg","jojo3.png","jojo4.png","jojo5.jpg","jojo6.png"],
    "originals":["originals_why.png","originals_boss.png","originals_kissing.png","originals_papel.png","originals_crown.png","originals_stranger.png","originals_frontiers.png"]
}

function random(img_class){
    var category_length; var double = [];
    if(img_class=="listRandom"){category_length=images.my_list.length+1};
    if(img_class=="showRandom"){category_length=images.tv_show.length+1};
    if(img_class=="trendingRandom"){category_length=images.trending_now.length+1};
    if(img_class=="continueRandom"){category_length=images.continue_watching.length+1};
    if(img_class=="originalsRandom"){category_length=images.originals.length+1};
    
    // Empêche l'apparition de deux images identiques
    for(let i=1;i<category_length;i++){
        var random = Math.floor(Math.random() * (category_length-1))
        if(!double.includes(random)){double.push(random)}
        else{
            while(double.includes(random)){
            random = Math.floor(Math.random() * (category_length-1))
            }
            double.push(random)
        }
        
        var img_name = img_class + i
        var randomImg;
        if(img_class=="listRandom"){randomImg = images.my_list[random]};
        if(img_class=="showRandom"){randomImg = images.tv_show[random]};
        if(img_class=="trendingRandom"){randomImg = images.trending_now[random]};
        if(img_class=="continueRandom"){randomImg = images.continue_watching[random]};
        if(img_class=="originalsRandom"){randomImg = images.originals[random]};
            
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
};