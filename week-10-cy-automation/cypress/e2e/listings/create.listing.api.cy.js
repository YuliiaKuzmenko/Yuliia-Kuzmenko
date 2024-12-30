describe("Listings", () => {
  before(() => {
    cy.visit("/");
    cy.loginApi();
    cy.visit("/dashboard/user/profile");
  });

  it("Should create listings", () => {
    // loginPage.login(users.Admin.email, users.Admin.password);
    cy.fixture("img.png").then((image) => {
      //convert image to binary
      const blob = Cypress.Blob.base64StringToBlob(image, "image/png");

      const formData = new FormData();
      formData.append("images", blob);
      formData.append("title", "Yuliia API house");
      formData.append("description", "Fancy house close to the center");
      formData.append("address", "117 Port");
      formData.append("city", "Irvine");
      formData.append("state", "CA");
      formData.append("zipCode", 75206);
      formData.append("price", 589000);
      formData.append("bedrooms", 2);
      formData.append("bathrooms", 3);
      formData.append("garage", 2);
      formData.append("sqft", 924);
      formData.append("lotSize", 8000);
      formData.append("isPublished", false);

      cy.request({
        method: "POST",
        url: "/api/estate-objects",
        body: formData,
        headers: {
          Authorization: `Bearer ${window.localStorage.getItem("accessToken")}`,
        },
      }).then((response) => {
        expect(response.status).to.be.oneOf([200, 201]);
        const enc = new TextDecoder("utf-8");
        const data = new Uint8Array(response.body);
        const responseBody = JSON.parse(enc.decode(data));

        console.log(response.body);
      });
    });
  });
});
