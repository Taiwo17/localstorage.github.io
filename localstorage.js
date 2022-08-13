// Select all the values

const noteForm = document.getElementById('form-note')
const noteInput = document.getElementById('note-input')
const noteSubmit = document.getElementById('note-submit')
const notes = document.getElementById('notes')


// Inputing value into the local storage so that it won't be empty
let notesStorage = localStorage.getItem('notes') ? JSON.parse(localStorage.getItem('notes')) : [];

// Adding functionality when the form is submitted so that it will be placed in the local storage


noteForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // Pushing the a value into the local storage using push method
    notesStorage.push(noteInput.value);
    localStorage.setItem('notes', JSON.stringify(notesStorage))
   // Creating a li listbuilder
    listBuilder(noteInput.value)
   // Resetting the value
   noteInput.value = ''
    
})

// Creating the li builder function 
const listBuilder = (text) => {
    const note = document.createElement('li');
    note.style.display = 'flex';
    note.style.flexDirection = 'row';
    note.style.justifyContent = 'space-between';
    note.style.width = '400px';
    note.style.margin = '5px auto';
    note.style.padding = '5px';
    note.innerHTML = `
    ${text} &nbsp;<button style= 'width: 40px; height: 40px' onclick='deleteNote(this)'> X </button> 
    `;
    notes.style.width = '500px';
    notes.style.border = '1px solid var(--first-color)';
    notes.style.borderRadius = '5px';
    notes.style.margin = '5px auto';  
    notes.appendChild(note);
}

// Adding the delete button note
     const deleteNote = (btn) => {
    let el = btn.parentNode;
    const index = [...el.parentElement.children].indexOf(el)
    notesStorage.splice(index, 1);
    localStorage.setItem('notes', JSON.stringify(notesStorage))
    el.remove() 
}  

// Looping through each note in the local storage when the page is loaded
// and re-render in the html page

const getNotes = JSON.parse(localStorage.getItem('notes'))
getNotes.forEach(note => {
    listBuilder(note)
});

