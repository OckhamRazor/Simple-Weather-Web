/**
 * Created by baobaobao on 2016/8/27.
 */
export function formatDate (date) {
    const DAT_OF_WEEK = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    const MONTH = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

    let dayOfWeek = new Date(date).getDay();
    let month = +date.substr(5,2);
    let day = +date.substr(8,2);

    return {
        dayOfWeek: DAT_OF_WEEK[dayOfWeek],
        month: MONTH[month-1],
        day: day
    }
}
