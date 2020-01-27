// assmptions //
// 1 - Category will always have the object key 'category'
// 2 - each object in the input array will have an equal number of sources (although this number can be any amount)
// 3 - if an objects total score is equal to anothers, then they will share their ranking.
// 4 - assume that 

// terminology //
// scoreObject (each object from input array)
// source (each keyvalue pair from the scoreObject OR sourceArray )


results = [
    {
    "category":"cat1",
    "src1":20,
    "src2":30,
    "src3":40,
    "src4":50,
    "src5":50
    },
    {
    "category":"cat1",
    "src1":10,
    "src2":0,
    "src3":20,
    "src4":20,
    "src5":100
    }
    ]

////////////////////////////////
let calculatedScoreObjects = 
results.map((scoreObject) => {
    let final_rank = 0;
    let newSourceObject = {}        //declaring a new object to populate
    newSourceObject.category = scoreObject.category     //adding the category to the new object
      
    //STEP 1 - CALCULATE TOTAL SCORE & SCORE RANKS FOR EACH OBJECT
    Object.keys(scoreObject).forEach((key) => {
      let rank = 1
      if (key !== 'category') {
        final_rank = final_rank + scoreObject[key]  //Adding up the score.
        newSourceObject[key] = calculateSourceRank(scoreObject, rank, key) //calculating the rank of each source
      }
    })
    newSourceObject.final_rank = final_rank //adding total_score prop to the new object
    return newSourceObject
})
    
//to calculate each source rank
function calculateSourceRank(scoreObject, rank, key) {
    for (let i = 1; i < Object.keys(scoreObject).length; i++) {
      if (scoreObject[Object.keys(scoreObject)[i]] > scoreObject[key]) {
        rank++
      }
    } 
   return rank
}

//STEP 2 - COMPARE OBJECTS FOR FINAL RANK
let output = calculatedScoreObjects.map((object) => {
    let rank = 1;
    for (let i = 0; i < calculatedScoreObjects.length; i++) {
        if (calculatedScoreObjects[i].final_rank > object.final_rank) {
          rank++
        }
        object.final_rank = rank
      } 
  return object
})

//console.log(calculatedScoreObjects)
console.log(output)