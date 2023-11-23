export const cancelFullScreen = () => {
  const doc = window.document;
  const cancelFullScreen = doc.exitFullscreen || doc.mozCancelFullScreen || doc.webkitExitFullscreen || doc.msExitFullscreen;
  cancelFullScreen.call(doc);
};

export const fullScreenElement = () => {
  const doc = window.document;
  return !doc.fullscreenElement && !doc.mozFullScreenElement && !doc.webkitFullscreenElement && !doc.msFullscreenElement;
};

export const requestFullScreen = () => {
  const elem = window.document.documentElement;
  const requestFullScreen = elem.requestFullscreen || elem.mozRequestFullScreen || elem.webkitRequestFullScreen || elem.msRequestFullscreen;
  requestFullScreen.call(elem);
};
