import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'

import Header from './layouts/header'
import Footer from './layouts/footer'

import Home from './pages/home'
import AddBook from './pages/book/addBook'
import EditBook from './pages/book/editBook'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fas, far, fab)

function App() {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/add' element={<AddBook />} />
            <Route path='/edit/:id' element={<EditBook />} />
          </Routes>
        </Container>
      </main>
      <div className="flex-grow-1"></div>
      <Footer />
    </Router>
  );
}

export default App;
