// import { useState, useEffect } from "react";
// import { doctors as data } from "../../assets/assets_frontend/assets";
// import "./Filter.css" 
// function Filter({ filterion }) {
//     console.log(filterion, "Filterion");

//     const [productFilter, setProductsFilter] = useState(data);

//     useEffect(() => {
//         console.log("Filtering products based on filterion:", filterion);

//         if (filterion === "All") {
//             setProductsFilter(data);
//         } else {
//             setProductsFilter(data.filter((item) => item.speciality === filterion));
//         }
//     }, [filterion]);

//     return (
//         <div className="filter">
//             {productFilter.length > 0 ? (
//                 productFilter.map((item) => (
//                     <div className="borderDocs" key={item._id}>
//                             <img className="imageDoctors" src={item.image} alt={item.name} />
//                         <h1>{item.name}</h1>
//                         <h3>{item.speciality}</h3>
//                         {/* <h4>{item.description.slice(5)}</h4> */}
//                     </div>
//                 ))
//             ) : (
//                 <h4>No products found for this category.</h4>
//             )}
//         </div>
        
//     );
// }

// export default Filter;
