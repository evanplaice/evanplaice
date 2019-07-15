var pomodoro = angular.module('Pomodoro', []);

pomodoro.service('timer', function($rootScope) {
  this.work = 25;
  this.rest = 5;
  this.minutes = this.work;
  this.seconds = 0;
  this.time;
  this.running = false;
  this.isWork = true;
  this._interval;
  this.setTime = function(minutes, seconds) {
    this.minutes = (minutes) ? minutes : this.minutes;
    this.seconds = (seconds) ? seconds : this.seconds;
    this.time = `${this.minutes}:${this.seconds.toString().padStart(2, '0')}`;
    // console.log(this.time)
    $rootScope.$emit('update');
  };
  // start the timer
  this.start = function() {
    this._interval = setInterval(() => {
      if (this.minutes === 0 && this.seconds === 0) { this.reset(); }
      if (this.seconds <= 0) {
        this.minutes--;
        this.seconds = 59;
        this.setTime();
        return;
      }
      this.seconds--;
      this.setTime();
    }, 1000);
  };
  // stop the timer
  this.stop = function() {
    clearInterval(this._interval);
  };
  // change the timer mode work/rest
  this.reset = function() {
    this.stop();
    this.isWork = !this.isWork;
    this.minutes = (this.isWork) ? this.work : this.rest;
    this.setTime();
    $rootScope.$emit('reset');
    this.start();
  }
  // set the initial time
  this.setTime();
});

pomodoro.controller('WorkController', function(timer) {
  var work = this;
  // default(s)
  work.time = timer.work;
  // increase the work period
  work.increment = function() {
    // edge case - don't change settings while running
    if (timer.running) { return; }
    timer.work++;
    if (timer.isWork) {
      timer.minutes = timer.work;
      timer.seconds = 0;
      timer.setTime();
    }
    work.time = timer.work;
  }
  // decrease the work period
  work.decrement = function() {
    // edge case - don't change settings while running
    if (timer.running) { return; }
    // edge case - don't go below 1
    if (timer.work <= 1) { return; }
    timer.work--;
    if (timer.isWork) {
      timer.minutes = timer.work;
      timer.seconds = 0;
      timer.setTime();
    }
    work.time = timer.work;
  }
});
  
pomodoro.controller('RestController', function(timer) {
  var rest = this;
  // default(s)
  rest.time = timer.rest;
  // increase the rest period
  rest.increment = function() {
    // edge case - don't change settings while running
    if (timer.running) { return; }
    timer.rest++;
    if (!timer.isWork) {
      timer.minutes = timer.rest;
      timer.seconds = 0;
      timer.setTime();
    }
    rest.time = timer.rest;
  }
  // decrease the rest period
  rest.decrement = function() {
    // edge case - don't change settings while running
    if (timer.running) { return; }
    // edge case - don't go below 1
    if (timer.rest <= 1) { return; }
    timer.rest--;
    if (!timer.isWork) {
      timer.minutes = timer.rest;
      timer.seconds = 0;
      timer.setTime();
    }
    rest.time = timer.rest;
  }
});
  
pomodoro.controller('TimeController', function($rootScope, $timeout, timer) {
  var time = this;
  // default(s)
  time.cycle = 'Work';
  time.remaining = timer.time;
  time.fillColor = '#9e3f3f';
  time.fill = 0;
  // start/stop the timer
  time.toggle = function() {
    if (!timer.running) {
      timer.start();
    } else {
      timer.stop();
    }
    timer.running = !timer.running;
  }
  // update the timer value
  this.update = function() {
    time.remaining = timer.time;
    let total = (timer.isWork) ? timer.work : timer.rest;
    let elapsed = timer.minutes + (timer.seconds / 60);
    let percentage = elapsed/total;
    time.fill = (300 * percentage) + 'px';
  }
  // reset the timer mode from work/rest
  this.reset = function() {
    time.cycle = (timer.isWork) ? 'Work' : 'Break';
    time.fillColor = (timer.isWork) ? '#9e3f3f' : '#49A19A';
  }
  // side effect - update event from timer
  $rootScope.$on('update', function() {
    $timeout(function() { time.update(); });
  });
  // side effect - reset event from timer
  $rootScope.$on('reset', function() {
    $timeout(function() { time.reset(); });
  });
});
