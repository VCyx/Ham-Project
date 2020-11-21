"use strict";

// "Our services" menu - on click:

const services = document.getElementById("servicesContainer");
const servicesPics = Array.from(
  document.getElementsByClassName("services-picture")
);
const servicesText = Array.from(
  document.getElementsByClassName("services-text")
);
const triangle = document.createElement("div");
triangle.id = "greenTriangle";
triangle.style =
  "width: 0; height: 0; border-left: 20px solid transparent; border-right: 20px solid transparent; border-top: 20px solid #18CFAB; position: absolute; top: 60px; left: 39%";

//show first
Array.from(services.children)[0].style.backgroundColor = "#18CFAB";
Array.from(services.children)[0].style.color = "#FFFFFF";
Array.from(services.children)[0].append(triangle);
servicesPics[0].style.display = "block";
servicesText[0].style.display = "block";

services.addEventListener("click", function (e) {
  if (
    document.getElementById("greenTriangle") !== null &&
    e.target !== document.getElementById("greenTriangle")
  ) {
    document.getElementById("greenTriangle").remove();
  }
  e.target.append(triangle);

  Array.from(services.children).forEach((el) => {
    el.style.backgroundColor = "#F8FCFE";
    el.style.color = "#717171";
    el.style.border = "1px solid #EDEFEF";
  });

  e.target.style.backgroundColor = "#18CFAB";
  e.target.style.color = "#FFFFFF";
  e.target.style.border = "1.5px solid #18CFAB";

  servicesPics.forEach((el) => {
    el.style.display = "none";
  });
  servicesText.forEach((el) => {
    el.style.display = "none";
  });

  servicesPics[
    `${Array.from(services.children).indexOf(e.target)}`
  ].style.display = "block";
  servicesText[
    `${Array.from(services.children).indexOf(e.target)}`
  ].style.display = "block";
});

// "Our amazing work" menu:

const menuOAW = document.getElementById("workMenu");

//show first
menuOAW.children[0].classList.add("work-item-js");
const OAWItems = Array.from(
  document.getElementsByClassName("work-photos-item")
);

menuOAW.addEventListener("click", function (e) {
  if (e.target !== menuOAW) {
    Array.from(menuOAW.children).forEach((el) => {
      el.classList.remove("work-item-js");
    });
    e.target.classList.add("work-item-js");

    const clickedItem = e.target.id;

    changeDisplay(clickedItem);
  }
});

function changeDisplay(clickedItem) {
  switch (clickedItem) {
    case "all":
      OAWItems.forEach((el) => (el.style.display = "block"));
      break;

    case "graphicDesign":
      OAWItems.forEach((el) => {
        el.style.display = "none";
        if (el.classList.contains("graphic-design")) {
          el.style.display = "block";
        }
      });
      break;

    case "webDesign":
      OAWItems.forEach((el) => {
        el.style.display = "none";
        if (el.classList.contains("web-design")) {
          el.style.display = "block";
        }
      });
      break;

    case "landingPages":
      OAWItems.forEach((el) => {
        el.style.display = "none";
        if (el.classList.contains("landing-pages")) {
          el.style.display = "block";
        }
      });
      break;

    case "wordpress":
      OAWItems.forEach((el) => {
        el.style.display = "none";
        if (el.classList.contains("wordpress")) {
          el.style.display = "block";
        }
      });
      break;

    default:
      console.log("Error! Unknow item!");
      break;
  }
}

// "Load more" button:

const loadMoreBtn = document.getElementById("loadMore");
const loadingAni = document.getElementsByClassName("loader")[0];

let counterClicks = 0;

loadMoreBtn.addEventListener("click", function (e) {
  e.preventDefault();
});
loadMoreBtn.addEventListener("click", downloadPics);

function downloadPics() {
  loadingAni.style.display = "flex";
  loadMoreBtn.removeEventListener("click", downloadPics);

  setTimeout(
    function () {
      loadingAni.style.display = "none";

      if (counterClicks === 0) {
        let imgObject = {
          1: {
            image: "img/our amazing work/graphic design/graphic-design1.jpg",
            theme: "graphic-design",
            text: "Graphic Design",
          },
          2: {
            image: "img/our amazing work/graphic design/graphic-design2.jpg",
            theme: "graphic-design",
            text: "Graphic Design",
          },
          3: {
            image: "img/our amazing work/graphic design/graphic-design3.jpg",
            theme: "graphic-design",
            text: "Graphic Design",
          },
          4: {
            image: "img/our amazing work/landing page/landing-page1.jpg",
            theme: "landing-pages",
            text: "Landing pages Design",
          },
          5: {
            image: "img/our amazing work/landing page/landing-page2.jpg",
            theme: "landing-pages",
            text: "Landing pages Design",
          },
          6: {
            image: "img/our amazing work/landing page/landing-page3.jpg",
            theme: "landing-pages",
            text: "Landing pages Design",
          },
          7: {
            image: "img/our amazing work/web design/web-design1.jpg",
            theme: "web-design",
            text: "Web Design",
          },
          8: {
            image: "img/our amazing work/web design/web-design2.jpg",
            theme: "web-design",
            text: "Web Design",
          },
          9: {
            image: "img/our amazing work/web design/web-design3.jpg",
            theme: "web-design",
            text: "Web Design",
          },
          10: {
            image: "img/our amazing work/web design/web-design4.jpg",
            theme: "web-design",
            text: "Web Design",
          },
          11: {
            image: "img/our amazing work/wordpress/wordpress1.jpg",
            theme: "wordpress",
            text: "Wordpress Design",
          },
          12: {
            image: "img/our amazing work/wordpress/wordpress2.jpg",
            theme: "wordpress",
            text: "Wordpress Design",
          },
        };
        counterClicks++;

        addItems(imgObject);
      } else {
        let imgObject = {
          1: {
            image: "img/our amazing work/graphic design/graphic-design4.jpg",
            theme: "graphic-design",
            text: "Graphic Design",
          },
          2: {
            image: "img/our amazing work/graphic design/graphic-design5.jpg",
            theme: "graphic-design",
            text: "Graphic Design",
          },
          3: {
            image: "img/our amazing work/graphic design/graphic-design6.jpg",
            theme: "graphic-design",
            text: "Graphic Design",
          },
          4: {
            image: "img/our amazing work/landing page/landing-page4.jpg",
            theme: "landing-pages",
            text: "Landing pages Design",
          },
          5: {
            image: "img/our amazing work/landing page/landing-page5.jpg",
            theme: "landing-pages",
            text: "Landing pages Design",
          },
          6: {
            image: "img/our amazing work/landing page/landing-page6.jpg",
            theme: "landing-pages",
            text: "Landing pages Design",
          },
          7: {
            image: "img/our amazing work/web design/web-design7.jpg",
            theme: "landing-pages",
            text: "Landing pages Design",
          },
          8: {
            image: "img/our amazing work/web design/web-design5.jpg",
            theme: "web-design",
            text: "Web Design",
          },
          9: {
            image: "img/our amazing work/web design/web-design6.jpg",
            theme: "web-design",
            text: "Web Design",
          },
          10: {
            image: "img/our amazing work/web design/web-design7.jpg",
            theme: "web-design",
            text: "Web Design",
          },
          11: {
            image: "img/our amazing work/wordpress/wordpress3.jpg",
            theme: "wordpress",
            text: "Wordpress Design",
          },
          12: {
            image: "img/our amazing work/wordpress/wordpress4.jpg",
            theme: "wordpress",
            text: "Wordpress Design",
          },
        };
        counterClicks++;

        addItems(imgObject);

        loadMoreBtn.style.display = "none";
      }

      loadMoreBtn.addEventListener("click", downloadPics);
    },

    2000
  );
}

function addItems(imgObject) {
  const otherTags = document.getElementsByClassName(
    "creaive_design-container"
  )[0];
  const fragmentImg = document.createDocumentFragment();

  for (let key in imgObject) {
    const li = document.createElement("li");
    const liImage = document.createElement("img");
    li.classList.add("work-photos-item", imgObject[key].theme);
    liImage.width = "285";
    liImage.height = "211";
    liImage.classList.add("work-photo");

    liImage.src = imgObject[key].image;

    const newTags = otherTags.cloneNode(true);

    newTags.getElementsByClassName("creaive_design-text2")[0].textContent =
      imgObject[key].text;

    li.append(liImage);
    li.append(newTags);

    fragmentImg.append(li);
    OAWItems.push(li);
  }

  changeDisplay(document.getElementsByClassName("work-item-js")[0].id);

  document
    .getElementsByClassName("work-container-photos")[0]
    .append(fragmentImg);
}

// Carousel:

// Top carousel

const topSlider = new Swiper(".carousel-top", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  slidesPerView: 1,
  loop: true,
  centerSlides: true,

  thumbs: {
    swiper: {
      el: ".carousel",
      slidesPerView: 4,
    },
  },
});

// Bottom carousel

const bottomSlider = new Swiper(".carousel", {
  slidesPerView: 4,
  spaceBetween: 27,
});

// original side buttons bad centred in Swiper:
Array.from(document.getElementsByClassName("carousel-button")).forEach((el) => {
  el.style.top = "62%";
});

// Gallery of best images:

const grid = document.getElementsByClassName("gallery-wrapper")[0];

const masonry = new Masonry(grid, {
  itemSelector: ".gallery-item",
  columnWidth: ".grid-sizer",
  //   gutter: 20,

  //   percentPosition: true,
  //   horizontalOrder: false,
});

// Gallery load more buttom:

const loadMoreGalbtn = document.getElementById("loadMoreGall");
const loadingGalAni = document.getElementsByClassName("loader-gallery")[0];

loadMoreGalbtn.addEventListener("click", function (e) {
  e.preventDefault();
});
loadMoreGalbtn.addEventListener("click", downloadPicsGal);

function downloadPicsGal() {
  loadingGalAni.style.display = "flex";
  loadMoreGalbtn.removeEventListener("click", downloadPicsGal);

  setTimeout(function () {
    loadingGalAni.style.display = "none";

    const GalObject = {
      1: {
        image: "img/our amazing work/wordpress/wordpress5.jpg",

        alt: "Anyphoto",
      },
      2: {
        image: "img/our amazing work/wordpress/wordpress6.jpg",

        alt: "Anyphoto",
      },
      3: {
        image: "img/our amazing work/wordpress/wordpress7.jpg",

        alt: "Anyphoto",
      },
      4: {
        image: "img/our amazing work/wordpress/wordpress8.jpg",

        alt: "Anyphoto",
      },
      5: {
        image: "img/our amazing work/wordpress/wordpress9.jpg",

        alt: "Anyphoto",
      },
      6: {
        image: "img/our amazing work/wordpress/wordpress10.jpg",

        alt: "Anyphoto",
      },
      7: {
        image: "img/our amazing work/graphic design/graphic-design7.jpg",

        alt: "Anyphoto",
      },
      8: {
        image: "img/our amazing work/graphic design/graphic-design8.jpg",

        alt: "Anyphoto",
      },
      9: {
        image: "img/our amazing work/graphic design/graphic-design9.jpg",

        alt: "Anyphoto",
      },
      10: {
        image: "img/our amazing work/graphic design/graphic-design10.jpg",

        alt: "Anyphoto",
      },
      11: {
        image: "img/our amazing work/graphic design/graphic-design11.jpg",

        alt: "Anyphoto",
      },
      12: {
        image: "img/our amazing work/graphic design/graphic-design12.jpg",

        alt: "Anyphoto",
      },
    };

    addItemsGal(GalObject);

    loadMoreGalbtn.style.display = "none";

    loadMoreGalbtn.addEventListener("click", downloadPicsGal);
  }, 2000);
}

function addItemsGal(imgObject) {
  const path = document.getElementsByClassName("gallery-wrapper")[0];

  // create new item elements
  let elems = [];
  let fragment = document.createDocumentFragment();

  for (let key in imgObject) {
    const div = document.createElement("div");
    const divImage = document.createElement("img");
    div.classList.add("gallery-item");
    divImage.src = imgObject[key].image;
    divImage.alt = imgObject[key].alt;

    div.append(divImage);
    fragment.appendChild(div);
    elems.push(div);
  }
  // append elements to container
  path.appendChild(fragment);
  // add and lay out newly appended elements
  masonry.appended(elems);
}
