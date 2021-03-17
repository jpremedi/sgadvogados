//BANNER ROTATIVO APENAS JS

// let fotos = ["imagem1.jpg", "imagem2.jpg", "imagem3.jpg", "imagem4.jpg", "imagem5.jpg"];

// function TrocarFoto(foto) {
//     document.querySelector(".imagem-banner").src = "images/" + fotos[foto];
// }

// let fotoAtual = 0;
// TrocarFoto(fotoAtual);

// setInterval(function(){
//     fotoAtual++; 
//     if(fotoAtual > 4){
//         fotoAtual = 0;
//     }

//     TrocarFoto(fotoAtual);
// }, 8000);



//BANNER COM JQUERY

$('#slider').nivoSlider({
    effect: 'fade',
    animSpeed: 950,
    pauseTime: 7000,
    startSlide: 0,
    directionNav: false,
    controlNav: false,
    controlNavThumbs: false,
    pauseOnHover: false,
    manualAdvance: false,
    randomStart: false,
    beforeChange: function(){},
    afterChange: function(){},
    slideshowEnd: function(){},
    lastSlide: function(){},
    afterLoad: function(){}
    });
