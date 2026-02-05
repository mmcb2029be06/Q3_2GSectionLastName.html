const KEY = 'notes'; // we will be storing everything on key: notes
    
    
    function loadNotes() {
      const raw = localStorage.getItem(KEY);

      if (raw){
        return JSON.parse(raw);
      }
      else{
        return [];
      }
    }

    function saveNotes(entries) {
      localStorage.setItem(KEY, JSON.stringify(entries));
    }


const submitButton = document.getElementById('submit');
submitButton.addEventListener("click", function(e) {
  e.preventDefault(); // to avoid immediately resetting the data
  const studentid = document.getElementById('studentid').value.trim();
  const fullname = document.getElementById('fullname').value.trim();
  const birthday = document.getElementById('birthday').value.trim();
  const email = document.getElementById('email').value.trim();
  const mphone = document.getElementById('mphone').value.trim();
  const gradelevel = document.getElementById('gradelevel').value.trim();
  const internextern = document.getElementById('ie').value.trim();
  const club = document.getElementById('club').value.trim(); // these are all the fields of the form

  const obj = { // this is where it is all saved as an object
    studentid: studentid,
    fullname: fullname,
    birthday: birthday,
    email: email,
    mphone: mphone,
    gradelevel: gradelevel,
    internextern: internextern,
    club: club,
    time: new Date().toLocaleTimeString() // store timestamp
  };

  const notes = loadNotes(); // this is where the object gets pushed into an array
  notes.push(obj);           // grow the array over time
  saveNotes(notes);          // store updated array in localStorage
  
  render();
});
