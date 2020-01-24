
    
//example 1
[ //input
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

[ //output
    { 
    "category":"Red",
    "source1":4,
    "source2":3, 
    "source3":2,
    "source4":1, 
    "final_rank":1 }, 
    { 
    "category":"Yellow",
    "source1":3,
    "source2":4,
    "source3":2,
    "source4":1,
    "final_rank":2 } ] 
    

    // example 2
    [ //input
        { 
        "category":"cat1",
        "src1":20, 
        "src2":30,
        "src3":40,
        "src4":50,
        "src5":50 }, 
        { 
        "category":"cat1",
        "src1":10,
        "src2":0,
        "src3":20,
        "src4":20,
        "src5":100 } 
    ] 
    
    [ //output
        { 
        "category":"cat1",
        "src1":5,
        "src2":4,
        "src3":3,
        "src4":1,
        "src5":1,
        "final_rank":1 }, 
        { 
        "category":"cat1",
        "src1":4, 
        "src2":5, 
        "src3":2, 
        "src4":2, 
        "src5":1, 
        "final_rank":2 
    } ] 