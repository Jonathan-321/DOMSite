const Observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  });
});

const hiddenElements = document.querySelectorAll('.hidden');

hiddenElements.forEach(element => {
  Observer.observe(element);
});






// Get reference to image
const img = document.querySelector('.image-container img');

// Make image draggable
img.draggable = true;

// Create drop zone
const dropZone = document.createElement('div');
dropZone.classList.add('drop-zone');
document.body.appendChild(dropZone);

// Handle dragover and drop
dropZone.addEventListener('dragover', e => {
  
  e.preventDefault();
  dropZone.classList.add('drop-active');
});

dropZone.addEventListener('dragleave', () => {
  dropZone.classList.remove('drop-active');
});

dropZone.addEventListener('drop', e => {
  e.preventDefault();
  dropZone.append(img);
  dropZone.classList.remove('drop-active');
});



