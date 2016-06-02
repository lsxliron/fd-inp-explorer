import React from 'react';

class Navbar extends React.Component {

  constructor(props) {
    super(props); 
    this.displayModal = this.displayModal.bind(this);
  }

  displayModal(){
    $('#modalTrigger').leanModal()
  }

  
  
  render(){
    return(
      <nav>
        <div className="nav-wrapper">
          <a href="#" className="brand-logo"> &nbsp; FD-INP Data Explorer</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><a id="modalTrigger" href="#modalHelp" onClick={this.displayModal}>Help</a></li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;