function showDay(){
    var input = document.getElementById("myText").value;
    var dayofWeek=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    var date = new Date(input);
    var d=date.getDay();
    if( dayofWeek[d]==null){alert('ヽ(⌐■_■)ノ♪♬     *** Plase fill in the date ***  ＼\ ٩(`(エ)´ )و //／ \n                               @@ E.g. (June 20, 2018) @@')}
    else document.getElementById("demo").innerHTML =  dayofWeek[d];
};
