const main = document.querySelector('main#main');
main.remove();

const newHeader = document.createElement('h1');

newHeader.id = 'victory';
document.body.appendChild(newHeader);



newHeader.innerHTML = 'YOUR-NAME is the champion';
document.body.appendChild(newHeader);
