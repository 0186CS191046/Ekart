import {
  useButton
} from "./chunk-PFTC7WLJ.js";
import {
  useRenderElement
} from "./chunk-RQE4V27S.js";
import {
  require_react
} from "./chunk-VX2H6PUQ.js";
import {
  __toESM
} from "./chunk-G3PMV62Z.js";

// node_modules/@base-ui/react/esm/button/Button.js
var React = __toESM(require_react(), 1);
var Button = React.forwardRef(function Button2(componentProps, forwardedRef) {
  const {
    render,
    className,
    disabled = false,
    focusableWhenDisabled = false,
    nativeButton = true,
    ...elementProps
  } = componentProps;
  const {
    getButtonProps,
    buttonRef
  } = useButton({
    disabled,
    focusableWhenDisabled,
    native: nativeButton
  });
  const state = {
    disabled
  };
  return useRenderElement("button", componentProps, {
    state,
    ref: [forwardedRef, buttonRef],
    props: [elementProps, getButtonProps]
  });
});
if (true) Button.displayName = "Button";

export {
  Button
};
//# sourceMappingURL=chunk-EH42BHWQ.js.map
