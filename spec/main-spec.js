const main = require('../main/main');

describe('taxi fee', function () {
    it("a kilometer and no waiting time", function(){
        var result = main(1, 0)
        expect(result).toEqual(6)
    })
    it("two kilometers and five minutes of waiting time", function(){
        var result = main(2, 5)
        expect(result).toEqual(7)
    })
    it("five kilometers and five minutes of waiting time", function(){
        var result = main(5, 5)
        expect(result).toEqual(11)
    })
    it("eight kilometers and ten minutes of waiting time", function(){
        var result = main(8, 10)
        expect(result).toEqual(18)
    })
    it("ten kilometers and sixteen minutes of waiting time", function(){
        var result = main(10, 16)
        expect(result).toEqual(22)
    })
});
