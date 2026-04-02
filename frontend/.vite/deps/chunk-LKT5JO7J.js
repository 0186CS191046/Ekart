import {
  require_jsx_runtime
} from "./chunk-6CLN6COV.js";
import {
  isHTMLElement,
  isReactVersionAtLeast,
  useIsoLayoutEffect,
  useRefWithInit,
  useStableCallback
} from "./chunk-RQE4V27S.js";
import {
  require_react
} from "./chunk-VX2H6PUQ.js";
import {
  __toESM
} from "./chunk-G3PMV62Z.js";

// node_modules/@base-ui/react/esm/direction-provider/DirectionContext.js
var React = __toESM(require_react(), 1);
var DirectionContext = React.createContext(void 0);
if (true) DirectionContext.displayName = "DirectionContext";
function useDirection() {
  const context = React.useContext(DirectionContext);
  return context?.direction ?? "ltr";
}

// node_modules/@base-ui/react/esm/csp-provider/CSPContext.js
var React2 = __toESM(require_react(), 1);
var CSPContext = React2.createContext(void 0);
if (true) CSPContext.displayName = "CSPContext";
var DEFAULT_CSP_CONTEXT_VALUE = {
  disableStyleElements: false
};
function useCSPContext() {
  return React2.useContext(CSPContext) ?? DEFAULT_CSP_CONTEXT_VALUE;
}

// node_modules/@base-ui/react/esm/composite/composite.js
var ARROW_UP = "ArrowUp";
var ARROW_DOWN = "ArrowDown";
var ARROW_LEFT = "ArrowLeft";
var ARROW_RIGHT = "ArrowRight";
var HOME = "Home";
var END = "End";
var HORIZONTAL_KEYS = /* @__PURE__ */ new Set([ARROW_LEFT, ARROW_RIGHT]);
var HORIZONTAL_KEYS_WITH_EXTRA_KEYS = /* @__PURE__ */ new Set([ARROW_LEFT, ARROW_RIGHT, HOME, END]);
var VERTICAL_KEYS = /* @__PURE__ */ new Set([ARROW_UP, ARROW_DOWN]);
var VERTICAL_KEYS_WITH_EXTRA_KEYS = /* @__PURE__ */ new Set([ARROW_UP, ARROW_DOWN, HOME, END]);
var ARROW_KEYS = /* @__PURE__ */ new Set([...HORIZONTAL_KEYS, ...VERTICAL_KEYS]);
var ALL_KEYS = /* @__PURE__ */ new Set([...ARROW_KEYS, HOME, END]);
var COMPOSITE_KEYS = /* @__PURE__ */ new Set([ARROW_UP, ARROW_DOWN, ARROW_LEFT, ARROW_RIGHT, HOME, END]);
var SHIFT = "Shift";
var CONTROL = "Control";
var ALT = "Alt";
var META = "Meta";
var MODIFIER_KEYS = /* @__PURE__ */ new Set([SHIFT, CONTROL, ALT, META]);
function isInputElement(element) {
  return isHTMLElement(element) && element.tagName === "INPUT";
}
function isNativeInput(element) {
  if (isInputElement(element) && element.selectionStart != null) {
    return true;
  }
  if (isHTMLElement(element) && element.tagName === "TEXTAREA") {
    return true;
  }
  return false;
}
function scrollIntoViewIfNeeded(scrollContainer, element, direction, orientation) {
  if (!scrollContainer || !element || !element.scrollTo) {
    return;
  }
  let targetX = scrollContainer.scrollLeft;
  let targetY = scrollContainer.scrollTop;
  const isOverflowingX = scrollContainer.clientWidth < scrollContainer.scrollWidth;
  const isOverflowingY = scrollContainer.clientHeight < scrollContainer.scrollHeight;
  if (isOverflowingX && orientation !== "vertical") {
    const elementOffsetLeft = getOffset(scrollContainer, element, "left");
    const containerStyles = getStyles(scrollContainer);
    const elementStyles = getStyles(element);
    if (direction === "ltr") {
      if (elementOffsetLeft + element.offsetWidth + elementStyles.scrollMarginRight > scrollContainer.scrollLeft + scrollContainer.clientWidth - containerStyles.scrollPaddingRight) {
        targetX = elementOffsetLeft + element.offsetWidth + elementStyles.scrollMarginRight - scrollContainer.clientWidth + containerStyles.scrollPaddingRight;
      } else if (elementOffsetLeft - elementStyles.scrollMarginLeft < scrollContainer.scrollLeft + containerStyles.scrollPaddingLeft) {
        targetX = elementOffsetLeft - elementStyles.scrollMarginLeft - containerStyles.scrollPaddingLeft;
      }
    }
    if (direction === "rtl") {
      if (elementOffsetLeft - elementStyles.scrollMarginRight < scrollContainer.scrollLeft + containerStyles.scrollPaddingLeft) {
        targetX = elementOffsetLeft - elementStyles.scrollMarginLeft - containerStyles.scrollPaddingLeft;
      } else if (elementOffsetLeft + element.offsetWidth + elementStyles.scrollMarginRight > scrollContainer.scrollLeft + scrollContainer.clientWidth - containerStyles.scrollPaddingRight) {
        targetX = elementOffsetLeft + element.offsetWidth + elementStyles.scrollMarginRight - scrollContainer.clientWidth + containerStyles.scrollPaddingRight;
      }
    }
  }
  if (isOverflowingY && orientation !== "horizontal") {
    const elementOffsetTop = getOffset(scrollContainer, element, "top");
    const containerStyles = getStyles(scrollContainer);
    const elementStyles = getStyles(element);
    if (elementOffsetTop - elementStyles.scrollMarginTop < scrollContainer.scrollTop + containerStyles.scrollPaddingTop) {
      targetY = elementOffsetTop - elementStyles.scrollMarginTop - containerStyles.scrollPaddingTop;
    } else if (elementOffsetTop + element.offsetHeight + elementStyles.scrollMarginBottom > scrollContainer.scrollTop + scrollContainer.clientHeight - containerStyles.scrollPaddingBottom) {
      targetY = elementOffsetTop + element.offsetHeight + elementStyles.scrollMarginBottom - scrollContainer.clientHeight + containerStyles.scrollPaddingBottom;
    }
  }
  scrollContainer.scrollTo({
    left: targetX,
    top: targetY,
    behavior: "auto"
  });
}
function getOffset(ancestor, element, side) {
  const propName = side === "left" ? "offsetLeft" : "offsetTop";
  let result = 0;
  while (element.offsetParent) {
    result += element[propName];
    if (element.offsetParent === ancestor) {
      break;
    }
    element = element.offsetParent;
  }
  return result;
}
function getStyles(element) {
  const styles = getComputedStyle(element);
  return {
    scrollMarginTop: parseFloat(styles.scrollMarginTop) || 0,
    scrollMarginRight: parseFloat(styles.scrollMarginRight) || 0,
    scrollMarginBottom: parseFloat(styles.scrollMarginBottom) || 0,
    scrollMarginLeft: parseFloat(styles.scrollMarginLeft) || 0,
    scrollPaddingTop: parseFloat(styles.scrollPaddingTop) || 0,
    scrollPaddingRight: parseFloat(styles.scrollPaddingRight) || 0,
    scrollPaddingBottom: parseFloat(styles.scrollPaddingBottom) || 0,
    scrollPaddingLeft: parseFloat(styles.scrollPaddingLeft) || 0
  };
}

// node_modules/@base-ui/react/esm/composite/list/CompositeList.js
var React4 = __toESM(require_react(), 1);

// node_modules/@base-ui/react/esm/composite/list/CompositeListContext.js
var React3 = __toESM(require_react(), 1);
var CompositeListContext = React3.createContext({
  register: () => {
  },
  unregister: () => {
  },
  subscribeMapChange: () => {
    return () => {
    };
  },
  elementsRef: {
    current: []
  },
  nextIndexRef: {
    current: 0
  }
});
if (true) CompositeListContext.displayName = "CompositeListContext";
function useCompositeListContext() {
  return React3.useContext(CompositeListContext);
}

// node_modules/@base-ui/react/esm/composite/list/CompositeList.js
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
function CompositeList(props) {
  const {
    children,
    elementsRef,
    labelsRef,
    onMapChange: onMapChangeProp
  } = props;
  const onMapChange = useStableCallback(onMapChangeProp);
  const nextIndexRef = React4.useRef(0);
  const listeners = useRefWithInit(createListeners).current;
  const map = useRefWithInit(createMap).current;
  const [mapTick, setMapTick] = React4.useState(0);
  const lastTickRef = React4.useRef(mapTick);
  const register = useStableCallback((node, metadata) => {
    map.set(node, metadata ?? null);
    lastTickRef.current += 1;
    setMapTick(lastTickRef.current);
  });
  const unregister = useStableCallback((node) => {
    map.delete(node);
    lastTickRef.current += 1;
    setMapTick(lastTickRef.current);
  });
  const sortedMap = React4.useMemo(() => {
    disableEslintWarning(mapTick);
    const newMap = /* @__PURE__ */ new Map();
    const sortedNodes = Array.from(map.keys()).filter((node) => node.isConnected).sort(sortByDocumentPosition);
    sortedNodes.forEach((node, index) => {
      const metadata = map.get(node) ?? {};
      newMap.set(node, {
        ...metadata,
        index
      });
    });
    return newMap;
  }, [map, mapTick]);
  useIsoLayoutEffect(() => {
    if (typeof MutationObserver !== "function" || sortedMap.size === 0) {
      return void 0;
    }
    const mutationObserver = new MutationObserver((entries) => {
      const diff = /* @__PURE__ */ new Set();
      const updateDiff = (node) => diff.has(node) ? diff.delete(node) : diff.add(node);
      entries.forEach((entry) => {
        entry.removedNodes.forEach(updateDiff);
        entry.addedNodes.forEach(updateDiff);
      });
      if (diff.size === 0) {
        lastTickRef.current += 1;
        setMapTick(lastTickRef.current);
      }
    });
    sortedMap.forEach((_, node) => {
      if (node.parentElement) {
        mutationObserver.observe(node.parentElement, {
          childList: true
        });
      }
    });
    return () => {
      mutationObserver.disconnect();
    };
  }, [sortedMap]);
  useIsoLayoutEffect(() => {
    const shouldUpdateLengths = lastTickRef.current === mapTick;
    if (shouldUpdateLengths) {
      if (elementsRef.current.length !== sortedMap.size) {
        elementsRef.current.length = sortedMap.size;
      }
      if (labelsRef && labelsRef.current.length !== sortedMap.size) {
        labelsRef.current.length = sortedMap.size;
      }
      nextIndexRef.current = sortedMap.size;
    }
    onMapChange(sortedMap);
  }, [onMapChange, sortedMap, elementsRef, labelsRef, mapTick]);
  useIsoLayoutEffect(() => {
    return () => {
      elementsRef.current = [];
    };
  }, [elementsRef]);
  useIsoLayoutEffect(() => {
    return () => {
      if (labelsRef) {
        labelsRef.current = [];
      }
    };
  }, [labelsRef]);
  const subscribeMapChange = useStableCallback((fn) => {
    listeners.add(fn);
    return () => {
      listeners.delete(fn);
    };
  });
  useIsoLayoutEffect(() => {
    listeners.forEach((l) => l(sortedMap));
  }, [listeners, sortedMap]);
  const contextValue = React4.useMemo(() => ({
    register,
    unregister,
    subscribeMapChange,
    elementsRef,
    labelsRef,
    nextIndexRef
  }), [register, unregister, subscribeMapChange, elementsRef, labelsRef, nextIndexRef]);
  return (0, import_jsx_runtime.jsx)(CompositeListContext.Provider, {
    value: contextValue,
    children
  });
}
function createMap() {
  return /* @__PURE__ */ new Map();
}
function createListeners() {
  return /* @__PURE__ */ new Set();
}
function sortByDocumentPosition(a, b) {
  const position = a.compareDocumentPosition(b);
  if (position & Node.DOCUMENT_POSITION_FOLLOWING || position & Node.DOCUMENT_POSITION_CONTAINED_BY) {
    return -1;
  }
  if (position & Node.DOCUMENT_POSITION_PRECEDING || position & Node.DOCUMENT_POSITION_CONTAINS) {
    return 1;
  }
  return 0;
}
function disableEslintWarning(_) {
}

// node_modules/@base-ui/react/esm/composite/list/useCompositeListItem.js
var React5 = __toESM(require_react(), 1);
var IndexGuessBehavior = (function(IndexGuessBehavior2) {
  IndexGuessBehavior2[IndexGuessBehavior2["None"] = 0] = "None";
  IndexGuessBehavior2[IndexGuessBehavior2["GuessFromOrder"] = 1] = "GuessFromOrder";
  return IndexGuessBehavior2;
})({});
function useCompositeListItem(params = {}) {
  const {
    label,
    metadata,
    textRef,
    indexGuessBehavior,
    index: externalIndex
  } = params;
  const {
    register,
    unregister,
    subscribeMapChange,
    elementsRef,
    labelsRef,
    nextIndexRef
  } = useCompositeListContext();
  const indexRef = React5.useRef(-1);
  const [index, setIndex] = React5.useState(externalIndex ?? (indexGuessBehavior === IndexGuessBehavior.GuessFromOrder ? () => {
    if (indexRef.current === -1) {
      const newIndex = nextIndexRef.current;
      nextIndexRef.current += 1;
      indexRef.current = newIndex;
    }
    return indexRef.current;
  } : -1));
  const componentRef = React5.useRef(null);
  const ref = React5.useCallback((node) => {
    componentRef.current = node;
    if (index !== -1 && node !== null) {
      elementsRef.current[index] = node;
      if (labelsRef) {
        const isLabelDefined = label !== void 0;
        labelsRef.current[index] = isLabelDefined ? label : textRef?.current?.textContent ?? node.textContent;
      }
    }
  }, [index, elementsRef, labelsRef, label, textRef]);
  useIsoLayoutEffect(() => {
    if (externalIndex != null) {
      return void 0;
    }
    const node = componentRef.current;
    if (node) {
      register(node, metadata);
      return () => {
        unregister(node);
      };
    }
    return void 0;
  }, [externalIndex, register, unregister, metadata]);
  useIsoLayoutEffect(() => {
    if (externalIndex != null) {
      return void 0;
    }
    return subscribeMapChange((map) => {
      const i = componentRef.current ? map.get(componentRef.current)?.index : null;
      if (i != null) {
        setIndex(i);
      }
    });
  }, [externalIndex, subscribeMapChange, setIndex]);
  return React5.useMemo(() => ({
    ref,
    index
  }), [index, ref]);
}

// node_modules/@base-ui/utils/esm/useForcedRerendering.js
var React6 = __toESM(require_react());
function useForcedRerendering() {
  const [, setState] = React6.useState({});
  return React6.useCallback(() => {
    setState({});
  }, []);
}

// node_modules/@base-ui/utils/esm/inertValue.js
function inertValue(value) {
  if (isReactVersionAtLeast(19)) {
    return value;
  }
  return value ? "true" : void 0;
}

export {
  CompositeList,
  DirectionContext,
  useDirection,
  IndexGuessBehavior,
  useCompositeListItem,
  useForcedRerendering,
  CSPContext,
  useCSPContext,
  inertValue,
  ARROW_UP,
  ARROW_DOWN,
  ARROW_LEFT,
  ARROW_RIGHT,
  HOME,
  END,
  HORIZONTAL_KEYS,
  HORIZONTAL_KEYS_WITH_EXTRA_KEYS,
  VERTICAL_KEYS,
  VERTICAL_KEYS_WITH_EXTRA_KEYS,
  ARROW_KEYS,
  ALL_KEYS,
  COMPOSITE_KEYS,
  SHIFT,
  MODIFIER_KEYS,
  isNativeInput,
  scrollIntoViewIfNeeded
};
//# sourceMappingURL=chunk-LKT5JO7J.js.map
