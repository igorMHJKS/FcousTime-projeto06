import Controls from "./controls.js"
import timer from "./timer.js"

const buttonPlay = document.querySelector('.play')
const buttonPause = document.querySelector('.pause')
const buttonStop = document.querySelector('.stop')
const buttonSet = document.querySelector('.set')
const buttonSoundOn = document.querySelector('.sound-on')
const buttonSoundOff = document.querySelector('.sound-off')
const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')
let minutes = Number(minutesDisplay.textContent)

 const controls = Controls({
     buttonPause,
     buttonPlay,
     buttonSet,
     buttonStop
 })

const Timer = timer({
    minutesDisplay,
    secondsDisplay,
    resetControls:controls.reset,
    minutes
})

  buttonPlay.addEventListener('click', function() {
      buttonPlay.classList.add('hide')
      buttonPause.classList.remove('hide')
      buttonSet.classList.add('hide')
      buttonStop.classList.remove('hide')
     
      controls.play()
      Timer.countdown()
    })


buttonPause.addEventListener('click', function() {
  controls.Pause()
  Timer.hold()
})

buttonStop.addEventListener('click', function() {
  controls.reset()
  Timer.reset()
})

buttonSoundOff.addEventListener('click', function() {
  buttonSoundOn.classList.remove('hide')
  buttonSoundOff.classList.add('hide')
})

buttonSoundOn.addEventListener('click', function() {
  buttonSoundOn.classList.add('hide')
  buttonSoundOff.classList.remove('hide')
})

buttonSet.addEventListener('click', function() {
  let newMinutes = controls.getMinutes()
  if (!newMinutes) {
    Timer.resetTimer()
    return
  }

  minutes = newMinutes
  timer.updateDisplay(minutes, 0)
  timer.upadateMinutes(minutes)
})