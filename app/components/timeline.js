import Component from '@ember/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class Timeline extends Component {
  @tracked isShown = false
  @action
    toggleNew(){
      this.toggleProperty('isClicked')
    }
    handleMouseEnter(e) {
      // console.log(document.body.offsetWidth/2 - e.clientX);

      if (document.body.offsetWidth/2 - e.clientX < 100 && document.body.offsetWidth/2 - e.clientX > -100) {
        document.querySelector('.button-create-new').classList.add('is-shown')
      }
      
    }
    handleMouseLeave(e) {
      document.querySelector('.button-create-new').classList.remove('is-shown')
    }
    handleMouseMove(e) {
      console.log(e.clientX);
      
      const btn = document.querySelector('.button-create-new')
      btn.style.top = `${e.clientY - 25}px`

      if (document.body.offsetWidth/2 - e.clientX < 75 && document.body.offsetWidth/2 - e.clientX > - 75) {
        btn.classList.add('is-shown')
      } else {
        btn.classList.remove('is-shown')
      }
      
    }
  
    didInsertElement() {
      super.didInsertElement(...arguments);
      this.element.addEventListener('mouseenter', this.handleMouseEnter);
      this.element.addEventListener('mouseleave', this.handleMouseLeave);
      this.element.addEventListener('mousemove', this.handleMouseMove);
    }
  
    willDestroyElement() {
      super.willDestroyElement(...arguments);
      this.element.removeEventListener('mouseenter', this.handleMouseEnter);
      this.element.removeEventListener('mouseleave', this.handleMouseLeave);
      this.element.removeEventListener('mousemove', this.handleMouseMove);
    }
}
