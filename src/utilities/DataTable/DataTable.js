import React, {useEffect, useState} from "react";
import TablePagination from "./TablePagination/TablePagination";
import TableSearch from "./TableSearch/TableSearch";
import TableHeader from "./TableHeader/TableHeader";
import config from "../../Helpers/config.json"
import useFullPageLoader from "../../hooks/useFullPageLoader/useFullPageLoader";

const DataTable = () => {
    const [Members, setMembers] = useState([]);
    const [loader, showLoader, hideLoader] = useFullPageLoader(false);
    useEffect(() => {
        const getMembers = () => {
            showLoader();
            fetch(`${config.apiUrl}/employees/v1a/members`)
                .then(response => response.json())
                .then(json => {
                    hideLoader();
                    setMembers(json)

                })
        }
        getMembers();
    })
    return (
        <>
            {/*<Header title="Building a data table in react">*/}
                <div className="row w-100">
                    <div className="col mb-3 col-12 text-center">
                        <div className="row">
                            <div className="col-md-6">
                              <TablePagination></TablePagination>
                            </div>
                            <div className="col-md-6 d-flex flex-row-reverse">
                               <TableSearch></TableSearch>
                            </div>
                        </div>

                        <table className="table table-striped">
                          <TableHeader></TableHeader>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Test Name</td>
                                    <td>test@test.com</td>
                                    <td>Test body</td>
                                </tr>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Test Name</td>
                                    <td>test@test.com</td>
                                    <td>Test body</td>
                                </tr>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Test Name</td>
                                    <td>test@test.com</td>
                                    <td>Test body</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            {loader}
        </>
    )
}
export default DataTable;