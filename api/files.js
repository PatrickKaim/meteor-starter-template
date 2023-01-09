import {FilesCollection} from "meteor/ostrio:files";

const Avatars = new FilesCollection({
    debug: true,
    storagePath: 'public/uploads/avatars',
    collectionName: 'avatars',
    chunkSize: 'dynamic',
    //permissions: 0o774,
    //parentDirPermissions: 0o774,
    allowClientCode: false, // Disallow remove files from Client
    onBeforeUpload: function (file) {
        // Allow upload files under 10MB, and only in png/jpg/jpeg formats
        if (file.size <= 1024 * 1024 * 10 && /png|jpe?g/i.test(file.extension)) {
            return true;
        }
        return 'Please upload image, with size equal or less than 10MB';
    }
});

if (Meteor.isServer) {
    Avatars.denyClient();
    Meteor.publish('files.images.all', function() {
        return Avatars.find().cursor;
    })
} else {
    Meteor.subscribe('files.images.all');
}

export default Avatars;