// Flèche gauche
function leftScroll(carousel) {
    var scroll = document.querySelector(carousel);
    scroll.scrollLeft -= scroll.offsetWidth;
}

// Flèche droite
function rightScroll(carousel) {
    var scroll = document.querySelector(carousel);   
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
const videos = {
    "my_list":["piece_minia.mp4","class_minia.mp4","arcane_short.mp4","never_minia.mp4","fairy_minia.mp4","naruto_minia.mp4","snk_minia.mp4"],
    "tv_show":[],
    "trending_now":[],
    "continue_watching":[],
    "originals":[],
    "western":[],
    "documentary":[],
    "science":[],
    "action":[],
    "horror":[]
}

function random(img_class, vid_class){
    // Choix de la catégorie selon le nom
    // En fonction du nom de la catégorie, définit la longueur de celle-ci
    var category_length; var double = [];
    if(img_class=="listRandom"){category_length=images.my_list.length};
    if(img_class=="showRandom"){category_length=images.tv_show.length};
    if(img_class=="trendingRandom"){category_length=images.trending_now.length};
    if(img_class=="continueRandom"){category_length=images.continue_watching.length};
    if(img_class=="originalsRandom"){category_length=images.originals.length};
    if(img_class=="westernRandom"){category_length=images.western.length};
    if(img_class=="docuRandom"){category_length=images.documentary.length};
    if(img_class=="sciRandom"){category_length=images.science.length};
    if(img_class=="actionRandom"){category_length=images.action.length};
    if(img_class=="horrorRandom"){category_length=images.horror.length};

    // Empêche l'apparition de deux images identiques
    // en bref : génère une combinaison de chiffres aléatoires ne se répétant pas (d'une longueur définie par category_lenght)
    for(let i=1;i<=category_length;i++){
        var random = Math.floor(Math.random() * category_length)
        if(!double.includes(random)){double.push(random)}
        else{   // Trouve un autre nombre tant qu'il existe déjà
            while(double.includes(random)){
            random = Math.floor(Math.random() * category_length)
            }
            double.push(random)
        }
        // Attribution de l'image aléatoire en fonction de la catégorie
        var img_name = img_class + i
        var randomImg;
        var vid_name = vid_class + i
        var randomVid;
        
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
        
        // Définit une vidéo aléatoire de la catégorie de l'image aléatoire
        if(img_class=="listRandom"){randomVid = videos.my_list[random]
        var vid_selected = document.getElementById(vid_name)
        vid_selected.src = "assets/movies/" + randomVid
        }
        
        
    }
    // if(img_class=="listRandom"){!alert(double)}
}

// function playit(id){
//     var x = document.getElementById(id);
//     x.play();
// }

// function test(id){
//     var video =document.querySelector(id)
//     video.play()
// }

function primary_hover (video_area, video){
    var video_area =document.querySelector(video_area)
    var video =document.querySelector(video)

    video_area.addEventListener('mouseenter', function (){
        video.play()
    });
    video_area.addEventListener('mouseleave', function (){
        video.pause() 
    });
}

function aux_hover (video_area, video, img){
    var area = document.querySelector(video_area)
    var video = document.querySelector(video)
    var image = document.querySelector(img)

    area.addEventListener('mouseenter', function (){
        video.style.display = "unset";
        image.style.display = "none"
        video.play()
        
    });
    area.addEventListener('mouseleave', function (){
        video.pause()
        video.style.display = "none";
        image.style.display = "unset";
    });
}



window.onscroll = function() {
    var header = document.querySelector("headerback");
    if(window.scrollY >= 215){
        header.addClass('bg-black')
    }
    else{
        header.removeClass('bg-black')
    }
}

function menu_hover (){
    var
    bell = document.querySelector('.bell'),
    bell_area = document.querySelector('.bellarea'),
    ext = document.querySelector('.primary_hover');

    bell.addEventListener('mouseenter', function (){
        bell_area.style.display = "unset"
        avatar_area.style.display = "none"
        arrow.style.transform = "unset"
    });
    ext.addEventListener('mouseenter', function (){
        bell_area.style.display = "none"
    });


    var
    avatar = document.querySelector('.avatar'),
    avatar_area = document.querySelector('.avatar_area'),
    ext = document.querySelector('.primary_hover'),
    arrow = document.querySelector('.arrow');

    avatar.addEventListener('mouseenter', function (){
        arrow.style.transform = "rotate(180deg)"
        avatar_area.style.display = "unset"
        bell_area.style.display = "none"
    });
    ext.addEventListener('mouseenter', function (){
        arrow.style.transform = "unset"
        avatar_area.style.display = "none"
    });
}


// Exécutes les fonctions une fois la fenêtre chargée
window.onload = function() {
    primary_hover('.primary_hover','.arcane');
    menu_hover();
    aux_hover('.cont1', '.vid1','.img1');
    aux_hover('.cont2', '.vid2','.img2');
    aux_hover('.cont3', '.vid3','.img3');
    aux_hover('.cont4', '.vid4','.img4');
    aux_hover('.cont5', '.vid5','.img5');
    aux_hover('.cont6', '.vid6','.img6');
    aux_hover('.cont7', '.vid7','.img7');

    random("listRandom","vidRandom");
    random("showRandom");
    random("trendingRandom");
    random("continueRandom");
    random("originalsRandom");
    random("westernRandom");
    random("docuRandom");
    random("sciRandom");
    random("actionRandom");
    random("horrorRandom");
    
};
