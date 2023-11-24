const physicalRegBody = {
    lastname: 'Sochi',
    name: 'Sochi',
    phoneNumber: null,
    patronymic: 'Sochi',
    email: 'sochi4@mail.ru',
    confirmEmail: 'sochi4@mail.ru',
    password: 'Sochi4@2023',
    confirmPassword: 'Sochi4@2023'
}

const incorrectRegBody = {
    lastname: 'Sochi',
    name: 'Sochi',
    phoneNumber: null,
    patronymic: 'Sochi',
    email: 'sochi4mail.ru',
    confirmEmail: 'sochi4mail.ru',
    password: 'Sochi42023',
    confirmPassword: 'Sochi42023'
}

describe('Test registration processes', () => {
    beforeEach(() => {
        cy.viewport(1920, 1180);
        cy.visit('/login/physicalPerson');
        cy.url().should('include', '/login/physicalPerson');
    })

    it('success registration physical account', () => {
        cy.get('input[id="surname"]').type(physicalRegBody.lastname);
        cy.get('input[id="name"]').type(physicalRegBody.name);
        cy.get('input[id="patronymic"]').type(physicalRegBody.patronymic);
        cy.get('input[id="email"]').type(physicalRegBody.email);
        cy.get('input[id="confirmation-email"]').type(physicalRegBody.email);
        cy.get('input[id="pass"]').type(physicalRegBody.password);
        cy.get('input[id="confirmation-pass"]').type(physicalRegBody.password);

        cy.intercept(
            {
                method: 'POST',
                url: `/api/main/user/pc-client/registration?password=${physicalRegBody.password}`,
            },
            {
                body: {
                    lastname: 'Sochi',
                    name: 'Sochi',
                    patronymic: 'Sochi',
                    email: 'sochi4@mail.ru',
                },
                statusCode: 201,
            }
        ).as('regRequest')

        cy.contains('РЕГИСТРАЦИЯ').click();
        
        cy.wait('@regRequest')
            .then((interception) => {
                expect(interception.request.body)
                    .to.deep.equal({
                        lastname: 'Sochi',
                        name: 'Sochi',
                        phoneNumber: null,
                        patronymic: 'Sochi',
                        email: 'sochi4@mail.ru',
                    })   
            }
        )

        cy.url().should('include', '/login');

        cy.contains('Успешно зарегистрированы');
    })

    it('registration with incorrect email and password fields', () => {
        cy.get('input[id="surname"]').type(incorrectRegBody.lastname);
        cy.get('input[id="name"]').type(incorrectRegBody.name);
        cy.get('input[id="patronymic"]').type(incorrectRegBody.patronymic);
        cy.get('input[id="email"]').type(incorrectRegBody.email);
        cy.get('input[id="confirmation-email"]').type(incorrectRegBody.email);
        cy.get('input[id="pass"]').type(incorrectRegBody.password);
        cy.get('input[id="confirmation-pass"]').type(incorrectRegBody.password);

        cy.contains('РЕГИСТРАЦИЯ').click();

        cy.contains("Пароль должен содержать не менее 8 символов, одну строчную и прописную буквы английского алфавита и спец символы");
        cy.contains('Некорректный email');
    })
})