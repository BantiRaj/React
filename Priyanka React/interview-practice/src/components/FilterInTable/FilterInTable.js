import React, { useEffect, useState } from 'react';
import "./index.css";

const FilterInTable = () => {

    const [data, setData] = useState(null);
    const [query, setQuery] = useState("");
    const [currentPage, seCurrentPage] = useState(1);
    const [itemPerPage] = useState(10);
    const [filterdData, setFilterdData] = useState(null);

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        const resp = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await resp.json();
        setData(data);
        setFilterdData(data);
    }

    const handlePage = (pageNo) => {
        if (pageNo > -1) {
            seCurrentPage(pageNo);
        }
    }

    const searchHandler = (value) => {
        setQuery(value);
        let filteredItem = data?.filter(item => item.title.toLowerCase().includes(value.toLowerCase()));
        setFilterdData(filteredItem);
    }

    const totalPages = Math.ceil(filterdData?.length / itemPerPage);

    const lastIndex = currentPage * itemPerPage;
    const firstIndex = lastIndex - itemPerPage;

    const items = filterdData?.slice(firstIndex, lastIndex);

    return (
        <>
            <div className='search'>
                <input type="text" placeholder='search...' value={query} onChange={(e) => searchHandler(e.target.value)}/>
                <button>Search</button>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Title </th>
                        <th>Body</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        items ? items?.map((value) => (
                            <tr key={value?.id}>
                                <td>
                                    {value?.id}
                                </td>
                                <td>
                                    {value?.title}
                                </td>
                                <td>
                                    {value?.body}
                                </td>
                            </tr>
                        )) : <tr><td colSpan="3" >No data Found</td></tr>
                    }

                    {
                        items && (
                            <tr className='pagination'>
                                <td colSpan={3}>
                                    <button onClick={() => handlePage(currentPage - 1)} disabled={currentPage === 1}>Previous</button>
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

export default FilterInTable