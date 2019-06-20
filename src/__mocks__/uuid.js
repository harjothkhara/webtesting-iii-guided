//pretender - like global middleware --applies to all tests. we isolate the thing that we do not control. we can predict it and test the other stuff that matters.
//mock always
module.exports = () => 'abc123'