 import {cn} from 'src/lib/utils/mergeCss' 
 
 function CounterHeader ( {children, className, heading}){
  
    return (
       <header className={cn('text-inherit font-medium  text-xl text-center', className)}>
            <h2 className='break-normal'>
            {heading || children || 'Counter Header'}
            </h2>
       </header>
 
    )
 }



 export { CounterHeader }