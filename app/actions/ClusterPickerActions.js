import alt from '../alt-application'

class ClusterPickerActions{
  constructor(){
    this.generateActions('updateDropdownText');
  }

  setDropdownText(text, field){
    return this.updateDropdownText({text: text, field: field})
  }

}

export default alt.createActions(ClusterPickerActions);