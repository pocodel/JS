// hello!

 let calculator = {
    a: 0,
    b: 0,


    read() {
        this.a = +prompt('a', 0);
        this.b = +prompt('b', 0);
    },

    sum() {
        return this.a + this.b;
    },

    mul() {
        return this.a * this.b;
    }
 }

// *****************************************

 console.log(calculator);

 calculator.read();

 console.log(calculator.sum());
 console.log(calculator.mul());

 console.log(calculator);

let ledder = {
    step: 0,

    showStep () {
        alert(this.step);
        return this;
    },

    up () {
        this.step++;
        return this;
    },

    down () {
        this.step--;
        return this;
    },
}

ledder
.showStep()
.up()
.showStep()
.down()
.showStep();







