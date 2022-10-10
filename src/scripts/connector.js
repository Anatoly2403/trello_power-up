window.TrelloPowerUp.initialize({
  'card-buttons': function (t, options) {
    return [{
      text: 'Timer',
      callback: function (t) {
        return t.popup({
          title: "Timer",
          url: '../components/timer/timer.html',
        });
      }
    }];
  },
  'card-badges': function (t, estimate) {
    return t.get('card', 'shared', 'estimate')
      .then(function (estimate) {
        console.log(estimate)
        return [{
          text: 'No Estimate!',
          color: 'red',
        }];
      });
  },
});  