import React from 'react';


class Footer extends React.Component{
  constructor(props){
    super(props);
  }


  render(){
    return(
       <footer className="page-footer">
          <div className="footer-copyright">
            <div className="container">
            Created by <a href="http://www.gagn.io" target="_blank">Liron Shimrony </a>
            
            </div>
          </div>
        </footer>


    );
  }
}




export default Footer;