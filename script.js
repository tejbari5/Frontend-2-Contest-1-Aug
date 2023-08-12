let arr = [
  { id: 1, name: "john", age: 18, profession: "developer" },
  { id: 2, name: "jack", age: 20, profession: "developer" },
  { id: 3, name: "karen", age: 19, profession: "admin" },
];

function PrintDeveloper() {
  arr
    .filter((emp) => emp.profession === "developer")
    .forEach((emp) => console.log(emp));
}

function addData() {
  const newEmp = { id: 4, name: "susan", age: 20, profession: "intern" };
  arr.push(newEmp);
  consoleArr();
}

function removeAdmin() {
  arr = arr.filter((emp) => emp.profession !== "admin");
  consoleArr();
}

function concatenateArray() {
  const arr2 = [
    { id: 5, name: "tej", age: 21, profession: "tester" },
    { id: 6, name: "rockey", age: 20, profession: "developer" },
    { id: 7, name: "maddy", age: 25, profession: "software developer" },
  ];
  arr = arr.concat(arr2);
  consoleArr();
}

function consoleArr() {
  console.log("Consoling Array Variable", arr);
}