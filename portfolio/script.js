 // Text animation for the profession
        const professions = ["Web Developer", "Frontend Designer", "Coding Enthusiast", "Problem Solver"];
        let currentIndex = 0;
        const textAnimation = document.getElementById('text-animation');

        function typeWriter() {
            let currentText = professions[currentIndex];
            let charIndex = 0;
            
            // Clear previous text
            textAnimation.textContent = '';
            
            // Add new text character by character
            function type() {
                if (charIndex < currentText.length) {
                    textAnimation.textContent += currentText.charAt(charIndex);
                    charIndex++;
                    setTimeout(type, 100); // Typing speed
                } else {
                    // Wait before starting to delete
                    setTimeout(erase, 2000);
                }
            }
            
            // Erase text character by character
            function erase() {
                if (charIndex > 0) {
                    textAnimation.textContent = currentText.substring(0, charIndex-1);
                    charIndex--;
                    setTimeout(erase, 50); // Erasing speed
                } else {
                    // Move to next profession
                    currentIndex = (currentIndex + 1) % professions.length;
                    setTimeout(typeWriter, 500); // Delay before typing next text
                }
            }
            
            type();
        }

        // Start the typewriter effect when page loads
        window.onload = typeWriter;

        // Smooth scrolling for navigation links
        document.querySelectorAll('.nav-links a, .cta-button').forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                
                window.scrollTo({
                    top: targetSection.offsetTop,
                    behavior: 'smooth'
                });
            });
        });

        // Navigation bar scrolling effect
        window.addEventListener('scroll', function() {
            const nav = document.querySelector('nav');
            if (window.scrollY > 100) {
                nav.style.height = '60px';
                nav.style.background = 'rgba(18, 55, 42, 0.95)';
            } else {
                nav.style.height = '80px';
                nav.style.background = 'var(--clr-dark-green)';
            }
        });