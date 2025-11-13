let openBtn = document.querySelector(".open");
let closeBtn = document.querySelector(".close");
let sideBar = document.querySelector(".sideBar");
let body = document.getElementById("body");
// ---------  Side bar ----------------
openBtn.onclick = function () {
  sideBar.classList.remove("hide");
  closeBtn.classList.remove("hide");
  body.classList.add("black-opacity");
  disableBodyScroll();
};

closeBtn.onclick = function () {
  sideBar.classList.add("hide");
  closeBtn.classList.add("hide");
  body.classList.remove("black-opacity");
  enableBodyScroll();
};

function disableBodyScroll() {
  document.body.style.overflow = "hidden";
}

function enableBodyScroll() {
  document.body.style.overflow = "";
}
// ---------  End Of Side bar ----------------
// to top button 
var mybutton = document.getElementById("topButton");
function topFunction() {
  document.documentElement.scrollTop = 0; 
}
// ========================================================
const categories = [
  "All",
  "groceries",
  "beauty",
  "fragrances",
  "furniture",
  "smartphones",
  "laptops",
  "home-decoration",
  "kitchen-accessories",
  "mens-shirts",
  "mobile-accessories",
  "motorcycle",
  "skin-care",
  "sports-accessories",
  "sunglasses",
  "tablets",
  "tops",
  "vehicle",
  "womens-bags",
  "womens-jewellery",
  "womens-shoes",
  "womens-watches",
];
const brands =[
  "Essence",
  "Glamour Beauty",
  "Velvet Touch",
  "Chic Cosmetics",
  "Nail Couture",
  "Calvin Klein",
  "Chanel",
  "Dior",
  "Dolce & Gabbana",
  "Gucci",
  "Annibale Colombo",
  "Furniture Co.",
  "Knoll",
  "Bath Trends"
]
let select = document.getElementById("all-select");
categories.forEach((category) => {
  let option = document.createElement("option");
  option.value = category.toLowerCase().replace(/\s|&|'/g, "");
  option.textContent = category;
  select.appendChild(option);
});

//----------------  Get products data ---------------------
// "https://dummyjson.com/products?limit=100"

const categoryList = document.getElementById("categoryList");
const brandList = document.getElementById("brandList");

//Treat with local json file
let products = [];
fetch("products_300.json")
  .then((res) => res.json())
  .then((data) => {
    products = data;
    displayProducts(products);
  })
  .catch((err) => console.error("Error loading JSON:", err));

// Show categories in sidebar
categories.forEach((category) => {
  const li = document.createElement("li");
  li.textContent = category.replace("-", " ");
  li.onclick = () => filterCategory(category);
  categoryList.appendChild(li);
});
// Show brands in sidebar
brands.forEach((brand) => {
  const li = document.createElement("li");
  li.textContent = brand.replace("-", " ");
  li.onclick = () => filterBrand(brand);
  brandList.appendChild(li);
});


// Display products in main section
function displayProducts(items) {
  const container = document.getElementById("product-list");
  container.innerHTML = "";
  items.forEach((p) => {
    container.innerHTML += `
      <div class="product">
        <img src="${p.thumbnail}" alt="${p.title}">
        <p class="product-price">$ ${p.price}</p>
        <p class="product-title">${p.title}</p>
      </div>
    `;
  });
}

// Filter products by category
function filterCategory(category) {
  const filtered = products.filter((p) => p.category === category);
  displayProducts(filtered);
}

// Filter products by brand
function filterBrand(brand){
  const filtered = products.filter((p) => p.brand === brand);
  displayProducts(filtered)
}

// Search products by title
function searchProducts() {
  const query = document.getElementById("search").value.toLowerCase();
  const filtered = products.filter((p) =>
    p.title.toLowerCase().includes(query)
  );
  displayProducts(filtered);
}

// sec-2
const SuggestedCtegories = document.getElementById("Suggested-Ctegories");
const leftBtn = document.getElementById("left-btn");
const rightBtn = document.getElementById("right-btn");

// Scroll Suggested Categories
leftBtn.onclick = () => {
  // SuggestedCtegories.scrollLeft -= 150;
  SuggestedCtegories.scrollBy({ left: -1000, behavior: "smooth" });

};
rightBtn.onclick = () => {
  // SuggestedCtegories.scrollLeft += 150;
   SuggestedCtegories.scrollBy({ left: 1000, behavior: "smooth" });
};
// Show Suggested Categories in sec-2
categories.forEach((category) => {
  const li = document.createElement("li");
  li.textContent = category.replace("-", " ");
  li.onclick = () => filterCategory(category);
  SuggestedCtegories.appendChild(li).classList.add("suggested");
});
