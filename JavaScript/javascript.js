
window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    
    setTimeout(() => {
      loader.style.opacity = '0';
      
      setTimeout(() => {
        loader.style.display = 'none';
      }, 600);
    }, 800);
  });


  
const toggleBtn = document.getElementById('toggle-btn');
    const extraRow = document.getElementById('extra-row');
    let isExpanded = false;

    toggleBtn.addEventListener('click', () => {
      isExpanded = !isExpanded;

      if (isExpanded) {
        extraRow.classList.remove('hidden');
        toggleBtn.textContent = 'See less ←';
      } else {
        extraRow.classList.add('hidden');
        toggleBtn.textContent = 'See more →';
      }
    });


   
  function copyDiscord() {
    const name = "bram_9143";
    navigator.clipboard.writeText(name).then(() => {
      const feedback = document.getElementById("copyFeedback");
      feedback.classList.add("show");
      
      // Hide after 1.8 seconds
      setTimeout(() => {
        feedback.classList.remove("show");
      }, 1800);
    });
  }




