function getName(){
  var name = document.getElementById("name").value;
  if(name === ""){
    result = document.getElementById("result").innerHTML = "Please write some name :)";
  }else if (name.endsWith("a") && !name.match('Kosma') && !name.match("Kuba")){
  result = document.getElementById("result").innerHTML = name + " is a feminine name";
}else{
    result = document.getElementById("result").innerHTML = name + " is a masculine name";
}
}