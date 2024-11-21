// Product JSON
const allProductsJSON = [
  {
    id: 1,
    name: "Onion, Potato & Hybrid Tomato",
    price: 114,
    type: "Vegetables",
    image:
      "https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/d77abbcb56c4e631a90aca5b06734a67",
  },
  {
    id: 2,
    name: "Daily Seasonings Mix",
    price: 99,
    type: "Vegetables",
    image:
      "https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/433722b4d20605cd53a56941a3d0771f",
  },
  {
    id: 3,
    name: "Lunch Box Veggies",
    price: 149,
    type: "Vegetables",
    image:
      "https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/8212a3cec00109eecff5674067c66281",
  },
  {
    id: 4,
    name: "Keto Friendly Vegetables",
    price: 154,
    type: "Vegetabales",
    image:
      "https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/61f7830c903195b6bb6a90cd6fe8b493",
  },
  {
    id: 5,
    name: "Green Capsicum (Donne Menasinakaayi)",
    price: 34,
    type: "Vegetables",
    image:
      "https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/b817b4278093e6a7ca0b95496806d6bd",
  },
  {
    id: 6,
    name: "Organic Certified Green Chilli (Hasiru Menasinakaayi)",
    price: 23,
    type: "Vegetables",
    image:
      "https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/e85c9d0b1473434524a25b288cf04802",
  },
  {
    id: 7,
    name: "Britannia Classic Little Hearts",
    price: 28,
    type: "Biscuits",
    image:
      "https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/NI_CATALOG/IMAGES/CIW/2024/11/15/6532be94-aa80-45dc-a863-19d88649e72b_90_1.png",
  },
  {
    id: 8,
    name: "Sunfeast Farmlite Oats with Almonds Digestive Biscuits",
    price: 60,
    type: "Biscuits",
    image:
      "https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/248107998f1da87c537bb8f7fb819160",
  },
  {
    id: 9,
    name: "Sunfeast Dark Fantasy Choco Fills Cookies",
    price: 48,
    type: "Biscuits",
    image:
      "https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/NI_CATALOG/IMAGES/CIW/2024/6/15/2aaf02e1-8ebb-475a-9f30-d3930bd73566_biscuits_KBLV0PAXPB_MN.png",
  },
  {
    id: 10,
    name: "Tata Sampann Besan",
    price: 72,
    type: "Rice",
    image:
      "https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/NI_CATALOG/IMAGES/CIW/2024/4/25/17ec6756-7534-44f2-8587-cb47658f635d_attaandotherflours_B9CBZ9W2YW_MN.png",
  },
  {
    id: 11,
    name: "Supreme Harvest Groundnut (Raw Peanut)",
    price: 93,
    type: "Rice",
    image:
      "https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/NI_CATALOG/IMAGES/CIW/2024/8/8/a059f25c-e0b8-4a78-be03-2271fcfaaa9b_15631.png",
  },
  {
    id: 12,
    name: "Supreme Harvest Idly Rice",
    price: 440,
    type: "Rice",
    image:
      "https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/NI_CATALOG/IMAGES/CIW/2024/4/3/213ec5ee-9ef3-46b6-88e5-9a18cedfc0ab_ricericeproducts_1ONC3J515B_MN.png",
  },
  {
    id: 13,
    name: "India Gate Super Basmati Rice",
    price: 763,
    type: "Rice",
    image:
      "https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/b07041f5b260218a3a7f12861589894d",
  },
  {
    id: 14,
    name: "Dove Daily Shine Shampoo",
    price: 528,
    type: "Bath",
    image:
      "https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/NI_CATALOG/IMAGES/CIW/2024/7/12/9b6ec9fa-cba4-4512-9d37-f20200b87aa9_shampoo_4G8KZAGGAB_MN.png",
  },
  {
    id: 15,
    name: "Park Avenue Beer Shampoo Shiny-&-Bouncy Damage Free and Anti-Dandruff",
    price: 392,
    type: "Bath",
    image:
      "https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/nf8hnyz2bjzcgqsl2fes",
  },
  {
    id: 16,
    name: "Cinthol Lime Foam Body Wash",
    price: 100,
    type: "Bath",
    image:
      "https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/NI_CATALOG/IMAGES/CIW/2024/10/20/2fd68ed3-db7e-4658-a4c7-048feae0cc3b_92067_1.png",
  },
];

// Initialization and Declarations...
const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
const productDisplay = document.querySelector(".product-grid");
const cartNumDisplay = document.querySelector("#shopLink span");
let cartNum = cartItems.length;
cartNumDisplay.innerText = cartNum;

// Utility functions to increment and decrement of cart-quantity...
function cartIncrement() {
  cartNum++;
  cartNumDisplay.innerText = cartNum;
}

function cartDecrement() {
  cartNum--;
  cartNumDisplay.innerText = cartNum;
}

// Function to render all the products from Product JSON...
allProductsJSON.forEach((product) => {
  // Create a new product card for each product
  const productCard = `
  <div class="product-card" data-id=${product.id}>
    <img src="${product.image}" alt="${product.name}" class="product-image" />
    <div class="product-info">
      <h2 class="product-title">${product.name}</h2>
      <p class="product-price">Rs. ${product.price}</p>
    </div>
  </div>
`;

  // Append the product card to the product grid
  productDisplay.innerHTML += productCard;
});

// Function to add selected class to the cart items when refreshed page...
const products = document.querySelectorAll(".product-card");
products.forEach((prod) => {
  if (cartItems.map((item) => item.id).includes(+prod.dataset.id)) {
    prod.classList.add("selected");
  }
});

// Function to add and delete product from the cart and localstorage...
products.forEach((product) => {
  product.addEventListener("click", function (e) {
    product.classList.toggle("selected");
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

    const productId = parseInt(product.dataset.id, 10);
    const existingItem = cartItems.find((item) => item.id === productId);
    if (existingItem) {
      const newCartItems = cartItems.filter((prod) => prod.id !== productId);
      localStorage.setItem("cartItems", JSON.stringify(newCartItems));
      cartDecrement();
    } else {
      const prod = allProductsJSON.find((pro) => pro.id == productId);
      cartItems.push({ ...prod, quantity: 1 });
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
      cartIncrement();
    }
  });
});

// Function to add cart-modal functionality to our page...
document.addEventListener("DOMContentLoaded", function () {
  var modal = document.getElementById("shopModal");
  var shopLink = document.getElementById("shopLink");
  var closeBtn = document.getElementsByClassName("close")[0];
  var exploreBtn = document.querySelector(".modal-button");

  function openModal() {
    modal.style.display = "block";
    document.body.style.overflow = "hidden";
    closeBtn.focus();

    let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    const cartItemsListCont = document.querySelector(
      ".modal-content .cart-items"
    );
    cartItems.forEach((item) => {
      // console.log(item);
      const cartItem = ` <li>
            <img
              src=${item?.image}
              alt="image"
            />

            <div class="details" data-id=${item?.id}>
              <h3>${(item?.name).split("").slice(0, 12).join("")}...</h3>
              <p>Rs. ${item?.price}</p>

              <div class="quantity">
                <button class="minus">-</button>
                <input type="number" value=${item?.quantity} />
                <button class="plus">+</button>
              </div>
              <p>Rs. ${item?.quantity * item?.price}</p>
              <span class="delete">❌</span>
            </div>
          </li>`;

      cartItemsListCont.innerHTML += cartItem;
    });

    const cartItemsList = document.querySelectorAll(
      ".modal-content .cart-items li"
    );
    cartItemsList.forEach((item) => {
      item.addEventListener("click", (e) => {
        if (e.target.classList[0] == "delete") {
          const id = e.target.parentNode.dataset.id;
          const newCartItems = cartItems.filter((item) => item.id !== +id);
          // console.log(newCartItems);
          localStorage.setItem("cartItems", JSON.stringify(newCartItems));
          item.remove();

          const products = document.querySelectorAll(".product-card");
          products.forEach((prod) => {
            if (+prod.dataset.id === +id) {
              // console.log(prod.classList);
              prod.classList.remove("selected");
              cartDecrement();
            }
          });
        }
      });
    });
  }

  function closeModal() {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
    shopLink.focus();
    const cartItemsListCont = document.querySelector(
      ".modal-content .cart-items"
    );
    cartItemsListCont.innerHTML = "";
  }

  shopLink.onclick = function (e) {
    e.preventDefault();
    openModal();
  };

  closeBtn.onclick = closeModal;
  //   exploreBtn.onclick = closeModal;

  window.onclick = function (event) {
    if (event.target == modal) {
      closeModal();
    }
  };

  document.onkeydown = function (event) {
    if (event.key === "Escape" && modal.style.display === "block") {
      closeModal();
    }
  };
});

// products.forEach((product) => {
//   product.addEventListener("click", function (e) {
//     product.classList.toggle("selected");
//     const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

//     const productId = parseInt(product.dataset.id, 10);
//     if (cartItems) {
//       const existingItem = cartItems.find((item) => item.id === productId);
//       if (existingItem) {
//         const newCartItems = cartItems.map((prod) =>
//           prod.id === productId
//             ? { ...prod, quantity: prod.quantity + 1 }
//             : prod
//         );
//         localStorage.setItem("cartItems", JSON.stringify(newCartItems));
//       } else {
//         const prod = allProductsJSON.find((pro) => pro.id == productId);
//         cartItems.push({ ...prod, quantity: 1 });
//         localStorage.setItem("cartItems", JSON.stringify(cartItems));
//       }
//     } else {
//       const prod = allProductsJSON.find((pro) => pro.id == productId);
//       cartItems.push({ ...prod, quantity: 1 });
//       localStorage.setItem("cartItems", JSON.stringify(cartItems));
//     }
//   });
// });
