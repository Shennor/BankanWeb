import {forwardRef} from "react";

const CustomInput = forwardRef<HTMLInputElement, JSX.IntrinsicElements['input']>(
    (props, ref) =>{
        return (
            <input ref={ref} {...props}/>
        )
    })

export default CustomInput