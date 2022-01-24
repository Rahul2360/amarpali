function date_time() {
    let date = new Date();
    let dates = date.toLocaleDateString();
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    let show = hour + ':' + min + ':' + sec
    document.getElementById('time').innerHTML = show + " on date " + dates;
}