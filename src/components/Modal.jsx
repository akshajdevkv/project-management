import {createPortal} from 'react-dom'
import Button from "./Button"
import {forwardRef, useRef,useImperativeHandle} from 'react'
const Modal = forwardRef(function Modal({children},ref){
    const dialog = useRef(); 
    useImperativeHandle(ref,()=>{
        return {
            open(){
                dialog.current.showModal();
            }   
        }
    });
 
      

    return createPortal(
        <dialog ref={dialog} className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md">
        {children}
        <form method="dialog">
            <Button>Close</Button>
        </form>
    </dialog>,document.getElementById('modal-root')
    )
});
export default  Modal;