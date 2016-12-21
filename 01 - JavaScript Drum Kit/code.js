(function DrumKit () {
      function _getAudioElement (keyCode) {
        const audioElements = Array.from(document.getElementsByTagName('audio'));
        const code = keyCode.toString();
        return audioElements
          .filter((el) => {
            return el.getAttribute('data-key') === code;
          })
          .shift();
      }

      function _getDivElement (keyCode) {
        const divElements = Array.from(document.getElementsByClassName('key'))
        const code = keyCode.toString();
        return divElements
          .filter((el) => {
            return el.getAttribute('data-key') === code;
          })
          .shift();
      }

      function _addClassTo(element, name) {
        const classList = element.classList;
        classList.add(name);
      }

      function _removeClassFrom(element, name) {
        setTimeout(() => {
          const classList = element.classList;
          classList.remove(name);
        }, 70);
      }
      
      function _playAudioFor (keyCode) {
        const audioElement = _getAudioElement(keyCode);
        if (audioElement !== undefined) {
          audioElement.play();
        }
      }

      function _toggleClassFor(keyCode) {
        const divElement = _getDivElement(keyCode);
        if (divElement !== undefined) {
          _addClassTo(divElement, 'playing');
          _removeClassFrom(divElement, 'playing');
        }
      }

      function _initAudio (event) {
        const keyCode = event.keyCode;
        _playAudioFor(keyCode);
        _toggleClassFor(keyCode);
      }

      function _attachListener () {
        document.addEventListener('keydown', _initAudio);
      }
      _attachListener();
    }())