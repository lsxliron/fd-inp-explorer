
# FD-INP Data Explorer
### Intro
This explorer shows the data for the a [FD-INP](http://isccp.giss.nasa.gov/outgoing/FLUX/INP/) dataset. 
All the maps and visualizations are taking into consideration only 41 out of the 281 variables.
Those variable are 1-41 in the ISCCP original [reader](http://isccp.giss.nasa.gov/outgoing/FLUX/INP/read_i2_FD_inp.f)

### Maps
In the top part of the app we can see the clustered data. To see a specific cluster, you must choose the year, month and cluster in the appropriate dropdown lists. 
For Each month, there is one recored in the clusters list called **Full**. Choosing this record will display all the clusters for the selected month.
The map that is used was taken from the [ISCCP](http://isccp.giss.nasa.gov/docs/mapgridinfo.html) website.
For convenience, the full maps are plotted without the biggest cluster which coveres most of the area. This cluster can be explored when inspecting individual clusters.
The first map displayed when the app is loaded is for **January 2009**.

### Variables
On the bottom of the app, we can explore variables 1-41 from the ISCCP dataset (see [reference](http://isccp.giss.nasa.gov/outgoing/FLUX/INP/read_i2_FD_inp.f)). The mean and standard deviation of each varible is specified in the header. 
When exploring the variables there are two options:

- By choosing monthly category, it is possible to expore the variables by spceifying month, year and variable name
- By choosing yearly category, it is possible to explore the variables by specifying year and variable name. As the name implies, the data for each variable is for the whole year

The first graph displayed when the app is loaded is **ps___** as for the year of 2009.

**Note**
In case the variable is being explored using the monthly mode (see below), the standard deviation and mean are monthly as well.