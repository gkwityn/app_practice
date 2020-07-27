function getTime(id) {

    let today = new Date();
    let hours = today.getHours() - 12;
    let min = today.getMinutes(); 
    let sec = today.getSeconds();
   

    let calc_min_angle = min * 6;
    let calc_hour_angle = hours * 30;    
    let calc_sec_angle =  sec * 6;
    
    //alert(String(calc_hour_angle) + " " + String(calc_min_angle) + " " + String(calc_sec_angle));

    document.getElementById("min_hand_id").style.webkitTransform = "rotate(" + String(calc_min_angle) + "deg)";
    document.getElementById('hour_hand_id').style.webkitTransform = "rotate(" + String(calc_hour_angle) + "deg)";
    document.getElementById("sec_hand_id").style.webkitTransform = "rotate(" + String(calc_sec_angle) + "deg)";

};

