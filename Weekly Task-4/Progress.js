const progressData = [
    { date: '2025-02-01', exercisesCompleted: 10 },
    { date: '2025-02-02', exercisesCompleted: 15 },
    { date: '2025-02-03', exercisesCompleted: 20 },
    { date: '2025-02-04', exercisesCompleted: 30 },
    { date: '2025-02-05', exercisesCompleted: 40 },
    
];

const progressContainer = document.getElementById('progressContainer');
progressData.forEach(entry => {
    const progressItem = document.createElement('div');
    progressItem.classList.add('progress-card');
    progressItem.innerHTML = `
        <h3>Progress on ${entry.date}</h3>
        <p><strong>Exercises Completed:</strong> ${entry.exercisesCompleted}</p>
    `;
    progressContainer.appendChild(progressItem);
});

