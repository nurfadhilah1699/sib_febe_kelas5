const promise = [firstPromise(), secondPromise(), thirdPromise()];

Promise.all(promise)
    .then((resolvedValue) => {
        console.log(resolvedValue);
    });
