let minute,
  second,
  counterInterval = undefined;

const MinuteEl = document.getElementById("minute-id");
const SecondEl = document.getElementById("second-id");

ResetCounter();

function updateEl() {
  MinuteEl.innerHTML = minute < 10 ? `0${minute}` : minute;
  SecondEl.innerHTML = second < 10 ? `0${second}` : second;
}

const StartEl = document.getElementById("start");
StartEl.addEventListener("click", StartCounter);

const PauseEl = document.getElementById("pause");
PauseEl.addEventListener("click", PauseCounter);

const ResetEl = document.getElementById("reset");
ResetEl.addEventListener("click", ResetCounter);

const FiveMinutesEl = document.getElementById("fiveMinutes");
FiveMinutesEl.addEventListener("click", FiveMinutes);

const TenMinutesEl = document.getElementById("tenMinutes");
TenMinutesEl.addEventListener("click", TenMinutes);

const FifteenMinutesEl = document.getElementById("fifteenMinutes");
FifteenMinutesEl.addEventListener("click", FifteenMinutes);

const TwentyMinutesEl = document.getElementById("twentyMinutes");
TwentyMinutesEl.addEventListener("click", TwentyMinutes);

function StartCounter() {
  if (counterInterval) return;

  counterInterval = setInterval(() => {
    if (second === 0) {
      if (minute === 0) {
        destroy(counterInterval);
      } else {
        second = 59;
        --minute;
      }
    } else {
      --second;
    }
    updateEl();
  }, 1000);
}

function PauseCounter() {
  destroy(counterInterval);
}

function ResetCounter() {
  destroy(counterInterval);
  minute = 05;
  second = 00;
  updateEl();
}

function destroy() {
  clearInterval(counterInterval);
  counterInterval = undefined;
}

function FiveMinutes() {
  destroy(counterInterval);
  minute = 5;
  second = 0;
  updateEl();
}

function TenMinutes() {
  destroy(counterInterval);
  minute = 10;
  second = 0;
  updateEl();
}

function FifteenMinutes() {
  destroy(counterInterval);
  minute = 15;
  second = 0;
  updateEl();
}

function TwentyMinutes() {
  destroy(counterInterval);
  minute = 20;
  second = 0;
  updateEl();
}
