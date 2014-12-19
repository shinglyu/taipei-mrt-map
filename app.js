document.body.onload = function(){
  document.getElementById("zoom-in").onclick=function() {
    document.getElementById("map").style.width = document.getElementById("map").width * 1.1 + "px";
  };

  document.getElementById("zoom-out").onclick=function() {
    document.getElementById("map").style.width = document.getElementById("map").width / 1.1 + "px";
  };
}
