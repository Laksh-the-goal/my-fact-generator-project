// script.js
document.getElementById('generateFactBtn').addEventListener('click', generateFunFact);

function generateFunFact() {
    const funFacts = [
        "Fearless and adventurous, always ready for new skatepark challenges.",
        "Creative dancer with a strong sense of rhythm and expression.",
        "Great sense of humor, loves making others laugh with stand-up comedy."
    ];

    const randomIndex = Math.floor(Math.random() * funFacts.length);
    const randomFact = funFacts[randomIndex];

    document.getElementById('funFactDisplay').textContent = randomFact;
}
