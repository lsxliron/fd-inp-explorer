import React from 'react';
import Navbar from './Navbar';
import DataPicker from './DataPicker';
import ImageViewer from './ImageViewer';
import VariablePicker from './VariablePicker';
import Modal from './Modal';
import Footer from './Footer';
class App extends React.Component {
  constructor(props){
    super(props);
  }

  
  render(){
    return(
      <div>
        <Navbar />
        <h2 style={{marginLeft:2+'em'}}>Maps</h2>
        <div className="container">
          <DataPicker />
        </div>
        <hr />
          <ImageViewer imgTarget="map"/>
        <hr />
        <h2 style={{marginLeft:2+'em'}}>Variables</h2>
        <div className="container">
          <VariablePicker />
        </div>
        <ImageViewer imgTarget="variable" />
        <Modal />
        <Footer />
      </div>
    );
  }
}

export default App;