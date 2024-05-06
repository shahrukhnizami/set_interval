
var second_html = document.getElementById("Second")
var minutes_html = document.getElementById("Minutes")
var hours_html = document.getElementById("Hours")
var days_html = document.getElementById("Days")

var second24_html = document.getElementById("Second-24")
var minutes24_html = document.getElementById("Minutes-24")
var hours24_html = document.getElementById("Hours-24")
var days24_html = document.getElementById("Days-24")


var now = new Date()
var eid = new Date('6/17/2024')
var dif = eid - now



var eid_countdown = setInterval(function () {

    dif = dif -1000
   
    var second = dif / 1000
    var minutes = dif / 1000 / 60
    var hours = dif / 1000 / 60 / 60
    var days = dif / 1000 / 60 / 60 / 24
    second_html.innerText = Math.floor(second)
    minutes_html.innerText = Math.floor(minutes)
    hours_html.innerText = Math.floor(hours)
    days_html.innerText = Math.floor(days)

}, 1000);


var eid24_countDowm = setInterval( function(){
    var currentDate = new Date()


    var second24 = 60- currentDate.getSeconds()
    var minutes24 = 60 - currentDate.getMinutes()
    var hours24 = 24 - currentDate.getHours()
    var days24 = dif / 1000 / 60 / 60 / 24
    second24_html.innerText = Math.floor(second24)
    minutes24_html.innerText = Math.floor(minutes24)
    hours24_html.innerText = Math.floor(hours24)
    days24_html.innerText = Math.floor(days24)

}
,1000)

//     stop Watch   

var min_html = document.getElementById("min")
var sec_html = document.getElementById("sec")
var milisec_html = document.getElementById("milisec")
var start_html = document.getElementById("startBtn")


var seconds = 0
var milliSeconds = 0
var minutes = 0
var watchinterval


function start(){

    watchinterval=setInterval (function (){
        milliSeconds++
        if(milliSeconds>=99){
            seconds++
            milliSeconds=0
        }
        if(seconds >= 59){
            minutes++
            seconds=0
        }
        milisec_html.innerText=milliSeconds
        sec_html.innerText=seconds  < 10 ? '0' + seconds : seconds
        min_html.innerText= minutes < 10 ? '0' + minutes : minutes
        start_html.disabled = true

    },10)
}
 function stop(){
    clearInterval(watchinterval)
    start_html.disabled = false

 }

 function reset(){
    clearInterval(watchinterval)
    milliSeconds = 0
    seconds = 0
    minutes = 0
    min_html.innerText = 0
    sec_html.innerText = 0
    milisec_html.innerText = 0
    start_html.disabled = false
 }