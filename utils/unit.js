const unit = (code) => {
    return code.toString(16);
}

const limitRgx = /.{1,2}/g;

module.exports = {
    unit,
    limitRgx
}