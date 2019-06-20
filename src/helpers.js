const uuid = require('uuid');
// Test Double/Fake - sometimes your code depends on things that are out of your control, unpredictable. Bring in mocking when there is some external thing that you cannot control the outcome, such as uuid (changes on every instance)

// new Date()

// make person (name) => { id, name }

module.exports = {
    savePerson
}

function savePerson(name) {
    return {
        id: uuid(), //now coming from mock uuid instead of uuid library
        name
    }
}