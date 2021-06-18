// all to do with star ratings


const allstars = document.querySelectorAll('.stars a');
const starWrapper = document.querySelector(".stars");

var starInput = document.getElementById("starInput");

allstars.forEach((star, clickedIdx) => {

  star.addEventListener('click', () => {

    starWrapper.classList.add("disabled");

    allstars.forEach((otherStar, otherIdx)=> {
      if(otherIdx <= clickedIdx) {
        otherStar.classList.add("active"); 
      }
    });
    
    console.log(`star of index ${clickedIdx+1} clicked`)
    starInput.value = clickedIdx+1;
    
  })
});