// JavaScript code to dynamically create the list

// Sample data (replace with your own data)
const data = [
    {
        text1: "Link 1",
        link1: "https://example.com/link1",
        text2: "Link 2",
        link2: "https://example.com/link2",
        text3: "Link 3",
        link3: "https://example.com/link3",
        image: "https://example.com/image.jpg"
    },
    {
        text1: "Link 4",
        link1: "https://example.com/link4",
        text2: "Link 5",
        link2: "https://example.com/link5",
        text3: "Link 6",
        link3: "https://example.com/link6",
        image: "https://example.com/image.jpg"
    }
];

// Get the container element
const listContainer = document.getElementById("element-list");

// Iterate over the data and create list elements dynamically
data.forEach(item => {
// Create the list item element
const listItem = document.createElement("li");

// Create the image element
const image = document.createElement("img");
image.src = item.image;
listItem.appendChild(image);

// Create the three text hyperlinks
for (let i = 1; i <= 3; i++) {
    const linkText = item["text" + i];
    const linkHref = item["link" + i];

    const link = document.createElement("a");
    link.href = linkHref;
    link.textContent = linkText;
    listItem.appendChild(link);
    }

// Add the list item to the list container
listContainer.appendChild(listItem);
});
