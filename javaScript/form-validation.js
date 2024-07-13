document.addEventListener('DOMContentLoaded', function() {
    // References to the form fields and submit button //
    const contactForm = document.getElementById('contact-form');
    const validationMsgContainer = document.querySelector('.validation-msg-container');

    // Add event listener to the form submit event //
    contactForm.addEventListener('submit', function(event) {
        // Clear previous validation messages //
        validationMsgContainer.innerHTML = '';

        // Check if any input field is empty
        let hasEmptyFields = false;
        const inputs = this.querySelectorAll('input, textarea');
        for (let i = 0; i < inputs.length; i++) {
            if (!inputs[i].value.trim()) {
                hasEmptyFields = true;
                break;
            }
        }
        if (hasEmptyFields) {
            displayValidationMessage('Please fill in all fields.', 'error-msg');
            event.preventDefault(); // Prevent form submission if there are errors
            return; // Stop further validation if there are empty fields
        }

        // Validate email (format: xxx@xxx.xxx)
        const emailField = document.getElementById('email');
        const email = emailField.value.trim();
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            displayValidationMessage('Please enter a valid email address', 'error-msg');
            event.preventDefault(); // Prevent form submission if there are errors
            return; // Stop further validation if there are errors
        }

        // Validate name (at least 2 characters)
        const firstNameInput = document.getElementById('first-name');
        const firstName = firstNameInput.value.trim();
        if (firstName.length < 2) {
            displayValidationMessage('Please enter a value into first name.', 'error-msg');
            event.preventDefault(); // Prevent form submission if there are errors
            return; // Stop further validation if there are errors
        }

        // Validate name (at least 2 characters)
        const lastNameInput = document.getElementById('last-name');
        const lastName = lastNameInput.value.trim();
        if (lastName.length < 2) {
            displayValidationMessage('Please enter a value into last name.', 'error-msg');
            event.preventDefault(); // Prevent form submission if there are errors
            return; // Stop further validation if there are errors
        }

        // Validate subject (at least 5 characters)
        const subjectInput = document.getElementById('subject');
        const subject = subjectInput.value.trim();
        if (subject.length < 5) {
            displayValidationMessage('Please enter a subject with at least 5 characters', 'error-msg');
            event.preventDefault(); // Prevent form submission if there are errors
            return; // Stop further validation if there are errors
        }

        // Validate message (at least 10 characters)
        const messageInput = document.getElementById('message');
        const message = messageInput.value.trim();
        if (message.length < 10) {
            displayValidationMessage('Please enter a message with at least 10 characters', 'error-msg');
            event.preventDefault(); // Prevent form submission if there are errors
            return; // Stop further validation if there are errors
        }

        // If no validation errors, submit the form //
        // You can choose to uncomment this line to submit the form programmatically
        // contactForm.submit();

        // Alternatively, if you want to submit the form via AJAX, you can do so here
        // Refer to appropriate AJAX submission code based on your requirements
    });

    // Function to display validation messages //
    function displayValidationMessage(message, className) {
        const validationMsgBox = document.createElement('div');
        validationMsgBox.classList.add('validation-msg', className);

        const msgText = document.createTextNode(message);
        validationMsgBox.appendChild(msgText);

        const closeBtn = document.createElement('span');
        closeBtn.classList.add('close-btn');
        closeBtn.innerHTML = '&times;';
        closeBtn.addEventListener('click', function() {
            validationMsgBox.remove(); // Remove the message box when close button is clicked
        });
        validationMsgBox.appendChild(closeBtn);

        validationMsgContainer.appendChild(validationMsgBox);
    }
});
