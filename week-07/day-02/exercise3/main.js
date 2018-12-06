let array = ['apple', 'banana', 'cat', 'dog'];

const listItems = document.querySelectorAll('li'); 

for(i = 0; i < array.length; i++) {
    listItems[i].textContent = array[i];
}

let list = document.querySelector('ul');

list.classList.add('limegreen');