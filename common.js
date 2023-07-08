$(function(){
    $("#header").load("header.html"); 
    $("#footer").load("footer.html"); 
  });

   //stolen from https://stackoverflow.com/questions/8489710/play-an-audio-file-using-jquery-when-a-button-is-clicked 
  $(document).ready(function() {
    var audioElement = document.createElement('audio');

    if (audioPath != null){
    audioElement.setAttribute('src', audioPath);
      if (audioSource == null){audioSource = "UNDEFINED"}
    
    audioElement.addEventListener('ended', function() { 
      this.play();
    }, false);
    
    audioElement.addEventListener("canplay",function(){
        $("#length").text("Duration:" + audioElement.duration + " seconds");
        $("#source").text("Source: " + audioSource);
        $("#status").text("Status: Ready to play").css("color","green");
        audioElement.play();
    });
    
    audioElement.addEventListener("timeupdate",function(){
        $("#currentTime").text("Current second:" + audioElement.currentTime);
    });
    
    $('#play').click(function() {
        audioElement.play();
        $("#status").text("Status: Playing");
    });
    
    $('#pause').click(function() {
        audioElement.pause();
        $("#status").text("Status: Paused");
    });
    
    $('#restart').click(function() {
        audioElement.currentTime = 0;
    });
}});