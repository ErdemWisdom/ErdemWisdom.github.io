const deck = [];
const suits = ['hearts', 'diamonds', 'clubs', 'spades'];
const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

for (let suit of suits) {
  for (let value of values) {
    deck.push({
        value,
        suit,
        img: `/images/cards/${value}_of_${suit}.png`
    });
  }
}

function shuffleDeck(deck) {
    for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
    }
    return deck;
}

const shuffledDeck = shuffleDeck(deck);

function displayCards() {
    const shuffledDeck = shuffleDeck(deck);
    const mainCard = shuffledDeck[0];

    const mainCardElement = document.getElementById("main-card");
    mainCardElement.src = mainCard.img;

    const container = document.getElementById("cards-container");
    container.innerHTML = '';

    shuffledDeck.slice(1).forEach(card => {
        const img = document.createElement('img');
        img.src = card.img;
        img.classList.add('card');
        container.appendChild(img);
    });
}
