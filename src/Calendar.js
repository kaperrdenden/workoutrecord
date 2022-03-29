const Calendar = () => {
    const date = new Date();
   
    const viewYear = date.getFullYear();
    const viewMonth = date.getMonth();
    const prevLast = new Date(viewYear, viewMonth, 0);
    const thisLast = new Date(viewYear, viewMonth + 1, 0);
    const PLDate = prevLast.getDate();
    const PLDay = prevLast.getDay();

    const TLDate = thisLast.getDate();
    const TLDay = thisLast.getDay();    
    console.log(prevLast);
    const prevDates = [];
    const thisDates = [...Array(TLDate + 1).keys()].slice(1);
    const nextDates = [];
    if (PLDay !== 6) {
        for (let i = 0; i < PLDay + 1; i++) {
          prevDates.unshift(PLDate - i);
        }
      }
      
      for (let i = 1; i < 7 - TLDay; i++) {
        nextDates.push(i);
      }
    return(
        <div className="calendar">
            <div className="calendar-header">
                <div className="calendar-yearmonth">
                    {viewYear}년 {viewMonth+1}월
                    {/* getMonth는 현재의 달보다 1작게 가져온다  */}
                </div>
                <div className="calendar-nav">
                    <button className="calendar-navbtn go-prev">&lt</button>
                    <button className="calendar-navbtn go-today">Today</button>
                    <button className="calendar-navbtn go-next">&gt</button>
                </div>
            </div>
            <div className="calendar-main">
                <div className="calendar-days">
                    <div className="calendar-day">일</div>
                    <div className="calendar-day">월</div>
                    <div className="calendar-day">화</div>
                    <div className="calendar-day">수</div>
                    <div className="calendar-day">목</div>
                    <div className="calendar-day">금</div>
                    <div className="calendar-day">토</div>
                </div>
                <div className="calendar-dates"></div>
            </div>
        </div>

    )
}

export default Calendar;