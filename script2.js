// Sample data containing the elements with text and image links
const data = [
  {
    text1: 'Link 1 Text',
    link1: 'https://example.com/link1',
    text2: 'Link 2 Text',
    link2: 'https://example.com/link2',
    text3: 'Link 3 Text',
    link3: 'https://example.com/link3',
    imageLink: 'https://example.com/image.jpg'
  },
  {
    text1: 'Link 4 Text',
    link1: 'https://example.com/link4',
    text2: 'Link 5 Text',
    link2: 'https://example.com/link5',
    text3: 'Link 6 Text',
    link3: 'https://example.com/link6',
    imageLink: 'https://example.com/image2.jpg'
  }
  // Add more elements as needed
];

// Function to create and append an element to the container
function createElement(elementData) {
  const elementContainer = document.getElementById('element-container');

  // Create a new element div
  const element = document.createElement('div');
  element.className = 'element';

  // Create text hyperlinks
  const link1 = document.createElement('a');
  link1.href = elementData.link1;
  link1.textContent = elementData.text1;

  const link2 = document.createElement('a');
  link2.href = elementData.link2;
  link2.textContent = elementData.text2;

  const link3 = document.createElement('a');
  link3.href = elementData.link3;
  link3.textContent = elementData.text3;

  // Create image link
  const imageLink = document.createElement('a');
  imageLink.href = elementData.imageLink;

  const image = document.createElement('img');
  image.src = elementData.imageLink;
  image.alt = 'Image';

  // Append the elements to the container
  element.appendChild(link1);
  element.appendChild(link2);
  element.appendChild(link3);
  imageLink.appendChild(image);
  element.appendChild(imageLink);

  elementContainer.appendChild(element);
}

// Loop through the data and create elements for each item
data.forEach(elementData => {
  createElement(elementData);
});
