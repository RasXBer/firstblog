
document.addEventListener("DOMContentLoaded", function () {
    // Retrieve data from local storage
    var userData = JSON.parse(localStorage.getItem("myForm"));
    const blogPostsContainer = document.getElementById('blogPostsContainer'); // Ensure this targets the correct container


    for (let i = 0; i < userData.length; i++) {

        // Log local storage data
        console.log("User Name:", userData[i].userName);
        console.log("Title:", userData[i].title);
        console.log("Content:", userData[i].content);
        // Log local storage data on My First Blog page
        const blogPostsContainer = document.getElementById('blogPosts');
        const userInfo = document.createElement('div')
        const titleInfo = document.createElement('h2')
        const contentInfo = document.createElement('div')
        //    userInfo.textContent=userData[i].userName;
        userInfo.textContent = `Posted by:${userData[i].userName}`;
        titleInfo.textContent = userData[i].title;
        contentInfo.textContent = userData[i].content;

        blogPostsContainer.appendChild(titleInfo);
        blogPostsContainer.appendChild(contentInfo);
        blogPostsContainer.appendChild(userInfo);

    }
});

document.querySelector("#backbtn").addEventListener("click", function () {
    document.location.replace("index.html")
})

function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}

// Function to create and populate the footer 
function populateFooter() {
    // Footer element
    const footer = document.getElementById("myFooter");

    const blogName = document.createElement("p");
    blogName.textContent = "my-first-blog";

    const email = document.createElement("p");
    email.textContent = "rb@gmail.com";

    // Append items to the footer
    footer.appendChild(blogName);
    footer.appendChild(email);
}

// Call the function to populate the footer
populateFooter();