
document.addEventListener('keydown', function(e) {
    if (e.keyCode === 65) document.getElementById('cnote').play(); 
    if (e.keyCode === 87) document.getElementById('c#note').play();
    if (e.keyCode === 83) document.getElementById('dnote').play();
    if (e.keyCode === 69) document.getElementById('d#note').play();
    if (e.keyCode === 68) document.getElementById('enote').play();
    if (e.keyCode === 70) document.getElementById('fnote').play();
    if (e.keyCode === 84) document.getElementById('f#note').play();
    if (e.keyCode === 71) document.getElementById('gnote').play();
    if (e.keyCode === 89) document.getElementById('g#note').play();
    if (e.keyCode === 72) document.getElementById('anote').play();
    if (e.keyCode === 85) document.getElementById('a#note').play();
    if (e.keyCode === 74) document.getElementById('bnote').play();
});

document.addEventListener('keyup', function(e) {
    if (e.keyCode === 65) document.getElementById('cnote').pause();
        document.getElementById('cnote').currentTime = 0;
    
    if (e.keyCode === 87) document.getElementById('c#note').pause();
        document.getElementById('c#note').currentTime = 0;
        
    if (e.keyCode === 83) document.getElementById('dnote').pause();
        document.getElementById('dnote').currentTime = 0;
    
    if (e.keyCode === 69) document.getElementById('d#note').pause();
        document.getElementById('d#note').currentTime = 0;
    
    if (e.keyCode === 68) document.getElementById('enote').pause();
        document.getElementById('enote').currentTime = 0; 
        
    if (e.keyCode === 70) document.getElementById('fnote').pause();
        document.getElementById('fnote').currentTime = 0; 
        
    if (e.keyCode === 84) document.getElementById('f#note').pause();
        document.getElementById('f#note').currentTime = 0;
        
    if (e.keyCode === 71) document.getElementById('gnote').pause();
        document.getElementById('gnote').currentTime = 0;

    if (e.keyCode === 89) document.getElementById('g#note').pause();
        document.getElementById('g#note').currentTime = 0;

    if (e.keyCode === 72) document.getElementById('anote').pause();
        document.getElementById('anote').currentTime = 0;

    if (e.keyCode === 85) document.getElementById('a#note').pause();
        document.getElementById('a#note').currentTime = 0;

    if (e.keyCode === 74) document.getElementById('bnote').pause();
        document.getElementById('bnote').currentTime = 0;    
});

// Below function deal with user clicking on the keys

function playNote(note) {
    document.getElementById(note).play();
}
