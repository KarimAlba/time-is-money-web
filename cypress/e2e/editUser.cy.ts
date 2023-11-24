describe('Edit user', () => {
    beforeEach(() => {
        cy.viewport(1920, 1180);
        cy.visit('/login');
        
        cy.get('input[id="id_email"]').type('karim_skiy@mail.ru');
        cy.get('input[id="pass"]').type('Karim@2023');

        cy.contains('ВОЙТИ').click();
    })

    it('success edit user', () => {
        cy.wait(2500)
        cy.contains('Редактировать данные').click();
        
        cy.get('.edit-user_data input').first().clear().type('Fatkullin').should('have.value', 'Fatkullin');

        cy.intercept(
            {
                method: 'PATCH',
                url: '/api/main/user'
            }, 
            {
                body: {
                    email: "karim_skiy@mail.ru",
                    lastname: "Fatkullin",
                    name: "Karim",
                    patronymic: "Альбертович",
                    phoneNumber: null
                },
                statusCode: 204
            }
        ).as('editResponse')

        cy.contains('ПОДТВЕРДИТЬ').click();

        cy.wait('@editResponse')
            .then((interception) => {
                expect(interception.request.body)
                    .to.deep.equal({
                        email: "karim_skiy@mail.ru",
                        lastname: "Fatkullin",
                        name: "Karim",
                        patronymic: "Альбертович",
                        phoneNumber: null
                    })  
            })
            .its('response.statusCode').should('eq', 204);
            cy.contains('Успешно обновлено');
    })
})