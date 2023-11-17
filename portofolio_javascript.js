// Add smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });

        // Get the target section ID from the href attribute
        const targetSectionId = this.getAttribute('href').substring(1);

        // Show the selected section
        showSection(targetSectionId);

        // If the target section is "skills", show the corresponding skill content
        if (targetSectionId === "skills") {
            showSkillContent("Python-content");
        } else {
            showSkillContent(targetSectionId + "-content");
        }
    });
});

// Rest of your code...

// Add a back-to-top button
document.addEventListener("DOMContentLoaded", function() {
    const backToTopButton = document.getElementById('backToTop');

    if (!backToTopButton) {
        console.error("Element with ID 'backToTop' not found.");
        return; // Exit the function to prevent further execution
    }

    window.onscroll = function() {
        if (document.documentElement.scrollTop > 100) {
            backToTopButton.style.display = "block";
            
        } else {
            backToTopButton.style.display = "none";
        }
    };
    
    backToTopButton.addEventListener('click', function() {
        document.documentElement.scrollTop = 0;
    });
});
// Add smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });

        // Get the target section ID from the href attribute
        const targetSectionId = this.getAttribute('href').substring(1);

        // Show the selected section
        showSection(targetSectionId);
        
        // If the target section is "skills", show the corresponding skill content
        if (targetSectionId === "skills") {
            showSkillContent("Python-content");
            
        } else {
            showSkillContent(targetSectionId + "-content");
        }
    });
   
});
// Rest of your code...
function showSection(sectionId) {
    // Hide all sections initially
    var sections = ['home', 'skills', 'education', 'project', 'internship', 'certifications'];
    sections.forEach(function (sec) {
        var section = document.getElementById(sec);
        if (section) {
            section.style.display = sec === sectionId ? 'block' : 'none';
        }
    });

    // If the selected section is "skills," show the corresponding skill content
    if (sectionId === 'skills') {
        // By default, show the Python content
        showSkillContent('Python-content');
    } else {
        // For other sections, show the corresponding skill content
        showSkillContent(sectionId + '-content');
    }

   

    // Highlight the active menu item
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        if (anchor.getAttribute('href').substring(1) === sectionId) {
            anchor.classList.add('active-link');
        } else {
            anchor.classList.remove('active-link');
        }
    });
}
// Add a function to highlight the active skill and its content
function highlightActiveSkill(skillId) {
    // Remove the highlight from all skill images
    var skillImages = document.getElementsByClassName('skill-image');
    for (var i = 0; i < skillImages.length; i++) {
        skillImages[i].classList.remove('active-skill-image');
    }

    // Highlight the active skill image
    var activeSkillImage = document.querySelector('.skill-image[data-skill="' + skillId + '"]');
    if (activeSkillImage) {
        activeSkillImage.classList.add('active-skill-image');
    }

    // Remove the highlight from all skill contents
    var skills = ['Python-content', 'Java-content', 'HTML-content', 'CSS-content', 'JavaScript-content', 'MySQL-content', 'AndroidStudio-content', 'Git-content','Github-content','php-content','PhpMyAdmin-content','SQLite-content','firebase-content','pandas-content','Matplotlib-content','numpy-content'];
    skills.forEach(function (skill) {
        var skillContent = document.getElementById(skill);
        if (skillContent) {
            skillContent.classList.remove('active-skill-content');
        }
    });

    // Highlight the active skill content
    var activeSkillContent = document.getElementById(skillId);
    if (activeSkillContent) {
        activeSkillContent.classList.add('active-skill-content');
    }
}



function showSkillContent(skillId) {
    // Hide all skill contents
    var skills = ['Python-content', 'Java-content', 'HTML-content', 'CSS-content', 'JavaScript-content', 'MySQL-content', 'AndroidStudio-content', 'Git-content','Github-content','php-content','PhpMyAdmin-content','SQLite-content','firebase-content','pandas-content','Matplotlib-content','numpy-content'];
    skills.forEach(function (skill) {
        var skillContent = document.getElementById(skill);
        if (skillContent) {
            skillContent.style.display = skill === skillId ? 'block' : 'none';
        }
    });

    // Highlight the active skill
    highlightActiveSkill(skillId);
}
document.addEventListener("DOMContentLoaded", function () {
    // Your JavaScript code here


const modal = document.getElementById("marksheetModal");
const btn10th = document.getElementById("show10thMarksheet");
const btn12th = document.getElementById("show12thMarksheet");
const closeModal = document.getElementById("closeModal");
const marksheetImage = document.getElementById("marksheetImage");

// Event listeners to open and close the modal
btn10th.addEventListener("click", () => {
    modal.style.display = "block";
    marksheetImage.src = "marksheet10.jpg"; // Assuming the image is in the same directory as your HTML file
});

btn12th.addEventListener("click", () => {
    modal.style.display = "block";
    marksheetImage.src = "marksheet12.jpg"; // Assuming the image is in the same directory as your HTML file
});


closeModal.addEventListener("click", () => {
    modal.style.display = "none";
});

// Close the modal when clicking outside of the image
window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});



});
document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("imageModal");
    const modalImage = document.getElementById("modalImage");
    const prevImage = document.getElementById("prevImage");
    const nextImage = document.getElementById("nextImage");
    const closeModal = document.getElementById("closeModal");

    const images = ["1 sem mark sheet.jpg", "2 sem mark sheet.jpg", "3 sem mark sheet.jpg","5 sem marksheet.jpg","6 sem marksheet.jpg"]; // Replace with your image URLs
    let currentIndex = 0;

    function updateModalImage() {
        modalImage.src = images[currentIndex];
    }

    // Event listeners to open and close the modal
    document.getElementById("openModal").addEventListener("click", () => {
        modal.style.display = "block";
        updateModalImage();
    });

    closeModal.addEventListener("click", () => {
        modal.style.display = "none";
    });

    // Handle next and previous buttons
    prevImage.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateModalImage();
    });

    nextImage.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % images.length;
        updateModalImage();
    });

    // Close the modal when clicking outside of the image
    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
    
});
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("warning-message").addEventListener("click", function () {
        if (isMobileDevice()) {
            document.getElementById("warning-message").style.display = "block";
        } else {
            window.location.href = "https://ajithcap.github.io/professional-portofolio/";
        }
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const centralContent = document.getElementById("centralContent");

   

    // Check if there is text in the central content
    function checkText() {
        const text = centralContent.querySelector("p");
        if (text) {
            centralContent.style.backgroundColor = "rgba(0, 0, 0, 0.3)"; // Transparent background with text
            centralContent.style.padding="10px";
        } else {
            centralContent.style.backgroundColor = "rgba(0, 0, 0, 0.7)"; // Reset background color without text
        }
    }

    // Call the function initially
    checkText();
    function isMobileOrTablet() {
        return window.innerWidth <= 767; // Adjust the breakpoint as needed
    }

    // Function to display the modal pop-up message
    function showModal() {
        const modal = document.getElementById('zoomOutModal');
        modal.style.display = 'block';
    }

    // Function to close the modal pop-up message
    function closeModal() {
        const modal = document.getElementById('zoomOutModal');
        modal.style.display = 'none';
    }

    // Check if the website is opened on a mobile or tablet view and show the modal pop-up
    document.addEventListener('DOMContentLoaded', function() {
        if (isMobileOrTablet()) {
            showModal();
        }
    });



  
});
