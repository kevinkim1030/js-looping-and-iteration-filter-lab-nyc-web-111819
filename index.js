// Code your solution in this file

function findMatching(drivers, string){
  // drivers.filter(function(driver) { return drivers[string] === driver});
  let result = drivers.filter(driver => driver.toLowerCase() === string.toLowerCase());
  return result;
}

function fuzzyMatch(drivers, string){
  let result = drivers.filter(driver => driver.indexOf(string) === string.indexOf(string));
  return result;
}


// function fuzzyMatch (drivers, string) {
//   let lengthOfString = string.length;
//   let result = drivers.filter(driverName => driverName.slice(0, lengthOfString) === string);
//   return result;
// }


function matchName(drivers, string){
  let result = drivers.filter(driver => driver.name === string);
  return result;
}






//   describe('fuzzyMatch()', function () {
//     const drivers = [];

//     beforeEach(function () {
//       drivers.length = 0;

//       drivers.push('Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby');
//     });

//     it('returns a driver if beginning provided letters match', function () {
//       expect(fuzzyMatch(drivers, 'Sa')).to.have.members(['Sammy', 'Sarah', 'Sally']);
//     });

//     it('does not return drivers if only middle or ending letters match', function () {
//       expect(fuzzyMatch(drivers, 'y')).to.have.members([]);
//     });

//     it('does not return drivers if only middle or ending letters match', function () {
//       expect(fuzzyMatch(drivers, 'mm')).to.have.members([]);
//     });
//   });

//   describe('matchName()', function () {
//     it('accesses the data structure to check if name matches', function () {
//       const drivers = [
//         {
//           name: 'Bobby',
//           hometown: 'Pittsburgh' },
//         {
//           name: 'Sammy',
//           hometown: 'New York' } ,
//         {
//           name: 'Sally',
//           hometown: 'Cleveland' },
//         {
//           name: 'Annette',
//           hometown: 'Los Angeles' },
//         {
//           name: 'Bobby',
//           hometown: 'Tampa Bay' }
//       ];

//       expect(matchName(drivers, 'Bobby')).to.eql([
//         {
//           name: 'Bobby',
//           hometown: 'Pittsburgh'
//         },
//         {
//           name: 'Bobby',
//           hometown: 'Tampa Bay'
//         }
//       ]);
//     });
//   });
// });
