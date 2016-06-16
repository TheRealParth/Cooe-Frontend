import {TeeupDetails} from './teeup-details.ts';
import {Message} from './teeup-message.ts';
var message1: Message = {
  from: "Rich",
  message: "Much better. I'm in.",
  time: "Jan 14, 2012 4:14 PM",
  type: 1,
  about: "Werblin Gym",
};
var message2: Message = {
  from: "Rich",
  message: "Much better. I'm in.",
  time: "Jan 14, 2012 4:14 PM",
  type: 1,
  about: "Werblin Gym",
}
export var TEEUP_DETAILS: TeeupDetails =
{
  id: 0,
  name: "Brainstorming Session",
  decision: 2,
  going: 3,
  msgCount: 5,
  msgLikeNumber: 2,
  wtfIsThis: 2,
  date: "Mon Feb 25, 3:00PM",
  location: "Student Center 2F",
  time: '5m',
  conversation: [ message1, message2 ],
  gamePlan: {
    when: {
      time: "4:00 PM",
      day: "Wednesday, Jan 18",
      thumbs: [3, 0],
    },
    where: {
      locationName: "Werblin Gym",
      locationPlace: "Bursch Campus",
      thumbs: [2, 1],
    }
  }
};
