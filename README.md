
# City: LONDON
Clusters of distinct commercial centers or markets is made using points of interest data of a city. Points of interest (POI) data provides location information of different places along with their defining tags like school, type of outlets, type of building, etc.
POI data refers to the coordinates of any physical entity with a tag describing its type like commercial buildings, schools, hospitals, restaurants, etc.

### Clustering Algorithm : DBSCAN
 DBSCAN groups together points that are close to each other based on a distance measurement (usually Euclidean distance) and a minimum number of points. It also marks as outliers the points that are in low-density regions.
 A density method clusters points based on the density of their distribution, with an island of densely distributed points belonging to a cluster and sparsely distributed points classed as outliers. We also don’t have to choose the number of clusters we want, that number is borne out by the data and a few parameters of the algorithm (e.g. min points and epsilon).

I have used OpenStreet Map and Leaflet.js to add layer of marker over the map.
Overpy Library is used to extract data from OpenstreetMap.

The Link below is an interactive map which marks all the points of interest data points in the city of London. To access the webpage you need to clone the project and open index.html file.

[Link](https://github.com/GrtSid/clustering_geological_data/blob/master/index.html)

Here is a image of my work:
![Image](https://github.com/GrtSid/clustering_geological_data/blob/master/image/export%20(1).png)

I have used Jupyter Notebook for my project.
First the data is collected from sources and saved in a csv file.
Then I trained my model to cluster the geological coordinates wherein the clusters with more than two point of interest data points are considered as important and correspondingly plotted in the figure.

Source:
1) OpenStreetMap
2) TowardsDataScience
