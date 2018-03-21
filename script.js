/*jshint esversion: 6 */ 

class StopWatch {
	constructor(display){
		this.running = false;
		this.display = display;
		this.reset();
		this.print(this.times);
		this.pad0(value);
		this.format(this.times);
	}
	
	reset(){
		this.times = {
			minutes: 0,
			seconds: 0,
			miliseconds: 0
		};
	}
	
	print(){
		this.display.innerText = this.format(this.times);
	}
	
	pad0(value){
		let result = value.toString();
		if(result.length <2){
			result = 0 + result;
		}
		return result;
	}
	
	format(times){
		return `${pad0(times.minutes)}:${pad0(times.seconds)}:${pad0(Math.floor(times.miliseconds))}`;
	}
	
	
}

//create instance of stopWatch class

const stopWatch = new StopWatch(document.querySelector('.stopwatch'));

//Add event listeners

let stopButton = document.getElementById('stop');
stopButton.addEventListener('click', () => stopWatch.stop());

let startButton = document.getelementById('start');
startButton.addEventListener('click', () => stopWatch.start());

