var skillsButton = document.getElementById('skills-toggle-button');
var skillsSection = document.getElementById('skills-section');
if (skillsButton && skillsSection) {
    skillsButton.addEventListener('click', function () {
        if (skillsSection.style.display === 'none') {
            skillsSection.style.display = 'block';
            skillsButton.textContent = 'Hide Skills';
        }
        else {
            skillsSection.style.display = 'none';
            skillsButton.textContent = 'Show Skills';
        }
    });
}
