import '../../support/commands'
import SearchResultsPage from "../../page-object/searchResultsPage"
import AccessoriesPage from "../../page-object/accessoriesPage"

describe('UI tests', () => {

    before(() => {
        cy.fixture('product').then(data => {
            cy.wrap(data).as('productData')
        })
    })

    it('Positive: Create user', () => {
        cy.get('@productData').then((productData) => {
            cy.log("GIVEN User is at Accessories Page")
            AccessoriesPage.open()

            cy.log("WHEN User performs search product by name")
            AccessoriesPage.performSearch(productData.name)

            SearchResultsPage.getProductByDocId(productData.url)
                .should('exist')

        })

    })

})
