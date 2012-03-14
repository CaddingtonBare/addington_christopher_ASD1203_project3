function (doc) {
    if (doc._id.substr(0, 6) === "sport:"){
        emit(doc._id.substr(6), {
        	"sport": doc.sports[1],
        	"teamname": doc.teamname[1],
        	"nextdate": doc.nextdate[1]
        });
    }
};