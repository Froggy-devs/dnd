// script.js

// Function to roll 3d6 (three six-sided dice)
function rollStat() {
    return Math.floor(Math.random() * 6 + 1) + 
           Math.floor(Math.random() * 6 + 1) + 
           Math.floor(Math.random() * 6 + 1);
}

document.getElementById('roll-stats').addEventListener('click', function() {
    // Generate stats
    let strength = rollStat();
    let dexterity = rollStat();
    let constitution = rollStat();
    let intelligence = rollStat();
    let wisdom = rollStat();
    let charisma = rollStat();

    // Display stats
    document.getElementById('strength').innerText = strength;
    document.getElementById('dexterity').innerText = dexterity;
    document.getElementById('constitution').innerText = constitution;
    document.getElementById('intelligence').innerText = intelligence;
    document.getElementById('wisdom').innerText = wisdom;
    document.getElementById('charisma').innerText = charisma;

    // Make the stats div visible
    document.getElementById('stats').style.display = 'block';
});
