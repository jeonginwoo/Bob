function showGame(gameId) {
    // Hide all game content
    document.getElementById('game-roulette').classList.remove('active');
    document.getElementById('game-ladder').classList.remove('active');

    // Deactivate all game buttons
    const buttons = document.querySelectorAll('.game-button');
    buttons.forEach(button => button.classList.remove('active'));

    // Show the selected game content and activate the button
    document.getElementById('game-' + gameId).classList.add('active');
    document.querySelector(`.game-button[onclick="showGame('${gameId}')"]`).classList.add('active');

    if (gameId === 'ladder') {
        resetLadderGame();
    } else if (gameId === 'roulette') {
        // Ensure roulette is initialized when shown
        if (typeof updateMenuList === 'function' && typeof resizeCanvas === 'function') {
            updateMenuList();
            resizeCanvas();
        }
    }
}

// Initially show the roulette game
document.addEventListener('DOMContentLoaded', () => {
    showGame('roulette');
});
