import React from 'react'

class Modal extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(

      <div id="modalHelp" className="modal">
        <div className="modal-content">
          <h4>FD-INP Data Explorer</h4>
          <h5> Intro </h5>
          <p>
            This explorer shows the data for the <a href="http://isccp.giss.nasa.gov/outgoing/FLUX/INP/" target="_blank">FD-INP</a> dataset. <br/>
            All the maps and visualizations are taking into consideration only 41 out of the 281 variables.
            Those variable are 1-41 in the ISCCP original <a href="http://isccp.giss.nasa.gov/outgoing/FLUX/INP/read_i2_FD_inp.f" target="_blank">reader</a>
          </p>

          <h5>Maps</h5>
          <p>
            In the top part of the app we can see the clustered data. To see a specific cluster, you must choose the year (currently only 2009 is available), month and cluster in the appropriate dropdown lists. <br />
            For Each month, there is one recored in the clusters list called <strong>Full</strong>. Choosing this record will display all the clusters for the selected month.<br />
            For convenience, the full maps are plotted without the biggest cluster which coveres most of the area. This cluster can be explored when inspecting individual clusters.
            The map that is used was taken from the <a href="http://isccp.giss.nasa.gov/docs/mapgridinfo.html" target="_blank">ISCCP</a> website<br />
            The first map displayed when the app is loaded is for <strong>January 2009</strong>.
          </p>

          <h5>Variables</h5>
          <p>
            On the bottom of the app, we can explore variables 1-41 from the ISCCP dataset (see <a href="http://isccp.giss.nasa.gov/outgoing/FLUX/INP/read_i2_FD_inp.f" target="_blank">reference</a>). The mean and standard deviation of each varible is specified in the header. <br />
            When exploring the variables there are two options:
          </p>
          <ol>
            <li>By choosing monthly category, it is possible to expore the variables by spceifying month, year and variable name</li>
            <li>By choosing yearly category, it is possible to explore the variables by specifying year and variable name. As the name implies, the data for each variable is for the whole year.</li>
          </ol>
          <p>The first graph displayed when the app is loaded is <strong>ps____</strong> as for the year of 2009.</p>
          
          <strong>Note:</strong><br/>
          <p>
          In case the variable is being explored using the monthly mode (see below), the standard deviation and mean are monthly as well.
          </p>
        </div>
        <div className="modal-footer">
          <a href="#!" className=" modal-action modal-close waves-effect waves-green btn-flat">Close</a>
        </div>
      </div>


    );
  }
}

export default Modal;