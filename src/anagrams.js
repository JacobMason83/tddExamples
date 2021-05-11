import { getLetterCount } from './letter-count'
import { isEqual } from 'lodash'

export const checkIfAnagramOrNot = (string1, string2)  => {
    const string1letters = getLetterCount(string1)

    const string2letters = getLetterCount(string2)

    return  isEqual(string1letters, string2letters);
}