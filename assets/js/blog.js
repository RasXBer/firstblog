
document.addEventListener("DOMContentLoaded", function() {
    // Retrieve data from local storage
    var userData = JSON.parse(localStorage.getItem("userData"));

    // Log local storage data
    console.log("User Name:", userData.name);
    console.log("Title:", userData.email);
});



// document.addEventListener("DOMContentLoaded", function() {
//     // Retrieve data from local storage
//     var savedPosts = JSON.parse(localStorage.getItem("blogPosts")) || [];

//     // Display saved posts
//     var blogPostsContainer = document.getElementById("blogPosts");
//     savedPosts.forEach(function(post) {
//         var postElement = document.createElement("div");
//         postElement.classList.add("blog-post");
//         postElement.innerHTML = "<h2>" + post.title + "</h2><p>" + post.content + "</p>";
//         blogPostsContainer.appendChild(postElement);
//     });
// });

// // Function to handle form submission
// function savePost() {
//     var userName = document.getElementById("userName").value;
//     var title = document.getElementById("title").value;
//     var content = document.getElementById("content").value;

//     // Create a new post object
//     var post = {
//         userName:userName,
//         title: title,
//         content: content
//     };

//     // Retrieve existing posts from local storage
//     var savedPosts = JSON.parse(localStorage.getItem("blogPosts")) || [];

//     // Add the new post to the array
//     savedPosts.push(post);

//     // Save the updated array back to local storage
//     localStorage.setItem("blogPosts", JSON.stringify(savedPosts));

//     // Clear the form fields
//     document.getElementById("userName").value = "";
//     document.getElementById("title").value = "";
//     document.getElementById("content").value = "";

//     // Display the new post
//     var blogPostsContainer = document.getElementById("blogPosts");
//     var postElement = document.createElement("div");
//     postElement.classList.add("blog-post");
//     postElement.innerHTML = "<h2>" + post.title + "</h2><p>" + post.content + "</p>";
//     blogPostsContainer.appendChild(postElement);
// }