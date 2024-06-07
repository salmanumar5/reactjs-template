
export const GetPageCount = (limit, page, index) => {
    var no = limit * page - limit + index + 1
    return no
  }
  
  export const GetFullYear = (timestamp) => {
    var t = parseInt(timestamp)
    var a = new Date(t);
    var months = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var hour = a.getHours();
    var min = a.getMinutes();
    var sec = a.getSeconds();
    var time = date + '-' + month + '-' + year;
    return time;
  }

  