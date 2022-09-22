import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Footer, Header } from './components/common'
import { StudentCard as StudentCard } from './features/labs/Student'
import { Student } from './models/student'

// import Header from './components/common/Header'
// import Footer from './components/common/Footer'

function App() {
  const [count, setCount] = useState(0)

  function abc() { }

  const john: Student = {
    name: '',
    age: 3
  }
  return (
    <div>
      <Header />
      <StudentCard student={john} />
      <Footer />
    </div>
  )
}

export default App
