import alt from '../alt-application'
import CanvasActions from '../actions/CanvasActions';

class CanvasStore{
  constructor(){
    this.bindActions(CanvasActions);
    this.transparent = false
    this.img = new Image();
  }

  onClearCanvas(canvas){
    var ctx = canvas.getContext("2d");
    ctx.drawImage(this.img, 0, 0, this.img.width, this.img.height);
    return true;
  }

  onSetCanvasTransparency(trans){
    this.transparent = trans;
  }
}

export default alt.createStore(CanvasStore)