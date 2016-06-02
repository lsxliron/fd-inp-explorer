import alt from '../alt-application'
import ImageViewerActions from '../actions/ImageViewerActions'
import DataPickerStore from '../stores/DataPickerStore';
import VariablePickerStore from '../stores/VariablePickerStore';

class ImageViewerStore {
  constructor(){
    this.bindActions(ImageViewerActions);
    this.imageUrl="static/2009/1_January/maps/January_2009.png";
    this.varUrl="static/2009/vars/ps____.png"
  }

  onUpdateImageUrl(){
    this.waitFor(DataPickerStore.dispatchToken);
    let data = DataPickerStore.getState()
    var url;
    if (data.fullSelection){
      let months = {January: 1, February: 2, March: 3, April: 4, May: 5, June: 6, July: 7,
                    August: 8, September: 9, October: 10, November: 11, December: 12}

      

      if (data.cluster == "Full"){
        url = `static/${data.year}/${months[data.month]}_${data.month}/maps/${data.month}_${data.year}.png`
      }

      else{
        url = `static/${data.year}/${months[data.month]}_${data.month}/maps/${data.month}_${data.year}_C${data.cluster}.png`
      }
      
      this.imageUrl = url;
    }
  }

  onUpdateVarUrl(){
    this.waitFor(VariablePickerStore.dispatchToken);
    let months = {January: 1, February: 2, March: 3, April: 4, May: 5, June: 6, July: 7,
                    August: 8, September: 9, October: 10, November: 11, December: 12}

    
    let varData = VariablePickerStore.getState();

    if (varData.fullSelection){
      if (varData.varCategory == "Yearly")
          this.varUrl = `static/${varData.varYear}/vars/${varData.selectedVar}.png`;
      
      else{
          let monthName = varData.varMonth;
          let monthNumber = months[monthName];
          let year = varData.varYear

          // TODO: Should be removed after changing filenames
          if (year == 2009)
            this.varUrl = `static/${year}/${monthNumber}_${monthName}/vars/${monthName}_${varData.selectedVar}.png`;

          else
            this.varUrl = `static/${year}/${monthNumber}_${monthName}/vars/${varData.selectedVar}.png`;
        }
    }
  }
}

export default alt.createStore(ImageViewerStore);