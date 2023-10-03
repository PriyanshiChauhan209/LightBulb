const bulb = document.getElementById('bulb');
const click = document.getElementById('click');

click.addEventListener('click', function () {
    // Check if the bulb is currently on or off
    const bulbOn = bulb.classList.contains('on');

    if (bulbOn) {
        bulb.classList.remove('on');
        click.textContent = 'Wake Up';
        container.style.backgroundImage = 'url("night-background.jpg")'; // Change to the nighttime background

    } else {
        bulb.classList.add('on');
        click.textContent = 'Sleep';
        container.style.backgroundImage = 'url("day-background.jpg")'; // Change to the daytime background

    }
});