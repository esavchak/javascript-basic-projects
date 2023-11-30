// set initial count
let count = 0;

// selects values of buttons in HTML document
const value = document.querySelector('#value');
// selects  all of the button choices in the HTML document.
const btns = document.querySelectorAll(".btn");

//use the forEach loop to test which button was clicked.
btns.forEach(function (btn)  {
  // listens for a button to click and creates an event object named (e)
  btn.addEventListener("click", function (e) {
    // classList lists all buttons in the HTML document. Stores in the binding called styles
    const styles = e.currentTarget.classList;
    //styles looks at list to see which buttons was clicked. If 'decrease' then decrement 1 digit per click
    if (styles.contains("decrease")) {
      count--;
    }
      else if(styles.contains(increase')) {
        count++;
      }
      else {
        count = 0;
      }
    if (count > 0) {
      value.style.color = "green";
     }
    if (count < 0) {
      value.style.color = 'red';
    }
    if (count === 0) {
      value.style.color = 'black';
    }
     value.textContent = count;
    });
  });
