import Component from '@ember/component';

export default Component.extend({
  isShown: true,
  actions: {
    toggleNew(){
      this.toggleProperty('isClicked')
    }
  }
});
