console.log("Welcome to PA02 - Malcolm Richards");
console.log("Repo loaded successfully");

// Variables
const name = "Malcolm";
const age = 28;
const isStudent = true;
const numbers = [1,2,3,4,5];
const person = {name: "Malcolm", role: "Student"};
let emptyValue = null;

// Operators
console.log(age + 2);
console.log(age === 28);
console.log(isStudent && true);

// Create elements
const status = document.createElement("div");
status.id = "status";
document.body.appendChild(status);

const results = document.createElement("div");
results.id = "results";
document.body.appendChild(results);

const button = document.createElement("button");
button.textContent = "Load Users";
document.body.appendChild(button);

// Event
button.addEventListener("click", loadUsers);

// Fetch function
function loadUsers() {
    status.textContent = "Loading...";

    fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(data => {
            results.innerHTML = "";
            data.forEach(user => {
                const p = document.createElement("p");
                p.textContent = user.name;
                results.appendChild(p);
            });
            status.textContent = "Loaded!";
        })
        .catch(() => {
            status.textContent = "Error loading data";
        });
}
