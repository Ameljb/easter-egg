const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "Air Force",
    price: 119,
    colors: [
      {
        code: "black",
        img: "./img/air.png",
      },
      {
        code: "darkblue",
        img: "./img/air2.png",
      },
    ],
  },
  {
    id: 2,
    title: "Air Jordan",
    price: 149,
    colors: [
      {
        code: "lightgray",
        img: "./img/jordan.png",
      },
      {
        code: "green",
        img: "./img/jordan2.png",
      },
    ],
  },
  {
    id: 4,
    title: "Crater",
    price: 129,
    colors: [
      {
        code: "black",
        img: "./img/crater.png",
      },
      {
        code: "lightgray",
        img: "./img/crater2.png",
      },
    ],
  },
  
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "$" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    //assing new colors
    
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});

let konamiCode = [];
const secretCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

window.addEventListener('keydown', (e) => {
    konamiCode.push(e.key);
    konamiCode = konamiCode.slice(-secretCode.length);
    if (konamiCode.join('') === secretCode.join('')) {
        alert('Easter egg unlocked!');
        // Add a class to the body to apply styles
        document.body.classList.add('easter-egg');
        // You can add more elaborate actions here
    }
});

const chooseYourStyleButton = document.querySelector('.nsButton');
const searchInput = document.querySelector('.searchInput');

chooseYourStyleButton.addEventListener('click', () => {
    searchInput.value = 'BINGO, WON A FLIGHT';
    
    searchInput.classList.add('easter-egg');
    
    searchInput.focus();
});

const authenticImage = document.querySelector('.galleryItem img');

authenticImage.addEventListener('mouseover', () => {
    authenticImage.classList.add('easter-egg');
    
    alert('GOT U, WON A JACKET!');
});

// Easter egg code for changing button text
const contactLink = document.getElementById('contactLink');
const buyNowButton = document.querySelector('.buyButton');

contactLink.addEventListener('mouseover', () => {
    // Change the text of the "BUY NOW!" button to "Nice Shopping"
    buyNowButton.textContent = 'Nice Shopping';
});

contactLink.addEventListener('mouseout', () => {
    // Change the text back to "BUY NOW!" when the mouse leaves the "Contact" link
    buyNowButton.textContent = 'BUY NOW!';
});


