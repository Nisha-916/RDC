// script.js
document.addEventListener("DOMContentLoaded", () => {
    const practiceModeBtn = document.getElementById("practiceModeBtn");
    const testModeBtn = document.getElementById("testModeBtn");
    const practiceMode = document.getElementById("practiceMode");
    const testMode = document.getElementById("testMode");
    const submitStory = document.getElementById("submitStory");
    const gradeResult = document.getElementById("gradeResult");
    const grade = document.getElementById("grade");

    // Toggle modes
    practiceModeBtn.addEventListener("click", () => {
        practiceMode.classList.remove("hidden");
        testMode.classList.add("hidden");
    });

    testModeBtn.addEventListener("click", () => {
        testMode.classList.remove("hidden");
        practiceMode.classList.add("hidden");
    });

    // Simulate grading system
    submitStory.addEventListener("click", () => {
        const storyInput = document.getElementById("storyInput").value.trim();
        if (storyInput.length > 50) {
            grade.innerText = "Excellent";
        } else if (storyInput.length > 20) {
            grade.innerText = "Good";
        } else {
            grade.innerText = "Needs Improvement";
        }
        gradeResult.classList.remove("hidden");
    });
});
