import alt from '../alt-application'

class CanvasActions{
  constructor(){
    this.generateActions('clearCanvas', 'setCanvasTransparency')
  }

  setPixels(canvas){
    return new Promise((resolve, reject) => {
      var imgData = canvas.getContext("2d").getImageData(0,0,3200,1200)
      var pixels = imgData.data;
      for (var i=0; i<pixels.length; i+=4){
        if ((pixels[i]!=255) && (pixels[i]==pixels[i+1]) && (pixels[i+1]==pixels[i+2])) {
          pixels[i] = 240;
          pixels[i+1] = 240;
          pixels[i+2] = 240;
        }
      }
      resolve(imgData);
    });
  }


  updateCanvas(imgData, canvas){
    return new Promise((resolve, reject) => {
      var ctx = canvas.getContext("2d");
      ctx.putImageData(imgData, 0, 0)
      resolve(canvas);
    });
  }

  resetCanvas(canvas){
    console.log("XXX")
    return this.clearCanvas(canvas)
    // var ctx = canvas.getContext("2d");
    // ctx.drawImage(this.state.img, 0, 0, this.state.img.width, this.state.img.height);
  }

  setTransparent(trans){
    return this.setCanvasTransparency(trans)
  }


}

export default alt.createActions(CanvasActions);