 import {ReactIcon} from 'src/components/icons/ReactIcon'
import {Counter} from 'src/components/counter/Counter'
import {Button} from 'src/components/button/Button'
 
function App() {
  
    function handleClick(e) {
      console.log(e)
    }
  return (
           <>
               <header className="py-6 text-center md:py-16 md:text-left md:flex md:flex-col md:items-center ">
                <ReactIcon className="inline w-16 h-16 fill-blue-400"/>
                 <h1 className="mb-1 text-2xl font-bold text-blue-400 md:text-5xl">React Component State</h1>
                 <p className='text-blue-300'>using reacts built in useState hook.</p>
               </header>
               <main>
                 {/* <button className="bg-value-300" onClick={handleClick}>click</button>
               <Counter heading="Counter"/> */}44Counter
            
               </main>
           </>
  )
}

export default App

