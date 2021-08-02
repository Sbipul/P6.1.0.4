$(document).ready(function(){
    $('#myCanvas').tagcanvas({
        textColour : '#00ffff',
        outlineThickness : 0.5,
        outlineColour : '#00ffff',
        maxSpeed : 0.05,
        freezeActive:true,
        shuffleTags:true,
        shape:'sphere',
        zoom:0.9,
        noSelect:true,
        textFont:null,
        pinchZoom:true,
        freezeDecel:true,
        fadeIn:3000,
        initial: [0.3,-0.1],
        depth : 0.8
    });
})

