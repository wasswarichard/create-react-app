import React, {useEffect, useMemo, useState} from "react";
import TablePagination from "./TablePagination/TablePagination";
import TableSearch from "./TableSearch/TableSearch";
import TableHeader from "./TableHeader/TableHeader";
import config from "../../Helpers/config.json"
import useFullPageLoader from "../../hooks/useFullPageLoader/useFullPageLoader";
// import "../../components/Sidebar/style.css"

const DataTable = () => {
    const [members, setMembers] = useState([]);
    const [loader, showLoader, hideLoader] = useFullPageLoader();
    const headers = [
        {name: "crewId", field: "crewId"},
        {name: "id", field: "id"},
        {name: "image", field: "image"},
        {name: "name", field: "name"},
        {name: "userId", field: "userId"}
    ]
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
    }, []);
    const membersData = useMemo( ()=> {
        let computeMembers =  members
        return computeMembers;

    }, [members])
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
                          <TableHeader headers={headers}/>
                            <tbody>
                            {membersData.map( member => (
                                <tr>
                                    <th scope="row">{member.crewId}</th>
                                    <td>{member.id}</td>
                                    <td>{member.image}</td>
                                    <td>{member.name}</td>
                                    <td>{member.userId}</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            {loader}
        </>
    )
}
export default DataTable;