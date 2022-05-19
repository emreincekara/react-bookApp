import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'

import Header from './layouts/header'
import Footer from './layouts/footer'

import Home from './pages/home'
import DetailBook from './pages/book/detail'
import AddBook from './pages/book/add'
import UpdateBook from './pages/book/update'

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
            <Route path="/detail/:id" element={<DetailBook />} />
            <Route path='/add' element={<AddBook />} />
            <Route path='/update/:id' element={<UpdateBook />} />
          </Routes>
        </Container>
      </main>
      <div className="flex-grow-1"></div>
      <Footer />
    </Router>
  );
}

export default App;
