import {Message} from "./teeup-message";
//TODO: Match with API
export class TeeupDetails {
    id: Number;
    name: String;
    decision: Number;
    going: Number;
    msgCount: Number;
    msgLikeNumber: Number;
    wtfIsThis: Number;
    date: String;
    location: String;
    time: String;
    conversation: Array<Message>;
    gamePlan: {
        when:
            {
                time: String,
                day: String,
                thumbs: [Number, Number],
            },
        where:
            {
                locationName: String,
                locationPlace: String,
                thumbs: [Number, Number],
            }
    }
}
