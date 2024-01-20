let messages = [
        "the apocalypse isn't inevitable.",
        "you're ok.",
        "its fine not to smile.",
        "when you think about it, is this even real?",
        "we are asleep. our Life is a dream.",
        "rejoice: your days as a stewardess are numbered.",
        "the only way to win is not to play the game.",
        "its almost retreat week.",
        "in half an hour, the world will wake up.",
        "let come what comes. let go what goes. see what remains.",
        "what lies inside of you?",
        "your very existence is an act of rebellion.",
        "sing the song without the words, and never stop at all.",
        "father, father we don't need to escalate",
        "remember that roadtrip when you danced in a parking lot?",
        "you do not have to walk on your knees for a hundred miles through the desert, repenting.",
        "did you ever know that you're my hero?",
        "your sons and your daughters are beyond your command.",
        "find your reflection in the snow-covered hills.",
        "may you stay forever young."

 ];
// shuffled array initialization
let shuffledMessages = shuffleArray(messages.slice());

document.getElementById('cheermeupButton').addEventListener('click',function(){
        if (shuffledMessages.length === 0) {
            shuffledMessages = shuffleArray(messages.slice());
        }

        let message = shuffledMessages.pop();

        document.getElementById('message').textContent = message;
    });

// Fisher-Yates (aka Knuth) Shuffle algorithm
function shuffleArray(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}