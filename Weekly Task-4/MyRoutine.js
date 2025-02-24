const savedRoutinesList = document.getElementById('savedRoutinesList');
        const routines = JSON.parse(localStorage.getItem('routines')) || [];

        routines.forEach(routine => {
            const routineItem = document.createElement('div');
            routineItem.classList.add('card');
            routineItem.innerHTML = `
                <div class="card-body">
                    <h5 class="card-title">${routine.exerciseName}</h5>
                    <p class="card-text"><strong>Duration:</strong> ${routine.duration} minutes</p>
                    <p class="card-text"><strong>Rest Period:</strong> ${routine.restPeriod} seconds</p>
                    <button class="btn btn-danger remove-btn">Remove</button>
                </div>
            `;

            // Remove button functionality
            const removeBtn = routineItem.querySelector('.remove-btn');
            removeBtn.addEventListener('click', () => {
                // Remove from localStorage
                let routines = JSON.parse(localStorage.getItem('routines')) || [];
                routines = routines.filter(r => r.exerciseName !== routine.exerciseName);
                localStorage.setItem('routines', JSON.stringify(routines));

                // Remove from the DOM
                routineItem.remove();
            });

            savedRoutinesList.appendChild(routineItem);
        });
