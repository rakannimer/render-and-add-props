
const React = require('react');

const renderAndAddProps = (renderable, props) => {
  if (typeof renderable === "function") {
    return renderable(props);
  } else if (React.Children.count(renderable) > 0) {
    return React.Children.map(renderable, child =>
      React.cloneElement(child, props)
    );
  } else if (React.isValidElement(renderable)) {
    return React.cloneElement(child, props);
  }
  return null;
};

module.exports = renderAndAddProps
module.exports.renderAndAddProps = renderAndAddProps