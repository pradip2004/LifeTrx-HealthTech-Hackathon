import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../utility/CustomCalendar.css'

const CalendarComponent = () => {
  return (
    <div className="bg-white w-full h-[58%] rounded-lg relative overflow-hidden flex items-center justify-center bg-cover"
    style={{ backgroundImage: "url('/calender.jpg')" }}
    >
      
      <div className=" p-4">
        <Calendar 
          className="bg-transparent text-[#FF626D] font-semibold" 
          tileClassName="text-[#FF626D]" 
        />
      </div>
    </div>
  );
};

export default CalendarComponent;
