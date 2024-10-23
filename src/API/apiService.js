import axios from "axios";

let api = import.meta.env.VITE_APP_API_URL;

const getReqest = async (path) => {
    const response = await axios.get(`${api}${path}`)
    return response.data.data;
};

// const getReqest = (endpoint, updateResource) => {
//     return ( 
//         axios.get(api + endpoint)
//             .then(function (result) {
//                 console.log(result);
//                 updateResource(result.data.data);
//             })
//             .catch(function (error) {
//                 console.log(error);
//             })
//         // .finally(function () {
//         //     // always executed
//         // });
//      );
// }
 
export {getReqest};