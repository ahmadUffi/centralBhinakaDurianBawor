import React from 'react'

function CardMitra({ image, title, desc }) {
  return (
    <>
      <div className="p-6 custom-shadow rounded-2xl mb-10 lg:p-12">
        <div className="flex flex-col justify-center items-center gap-y-4 lg:flex-row gap-x-10">
          <div className="flex justify-center w-full sm:w-[90%] md:w-[80%] lg:order-2 lg:w-1/2">
            <img src={ image } className="w-full " alt="Mitra_1" />
          </div>
          <div className="flex flex-col gap-y-4 lg:order-1 lg:w-1/2 lg:gap-y-8">
            <h1 className="text-2xl font-bold md:text-center lg:text-5xl lg:text-left">Durian Delights</h1>
            <p className="text-xl text-justify lg:text-left">
              Menyediakan berbagai jenis durian premium dari berbagai daerah. Mengutamakan kualitas rasa dengan pilihan durian segar dan produk olahan durian, seperti es krim, pancake, dan smoothie.
            </p>
            <div className="flex justify-center lg:justify-start">
              <button className="w-full p-2 bg-darkYellow text-stone-900 font-semibold rounded-[10px] transition duration-[400ms] ease-in-out hover:bg-yellow-500 sm:w-[40%] lg:w-max lg:px-5 xl:text-md">
                Pelajari lebih lanjut
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CardMitra