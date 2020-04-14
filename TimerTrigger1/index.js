module.exports = function (context, myTimer) {
    var timeStamp = new Date().toISOString();

    if (myTimer.isPastDue) {
      context.log("JavaScript is running late!");
    }
    context.log("JavaScript timer trigger function ran!", timeStamp);

    // Even if you want to use a hard coded message in the binding, you must at least
    // initialize the message binding.
    context.bindings.message = {};
  
    context.bindings.message.body = "Don't forget to feed your sourdough!";
    context.bindings.message.from = process.env.SENDER_NUMBER;
    context.bindings.message.to = process.env.RECIPIENT_NUMBER;

    context.done();
};