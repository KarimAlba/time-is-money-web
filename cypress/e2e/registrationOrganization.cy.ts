const organizationRegBody = {
    lastname: 'Ivanov',
    name: 'Ivan',
    phoneNumber: null,
    patronymic: 'Ivanovich',
    email: 'director@mail.ru',
    organizationName: 'OOO Michlene',
    address: 'Germany',
    inn: '1122111133',
    kpp: '123321123'
}

const password = 'Director@2023';

const incorrectRegBody = {
    lastname: 'Ivanov',
    name: 'Ivan',
    phoneNumber: null,
    patronymic: 'Ivanovich',
    email: 'directormail.ru',
    organizationName: 'OOO Michlene',
    address: 'Germany',
    inn: '1',
    kpp: '123321123'
};

const incorrectPassword = 'Director2023'

describe( 'Test registration organization processess', () => {
    beforeEach(() => {
        cy.viewport(1920, 1180);
        cy.visit('/login/entity');
        cy.url().should('include', '/login/entity');
    })

    it('success registration organization', () => {
        cy.get('input[id="name-of-company"]').type(organizationRegBody.organizationName)
        cy.get('input[id="legal-address"]').type(organizationRegBody.address)
        cy.get('input[id="inn"]').type(organizationRegBody.inn)
        cy.get('input[id="checkpoint"]').type(organizationRegBody.kpp)
        cy.get('input[id="surname"]').type(organizationRegBody.lastname);
        cy.get('input[id="name"]').type(organizationRegBody.name);
        cy.get('input[id="patronymic"]').type(organizationRegBody.patronymic);
        cy.get('input[id="email"]').type(organizationRegBody.email);
        cy.get('input[id="confirmation-email"]').type(organizationRegBody.email);
        cy.get('input[id="pass"]').type(password);
        cy.get('input[id="confirmation-pass"]').type(password);

        cy.get('.eye-image-entity').first().click()
            .then(() => {
                cy.get('input[id="pass"]')
                    .should('have.value', password)
                    .and('have.attr', 'type', 'text')
            })

        cy.intercept(
            {
                method: 'POST',
                url: `/api/main/organization/registration?password=${password}`,
            },
            {
                body: {
                    id: 15,
                    userId: 63,
                    organizationName: 'OOO Michlene',
                    organizationAddress: 'Germany',
                    inn: '1122111133',
                    kpp: '123321123'
                },
                statusCode: 201,
            }
        ).as('regRequest');

        cy.contains('РЕГИСТРАЦИЯ').click();

        cy.wait('@regRequest')
            .then((interception) => {
                expect(interception.request.body)
                    .to.deep.equal({
                        ...organizationRegBody
                    })   
            }
        )

        cy.url().should('include', '/login');

        cy.contains('Успешно зарегистрированы');
    })

    it('registration with incorrect inn, email and password fields', () => {
        cy.get('input[id="name-of-company"]').type(incorrectRegBody.organizationName)
        cy.get('input[id="legal-address"]').type(incorrectRegBody.address)
        cy.get('input[id="inn"]').type(incorrectRegBody.inn)
        cy.get('input[id="checkpoint"]').type(incorrectRegBody.kpp)
        cy.get('input[id="surname"]').type(incorrectRegBody.lastname);
        cy.get('input[id="name"]').type(incorrectRegBody.name);
        cy.get('input[id="patronymic"]').type(incorrectRegBody.patronymic);
        cy.get('input[id="email"]').type(incorrectRegBody.email);
        cy.get('input[id="confirmation-email"]').type(incorrectRegBody.email);
        cy.get('input[id="pass"]').type(incorrectPassword);
        cy.get('input[id="confirmation-pass"]').type(incorrectPassword);

        cy.contains('РЕГИСТРАЦИЯ').click();

        cy.contains('Некорректный email');
        cy.contains('Поле "ИНН" должно состоять из 10 цифр');
        cy.contains("Пароль должен содержать не менее 8 символов, одну строчную и прописную буквы английского алфавита и спец символы");
    })
})