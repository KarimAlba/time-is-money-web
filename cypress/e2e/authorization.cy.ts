describe('Test authorization processes', () => {
    beforeEach(() => {
        cy.viewport(1920, 1080);
    })

    const exampleClient = {
        email: 'karim_skiy@mail.ru',
        password: 'Karim@2023'
    }

    it('vizit authorization page', () => {
        cy.visit('/login');
        cy.url().should('include', '/login');

        cy.get('input[id="id_email"]').type('karim_skiy@mail.ru').should('have.value', exampleClient.email);
        cy.get('input[id="pass"]').type('Karim@2023').should('have.value', exampleClient.password);

        cy.get('.animateContainer img').click()
            .then(() => cy.get('input[type="text"]').last()
                .should('have.value', exampleClient.password))

        cy.intercept({
            pathname: '/api/main/user/pc-client/auth',
            query: {
                email: exampleClient.email,
                password: exampleClient.password,
                isWorkStationOwner: 'true'
            }
        })
        .as('authRequest')

        cy.contains('ВОЙТИ').click();

        cy.wait('@authRequest')
            .then(() => {
                cy.location('pathname').should('eq', '/user')
                cy.get('.person-info')
                    .should('be.visible')
            })
    })
})