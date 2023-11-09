import {cn} from 'src/lib/utils/mergeCss'
import { CounterBody } from './CounterBody'
import { CounterHeader } from './CounterHeader'
import { CounterDisplay } from './CounterDisplay'
import { CounterControls } from './CounterControls'
import {Button} from './../button/Button'


 
 function Counter ({}){
    
  function increment() {
    
  }
  
  function decrement() {
    
  }
    return (
      <CounterBody>
      <CounterHeader className=' Dtext-stone-500'>Counter Component</CounterHeader>
      <CounterDisplay className="Dtext-stone-500/40"/>
      
      <CounterControls className='flex justify-center gap-3 mt-6'>

        <Button onClick={increment} className={cn("rounded-full w-8 h-8 p-0 bg-stone-200/75 text-stone-800 border border-stone-200")}>+</Button>
        <Button onClick={increment} className={cn("rounded-full w-8 h-8 p-0 bg-stone-200/75  text-stone-800 border border-stone-200")}>-</Button>
        
    </CounterControls>
    </CounterBody>
    )
   }
    
 



 export { Counter } 