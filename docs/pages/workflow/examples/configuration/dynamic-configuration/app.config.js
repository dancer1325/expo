const myValue = 'My App';

// 1. export an object -- to define -- your custom config
module.exports = {
    name: myValue,
    version: process.env.MY_CUSTOM_PROJECT_VERSION || '1.0.0',
    // All values in extra will be passed to your app.
    extra: {
        fact: 'kittens are cool',
    },
};