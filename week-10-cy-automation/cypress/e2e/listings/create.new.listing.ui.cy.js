import realEstateNewPage from "../../page_objects/realEstate.new.page";
import homePage from "../../page_objects/home.page";
import featuredListingsPage from "../../page_objects/featuredListingsPage";

describe("New listings", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.loginApi();
    cy.visit("/dashboard/real-estate/new");
  });

  it("Should create listings", () => {
    realEstateNewPage.estateTitle.type("UI Test new listing");
    realEstateNewPage.Description.type("Test new estate:Yulia s test");
    realEstateNewPage.City.type("Los Angeles");
    realEstateNewPage.Address.type("1888 Port");
    realEstateNewPage.zipCode.type("92563");
    realEstateNewPage.stateDropdownList.click();
    realEstateNewPage.stateCA.click();
    realEstateNewPage.price.type("6000000");
    realEstateNewPage.bedroomsInputField.type("4");
    realEstateNewPage.bathroomsInputField.type("2");
    realEstateNewPage.garageInputField.type("2");
    realEstateNewPage.sqftInputField.type("980");
    realEstateNewPage.lotSizeInputField.type("8900");

    realEstateNewPage.dropDown.attachFile("img.png", {
      subjectType: "drag-n-drop",
    });
    realEstateNewPage.pusblishToggle.click();
    realEstateNewPage.postButton.click();
    cy.wait(1000);
    cy.visit("/dashboard/real-estate/list");
    cy.get(
      'div[class*="MuiContainer-root MuiContainer-maxWidthLg css-1qsxih2"]'
    ).contains("Yuliia API house");
  });

  it("Created listing is dispayed on feature listing page with correct data", () => {
    cy.visit("/");
    homePage.searchInputFieldMainPage.type("Test new listing");
    homePage.startSearchButtonMainPage.click();
    featuredListingsPage.listingMoreInfoButton.first().click();
    featuredListingsPage.currentPropertyGarage
      .contains("2")
      .should("be.visible");
    featuredListingsPage.currentPropertyLotSize
      .contains("8900")
      .should("be.visible");
    featuredListingsPage.currentPropertyPrice
      .contains("$ 6,000,000")
      .should("be.visible");
    });
  });

    after(() => {
      // Visit the listings page
      cy.visit(
        "/featured-listings?price=500000-10000000&keyword=UI+Test+new+listing"
      );

      // Click on the "More Info" button to navigate to the listing details page
      featuredListingsPage.listingMoreInfoButton.first().click();

      // Extract the ID from the URL
      cy.url().then((currentUrl) => {
        const id = currentUrl.split("/").pop(); // Extract the ID from the URL
        cy.log("Extracted ID:", id);

        // Use the extracted ID to send a DELETE request
        cy.request({
          method: "DELETE",
          url: `/api/estate-objects/${id}`, // Use the extracted ID
          headers: {
            Authorization: `Bearer ${window.localStorage.getItem(
              "accessToken"
            )}`, // Add authorization token
          },
        }).then((response) => {
          // Validate the response
          expect(response.status).to.eq(200);
          cy.log("Listing successfully removed");
        });
      });
    });
