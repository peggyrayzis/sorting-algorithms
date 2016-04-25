describe('Bubble Sort', function(){
	it('handles an empty array', function(){
		expect( bubbleSort([]) ).toEqual( [] );
	});
	it('handles an single element array', function(){
		expect( bubbleSort([2]) ).toEqual( [2] );
	});
	it('handles a small array', function(){
		expect( bubbleSort([7,2,5]) ).toEqual( [2,5,7] );
	});
	it('handles a big array', function(){
		expect( bubbleSort([6,3,8,4,2,9,7,1]) ).toEqual( [1,2,3,4,6,7,8,9] );
	});
});
describe('Sort Pair', function(){
	it('calls the helper fn sortPair more than once', function(){
		spyOn(window,'sortPair').and.callThrough();
		bubbleSort([6,3,8,4,2,9,7,1]);
		expect(sortPair.calls.count()).toBeGreaterThan(1);
	})
});