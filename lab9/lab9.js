const inventors = [
    { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
    { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
    { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
    { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
    { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
    { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
    { first: "Max", last: "Planck", year: 1858, passed: 1947 },
    { first: "Katherine", last: "Blodgett", year: 1898, passed: 1979 },
    { first: "Ada", last: "Lovelace", year: 1815, passed: 1852 },
    { first: "Sarah E.", last: "Goode", year: 1855, passed: 1905 },
    { first: "Lise", last: "Meitner", year: 1878, passed: 1968 },
    { first: "Hanna", last: "Hammarström", year: 1829, passed: 1909 },
  ];

  let foundBorn=inventors.filter((item)=>item.year>=1500 & item.year<1600)
  console.log(foundBorn)


const giveFullName = inventors.map(({ first, last }) => ({ [first]: last }));
console.log(giveFullName);


let giveSort=inventors.sort((a,b)=>a.year-b.year )
console.log(giveSort)


let giveAllYears=inventors.reduce((acc,cur)=>{
    return acc+(cur.passed-cur.year)
},0)
console.log(giveAllYears)


let giveLimitYear=inventors.every((item)=>item.passed-item.year>=45)
console.log(giveLimitYear)


let givYear=inventors.some((item)=>item.year>=45)
console.log(givYear)




function generateRange(a,b,c){
    let result=[]
    for(let i=a; i<=b; i=i+c){
        result.push(i)
    }
    return result
}

console.log(generateRange(3,15,4))