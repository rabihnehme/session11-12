
exports.getDate = function() {

const today = new Date();

const options = {
    weekday: "long",
    day: "numeric",
    month: "short"
};

return today.toLocaleDateString(undefined , options);

};

exports.getDay = function() {

    const today = new Date();
    
    const options = {
        weekday: "long",
    };
    
    return today.toLocaleDateString(undefined , options);

}


