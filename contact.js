function contact(event) {
    event.preventDefault();
    alert("Thanks for your Email, we will contact you shortly")
    emailjs
        .sendForm(
            'service_prblo0u',
            'template_njtxxcs',
            event.target,
            '9B_b8nkCDSYz7Vida'
    ).catch(() => {
        loading.classList.remove("modal__overlay--visible");
        alert(
            "the email service is down at the moment, please email us directly at contact@autochase.com.au"
        );
    })
}