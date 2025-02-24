import { LightningElement } from "lwc";
import IMAGES from "@salesforce/resourceUrl/imgs";

export default class AboutMe extends LightningElement {
  // Technologies icons
  apexLogo = IMAGES + "/static_images/Tech/Apex.png";
  soqlLogo = IMAGES + "/static_images/Tech/SOQL.png";
  lwcLogo = IMAGES + "/static_images/Tech/LWC.png";
  htmlLogo = IMAGES + "/static_images/Tech/HTML.png";
  cssLogo = IMAGES + "/static_images/Tech/css.jpg";
  javascriptLogo = IMAGES + "/static_images/Tech/javascript.png";
  githubLogo = IMAGES + "/static_images/images/github_icon.png";

  // Certifications
  adminCert = IMAGES + "/static_images/Certifications/Administrator.png";
  pd1Cert = IMAGES + "/static_images/Certifications/Platform-Developer-I.png";
}
