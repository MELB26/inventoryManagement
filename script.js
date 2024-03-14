// Get the checkbox element
const checkbox = document.getElementById('checkbox');

// Get the tables section
const tablesSection = document.querySelector('.tablesSection');

// Array for storing inventory items
let inventoryItems = [];

// Function for adding new item to the inventory
document.getElementById('inputForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Getting the item and quantity from the input fields
    const item = document.getElementById('item').value;
    const quantity = document.getElementById('quantity').value;

    // Check if item or quantity is empty
    if (item.trim() === '' || quantity.trim() === '') {
        alert("Fill out the form first");
        return;
    }

    // Check if item already exists
    if (inventoryItems.some(entry => entry.item === item)) {
        alert('Item already exists');
        return;
    }

    // Push item to the inventoryItems list
    inventoryItems.push({ item, quantity });

    // Render inventory table
    renderInventoryTable();
});

// Function to render the inventory table
function renderInventoryTable() {
    const tableBody = document.getElementById('inventoryTableBody');
    tableBody.innerHTML = ''; // Clear existing table rows

    // Iterate through inventoryItems and create table rows
    inventoryItems.forEach((item, index) => {
        const row = document.createElement('tr');

        // Create table data for item name and quantity
        const itemNameCell = document.createElement('td');
        itemNameCell.textContent = item.item;
        itemNameCell.setAttribute('contenteditable', 'true'); // Allow editing
        const quantityCell = document.createElement('td');
        quantityCell.textContent = item.quantity;
        quantityCell.setAttribute('contenteditable', 'true'); // Allow editing

        // Create table data for delete button
        const actionsCell = document.createElement('td');
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'deleteButton';
        deleteButton.addEventListener('click', function() {
            deleteItem(index);
        });
        actionsCell.appendChild(deleteButton);

        // Append table data elements to the table row
        row.appendChild(itemNameCell);
        row.appendChild(quantityCell);
        row.appendChild(actionsCell);

        // Add table row element to the table body
        tableBody.appendChild(row);
    });
}

// Function to delete an item from the inventory
function deleteItem(index) {
    inventoryItems.splice(index, 1); // Remove the item from the inventoryItems array
    renderInventoryTable(); // Re-render the inventory table
}

// Event listener for checkbox change
checkbox.addEventListener('change', function(e) {
    e.preventDefault();
    // Toggle the display of the tables section based on checkbox status
    tablesSection.style.display = checkbox.checked ? "block" : "none";
});

// Event listener for table cell blur (focus out) to save changes
document.getElementById('inventoryTableBody').addEventListener('blur', function(e) {
    const target = e.target;
    const rowIndex = target.parentElement.rowIndex;
    const cellIndex = target.cellIndex;
    const newValue = target.textContent.trim();
    if (cellIndex === 0) {
        inventoryItems[rowIndex].item = newValue;
    } else if (cellIndex === 1) {
        inventoryItems[rowIndex].quantity = newValue;
    }
});

// Get the forms and div elements
const loginForm = document.getElementById('loginForm');
const registrationForm = document.getElementById('registrationForm');
const loginButton = document.getElementById('loginButton');
const registerButton = document.getElementById('registerButton');

// Event listener for login form submission
loginForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Here you can add your login authentication logic
    // For simplicity, let's just display an alert
    alert(`Login attempt with username: ${username}, password: ${password}`);
});

// Event listener for registration form submission
registrationForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const newUsername = document.getElementById('newUsername').value;
    const newPassword = document.getElementById('newPassword').value;

    // Password validation
    if (newPassword.length < 8 || !(/^\d+$/.test(newPassword)) || (newPassword.toUpperCase() === newPassword || newPassword.toLowerCase() === newPassword)) {
        alert('Password must be at least 8 characters long, consist of integers only, and contain a combination of uppercase and lowercase characters.');
        return;
    }

    // Here you can add your registration logic
    // For simplicity, let's just display an alert
    alert(`Registration attempt with username: ${newUsername}, password: ${newPassword}`);
});

// Function to switch between login and registration forms
function toggleForms() {
    loginForm.style.display = loginForm.style.display === 'none' ? 'block' : 'none';
    registrationForm.style.display = registrationForm.style.display === 'none' ? 'block' : 'none';
}

// Event listener for login/register button click
loginButton.addEventListener('click', toggleForms);
registerButton.addEventListener('click', toggleForms);

