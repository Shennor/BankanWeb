
import "./button-bar.css"
import {CianButton, GreyButton} from "../Button/button";
import {Link} from "react-router-dom";


export const ButtonBar = () => {
    return(
        <div className={"buttonBar"}>
            <GreyButton>
                <button>
                    Text 1
                </button>
            </GreyButton>
            <GreyButton>
                <button>
                    Text 2
                </button>
            </GreyButton>
            <GreyButton>
                <button>
                    Text 3
                </button>
            </GreyButton>
            <GreyButton>
                <button>
                    Text 4
                </button>
            </GreyButton>
            <CianButton>
                <button>
                    <Link to={"/group"}>
                        Group to list
                    </Link>
                </button>
            </CianButton>
        </div>
    )
}