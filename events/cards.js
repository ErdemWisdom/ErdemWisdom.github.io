const deck = [];
const suits = ['hearts', 'diamonds', 'clubs', 'spades'];
const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

function createDeck() {
    for(let suit of suits) {
        for(let value of values) {
            deck.push({suit, value});
        }
    }
}

function shuffleCards() {
    for(let i = 0; i < 1000; i++) {
        const location1 = Math.floor((Math.random() * deck.length));
        const location2 = Math.floor((Math.random() * deck.length));

        const tmp = deck[location1];
        deck[location1] = deck[location2];
        deck[location2] = tmp;
    }
}

function qualifierCards() {
    createDeck();
    shuffleCards();

    mainCard.src = deck[0].img;
    mainCard.classList.add("big-card");

    cardsContainer.innerHTML = "";
    deck.slice(1).forEach(card => {
        const img = document.createElement("img");
        img.src = card.img;
        img.classList.add("card-small");
        cardsContainer.appendChild(img);

        setTimeout(() => {
            img.classList.add("small-card-animate");
        }, 100);
    });
}