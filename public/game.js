// game.js

// Define configuration for Phaser game
const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create
    }
};

// Create a new Phaser game instance
const game = new Phaser.Game(config);

// Preload assets (e.g., images, audio) before the game starts
function preload() {
    // Preload assets here (if any)
}

// Create the game scene
function create() {
    // Display "Hello, World!" text at position (400, 300)
    this.add.text(400, 300, 'Hello, World!', { fontSize: '32px', fill: '#fff' }).setOrigin(0.5);
}
