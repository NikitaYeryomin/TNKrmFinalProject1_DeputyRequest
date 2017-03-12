function humantime (timestamp) {
    var months=['січня','лютого',"березня","квітня","травня","червня","липня","серпня","вересня","жовтня","листопада","грудня"];
    var time=(timestamp.slice(8,10)<10?timestamp.slice(9,10):timestamp.slice(8,10))+' '+months[timestamp.slice(5,7)-1]+' '+timestamp.slice(0,4)+' '+timestamp.slice(11,16);
    return time;
}