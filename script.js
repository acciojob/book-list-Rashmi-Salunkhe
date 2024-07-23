document.getElementById('book-form').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get form values
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const isbn = document.getElementById('isbn').value;

    // Create a new row
    const row = document.createElement('tr');

    // Add data to the row
    row.innerHTML = `
        <td>${title}</td>
        <td>${author}</td>
        <td>${isbn}</td>
        <td><button class="delete"><i class="fas fa-times"></i></button></td> <!-- Font Awesome icon -->
    `;

    // Append the new row to the book list
    document.getElementById('book-list').appendChild(row);

    // Clear form fields
    document.getElementById('book-form').reset();

    // Add event listener to the delete button
    row.querySelector('.delete').addEventListener('click', function() {
        row.remove();
    });
});
