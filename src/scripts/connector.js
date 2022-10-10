
console.log(123123);

window.TrelloPowerUp.initialize({
  "card-badges": (t, options) => {
    return t.card("all").then((card) => {
      console.log(card)
      return []
    })
  }
})