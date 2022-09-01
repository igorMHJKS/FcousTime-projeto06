export default function Controls({
    buttonPause,
    buttonPlay,
    buttonSet,
    buttonStop
}){
    
    function play(){
        buttonPlay.classList.add('hide')
        buttonPause.classList.remove('hide')
        buttonSet.classList.add('hide')
        buttonStop.classList.remove('hide')
    }          
          
    
    function Pause (){
        buttonPause.classList.add('hide')
        buttonPlay.classList.remove('hide')
    }
    function reset() {
        buttonPlay.classList.remove('hide')
        buttonPause.classList.add('hide')
        buttonSet.classList.remove('hide')
        buttonStop.classList.add('hide')
      }
      function getMinutes(){
        let newMinutes = prompt('Quantos minutos?')
        if (!newMinutes) {
        Timer.resetTimer()
        return false
      }

       return newMinutes
      }
      return{ 
        reset,
         play,
        Pause,
        getMinutes
}
}
