const draggable = document.querySelectorAll('.draggable');
const containers = document.querySelectorAll('.container');

draggable.forEach((element) => {
  element.addEventListener('drag', () => {
    element.classList.add('dragging');



  });

  element.addEventListener('dragend', (e) => {
    element.classList.remove("dragging");



  });
});

containers.forEach((container) => {
  container.addEventListener('dragover', (e) => {
    e.preventDefault()
    const afterElement=getDragAfterElement(container,e.clientY)

    const draggable=document.querySelector(".dragging")
    if (afterElement== null) {
      container.appendChild(draggable)
    } else {
      container.insertBefore(draggable, afterElement)
    }

  });
});

const getDragAfterElement=(container,y)=>{
  
  const draggableElements=[...container.querySelectorAll(".draggable:not(.dragging)")]
  return draggableElements.reduce((closest,child)=>{
    const box=child.getBoundingClientRect()
    const offset=y-box.top-box.height/2
    if(offset<0 && offset>closest.offset){
      return {offset:offset,element:child}
    }else{
      return closest
    }



  },{offset:Number.NEGATIVE_INFINITY}).element


}
