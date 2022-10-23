const DAILY_BUTTON = document.querySelector(".change-to-daily");
const WEEKLY_BUTTON = document.querySelector(".change-to-weekly");
const MONTHLY_BUTTON = document.querySelector(".change-to-monthly");

const WORK_HOURS_PLACE = document.querySelector(".work .hours");
const WORK_PREVIOUS_PLACE = document.querySelector(".work .last-period");
const PLAY_HOURS_PLACE = document.querySelector(".play .hours");
const PLAY_PREVIOUS_PLACE = document.querySelector(".play .last-period");
const STUDY_HOURS_PLACE = document.querySelector(".study .hours");
const STUDY_PREVIOUS_PLACE = document.querySelector(".study .last-period");
const EXERCISE_HOURS_PLACE = document.querySelector(".exercise .hours");
const EXERCISE_PREVIOUS_PLACE = document.querySelector(
    ".exercise .last-period"
);
const SOCIAL_HOURS_PLACE = document.querySelector(".social .hours");
const SOCIAL_PREVIOUS_PLACE = document.querySelector(".social .last-period");
const SELF_HOURS_PLACE = document.querySelector(".self-care .hours");
const SELF_PREVIOUS_PLACE = document.querySelector(".self-care .last-period");

let currentState = "daily";

function changeStateToDaily() {
    currentState = "daily";
    DAILY_BUTTON.classList.add("active");
    WEEKLY_BUTTON.classList.remove("active");
    MONTHLY_BUTTON.classList.remove("active");

    loadData();
}
function changeStateToWeekly() {
    currentState = "weekly";
    DAILY_BUTTON.classList.remove("active");
    WEEKLY_BUTTON.classList.add("active");
    MONTHLY_BUTTON.classList.remove("active");

    loadData();
}
function changeStateToMonthly() {
    currentState = "monthly";
    DAILY_BUTTON.classList.remove("active");
    WEEKLY_BUTTON.classList.remove("active");
    MONTHLY_BUTTON.classList.add("active");

    loadData();
}

async function loadData() {
    const response = await fetch("data.json");
    const data = await response.json();

    console.log(data[1]);
    console.log(data[1].timeframes.daily.current);

    if (currentState === "daily") {
        WORK_HOURS_PLACE.textContent = `${data[0].timeframes.daily.current}hrs`;
        WORK_PREVIOUS_PLACE.textContent = `Last Day - ${data[0].timeframes.daily.previous}hrs`;

        PLAY_HOURS_PLACE.textContent = `${data[1].timeframes.daily.current}hrs`;
        PLAY_PREVIOUS_PLACE.textContent = `Last Day - ${data[1].timeframes.daily.previous}hrs`;

        STUDY_HOURS_PLACE.textContent = `${data[2].timeframes.daily.current}hrs`;
        STUDY_PREVIOUS_PLACE.textContent = `Last Day - ${data[2].timeframes.daily.previous}hrs`;

        EXERCISE_HOURS_PLACE.textContent = `${data[3].timeframes.daily.current}hrs`;
        EXERCISE_PREVIOUS_PLACE.textContent = `Last Day - ${data[3].timeframes.daily.previous}hrs`;

        SOCIAL_HOURS_PLACE.textContent = `${data[4].timeframes.daily.current}hrs`;
        SOCIAL_PREVIOUS_PLACE.textContent = `Last Day - ${data[4].timeframes.daily.previous}hrs`;

        SELF_HOURS_PLACE.textContent = `${data[5].timeframes.daily.current}hrs`;
        SELF_PREVIOUS_PLACE.textContent = `Last Day - ${data[5].timeframes.daily.previous}hrs`;
    } else if (currentState === "weekly") {
        WORK_HOURS_PLACE.textContent = `${data[0].timeframes.weekly.current}hrs`;
        WORK_PREVIOUS_PLACE.textContent = `Last Day - ${data[0].timeframes.weekly.previous}hrs`;

        PLAY_HOURS_PLACE.textContent = `${data[1].timeframes.weekly.current}hrs`;
        PLAY_PREVIOUS_PLACE.textContent = `Last Day - ${data[1].timeframes.weekly.previous}hrs`;

        STUDY_HOURS_PLACE.textContent = `${data[2].timeframes.weekly.current}hrs`;
        STUDY_PREVIOUS_PLACE.textContent = `Last Day - ${data[2].timeframes.weekly.previous}hrs`;

        EXERCISE_HOURS_PLACE.textContent = `${data[3].timeframes.weekly.current}hrs`;
        EXERCISE_PREVIOUS_PLACE.textContent = `Last Day - ${data[3].timeframes.weekly.previous}hrs`;

        SOCIAL_HOURS_PLACE.textContent = `${data[4].timeframes.weekly.current}hrs`;
        SOCIAL_PREVIOUS_PLACE.textContent = `Last Day - ${data[4].timeframes.weekly.previous}hrs`;

        SELF_HOURS_PLACE.textContent = `${data[5].timeframes.weekly.current}hrs`;
        SELF_PREVIOUS_PLACE.textContent = `Last Day - ${data[5].timeframes.weekly.previous}hrs`;
    } else if (currentState === "monthly") {
        WORK_HOURS_PLACE.textContent = `${data[0].timeframes.monthly.current}hrs`;
        WORK_PREVIOUS_PLACE.textContent = `Last Day - ${data[0].timeframes.monthly.previous}hrs`;

        PLAY_HOURS_PLACE.textContent = `${data[1].timeframes.monthly.current}hrs`;
        PLAY_PREVIOUS_PLACE.textContent = `Last Day - ${data[1].timeframes.monthly.previous}hrs`;

        STUDY_HOURS_PLACE.textContent = `${data[2].timeframes.monthly.current}hrs`;
        STUDY_PREVIOUS_PLACE.textContent = `Last Day - ${data[2].timeframes.monthly.previous}hrs`;

        EXERCISE_HOURS_PLACE.textContent = `${data[3].timeframes.monthly.current}hrs`;
        EXERCISE_PREVIOUS_PLACE.textContent = `Last Day - ${data[3].timeframes.monthly.previous}hrs`;

        SOCIAL_HOURS_PLACE.textContent = `${data[4].timeframes.monthly.current}hrs`;
        SOCIAL_PREVIOUS_PLACE.textContent = `Last Day - ${data[4].timeframes.monthly.previous}hrs`;

        SELF_HOURS_PLACE.textContent = `${data[5].timeframes.monthly.current}hrs`;
        SELF_PREVIOUS_PLACE.textContent = `Last Day - ${data[5].timeframes.monthly.previous}hrs`;
    }
}

DAILY_BUTTON.addEventListener("click", changeStateToDaily);
WEEKLY_BUTTON.addEventListener("click", changeStateToWeekly);
MONTHLY_BUTTON.addEventListener("click", changeStateToMonthly);

loadData();
