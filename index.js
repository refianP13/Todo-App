// terget element span
const dateHTML = document.querySelector('#date');
// dapatkan tanggal hari ini menggunakan object new date()

const date = new Date().toUTCString().slice(5, 16);

// masukan date ke dalam dateHTML
dateHTML.innerText = date;

// ### input
const todoInput = document.querySelector('.todo-input');
const btnInput = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

// event listerner
btnInput.addEventListener('click', () => {
    event.preventDefault();

    // check jika input ny kosong maka beri alert
    if (todoInput.value === '') {
        alert('inputan tidak boleh kosong');
        return
    }

    // membuat element todo

    /*
    <div class="todo">
          <li class="todo-item">Todo ke 1</li>
          <button class="done-btn">Done</button>
          <button class="delete-btn">Delete</button>
        </div>
     */

    // membuat div todo
    const div = document.createElement('div');
    // menambahkan class ke div
    div.classList.add('todo');

    // membuat li
    const li = document.createElement('li');
    // menambahkan class ke li
    li.classList.add('todo-item');
    // masukan value dari input ke li
    li.innerText = todoInput.value;

    // membuat button done
    const doneBtn = document.createElement('button');
    // menambahkan class ke button
    doneBtn.classList.add('done-btn');
    doneBtn.innerText = 'Done';

    // membuat button delete
    const deleteBtn = document.createElement('button');
    // menambahkan class ke button
    deleteBtn.classList.add('delete-btn');
    deleteBtn.innerText = 'Delete';

    // masukan li, doneBtn, deleteBtn ke div
    div.append(li, doneBtn, deleteBtn);

    // masukan button kedalam todoList
    todoList.append(div);

    // kosongkan input
    todoInput.value = '';

});

// event untuk delte dan done button
todoList.addEventListener('click', (event) => {
    // dapatkan element yang di klik
    const btn = event.target;

    // mendapatkan parent dari button
    const todo = btn.parentElement;

    // cek apakah yang di klik itu tombol done atau delete
    // 1. cek jika tombol done 
    if (btn.innerText === 'Done') {
        // tambahkan class checked ke li
        todo.classList.add('done-todo')

        // hapus button done
        btn.remove();
    } else if (btn.innerText === 'Delete') {
        // yang di klik tombol delete

        // hapus class remove ke todo
        todo.classList.add('remove-todo');

        // hapus todo setelah 0.5 detik
        todo.addEventListener('transitionend', () => {
            todo.remove();
        })
    }
});


