function goToSection(event) {
  event.preventDefault();

  const sectionId = event.target.getAttribute("href");
  console.log(sectionId);

  const section = document.querySelector(sectionId);
  console.log(section);

  section.scrollIntoView({
    behavior: "smooth",
  });
}