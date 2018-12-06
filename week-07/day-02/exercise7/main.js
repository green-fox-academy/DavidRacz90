const planetData = [
  {
    category: 'inhabited',
    content: 'Foxes',
    asteroid: true,
  },
  {
    category: 'inhabited',
    content: 'Whales and Rabbits',
    asteroid: true,
  },
  {
    category: 'uninhabited',
    content: 'Baobabs and Roses',
    asteroid: true,
  },
  {
    category: 'inhabited',
    content: 'Giant monsters',
    asteroid: false,
  },
  {
    category: 'inhabited',
    content: 'Sheep',
    asteroid: true,
  },
];



const ul = document.querySelector('ul');
const li = document.querySelector('li');
ul.removeChild(li);



planetData.forEach(e => {
  const isAsteroid = document.createElement('li');
  if(e.asteroid){
    isAsteroid.textContent = e.content;
    ul.appendChild(isAsteroid);
  }
})
