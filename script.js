var play = document.getElementById('play');
var pause = document.getElementById("pause");
var video = document.querySelector('#watch').firstElementChild;

play.addEventListener("click",() => {
    video.play();
});

pause.addEventListener("click",() => {
    video.pause();
});


play.style.border = 'none';
play.style.outline = 'none';
play.style.background = 'black';
play.style.color = 'white';
play.style.padding = '6px 15px';
play.style.margin = '0px 10px';
play.style.cursor = 'pointer';


pause.style.border = 'none';
pause.style.outline = 'none';
pause.style.background = 'black';
pause.style.color = 'white';
pause.style.padding = '6px 15px';
pause.style.margin = '0px 10px';
pause.style.cursor = 'pointer';