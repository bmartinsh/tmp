  // Exercise 1 : return true with a probability of 20%.
const hasNewMessage = () => {
  return Math.random() < 0.2
  }

  // Exercise 2 : return a random message as an object with two keys, subject and sender
const newMessage = () => {
  let check = hasNewMessage()

// This is with API
//   fetch("https://raw.githubusercontent.com/johncalvinroberts/03-Wagon-Race/master/stories.json")
//       .then(response => response.json())
//       .then((data) => {
//         console.log(data);
//         // Add your code to get `name` and `text` values from data and put into the `sender` and `subject` message object.

//    return newMessage = {sender : sender , subject : subject}; // This is wrong!!
//  });
//};
//const myMsgs = newMessage() // myMsgs will be undefined.
// End of API

// This is the newMessage flow from the inbox.js

// Setup the random list of Senders
let senderList = ["GitHub Team", "Arnold Schwarzenegger", "Dark Vador" ]
// https://stackoverflow.com/questions/46907458/how-to-select-an-random-index-from-randomly-selected-object
let randomSenderIndex = senderList.length;
let randomSender = senderList[Math.floor(Math.random() * senderList.length)]
// Setup the random list of Subjects
let subjectList = ["Welcome to Github", "I'm coming", "I'm back" ]
let randomSubjectIndex = subjectList.length;
let randomSubject = subjectList[Math.floor(Math.random() * subjectList.length)]
// Return an Object with two keys
  return newObject = {sender : randomSender , subject : randomSubject}
// Example : {sender: "Dark Vador", subject: "Welcome to Github"}
}

  // Exercise 3 : append the given message to the DOM (as a new row of `#inbox`)
const appendMessageToDom = ()   => {
 // Call the previous function newMessage into appendMessageToDom
    const obj = newMessage();
    // Do QuerySelector on Unread DOM
    const list = document.querySelector("#inbox > div.row.message.unread");
    // Add a div row into the Unread DOM
    list.insertAdjacentHTML('beforebegin', `
    <div class="row message unread">
      <div class="col-3">${obj.sender}</div>
      <div class="col-9">${obj.subject}</div>
    </div>
    `);
    // DOM from the Counter of Unread emails
    const counter = document.querySelector("#count")
    // DOM for Unread Messages
    let allUnReadMessages = document.querySelectorAll("#inbox > div.row.message.unread")
    // Check the length to get the value populated in the counter div
    let nbNewEmail = allUnReadMessages.length
    // Changing the value in the counter div using the innerHTML method
    counter.innerHTML = `(${nbNewEmail})`
    // counter in JS retrieving the value under tags
    // Adding the Inbox Counter for Unread Messages on the tab
    document.title = `Inbox (${nbNewEmail})`
  };

  // Exercise 4 : Implement the global refresh logic. If there is a new message,
  //       append it to the DOM. Update the unread counter in title as well.
const refresh = () => {
  // By calling the function hasNewMessage [Do not forget the parenthesis]
  if (hasNewMessage()) {
    // New message will call from the random creation from the previous function
    appendMessageToDom()
  }
  };


// Do not remove these lines:
document.addEventListener("DOMContentLoaded", () => {
  setInterval(refresh, 1000); // Every 1 second, the `refresh` function is called.
});

