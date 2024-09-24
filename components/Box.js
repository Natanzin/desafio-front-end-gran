import React from 'react'

const Box = (props) => {

  const nome = props.title
  const description = props.description
  return (
    <>
      <div className="border border-danger mb-3">
        <h2 className="bg-danger text-white text-center">{nome}</h2>
        {props.children}
      </div>
    </>
  )
}

export default Box