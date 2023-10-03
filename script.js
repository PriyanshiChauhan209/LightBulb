const bulb = document.getElementById('bulb');
const click = document.getElementById('click');

click.addEventListener('click', function () {
    // Check if the bulb is currently on or off
    const bulbOn = bulb.classList.contains('on');

    if (bulbOn) {
        bulb.classList.remove('on');
        click.textContent = 'Turn On';
    } else {
        bulb.classList.add('on');
        click.textContent = 'Turn Off';
    }
});