import React, { useEffect, useState } from 'react';
import EventCard from './EventCard';
import BookingModal from './Booking/BookingModal';

function EventList(props) {
    const [isLoaded, setIsLoaded] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState(null);

    useEffect(() => {
        if (props.eventList) {
            setIsLoaded(false);
        }
    }, [props.eventList]);

    const openModal = (event) => {
        setSelectedEvent(event);
        const modal = document.getElementById("my_modal_4");
        modal.showModal();
    };

    return (
        <>
            <h2 className="text-4xl font-semibold text-center mb-8 mt-8" style={{ color: '#333' }}>Popular Events</h2>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3'>
                {!isLoaded && props.eventList && props.eventList.map((event, index) => (
                    <div key={index} onClick={() => openModal(event)}>
                        <EventCard event={event} />
                    </div>
                ))}
                <dialog id="my_modal_4" className="modal">
                    {selectedEvent && <BookingModal event={BookingModal} />}
                </dialog>
            </div>
        </>
    );
}

export default EventList;
