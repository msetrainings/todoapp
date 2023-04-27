
exports.getDate = getDate;
exports.getDay = getDay;

function getDate() {
    const today = new Date()
    const options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    }
    return today.toLocaleDateString("en-US", options)
  }

function getDay() {
    const today = new Date()
    const options = {
        weekday: "long",
    }
    return today.toLocaleDateString("en-US", options)
  }