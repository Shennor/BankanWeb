import {FC} from "react";
import classes from "./button.module.css"


export const CianButton: FC<JSX.IntrinsicElements['button']> = ({children, ...props}) => {

    return (
        <button {...props} className={classes.cianButton}>
            {children}
        </button>
    )
}


export const GreyButton: FC<JSX.IntrinsicElements['button']> = ({children, ...props}) => {

    return (
        <button {...props} className={classes.greyButton}>
            {children}
        </button>
    )
}