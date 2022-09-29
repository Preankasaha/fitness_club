const addTODb = breaktime => {
    localStorage.setItem("break-time", JSON.stringify(breaktime));

}
const getStoredData = () => {
    let storedBreakTime;
    const storedTime = localStorage.getItem('break-time');
    if (storedTime) {
        storedBreakTime = JSON.parse(storedTime);
    }
    return storedBreakTime;
}
export {
    addTODb,
    getStoredData
}