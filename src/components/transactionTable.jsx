import React from "react";

const TransactionTable = ({ headers, data }) => {
  return (
    <table data-testid="transaction-table">
      <tbody>
        <tr>
          {headers.map((header) => (
            <th key={header}>{header}</th>
          ))}
        </tr>
        {data.map((item) => {
          const [name, firstMon, secondMon, thirdMon] = item;
          return (
            <tr key={name}>
              <td>{name}</td>
              <td>{firstMon}</td>
              <td>{secondMon}</td>
              <td>{thirdMon}</td>
              <td>{firstMon + secondMon + thirdMon}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TransactionTable;
