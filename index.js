"use strict"

const buttons = document.querySelectorAll('.buttons');
const $search = document.getElementById('search-bar')
const login = document.querySelector('.Login')
const lclose = document.getElementById('sclose')
const login2 = document.querySelector('.flogin')
const loginButton = document.getElementById('loginButton')
const username = document.getElementById('username')
const password = document.getElementById('password')
const logon = document.getElementById('logon')
const lerror = document.getElementById('error')
const google = document.getElementById('google')
const bing = document.getElementById('bing')
let valid = false

logon.onclick = () =>
{
    
    
    if(username.value.trim() == 'Andre' && password.value.trim() == 'JavaBasics123!')
    {
        valid = true;
    }
    else 
    {
        valid = false;
    }

    if(valid)
    {
        login.style.visibility = 'hidden'
        login2.style.visibility = 'hidden'
        lerror.style.visibility = 'hidden'
       
        google.style.cursor = "pointer"
        bing.style.cursor = "pointer"
        

    }
    else {
        lerror.style.visibility = 'visible'
        username.value = ""
        password.value = ""
    }
}




loginButton.addEventListener('click', () =>
{
    login.style.visibility = 'visible'
    login2.style.visibility = 'visible'

})

lclose.addEventListener('click', () =>
{
    login.style.visibility = 'hidden'
    login2.style.visibility = 'hidden'
    lerror.style.visibility = 'hidden'
})
    






    for(const i of buttons)
    {
    
    
        i.addEventListener('click', () =>
        {
            if(valid)
            {
                
                const search = $search.value.trim();
                
                if(i.id == "google")
                {
                    window.location.href = `https://www.google.com/search?q=${search}`
                }
                else if (i.id == ('bing'))
                {
                    window.location.href = `https://www2.bing.com/search?q=${search}`
                }
            }
        })
    }




