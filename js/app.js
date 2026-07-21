const form = document.getElementById("workout-form");

form.addEventListener("submit", function(event) {

    event.preventDefault();

const selectedDistance = document.querySelector(
    'input[name="target-distance"]:checked'
);
console.log(selectedDistance.value);

const experienceLevel = document.querySelector(
    'input[name="experience-level"]:checked'
);
console.log(experienceLevel.value);

const preferredTerrain = document.querySelector(
    'input[name="preferred-terrain"]:checked'
);
console.log(preferredTerrain.value);

console.log("Form successfully submitted.");

const matchingWorkouts = workouts.filter(function(workout) {
    return workout.distance === selectedDistance.value;
});
    console.log(matchingWorkouts);
});


