const state = {
    stock: {
        coffeeBeans: 250,
        water: 1000
    },
    isCoffeeMachineBusy: false,
};

const checkAvailability = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!state.isCoffeeMachineBusy) {
                resolve("mesin siap dipakai");
            } else {
                reject("mesin sibuk");
            }
        }, 1000);
    });
};

const checkStock = () => {
    return new Promise((resolve, reject) => {
        state.isCoffeeMachineBusy = true;
        setTimeout(() => {
            if (state.stock.coffeeBeans >= 16 && state.stock.water >= 250) {
                resolve("stok cukup, kopi bisa dibuat");
            } else {
                reject("stok tidak cukup");
            }
        }, 1500);
    });
};

const boilWater = () => {
    return new Promise((resolve, reject) => {
        console.log("memanaskan air...");
        setTimeout(() => {
            resolve("air panas sudah siap");
        }, 2000);
    });
};

const grindCoffeeBeans = () => {
    return new Promise((resolve, reject) => {
        console.log("menggiling biji kopi...");
        setTimeout(() => {
            resolve("kopi sudah siap");
        }, 1000);
    });
}
    

const brewCoffee = () => {
    console.log("membuatkan kopi...");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("kopi sudah jadi!");
        }, 2000);
    });
};

function makeEspresso() {
    checkAvailability()
        .then((value) => {
            console.log(value);
            return checkStock();
        })
        .then((value) => {
            console.log(value);
            const promises = [boilWater(), grindCoffeeBeans()];

            return Promise.all(promises);
        })
        .then((value) => {
            console.log(value);
            return brewCoffee();
        })
        .then((value) => {
            console.log(value);
            state.isCoffeeMachineBusy = false;
        })
        .catch((rejectReason) => {
            console.log(rejectReason);
            state.isCoffeeMachineBusy = false;
        });
}

makeEspresso();