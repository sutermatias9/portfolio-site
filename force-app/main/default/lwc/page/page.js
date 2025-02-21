import { LightningElement } from "lwc";
import IMAGES from "@salesforce/resourceUrl/images";

export default class Page extends LightningElement {
  bannerImage = IMAGES + "/static_images/images/hero.png";
  githubIcon = IMAGES + "/static_images/images/github_icon.png";
  linkedinIcon = IMAGES + "/static_images/images/linkedin_icon.png";
  playIcon = IMAGES + "/static_images/images/play_icon.png";
  shoppingScreenshot =
    IMAGES + "/static_images/images/shopping-cart-screenshot.png";
  coverageScreenshot =
    IMAGES + "/static_images/images/class-coverage-screenshot.png";
  examScreenshot =
    IMAGES + "/static_images/images/exam-simulator-screenshot.png";

  handleRedirect(event) {
    const url = event.currentTarget.dataset.url;
    window.open(url, "_blank");
  }
}
