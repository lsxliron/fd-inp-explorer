import React from 'react';
import ImageViewerActions from '../actions/ImageViewerActions';
import ImageViewerStore from '../stores/ImageViewerStore';
import Canvas from './Canvas';

class ImageViewer extends React.Component {
  constructor(props){
    super(props);
    this.state = ImageViewerStore.getState();
    this.onChange = this.onChange.bind(this);
    this.imageErrorHandler = this.imageErrorHandler.bind(this);
  }

  onChange(){
    this.setState(ImageViewerStore.getState());
  }
  componentDidMount(){
    ImageViewerStore.listen(this.onChange);
  }

  componentWillUnmount(){
    ImageViewerStore.unlisten(this.onChange);
  }

  imageErrorHandler(){
    $('.clusterImage').attr('src', "static/no_data.png");

  }

  render(){
    var url;
    var cssClass;
    switch(this.props.imgTarget){
      case "map":
        url = this.state.imageUrl;
        cssClass = "mapImage";
        break;
      case "variable":
        url = this.state.varUrl;
        cssClass = "varImage";
        break;
      case "cluster":
        url = this.state.clusterUrl;
        cssClass = "clusterImage";
        break;
    }
    if (this.props.imgTarget == 'map'){
      return(
        <div className="imgDiv">
          <Canvas imgsrc={url} />
        </div>
        );
    }
    else{
      return(
        <div className="imgDiv">
          <img className={cssClass} src={url} onError={this.imageErrorHandler} />
        </div>
      );
    }
  }
}

export default ImageViewer;