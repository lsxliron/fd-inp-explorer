import alt from '../alt-application';
import VariablePickerActions from '../actions/VariablePickerActions'

class VariablePickerStore{
  constructor(){
    this.bindActions(VariablePickerActions);
    this.selectedVar = "ps____";//"Name"
    this.varCategory = "Monthly";//"Category"
    this.varYear = "2006";//"Year"
    this.varMonth = "January"//"Month"
    this.fullSelection = false;
  }

  onUpdateDropdownText(payload){
    switch(payload.field){
      case "varName":
        this.selectedVar = payload.text;
        break;
      case "varMonth":
        this.varMonth = payload.text;
        break;
      case "varYear":
        this.varYear = payload.text;
        break;
      case "varCategory":
        this.varCategory = payload.text
        break;
    }

    // Determine if all fields are set

    if (this.varCategory == "Yearly"){
      if ((this.selectedVar!="Name") && (this.varYear!="Year"))
        this.fullSelection = true;
    }
    else if (this.varCategory == "Monthly")
      if ((this.selectedVar!="Name") && (this.varYear!="Year") && (this.varMonth!="Month"))
        this.fullSelection = true
    else
      this.fullSelection = false
  }
}

export default alt.createStore(VariablePickerStore)