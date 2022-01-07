//[1] list abstraksi
const canSendMessage = self => ({
    sendMessage: () => console.log('kirim pesan:', self.message)
});

const checkIsValidPhone = self => ({
    isValid: () => console.log('nomor valid:', self.from)
});

// [2] membuat object composition
const personalEnterprise = (from, message, store) => {
    // [3] atribut
    const self = {
        from,
        message,
        store
    };

    // method
    const personalEnterpriseBehaviours = self => ({
        createCatalog: () => console.log('katalog dibuat: ', self.store)
    });

    // membuat object composition
    return Object.assign(self, personalEnterpriseBehaviours(self), canSendMessage(self), checkIsValidPhone(self));
};

const p1 = personalEnterprise('pengirim@gmail.com','hei produk baru nih', 'dicoding store');
p1.createCatalog();
p1.sendMessage();
p1.isValid();