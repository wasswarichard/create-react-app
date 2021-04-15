import React, {useState} from 'react';

const TableSearch = ({search}) => {
    return (
        <input
            type="text"
            className="form-control"
            style={{width: "150px"}}
            placeholder={search.name}
        />
    )
}
export default TableSearch;