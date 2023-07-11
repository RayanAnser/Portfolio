import { Controller } from "stimulus";

export default class extends Controller {
  static targets = ["section"];

  connect() {
    window.addEventListener("scroll", this.updateSections.bind(this));
    console.log("salut")
  }

  updateSections() {
    this.sectionTargets.forEach(section => {
      const rect = section.getBoundingClientRect();
      const isSectionVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;
      section.classList.toggle("active", isSectionVisible);
    });
  }
}
