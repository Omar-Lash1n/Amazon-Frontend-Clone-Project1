// Tab switching functionality
document.querySelectorAll(".tab").forEach((tab) => {
  tab.addEventListener("click", function () {
    // Remove active class from all tabs and contents
    document
      .querySelectorAll(".tab")
      .forEach((t) => t.classList.remove("active"));
    document
      .querySelectorAll(".tab-content")
      .forEach((c) => c.classList.remove("active"));

    // Add active class to clicked tab and corresponding content
    this.classList.add("active");
    const tabId = this.getAttribute("data-tab");
    document.getElementById(tabId).classList.add("active");
  });
});

// Checkout button functionality
document.getElementById("checkout-btn").addEventListener("click", function () {
  document.getElementById("main-tabs").style.display = "none";
  document.getElementById("checkout-page").style.display = "block";
});

// Back to cart functionality
document.getElementById("back-to-cart").addEventListener("click", function () {
  document.getElementById("checkout-page").style.display = "none";
  document.getElementById("main-tabs").style.display = "block";
});

// Delete item functionality
document.querySelectorAll(".delete-item").forEach((button) => {
  button.addEventListener("click", function () {
    const item = this.closest(".cart-item");
    item.style.opacity = "0";
    setTimeout(() => {
      item.remove();
      updateCartCount();
    }, 300);
  });
});

// Save for later functionality
document.querySelectorAll(".save-later").forEach((button) => {
  button.addEventListener("click", function () {
    alert("Item saved for later!");
  });
});

// Update cart count
// Update cart count
function updateCartCount() {
  const cartCount = document.querySelectorAll(".cart-item").length;
  document.querySelector(
    '.tab[data-tab="cart"]'
  ).textContent = `Shopping Cart (${cartCount})`;
  document.querySelector(
    ".cart-link"
  ).innerHTML = `<i class="fas fa-shopping-cart"></i> Cart (${cartCount})`;
}

// Calculate and update totals
function updateTotals() {
  let subtotal = 0;
  const cartItems = document.querySelectorAll(".cart-item");

  cartItems.forEach((item) => {
    const priceElement = item.querySelector(".item-price");
    const quantitySelect = item.querySelector("select");

    // Extract price (remove $ and commas)
    const price =
      parseFloat(priceElement.getAttribute("data-base-price")) ||
      parseFloat(priceElement.textContent.replace("$", "").replace(",", ""));

    // Store base price if not already stored
    if (!priceElement.getAttribute("data-base-price")) {
      priceElement.setAttribute("data-base-price", price);
    }

    const quantity = parseInt(quantitySelect.value);
    const itemTotal = price * quantity;

    // Update item price display
    priceElement.textContent = `$${itemTotal.toFixed(2)}`;

    subtotal += itemTotal;
  });

  // Update subtotal and total displays
  document.querySelector(
    ".summary-line span:last-child"
  ).textContent = `$${subtotal.toFixed(2)}`;
  document.querySelector(
    ".total span:last-child"
  ).textContent = `$${subtotal.toFixed(2)}`;
}

// Delete item functionality
document.querySelectorAll(".delete-item").forEach((button) => {
  button.addEventListener("click", function () {
    const item = this.closest(".cart-item");
    item.style.opacity = "0";
    setTimeout(() => {
      item.remove();
      updateCartCount();
      updateTotals();
    }, 300);
  });
});

// Quantity change functionality
document.querySelectorAll(".quantity-selector select").forEach((select) => {
  select.addEventListener("change", function () {
    updateTotals();
  });
});

// Initialize totals on page load
document.addEventListener("DOMContentLoaded", function () {
  updateTotals();

  // Add event listeners for any dynamically added quantity selectors
  document.addEventListener("change", function (e) {
    if (e.target.matches(".quantity-selector select")) {
      updateTotals();
    }
  });
});
// Form submission
document
  .querySelector(".checkout-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Order placed successfully! Thank you for your purchase.");
    // In a real application, you would process the order here
  });
