// cypress/elements/menuFormsElements.js
export const menuFormsElements = {

    //Elementos do Menu
    menuForms: '.card:contains("Forms")',
    itemPracticeForm: '#item-0 > .text',
    
    //Elementos do Formulario 
    firstName: '#firstName',
    lastName: '#lastName',
    inputEmail: '#userEmail',
    genderLabel: '.custom-control-label',
    mobileInput: '#userNumber',
    dateOfBirthInput: '#dateOfBirthInput',
    subjectsInput: '#subjectsInput',
    hobbiesLabel: '.custom-checkbox',
    pictureInput: '#uploadPicture',
    addressInput: '#currentAddress',
    stateInput: '#react-select-3-input',
    cityInput: '#react-select-4-input',

    //Elementos de validação
    submitButton: '#submit',
    successMessage: '.modal-content',

    //botão close do modal
    closeButton: '#closeLargeModal',

}
