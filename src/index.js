document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.querySelector('form')
  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const text = document.getElementById('new-task-description');
    if (text.value === '') { return; } else {
      addToDo(text.value);

    }
    form.reset();

  })


  function addToDo(todo) {
    let h4 = document.createElement('h4')
    let btn = document.createElement('button')
    btn.textContent = 'X';
    h4.textContent = todo;
    h4.appendChild(btn);
    document.querySelector('#tasks').appendChild(h4);
    btn.addEventListener('click', (e) => h4.remove())
  }

});
