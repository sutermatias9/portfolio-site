import { LightningElement } from "lwc";
import IMAGES from "@salesforce/resourceUrl/images";

export default class Page extends LightningElement {
  bannerImage = IMAGES + "/static_images/images/hero.png";
  githubIcon = IMAGES + "/static_images/images/github_icon.png";
  linkedinIcon = IMAGES + "/static_images/images/linkedin_icon.png";
}
