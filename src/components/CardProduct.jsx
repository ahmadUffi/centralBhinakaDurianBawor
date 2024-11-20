import React from 'react'

function CardProduct({ image, titleCard, desc }) {
  return (
    <>
      <div className="card-product flex flex-col gap-y-4 p-6 custom-shadow bg-gradient-to-r from-darkYellow via-orange-400/90 to-darkYellow rounded-xl">
        <div className="">
          <img src={ image } alt="" />
        </div>
        <h2 className="text-2xl font-semibold text-center">
          { titleCard }
        </h2>
        <p className="text-center text-lg">
          { desc }
        </p>
      </div>
    </>
  )
}

export default CardProduct