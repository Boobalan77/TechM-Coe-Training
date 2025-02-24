const form = document.getElementById('routineForm');
const exerciseList = document.getElementById('exerciseList');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const exerciseName = document.getElementById('exerciseName').value;
    const duration = document.getElementById('duration').value;
    const restPeriod = document.getElementById('restPeriod').value;

    // Create a new exercise entry
    const exerciseItem = document.createElement('div');
    exerciseItem.classList.add('exercise-item');
    exerciseItem.innerHTML = `
        <div class="card-body">
            <h5 class="card-title">${exerciseName}</h5>
            <br>
            <p class="card-text"><strong>Duration:</strong> ${duration} minutes</p>
            <p class="card-text"><strong>Rest Period:</strong> ${restPeriod} seconds</p>
            <button class="btn btn-danger remove-btn">Remove</button>
        </div>
    `;

    // Append to the exercise list
    exerciseList.appendChild(exerciseItem);


    // Save to localStorage
    let routines = JSON.parse(localStorage.getItem('routines')) || [];
    routines.push({ exerciseName, duration, restPeriod });
    localStorage.setItem('routines', JSON.stringify(routines));

   

    
});
