
# U.S. Migration Stats for Your County
This was my first API project. It is a responsive website to help the user understand the population migration flow into and out of their community. The source of the data is the U.S. Census Bureau, which conducts the American Community Survey (ACS) on an ongoing basis at the county and neighborhood level.


## Introduction
In this day when immigration is often the leading news story, it may be helpful for people to see that migrations are a part of the human experience, that most communities are in flux, and that the migrating population in the United States is of every origin and background. The user of this webpage is curious about where the new people in their community came from, where their old neighbors moved to, and the corresponding change in population size.



## Use Case
Why is this app useful? Migration information for any given county in the United States is buried in the U.S. Census Bureau database. Publications by the bureau are general and are country-wide. This web page helps the user access data at the county level, and will help them see the actual migration flows for their community.

## UX

Hand-drawn wireframes for the U.S.Migration Stats for Your County website can be seen below.

![Initial Wireframes](https://github.com/terabitbaci/capstone-census-api/blob/master/user-stories-and-wireframes/screen-1-small.jpg)               ![Initial Wireframes](https://github.com/terabitbaci/capstone-census-api/blob/master/user-stories-and-wireframes/screen-2-small.jpg)
![Initial Wireframes](https://github.com/terabitbaci/capstone-census-api/blob/master/user-stories-and-wireframes/screen-3-small.jpg)


## Live Site
You can access the U.S.Migration Stats for Your County website at https://terabitbaci.github.io/capstone-census-api/
The app is responsive and is designed to work on mobile, tablet and desktop viewports. Following are mobile (landing page), mobile (with vertical navigation), and tablet (with horizontal navigation and results).


![mobile landing page](https://github.com/terabitbaci/capstone-census-api/blob/master/user-stories-and-wireframes/mobile-landing-page-half.png)
![mobile landing page with navigation](https://github.com/terabitbaci/capstone-census-api/blob/master/user-stories-and-wireframes/mobile-with-nav-half-1.png)
![tablet with results and horizontal navigation](https://github.com/terabitbaci/capstone-census-api/blob/master/user-stories-and-wireframes/tablet-with-horiz-nav-and-results.png)


## Technical
* The app is built using HTML, CSS and JS.
* The app is fully responsive, adapting for mobile, tablet and desktop viewports.
* The app is interactive with options for the user to select any one of 3142 U.S. counties and county equivalents, and search for the statistics for that locality.
* APIs are aquired from the American Community Survey (ACS) by the U.S. Census Bureau (https://api.census.gov/data/2015/acs/) to get the JSON response to provide migration data.


## Development Roadmap
This is v1.0 of the app, but future enhancements are expected to include:
* adding highcharts to display relevant data from the api. The following is a mockup.
![Highcharts demo](https://github.com/terabitbaci/capstone-census-api/blob/master/user-stories-and-wireframes/Highcharts-demo.png)

