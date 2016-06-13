import React from 'react';
import CanvasActions from '../actions/CanvasActions';
import CanvasStore from '../stores/CanvasStore';
class Canvas extends React.Component{
  constructor(props){
    super(props);
    this.onChange = this.onChange.bind(this);
    this.state = CanvasStore.getState()
    // this.state = {img:new Image(), tranparent:false}
    this.loadImage = this.loadImage.bind(this);
    // this.setPixels = this.setPixels.bind(this);
    // this.changeImageAlpha = this.changeImageAlpha.bind(this);
    // this.resetCanvas = this.resetCanvas.bind(this);
  }

  onChange(){
    this.setState(CanvasStore.getState());
  }


  componentDidMount(){    
    CanvasStore.listen(this.onChange);
    this.state.img.src = this.props.imgsrc;
    this.state.img.onload=this.loadImage
    this.refs.canvas.getContext("2d").scale(0.4,0.4)
  }

  // componentDidUpdate(prevProps, prevState){
    // this.refs.canvas.getContext("2d").clearRect(0,0,3200,1200);
    // this.refs.canvas.getContext("2d").scale(1,1);
    // this.state.img.src=this.props.imgsrc;
  //   CanvasActions.resetCanvas(this.refs.canvas)
  // }

  componentWillReceiveProps(nextProps){
    this.refs.canvas.getContext("2d").clearRect(0,0,3200,1200);
    this.refs.canvas.getContext("2d").scale(1,1);
    this.state.img.src=nextProps.imgsrc;
  }

  componentWillUnmount(){
    CanvasStore.unlisten(this.onChange);
  }

  loadImage(){
    return new Promise((resolve, reject) =>{
      var canvas = this.refs.canvas;
      var ctx = canvas.getContext("2d");
      ctx.drawImage(this.state.img, 0, 0, this.state.img.width, this.state.img.height)
      resolve(canvas)
    });
  }

  // setPixels(){
  //   return new Promise((resolve, reject) => {
  //     var canvas = this.refs.canvas;
  //     var imgData = canvas.getContext("2d").getImageData(0,0,3200,1200)
  //     var pixels = imgData.data;
  //     for (var i=0; i<pixels.length; i+=4){
  //       if ((pixels[i]!=255) && (pixels[i]==pixels[i+1]) && (pixels[i+1]==pixels[i+2])) {
  //         pixels[i] = 240;
  //         pixels[i+1] = 240;
  //         pixels[i+2] = 240;
  //       }
  //     }
  //     resolve(imgData);
  //   });
  // }

  // updateCanvas(imgData){
  //   return new Promise((resolve, reject) => {
  //     var canvas = this.refs.canvas;
  //     var ctx = canvas.getContext("2d");
  //     ctx.putImageData(imgData, 0, 0)
  //     resolve(canvas);
  //   });
  // }


  // resetCanvas(){
  //   var ctx = this.refs.canvas.getContext("2d");
  //   ctx.drawImage(this.state.img, 0, 0, this.state.img.width, this.state.img.height);
  // }


  // changeImageAlpha(){
  //   if (this.state.tranparent)
  //     this.resetCanvas()
  //   else
  //     CanvasActions.setPixels(this.refs.canvas).then((imgData)=>{
  //       CanvasActions.updateCanvas(imgData, this.refs.canvas)
  //     })
  //     // this.setPixels(this.refs.canvas).then((imgData)=>{this.updateCanvas(imgData, this.refs.canvas)})
  //   this.state.tranparent = (!this.state.tranparent)
  // }

  

  render(){
    return (
      <div>
          <canvas id="mapCanvas" width="1200" height="400" ref="canvas"></canvas>
      </div>

    );
  }
}

export default Canvas;