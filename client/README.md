# Introduction

The Project Dyno Client is responsible for managing coach marks and tours on a web app.  It is designed to be lightweight and flexible.

# Example Project

This project contains a demo page with a working Project Dyno tour.  To view this demo, open [/client/example/index.html](/client/example/index.html) in a browser.  It is a useful reference for how to use Project Dyno.

# Adding The Project Dyno Client to Your Project

First, add the project-dyno.js script to your project.  This file is located in this repositary at /client/dist/project-dyno.js.  Deploy this file to the server your project will be using.  Once this is done, add the following script tag to the head of your project's HTML.

``` html
<script type="text/javascript" src="path/to/project-dyno.js"></script>
```
> Note: In the future, the project-dyno.js file will be hosted on a publicly available CDN.  This will simplify the process of adding Project Dyno to a project.  This documentation will be updated once this has been done.

> Note: There are plans to publish Project Dyno as an npm module.  This will make adding Project Dyno to modern web apps much easier.  This documentation will be updated once this has been done.

# Running a Tour

Once it has been loaded, project-dyno.js will add the `TourGuide` class to the window/global namespace.  The `TourGuide` class is used to create and run tours.  The following code runs a simple example tour:

``` js
// Defines a tour configuration object.
// Tour configuration will be discussed in depth in the "Creating and Configuring a Tour" section of this document.
const tourConfig = {
  infoBoxIsVisible: true,
  currentCoachMarkIndex: 0,
  currentTourIndex: 0,
  tours: [
    {
      title: "Example Tour",
      coachMarks: [
        {
          description: "Example Coach Mark that will hightlight the first H1 element.",
          targetSelector: "h1",
          anchorPostition: "bottom",
          align: "center",
        }
      ]
    }
  ]
}

// Creates a new instance of the TourGuide class.
const tourRunner = new TourGuide(tourConfig)
```
## URL Queries

You can trigger a tour by adding the following query string to the end of a URL `?showTour=tourId` where tourId is the index of the tour you wish to display.

# Creating and Configuring a Tour

When a new `TourGuide` instance is created, it is passed a tour configuration object as a parameter.  The tour configuration object is used to define the tours that the `TourGudie` instance will manage.

## Configuration Schema

The Project Dyno configuration object conforms to the following schema:
``` js
{
  infoBoxIsVisible: boolean,
  currentCoachMarkIndex: integer,
  currentTourIndex: integer,
  tours: [
    {
      title: string,
      coachMarks: [
        {
          targetSelector: string,
          description: string,
          anchorPostition: "top" | "bottom" | "left" | "right",
          align: "start" | "center" | "end",
          media: {
            src: url,
            width : integer,
            height : integer
          },
          progressOnDomEvent: {
            event: string,
            targetSelector: string
          },
          navButtons: [ "back" | "next" | "close" ]
        }
      ]
    }
  ]
}
```

### root properties

| Property | Type | Rquired | Default | Description |
| --- | --- | --- | --- | --- |
| infoBoxIsVisible | boolean | no | false | Determines if the current coach mark is visialbe or not. |
| currentCoachMarkIndex | integer | no | 0 | The index of the currently displayed coach mark.|
| currentTourIndex | integer | no | 0 | The index of the currently displayed tour.|
| tours | array | yes | - | An array containing one or more tour objects. |

### tour object properties

| Property | Type | Rquired | Default | Description |
| --- | --- | --- | --- | --- |
| title | string | yes | - | The title of the tour.  Every tour should have a unique title. |
| coachMarks | array | yes | - | An array containing one or more coachMark objects. |

### coachMark object properties

| Property | Type | Rquired | Default | Description |
| --- | --- | --- | --- | --- |
| targetSelector | string | possibly | - | A CSS selector for the element the coach mark will target. This property is required if the "targetPosition" property is not present.|
| targetPosition | string | possibly | - | Determines the position of the coachmark on the screen.  Valid values are "top", "topRight", "right", "bottomRight", "bottom", "bottomLeft", "left", "topLeft", and "center".  This property is required if the "targetSelector" property is not present. |
| title | string | yes | - | The text for the title of the coach mark. |
| description | string | yes | - | The text that will be used for the coach mark description. |
| anchorPosition | string | no | "bottom" | Determines the position of the coach mark relative to the target element.  Valid values are "top", "bottom", "left", and "right". |
| align | string | no | "center" | Determines the alignment of the coach mark to the target element.  Valid values are "start", "center", and "end".
| media | object | no | - | A media object used for displaying images.  If absent, no image will be displayed on the coach mark.
| progressOnDomEvent | object | no | - | A progressOnDomEvent object.  Used to advance to the next coachMark when the specified dom event is triggered on the target element.  Useful for halting a tour until a user takes a needed action.
| navButtons | array | no | [ "back" \| "next" \| "close" ] | An array used to determine which navigation buttons the coach mark will display.  Valid array values are "back", "next", and "close".

### media object properties

| Property | Type | Rquired | Default | Description |
| --- | --- | --- | --- | --- |
| src | string | yes | - | The URL of the image that will be displayed.
| width | integer | yes | - | The width of the image in pixels.  Images with a width of 400px are recommended.
| height | integer | yes | - | The height of the image in pixels.

### progressOnDomEvent object properties

| Property | Type | Rquired | Default | Description |
| --- | --- | --- | --- | --- |
| event | string | yes | - | Any DOM event.
| targetSelector | string | yes | - | A CSS selector for the element where the DOM event will be triggered.

## CSS Selectors

Tour Guide uses and extended version of CSS Selectors.  Tour Guide adds several new selectors listed in the table below.

| Selector | Syntax | Description
| --- | --- | --- |
& | (css selector)&(child css selector) | Used for selecting elements with certain child elements. For example, `.some-class&p` would select an element with the `.some-class` class that has a `<p>` child element.
\| | (css selector)\|(fallback css selector) | Used for setting up fallbacks if a selector doesn't match an element on the page.  For example, `.might-not-exist\|.will-exist` would select an element with the class of `.will-exist` if there is no element that has the class `.might-not-exist`.
@ | (css selector)@(element attribute)=(regex) | Used for selecting elements that have elements with certian attribues.  For example, `p&@innerText=^example text$` would select a `<p>` element that has the text `example text`.

# Callbacks

## Overview

You may want to respond to certain tour guide events.  For example, you might want to modify an attribute on a user profile if they finish the tour.  This can be accomplished by registering callbacks when tour guide dispatches certain events.

## Actions

| Action Type | Description |
| --- | --- |
SHOW_TOUR_GUIDE | Dispatched when a tour has started.
HIDE_TOUR_GUIDE | Dispatched when the user has clicked the 'Skip Tour' button.
TOUR_FINISHED | Dispatched when the user has clicked the 'Finish' button.
NEXT_COACHMARK | Dispatched when the user advances to the next coach mark.

## Example
```
tourGuide.addCallback('TOUR_FINISHED', () => {
  console.log('Huzzah!!!  The user finished the tour!!!')
})
```

# Application Structure

TODO talk about mithril and redux

# Developing For Tour Guide

To get started with developing for Tour Guide, open a terminal and execute the following commands:

1.  Make sure Node.js version 8.9.4 or newer is installed.  To check the version of Node.js you have installed run `node -v`.  For instructions on how to insall Node.js visit <a href='https://nodejs.org/'>https://nodejs.org/</a>
2.  Clone this git repo and go to the root folder of the project.
3.  Install the project dependencies by running `yarn install`.
4.  Once the dependencies have been installed, launch a development server by running `npm start`.  This will run webpack and open a development sandbox at <a href='http://localhost:8080/'>http://localhost:8080/</a>

## Feedback, Questions, and Concerns

If you have any feedback or are having problems getting the project up and running, please contact Grant Heath at gheath@adobe.com.

# API

## actions

* [actions](#module_actions)
    * _static_
        * [.addCoachMark](#module_actions.addCoachMark) ⇒ <code>Action</code>
        * [.nextCoachMark](#module_actions.nextCoachMark) ⇒ <code>Action</code>
        * [.prevCoachMark](#module_actions.prevCoachMark) ⇒ <code>Action</code>
        * [.setCurrentCoachMark](#module_actions.setCurrentCoachMark) ⇒ <code>Action</code>
        * [.nextTour](#module_actions.nextTour) ⇒ <code>Action</code>
        * [.prevTour](#module_actions.prevTour) ⇒ <code>Action</code>
        * [.setCurrentTour](#module_actions.setCurrentTour) ⇒ <code>Action</code>
        * [.hideTourGuide](#module_actions.hideTourGuide) ⇒ <code>Action</code>
        * [.showTourGuide](#module_actions.showTourGuide) ⇒ <code>Action</code>
        * [.hideMore](#module_actions.hideMore) ⇒ <code>Action</code>
        * [.showMore](#module_actions.showMore) ⇒ <code>Action</code>
        * [.modifyCoachMarkAttributes](#module_actions.modifyCoachMarkAttributes)
    * _inner_
        * [~CoachMarkMedia](#module_actions..CoachMarkMedia) : <code>Object</code>
        * [~CoachMarkProperties](#module_actions..CoachMarkProperties) : <code>Object</code>
        * [~Action](#module_actions..Action) : <code>Object</code>

<a name="module_actions.addCoachMark"></a>

### actions.addCoachMark ⇒ <code>Action</code>
This action adds a new coach mark to the tour.
The new coach mark will be appeneded to the end of the tour.

**Kind**: static constant of [<code>actions</code>](#module_actions)
**Returns**: <code>Action</code> - - The addCoachMark action that was just crated.

| Param | Type | Description |
| --- | --- | --- |
| properties | <code>CoachMarkProperties</code> | An object that defines the coach mark properties. |
| [tourId] | <code>number</code> | An integer, the index of the tour that the coach mark will be added to. |

<a name="module_actions.nextCoachMark"></a>

### actions.nextCoachMark ⇒ <code>Action</code>
This triggers the next coach mark.
If the current coach mark is the last coach mark in the tour,
the tour will proceed at the first coach mark.

**Kind**: static constant of [<code>actions</code>](#module_actions)
<a name="module_actions.prevCoachMark"></a>

### actions.prevCoachMark ⇒ <code>Action</code>
This action triggers the previous coach mark.
If the current coach mark is the first coach mark in the tour,
the tour will proceed at the last coach mark.

**Kind**: static constant of [<code>actions</code>](#module_actions)
<a name="module_actions.setCurrentCoachMark"></a>

### actions.setCurrentCoachMark ⇒ <code>Action</code>
This action triggers the specified coach mark.
The provided coach mark id must be valid or an error will be thrown.

**Kind**: static constant of [<code>actions</code>](#module_actions)

| Param | Type | Description |
| --- | --- | --- |
| id | <code>Number</code> | An integer specifying the index of the coach mark that will be made current. |

<a name="module_actions.nextTour"></a>

### actions.nextTour ⇒ <code>Action</code>
This action triggers the next available tour.
The next tour will start at the first coach mark.

**Kind**: static constant of [<code>actions</code>](#module_actions)
<a name="module_actions.prevTour"></a>

### actions.prevTour ⇒ <code>Action</code>
This action triggers the previous tour.
The tour will start at the first coach mark.

**Kind**: static constant of [<code>actions</code>](#module_actions)
<a name="module_actions.setCurrentTour"></a>

### actions.setCurrentTour ⇒ <code>Action</code>
This action activates the specified tour.
The tour will start at the first coach mark.
The provided tour id must be valid or an error will be thrown.

**Kind**: static constant of [<code>actions</code>](#module_actions)

| Param | Type | Description |
| --- | --- | --- |
| id | <code>number</code> | An integer specifying the index of the tour that will be made active. |

<a name="module_actions.hideTourGuide"></a>

### actions.hideTourGuide ⇒ <code>Action</code>
This action hides the tour guide UI.
If the UI is already hidden, nothing will happen.

**Kind**: static constant of [<code>actions</code>](#module_actions)
<a name="module_actions.showTourGuide"></a>

### actions.showTourGuide ⇒ <code>Action</code>
This action shows the tour guide UI.
If the UI is already visible, nothing will happen.

**Kind**: static constant of [<code>actions</code>](#module_actions)
<a name="module_actions.hideMore"></a>

### actions.hideMore ⇒ <code>Action</code>
This action hides the tour guide navigation menu.
If the menu is already hidden, nothing wil happen.

**Kind**: static constant of [<code>actions</code>](#module_actions)
<a name="module_actions.showMore"></a>

### actions.showMore ⇒ <code>Action</code>
This action shows the tour guide navigation menu.
If the menu is already visible, nothing will happen.

**Kind**: static constant of [<code>actions</code>](#module_actions)
<a name="module_actions.modifyCoachMarkAttributes"></a>

### actions.modifyCoachMarkAttributes
This action modifies the attributes of an exisiting coach mark.

**Kind**: static constant of [<code>actions</code>](#module_actions)

| Param | Type | Description |
| --- | --- | --- |
| attributes | <code>CoachMarkProperties</code> | The attributes to be altered. |
| coachmarkId | <code>number</code> | An integer specifying the index of the coachmark to be altered. If not provided, the current coach mark will be used. |
| tourId | <code>\*</code> | An integer specifying the index of the tour containing the coach mark that will be altered. If not provided, the current tour will be used. |

<a name="module_actions..CoachMarkMedia"></a>

### actions~CoachMarkMedia : <code>Object</code>
**Kind**: inner typedef of [<code>actions</code>](#module_actions)
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| src | <code>string</code> | The url to the coach mark's media file. |
| width | <code>number</code> | The width of the media in pixels. |
| height | <code>number</code> | The height of the media in pixels. |

<a name="module_actions..CoachMarkProperties"></a>

### actions~CoachMarkProperties : <code>Object</code>
A plain javaScript object that specificies the properties of a coach mark.

**Kind**: inner typedef of [<code>actions</code>](#module_actions)
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| title | <code>string</code> \| <code>undefined</code> | The coach mark's title. |
| description | <code>string</code> \| <code>undefined</code> | The coach mark's description. |
| anchorPosition | <code>string</code> \| <code>undefined</code> | The coach mark's anchor position. |
| align | <code>string</code> \| <code>undefined</code> | The alignment of the coach mark. |
| media | <code>CoachMarkMedia</code> \| <code>undefined</code> | The coachmark's media. |

<a name="module_actions..Action"></a>

### actions~Action : <code>Object</code>
A flux standard action

**Kind**: inner typedef of [<code>actions</code>](#module_actions)
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | The action's type. |
| payload | <code>\*</code> | The action's payload. |
