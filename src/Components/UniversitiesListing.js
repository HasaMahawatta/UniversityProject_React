 import React from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useEffect } from "react";
import { loadUniversities } from "../Redux/actions/universityActions";


 
 const Universities = () => {
      
      const universities = useSelector((state)=> state.allUniversities.universities );  //hook to access the state in store
     
      const dispatch = useDispatch();

      //Fetch the values from the server
      const fetchUniversities = async () =>{
            const response = await axios.get("http://universities.hipolabs.com/search?country=Australia")  //base URL
            .catch((error)=>{
                  console.log(error);
            });
            //dispatch the data 
            dispatch(loadUniversities(response.data));
      };

      useEffect(()=>{
            fetchUniversities();
      }, []);

      console.log("Universities:", universities);


       //const renderuniversities = 
            // universities.map((uni)=> {
            //  const {alpha_two_code, name , country} = uni;
            return (
                  <div>
                  <div className="button_set" >

                  </div>
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