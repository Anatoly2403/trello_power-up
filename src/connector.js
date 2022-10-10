window.TrelloPowerUp.initialize({
  'card-buttons': function () {
    return [{
      icon: '../assets/icons/timer.svg',
      text: 'timer',
      callback: function (t) {
        return t.popup({
          title: "timer",
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