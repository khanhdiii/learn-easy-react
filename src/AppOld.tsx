import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Footer, Header } from './components/common'
import { StudentCard as StudentCard } from './features/labs/Student'
import { Student } from './models/student'
import { MyText } from './features/labs/Mytext'
import { MainLayout } from './components/Layout'
import { Widget } from './features/labs/Widget'

// import Header from './components/common/Header'
// import Footer from './components/common/Footer'

function App() {
  const [count, setCount] = useState(0)
  // const loading = false
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000);
  })

  function abc() { }

  const john: Student = {
    name: 'john',
    age: 3
  }

  function handleStudentClick(student: Student) {
    console.log('student click');

  }

  // if (loading)
  //   return <p>Loading...</p>

  const studentList = [
    { id: 1, name: 'huynh' },
    { id: 2, name: 'duy' },
    { id: 3, name: 'khanh' },

  ]
  return (
    <div>

      <ul>
        {studentList.map((student) => (
          <li key={student.id}>{student.name}</li>
        ))}
      </ul>





      {/* {loading ? <p>Loading....</p> : null}
      {loading && <p>Loading....</p>}
      <p>{loading ? 'loading....' : 'data ready'}</p>


      {true && 'showtrue'}
      {false && 'showtrue'}
      {'' && 'show empty'}
      {'0' && 'show zero string'}
      {[].length > 0 && 'show zero'}
      {Boolean(NaN)  && 'show NaN'}


      <MainLayout>
        <StudentCard student={john} onClick={handleStudentClick} />
      </MainLayout>
      <Header />
      <StudentCard student={john} onClick={handleStudentClick} />
      <Footer />
      <MyText></MyText>
      <MyText>easy frontend</MyText>
      <MyText>{123}</MyText>
      <MyText>{false}</MyText>
      <MyText>{null}</MyText>
      <MyText>{undefined}</MyText>
      <MyText>
        <span>khanh</span>
      </MyText>
      <MyText>
        <span>khanh</span>
        <span>duy</span>
      </MyText>

      <div>
        <div><Widget title='Earning Overview'>Chart 1</Widget></div>
        <div><Widget title='Revenue Sources'>Chart 2</Widget></div>
        <div><Widget title='Earning Overview'><img src="" alt="" /></Widget></div>
        <div><Widget title='Earning Overview'>Chart 4</Widget></div>
      </div> */}

    </div>
  )
}

export default App
