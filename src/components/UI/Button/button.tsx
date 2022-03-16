import {FC} from "react";
import classes from "./button.module.css"


const CustomButton: FC<JSX.IntrinsicElements['button']> = ({children, ...props}) => {

    return (
        <button {...props} className={classes.customButton}>
            {children}
        </button>
    )
}

export default CustomButton