import { Switch, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from './Components/Header'
import Homepage from './Components/Homepage/Homepage'
import About from './Components/About/About'
import Project from './Components/Project/Project'
import Contact from './Components/Contact/Contact'
function App() {
  return (
    <div className='App'>
      <Header />
      <Container>
        <Switch>
          <Route exact path='/'>
            <Homepage />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/project'>
            <Project />
          </Route>
          <Route path='/contact'>
            <Contact />
          </Route>
        </Switch>
      </Container>
    </div>
  )
}

export default App
