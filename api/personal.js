import SimpleSchema from "simpl-schema";

export const PersonalCollection = new Mongo.Collection('personal');
const Location = new SimpleSchema({
    address: {type:String},
    city: {type:String},
    postalCode: {type:String},
    countryCode: {type:String}
});
PersonalCollection.schema = new SimpleSchema({
    userId: {type:String, regEx: SimpleSchema.RegEx.Id, optional: false},
    mainLocation: {type:Location},
    created: {type:Date},
    changed: {type:Date}
});

if (Meteor.isServer) {
    Meteor.publish('personal', function() {
        return PersonalCollection.find({userId: Meteor.userId()});
    });

    Meteor.methods({
        'AddPersonal'({userId, mainLocation}) {
            return PersonalCollection.insert({
                userId: userId,
                mainLocation: mainLocation,
                created: new Date(),
                changed: null
            })
        }
    });
}