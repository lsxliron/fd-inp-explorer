import alt from '../alt-application';

class ImageViewerActions{

  constructor(){
    this.generateActions('updateImageUrl', 'updateVarUrl')
  }

  setImageUrl(){
    return this.updateImageUrl();
  }

  setVarUrl(){
    return this.updateVarUrl();
  }
}

export default alt.createActions(ImageViewerActions);