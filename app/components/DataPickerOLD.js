import React from 'react';
import ReactDOM from 'react-dom'
import DataPickerActions from '../actions/DataPickerActions';
import DataPickerStore from '../stores/DataPickerStore';
import ImageViewerActions from '../actions/ImageViewerActions';
class DataPicker extends React.Component {
  constructor(props){
    super(props);
    this.state = DataPickerStore.getState();
    this.onChange = this.onChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  onChange(){
    this.setState(DataPickerStore.getState());
  }

  componentDidMount(){
    DataPickerStore.listen(this.onChange);
    
    // Init dropdowns
    $('#yearDropdown').dropdown();
    $('#monthDropdown').dropdown();
    $('#clusterDropDown').dropdown();
    $('#categoryDropdown').dropdown();
  }

  componentWillUnmount(){
    DataPickerStore.unlisten(this.onChange);
  }

  handleClick(event){
    var field;
    var fieldClass = event.target.className;
    console.log(fieldClass)

    switch(fieldClass){
      case "monthClass":
        field = "month";
        break;
      case "yearClass":
        field = "year";
        break;
      case "clustersClass":
        field = "cluster";
        break;
      case "categoryClass":
        field = "category";
          break;
    }

    DataPickerActions.setDropdownText(event.target.text, field);


    // Update image
    ImageViewerActions.setImageUrl()
    
  }

  render(){
    console.log(this.state.year)
    var clusters = [];
    for (var i=1; i<=this.state.numOfClusters[this.state.year]; i++)
      clusters.push(i);

    var clusterJSX = clusters.map(c=>{
      return <li key={c}><a className="clustersClass" href="#!" onClick={this.handleClick}>{c}</a></li>;
    });



    var months = ["January", "February", "March", "April", "May", "June", "July", 
                  "August", "September", "October", "November", "December"]
    
    var monthsJSX = months.map(m=>{
      return <li key={m}><a className="monthClass" href="#!" onClick={this.handleClick}>{m}</a></li>  
    });
    
    return(
      <div className="row">
        <div className="col s3">
          <a className="dropdown-button btn spacy-dropdown" data-beloworigin="true" data-alignment="right" href="#" data-activates="categoryDropdown">{this.state.category}</a>
        </div>
        <div className="col s3">
          <a className="dropdown-button btn spacy-dropdown" data-beloworigin="true" data-alignment="right" href="#" data-activates="yearDropdown">{this.state.year}</a>
        </div>
        <div className="col s3">
          <a className={`dropdown-button btn spacy-dropdown ${this.state.category=="Yearly"?"disabled":""}`} data-beloworigin="true" data-alignment="right" href="#" data-activates="monthDropdown">{this.state.month}</a>
        </div>
        <div className="col s3">
          <a className="dropdown-button btn spacy-dropdown" data-beloworigin="true" data-alignment="right" href="#" data-activates="clusterDropDown">{this.state.cluster}</a>
        </div>

        <ul id="yearDropdown" className='dropdown-content'>
          <li><a className="yearClass" href="#!" onClick={this.handleClick}>2006</a></li>
          <li><a className="yearClass" href="#!" onClick={this.handleClick}>2007</a></li>
          <li><a className="yearClass" href="#!" onClick={this.handleClick}>2008</a></li>
          <li><a className="yearClass" href="#!" onClick={this.handleClick}>2009</a></li>
        </ul>

        <ul id="monthDropdown" className="dropdown-content">
          {monthsJSX}
        </ul>

        <ul id="clusterDropDown" className="dropdown-content">
          <li key="0"><a className="clustersClass" href="#!" onClick={this.handleClick}>Full</a></li>
          {clusterJSX}
        </ul>
        <ul id="categoryDropdown" className="dropdown-content">
          <li key="cat0"><a className="categoryClass" href="#!" onClick={this.handleClick}>Yearly</a></li>
          <li key="cat1"><a className="categoryClass" href="#!" onClick={this.handleClick}>Monthly</a></li>
        </ul>
      </div>
    );
  }
}

export default DataPicker;