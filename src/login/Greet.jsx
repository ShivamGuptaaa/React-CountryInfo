const Greet= () => {
    let curDate = new Date();
    curDate = curDate.getHours();
    let tmp = {};
    if (curDate >= 7 && curDate <= 11) {
      tmp = "Good Morning, ";
    } else if (curDate >= 12 && curDate <= 17) {
        tmp ="Good Afternoon, ";
      } else if (curDate >= 18 && curDate <= 21) {
          tmp ="Good Evening, "
    } else {
        tmp = "Good Night, ";
    }
  return tmp;
  }  

  export default Greet;