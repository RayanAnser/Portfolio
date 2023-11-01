import AnimatedLinksObjs from "./animatedLink";

[...document.querySelectorAll('a.menu__link')].forEach((el) => {
    const elPosition = [...el.parentNode.children].indexOf(el);
    const fxObj = AnimatedLinksObjs[elPosition];
    fxObj && new fxObj(el);
});

// Import and register all your controllers from the importmap under controllers/*

import { application } from "controllers/application"

// Eager load all controllers defined in the import map under controllers/**/*_controller
import { eagerLoadControllersFrom } from "@hotwired/stimulus-loading"
eagerLoadControllersFrom("controllers", application)


// Lazy load controllers as they appear in the DOM (remember not to preload controllers in import map!)
// import { lazyLoadControllersFrom } from "@hotwired/stimulus-loading"
// lazyLoadControllersFrom("controllers", application)
