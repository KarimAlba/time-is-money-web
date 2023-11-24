const pluginName = 'Plugin1';

describe('Testing actions with plugin tables', () => {
    beforeEach(() => {
        cy.viewport(1920, 1180);
        cy.visit('/login');
        
        cy.get('input[id="id_email"]').type('karim_skiy@mail.ru');
        cy.get('input[id="pass"]').type('Karim@2023');

        cy.contains('ВОЙТИ').click();

        cy.url().should('include', '/user');
    })

    // it('download qr-code', () => {
    //     cy.get('.table-container a').first().click();
    //     cy.readFile('@downloads/66QR-code.png')
    //         .should('exist')
    // })

    it('create new plugin', () => {
        cy.get('.person-info_license .checkbox-button').click()
            .then(() => cy.get('.person-info_license .download-button').click())

        cy.get('.plugin-modal').should('be.visible');
        cy.get('.plugin-modal input').type(pluginName).should('have.value', 'Plugin1');

        cy.intercept(
            {
                method: 'POST',
                url: `/api/main/work-station/create?name=${pluginName}`
            },
            {
                body: {
                    id: 66,
                    name: 'Plugin1',
                    expiredAt: "2023-11-11T12:51:57.763031+03:00",  
                    ownerId: 21,
                    ownerType: 'INDIVIDUAL',
                    textQr: 'id_66',
                    filledApplications: 0,
                    producedDocuments: 0,
                    secretId: 'bd671cb4-63e8-4cca-8033-c0cac588be2b'
                }
            }
        ).as('createPlugin')

        cy.get('.plugin-modal button').click()

        cy.wait('@createPlugin')
            .then(() => {
                cy.get('.table-container').should('be.visible');
                cy.contains(pluginName);
            })

        cy.get('.person-info_license .checkbox-button').click()
    })

    it('do plugin prolongation', () => {
        cy.intercept(
            {
                method: 'PATCH',
                url: `/api/main/work-station/prolongation?month=1&id=${66}`
            },
            {
                statusCode: 204
            }
        ).as('prolongationReg')

        cy.contains('ПРОДЛИТЬ').click();

        cy.wait('@prolongationReg').its('response.statusCode').should('eq', 204)

        cy.contains('11.01.2024')
    })
})