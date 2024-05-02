import React from 'react'
import Form from './Form'
import EventCard from '../EventCard'



function BookingModal({events}) {
  return (
    <form method="dialog" className="modal-box w-11/12 max-w-5xl">
      <div className='border-b-[1px] pb-2 '>
        <h3 className=" text-[30px] font-light text-gray-400">
          Rent A Car Now!</h3>
      </div>
      <div className=''>
        <div>
          <Form event={events} />
        </div>
      </div>
    </form>
  )
}

export default BookingModal