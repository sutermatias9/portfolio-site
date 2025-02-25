import { LightningElement } from 'lwc';
import sendEmail from '@salesforce/apex/ContactFormController.sendEmail';

export default class ContactMe extends LightningElement {
    name;
    email;
    message;

    handleInputChange(event) {
        this[event.target.name] = event.target.value;
    }

    handleSubmit() {
        const form = this.template.querySelector('form');
        if (form.checkValidity()) {
            sendEmail({ name: this.name, senderEmail: this.email, message: this.message })
                .then((isEmailSent) => {
                    if (isEmailSent) {
                        this.dispatchEvent(new CustomEvent('emailsent', { detail: { isSuccess: true } }));
                        this.clearForm();
                    }
                })
                .catch((error) => {
                    this.dispatchEvent(new CustomEvent('emailsent', { detail: { isSuccess: false, error: error } }));
                });
        } else {
            form.reportValidity();
        }
    }

    clearForm() {
        this.name = '';
        this.email = '';
        this.message = '';
        this.template.querySelectorAll('input, textarea').forEach((input) => (input.value = ''));
    }
}
