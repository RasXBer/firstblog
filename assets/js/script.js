// document.getElementById("myForm").addEventListener("submit", function(event){

var blogList = JSON.parse(localStorage.getItem("myForm")) || []
const form = document.getElementById('myForm');

form.addEventListener('submit', function (event) {
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
    blogList.push(myBlog)
    // Store object in localStorage
    localStorage.setItem('myForm', JSON.stringify(blogList));

    // Optionally, you can redirect the user to another page
    window.location.href = 'blog.html';
});

document.getElementById('userName').value = '';
document.getElementById('title').value = '';
document.getElementById('content').value = '';

function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}
