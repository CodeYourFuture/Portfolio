
document.addEventListener('scroll', () => {
  if (window.innerWidth > 600) {
    const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight - 20;

    const contactMiniSection = document.querySelector('#contact-mini');

    if (window.scrollY >= scrollableHeight && contactMiniSection.className == "contact-mini-fixed") {
      contactMiniSection.className = "contact-mini-hidden";
    } else if (window.scrollY < scrollableHeight && contactMiniSection.className == "contact-mini-hidden") {
      contactMiniSection.className = "contact-mini-fixed";
    }
  }
})