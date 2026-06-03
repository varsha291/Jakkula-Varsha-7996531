// ======================================
// JAVASCRIPT BASICS & SETUP
// ======================================

console.log("Welcome to the Community Portal");

window.addEventListener("load", () => {
    alert("Community Portal Fully Loaded!");
});

// ======================================
// EVENT CLASS & OBJECTS
// ======================================

class EventItem {
    constructor(name, date, seats, category, location) {
        this.name = name;
        this.date = date;
        this.seats = seats;
        this.category = category;
        this.location = location;
    }
}

// PROTOTYPE METHOD
EventItem.prototype.checkAvailability = function () {
    return this.seats > 0;
};

// ======================================
// EVENT ARRAY
// ======================================

const events = [
    new EventItem("Music Night", "2026-06-10", 5, "Music", "Hall A"),
    new EventItem("Food Festival", "2026-06-15", 0, "Food", "Park"),
    new EventItem("Coding Workshop", "2026-06-20", 12, "Workshop", "Tech Center")
];

// ======================================
// ARRAY METHODS
// ======================================

// PUSH
events.push(
    new EventItem("Art Expo", "2026-06-25", 8, "Art", "Gallery")
);

// FILTER
const musicEvents = events.filter(
    event => event.category === "Music"
);

console.log("Music Events:", musicEvents);

// MAP
const formattedCards = events.map(
    event => `Workshop on ${event.name}`
);

console.log(formattedCards);

// SPREAD OPERATOR
const clonedEvents = [...events];

// ======================================
// OBJECT ENTRIES
// ======================================

events.forEach(event => {
    console.log(Object.entries(event));
});

// ======================================
// DOM MANIPULATION
// ======================================

const eventsContainer = document.querySelector("#events");

function displayEvents(eventList) {

    const oldCards = document.querySelectorAll(".dynamicCard");

    oldCards.forEach(card => card.remove());

    eventList.forEach(event => {

        // IF ELSE CONDITION
        if (event.seats > 0) {

            const card = document.createElement("div");

            card.classList.add("dynamicCard");

            card.innerHTML = `
                <h3>${event.name}</h3>
                <p>Date: ${event.date}</p>
                <p>Category: ${event.category}</p>
                <p>Seats Left: <span id="${event.name}">
                    ${event.seats}
                </span></p>

                <button onclick="registerUser('${event.name}')">
                    Register
                </button>
            `;

            eventsContainer.appendChild(card);

        } else {

            console.log(`${event.name} is full`);

        }
    });
}

displayEvents(events);

// ======================================
// FUNCTIONS
// ======================================

// ADD EVENT
function addEvent(name, date, seats, category, location) {

    const newEvent = new EventItem(
        name,
        date,
        seats,
        category,
        location
    );

    events.push(newEvent);

    displayEvents(events);
}

// REGISTER USER
function registerUser(eventName) {

    try {

        const event = events.find(
            ev => ev.name === eventName
        );

        if (!event) {
            throw new Error("Event not found");
        }

        if (event.seats <= 0) {
            throw new Error("No seats available");
        }

        // ++ OPERATOR
        event.seats--;

        document.getElementById(event.name).textContent =
            event.seats;

        alert(`Registered for ${event.name}`);

    } catch (error) {

        console.error(error.message);
        alert(error.message);

    }
}

// FILTER EVENTS
function filterEventsByCategory(category, callback) {

    const filtered = events.filter(
        event => event.category === category
    );

    callback(filtered);
}

// CALLBACK FUNCTION
filterEventsByCategory("Music", function (result) {
    console.log("Filtered Events:", result);
});

// ======================================
// CLOSURE FUNCTION
// ======================================

function registrationTracker() {

    let totalRegistrations = 0;

    return function () {

        totalRegistrations++;

        console.log(
            `Total Registrations: ${totalRegistrations}`
        );
    };
}

const trackMusicRegistrations =
    registrationTracker();

// ======================================
// FORM HANDLING
// ======================================

const form = document.querySelector("#eventForm");

form.addEventListener("submit", function (event) {

    // PREVENT DEFAULT
    event.preventDefault();

    console.log("Form submission started");

    const elements = form.elements;

    const name = elements[0].value;
    const email = elements[1].value;
    const selectedEvent = elements[4].value;

    // VALIDATION
    if (name.trim() === "" || email.trim() === "") {

        alert("Please fill all fields");

        return;
    }

    console.log({
        name,
        email,
        selectedEvent
    });

    submitRegistration({
        name,
        email,
        selectedEvent
    });
});

// ======================================
// FETCH API + AJAX
// ======================================

// FETCH USING THEN CATCH
fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(data => {
        console.log("Fetched Data:", data.slice(0, 3));
    })
    .catch(error => {
        console.error(error);
    });

// ASYNC AWAIT
async function fetchEventsAsync() {

    try {

        document.body.style.cursor = "progress";

        const response =
            await fetch(
                "https://jsonplaceholder.typicode.com/users"
            );

        const data = await response.json();

        console.log("Async Events:", data);

    } catch (error) {

        console.error(error);

    } finally {

        document.body.style.cursor = "default";

    }
}

fetchEventsAsync();

// ======================================
// POST DATA
// ======================================

function submitRegistration(userData) {

    setTimeout(() => {

        fetch(
            "https://jsonplaceholder.typicode.com/posts",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(userData)
            }
        )

        .then(response => response.json())

        .then(data => {

            console.log(
                "Registration Success:",
                data
            );

            alert("Registration Successful!");

        })

        .catch(error => {

            console.error(error);

            alert("Registration Failed");

        });

    }, 1500);
}

// ======================================
// KEYDOWN EVENT
// ======================================

document.addEventListener("keydown", (event) => {

    console.log(`Key Pressed: ${event.key}`);

});

// ======================================
// ONCHANGE FILTER
// ======================================

const eventDropdown =
    document.querySelector("#eventType");

eventDropdown.addEventListener("change", () => {

    const selected =
        eventDropdown.value.split("|")[0];

    console.log(`Selected Category: ${selected}`);

});

// ======================================
// TEMPLATE LITERALS
// ======================================

const eventName = "Music Night";
const eventDate = "10 June";
let seats = 50;

const eventInfo =
    `Event: ${eventName},
     Date: ${eventDate},
     Seats: ${seats}`;

console.log(eventInfo);

// ======================================
// DESTRUCTURING
// ======================================

const [firstEvent] = events;

const {
    name,
    date,
    category
} = firstEvent;

console.log(name, date, category);

// ======================================
// jQUERY
// ======================================

$(document).ready(function () {

    $("#registerBtn").click(function () {

        $(".dynamicCard").fadeOut(500).fadeIn(500);

    });

});

// ======================================
// FRAMEWORK BENEFIT


console.log(
    "React/Vue provide reusable components and better state management."
);