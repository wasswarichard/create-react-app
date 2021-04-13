import React, {useState} from 'react';
import Pagination from "react-bootstrap/Pagination";

const TablePagination = () => {
    return (
        <Pagination>
            <Pagination.Prev/>
            <Pagination.Item>1</Pagination.Item>
            <Pagination.Item>2</Pagination.Item>
            <Pagination.Item>3</Pagination.Item>
            <Pagination.Item>4</Pagination.Item>
            <Pagination.Next/>
        </Pagination>
    )
}
export default TablePagination;