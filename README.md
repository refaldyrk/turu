# Turu

## Deskripsi

Turu adalah sebuah sleep function di nodejs, ya betul deskripsi nya cuman segini wkwkwk

## Mengapa Dinamakan Turu?

Turu diambil dalam bahasa jawa yang artinya "tidur", ya betul nama turu ini dibuat dari kata "tidur"

## Mengapa dibuat?

Turu dibuat karena author males bikin sleep function terus menerus setiap ada project baru :D, makanya author mending bikin package nya sekalian aja wkwk

## Cara install

```sh
npm i turu
```

## Cara penggunaan

### Go() Function

```js
const turu = require("turu");
console.log("Wait for it...");
turu.Go(1000); //sleep selama 1 detik
console.log("Done!");
```

### GoFunc() Function

```js
const turu = require("turu");
console.log("Wait for it...");
turu.GoFunc(1000, function () {
	console.log("Done!");
}); //sleep selama 1 detik dan mencetak "Done!"
```

## Wanna Contribute? Boleh Donggg :D

# _PLEASE GIVE A STAR IF YOU LIKE THIS PACKAGE_

# LICENSE

Package turu is licensed under the MIT license.
