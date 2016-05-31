import alt from "../alt-application";

class DataPickerActions{

  constructor(){
    this.generateActions('updateText');
  }

  setDropdownText(text, field){
    return this.updateText({text:text, field:field})
  }


}

export default alt.createActions(DataPickerActions)

