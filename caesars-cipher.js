function rot13(str) {
  let cipherArray = [];
  for(let i = 0; i < str.length; i++){
    if(isLetter(str.charAt(i))){
      cipherArray.push(shift(str.charAt(i)))
    }
    else{
      cipherArray.push(str.charAt(i))
    }
  }
  return cipherArray.join("")
}

function shift(str){
  switch(str){
    case "A":
      return "N"
    case "B":
      return "O"
    case "C":
      return "P"
    case "D":
      return "Q"
    case "E":
      return "R"
    case "F":
      return "S"
    case "G":
      return "T"
    case "H":
      return "U"
    case "I":
      return "V"
    case "J":
      return "W"
    case "K":
      return "X"
    case "L":
      return "Y"
    case "M":
      return "Z"
    case "N":
      return "A"
    case "O":
      return "B"
    case "P":
      return "C"
    case "Q":
      return "D"
    case "R":
      return "E"
    case "S":
      return "F"
    case "T":
      return "G"
    case "U":
      return "H"
    case "V":
      return "I"
    case "W":
      return "J"
    case "X":
      return "K"
    case "Y":
      return "L"
    case "Z":
      return "M"
  }
}

function isLetter(str) {
  return (/[a-zA-Z]/).test(str)
}

rot13("SERR PBQR PNZC");

