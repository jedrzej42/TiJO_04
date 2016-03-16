describe('app', function () {
    'use strict';
    var app = window.app;

    describe('Division function', function () {
        it('should divide number a by b', function () {
            expect(app.divide(10, 5)).toEqual(2);
            expect(app.divide(15, 3)).toEqual(5)
        });
        it('should divide number a by b only when a is more than 1 and less than 100', function () {
            expect(app.divide(20, 5)).toEqual(4);
        });
        it('should return false when a is less than 1', function () {
            expect(app.divide(-2, 6)).toEqual(false);
        });
        it('should return false when a is more than 100', function () {
            expect(app.divide(105, 3)).toEqual(false)
        });
        it('should divide number a by b when a is 1', function () {
            expect(app.divide(1, -1)).toEqual(-1);
        });
        it('should divide number a by b when a is 100', function () {
            expect(app.divide(100, 10)).toEqual(10);
        });
        it('should divide number a by b when a is 0', function () {
            expect(app.divide(0, 1)).toEqual(false);
        });
        it('should divide number a by b when a is 101', function () {
            expect(app.divide(101, 10)).toEqual(false);
        });
        it('should return false when b is grater than a', function () {
            expect(app.divide(101, 103)).toEqual(false);
        });
        it('should return false when b is equal 0', function () {
            expect(app.divide(101, 0)).toEqual(false);
        });
    })
    describe('Descending function', function () {
        it('should return false when numberTo is greater than numberFrom', function () {
            expect(app.getDescendingNumbers(10,20)).toEqual(false);
        });
        it('should return false when numberTo is equal numberFrom', function(){
            expect(app.getDescendingNumbers(10,10)).toEqual(false);
        });
        it('should return descending numbers when numberFrom is greater than numberTo', function(){
            expect(app.getDescendingNumbers(5,1)).toEqual('5 4 3 2 1');
        });
        it('should return false when numberFrom is not a number', function(){
            expect(app.getDescendingNumbers('a',10)).toEqual(false);
        });
        it('should return false when numberTo is not a number', function(){
            expect(app.getDescendingNumbers(10,'b')).toEqual(false);
        });

    })

    describe('Area of Trapezoid function', function () {
        it('should return area of trapezoid', function () {
            expect(app.areaOfTrapezoid(2,4,2)).toEqual(6);
            expect(app.areaOfTrapezoid(4,8,6)).toEqual(36);
        });
        it('should return false when a is less than 0', function () {
            expect(app.areaOfTrapezoid(-1,4,2)).toEqual(false);
        });
        it('should return false when b is less than 0', function () {
            expect(app.areaOfTrapezoid(2,-4,2)).toEqual(false);
        });
        it('should return false when h is less than 0', function () {
            expect(app.areaOfTrapezoid(8,4,-2)).toEqual(false);
        });
        it('should return false when a, b or c is not a number', function () {
            expect(app.areaOfTrapezoid('a',4,2)).toEqual(false);
            expect(app.areaOfTrapezoid(8,'b',2)).toEqual(false);
            expect(app.areaOfTrapezoid(5,9,'c')).toEqual(false);
        });

    })
});
