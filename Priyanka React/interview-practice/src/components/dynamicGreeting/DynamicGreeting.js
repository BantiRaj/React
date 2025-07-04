import React, {useEffect, useState} from 'react'

const DynamicGreeting = () => {
    const [gretting, setGreeting] = useState('');

    useEffect(() => {
        const date = new Date();
        const hours = date.getHours();
        console.log(hours)
        // setGreeting(formattedDate);
        let greet;
        if(hours < 12) {
            greet = "Good Morning";
        } else if(hours < 18){
            greet = "Good After noon";
        } else {
            greet = "Good evening";
        }
        setGreeting(greet);
    }, []); 

  return (
        <div>
            {gretting}
        </div>
  )
}

export default DynamicGreeting