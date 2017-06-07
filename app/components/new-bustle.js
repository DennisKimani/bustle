import Ember from 'ember';

export default Ember.Component.extend({
  addNewBustle: false,
  actions: {
    bustleFormShow() {
      this.set('addNewBustle', true);
    },

    saveBustle1() {
      var params = {
        name: this.get('name'),
        detail: this.get('detail'),
        image: this.get('image'),
      };
      this.set('addNewBustle1', false);
      this.sendAction('savebustle2', params);
    }
  }
});
