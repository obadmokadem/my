document.write("<h1>hello</h1>");
document.querySelector("h1").style.color = "blue";
document.querySelector("h1").style.fontsize = "80px";
document.querySelector("h1").style.fontWeight = "bold";
document.querySelector("h1").style.textAlign = "center";
document.querySelector("h1").style.fontFamily = "arial";
console.log(" %cElzero  %cWeb  %cSchool" ,
  "color: red; font-size: 40px" ,
  "color: green; font-size: 40px ; font-weight : bold",
  "color: blue; font-size: 40px")
  console.group( 'group 1')
  console.log('message one')
  console.log("message two")
  console.group("child group")
  console.log('message one')
  console.log('message two')
  console.group("grand child group")
  console.log("message one")
  console.log("message two")
  console.groupEnd()
  console.groupEnd()
  console.groupEnd()
  console.group(' groub 2 ')
  console.log('message one')
  console.log('message two')   
  console.table(["Elzero","Ahmed","Sameh","Gamal","Aya"]);
  var abdo = "اوعا وشك"
  console.log(abdo)
  console.log("hello abdo\n 'mokadem'")