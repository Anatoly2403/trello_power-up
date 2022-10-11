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
    console.log(opts)
    console.log(t.getContext())
    return [{
      text: 'No Estimate!',
      color: 'blue',
    }];
  },
  'card-back-section': function (t, options) {
    return [{
      title: 'My Card Back Section',
      content: {
        type: 'iframe',
        url: t.signUrl('./components/section/section.html'),
        height: 230,
      },
      action: {
        text: 'My Action',
        callback: (t) => console.log(123123),
      }
    }];
  }
});  