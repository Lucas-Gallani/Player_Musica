var meuSom = document.getElementById("meuSom")
var icon = document.getElementById("icon")

icon.onclick = function() {
   if(meuSom.paused){
      meuSom.play()
      icon.src = "/assets/img/pause.png"
   }else{
      meuSom.pause();
      icon.src = "/assets/img/play.png"
   }
}