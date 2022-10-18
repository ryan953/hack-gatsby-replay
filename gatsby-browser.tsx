const { Replay } = require("@sentry/replay");

exports.wrapRootElement = ({ element, props }) => {
  const replay = new Replay({
    blockAllMedia: false,
    maskAllText: false,
  });
  replay.start();

  return element;
};
