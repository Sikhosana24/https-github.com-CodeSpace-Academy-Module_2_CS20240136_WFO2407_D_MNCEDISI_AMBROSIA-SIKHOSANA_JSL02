const welcomeMessage = () => {
    const today = new Date().toDateString();
    document.getElementById('welcomeMessage').textContent = `🤸🏾‍♀️ Welcome to Your Fitness Tracker 🥗 Today is ${today}`;
};
welcomeMessage();

const displayWorkoutRoutine = () => {
    const workoutInput = document.querySelector('#workoutInput').value.trim();
    if (workoutInput !== "") { 
        const workoutList = document.querySelector('#workoutList');
        const newWorkout = document.createElement('li');
        newWorkout.textContent = workoutInput;
        workoutList.appendChild(newWorkout);
        document.querySelector('#workoutInput').value ="";
    } else {
        alert ("Please enter a valid workout!")
    }
};

document.querySelector('#submitWorkout').addEventListener('click', displayWorkoutRoutine);

// ⚠️⚠️⚠️ Lesson 3: Creating and Removing Elements ⚠️⚠️⚠️
// Function to add new fitness goals and remove completed ones
// NOW LET'S DEBUG TO PREVENT DUPLICATE GOALS FROM BEING SUBMITTED 🚀

const addNewGoal = () => {
    const goalInput = document.querySelector('#goalInput').value.trim().toLowerCase();
    const goalListItems = document.querySelectorAll('#goalList li');
    let goalExists = false;

    // Check if the goal already exists
    goalListItems.forEach(item => {
        if (item.textContent.trim().toLowerCase() === goalInput) {
            goalExists = true;
        }
    });

    if (goalExists) {
        alert("Goal Already Exists!");
    } else if (goalInput !== "") {
        const newGoal = document.createElement('li');
        newGoal.textContent = goalInput;
        document.querySelector('#goalList').appendChild(newGoal);
        document.querySelector('#goalInput').value = ""; 
    } else {
        alert("Please enter a valid goal!");
    }
};

// Add event listener to the goal submit button
document.querySelector('#submitGoal').addEventListener('click', addNewGoal);

///
let waterIntake = 0;
const updateWaterIntake = (change) => {
    waterIntake += change;
    if (waterintake < 0) waterintake = 0;
    document.querySelector('#waterIntakeDisplay').textContent = `${waterIntake} glasses 💦`;
};

document.querySelector('#increaseWater').addEventListener('click', () => updateWaterIntake(1));
document.querySelector('#decreaseWater').addEventListener('click', () => updateWaterIntake(-1));

const updateProgressCharts = () => {
    document.querySelector('#workoutProgress').textContent = "Updated workout progress...";
    document.querySelector('#calorieIntakeProgress').textContent = "Updated calorie intake progress...";
};

updateProgressCharts();

const toggleTheme = () => {
    document.body.classList.toggle('dark-theme');
};

document.querySelector('#themeToggle').addEventListener('click', toggleTheme);

const submitMealPlan = (event) => {
    event.preventDefault(); 
    alert('Meal plan submitted successfully! 🍴');
};

document.querySelector('#mealPlanForm').addEventListener('submit', submitMealPlan);
