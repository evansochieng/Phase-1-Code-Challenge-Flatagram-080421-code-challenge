// write your code here

// 
document.addEventListener('DOMContentLoaded', () => {
    // Make a GET request to the host to retrieve its data
    // Add the contents appropriately
    getImageData()
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
            img[src] = imgSource;
        })
    )
}
