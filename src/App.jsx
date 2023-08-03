import './App.css'
import '../src/index.css'
import Header from './component/Header'
import Body from './component/Body'
import Footer from './component/Footer'

function App() {
  return (
    <>
    <div className='font-["Poppins"] overflow-x-auto'>
      <Header />
      <Body />
      <Footer />
    </div>
    </>
  )
}

export default App
