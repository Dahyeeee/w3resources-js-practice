const url = document.URL;
//window.location.href
const result = document.querySelector('.result');

console.log(`Your current URL is ${url}.`);
result.innerHTML = 'Your current URL is ' + url 
                +'<br/> your current domain name is ' + window.location.hostname
                +'<br/> your current path and filename is '+window.location.pathname
                +'<br/>your current web protocol is '+window.location.protocol;