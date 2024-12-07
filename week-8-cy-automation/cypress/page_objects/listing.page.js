class ListingPage{
  get propertyTitle(){
    return cy.get('h3[class*="MuiTypography-root MuiTypography-h3"]');
  }
  get propertyBedroomsNum(){
    return cy.get('div:nth-of-type(6)[class *="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6"]')
  }
  get propertyPrice(){
    return cy.get('.MuiGrid-container.MuiGrid-root.MuiGrid-spacing-xs-2.css-isbt42 > div:nth-of-type(1)');
  }
}

export default new ListingPage();