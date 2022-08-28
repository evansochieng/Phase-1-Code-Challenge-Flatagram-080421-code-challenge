// write your code here

// 
document.addEventListener('DOMContentLoaded', () => {
    // Make a GET request to the host to retrieve its data
    // Add the contents appropriately
    getImageData();

    // Add an event listener to the like button - Increase likes
    const likeButton = document.getElementById('like-button');
    likeButton.addEventListener('click', () => {
        const likes = document.getElementById('like-count')
        const currentLikes = parseInt(likes.textContent.split(' ')[0], 10)

        // Increase the image likes by 1 on every click
        likes.textContent = currentLikes + 1 + ' likes'
    })

    // Post my comments
    postComment()

    // Delete comments on click
    deleteComment()
})

// Function to fetch info about an image along with its content
function getImageData(){
    return (
        fetch('http://localhost:3000/images/1')
        .then( (response) => response.json())
        .then( (result) => {
            // Extract title
            const title = result.title;
            // Set this title as the title of the image on the DOM
            const imageTitle = document.getElementById('card-title');
            imageTitle.textContent = title;

            // Extract the image source
            const imgSource = result.image
            // Add this as the source of the image on the DOM
            const img = document.getElementById('card-image');
            img.src = imgSource;

            // Get the initial likes
            const initialLikes = result.likes;
            // Add this to the likes section
            const likes = document.getElementById('like-count')
            likes.textContent = `${initialLikes} likes`

            // Get server comments
            const serverComments = result.comments;
            // Remove initial comments
            const comments = document.getElementById('comments-list')
            //const initialComments = comments.children;
            // for (let comment of initialComments){
            //     //comments.removeChild(comment);
            // }
            
            // .removeChild() doesn't remove one comment
            // Let me force remove
            comments.innerHTML = '';

            // Add the comments to the comments section
            for (let comment of serverComments){
                let li = document.createElement('li')
                li.textContent = comment.content;
                //append this to the comments
                comments.appendChild(li);
            }
        })
    )
}

// Post a comment (My comments)
function postComment(){
    const commentForm = document.querySelector('#comment-form')
    commentForm.addEventListener('submit', (event) => {
        event.preventDefault()
        // Grab comments section
        const comments = document.getElementById('comments-list');
    
        // Add the comment to the list of comments
        let li = document.createElement('li');
        li.textContent = event.target['comment'].value;
        //append this to the comments
        comments.appendChild(li);
    
        //Reset form
        commentForm.reset();
    })
}

// BONUS
// // Create function to delete comment when clicked
// function deleteComment(){
//     const comments = document.getElementById('comments-list')
//     const initialComments = comments.children;//get all comments
//     for (let comment of initialComments){
//         comment.addEventListener('click', (event) => { //listen to click event on comments
//             //comments.removeChild(comment); //delete that comment
//             console.log(event);
//         })
//     }
// }
