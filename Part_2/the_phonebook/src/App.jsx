import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link } from 'react-router-dom'
import PhoneBookRecord from './component/phonebook'

function App() {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', phone: '040-123456', id: 1 },
    { name: 'Ada Lovelace', phone: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', phone: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', phone: '39-23-6423122', id: 4 }
  ])
  const [newName, sethomeName] = useState('')
  const [newPhone, sethomeNumber] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newName.trim()) return;

    if (persons.some(person => person.name === newName.trim())) {
      alert(`${newName.trim()} already exists.`);
      return;
    }
    setPersons([...persons, {name: newName.trim(), phone: newPhone.trim(), id: persons.length + 1}]);
    sethomeName('');
    sethomeNumber('');
  }
  const PhonebookForm = () => {
    return <form onSubmit={handleSubmit}>
        <div>
          name: <input id='phonebook-name' value={newName} onChange={e => {sethomeName(e.target.value)}}/><br />
          phone number: <input type="text"  value={newPhone} onChange={f => {sethomeNumber(f.target.value)}}/>
        </div>
        <div>
          <button type='submit'>add</button>
        </div>
      </form>
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <PhonebookForm/>
      <h2>Numbers</h2>
      <div id='phoneBookRecords'>
        <PhoneBookRecord persons={persons}></PhoneBookRecord>
      </div>
      <div>debug: {newName}</div>
    </div>
  )
}

export default App
