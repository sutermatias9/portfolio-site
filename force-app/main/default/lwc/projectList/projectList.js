import { LightningElement } from 'lwc';
import IMAGES from '@salesforce/resourceUrl/images';

export default class ProjectList extends LightningElement {
    // Project screenshots
    shoppingScreenshot = IMAGES + '/static_images/images/shopping-cart-screenshot.png';
    coverageScreenshot = IMAGES + '/static_images/images/class-coverage-screenshot.png';
    examScreenshot = IMAGES + '/static_images/images/exam-simulator-screenshot.png';
    portfolioScreenshot = IMAGES + '/static_images/images/portfolio-screenshot.png';

    // Tile button images
    playIcon = IMAGES + '/static_images/images/play_icon.png';
    githubIcon = IMAGES + '/static_images/images/github_icon.png';

    handleRedirect(event) {
        const url = event.currentTarget.dataset.url;
        window.open(url, '_blank');
    }
}
