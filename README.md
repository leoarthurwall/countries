# COUNTRIES APP

Welcome to th countries app where you can search for any of the world countries by region in the dropdown menu, or directly in the input bar. Click on any country to see more detailed information. Once here, you can view the country on google maps, or click through to it's neighboring countries.

## FEATURES

This web application has a number of key features that are worth knowing about and trying for yourself:

### SEARCH INPUT BAR
- A custom built search bar that enables you to search for any country. It will display in a menu below all of the countries that start with the the letters you input. 

### DROPDOWN MENU
- The custom dropdown menu enables you to search for countries by region. Also, the Chevron is animated so it rotates 180 degrees in a smooth motion.

### DARKMODE TOGGLE
- This is another custom built feature. The Funtionality changes the color theme from light to dark when clicked. The button itself is custom made using some cool CSS tricks to make it transition smoothly from side to side.

### COUNTRY MODAL
- When you select a country, a modal will appear with more details about the country as well as a link to google maps, and option to click thrlugh to bordering countries.

### API DATA

### BORDER CLICK THROUGH
### CLOSE OFF CLICK
### GRID LAYOUT

## TECH STACK
- REACT
- TYPESCRIPT
- STYLED COMPONENTS


## LEARNING POINTS
- ARRAY METHODS
  - filter
  - Map
  - find
  - match
- Context
- off click
- toggle themes
- grid layout


## CHALLENGES

- making sure the page renders the same time an event is triggered
- displaying results based on user search

## FUTURE ITERATIONS

- display full names for border instead on abbreviations 

## TODO

- setTimeout for countryModal - currently when you click off and on too quickly, the aray hasnt filled and the container is blank
- add +1 for countries.length in the nav - DONE
- make countries modal responsive - DONE
- make nav responsive - DONE
- display country name rather than abbrev for borders
- link between countries when click on border - DONE
- style countryModal - DONE
- create a darkmode toggle - DONE
- create off click for both the dropdown and search - DONE
- Write Read me

how to return the border full word rather than the initials?

1 - Match the border initials with the country initials - .find method
2 - save it to a new array (array of countries)
3 - map through new array and display country.name.common

setModalCountryBorders(modalCountry[0].borders)

https://www.youtube.com/watch?v=zgd-z3R1o2k

