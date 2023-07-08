document.addEventListener('DOMContentLoaded', function() {
    const counterValue = document.getElementById('counter-value');
    const incrementBtn = document.getElementById('increment-btn');
    const decrementBtn = document.getElementById('decrement-btn');
    const resetBtn = document.getElementById('reset-btn');
    
    let count = 0;
  
    incrementBtn.addEventListener('click', function() {
      count++;
      counterValue.textContent = count;
    });
  
    decrementBtn.addEventListener('click', function() {
      if (count > 0) {
        count--;
        counterValue.textContent = count;
      }
    });
  
    resetBtn.addEventListener('click', function() {
      count = 0;
      counterValue.textContent = count;
    });
  });
  