import { savePerson } from "./helpers.js";

//local to this test file. All the tests in this file are going to mock this uuid
jest.mock('uuid', () => {
    return () => 'abc234'; //now a hierarchy on which mock is going to apply 
})

describe('helpers', () => {
    it('should return newly saved person', () => {
      const name = 'brandon'; //abc123
      const expected = { id: 'abc234', name } //copied id from mock uuid - uncertainty removed!
        
      const actual = savePerson(name);
      
      expect(actual).toEqual(expected)
    });
});

describe('spies', () => { //report whats happening 'mr spy' why isn't my event handler working when its clicked?
    it('reports usage', () => {
        const bond = jest.fn();

        // bond('shoot');
        save('charles', bond);
                     //matches that come with it
        expect(bond).toHaveBeenCalled();
        expect(bond).toHaveBeenCalledTimes(2);
        expect(bond).toHaveBeenCalledWith('charles');
        
    });
});

function save(name, saveFunction) {
    saveFunction(name);
    saveFunction(name);
}
                        //function exists outside..was the spy called when i clicked on the open button b/c it will tell you whether the component was written the right way
//render{<Toolbar lock={this.lock} />}

//you want to test your code the way a user would check it manually
// A spy is always going to go in place of a function so you can interrogate how a function was used