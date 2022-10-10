window.TrelloPowerUp.initialize({
  'card-buttons': function () {
    return [{
      text: 'timer',
      callback: function (t) {
        return t.popup({
          icon: '../assets/icons/timer.svg',
          title: "Timer",
          url: '../components/timer/timer.html',
        });
      }
    }];
  },
  'card-badges': function (t, opts) {
    console.log(t)
    console.log(t.getContext())
    return [{
      text: 'No Estimate!',
      color: 'blue',
    }];
  },
});  