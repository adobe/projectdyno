<a name="module_actions"></a>

## actions

* [actions](#module_actions)
    * _static_
        * [.addCoachMark](#module_actions.addCoachMark) ⇒ <code>Action</code>
        * [.addTour](#module_actions.addTour) ⇒ <code>Action</code>
        * [.nextCoachMark](#module_actions.nextCoachMark) ⇒ <code>Action</code>
        * [.prevCoachMark](#module_actions.prevCoachMark) ⇒ <code>Action</code>
        * [.setCurrentCoachMark](#module_actions.setCurrentCoachMark) ⇒ <code>Action</code>
        * [.nextTour](#module_actions.nextTour) ⇒ <code>Action</code>
        * [.prevTour](#module_actions.prevTour) ⇒ <code>Action</code>
        * [.setCurrentTour](#module_actions.setCurrentTour) ⇒ <code>Action</code>
        * [.removeCoachMark](#module_actions.removeCoachMark) ⇒ <code>Action</code>
        * [.removeTour](#module_actions.removeTour) ⇒ <code>Action</code>
        * [.hideTourGuide](#module_actions.hideTourGuide) ⇒ <code>Action</code>
        * [.showTourGuide](#module_actions.showTourGuide) ⇒ <code>Action</code>
        * [.removeCoachMarkAttribute](#module_actions.removeCoachMarkAttribute) ⇒ <code>Action</code>
        * [.modifyCoachMarkAttributes](#module_actions.modifyCoachMarkAttributes) ⇒ <code>Action</code>
        * [.modifyTourAttributes](#module_actions.modifyTourAttributes) ⇒ <code>Action</code>
        * [.setState](#module_actions.setState) ⇒ <code>Action</code>
        * [.tourFinished](#module_actions.tourFinished) ⇒ <code>Action</code>
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

<a name="module_actions.addTour"></a>

### actions.addTour ⇒ <code>Action</code>
This actions adds a to tour.

**Kind**: static constant of [<code>actions</code>](#module_actions)  

| Param | Type | Description |
| --- | --- | --- |
| attributes | <code>\*</code> | The new tour's attributes. |

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
| id | <code>number</code> | An integer specifying the index of the coach mark that will be made current. |

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

<a name="module_actions.removeCoachMark"></a>

### actions.removeCoachMark ⇒ <code>Action</code>
This action removes the specified coach mark from the specified tour.

**Kind**: static constant of [<code>actions</code>](#module_actions)  

| Param | Type | Description |
| --- | --- | --- |
| coachMarkId | <code>number</code> | An integer specifying the index of the coach mark to be removed. If not provided, the current coach mark will be used. |
| tourId | <code>number</code> | An integer specifying the index of the tour containing the coach mark to be removed.  If not provided, the current tour will be used. |

<a name="module_actions.removeTour"></a>

### actions.removeTour ⇒ <code>Action</code>
This action removes the specified tour.

**Kind**: static constant of [<code>actions</code>](#module_actions)  

| Param | Type | Description |
| --- | --- | --- |
| tourId | <code>integer</code> | The index of the tour to be removed. If not provided, the current tour will be removed. |

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
<a name="module_actions.removeCoachMarkAttribute"></a>

### actions.removeCoachMarkAttribute ⇒ <code>Action</code>
This action removes an attribute from a coach mark.  If a required attribute is removed,
and error will be thrown.

**Kind**: static constant of [<code>actions</code>](#module_actions)  

| Param | Type | Description |
| --- | --- | --- |
| attributes | <code>CoachMarkProperties</code> | The attribute to be removed. |
| coachmarkId | <code>number</code> | An integer specifying the index of the coachmark to be altered. If not provided, the current coach mark will be used. |
| tourId | <code>number</code> | An integer specifying the index of the tour containing the coach mark that will be altered. If not provided, the current tour will be used. |

<a name="module_actions.modifyCoachMarkAttributes"></a>

### actions.modifyCoachMarkAttributes ⇒ <code>Action</code>
This action modifies the attributes of an exisiting coach mark.

**Kind**: static constant of [<code>actions</code>](#module_actions)  

| Param | Type | Description |
| --- | --- | --- |
| attributes | <code>CoachMarkProperties</code> | An object containing the attributes to be altered. |
| coachmarkId | <code>number</code> | An integer specifying the index of the coachmark to be altered. If not provided, the current coach mark will be used. |
| tourId | <code>number</code> | An integer specifying the index of the tour containing the coach mark that will be altered. If not provided, the current tour will be used. |

<a name="module_actions.modifyTourAttributes"></a>

### actions.modifyTourAttributes ⇒ <code>Action</code>
This action modifies the attributes of an existing tour.

**Kind**: static constant of [<code>actions</code>](#module_actions)  

| Param | Type | Description |
| --- | --- | --- |
| attributes | <code>\*</code> | An object containing the attributes to be altered. |
| tourId | <code>integer</code> | An integer specifying the index of the tour to be altered. |

<a name="module_actions.setState"></a>

### actions.setState ⇒ <code>Action</code>
This action is used to quickly replace large sections of app state.
For example it can be used to replace the old batch of tours with a new one.
The submitted state is a plain javascript with the same shape/schema at the app state.
The submitted state is shallowly merged with the old state.

**Kind**: static constant of [<code>actions</code>](#module_actions)  

| Param | Type | Description |
| --- | --- | --- |
| state | <code>\*</code> | The apps state |

<a name="module_actions.tourFinished"></a>

### actions.tourFinished ⇒ <code>Action</code>
Behaves the same as the hideTourGuide action.
It is dispatched when the user clicks the 'Finish' button.
This action is used instead of hideTourGuide so that a callback can
be used for when a user completes a tour.

**Kind**: static constant of [<code>actions</code>](#module_actions)  
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
| targetSelector | <code>string</code> \| <code>undefined</code> | A css selector for the page element that the coach mark will target. |
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

