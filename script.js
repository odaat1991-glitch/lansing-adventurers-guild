// script.js

document.addEventListener('DOMContentLoaded', function() {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    // Initialize active state for tabs
    tabButtons.forEach(button => button.setAttribute('aria-selected', 'false'));
    tabContents.forEach(content => content.setAttribute('aria-labelledby', ''));

    tabButtons[0].setAttribute('aria-selected', 'true');
    tabContents[0].classList.add('active');
    tabContents[0].setAttribute('aria-labelledby', 'beginners-tab');

    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active state from all tabs
            tabButtons.forEach(btn => btn.setAttribute('aria-selected', 'false'));
            tabContents.forEach(content => content.classList.remove('active'));

            // Add active state to clicked tab and corresponding content
            this.setAttribute('aria-selected', 'true');
            const targetId = this.getAttribute('data-tab');
            document.getElementById(targetId).classList.add('active');
            document.getElementById(targetId).setAttribute('aria-labelledby', this.id);
        });
    });

    // FAQ accordion functionality
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            const answer = this.nextElementSibling;
            if (answer.style.maxHeight) {
                answer.style.maxHeight = null;
                this.setAttribute('aria-expanded', 'false');
            } else {
                answer.style.maxHeight = answer.scrollHeight + "px";
                this.setAttribute('aria-expanded', 'true');
            }
        });
    });

    // Form submission handling
    const form = document.querySelector('.contact-form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Form submitted successfully!');
        form.reset();
    });
});