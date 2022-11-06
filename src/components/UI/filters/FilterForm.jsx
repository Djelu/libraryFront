import React, {useState} from 'react';
import FilterBox from "./FilterBox";
import Button from "./Button";
import filterClasses from "./Filters.module.css";

const FilterForm = ({cols, submitFoo, booksData}) => {
    const [filters, setFilters] = useState(setFiltersStartData());
    function setFiltersStartData(){
        const {filter, filterType} = booksData;
        let result = {};
        cols.forEach(key => {
            result[key] = {value: filter[key], isPlus: filterType[key]};
        })
        return result;
    }
    return (
        <div className={filterClasses.filterForm}>
            <div className={filterClasses.filterList}>
                {cols.map((colName, index) =>
                    <FilterBox
                        key={index}
                        isPlus={filters[colName]?.isPlus}
                        colName={colName}
                        id={index}
                        filters={filters}
                        setFilters={setFilters}
                    />
                )}
            </div>
            <div className={filterClasses.buttonOk}>
                <Button name={"Ок"} clickFoo={() => {
                    submitFoo(filters)
                }}/>
            </div>
        </div>
    );
};

export default FilterForm;