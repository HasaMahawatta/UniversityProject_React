 import React from "react";
import { useSelector } from "react-redux";


 
 const Universities = () => {
      
      const universities = useSelector((state)=> state.allUniversities.universities );  //hook to access the state in store
     
      
            return (
                  <div>
                  {/* Add the table from the semantic ui */}
                  <table className="ui celled table">
                  <thead>
                        <tr>
                        <th scope="col" >
                        Alpha_two_code
                        </th>
                        <th scope="col" >
                              Name
                        </th>
                        <th scope="col" >
                              Country
                        </th>
                        <th scope="col" >
                              Web Page
                        </th>
                        <th scope="col" >
                              Domains
                        </th>
                        <th scope="col" >
                              state-province
                        </th>
                        </tr>
                  </thead>
                  <tbody>
                        {universities.map((uni)=>(
                          <tr key={uni.name}>
                          <td >{uni.alpha_two_code}</td>
                          <td >{uni.name}</td>
                          <td >{uni.country}</td>
                          <td >{uni.web_pages.map(webPage => (
                          <p>{webPage} </p>))}</td>
                          <td >{uni.domains.map(domain => (
                          <p>{domain} </p>))}</td>
                          <td >{uni["state-province"]}</td>

                    </tr>
      
                        ))}
                  
                  </tbody>
                  </table>
                  </div>
                  
            );

      
 };

 export default Universities;