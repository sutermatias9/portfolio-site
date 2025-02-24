import { LightningElement } from "lwc";
import IMAGES from "@salesforce/resourceUrl/imgs";

export default class Page extends LightningElement {
  bannerImage = IMAGES + "/static_images/images/hero.png";
  linkedinIcon = IMAGES + "/static_images/images/linkedin_icon.png";
  githubIcon = IMAGES + "/static_images/images/github_icon.png";

  handleRedirect(event) {
    const url = event.currentTarget.dataset.url;
    window.open(url, "_blank");
  }
}
