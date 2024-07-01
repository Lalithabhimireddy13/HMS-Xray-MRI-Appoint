// Function to generate a random date and time within a specific range
function generateRandomDateTime() {
    // Get the current date and time
    const currentDate = new Date();
    
    // Set the range for the random date (in this example, within the next 7 days)
    const startDate = currentDate.getTime(); // Current date/time in milliseconds
    const endDate = startDate + (7 * 24 * 60 * 60 * 1000); // 7 days in milliseconds
    
    // Generate a random date within the specified range
    const randomDate = new Date(startDate + Math.random() * (endDate - startDate));
    
    // Generate random hours, minutes, and seconds
    const randomHours = Math.floor(Math.random() * 24); // 0 to 23
    const randomMinutes = Math.floor(Math.random() * 60); // 0 to 59
    const randomSeconds = Math.floor(Math.random() * 60); // 0 to 59
    
    // Set the random time
    randomDate.setHours(randomHours, randomMinutes, randomSeconds);
    
    return randomDate;
}

module.exports = {
    generateRandomDateTime
};
