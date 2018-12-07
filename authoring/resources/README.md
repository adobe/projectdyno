# Deploying Your Tour

There are two options for deploying this tour on your webpage.  You can install it through the DTM, or you can install it by using script tags.

## Through the DTM

To deploy your tour through the DTM, email Kevin Wilson at kewilson@adobe.com.  Attach the zip file that this readme is a part of.  Kevin will coordinate with you to get your tour deployed.

## Script Tags

To deploy your tour using script tags, take the following steps:

1. This zip file contains a folder called tour-guide-script.  Make sure this folder is hosted on your website.
2. Insert the following tag into the head of your site's HTML:
  ```
  <script type="text/javascript" src="tour-guide-scripts/tour-guide.js"></script>
  ```
3. Insert the following tag into the body of your site's HTML:
  ```
  <script type="text/javascript" src="tour-guide-scripts/tour-guide-initializer.js"></script>
  ```
4. You're all done.  Enjoy your new in product tour.

# Displaying Your Tour

There are several different ways you can display your tour.

## JavsScript

You can display your tour with the following lines of JavaScript:

```
tourGuide.setCurrentTour(tourId)
tourGuide.showTourGuide()
```

Replace "tourId" with the id of the tour you want to display. "TourId" is a number where "0" is the first tour you configured, "1" is the second, etc.

For more information on the Tour Guide API please consult the [project repository](https://git.corp.adobe.com/OMEGA/tour_guide).

## URL Queries

You can trigger a tour by adding the following query string to the end of a URL `?showTour=tourId`.  Replace "tourId" with the id of the tour you want to display. "TourId" is a number where "0" is the first tour you configured, "1" is the second, etc.

# Questions and Feedback

If you have any questions, problems, or feedback we'd love to help.  For engineering inqueries, contact Grant Heath at gheath@adobe.com.  For all other inqueries, contact Andy Watanabe at anwatana@adobe.com.
