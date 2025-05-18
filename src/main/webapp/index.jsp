<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Chinna's Proposal to Pavani</title>
    <link rel="stylesheet" href="styles.css">
    <link href="https://fonts.googleapis.com/css2?family=Parisienne&family=Montserrat:wght@300;500;700&display=swap" rel="stylesheet">
</head>
<body>
    <div class="scene">
        <div class="sky-gradient"></div>
        <div class="sun"></div>
        <div class="sun-rays"></div>
        <div class="clouds"></div>
        <div class="ocean">
            <div class="wave"></div>
            <div class="wave"></div>
            <div class="wave"></div>
        </div>
        <div class="sand">
            <div class="sand-texture"></div>
            <div class="shell"></div>
            <div class="shell"></div>
            <div class="shell"></div>
        </div>
        
        <div class="chinna">
            <div class="head"></div>
            <div class="body"></div>
            <div class="arm-left"></div>
            <div class="arm-right">
                <div class="ring"></div>
                <div class="ring-sparkle"></div>
            </div>
            <div class="leg-left"></div>
            <div class="leg-right"></div>
        </div>
        
        <div class="pavani">
            <div class="head"></div>
            <div class="hair"></div>
            <div class="body"></div>
            <div class="arm-left"></div>
            <div class="arm-right"></div>
            <div class="leg-left"></div>
            <div class="leg-right"></div>
            <div class="dress"></div>
            <div class="happy-tear"></div>
        </div>
        
        <div class="floating-hearts"></div>
    </div>

    <div class="proposal-container">
        <div class="proposal-text">
            <h1>My Dearest Pavani</h1>
            <p>From the moment I met you, I knew my search was over.</p>
            <p>Will you make me the happiest man in the world?</p>
            <div class="buttons">
                <button id="yesBtn">Yes, Forever! ❤️</button>
                <button id="noBtn">Make me think...</button>
            </div>
        </div>
    </div>

    <div class="response-container hidden" id="response">
        <h2>Pavani's Answer</h2>
        <p id="responseText"></p>
        <div class="fireworks"></div>
    </div>

    <audio id="romanticMusic" loop>
        <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/mpeg">
    </audio>

    <script src="script.js"></script>
</body>
</html>
