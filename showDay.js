function showDay(){
    var input = document.getElementById("myText").value;
    var dayofWeek=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    var date = new Date(input);
    var d=date.getDay();
    if( dayofWeek[d]==null){alert('E.g. June 20, 2018 or 2018/6/20')}
    else document.getElementById("demo").innerHTML =  dayofWeek[d];
};
