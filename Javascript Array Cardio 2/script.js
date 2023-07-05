const people = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 }
  ];

  const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }
  ];

  // Some and Every Checks
  // Array.prototype.some() // is at least one person 19 or older?
  // long hand syntax  
//   const isAdult = people.some(function(person){
//         const currentYear = (new Date()).getFullYear();
//         if (currentYear - person.year >= 19){
//             return true;
//         }
//     });

    // shorthand 1
//   const isAdult = people.some(person => {
//     const currentYear = (new Date()).getFullYear();
//     return currentYear - person.year >= 19;
//   });

// shorthand  2
    //  const isAdult = people.some
    //(person => (new Date().getFullYear()) - person.year >= 19);
    
    
//     const findAdult = people.every
//     (person => (new Date().getFullYear()) - person.year >= 19);

//   console.log(findAdult)
  // Array.prototype.every() // is everyone 19 or older?



  // Array.prototype.find()
  // Find is like filter, but instead returns just the one you are looking for
  // find the comment with the ID of 823423

  // long hand 
//   const findComment = comments.find(function(comment){
//     if(comment.id === 823423){
//         return true;
//     }
//   });

// short hand
// const findComment = comments.find(comment=>{
//     return comment.id === 823423;
// });


  // Array.prototype.findIndex()
  // Find the comment with this ID
  // delete the comment with the ID of 823423

//   const findIndex = comments.findIndex(comment => comment.id === 823423);
//      comments.splice(findIndex, 1);
//   console.table(comments);


//   const newComments = [
//     ...comments.slice(0, index),
//     ...comments.slice(index + 1)
//   ];