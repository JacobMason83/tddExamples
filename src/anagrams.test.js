import { checkIfAnagramOrNot } from './anagrams'
import { expect } from 'chai'

describe('checkIfAnagramOrNot -- basic functionality', () => {
    it('returns true when two anagrams are passed in', () => {
        const expected = true;
        const actual = checkIfAnagramOrNot('listen', 'silent');
        expect(actual).to.equal(expected);
    });
    it('returns false when either of the strings has extra letters', () => {
        const expected = false;
        const actual = checkIfAnagramOrNot('elbows', 'below');
        expect(actual).to.equal(expected)
        const actual2 = checkIfAnagramOrNot('below', 'elbows')
        expect(actual2).to.equal(expected)
    });
    it('returns false when the strings have the same letters but not same amount', () => {
        const expected = false ;
        const actual = checkIfAnagramOrNot('listens', 'silent')
        expect(actual).to.equal(expected)
    });
})