import Hero from './components/Hero';
import { useState } from 'react';
import './App.css';
import WhyChooseUs from './components/WhyChooseUs';
import { getEventList } from './components/Services';
import { useEffect } from 'react';
import EventList from './components/EventList';
import { BookCreatedFlagContext } from './components/context/BookCreatedFlagContext';
import ToastMsg from './components/ToastMsg';
import Footer from './components/Footer';

function App() {

  const [eventList,setEventList]=useState([])
  const [showToastMsg, setShowToastMsg] = useState(false);

  useEffect(()=>{
    getEventList_(); 
  },[])

  const getEventList_=async()=>{
    const result=await getEventList();
    setEventList(result?.events)
  }

  return (
    <div className='background'>
      <BookCreatedFlagContext.Provider value={{ showToastMsg, setShowToastMsg }}>
    <Hero />
    <WhyChooseUs />
    <EventList eventList={eventList}/>
    {showToastMsg?<ToastMsg msg={'Booking Created Successfully!'} />:null}
    <Footer />
    </BookCreatedFlagContext.Provider>
    </div>
  );
}

export default App;
