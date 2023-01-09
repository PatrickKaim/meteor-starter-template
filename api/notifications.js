import {Mongo} from "meteor/mongo";
import {Meteor} from "meteor/meteor";
import SimpleSchema from 'simpl-schema';

export const NotificationsCollection = new Mongo.Collection('notifications')
// Todo: had to rollback to simpleSchema v1.13.1, otherwise you get an error that Id doesn't exist
NotificationsCollection.schema = new SimpleSchema({
    stored: {type:Boolean},
    read: {type:Boolean},
    type: {type: String},
    title: {type: String},
    text: {type: String},
    userId: {type: String, regEx: SimpleSchema.RegEx.Id, optional: true},
    created: {type: Date}
});

if (Meteor.isServer) {
    Meteor.publish('notifications', function () {
        return NotificationsCollection.find({userId: Meteor.userId()})
    });

    Meteor.methods({
        'AddNotification'({stored, type, title, text, userId}) {
            // Todo: add validation for the notification data
            // Todo: is it possible to write the notification only to the minimongo?
            //       (so it only stays in the client)
            return NotificationsCollection.insert({
                stored: stored,
                read: false,
                type: type,
                title: title,
                text: text,
                userId: userId,
                created: new Date()
            });
        },
        'DeleteNotification'(_id) {
            return NotificationsCollection.remove(_id);
        }
    });
}