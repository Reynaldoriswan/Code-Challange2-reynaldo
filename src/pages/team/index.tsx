import React, { use, useEffect, useState} from "react";
import RandomUser from '../RandomUser.jsx/index'

const Team = () => {
    return (
      <div>
        <h1 className="font-semibold text-3xl mt-5 mb-5 text-center">Welcome to our Page team </h1>
        <p className="mt-5 mb-2 text-center">Here you can find more information about people
            who work in our company,they are the team members that running MOVE WITH JOY
        </p>
        <div className="teams-container">
            <RandomUser />
            <RandomUser />
            <RandomUser />
            <RandomUser />
        </div>
       
       <div className="team-close">
        <p className="text-center mt-10">We are the people behind Move with JOY,we taking care of things
            the administration,marketing,tax,logistic,and many more. <br/>

            Don't worry we are professionals if you have any complain through our servies
            just give us a call and we will workin on your complains as soon as possible <br/>
        </p>

        <img className="team-clt" src="/image/team-culture.jpg" />
       </div>

      </div>
    );
  };
  
  export default Team;



