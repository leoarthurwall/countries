## TODO

- setTimeout for countryModal - currently when you click off and on too quickly, the aray hasnt filled and the container is blank
- add +1 for countries.length in the nav
- make countries modal responsive - DONE
- make nav responsive - DONE
- display country name rather than abbrev for borders
- link between countries when click on border
- style countryModal - DONE
- create a darkmode toggle - DONE

how to return the border full word rather than the initials?

1 - Match the border initials with the country initials - .find method
2 - save it to a new array (array of countries)
3 - map through new array and display country.name.common

setModalCountryBorders(modalCountry[0].borders)

modalCountry[0].borders.find((border) => border === countries.)


  setModalCountryBorders(
      modalCountry[0].borders?.filter((country: any) =>
        countries.includes(country)
      )

    );