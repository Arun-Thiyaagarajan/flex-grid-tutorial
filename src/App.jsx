import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Flex from './pages/flex/flex'
import Flex2 from './pages/flex/Flex2'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Flex />} />
          <Route path="/justify-content" element={<Flex2 />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
