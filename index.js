document.addEventListener('DOMContentLoaded', () => {
  writeCards(['andrew', 'jae'], ', fancy')
})

// document.addEventListener('DOMContentLoaded', function() {
//   writeCards(['andrew', 'jae'], ', fancy')
// })

function writeCards(people, gift) {
  let cards = []
  for (let i = 0; i < people.length; i++) {
    cards.push(`Thank you, ${people[i]}, for the wonderful ${gift} gift!`)
  }
  console.log(cards)
  return cards
}

function countdown(number) {
  for (let i = number; i >= 0; i-- ) {
  console.log(i)
  }
}
