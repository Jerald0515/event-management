import React, { useState, useContext } from 'react';
import { createBooking } from '../Services';
import {BookCreatedFlagContext} from '../context/BookCreatedFlagContext';

function Form() {
  const { showToastMsg, setShowToastMsg } = useContext(BookCreatedFlagContext);
    const [formValue, setFormValue] = useState({
        name: '',
        mailId: '',
        eventDate: '',
        eventTime: '',
        contactNumber: '',
        userName: '',
        eventId: ''
    });

    const handleChange = (event) => {
        setFormValue({
            ...formValue,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = async () => {
      console.log(formValue);
      const resp = await createBooking(formValue);
      console.log(resp);
      if (resp) {
          setShowToastMsg(true);
      }
  };

  

    return (
        <div>
            <div className="flex flec-col gap-5 mb-5">
                <div className="flex flex-col w-full">
                    <label className="text-gray-400">UserName</label>
                    <input
                        type="text"
                        onChange={handleChange}
                        placeholder="Enter"
                        name="name"
                        className="input input-bordered w-full max-w-lg"
                    />
                </div>
                <div className="flex flex-col w-full">
                    <label className="text-gray-400">Mail-Id</label>
                    <input
                        type="email"
                        onChange={handleChange}
                        placeholder="MailId"
                        name="mailId"
                        className="input input-bordered w-full max-w-lg"
                    />
                </div>
                <div className="flex flex-col w-full">
                    <label className="text-gray-400">Event date</label>
                    <input
                        type="date"
                        onChange={handleChange}
                        placeholder="eventDate"
                        name="eventDate"
                        className="input input-bordered w-full max-w-lg"
                    />
                </div>
            </div>
            <div className="flex gap-5 ">
                <div className="flex flex-col w-full mb-5">
                    <label className="text-gray-400">Event Time</label>
                    <input
                        type="time"
                        onChange={handleChange}
                        name="eventTime"
                        placeholder="Type here"
                        className="input input-bordered w-full max-w-lg"
                    />
                </div>
            </div>
            <div className="flex flex-col w-full mb-5">
                <label className="text-gray-400">Contact Number</label>
                <input
                    type="number"
                    onChange={handleChange}
                    placeholder="Type here"
                    name="contactNumber"
                    className="input input-bordered w-full max-w-lg"
                />
            </div>
            <div className="modal-action">
                <button className="btn">Close</button>
                <button
                    className="btn bg-blue-500 text-white hover:bg-blue-800"
                    onClick={handleSubmit}
                >
                    Save
                </button>
            </div>
        </div>
    );
}

export default Form;
