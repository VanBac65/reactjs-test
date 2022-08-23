const findMonth = (val) => {
    if (val === 0) {
        return "Jan";
    }
    if (val === 1) {
        return "Feb";
    }
    if (val === 2) {
        return "Mar";
    }
    if (val === 3) {
        return "Apr";
    }
    if (val === 4) {
        return "May";
    }
    if (val === 5) {
        return "Jun";
    }
    if (val === 6) {
        return "Jul";
    }
    if (val === 7) {
        return "Aug";
    }
    if (val === 8) {
        return "Sep";
    }
    if (val === 9) {
        return "Oct";
    }
    if (val === 10) {
        return "Nov";
    }
}

export const convertTime = (d) => {
    const date = new Date(d)
    return findMonth(date.getMonth()) + " " + date.getDate() + "," + date.getFullYear();
}