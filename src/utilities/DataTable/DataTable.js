import React, {useEffect, useMemo, useState} from "react";
import TablePagination from "./TablePagination/TablePagination";
import TableSearch from "./TableSearch/TableSearch";
import TableHeader from "./TableHeader/TableHeader";
import config from "../../Helpers/config.json"
import useFullPageLoader from "../../hooks/useFullPageLoader/useFullPageLoader";
// import "../../components/Sidebar/style.css"
import {UserJoined} from "../../actions/actions";
import "bootstrap/dist/css/bootstrap.min.css"
import {v1 as uuid} from "uuid";
import {useDispatch, useSelector} from "react-redux";

const DataTable = () => {

    let todos = useSelector(state => state);

    const [members, setMembers] = useState([]);
    const [loader, showLoader, hideLoader] = useFullPageLoader();
    
    const dispatch = useDispatch();
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
        dispatch(UserJoined({
            id: uuid(),
            name: members
        }));
        return members;

    }, [members])
    return (
        <div>
            <div className="row">
                <div className="col-md-6">
                    <TablePagination></TablePagination>
                </div>
            </div>
            <table  id="dtBasicExample" className="table table-striped table-bordered table-sm" cellSpacing="0" width="100%">
                <caption>List of users</caption>
                <TableHeader headers={headers}/>
                <tbody>
                <tr>
                    {headers.map(head => (<td key={head.field} className="th-sm"><TableSearch search={head}/></td>))}
                </tr>
                {membersData.map( member => {
                    return ( <tr>
                        <td>{member.crewId}</td>
                        <td>{member.id}</td>
                        <td>{member.image}</td>
                        <td>{member.name}</td>
                        <td>{member.userId}</td>
                    </tr>)
                })}
                </tbody>
            </table>
            {loader}
        </div>
    )
}
export default DataTable;