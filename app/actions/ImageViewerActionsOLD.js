import alt from '../alt-application';

class ImageViewerActions{

  constructor(){
    this.generateActions('updateImageUrl', 'updateVarUrl', 'updateClusterUrl')
  }

  setImageUrl(){
    return this.updateImageUrl();
  }

  setVarUrl(){
    return this.updateVarUrl();
  }

  setClusterUrl(){
    return this.updateClusterUrl
  }
}

export default alt.createActions(ImageViewerActions);