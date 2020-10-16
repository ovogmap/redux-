import React from 'react';

export default ({data}) => {
  data && console.log(data)
  return data ? (
    <>
      <h2>{data.title}</h2>
      <p>{data.tagline}</p>
      <p>{data.id}</p>
    </>
  )
  : <div>안녕</div>
}