import React from 'react';
import ImageViewerActions from '../actions/ImageViewerActions';
import ImageViewerStore from '../stores/ImageViewerStore';


class ImageViewer extends React.Component {
  constructor(props){
    super(props);
    this.state = ImageViewerStore.getState();
    this.onChange = this.onChange.bind(this);
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

  render(){
    var url;
    return(
      <div className="imgDiv">
        <img className={this.props.imgTarget=="map"? "mapImage": "varImage"} src={this.props.imgTarget=="map"?this.state.imageUrl:this.state.varUrl} />
      </div>
      );
  }
}

export default ImageViewer;