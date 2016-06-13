import React from 'react';
import ClusterPickerStore from '../stores/ClusterPickerStore';
import ClusterPickerActions from '../actions/ClusterPickerActions';
import ImageViewerActions from '../actions/ImageViewerActions';

class ClusterPicker extends React.Component {
  constructor(props){
    super(props);
    this.state = ClusterPickerStore.getState();
    this.onChange = this.onChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  onChange(){
    this.setState(ClusterPickerStore.getState())
  }

  componentDidMount(){
    ClusterPickerStore.listen(this.onChange);

    //Init dropdowns
    $("#clusterYearDropdown").dropdown();
    $("#clusterMonthDropdown").dropdown();
    $("#clusterNumDropdown").dropdown();
    $("#clusterVarDropdown").dropdown();
  }

  ComponentWillUnmount(){
    ClusterPickerStore.unlisten(this.onChange);
  }

  handleClick(event){
    ClusterPickerActions.setDropdownText(event.target.text, event.target.className)
    ImageViewerActions.setClusterUrl()
  }

  render(){

    //Prepare years
    var years = [2006, 2007, 2008, 2009]
    var months = ["January", "February", "March", "April", "May", "June", "July", 
                  "August", "September", "October", "November", "December"]
    var fields = ["ps____", "ts____", "al_srf", "em_srf", "mu0___", "tlo3__", "ta____", "t_900_",
                  "t_740_", "t_620_", "t_500_", "t_375_", "t_245_", "t_125_", "t_050_", "t_015_", 
                  "w900fl", "w740fl", "w620fl", "w500fl", "w375fl", "w245fl", "w125fl", "w050fl", 
                  "w015fl", "ntltyp", "cftp01", "cftp02", "cftp03", "cftp04", "cftp05", "cftp06",
                  "cftp07", "cftp08", "cftp09", "cftp10", "cftp11", "cftp12", "cftp13", "cftp14",
                  "cftp15"]
    
    var numOfClusters = [];
    for (var i=1; i<=this.state.numOfClusters[this.state.clusterYear]; i++) //TODO: CHANGE TO this.state.numOfClusters
      numOfClusters.push(i)

    var yearsJSX = years.map((y) => {
      return <li key={`C${y}`}><a className="clusterYearClass" href="#!" onClick={this.handleClick}>{y}</a></li>
    });

    var monthsJSX = months.map((m) => {
      return <li key={`C${m}`}><a className="clusterMonthClass" href="#!" onClick={this.handleClick}>{m}</a></li>
    });

    var fieldsJSX = fields.map((f) => {
      return <li key={`C${f}`}><a className="clusterFieldClass" href="#!" onClick={this.handleClick}>{f}</a></li>
    });

    var numOfClustersJSX = numOfClusters.map((n) => {
      return <li key={`C${n}`}><a className="clusterNumClass" href="#!" onClick={this.handleClick}>{n}</a></li>
    });

    var monthCssClass = "dropdown-button btn spacy-dropdown"
    if (this.state.clusterCategory == "Yearly")
      monthCssClass += " disabled";

    return(
      <div className="row">
        <div className="col s3">
          <a className="dropdown-button btn spacy-dropdown" data-beloworigin="true" href="#!" data-activates="clusterCategoryDropdown">{this.state.clusterCategory}</a>
        </div>

        <div className="col s2">
          <a className="dropdown-button btn spacy-dropdown" data-beloworigin="true" href="#!" data-activates="clusterYearDropdown">{this.state.clusterYear}</a>
        </div>

        <div className="col s2">
          <a className={monthCssClass} data-beloworigin="true" href="#!" data-activates="clusterMonthDropdown">{this.state.clusterMonth}</a>
        </div>

        <div className="col s2">
          <a className="dropdown-button btn spacy-dropdown" data-beloworigin="true" href="#!" data-activates="clusterNumDropdown">{this.state.clusterNum}</a>
        </div>

        <div className="col s3">
          <a className="dropdown-button btn spacy-dropdown" data-beloworigin="true" href="#!" data-activates="clusterVarDropdown">{this.state.clusterVar}</a>
        </div>

        <ul className="dropdown-content" id="clusterCategoryDropdown">
          <li><a className="clusterCategoryClass" href="#!" onClick={this.handleClick}>Yearly</a></li>
          <li><a className="clusterCategoryClass" href="#!" onClick={this.handleClick}>Monthly</a></li>
        </ul>

        <ul className="dropdown-content" id="clusterYearDropdown">
          {yearsJSX}
        </ul>

        <ul className="dropdown-content" id="clusterMonthDropdown">
          {monthsJSX}
        </ul>

        <ul className="dropdown-content" id="clusterNumDropdown">
          {numOfClustersJSX}
        </ul>

        <ul className="dropdown-content" id="clusterVarDropdown">
          {fieldsJSX}
        </ul>
      </div>
    );
  }

}

export default ClusterPicker;