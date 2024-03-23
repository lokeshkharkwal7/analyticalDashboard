import { fetchDataComplete } from "../components/redux/slicers/fetchDataSlicer";
 const host = "https://backend-data-analytical-dashboard.vercel.app";
 
//  const host = "http://localhost:4000";

const filePath = "../data/blackCofferDataFromAPI.json"

 



export const fetchBlackCofferData = async (dispatch , getDataFromAPI) => {
  const url = `${host}/fetchdata`;
 
  // console.log("url passing in the fetchproductcategory is : ", url);
  try {
   

    const response = await fetch(url, {
      method: "GET", // *GET, POST, PUT, DELETE, etc.
      mode: "no-cors", // Set mode to 'no-cors'

      headers: {
        "Content-Type": "application/json",

   
      },
    });
    const output = await response.json();
    if (output.status === true) {
      // console.log("Data is fetched Successfull");
      // console.log(output.data);

      getDataFromAPI(output.data)

     
    } else {
      console.error(output.msg);
    }
  } catch (error) {
    // console.log("Error Occured while fetching ", error);
  }
 
};
