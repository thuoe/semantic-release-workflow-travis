const  { sum } =  require('../index');

test('sum 1 and 2 equals 3', () => {
    expect(sum(1, 2)).toBe(3)
});