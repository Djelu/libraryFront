import React, {useState} from 'react';
import classes from "./Col.module.css";
import ConvertingService from "../../../API/ConvertingService";

const Col = ({colName, sortFoo, itemClassName}) => {
    let innerText;
    let onClickFoo;
    let sortDirection;

    innerText = ConvertingService.getColLocaleName(colName)

    const [isUp, setIsUp] = useState(null);

    if (["imgUrl", "torUrl"].includes(colName)) {
        sortDirection = ""
    } else {
        sortDirection = isUp == null ? "" : (isUp ? "↑" : "↓")
        const getNewDirection = function (oldDirectionIsUp){//isUp
            switch (oldDirectionIsUp) {
                case true: return false;
                case false: return null;
                default: return true;
            }
        }
        onClickFoo = function () {
            const newIsUp = getNewDirection(isUp);
            setIsUp(newIsUp)
            sortFoo(colName, newIsUp);
        }

    }

    return (
        <div onClick={onClickFoo} className={itemClassName}>
            <span>{innerText}</span>
            <span>{sortDirection}</span>
        </div>
    );
};

export default Col;