// Mogawave Booking System - JavaScript Handler
// Handles form submission through selected contact method

document.addEventListener('DOMContentLoaded', function() {
    const bookingForm = document.getElementById('bookingForm');
    if (!bookingForm) return;

    // Set minimum date to today
    const today = new Date().toISOString().split("T")[0];
    document.getElementById('lesson_date').min = today;

    // Form submission
    bookingForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const submitBtn = document.getElementById('submitBtn');
        const messageDiv = document.getElementById('bookingMessage');
        
        // Validate date
        const dateInput = document.getElementById('lesson_date').value;
        const selectedDate = new Date(dateInput);
        const todayDate = new Date();
        todayDate.setHours(0, 0, 0, 0);
        
        if (selectedDate < todayDate) {
            showMessage(messageDiv, 'error', 'Please select a future date for your lesson.');
            return;
        }

        // Get selected contact method
        const contactMethod = document.querySelector('input[name="contact_method"]:checked').value;
        
        // Disable button during submission
        submitBtn.disabled = true;
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Submitting...';

        try {
            // Get form data
            const formData = new FormData(bookingForm);
            
            if (contactMethod === 'whatsapp') {
                // Send via WhatsApp
                handleWhatsAppSubmission(formData);
            } else if (contactMethod === 'email') {
                // Send via Email
                handleEmailSubmission(formData);
            }
            
            // Show success message
            showMessage(messageDiv, 'success', 
                '✅ Booking submitted successfully!<br>' +
                'We will contact you shortly to confirm the booking!');
            bookingForm.reset();
            document.getElementById('lesson_date').min = today;
            
            // Scroll to message
            messageDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
            
        } catch (error) {
            console.error('Booking submission error:', error);
            showMessage(messageDiv, 'error', 'Please try again or contact us directly.');
            messageDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
        } finally {
            submitBtn.disabled = false;
            submitBtn.textContent = originalText;
        }
    });
});

// Handle WhatsApp submission
function handleWhatsAppSubmission(formData) {
    const name = formData.get('name');
    const email = formData.get('email');
    const whatsapp = formData.get('whatsapp');
    const lessonType = formData.get('lesson_type');
    const lessonDate = formData.get('lesson_date');
    const message = formData.get('message');
    
    const text = `Hi Rayan, I would like to book a ${lessonType} lesson.

Details:
Name: ${name}
Email: ${email}
WhatsApp: ${whatsapp || 'Not provided'}
Preferred Date: ${lessonDate}
Message: ${message || 'None'}`;
    
    const whatsappUrl = `https://wa.me/212608418714?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank');
}

// Handle Email submission
function handleEmailSubmission(formData) {
    const name = formData.get('name');
    const email = formData.get('email');
    const whatsapp = formData.get('whatsapp');
    const lessonType = formData.get('lesson_type');
    const lessonDate = formData.get('lesson_date');
    const message = formData.get('message');
    
    const subject = `Lesson Booking Request - ${lessonType}`;
    const body = `Full Name: ${name}
Email: ${email}
WhatsApp: ${whatsapp || 'Not provided'}
Lesson Type: ${lessonType}
Preferred Date: ${lessonDate}

Additional Message:
${message || 'None provided'}`;
    
    const mailtoUrl = `mailto:rayanamzil12@icloud.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;
}

// Helper function to display messages
function showMessage(element, type, html) {
    element.style.display = 'block';
    element.className = 'message ' + type;
    element.innerHTML = html;
}

// Helper function to serialize form data
function serializeFormData(form) {
    const formData = new FormData(form);
    const params = new URLSearchParams(formData);
    return params.toString();
}

// Helper function to format email
function formatBookingEmail(form) {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const whatsapp = document.getElementById('whatsapp').value;
    const lessonType = document.getElementById('lesson_type').value;
    const lessonDate = document.getElementById('lesson_date').value;
    const contactMethod = document.querySelector('input[name="contact_method"]:checked').value;
    const message = document.getElementById('message').value;

    return `
Booking Request from Mogawave Website

Full Name: ${name}
Email: ${email}
WhatsApp: ${whatsapp || 'Not provided'}
Lesson Type: ${lessonType}
Preferred Date: ${lessonDate}
Preferred Contact Method: ${contactMethod}

${message ? 'Additional Message:\n' + message : ''}

Please confirm this booking and let me know the exact time and location.
    `.trim();
}

// Auto-focus first error field
function focusFirstError(form) {
    const requiredFields = form.querySelectorAll('[required]');
    for (let field of requiredFields) {
        if (!field.value) {
            field.focus();
            break;
        }
    }
}
