// Mock data representing product information
const API = "http://localhost:3000/";

// Function to populate products in the DOM
const populateProducts = async (category) => {
  // Selecting the container for products
  const products = document.querySelector("#products");
  // Clearing any existing content inside the container
  products.innerHTML = "";
  const res = await fetch(`${API}/${category}`);
  const data = await res.json();
  // Looping through mock data to create product items
  for (const product of data) {
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

const category = document.querySelector("#category");

category.addEventListener("input", async ({ target }) => {
  await populateProducts(target.value);
});

// Defining a custom element for a product item
customElements.define(
  "product-item",
  class Item extends HTMLElement {
    constructor() {
      super();
      // Cloning the template content for the product item and appending it to the shadow DOM
      const itemTmpl = document.querySelector("#item").content;
      this.attachShadow({ mode: "open" }).appendChild(itemTmpl.cloneNode(true));
    }
  }
);
