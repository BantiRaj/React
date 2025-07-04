// import React, {useMemo, useState} from 'react'

// const MemoUse = React.memo(() => {

//     console.log("memo rendered")

//     return (
//         <div>component memo
//         </div>
//     )
// })

// export default MemoUse;

import React, {useMemo, useState, useEffect} from 'react'

const MemoUse = ({num}) => {

    const compute = useMemo(() => {
        console.log("memo use");
        return num * 2;
    }, [num])

    // const compute = () => {
    //     console.log("memo use");
    //     return num * 2;
    // }


    return (
        <div>Result: 
            {compute}
        </div>
    )
}

export default MemoUse;