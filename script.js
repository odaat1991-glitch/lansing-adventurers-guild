document.addEventListener('DOMContentLoaded', () => {
    // Tab functionality
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            tabButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const targetTab = button.dataset.tab;
            tabContents.forEach(content => {
                if (content.id === targetTab) {
                    content.classList.remove('hidden');
                } else {
                    content.classList.add('hidden');
                }
            });
        });
    });

    // FAQ Accordion functionality
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
            const icon = question.querySelector('span');

            if (answer.style.maxHeight) {
                answer.style.maxHeight = null;
                icon.style.transform = 'rotate(0deg)';
            } else {
                // Close other open FAQs
                document.querySelectorAll('.faq-answer').forEach(ans => {
                    if (ans.style.maxHeight) {
                        ans.style.maxHeight = null;
                        ans.previousElementSibling.querySelector('span').style.transform = 'rotate(0deg)';
                    }
                });

                answer.style.maxHeight = answer.scrollHeight + "px";
                icon.style.transform = 'rotate(45deg)';
            }
        });
    });
});