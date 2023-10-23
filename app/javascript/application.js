// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"
import "@popperjs/core"
import "bootstrap"
import "@hotwired/stimulus"

import { Application } from "@hotwired/stimulus"
import TextAnimationController from "controllers/textAnimation_controller";
const application = Application.start()
application.register('text-animation', TextAnimationController);


// Configure Stimulus development experience
application.debug = false
window.Stimulus   = application


export { application }
