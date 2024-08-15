document.addEventListener('DOMContentLoaded', () => {
    const monthElement = document.querySelector('.month');
    const dateElement = document.querySelector('.date');
    const dayOfWeekElement = document.querySelector('.gray'); // For "Day of the week"
    const yearElement = document.querySelectorAll('.gray')[1]; // For "year"

    const now = new Date();

    // Get the current date components
    const month = now.toLocaleString('default', { month: 'long' }); // Full month name
    const date = now.getDate(); // Day of the month
    const dayOfWeek = now.toLocaleString('default', { weekday: 'long' }); // Full weekday name
    const year = now.getFullYear(); // Full year

    // Update the DOM elements with the current date components
    monthElement.textContent = month;
    dateElement.textContent = date;
    dayOfWeekElement.textContent = dayOfWeek;
    yearElement.textContent = year;
});
