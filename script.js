var orgimage;
var grayimage;

function upload(){
  var imgcanvas = document.getElementById("can");
  var fileinput = document.getElementById("finput");
  orgimage = new SimpleImage(fileinput);
  grayimage = new SimpleImage(fileinput);
  orgimage.drawTo(imgcanvas);
}
function makeGray(){
  for(var pixel of grayimage.values()){
    var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue())/3;
    pixel.setRed(avg);
    pixel.setGreen(avg);
    pixel.setBlue(avg);
  }
  var img2canvas = document.getElementById("can2");
  grayimage.drawTo(img2canvas);
}