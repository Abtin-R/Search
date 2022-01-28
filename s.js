"use strict"

const $firstName = document.getElementById('first')
const $lastName = document.getElementById('last')
const $email = document.getElementById('email')
const $user = document.getElementById('username')
const $password = document.getElementById('password')




const $send = document.getElementById('send');

const emailPattern = /^(?=^.{8,}$)[-A-Za-z0-9]+([.-][a-zA-Z0-9]+)@[A-Za-z0-9]+([.-][a-zA-Z0-9]+).[A-Za-z]{2,}$/;

$send.addEventListener('click', () => {
    let firstName = $firstName.value.trim();
    let lastName = $lastName.value.trim();
    let email = $email.value.trim();
    let username = $user.value.trim();
    let password = $password.value.trim();
    let message = '';
    let valid = true;
    let count = 0;

    if (firstName === '') {
        message += 'First name is required\n';
        valid = false;
        count++;
    }

    if (lastName === '') {
        message += 'Last name is required\n';
        valid = false;
        count++;
    }

    if (username === '')
    {
        message += 'Username is required\n';
        valid = false;
        count++;
    }

    if (password === '')
    {
        message += 'password is required\n';
        valid = false;
        count++;
    }

    if (email === '') {
        message += 'Email is required\n';
        valid = false;
        count++;
    } else {
        if (!emailPattern.test(email)) {
            message += 'Email is not valid\n';
            valid = false;
        }
    }

    if (count === 5) {
        message = 'All input fields are empty';
    }

    if (!valid) {
        p.style.visibility = 'visible';
        p.innerText = message
    } 
});