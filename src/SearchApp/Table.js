export const Table = ({ data }) => {
  return (
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
  );
};
