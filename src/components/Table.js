import React from 'react';
import Spinner from './Spinner';

const Table = ({ data, loading, searchValue }) => {
  if (loading) return <div className='table-spinner'><Spinner /></div>;
  return (
    <div className="table">
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Place Name</th>
            <th>Country</th>
          </tr>
        </thead>
        <tbody>
          {!searchValue ? (
            <tr>
              <td colSpan="3" className='table-start-searching'>Start searching</td>
            </tr>
          ) :data.length === 0 ? (
            <tr>
              <td colSpan="3" className='table-no-result'>No result found</td>
            </tr>
          ) : (
            data.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>
                  <div className='country-div'>
                  <img src={`https://flagsapi.com/${item.countryCode}/flat/32.png`} alt={item.country} />
                  {item.country}
                  </div>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
