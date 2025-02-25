import { LightningElement } from 'lwc';
import { reduceErrors } from 'c/ldsUtils';
import ToastContainer from 'lightning/toastContainer';
import Toast from 'lightning/toast';

import IMAGES from '@salesforce/resourceUrl/imgs';

export default class Page extends LightningElement {
    bannerImage = IMAGES + '/static_images/images/hero.png';
    linkedinIcon = IMAGES + '/static_images/images/linkedin_icon.png';
    githubIcon = IMAGES + '/static_images/images/github_icon.png';

    connectedCallback() {
        const toastContainer = ToastContainer.instance();
        toastContainer.maxToasts = 3;
        toastContainer.toastPosition = 'top-center';
    }

    handleEmailSent(event) {
        const { isSuccess, error } = event.detail;

        if (isSuccess) this.showToast('Email sent successfully!', null, 'success');
        else this.showToast('Failed to send email. Please try again later.', reduceErrors(error), 'error');
    }

    handleRedirect(event) {
        const url = event.currentTarget.dataset.url;
        window.open(url, '_blank');
    }

    showToast(label, message, variant) {
        Toast.show({ label, message, variant });
    }
}
