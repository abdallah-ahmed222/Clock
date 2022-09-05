function dClock()
{
    let hours = document.querySelector( ".hour" );
    let minutes = document.querySelector( ".min" );
    let seconds = document.querySelector( ".sec" );
    let curDate = new Date();
    let hour = curDate.getHours(); // hours
    let min = curDate.getMinutes()//minutes
    let sec = curDate.getSeconds()//seconds

    let ap = document.querySelector( "#am-pm" )
    if ( hour < 12 )
    {
        hour;
        ap.innerHTML = "AM"
    } else
    {
        hour -= 12
        ap.innerHTML = "PM"
    }
    min = min < 10 ? `0${ min }` : min;
    sec = sec < 10 ? `0${ sec }` : sec;
    hours.innerHTML = `${ hour }`
    minutes.innerHTML = `${ min }`
    seconds.innerHTML = `${ sec }`
    setTimeout( dClock, 1000 )
}
dClock()
