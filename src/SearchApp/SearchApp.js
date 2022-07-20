import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table } from "./Table";
//import { users } from "./users";
import "./_searchApp.sass";

// export const SearchApp = () => {
//   const [query, setQuery] = useState("");

//   const keys = ["first_name", "last_name", "email"];

//   const search = (data) =>
//     data.filter((item) =>
//       keys.some((key) => item[key].toLowerCase().includes(query))
//     );

//   return (
//     <div className="searchApp">
//       <input
//         type="text"
//         placeholder="Search..."
//         onChange={(e) => setQuery(e.target.value)}
//       />

//       <Table data={search(users)} />
//     </div>
//   );
// };

export const SearchApp = () => {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);

  const fetchData = async () => {
    await axios
      .get(`http://localhost:5000?q=${query}`)
      .then((res) => {
        setData(res.data);

        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };  

  useEffect(() => {
    fetchData();
  }, [query]);
  return (
    <div className="searchApp">
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => setQuery(e.target.value)}
      />
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <th>Surname</th>
            <th>E-mail</th>
            <th>Gender</th>
          </tr>
          {data.map((item) => (
            <tr key={item.id}>
              <td>
                <b> {item.id}.</b>
                {item.first_name}
              </td>
              <td>{item.last_name}</td>
              <td>{item.email}</td>
              <td>{item.gender}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
