'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*jshint esversion: 6 */

var StopWatch = function () {
	function StopWatch(display) {
		_classCallCheck(this, StopWatch);

		this.running = false;
		this.display = display;
		this.reset();
		this.print(this.times);
		this.pad0(value);
		this.format(this.times);
	}

	_createClass(StopWatch, [{
		key: 'reset',
		value: function reset() {
			this.times = {
				minutes: 0,
				seconds: 0,
				miliseconds: 0
			};
		}
	}, {
		key: 'print',
		value: function print() {
			this.display.innerText = this.format(this.times);
		}
	}, {
		key: 'pad0',
		value: function pad0(value) {
			var result = value.toString();
			if (result.length < 2) {
				result = 0 + result;
			}
			return result;
		}
	}, {
		key: 'format',
		value: function format(times) {
			return pad0(times.minutes) + ':' + pad0(times.seconds) + ':' + pad0(Math.floor(times.miliseconds));
		}
	}]);

	return StopWatch;
}();

//create instance of stopWatch class

var stopWatch = new StopWatch(document.querySelector('.stopwatch'));

//Add event listeners

var stopButton = document.getElementById('stop');
stopButton.addEventListener('click', function () {
	return stopWatch.stop();
});

var startButton = document.getelementById('start');
startButton.addEventListener('click', function () {
	return stopWatch.start();
});
