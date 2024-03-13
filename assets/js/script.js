// document.getElementById("myForm").addEventListener("submit", function(event){
//     event.preventDefault(); // Prevent the form from submitting

//     // Retrieve form data
//     var formData = new FormData(this);

//     // Display form data
//     for (var pair of formData.entries()) {
//         console.log(pair[0] + ': ' + pair[1]);
//     }
// });

const form = document.getElementById('myForm');

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get form data
    const userName = document.getElementById('userName').value;
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;

    // Create an object with form data
    const myBlog = {
        userName: userName,
        title: title,
        content: content
    };

    // Store object in localStorage
    localStorage.setItem('myBlog', JSON.stringify(myBlog));

    // Optionally, you can redirect the user to another page
    window.location.href = 'blog.html';
});