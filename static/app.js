// Mock data representing product information
const mockData = [
  {
    id: "A1",
    name: "Vacuum Cleaner",
    rrp: "99.99",
    info: "The most powerful vacuum in the world.",
  },
  {
    id: "A2",
    name: "Leaf Blower",
    rrp: "303.33",
    info: "This product will blow your socks off.",
  },
  {
    id: "B1",
    name: "Chocolate Bar",
    rrp: "22.40",
    info: "Deliciously overpriced chocolate.",
  },
];

// Function to populate products in the DOM
const populateProducts = () => {
  // Selecting the container for products
  const products = document.querySelector("#products");
  // Clearing any existing content inside the container
  products.innerHTML = "";
  // Looping through mock data to create product items
  for (const product of mockData) {
    //Creating a product item element
    const item = document.createElement("product-item");
    // Looping through keys to create spans for each piece of product information
    for (const key of ["name", "rrp", "info"]) {
      // Creating a span element for the current key
      const span = document.createElement("span");
      // Setting the slot attribute to match the key
      span.slot = key;
      // Setting the text content of the span to the corresponding value from the mock data
      span.textContent = product[key];
      // Appending the span to the product item
      item.appendChild(span);
    }
    // Appending the product item to the products container
    products.appendChild(item);
  }
};

// Event listener for fetching and populating products
document.querySelector("#fetch").addEventListener("click", async () => {
  populateProducts();
});

// Defining a custom element for a product item
customElements.define(
  "product-item",
  class Item extends HTMLElement {
    constructor() {
      super();
      // Cloning the template content for the product item and appending it to the shadow DOM
      const itemTmpl = document.querySelector("#item").content.cloneNode(true);
      this.attachShadow({ mode: "open" }).appendChild(itemTmpl);
    }
  }
);
