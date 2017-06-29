var fnTimeCountDown = function (d, o) {
  var f = {
    zero: function (n) {
      var n = parseInt(n, 10)
      if (n > 0) {
        if (n <= 9) {
          n = '0' + n;
        }
        return String(n)
      } else {
        return "00"
      }
    },
    dv: function () {
      d = d || Date.UTC(2050, 0, 1) // 设定目标时间
      var future = new Date(d)
      var now = new Date()
      var dur = Math.round((future.getTime() - now.getTime()) / 1000) + future.getTimezoneOffset() * 60
      var pms = {
        sec: "00",
        mini: '00',
        hour: '00',
        day: "00",
        month: "00",
        year: '0'
      }
      if (dur > 0) {
        pms.sec = f.zero(dur % 60)
        pms.mini = Math.floor((dur / 60)) > 0 ? f.zero(Math.floor((dur / 60)) % 60) : "00"
        pms.hour = Math.floor((dur / 3600)) > 0 ? f.zero(Math.floor((dur / 3600)) % 24) : "00"
        pms.day = Math.floor((dur / 86400)) > 0 ? f.zero(Math.floor((dur / 86400)) % 30) : "00"
        //月份，以实际平均每月秒数计算
        pms.month = Math.floor((dur / 2629744)) > 0 ? f.zero(Math.floor((dur / 2629744)) % 12) : "00"
        //年份，按按回归年365天5时48分46秒算
        pms.year = Math.floor((dur / 31556926)) > 0 ? Math.floor((dur / 31556926)) : "0"
      }
      return pms
    },
    ui: function(){
      if(o.sec) {
        o.sec.innerHTML = f.dv().sec
      }
      if(o.mini) {
        o.mini.innerHTML = f.dv().mini
      }
      if(o.hour) {
        o.hour.innerHTML = f.dv().hour
      }
      if(o.day) {
        o.day.innerHTML = f.dv().day
      }
      if(o.month) {
        o.month.innerHTML = f.dv().month
      }
      if(o.year) {
        o.year.innerHTML = f.dv().year
      }
      setTimeout(f.ui,1000)
    }
  }
  f.ui()
}

var sec = document.getElementById('sec')
var mini = document.getElementById('mini')
var hour = document.getElementById('hour')

var d = Date.UTC(2017,6,28,23,00)

var obj = {
  sec: sec,
  mini: mini,
  hour: hour
}
fnTimeCountDown(d,obj)
