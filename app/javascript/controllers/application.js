import { Application } from "@hotwired/stimulus"
import AnimationController from './controllers/animation_controller';
const application = Application.start()
application.register('animation', AnimationController);


// Configure Stimulus development experience
application.debug = false
window.Stimulus   = application


export { application }
