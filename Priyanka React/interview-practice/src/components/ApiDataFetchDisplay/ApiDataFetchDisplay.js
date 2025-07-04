import React, { useEffect, useState } from 'react';
import "./index.css"

const ApiDataFetchDisplay = () => {

    const [data, setData] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(10);

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        const resp = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await resp.json();
        setData(data);
    }

    const handlePage = (pageNo) => {
        if (pageNo > -1) {
            setCurrentPage(pageNo);
        }
    }

    
    const totalPages = Math.ceil(data?.length / itemsPerPage);
    
    // Slice the data to get the items for the current page
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    
    const currentItems = data?.slice(indexOfFirstItem, indexOfLastItem);

    return (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Body</th>
                </tr>
            </thead>
            <tbody>
                {currentItems ? currentItems?.map((value) => (
                    <tr key={value?.id}>
                        <td>{value?.id}</td>
                        <td>{value?.title}</td>
                        <td>{value?.body}</td>
                    </tr>
                )) : <tr><td colSpan="3" >No data Found</td></tr>}

                {
                    currentItems && (
                        <tr key="0">
                            <td colSpan="3" className='pagination'>
                                <button onClick={() => handlePage(currentPage - 1)} disabled={currentPage === 1}>Previous</button>
                                {console.log("old", totalPages)}
                                {
                                    [...Array(totalPages)].map((_, i) => <button key={i} onClick={() => handlePage(i + 1)}>{i + 1}</button>)
                                }
                                <button onClick={() => handlePage(currentPage + 1)} disabled={currentPage === totalPages}>Next</button>
                            </td>
                        </tr>
                    )
                }
            </tbody>
        </table>

    )
}

export default ApiDataFetchDisplay