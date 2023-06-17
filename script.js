// Link data
const links = [
  { name: 'Link 1', url: 'https://example.com', image: 'link1.png' },
  { name: 'Link 2', url: 'https://example.com', image: 'link2.png' },
  { name: 'Link 3', url: 'https://example.com', image: 'link3.png' },
  // Add more links as needed
];

// Create link items
const linkContainer = document.getElementById('link-container');

links.forEach(link => {
  const linkItem = document.createElement('a');
  linkItem.classList.add('link-item');
  linkItem.href = link.url;

  const image = document.createElement('img');
  image.src = link.image;
  image.alt = link.name;

  const name = document.createElement('span');
  name.textContent = link.name;

  linkItem.appendChild(image);
  linkItem.appendChild(name);
  linkContainer.appendChild(linkItem);
});
