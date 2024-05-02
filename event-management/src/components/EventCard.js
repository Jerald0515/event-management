import React, { useEffect, useState } from 'react';

function EventCard(props) {
    const [event, setEvent] = useState(null);

    useEffect(() => {
        if (props.event) {
            setEvent(props.event);
        }
    }, [props.event]);

    return event && (
        <div>
            <div className='group bg-gray-200 hover:bg-gray-300 text-gray-800 p-2 sm:p-5 rounded-lg m-1 sm:m-5 cursor-pointer duration-300 transition-colors'>
                {event.title && (
                    <h2 className='text-2xl font-medium mb-2'>{event.title}</h2>
                )}
                {event.image && event.image.url && (
                    <div className='flex justify-center mb-4'>
                        <img src={event.image.url} alt={event.title} className='w-64 h-48 mb-3 object-cover rounded-lg' />
                    </div>
                )}
                {event.description && (
                    <p className='text-base mb-4'>{event.description}</p>
                )}
                <button className='hidden group-hover:flex bg-orange-500 hover:bg-orange-600 text-white rounded-lg py-2 px-5 w-full justify-between duration-300'>
                    Rent Now
                    <span className='bg-white text-orange-500 rounded-md p-1 ml-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                            <path fillRule="evenodd" d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z" clipRule="evenodd" />
                        </svg>  
                    </span>
                </button>
            </div>
        </div>
    );
}

export default EventCard;
