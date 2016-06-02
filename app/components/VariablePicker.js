import React from 'react';
import VariablePickerStore from '../stores/VariablePickerStore';
import VariablePickerActions from '../actions/VariablePickerActions';
import ImageViewerActions from '../actions/ImageViewerActions';
class VariablePicker extends React.Component {
  constructor(props){
    super(props);
    this.state = VariablePickerStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  onChange(){
    this.setState(VariablePickerStore.getState())
  }

  componentDidMount(){
    VariablePickerStore.listen(this.onChange);
    $('#varsDropdown').dropdown()
    $('#varsYears').dropdown()
    $('#varCategoryDropdown').dropdown()
    $('#varsMonthDropdown').dropdown()
  }

  componentWillUnmount(){
    VariablePickerStore.unlisten(this.onChange);
  }

  handleClick(event){
    var clickedClass = event.target.className;
    var field

    switch(clickedClass){
      case "varNameClass":
        field="varName"
        break;
      case "varYearClass":
        field = "varYear";
        break;
      case "varMonthClass":
        field = "varMonth";
        break;
      case "varCategoryClass":
        field = "varCategory";
        break;
    }

    VariablePickerActions.setDropdownText(field, event.target.text);
    ImageViewerActions.setVarUrl()

  }

  render(){
    var fields = ["ps____", "ts____", "al_srf", "em_srf", "mu0___", "tlo3__", "ta____", "t_900_",
                  "t_740_", "t_620_", "t_500_", "t_375_", "t_245_", "t_125_", "t_050_", "t_015_", 
                  "w900fl", "w740fl", "w620fl", "w500fl", "w375fl", "w245fl", "w125fl", "w050fl", 
                  "w015fl", "ntltyp", "cftp01", "cftp02", "cftp03", "cftp04", "cftp05", "cftp06",
                  "cftp07", "cftp08", "cftp09", "cftp10", "cftp11", "cftp12", "cftp13", "cftp14",
                  "cftp15"]

    var fieldsJSX = fields.map(f => {
      return <li key={f}><a href="#!" className="varNameClass" onClick={this.handleClick}>{f}</a></li>
    });

    var months = ["January", "February", "March", "April", "May", "June", "July", 
                  "August", "September", "October", "November", "December"]
    
    var monthsJSX = months.map(m=>{
      return <li key={m}><a className="varMonthClass" href="#!" onClick={this.handleClick}>{m}</a></li>  
    });

    var monthCssClass = "dropdown-button btn spacy-dropdown"

    if (this.state.varCategory=="Yearly")
      monthCssClass += " disabled"


    return(
        <div className="row">
          <div className="col s3">
            <a className="dropdown-button btn spacy-dropdown" data-beloworigin="true" href="#!" data-activates="varCategoryDropdown">{this.state.varCategory}</a>
          </div>

          <div className="col s3">
            <a className="dropdown-button btn spacy-dropdown" data-beloworigin="true" href="#!" data-activates="varsYears">{this.state.varYear}</a>
          </div>

          <div className="col s3">


            <a className={monthCssClass} data-beloworigin="true" href="#!" data-activates="varsMonthDropdown">{this.state.varMonth}</a>
          </div>
          
          <div className="col s3">
            <a className="dropdown-button btn spacy-dropdown" data-beloworigin="true" href="#!" data-activates="varsDropdown">{this.state.selectedVar}</a>
          </div>
          
          <ul id="varsDropdown" className="dropdown-content">
            {fieldsJSX}
          </ul>
          
          <ul id="varsYears" className="dropdown-content">
            <li><a href="#!" className="varYearClass" onClick={this.handleClick}>2006</a></li>
            <li><a href="#!" className="varYearClass" onClick={this.handleClick}>2007</a></li>
            <li><a href="#!" className="varYearClass" onClick={this.handleClick}>2008</a></li>
            <li><a href="#!" className="varYearClass" onClick={this.handleClick}>2009</a></li>
          </ul>

          <ul id="varCategoryDropdown" className="dropdown-content">
            <li><a href="#!" className="varCategoryClass" onClick={this.handleClick}>Monthly</a></li>
            <li><a href="#!" className="varCategoryClass" onClick={this.handleClick}>Yearly</a></li>
          </ul>

          <ul id="varsMonthDropdown" className="dropdown-content">
            {monthsJSX}
          </ul>
        </div>
    );
  }
}

export default VariablePicker;