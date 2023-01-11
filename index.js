

function runExperiment(sampleSize) {
const valueCounts = [0, 0, 0, 0, 0, 0];
for (let i=0; i<sampleSize; i++){
  let randomNumber= Math.floor(Math.random() * 6+1);
  if(randomNumber===1){
    valueCounts[0] += 1;
  }
  if(randomNumber===2){
    valueCounts[1] += 1;
  }
  if(randomNumber===3){
    valueCounts[2] += 1;
  }
  if(randomNumber===4){
    valueCounts[3] += 1;
  }
  if(randomNumber===5){
    valueCounts[4] += 1;
  }
  if(randomNumber===6){
    valueCounts[5] += 1;
  }
}
  const results = [];
for (let i=0 ; i<valueCounts.length; i++){
  results.push((valueCounts[i]*100 / sampleSize).toFixed(2));
  }
  return
}
function main() {
const sampleSizes = [100, 1000, 1000000];
for(let i = 0; i < sampleSizes.length ; i++){
runExperiment(sampleSizes[i]);
};
};

main();