import React from 'react';
import ConvertingService from "../../../API/ConvertingService";
import filterClasses from "./Filters.module.css";
import Button from "./Button";

const FilterBox = ({isPlus, colName, id, setFilters, filters, defaultText=""}) => {
    const localeColName = ConvertingService.getColLocaleName(colName)
    return (
        <div className={filterClasses.inRow+" "+filterClasses.filterRow}>
            <label htmlFor={id} className={filterClasses.label}>
                <Button
                    className={filterClasses.labelButton}
                    name={(isPlus==null || isPlus) ? "+" : "-"}
                    clickFoo={() => {
                        let newFilters = {...filters};
                        newFilters[colName] = {...newFilters[colName], isPlus: !(isPlus==null || isPlus)}
                        setFilters({...newFilters})
                    }}
                />
                <span className={filterClasses.space}>{localeColName}</span>
            </label>
            <input
                id={id}
                className={filterClasses.space}
                value={filters[colName].value}
                onInput={(e) => {
                    let newFilters = {...filters};
                    const isPlus = newFilters[colName]?.isPlus
                    newFilters[colName] = {...newFilters[colName], value: e.currentTarget.value, isPlus:(isPlus==null || isPlus)}
                    setFilters({...newFilters})
                }}
            />
        </div>
    );
};

export default FilterBox;