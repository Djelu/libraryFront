import React, {useEffect, useState} from 'react';

import BookService from "../API/BookService";
import UtilService from "../API/UtilService";
import {useFetching} from "../hooks/useFetching";
import {useBooks} from "../hooks/useBooks";
import BooksRows from "./BooksRows";
import BooksCols from "./BooksCols";
import HandledElem from "./HandledElem";
import MyTable from "./UI/myTable/MyTable";
import Filters from "./UI/filters/Filters";
import Loader from "./UI/loader/Loader";
import FilterBox from "./UI/filters/FilterBox";
import FilterForm from "./UI/filters/FilterForm";
import MyCheckbox from "./UI/checkbox/MyCheckbox";

const Books = () => {
    const cols = ["bookName", "imgUrl", "author", "genre", "year", "torUrl", "torSize", "bookDuration"];

    const [books, setBooks] = useState([]);
    const [booksData, setBooksData] = useState({
        sort: UtilService.getObjWithDefaultValues(cols, null),
        filter: UtilService.getObjWithDefaultValues(cols, null),
        filterType: UtilService.getObjWithDefaultValues(cols, true)
    })
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);

    const [fetchBooksFromServer, isBooksLoadingFromServer, booksErrorFromServer] = useFetching(async (limit, page) => {
        const response = await BookService.getAll(limit, page);
        setBooks([...response.data])
    })
    const resultBooks = useBooks(books, booksData)

    useEffect(() => {
        fetchBooksFromServer(limit, page)
    }, [limit, page])


    const sortByCol = function (colName, isUp){
        let newSort = {...booksData.sort}
        newSort[colName] = isUp
        setBooksData({...booksData, sort: newSort})
    }

    const filterByCol = function (colName, value){
        let newFilter = {...booksData.filter}
        newFilter[colName] = value
        setBooksData({...booksData, filter: newFilter})
    }

    const filterSubmit = function (colData){
        let newFilter = {...booksData.filter}
        let newFilterType = {...booksData.filterType}
        const keys = Object.keys(colData);
        keys.forEach(key => {
            newFilter[key] = colData[key].value;
            newFilterType[key] = colData[key].isPlus;
        })
        setBooksData({...booksData, filter: newFilter, filterType: newFilterType})
        setFiltersVisible(false)
    }

    // const filterClick = (colName) => {
    //     const newFilterData = {...booksData.filterType};
    //     newFilterData[colName] = !newFilterData[colName];
    //     setBooksData({...booksData})
    // }

    const filtersClean = () => {
        setBooksData({
            ...booksData,
            filter: UtilService.getObjWithDefaultValues(cols, null),
            filterType: UtilService.getObjWithDefaultValues(cols, true)
        })
    }

    const [filtersVisible, setFiltersVisible] = useState(false);
    const filterCheckboxClick = () => {
        setFiltersVisible(!filtersVisible);
        //filtersClean();
    }


    return (<div>
        {/*<Filters*/}
        {/*    cols={cols}*/}
        {/*    filtersData={booksData.filterType}*/}
        {/*    filtersClean={filtersClean}*/}
        {/*    filterFoo={filterByCol}*/}
        {/*    filterClick={filterClick}*/}
        {/*/>*/}
        <MyCheckbox value={filtersVisible} onClick={filterCheckboxClick}>Фильтр</MyCheckbox>
        {filtersVisible
            ?<FilterForm
                cols={cols}
                submitFoo={filterSubmit}
                booksData={booksData}
            /> :<div/>}
        <MyTable
            sortFoo={sortByCol}
            cols={cols}
            booksData={{
                resultBooks
            }}
        />
        {isBooksLoadingFromServer
            ?<Loader/>
            :<div/>
        }
        {booksErrorFromServer
            ?<h1>Произошла ошибка ${booksErrorFromServer}</h1>
            :<div/>
        }
    </div>);
};

export default Books;