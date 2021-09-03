const uniteUnique = require('./uniteUnique');

describe('uniteUnique', () => {
    it('runs', () => {
        expect(uniteUnique([1, 2])).toStrictEqual([1, 2]);
    });

    it('returns one array with no duplicates in order given', () => {
        expect(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1])).toStrictEqual([
            1, 3, 2, 5, 4,
        ]);
        expect(uniteUnique([1, 2, 3], [5, 2, 1])).toStrictEqual([1, 2, 3, 5]);
        expect(
            uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8])
        ).toStrictEqual([1, 2, 3, 5, 4, 6, 7, 8]);
    });
});
