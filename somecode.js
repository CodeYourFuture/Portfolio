const projects = [
  {
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
    h3: "Karma Module project",
    img: {
      src: "/images/ScreenshotKarmaPage.png",
      alt: "",
    },
    summary: "This project taught me to work with forms on the page",
    link: "https://karma-project-annafyz.netlify.app/",
    gitlink: "https://github.com/AnnaFYZ/HTML-CSS-Module-Project.git",
  },
  {
    h3: "Plants webshop",
    img: {
      src: "/images/ScreenshotKaktus.png",
      alt: "",
    },
    summary:
      "This project became a real CSS challenge for me and taught a lot, especially about background pictures",
    link: "https://annafyz-kaktus-shop.netlify.app/",
    gitlink: "https://github.com/AnnaFYZ/HTML-CSS-Coursework-Week4.git",
  },
];

function displayProjects (){
    let index = document.querySelector("#title").innerText;
    let i;
    if (index === "" || index === "Plants webshop") {
      i = 0;
    } else if (index === "Personal Web-page") {
      i = 1;
    } else {
      i = 2;
    }

        let h3Elemet = document.querySelector("#title");
        h3Elemet.innerText = projects[i].h3;
        
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
  let index = document.querySelector("#title").innerText;
  let i;
  if (index === "" || index === "Karma Module project") {
    i = 0;
  } else if (index === "Personal Web-page") {
    i = 2;
  } else {
    i = 1;
  }

  let h3Elemet = document.querySelector("#title");
  h3Elemet.innerText = projects[i].h3;

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