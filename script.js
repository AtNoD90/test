// Element data
const elements = [
  {
    title: 'Element 1',
    image: 'image1.jpg',
    links: [
      { text: 'Link 1.1', url: 'https://example.com/link1.1' },
      { text: 'Link 1.2', url: 'https://example.com/link1.2' },
      { text: 'Link 1.3', url: 'https://example.com/link1.3' }
    ],
    imageLink: 'https://example.com/image1'
  },
  {
    title: 'Element 2',
    image: 'image2.jpg',
    links: [
      { text: 'Link 2.1', url: 'https://example.com/link2.1' },
      { text: 'Link 2.2', url: 'https://example.com/link2.2' },
      { text: 'Link 2.3', url: 'https://example.com/link2.3' }
    ],
    imageLink: 'https://example.com/image2'
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
