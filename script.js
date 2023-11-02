// function calculateMinCost() {
//   //your code here
  
  
  
// }  
function calculateMinCost() {
  let ropeLengths = document.getElementById('rope-lengths').value;
  let lengths = ropeLengths.split(',').map(item => parseInt(item.trim(), 10));
  
  let resultDiv = document.getElementById('result');
  resultDiv.innerHTML = findMinCost(lengths);
}

function findMinCost(lengths) {
  let minCost = 0;
  
  while (lengths.length > 1) {
    lengths.sort((a, b) => a - b);
    let first = lengths.shift();
    let second = lengths.shift();
    
    let sum = first + second;
    minCost += sum;
    lengths.push(sum);
  }
  
  return minCost;
}
