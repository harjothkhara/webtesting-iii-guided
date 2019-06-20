import { savePerson } from "./helpers.js";

describe('helpers', () => {
    it('should return newly saved person', () => {
      const name = 'brandon';
      const expected = { id: 'abc123', name } //copied id from mock uuid - uncertainty removed!
        
      const actual = savePerson(name);
      
      expect(actual).toEqual(expected)
    });
})