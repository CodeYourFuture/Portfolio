const projects = [
  {
    id: 0,
    h3: "Personal Web-page",
    img: {
      src: "/images/ScreenshotMyPage.png",
      alt: "tiger on the blue background",
    },
    summary:
      "This page is really valuable for me as it was the first project I could share with my friends via link",
    link: "https://annafyz-about-me.netlify.app/",
    gitlink: "https://github.com/AnnaFYZ/homepage.git",
  },
  {
    id: 1,
    h3: "Karma Module project",
    img: {
      src: "/images/ScreenshotKarmaPage.png",
      alt: "form to fill in",
    },
    summary: "This project taught me to work with forms on the page",
    link: "https://karma-project-annafyz.netlify.app/",
    gitlink: "https://github.com/AnnaFYZ/HTML-CSS-Module-Project.git",
  },
  {
    id: 2,
    h3: "Plants webshop",
    img: {
      src: "/images/ScreenshotKaktus.png",
      alt: "image with cactuses",
    },
    summary:
      "This project became a real CSS challenge for me and taught a lot, especially about background pictures",
    link: "https://annafyz-kaktus-shop.netlify.app/",
    gitlink: "https://github.com/AnnaFYZ/HTML-CSS-Coursework-Week4.git",
  },
  {
    id: 3,
    h3: "CYF-hotel-project",
    img: {
      src: "/images/hotel-project.png",
      alt: "three pictures with description",
    },
    summary:
      "This project was aimed to develop skills in Beck-end (Node.js Express) and combine Front-End with Back-End",
    link: "https://cyf-annafyz-hotel-react.netlify.app/",
    gitlink: "https://github.com/AnnaFYZ/cyf-hotel-react",
  },
];

function displayProjects (){
    let spanId = document.querySelector("#id");
    let index = spanId.innerHTML;
    let i;
    if (index === "" || index === "3") {
      i = 0;
    } else {
      i = Number(index) + 1;
    } 

        let h3Elemet = document.querySelector("#title");
        h3Elemet.innerText = projects[i].h3;

        spanId.innerText = projects[i].id;
        
        let image = document.querySelector("#projectImg");
        image.src = projects[i].img.src;
        image.alt = projects[i].img.alt;
        
        let summary = document.querySelector("#description");
        summary.innerText = projects[i].summary;
        
        let link = document.querySelector("#projectlink");
        link.href = projects[i].link;
        link.target = "_blank";
        link.innerText = projects[i].link;
        
        let gitlink = document.querySelector("#gitlink");
        gitlink.href = projects[i].gitlink;
        gitlink.target = "_blank";
}

let container = document.querySelector("#project");
displayProjects();
document.querySelector("#next").addEventListener("click", displayProjects)

function displayProjectsBackwards() {
  let spanId = document.querySelector("#id");
  let index = Number(spanId.innerHTML);
  let i;
  if (index === 0) {
    i = projects.length - 1;
  } else {
    i = Number(index) - 1;
  } 

  let h3Elemet = document.querySelector("#title");
  h3Elemet.innerText = projects[i].h3;
  
  spanId.innerText = projects[i].id;

  let image = document.querySelector("#projectImg");
  image.src = projects[i].img.src;
  image.alt = projects[i].img.alt;

  let summary = document.querySelector("#description");
  summary.innerText = projects[i].summary;

  let link = document.querySelector("#projectlink");
  link.href = projects[i].link;
  link.target = "_blank";
  link.innerText = projects[i].link;
  container.appendChild(link);
}

document.querySelector("#previous").addEventListener("click", displayProjectsBackwards);