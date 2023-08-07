


const playButtons = document.querySelectorAll(".playButton");
playButtons.forEach((button)=>{
    button.addEventListener("click",function(){
        const audioSrc = button.getAttribute("data-audio-src");
        if (audioSrc) {
            const audio = new Audio(audioSrc);
            audio.play();

            
        }
    });

});









document.addEventListener("keydown", function (event) {
    // Verificamos si la tecla presionada es la que queremos usar para reproducir el audio (por ejemplo, la tecla "P" en este caso)
if (event.key === "p" || event.key === "P") {
audio.play();}
  });