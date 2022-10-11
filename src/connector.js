window.TrelloPowerUp.initialize({
  'card-buttons': function () {
    return [{
      icon: './assets/icons/timer.svg',
      text: 'timer',
      callback: function (t) {
        return t.popup({
          title: "timer",
          url: './components/timer/timer.html',
        });
      }
    }];
  },
  'card-badges': function (t, opts) {
    return [{
      text: 'No Estimate!',
      color: 'blue',
    }];
  },
  'card-back-section': function (t, options) {
    console.log(123)
  }
});  