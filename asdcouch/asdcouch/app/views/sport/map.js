function (doc) {
    if (doc._id.substr(0, 6) === "sport:"){
        emit(doc._id);
    }
};