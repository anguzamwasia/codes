// Function to toggle pages based on navigation
function showPage(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.classList.add('hidden');
    });
    document.getElementById(pageId).classList.remove('hidden');
}

// Show the home page initially
showPage('home');

// Select all action buttons
const actionButtons = document.querySelectorAll('.action-button');

// Add event listeners to each button
actionButtons.forEach(button => {
    button.addEventListener('click', () => {
        const action = button.getAttribute('data-action');

        // Perform different actions based on the button clicked
        switch (action) {
            case 'crop-health':
                alert('Redirecting to Crop Health analysis...');
                // Add code to navigate or load the crop health analysis page
                break;

            case 'visualize-anomalies':
                alert('Generating graphs for anomalies...');
                // Add code to handle graph generation
                break;

            case 'recommendations':
                alert('Fetching recommendations...');
                // Add code to fetch and display recommendations
                break;

            default:
                console.error('Unknown action:', action);
        }
    });
});

// JavaScript for Blog Dropdown Filtering
document.getElementById('categories').addEventListener('change', function () {
    const selectedCategory = this.value;

    // Hide all articles
    document.querySelectorAll('.blog-article').forEach(article => {
        article.style.display = 'none';
    });

    // Show the selected article
    const articleToShow = document.getElementById(selectedCategory);
    if (articleToShow) {
        articleToShow.style.display = 'block';
    }
});

// Initialize - Hide all articles except the first category
window.onload = function () {
    document.querySelectorAll('.blog-article').forEach(article => {
        article.style.display = 'none';
    });
    document.getElementById('maize-performance').style.display = 'block';
};
