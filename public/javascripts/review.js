// gets restaurants id, content, star rating and POST to review api
const reviewFormHandler = async (event) => {
    event.preventDefault();
    const reviewContent = document.querySelector('#review-content').value.trim();
    const restaurantId = document.querySelector('#restaurant-id').value.trim();
    const starRating = document.querySelector('#starInput').value.trim();

    console.log(restaurantId);
    console.log('star provided',starRating);
    if (reviewContent && restaurantId) {
        if (starRating != null) {
            console.log('review', reviewContent, restaurantId);
            const response = await fetch('/api/reviews/', {
                method: 'POST',
                body: JSON.stringify({
                    review_content: reviewContent,
                    // converting id into a integer
                    restaurant_id: parseInt(restaurantId),
                    star_rating: starRating
                }),
                headers: { 'Content-Type': 'application/json' },
            });
            if (response.ok) {
                console.log('Successsfully posted Review');
                document.location.replace('/restaurant/'+restaurantId)
            } else {
                alert('Something went wrong');
            }
        } else {
            alert('Please Provide Star Rating');
        }

    } else {
        alert('Review cannot be empty');
    }

}

// selecting review form using query select and listens to submit event
document.querySelector('.review-form').addEventListener('submit', reviewFormHandler)

// selecting review form using query select and listens to submit event
document.querySelector('.review-form').addEventListener('submit', reviewFormHandler)