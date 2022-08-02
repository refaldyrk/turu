/**
 * Untuk melakukan sleep dalam milidetik
 *
 * Example:
 *
 * turu.Go(1000) //ini akan menunggu selama 1 detik
 * @param{Number} time
 */
function Go(time) {
	const stop = new Date().getTime() + time;
	while (new Date().getTime() < stop);
}

/**
 * Sama saja seperti function Go(), hanya berbeda di callbacknya
 *
 * Example:
 *
 * turu.GoFunc(1000, function(){
 *  console.log("Hello World");
 * }) //ini akan menunggu selama 1 detik dan mengeksekusi function console.log("Hello World")
 * @param{Number} time
 * @param{Function} callback
 */
function GoFunc(time, callback) {
	if (typeof callback === "function") {
		const timer = ms => new Promise(res => setTimeout(res, ms));
		timer(time).then(i => callback());
	} else {
		console.log("Callback Invalid");
	}
}

module.exports = {
	Go,
	GoFunc,
};
