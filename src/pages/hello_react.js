import React from 'react';
import UserInfo from '../components/user_info';


export const HelloReact = () => {
    const users = [
        {
          name: "Harry",
          age: 28,
          hobbies: ["bowling","watching tv", "drinking beer"]
        },
        {
          name: "Johnny",
          age: 34,
          hobbies: ["painting", "gambling"]
        },
        {
          name: "Udin",
          age: 10,
          hobbies: ["skateboarding", "make prank calls"]
        },
      ]
    
    return(
        <div>
        {
          users.map((u, index) => {
            return <UserInfo {...u}/>
          })
        }
  
      </div>
    )
}