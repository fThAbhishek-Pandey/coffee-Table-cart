const menu = [
  {
    id: "fth1",
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./images/item-1.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: "fth2",
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "./images/item-2.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: "fth3",
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "./images/item-3.jpeg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: "fth4",
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "./images/item-4.jpeg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: "fth5",
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "./images/item-5.jpeg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: "fth6",
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "./images/item-6.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: "fth7",
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "./images/item-7.jpeg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: "fth8",
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "./images/item-8.jpeg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 'fth9',
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "./images/item-9.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];
// get parent element
const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");
// console.log(sectionCenter);
// console.log(btnContainer);
// display all items when page loads
window.addEventListener("DOMContentLoaded", function () {
  diplayMenuItems(menu);
  displayMenuButtons();
});
function displayMenuButtons() {
  // create a categries array that store all the categories of food 
  const categories = menu.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {// checking the value is null or not 
        values.push(item.category);
      }
      return values;
    },
    ["all"]
  );
  // creating button 
  const categoryBtns = categories
    .map(function (category) {
      return `<button type="button" class="filter-btn" data-id=${category}>
          ${category}
        </button>`;
    })
    .join("");

  btnContainer.innerHTML = categoryBtns;
  // creating a filter button 
  // filterBtns are the array of button that all the button as Nodelist
  const filterBtns = btnContainer.querySelectorAll(".filter-btn");
  // console.log(filterBtns);

  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      // console.log(e);
      // console.log(e.currentTarget);
      // console.log(e.currentTarget.dataset);
      // console.log(e.currentTarget.dataset.id);
      const category = e.currentTarget.dataset.id;// finding category whitch user choose
      //  filtering from menu 
      // if the item is belong to category then it goes as a form of objec in menuCategory
  
      const menuCategory = menu.filter(function (menuItem) {
            // console.log(menuItem.category);
        if (menuItem.category === category) {// checking category
          return menuItem;
        }
      });
      // console.log(menuCategory);
      //  displaying on user screen 
      if (category === "all") {
        diplayMenuItems(menu);
      } else {
        diplayMenuItems(menuCategory);
      }
    });
  });
}
//  display function to display cart on user board
function diplayMenuItems(menuItems) {
  // creating a sring witch store all cart 
  let displayMenu = menuItems.map(function (item) {
    console.log(item);

    return `<article class="menu-item">
          <img src=${item.img} alt=${item.title} class="photo" />
          <div class="item-info">
            <header>
              <h4>${item.title}</h4>
              <h4 class="price">₹ ${item.price}</h4>
            </header>
            <p class="item-text">
              ${item.desc}
            </p>
          </div>
        </article>`;
  });
  // console.log(displayMenu);
  // console.log(typeof displayMenu);
  displayMenu = displayMenu.join("");// object to string 
  // console.log(displayMenu);
  // console.log(typeof displayMenu);
  sectionCenter.innerHTML = displayMenu;
}