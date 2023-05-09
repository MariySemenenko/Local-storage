

// const form = document.querySelector('#message-form');

//  console.log(form.elements);
//  const userName = document.querySelector('userName');
//  const password = document.querySelector('password');
 
//  form.addEventListener('submit', (event) => {
//     event.preventDefault();

//     // const {
//     //     elements: { userName, password },
//     // } = event.currentTarget;
//     const form = event.currentTarget;
//     const inputList = form.elements;

//     // inputList = {
//     //     userName: input,
//     //     password: input,
//     // }
//     inputList.userName;
//     inputList.password;
//      console.log(userName.value, password.value);
//  });

const form = document.querySelector('#message-form');
const output = document.querySelector('#output');

const KEY = 'goit-example-message';
 updateOutput ();

form.addEventListener('submit', saveMessage);

function saveMessage (e) {
    e.preventDefault();
    localStorage.setItem(KEY, form.elements.message.value);
    updateOutput();
    form.reset();
};

function updateOutput () {
    output.textContent = localStorage.getItem(KEY || '');
}






