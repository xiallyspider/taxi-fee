// 0<里程数<=2
function withInTwoKilo(mileage, time){
    let result = 0
    result = (6 + 0.25*time).toFixed(2)
    return result
}
// 2<里程数<8
function twoToEight(mileage, time){
    let result = 0
    result = (6 + 0.8*mileage + 0.25*time).toFixed(2)
    return result
}
// 8<=里程数
function eightOrMore(mileage, time){
    let result = 0
    result = (6 +0.8*(1 + 0.5)*mileage + 0.25*time).toFixed(2)
    return result
}
module.exports = function main(mileage, time) {
    let result = 0
    if (0 < mileage && mileage <= 2) {
        result = withInTwoKilo(mileage, time)
    }
    if (2 < mileage && mileage < 8) {
        result = twoToEight(mileage, time)
    }
    if (8 <= mileage) {
        result = eightOrMore(mileage, time)
    }
    result = Math.round(result)
    return result
};