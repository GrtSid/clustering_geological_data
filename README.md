## Welcome to GitHub Pages

You can use the [editor on GitHub](https://github.com/GrtSid/clustering_geological_data/edit/master/README.md) to maintain and preview the content for your website in Markdown files.

Whenever you commit to this repository, GitHub Pages will run [Jekyll](https://jekyllrb.com/) to rebuild the pages in your site, from the content in your Markdown files.

### Markdown

# City: LONDON
Clusters of distinct commercial centers or markets is made using points of interest data of a city. Points of interest (POI) data provides location information of different places along with their defining tags like school, type of outlets, type of building, etc.
POI data refers to the coordinates of any physical entity with a tag describing its type like commercial buildings, schools, hospitals, restaurants, etc.

### Clustering Algorithm : DBSCAN
 DBSCAN groups together points that are close to each other based on a distance measurement (usually Euclidean distance) and a minimum number of points. It also marks as outliers the points that are in low-density regions.
 A density method clusters points based on the density of their distribution, with an island of densely distributed points belonging to a cluster and sparsely distributed points classed as outliers. We also don’t have to choose the number of clusters we want, that number is borne out by the data and a few parameters of the algorithm (e.g. min points and epsilon).

I have used OpenStreet Map and Leaflet.js to add layer of marker over the map.
Overpy Library is used to extract data from OpenstreetMap.

```markdown
Syntax highlighted code block

# Header 1
## Header 2
### Header 3

- Bulleted
- List

1. Numbered
2. List

**Bold** and _Italic_ and `Code` text

[Link](url) and ![Image](src)
```

