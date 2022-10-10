window.TrelloPowerUp.initialize({
  'card-buttons': function () {
    return [{
      text: 'timer',
      callback: function (t) {
        return t.popup({
          title: "Timer",
          url: '../components/timer/timer.html',
        });
      }
    }];
  },
  'card-badges': function (t, opts) {
    console.log(t)
    return [{
      text: 'No Estimate!',
      color: 'blue',
    }];
  },
});  