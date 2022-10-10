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
  }
});  