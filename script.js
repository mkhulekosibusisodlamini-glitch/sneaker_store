// ------------- CART SYSTEM ------------- //
let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price, img) {
  const item = { name, price, img };
  cart.push(item);

  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
}

function updateCartCount() {
  document.getElementById("cart-count").innerText = cart.length;
}

// Call on page load
updateCartCount();


// -------- SEARCH FUNCTION -------- //
function searchProducts() {
  let input = document.getElementById("searchInput").value.toLowerCase();
  let products = document.querySelectorAll(".product");

  products.forEach(p => {
    let title = p.querySelector("h3").innerText.toLowerCase();
    p.style.display = title.includes(input) ? "block" : "none";
  });
}


// -------- PRICE FILTER -------- //
function filterPrice() {
  let value = document.getElementById("priceFilter").value;
  let products = document.querySelectorAll(".product");

  products.forEach(p => {
    let price = parseInt(p.querySelector("p").innerText.replace("R", ""));

    if (value === "all") p.style.display = "block";
    else if (value === "low" && price < 120) p.style.display = "block";
    else if (value === "mid" && price >= 120 && price <= 150) p.style.display = "block";
    else if (value === "high" && price > 150) p.style.display = "block";
    else p.style.display = "none";
  });
}
