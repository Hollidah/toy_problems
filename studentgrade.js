
function gradeGenerator(score) {

    if (score < 0 || score > 100) {
        return "Invalid grade";
    }

    if (score >= 80) {
        return "A";
    } else if (score >= 60) {
        return "B";
    } else if (score >= 50) {
        return "C";
    } else if (score >= 40) {
        return "D";
    } else {
        return "E"; 
    }
}

console.log(gradeGenerator(89)); 
console.log(gradeGenerator(72)); 
console.log(gradeGenerator(42)); 
console.log(gradeGenerator(39));

    
  
    


