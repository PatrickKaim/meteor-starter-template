import {check} from "meteor/check";
import {Meteor} from "meteor/meteor";

if (Meteor.isServer) {
    Meteor.methods({
        'doesUserExistByEmail'({email}) {
            check(email, String);
            return Meteor.users.find( {
                emails: {
                    $elemMatch: {
                        address: email
                    }
                }
            } ).count();
        }
    });
}