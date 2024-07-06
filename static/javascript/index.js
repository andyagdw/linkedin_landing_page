const h2Headings = document.querySelectorAll(".main-h2-heading");
const aTagDefaultStyling =
  "mb-2 me-1 d-inline-block a-link-grey-btn-styling all-a-link-btn-styling";

// Bootstrap breakpoints
const screenSizeGreaterThanSmall = window.matchMedia("(min-width: 576px)");
const screenSizeGreaterThanMedium = window.matchMedia("(min-width: 768px)");
const screenSizeGreaterThanLarge = window.matchMedia("(min-width: 992px)");

// NAVBAR
const navbarMenu = document.querySelector(".navbar-menu");

const navbarData = [
  ["Articles", "fa-regular fa-newspaper"],
  ["People", "fa-solid fa-people-group"],
  ["Learning", "fa-solid fa-chalkboard"],
  ["Jobs", "fa-solid fa-briefcase"],
  ["Games", "fa-solid fa-puzzle-piece"],
  ["Get the app", "fa-solid fa-laptop"],
];

for (i = 0; i < navbarData.length; i++) {
  let li = document.createElement("li");
  let aTag = document.createElement("a");
  let iTag = document.createElement("i");
  let span = document.createElement("span");

  aTag.className =
    "d-flex flex-column justify-content-center align-items-center navbar-link";

  aTag.setAttribute("href", "#");
  span.className = "navbar-span";
  span.innerHTML = navbarData[i][0];
  iTag.className = navbarData[i][1];

  i == navbarData.length - 1
    ? (li.className = "me-2 px-2 px-lg-3 d-flex align-items-center")
    : (li.className = "d-flex align-items-center");

  aTag.appendChild(iTag);
  aTag.appendChild(span);
  li.appendChild(aTag);
  navbarMenu.appendChild(li);
}

// HERO

const showHideBtn = document.querySelector(".show-hide-btn");
showHideBtn.addEventListener("click", () => {
  // For toggling password visibility
  let password_input = document.querySelector(".password-input");
  if (password_input.type === "password") {
    password_input.type = "text";
    showHideBtn.innerHTML = "Hide";
  } else {
    password_input.type = "password";
    showHideBtn.innerHTML = "Show";
  }
})

// EXPLORE
// Create links
const exploreLinksContainer = document.querySelector(
  ".explore-links-container"
);
const exploreATagNames = [
  "Marketing",
  "Public Administration",
  "Healthcare",
  "Engineering",
  "IT Services",
  "Sustainability",
  "Business Administration",
  "Telecommunications",
  "HR Management",
  "Show all",
];

for (let x of exploreATagNames) {
  let aTag = document.createElement("a");
  aTag.innerHTML = x;
  aTag.setAttribute("href", "#");

  if (x == "Show all") {
    let aClassName = aTagDefaultStyling.replace(
      " a-link-grey-btn-styling",
      " blue-btn"
    );
    aTag.className = aClassName;
  } else {
    aTag.className = aTagDefaultStyling;
  }

  exploreLinksContainer.appendChild(aTag);
}

// FIND THE RIGHT JOB
// Create links
const findTheRightJobLinksContainer = document.querySelector(
  ".find-the-right-job-links-container"
);
const findTheRightJobATagNames = [
  "Engineering",
  "Business Development",
  "Finance",
  "Administrative Assistant",
  "Retail Associate",
  "Customer Service",
  "Operations",
  "Information Technology",
  "Marketing",
  "Human Resources",
];

// Contains items that are generated when 'show more' button is clicked
const findTheRightJobATagNamesDropdown = [
  "Healthcare Service",
  "Sales",
  "Program and Project Management",
  "Accounting",
  "Arts and Design",
  "Community and Social Services",
  "Consulting",
  "Education",
  "Entrepreneurship",
  "Legal",
  "Media and Communications",
  "Military and Protective Services",
  "Project Management",
  "Purchasing",
  "Quality Assurance",
  "Real Estate",
  "Research",
  "Support",
  "Administrative",
];

// Create original buttons when HTML is loaded
for (let x of findTheRightJobATagNames) {
  let aTag = document.createElement("a");
  aTag.setAttribute("href", "#");
  aTag.innerHTML = x;
  aTag.className = aTagDefaultStyling; 

  findTheRightJobLinksContainer.appendChild(aTag);
}

const showMoreBtn = document.querySelector(".show-more-btn");
showMoreBtn.addEventListener("click", () => {
  if (showMoreBtn.classList.contains("active")) {
    // If 'show more' button has been clicked
    let showMoreBtns = document.querySelectorAll(".show-more-a-links"); // Get all show more a links
    for (let x of showMoreBtns) {
      findTheRightJobLinksContainer.removeChild(x); // Remove them
      showMoreBtn.classList.remove("active");
      let icon = '<i class="fa-solid fa-angle-down"></i>';
      showMoreBtn.innerHTML =
        `Show more ${icon}`;
    }
  } else {
    // If 'show more' buttons hasn't been clicked

    for (let x of findTheRightJobATagNamesDropdown) {
      let aTag = document.createElement("a");
      aTag.innerHTML = x;
      aTag.className =
        `${aTagDefaultStyling} show-more-a-links`;
      findTheRightJobLinksContainer.appendChild(aTag);
      showMoreBtn.classList.add("active");
      let icon = '<i class="fa-solid fa-angle-up"></i>';
      showMoreBtn.innerHTML = `Show less ${icon}`;
    }
  }
});

// DISCOVER THE BEST
const discoverTheBestLinksContainer = document.querySelector(
  ".discover-the-best-links-container"
);

const discoverTheBestATagNames = [
  "E-Commerce Platforms",
  "CRM Software",
  "Human Resources Management Systems",
  "Recruiting Software",
  "Sales Intelligence Software",
  "Project Managment Software",
  "Help Desk Software",
  "Social Networking Software",
  "Desktop Publishing Software",
  "Show all",
];

for (let x of discoverTheBestATagNames) {
  let aTag = document.createElement("a");
  aTag.setAttribute("href", "#");
  aTag.innerHTML = x;

  if (x == "Show all") {
    let aClassName = aTagDefaultStyling.replace(
      " a-link-grey-btn-styling",
      " blue-btn"
    );
    aTag.className = aClassName;
  } else {
    aTag.className = aTagDefaultStyling;
  }

  discoverTheBestLinksContainer.appendChild(aTag);
}

// KEEP YOUR MIND
const keepYourMindLinksContainer = document.querySelector(
  ".keep-your-mind-links-container"
);

const keepYourMindATagNames = ["Pinpoint", "Queens", "Crossclimb"];

// Create links
for (let x of keepYourMindATagNames) {
  let aTag = document.createElement("a");
  aTag.setAttribute("href", "#");
  aTag.innerHTML = x;
  aTag.className = aTagDefaultStyling;

  keepYourMindLinksContainer.appendChild(aTag);
}

// WHO IS LINKEDIN
const whoIsLinkedInMenu = document.querySelector(".who-is-linkedin-menu");
const whoIsLinkedInMenuLinks = [
  "Find a coworker or classmate",
  "Find a new job",
  "Find a course or training",
];
const whoIsLinkedInMainHeading = document.querySelector(
  ".who-is-linked-main-heading"
);

for (i = 0; i < whoIsLinkedInMenuLinks.length; i++) {
  let li = document.createElement("li");
  li.className = "list-item mb-4";

  let aTag = document.createElement("a");
  let span = document.createElement("span");
  span.className = "flex-grow-1";
  
  aTag.className = "ps-3 py-3 who-is-linked-links fs-5 d-flex align-items-center";
  aTag.setAttribute("href", "#");
  aTag.innerHTML = whoIsLinkedInMenuLinks[i];

  let iTag = document.createElement("i");
  iTag.className = "fa-solid fa-angle-right who-is-linked-arrow";

  aTag.appendChild(span);
  aTag.appendChild(iTag);
  li.appendChild(aTag);
  whoIsLinkedInMenu.appendChild(li);
}

// CAROUSEL
const carouselData = [
  {
    heading: "Let the right people know you&apos;re open to work",
    paragraph:
      "With the Open To Work feature, you can privately tell recruiters or publicly share with the LinkedIn community that you are looking for new job opportunities.",
    alt: ["LinkedIn open to work"],
    img: "One",
  },
  {
    heading: "Conversations today could lead to opportunity tomorrow",
    paragraph:
      "Sending messages to people you know is a great way to strengthen relationships as you take the next step in your career.",
    alt: ["Woman on computer"],
    img: "Two",
  },
  {
    heading: "Stay up to date on your industry",
    paragraph:
      "From live videos, to stories, to newsletters and more, LinkedIn is full of ways to stay up to date on the latest discussions in your industry.",
    alt: ["Man recording video"],
    img: "Three",
  },
];

const carouselInnerContainer = document.getElementById(
  "carousel-inner-container"
);
const imgsObj = carouselInnerContainer.dataset;  // Get images, see 'carousel.html'
const imgsArr = []; // Store images
for (let val in imgsObj) {
  imgsArr.push(val);
}

for (i = 0; i < carouselData.length; i++) {
  // Create carousel items
  let outerDiv = document.createElement("div");

  let carouselItemTxt = "carousel-item";

  if (i == 0) {
    outerDiv.className = `${carouselItemTxt} active`;
  } else if (i == 1) {
    outerDiv.className = `${carouselItemTxt} carousel-item-middle`;
  } else if (i == 2) {
    outerDiv.className = `${carouselItemTxt}`;
  }

  let innerDiv = document.createElement("div");
  innerDiv.className =
    "d-flex justify-content-evenly align-items-center flex-column flex-sm-row w-100";
  let textDiv = document.createElement("div");
  textDiv.className = "carousel-text-img-container order-2 order-sm-1";
  let imgDiv = document.createElement("div");
  imgDiv.className =
    "carousel-text-img-container d-flex justify-content-center align-items-center order-1 order-sm-1";

  let h2 = document.createElement("h2");
  h2.className = "mt-3 mt-sm-0 red-text display-6 carousel-headings";
  h2.innerHTML = carouselData[i]["heading"];
  let p = document.createElement("p");
  p.className = "carousel-para lead";
  p.innerHTML = carouselData[i]["paragraph"];

  let img = document.createElement("img");
  img.className = "carousel-img rounded-circle img-fluid";
  img.setAttribute("alt", `${carouselData[i]["alt"][0]}`);

  let currentImg = imgsArr[i]; // Get current image
  img.setAttribute("src", carouselInnerContainer.dataset[currentImg]); // Use bracket notation to get data attribute, see 'carousel.html'

  imgDiv.appendChild(img);
  textDiv.appendChild(h2);
  textDiv.appendChild(p);
  innerDiv.appendChild(textDiv);
  innerDiv.appendChild(imgDiv);
  outerDiv.appendChild(innerDiv);
  carouselInnerContainer.appendChild(outerDiv);
}

const carouselParas = document.querySelectorAll(".carousel-para");
const carouselHeadings = document.querySelectorAll(".carousel-headings");

const displayArrowImgPrev = () => {
  let middleCarouselItem = document.querySelector(".carousel-item-middle");
  let leftArrow = document.querySelector(".carousel-control-prev");
  let rightArrow = document.querySelector(".carousel-control-next");

  if (middleCarouselItem.classList.contains("active")) {
    leftArrow.style.visibility = "hidden";
  } else {
    leftArrow.style.visibility = "visible";
    rightArrow.style.visibility = "visible";
  }
};

const displayArrowImgNext = () => {
  let middleCarouselItem = document.querySelector(".carousel-item-middle");
  let rightArrow = document.querySelector(".carousel-control-next");
  let leftArrow = document.querySelector(".carousel-control-prev");

  if (middleCarouselItem.classList.contains("active")) {
    rightArrow.style.visibility = "hidden";
  } else {
    rightArrow.style.visibility = "visible";
    leftArrow.style.visibility = "visible";
  }
};

// CONNECT WITH PEOPLE
const skillsMenuDropdown = document.querySelector(".skills-menu-dropdown");

const skillsMenuList = [
  ["Business Analysis and Strategy", "1,460+ courses"],
  ["Business Software and Tools", "2,410+ courses"],
  ["Career Development", "590+ courses"],
  ["Customer Service", "220+ courses"],
  ["Diversity, Equity and Inclusion (DEI)", "300+ courses"],
  ["Finance and Accouting", "280+ courses"],
  ["Human Resources", "510+ courses"],
  ["Leadership and Management", "1,850+ courses"],
  ["Marketing", "970+ courses"],
  ["Professional Devleopment", "1,790+ courses"],
  ["Project Management", "530+ courses"],
  ["Sales", "290+ courses"],
  ["Small Business and Entrepreneurship", "340+ courses"],
  ["Training and Entrepreneurship", "340+ courses"],
  ["Training and Education", "310+ courses"],
  ["AEC", "1,460+ courses"],
  ["Animation and Illustration", "1,780+ courses"],
  ["Audio and Music", "420+ courses"],
  ["Graphic Design", "1020+ courses"],
  ["Motion Graphics and VFX", "910+ courses"],
  ["Photography", "910+ courses"],
  ["Product and Manufacturing", "1,470+ courses"],
  ["User Experience", "570+ courses"],
  ["Video", "670+ courses"],
  ["Visualization and Real-Time", "1,330+ courses"],
  ["Web Design", "540+ courses"],
  ["Artificial Intelligence (AI)", "540+ courses"],
  ["Cloud Computing", "1,440+ courses"],
  ["Cybersecurity", "980+ courses"],
  ["Data Science", "1,390+ courses"],
  ["Database Management", "480+ courses"],
  ["DevOps", "330+ courses"],
  ["Hardware", "80+ courses"],
  ["IT Help Desk", "360+ courses"],
  ["Mobile Development", "490+ courses"],
  ["Network and System Administration", "1,530+ courses"],
  ["Software Development", "2,720+ courses"],
  ["Web Development", "1,750+ courses"],
];

// Create elements
for (let i = 0; i < skillsMenuList.length; i++) {
  let li = document.createElement("li");
  let aTag = document.createElement("a");
  let span1 = document.createElement("span");
  let span2 = document.createElement("span");

  li.className = `dropdown-item dropdown-item-${i}`;
  aTag.setAttribute("href", "#");
  aTag.className = `dropdown-item-link-${i} links-underline`;

  span1.className = "d-block text-dark menu-span";
  span2.className = "d-block text-muted";
  span1.innerHTML = skillsMenuList[i][0];
  span2.innerHTML = skillsMenuList[i][1];

  skillsMenuDropdown.appendChild(li);
  li.appendChild(aTag);
  aTag.appendChild(span1);
  aTag.appendChild(span2);
}

// SECONDARY FOOTER
const secondaryFooterLinksContainer = document.querySelector(
  ".secondary-footer-links-container"
);

const secondaryFooterData = [
  {
    heading: "General",
    links: [
      "Sign Up",
      "Help Center",
      "About",
      "Press",
      "Blog",
      "Careers",
      "Developers",
    ],
  },
  {
    heading: "Browse LinkedIn",
    links: [
      "Learning",
      "Jobs",
      "Games",
      "Salary",
      "Mobile",
      "Services",
      "Products",
      "Top Companies Hub",
    ],
  },
  {
    heading: "Business Solutions",
    links: ["Talent", "Marketing", "Sales", "Learning"],
  },
  {
    heading: "Directories",
    links: [
      "Members",
      "Jobs",
      "Companies",
      "Featured",
      "Learning",
      "Posts",
      "Articles",
      "Schools",
      "News",
      "News Letters",
      "Services",
      "Products",
      "Advice",
      "People Search",
    ],
  },
];

// Create secondary footer links here
for (let i = 0; i < secondaryFooterData.length; i++) {
  let div = document.createElement("div");
  div.className = `secondary-footer-links-div-${i}`;
  let ul = document.createElement("ul");
  ul.className = `ps-0 secondary-footer-links-ul-${i}`;
  let h3 = document.createElement("h3");
  h3.className = "mt-2 mt-lg-0 h6";
  h3.innerHTML = secondaryFooterData[i]["heading"];

  secondaryFooterLinksContainer.appendChild(div);
  div.appendChild(h3);
  div.appendChild(ul);

  let secondaryFooterLinks = secondaryFooterData[i]["links"];

  for (let x = 0; x < secondaryFooterLinks.length; x++) {
    let li = document.createElement("li");
    li.className = `mt-2 mt-lg-0 secondary-footer-links-li-${x}`;
    let aTag = document.createElement("a");
    aTag.setAttribute("href", "#");
    aTag.className = `links-underline secondary-footer-links footer-links secondary-footer-links-li-${x}`;
    aTag.innerHTML = secondaryFooterLinks[x];

    ul.appendChild(li);
    li.appendChild(aTag);
  }
}

// MAIN FOOTER
const footerMenu = document.querySelector(".footer-ul");

const footerLinks = [
  "About",
  "Accessibility",
  "User Agreement",
  "Privacy Policy",
  "Cookie Policy",
  "Copyright Policy",
  "Brand Policy",
  "Guest Controls",
  "Community Guidelines",
  "Language",
];

// Create footer links
for (let x = 0; x < footerLinks.length; x++) {
  let li = document.createElement("li");
  li.className = `list-item-${x + 1}`;
  let linksClassName = "main-footer-links footer-links";
  let currentValue = footerLinks[x];

  if (currentValue == "Language") {
    let icon = '<i class="fa-solid fa-angle-down"></i>';
    li.innerHTML = `<a href="#" class="${linksClassName}">${currentValue}</a>
    <span class="footer-icon">${icon}</span>`;
    footerMenu.appendChild(li);
  } else {
    let aTag = document.createElement("a");
    aTag.setAttribute("href", "#");
    aTag.className = linksClassName;
    aTag.innerHTML = currentValue;

    li.appendChild(aTag);
    footerMenu.appendChild(li);
  }
}

// ON LOAD AND RESIZE
const joinColleaguesSectionContainer = document.querySelector(
  ".join-your-colleagues-section-container"
);
const postYourJobHeading = document.querySelector(".post-your-job-heading");
const whoIsLinkedInSecondaryHeading = document.querySelector(
  ".who-is-linkedin-secondary-heading"
);

window.addEventListener("load", function () {
  // Changing styling of elements on load
  for (let heading of h2Headings) {
    if (screenSizeGreaterThanMedium.matches) {
      heading.classList.add("display-5");
    } else {
      heading.classList.remove("display-5");
      heading.classList.add("fs-1", "display-4");
      heading.style.fontWeight = "400";
    }
  }

  screenSizeGreaterThanSmall.matches
    ? (postYourJobHeading.style.fontWeight = "400")
    : (postYourJobHeading.style.fontWeight = "600");

  for (let heading of carouselHeadings) {
    screenSizeGreaterThanSmall.matches
      ? (heading.style.fontWeight = "400")
      : (heading.style.fontWeight = "400");
  }

  for (let para of carouselParas) {
    screenSizeGreaterThanSmall.matches
      ? para.classList.add("fs-2")
      : para.classList.add("fs-5");
  }

  if (screenSizeGreaterThanMedium.matches) {
    joinColleaguesSectionContainer.classList.add("section-spacing");
  } else {
    joinColleaguesSectionContainer.classList.add("h-100", "py-5");
  }

  if (screenSizeGreaterThanLarge.matches) {
    whoIsLinkedInSecondaryHeading.classList.add("display-6");
  } else {
    whoIsLinkedInSecondaryHeading.style.fontWeight = "400";
  }

  if (screenSizeGreaterThanLarge.matches) {
    whoIsLinkedInMainHeading.style.fontWeight = "400";
  } else {
    whoIsLinkedInMainHeading.style.fontWeight = "600";
  }

  // Hide left arrow on load
  let leftArrow = document.querySelector(".carousel-control-prev");
  leftArrow.style.visibility = "hidden";
});

window.addEventListener("resize", function () {
  // On resize add or remove classnames from elements if screen size reaches a certain breakpoint
  for (let heading of h2Headings) {
    if (screenSizeGreaterThanMedium.matches) {
      if (!heading.classList.contains("display-5")) {
        heading.classList.add("display-5");
        heading.classList.remove("fs-1", "display-4");
        heading.style.fontWeight = "300";
      }
    } else {
      if (heading.classList.contains("display-5")) {
        heading.classList.remove("display-5");
        heading.classList.add("fs-1", "display-4");
        heading.style.fontWeight = "400";
      }
    }
  }

  for (let heading of carouselHeadings) {
    screenSizeGreaterThanSmall.matches
      ? (heading.style.fontWeight = "400")
      : (heading.style.fontWeight = "400");
  }

  if (screenSizeGreaterThanSmall.matches) {
    if (!carouselParas[0].classList.contains("fs-2")) {
      // Get first element
      for (let para of carouselParas) {
        para.classList.remove("fs-5");
        para.classList.add("fs-2");
      }
    }
  } else {
    if (carouselParas[0].classList.contains("fs-2")) {
      for (let para of carouselParas) {
        para.classList.remove("fs-2");
        para.classList.add("fs-5");
      }
    }
  }

  screenSizeGreaterThanSmall.matches
    ? (postYourJobHeading.style.fontWeight = "400")
    : (postYourJobHeading.style.fontWeight = "600");

  screenSizeGreaterThanLarge.matches
    ? (whoIsLinkedInMainHeading.style.fontWeight = "400")
    : (whoIsLinkedInMainHeading.style.fontWeight = "600");

  if (screenSizeGreaterThanLarge.matches) {
    if (!whoIsLinkedInSecondaryHeading.classList.contains("display-6")) {
      whoIsLinkedInSecondaryHeading.removeAttribute("style");
      whoIsLinkedInSecondaryHeading.classList.add("display-6");
    }
  } else {
    if (whoIsLinkedInSecondaryHeading.classList.contains("display-6")) {
      whoIsLinkedInSecondaryHeading.classList.remove("display-6");
      whoIsLinkedInSecondaryHeading.style.fontWeight = "400";
    }
  }

  if (screenSizeGreaterThanMedium.matches) {
    if (!joinColleaguesSectionContainer.classList.contains("section-spacing")) {
      joinColleaguesSectionContainer.classList.remove("h-100", "py-5");
      joinColleaguesSectionContainer.classList.add("section-spacing");
    }
  } else {
    if (!joinColleaguesSectionContainer.classList.contains("h-100")) {
      joinColleaguesSectionContainer.classList.remove("section-spacing");
      joinColleaguesSectionContainer.classList.add("h-100", "py-5");
    }
  }
});