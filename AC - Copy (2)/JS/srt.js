// Select elements
const submitBtn = document.getElementById('submitBtn');
const srtSection = document.getElementById('srt-section');
const feedbackSection = document.getElementById('feedback');

// Handle button click
submitBtn.addEventListener('click', () => {
    // Hide the SRT section
    srtSection.style.display = 'none';
    
    // Show the feedback section
    feedbackSection.classList.remove('hidden');
});
