function countDown(num) {
  if (num <= 0) {
    //base case
    console.log("all done");
    return; //final return
  }
  console.log(num);
  num--;
  //5,4,3,2,1,
  countDown(num);
  //0,1,2,3,4,5
  console.log(num); //after recursive call will count up
}

countDown(10);
