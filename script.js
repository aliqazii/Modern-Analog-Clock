function updateClock() {
    const now = new Date();
    
    // Get current time
    const hours = now.getHours() % 12;
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    
    // Calculate rotation angles
    const hourDegrees = (hours * 30) + (minutes * 0.5); // 30 degrees per hour + 0.5 degrees per minute
    const minuteDegrees = minutes * 6; // 6 degrees per minute
    const secondDegrees = seconds * 6; // 6 degrees per second
    
    // Apply rotations
    document.querySelector('.hour-hand').style.transform = `rotate(${hourDegrees}deg)`;
    document.querySelector('.minute-hand').style.transform = `rotate(${minuteDegrees}deg)`;
    document.querySelector('.second-hand').style.transform = `rotate(${secondDegrees}deg)`;
}

// Update clock every second
setInterval(updateClock, 1000);

// Initial call to avoid delay
updateClock(); 