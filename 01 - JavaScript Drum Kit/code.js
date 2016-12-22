(function DrumKit () {
  const variables = {
    className: 'playing',
    keyEvent: 'keydown',
    transitionEvent: 'transitionend',
  };

  function _addClass(element, name) {
    element.classList.add(name);
  }

  function _removeClass(event) {
    if (event.propertyName === 'transform') {
      event.target.classList.remove(variables.className);
    }
  }

  function _attachTransitionListener () {
    Array
    .from(document.querySelectorAll('.key'))
    .forEach((key) => key.addEventListener(variables.transitionEvent, _removeClass));
  }

  function _playAudioFor (keyCode) {
    const audioElement = document.querySelector(`audio[data-key="${keyCode}"]`);
    if (audioElement !== null) {
      audioElement.currentTime = 0;
      audioElement.play();
    }
  }

  function _toggleClassFor(keyCode) {
    const divElement = document.querySelector(`div[data-key="${keyCode}"]`);
    if (divElement !== null) {
      _addClass(divElement, variables.className);
      _attachTransitionListener();
    }
  }

  function _initAudio (event) {
    _playAudioFor(event.keyCode);
    _toggleClassFor(event.keyCode);
  }

  function _attachListener () {
    document.addEventListener(variables.keyEvent, _initAudio);
  }
  _attachListener();
}());