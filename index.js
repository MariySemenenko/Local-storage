

const form = document.querySelector('#message-form');

 console.log(form.elements);
 //const userName = document.querySelector('.user-name');
 
 form.addEventListener('submit', (event) => {
    event.preventDefault();

    // const {
    //     elements: { userName, password },
    // } = event.currentTarget;
    const form = event.currentTarget;
    const inputList = form.elements;

    // inputList = {
    //     userName: input,
    //     password: input,
    // }
    inputList.userName;
    inputList.password;
    console.log(userName.value, password.value);
 });