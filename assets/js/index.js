// Script principal !
import Controls from './controls.js'
import Timer from './timer.js'
import { elements } from './elements.js'
import Sound from './sounds.js'
import Events from './events.js'

const {
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonSet,
  buttonSoundOff,
  buttonSoundOn,
  minutesDisplay,
  secondsDisplay
} = elements

const controls = Controls({
  buttonPause,
  buttonPlay,
  buttonSet,
  buttonStop
})

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls: controls.reset
})

const sound = Sound()

Events({
  controls,
  timer,
  sound,
  buttonPlay,
  buttonStop,
  buttonSet,
  buttonSoundOn, 
  buttonSoundOff,
  buttonPause,
})

