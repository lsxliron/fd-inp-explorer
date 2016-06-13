import alt from '../alt-application';
import ClusterPickerActions from '../actions/ClusterPickerActions';

class ClusterPickerStore{
  constructor(){
    this.bindActions(ClusterPickerActions);
    this.clusterCategory = "Monthly";//"Category"
    this.clusterYear = "2006";//"Year";
    this.clusterMonth = "January";//"Month";
    this.clusterNum = "0";//"Cluster"
    this.clusterVar = "ps____";//"Variable"
    this.fullSelection = false;
    this.numOfClusters = {"2009": 42, "2008": 47, "2007": 50, "2006": 37, "Year": 0}
  }

  onUpdateDropdownText(payload){
    let text = payload.text;
    let field = payload.field;
    
    switch(field){
      case "clusterYearClass":
        this.clusterYear = text;
        break;
      case "clusterCategoryClass":
        this.clusterCategory = text;
        break;
      case "clusterMonthClass":
        this.clusterMonth = text;
        break;
      case "clusterNumClass":
        this.clusterNum = text;
        break;
      case "clusterFieldClass":
        this.clusterVar = text;
        break;
    }
  
    if ((this.clusterYear!="Year") && (this.clusterNum!="Number") && (this.clusterVar!="Variable")){
      if (this.clusterCategory=="Yearly")
        this.fullSelection = true;
      else if (this.clusterCategory=="Monthly")
        if (this.clusterMonth!="Month")
          this.fullSelection = true;
        else
          this.fullSelection = false;
    }
    


  }

}

export default alt.createStore(ClusterPickerStore);