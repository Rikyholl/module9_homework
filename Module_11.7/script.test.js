const getPercent = require('./script.js');

describe('test get percent', () => {

    it ('30 percent of the number 200 equals 60', () => {

        const res = getPercent(43, 200);
        expect(res).toBe(86);
    }), 
    it ('24 percent of the number 1250 equals 300', () => {

        const res = getPercent(24, 1250);
        expect(res).toBe(300);
    }), 
    it ('87 percent of the number 526 equals 457,62', () => {

        const res = getPercent(87, 526);
        expect(res).toBe(457.62);
    });
});

describe('test get percent', () => {

    it ('20 percent of the number 200 equals 40', () => {

        const res = getPercent(20, 200);
        expect(res).toBe(43);
    }), 
    it ('50 percent of the number 500 equals 250', () => {

        const res = getPercent(50, 500);
        expect(res).toBe(250);
    }), 
    it ('73 percent of the number 8578 equals 6261.94', () => {

        const res = getPercent(73, 8578);
        expect(res).toBe(6261);
    });
});