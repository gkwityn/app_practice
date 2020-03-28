function(id){
    let today = new Date();
    let hours = today.getHours();
    let min = today.getMinutes();
    let sec = today.getSeconds();
    
    let calc_min = 360*(min/0.5);

    document.getElementById(min_hand_id).style.property = "newstyle"
}