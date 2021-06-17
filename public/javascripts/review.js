const reviewFormHandler =  async (event) => {
    event.preventDefault();
    const reviewContent = document.querySelector('#review-content').value.trim();
    const restaurantId = document.querySelector('#restaurant-id').value.trim();
console.log(restaurantId);
    if(reviewContent && restaurantId) {
        console.log('review', reviewContent, restaurantId);
        const response = await fetch('/api/reviews/', {
            method: 'POST',
            body: JSON.stringify({ 
                review_content: reviewContent, 

                // converting id into a integer
                restaurant_id: parseInt(restaurantId) 
            }),
            headers: { 'Content-Type': 'application/json' },
          });  
        if(response.ok) {
            console.log('Successsfully posted Review');
            document.location.replace('/restaurant/'+restaurantId);
        } else {
            alert('Something went wrong');
        }   

    } else {
        alert('Review cannot be empty');
    }

}

// selecting review form using query select and listens to submit event
document.querySelector('.review-form').addEventListener('submit', reviewFormHandler)