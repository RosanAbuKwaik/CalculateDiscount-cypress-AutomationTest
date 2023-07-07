/// <reference types="cypress"/>

describe("Calculate Discount", () => {
  it("get the price before and after the discount for each element", () => {
    cy.visit("https://magento.softwaretestingboard.com/"); //visit website :
    cy.get("#ui-id-5").click(); // go to the men header tab
    cy.get(".item").contains("Hoodies & Sweatshirts").click(); // go to the "Hoodies and Sweatshirts section "
    cy.get(".price-container").as("PriceOftheHoodies"); // catch the price  div text  (As Low as $...) will lable it to use it easy
    cy.get("@PriceOftheHoodies").find(".price").invoke("text").as("itemPrice"); //to catch only the text price will use find array to catch it   $50 invoke as atext
    cy.get(":nth-child(5) > .field > .control > #limiter").select("36");
    cy.get("@itemPrice").then((items) => {
      let priceitems = items.split("$");
      for (let i = 0; i < priceitems.length; i++) {
        cy.log("item before the discount" + priceitems[i]); // to print items before the Discount (10%)
        cy.log("item after discount is: " + parseInt(priceitems[i] * 0.9)); // to print items After Discount  (10%) 
      }
    });
  });
});
