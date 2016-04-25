describe('Split Array function', function() {
 it('is able to split an array into two halves', function() {
   expect(split([2,4,3,1])).toEqual([[2,4],[3,1]]);
   expect(split([2,4,3])).toEqual([[2,4],[3]]);
   // Consider what you would like to do for odd-length arrays.
   // expect([1,2,3])
 });
});

describe('Merge Sort', function(){
 it('is able to merge two sorted arrays into one sorted array', function(){
   // test the merging algorithm
   expect(merge([1,3],[2,4])).toEqual([1,2,3,4]);
   expect(merge([2,3],[4])).toEqual([2,3,4]);
 });
});

describe('mergeSort Function', function(){
 //implements the recursive mergeSort function
 it('merge an unsorted array', function(){
   // test the merging algorithm
   expect(mergeSort([1,4,6,78,8,6])).toEqual([1,4,6,6,8,78])
   expect(mergeSort([67,2,32])).toEqual([2,32,67])
 });
});


