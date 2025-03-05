const inputUserName = document.getElementById('inputName');
const reviewText = document.getElementById('review');
const reviewButton = document.getElementById('reviewBtn');
const displayContainer = document.querySelector('.display_container')
const reviewLists = document.querySelectorAll('i');
// console.log(reviewLists);
let starCount = 0;

reviewLists.forEach((star, idx) => {
    star.addEventListener('click', () => {
       starCount = idx ;
         console.log(star, idx);
        
            reviewLists.forEach((s,i) => s.classList.toggle('solid-yellow', i < starCount + 1))
            

            // console.log(starCount);
    })
    
})


reviewButton.addEventListener('click', () => {
    const userValue = inputUserName.value;
    const reviewValue= reviewText.value;

    if (userValue && reviewValue) {
             //Crate Div Elements 
        const div = document.createElement('div');
        displayContainer.appendChild(div).classList.add('display_box');
        
        //Create Heading Elements
        const heading = document.createElement('h4');

        //Create Paragraph Text Elements
        const para = document.createElement('p');
        const span = document.createElement('span');
        const deleteButton = document.createElement('button')
        
        //Insert Text into Heading and Paragraph Elements
        div.appendChild(heading).innerText = userValue;
        div.appendChild(span).innerHTML = `${'⭐'.repeat(starCount + 1)}`;
        heading.appendChild(deleteButton).innerHTML = "Delete"
        heading.appendChild(para).innerText = reviewValue;

        inputUserName.value = "";
        reviewText.value = "";
        reviewLists.forEach((s) => s.classList.remove('solid-yellow'))

    deleteButton.addEventListener('click',() => {
            div.remove();     
    })
    }
})


// console.log(starCount);

