const Calendar = () => {
    const date = new Date();
    console.log(date.getDate());
    return(
        <div className="calendar">
            <div className="calendar-header">
                <div className="calendar-yearmonth"></div>
                <div className="calendar-nav">
                    <button className="calendar-navbtn go-prev"></button>
                    <button className="calendar-navbtn go-today">Today</button>
                    <button className="calendar-navbtn go-next"></button>
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