import alt from '../alt-application';
import DataPickerActions from '../actions/DataPickerActions';


class DataPickerStore{
  constructor(){
    this.bindActions(DataPickerActions);
    this.year = "2006";//"Year";
    this.month = "January";//"Month";
    this.cluster = "0"//;"Cluster";
    this.category = "Monthly"//"Category"
    this.fullSelection = false;
    this.numOfClusters = {"2009": 42, "2008": 47, "2007": 50, "2006": 37, "Year": 0}
  }

  onUpdateText(data){
    switch(data.field){
      case "year":
        this.year = data.text;
        break;
      case "month":
        this.month = data.text;
        break;
      case "cluster":
        this.cluster = data.text;
        break;
      case "category":
        this.category = data.text
        break;
    }

    if ((this.category=="Yearly") && (this.year!="Year") && (this.cluster!="Cluster")){
      this.fullSelection = true;
    }
    else if ((this.category=="Monthly") && (this.year!="Year") && (this.cluster!="Cluster") && (this.month!="Month")){
      this.fullSelection = true;
    }
    else
      this.fullSelection = false;
  }

}

export default alt.createStore(DataPickerStore);

