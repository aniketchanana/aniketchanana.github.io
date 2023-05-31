// if (window.location.hostname === prodConfig.hostname) {
mixpanel.init(prodConfig.mixPanelToken, { debug: true });
// } else {
//   window.mixpanel.track = (...args) => {
//     console.log("Event fired ===>", args[0]);
//   };
// }

// Set this to a unique identifier for the user performing the event.
// eg: their ID in your database or their email address.
// mixpanel.identify(/* \"<USER_ID\"> */);

// Track an event. It can be anything, but in this example, we're tracking a Signed Up event.
// Include a property about the signup, like the Signup Type
