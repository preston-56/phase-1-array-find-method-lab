// code your solution here

const record = [
  { year: "2015", result: "W" },
  { year: "2014", result: "N/A" },
  { year: "2013", result: "L" },
  //...
];

//   Array.prototype.find()
function superbowlWin (record){
    const result = record.find(element => element.result==='W');
    return result !== undefined ? result.year : result;
};

superbowlWin(record);
