import React, { useEffect, useState } from 'react';
import "./index.css";
import { useDebounceSearch } from '../../hooks/useDebounceSearch';


const DebounceSearch = () => {

    const [data, setData] = useState(null);
    const [filteredData, setFilteredData] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(10);
    const [searchQuery, setSearchQuery] = useState();
    const queryAfterDebaunce = useDebounceSearch(searchQuery, 3000);

    useEffect(() => {
        fetchData();
    }, [])

    useEffect(() => {
        if (queryAfterDebaunce) {
            const filterdData = data?.filter((item) => item.title.toLowerCase().includes(searchQuery.toLowerCase()));
            setFilteredData(filterdData);
        } else {
            setFilteredData(data);
        }
    }, [queryAfterDebaunce])

    const fetchData = async () => {
        const resp = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await resp.json();
        setData(data);
        setFilteredData(data);
    }

    const handlePage = (pageNo) => {
        if (pageNo > -1) {
            setCurrentPage(pageNo);
        }
    }


    const totalPages = Math.ceil(filteredData?.length / itemsPerPage);

    // Slice the data to get the items for the current page
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;

    const currentItems = filteredData?.slice(indexOfFirstItem, indexOfLastItem);


    const searchHandler = (val) => {
        setSearchQuery(val);
    }

    return (
        <>
            <div className="search">
                <input type="text" placeholder="search..." value={searchQuery} onChange={(e) => searchHandler(e.target.value)}></input>
            </div>

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
        </>
    )
}

export default DebounceSearch;