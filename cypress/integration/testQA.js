/// <reference types="Cypress" />

const { time } = require('console')

var timeout = { timeout: 60000 }

describe('QA Interview Test', () => {
  it('create end to end UI automation test with user story', () => {
    // 1.	As a user, I want to login to gist.github.com 
    cy.visit('https://gist.github.com/');
    cy.get('div[class="Header-item f4 mr-0"]', timeout).contains('Sign in', timeout).click();
    cy.get('#login_field', timeout).type('TestQAcoba');
    cy.get('#password', timeout).type('12345qatest');
    cy.get('.btn', timeout).click();
    cy.get('div[class="Header-item mr-0 mr-md-3"]', timeout).click();
    // 2.	As a user, I want to create a gist 
    cy.get('input[class="form-control input-block input-contrast"]',timeout).type('Test Create a gist');
    cy.get('input[class="form-control js-gist-filename js-blob-filename"]',timeout).type('Test1.txt');
    cy.get('div[class="CodeMirror-lines"]').type('1. create gists Success');
    cy.get('div[class="CodeMirror-lines"]').type('{enter}2. Just Try it');
    cy.get('button[class="hx_create-pr-button js-sync-select-menu-button btn-primary btn BtnGroup-item"',timeout).click();
    // 3.	As a user, I want to see the list of gists 
    cy.get('summary[class="Header-link name"]',timeout).click();
    cy.get('div[class="dropdown-divider"]',timeout).eq(0).should('exist');
    cy.get('a[class="dropdown-item"',timeout).contains('Your gists').click();
    //4.	As a user, I want to delete a gist 
    cy.contains('Test1',timeout).click();
    cy.get('button[class="btn-danger btn-sm btn"]',timeout).click();
    // 5.	As a user, I want to edit a gist 
    cy.contains('Test.txt',timeout).click();
    cy.get('ul[class="d-md-flex d-none pagehead-actions float-none"',timeout).contains('Edit',timeout).click();
    cy.get('div[class="CodeMirror-lines"]').type('{enter}2. Edit');
    cy.get('button[class="btn-primary btn"',timeout).click();

    //6.	As a user, I want to logout from gist.github.com 
    cy.get('summary[class="Header-link name"]',timeout).click();
    cy.get('div[class="dropdown-divider"]',timeout).eq(0).should('exist');
    cy.get('button[class="dropdown-item dropdown-signout"',timeout).click();
  });
});
