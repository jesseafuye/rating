const button = document.querySelector('.button1');
const mainPart = document.querySelector('.main_part');
let nextPage = document.querySelector('.next_page');


button.addEventListener('click', (event) => {
  event.preventDefault(); // Prevent default behavior of opening a new page
  mainPart.style.display = 'none'; // Hide the first page
  nextPage.style.display = 'block'; // Show the next page content

});



let numbers = document.querySelectorAll('.number');
numbers.forEach(number => {
  number.addEventListener('click', (e) => {
    numbers.forEach(number => number.classList.remove('active'));
    number.classList.add('active');
    
    console.log('number');
  });
});


let selectedRating = 0;
//i have to add event listener to each number so when ever i click it
document.querySelectorAll('.number').forEach(function (numberElement) {
    numberElement.addEventListener('click', function () {
        selectedRating = parseInt(numberElement.innerText);
      document.querySelector('.number_value').innerText = 'You selected ' + selectedRating + ' out of 5';
    });
  });

   // Add event listener to submit button
   document.getElementById('submitButton').addEventListener('click', function () {
    // Here you can add logic to submit the selectedRating to your backend or perform any other actions.
    alert("Rating submitted: " + selectedRating);
  });
    