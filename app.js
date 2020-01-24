// assmptions //
// 1 - Category will always have the object key 'category'
// 2 - each object in the input array will have an equal number of sources (although this number can be any amount)
// 3 - if an objects total score is equal to anothers, then they will share their ranking.
// 4 - assume that 

// terminology //
// scoreObject (each object from input array)
// source (each keyvalue pair from the scoreObject OR sourceArray )


results = [ //input
    {  
    "category":"Red",
    "source1":20,
    "source2":30,
    "source3":40,
    "source4":50 }, // 140 => final_rank: 1
    { 
    "category":"Yellow",
    "source1":30,
    "source2":10,
    "source3":40,
    "source4":50 } // 130  => final_rank: 2
] 


///Exercise begins

let output = 
    results.map((scoreObject) => {
        let total_score = 0;
        //declaring a new object to populate
        let newSourceObject = {}
        newSourceObject.category = scoreObject.category

        
    //CALCULATING TOTAL SCORE & CREATING SOURCE ARRAY
       let sourceArray = [];
        Object.keys(scoreObject).forEach((key) => {
            if (key !== 'category') {
                total_score = total_score + scoreObject[key]
                sourceArray.push([key, scoreObject[key]])
            }
        })

    //ASSIGNING RANKS BASED ON SCORE  
        sourceArray.forEach((source) => {
            //we take each score array
            let rank = 1
            for (let i = 0; i < sourceArray.length; i++) {
                if (sourceArray[i][1] > source[1]) {
                    rank++
                }
            }
        //adding each source to the new object with its rank   
        newSourceObject[source[0]] = rank
        })
      //adding total score to the new object
      newSourceObject.total_score = total_score
      //output.push(newSourceObject)
      return newSourceObject
    })

console.log(output)
