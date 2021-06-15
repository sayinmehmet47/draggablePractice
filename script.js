const draggable = document.querySelectorAll('.draggable');
const containers = document.querySelectorAll('.container');

draggable.forEach((element) => {
  element.addEventListener('drag', () => {
    element.classList.add('dragging');



  });

  element.addEventListener('dragend', () => {
    element.classList.remove("dragging");



  });
});

containers.forEach((container) => {
  container.addEventListener('dragover', () => {
    const draggable=document.querySelector(".dragging")
    container.appendChild(draggable)



  });
});
