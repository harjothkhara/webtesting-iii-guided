const uuid = require('uuid');
// Test Double/Fake - sometimes your code depends on things that are out of your control, unpredictable. Bring in mocking when there is some external thing that you cannot control the outcome, such as uuid (changes on every instance)
// mocks or spy(tests to see if your component is wired correctly e.g did i connect my method(event handler) correctly to that button, testing HOC, props being passed correctly, am i passing the right method, did i pass the correct values. no need to install - out of the box!
// new Date()

// make person (name) => { id, name }

module.exports = {
    savePerson,
    save
}

function savePerson(name) {
    return {
        id: uuid(), //now coming from mock uuid instead of uuid library
        name
    }
}

