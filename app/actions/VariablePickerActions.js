import alt from '../alt-application';

class VariablePickerActions{
  constructor(){
    this.generateActions('updateDropdownText')
  }

  setDropdownText(field, text){

    return this.updateDropdownText({field: field, text:text});
  }

}

export default alt.createActions(VariablePickerActions);