//const menu=[
//     {
//         id: 1,
//         title: "buttermilk pancakes",
//         category: "breakfast",
//         price: 18.78,
//         img: "./pinut_butter.jpeg",
//         desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
//       },
//       {
//         id: 2,
//         title: "diner double",
//         category: "lunch",
//         price: 19.99,
//         img: "./dinner.jpg",
//         desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
//       },
//       {
//         id: 3,
//         title: "godzilla milkshake",
//         category: "shakes",
//         price: 20,
//         img: ".//pinut_butter.jpeg",
//         desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
//       },
//       {
//         id: 4,
//         title: "country delight",
//         category: "breakfast",
//         price: 20.99,
//         img: "./images/item-4.jpeg",
//         desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
//       },
//       {
//         id: 5,
//         title: "egg attack",
//         category: "lunch",
//         price: 23.99,
//         img: ". ",
//         desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
//       },
//       {
//         id: 6,
//         title: "Milkshake",
//         category: "shakes",
//         price: 13.00,
//         img: "./milkshake.jpg",
//         desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
//       },
//       {
//         id: 7,
//         title: "bacon overflow",
//         category: "breakfast",
//         price:15.99,
//         img: "./Focaccia.jpg",
//         desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
//       },
//       {
//         id: 8,
//         title: "american classic",
//         category: "lunch",
//         price: 18.98,
//         img: "/egssbacon.jpg",
//         desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
//       },
//       {
//         id: 9,
//         title: "quarantine buddy",
//         category: "shakes",
//         price: 14.98,
//         img: "/chocolate_milkshake.webp",
//         desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
//       },
// ]
// const sectionCenter = document.querySelector("section-center");

// window.addEventListener("DOMContentLoaded", function () {
//   let displayMenu = menu.map(function (item) {
//     // console.log(item);
//     return `<article class="menu-item">
//           <img src=${item.img} alt=${item.title} class="photo" />
//           <div class="item-info">
//             <header>
//               <h4>${item.title}</h4>
//               <h4 class="price">$${item.price}</h4>
//             </header>
//             <p class="item-text">
//               ${item.desc}
//             </p>
//           </div>
//         </article>`;
//   });
//   displayMenu = displayMenu.join("");
//   console.log(displayMenu);

//   sectionCenter.innerHTML = displayMenu;
// });

const item = document.querySelectorAll(".list");


document.querySelector('#breakfastBtn').addEventListener('click',()=>{
  item.forEach(item => {
      if (item.id != 'breakfast'){
          item.style.display = 'none';
      }
      else {
          item.style.display = 'flex';
      }
  })
})
document.querySelector('#dinnerBtn').addEventListener('click',()=>{
  item.forEach(item => {
      if (item.id != 'dinner'){
          item.style.display = 'none';
      }
      else {
          item.style.display = 'flex';
      }
      
  })
})

document.querySelector('#shakesBtn').addEventListener('click',()=>{
  item.forEach(item => {
      if (item.id != 'shakes'){
          item.style.display = 'none';
      }
      else {
          item.style.display = 'flex';
      }
      
  })
})


document.querySelector('#allBtn').addEventListener('click', ()=>{
  item.forEach(element => {
      element.style.display = 'flex'; 
  });
})





















