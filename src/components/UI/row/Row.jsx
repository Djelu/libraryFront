import React from 'react';
import ConvertingService from "../../../API/ConvertingService";
import classes from "./Row.module.css";

const Row = ({data, cols, rowIndex, setOpenedRow, rowOpened, itemClassName}) => {
    const {url, bookName} = data;
    return (cols.map((colName, colIndex) => {
        let innerElem;
        switch (colName) {
            case "bookName":
                innerElem = rowOpened
                    ?<div>
                        <a href={url}>{bookName}</a>
                        <br/>
                        <span>{data["description"]}</span>
                    </div>
                    :<a href={url}>{bookName}</a>
                break;
            case "author":
                innerElem = <span>{ConvertingService.getValueFromBook(data, colName)}</span>
                break;
            case "genre":
                innerElem = <div className={classes.inColumn}>
                    {ConvertingService.getGenre(data[colName])}
                </div>
                break;
            case "imgUrl":
                innerElem = <img src={data[colName]} alt="pic"
                                 className={rowOpened ?classes.item_opened_img :classes.item_closed_img}
                />
                break;
            case "torUrl":
                innerElem =
                    // <a href={"https://rutracker.org/forum/dl.php?t="+data["bookPageId"]}>
                    //     <img src="https://static.t-ru.org/templates/v1/images/attach_big.gif"
                    //          alt="Скачать .torrent"/><br/>
                    //     Скачать .torrent
                    // </a>
                    <a href={"https://rutracker.org/forum/dl.php?t="+data["bookPageId"]}>
                        <img src="https://static.t-ru.org/templates/v1/images/attach_big.gif" alt="Скачать .torrent"/>
                    </a>
                break;
            default:
                innerElem = <span>{data[colName]}</span>
        }
        const additionClass = (rowOpened ?classes["item_opened_col"+(colIndex+1)] :"");
        return <div key={colName+"_"+rowIndex}
                    className={itemClassName+" "+additionClass}
                    onClick={() => {setOpenedRow(rowIndex); return false}}>{innerElem}
        </div>;
    }));
};

export default Row;