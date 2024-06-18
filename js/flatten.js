const flatten = (...data) => {
   const result = [];
   for (let i = 0; i < data.length; i++) {
     const currentEl = data[i];
     if (Array.isArray(currentEl)) {
       result.push(...flatten(...currentEl));
     } else {
       result.push(currentEl);
     }
   }
   return result;
 };
 
 console.log(flatten([1, ['2', [true]], [4], 5, [7, [10]]]));
 