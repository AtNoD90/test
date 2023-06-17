// Element data
const elements = [
  {
    title: 'Element 1',
    image: 'logo.PNG',
    links: [
      { text: 'Link 1.1', url: 'https://atnod90.github.io/test' },
      { text: 'Link 1.2', url: 'https://atnod90.github.io/test' },
      { text: 'Link 1.3', url: 'https://atnod90.github.io/test' }
    ],
    imageLink: 'https://atnod90.github.io/test'
  },
  {
    title: 'Element 2',
    image: 'logo.PNG',
    links: [
      { text: 'Link 2.1', url: 'https://atnod90.github.io/test' },
      { text: 'Link 2.2', url: 'https://atnod90.github.io/test' },
      { text: 'Link 2.3', url: 'https://atnod90.github.io/test' }
    ],
    imageLink: 'https://atnod90.github.io/test'
  },
  // Add more elements as needed
];

// Create element list
const elementList = document.getElementById('element-list');

elements.forEach(element => {
  const div = document.createElement('div');
  div.classList.add('element');

  const h3 = document.createElement('h3');
  h3.textContent = element.title;

  div.appendChild(h3);

  const imageLink = document.createElement('a');
  imageLink.href = element.imageLink;

  const image = document.createElement('img');
  image.src = element.image;
  image.alt = element.title;
  imageLink.appendChild(image);

  div.appendChild(imageLink);

  element.links.forEach(link => {
    const a = document.createElement('a');
    a.textContent = link.text;
    a.href = link.url;
    div.appendChild(a);
  });

  elementList.appendChild(div);
});
