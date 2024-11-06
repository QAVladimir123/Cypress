describe('Проверка авторизации', function () {

    it('Верный пароль и верный логин', function () {
         cy.visit('https://login.qa.studio');
         cy.get('#mail').type('german@dolnikov.ru');
         cy.get('#pass').type('iLoveqastudio1');
         cy.get('#loginButton').click();
         cy.get('#messageHeader').contains('Авторизация прошла успешно');
         cy.get('#exitMessageButton > .exitIcon').should('be.visible');
     })
     it('Восстановление пароля', function () {
        cy.visit('https://login.qa.studio');
        cy.get('#forgotEmailButton').click();
        cy.get('#mailForgot').type('Саша Ворса Мой Ментор')
        cy.get('#restoreEmailButton').click();
        cy.get('#messageHeader').should('be.visible');
       
    })
    it('Неверный пароль и верный логин', function () {
        cy.visit('https://login.qa.studio');
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#pass').type('неверный пароль');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').contains('Такого логина или пароля нет');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    })
    it('Верный пароль и неверный логин', function () {
        cy.visit('https://login.qa.studio');
        cy.get('#mail').type('Логин неверный');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    })
    it('Верный пароль и логин без @', function () {
        cy.visit('https://login.qa.studio');
        cy.get('#mail').type('germandolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    })
 
    it('Верный пароль и логин строчными буквами', function () {
        cy.visit('https://login.qa.studio');
        cy.get('#mail').type('GerMan@Dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').contains('Авторизация прошла успешно');//Это по тз
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    })
 })




