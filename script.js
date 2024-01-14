function addItem() {
    const itemsContainer = document.getElementById('items');

    const newItem = document.createElement('div');
    newItem.classList.add('item');
    newItem.innerHTML = `
        <input type="text" class="item-name" placeholder="Item name">
        <input type="number" class="item-quantity" placeholder="Quantity" min="1" value="1">
        <input type="number" class="item-price" placeholder="Price per unit" min="0.01" step="0.01" value="0.00">
        <button onclick="removeItem(this)">Remove</button>
    `;

    itemsContainer.appendChild(newItem);
}

function removeItem(button) {
    const itemsContainer = document.getElementById('items');
    const itemToRemove = button.parentNode;
    itemsContainer.removeChild(itemToRemove);
}

function updateTotal() {
    const items = document.getElementsByClassName('item');
    let total = 0;

    for (const item of items) {
        const quantity = parseFloat(item.querySelector('.item-quantity').value);
        const price = parseFloat(item.querySelector('.item-price').value);
        total += quantity * price;
    }

    const totalElement = document.getElementById('total');
    totalElement.textContent = `Total: $${total.toFixed(2)}`;
}

// Attach event listeners to input fields for real-time total calculation
document.addEventListener('input', function(event) {
    if (event.target.matches('.item-name, .item-quantity, .item-price')) {
        updateTotal();
    }
});

// Initial total calculation
updateTotal();
