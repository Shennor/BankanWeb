import {FC} from "react";


const CustomButton: FC<JSX.IntrinsicElements['button']> = ({children, ...props}) => {
    return (
        <button {...props}>
            {children}
        </button>
    )
}

export default CustomButton