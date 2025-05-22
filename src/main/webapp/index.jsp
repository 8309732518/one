<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Chinna Proposes to Pavani</title>
    <link rel="stylesheet" href="style.css">
    <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&family=Poppins:wght@300;500&display=swap" rel="stylesheet">
</head>
<body>
    <div class="beach-scene">
        <!-- Sky Elements -->
        <div class="sky"></div>
        <div class="sun"></div>
        <div class="cloud cloud-1"></div>
        <div class="cloud cloud-2"></div>
        
        <!-- Ocean Elements -->
        <div class="ocean">
            <div class="wave wave-1"></div>
            <div class="wave wave-2"></div>
        </div>
        
        <!-- Beach Elements -->
        <div class="sand">
            <div class="shell shell-1"></div>
            <div class="shell shell-2"></div>
        </div>
        
        <!-- Characters -->
        <div class="chinna">
            <div class="chinna-head"></div>
            <div class="chinna-body"></div>
            <div class="chinna-arm-left"></div>
            <div class="chinna-arm-right">
                <div class="proposal-ring"></div>
            </div>
            <div class="chinna-leg-left"></div>
            <div class="chinna-leg-right"></div>
            <div class="chinna-name">Chinna</div>
        </div>
        
        <div class="pavani">
            <div class="pavani-head"></div>
            <div class="pavani-hair"></div>
            <div class="pavani-body"></div>
            <div class="pavani-arm-left"></div>
            <div class="pavani-arm-right"></div>
            <div class="pavani-dress"></div>
            <div class="pavani-name">Pavani</div>
        </div>
        
        <!-- Romantic Elements -->
        <div class="floating-hearts"></div>
    </div>
    
    <div class="proposal-box">
        <h1>Pavani, Will You Marry Me?</h1>
        <div class="proposal-buttons">
            <button id="yes-btn">Yes! ❤️</button>
            <button id="no-btn">I need time...</button>
        </div>
    </div>
    
    <div class="response-box hidden">
        <h2>Pavani's Answer</h2>
        <p id="response-text"></p>
    </div>
    
    <audio id="romantic-sound" src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" loop></audio>
    
    <script src="script.js"></script>
</body>
</html>
