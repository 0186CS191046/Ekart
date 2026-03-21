import {
  CommonPopupDataAttributes,
  CommonTriggerDataAttributes,
  FloatingDelayGroup,
  FloatingFocusManager,
  FloatingNode,
  FloatingPortal,
  FloatingTree,
  FloatingTreeStore,
  FocusGuard,
  InternalBackdrop,
  PopupTriggerMap,
  ReactStore,
  Separator,
  Store,
  ToolbarRootContext,
  adaptiveOrigin,
  applySafePolygonPointerEventsMutation,
  clamp,
  clearSafePolygonPointerEventsMutation,
  compareItemEquality,
  createInitialPopupStoreState,
  createSelector,
  createSelectorMemoized,
  defaultItemEquality,
  fastComponent,
  fastComponentRef,
  findItemIndex,
  getDefaultLabelId,
  getDisabledMountTransitionStyles,
  getEmptyRootContext,
  getPseudoElementBounds,
  hasNullItemLabel,
  index_parts_exports as index_parts_exports3,
  isGroupedItems,
  popupStateMapping,
  popupStoreSelectors,
  pressableTriggerOpenStateMapping,
  removeItem,
  resolveAriaLabelledBy,
  resolveMultipleLabels,
  resolveSelectedLabel,
  safePolygon,
  selectedValueIncludes,
  serializeValue,
  stringifyAsLabel,
  stringifyAsValue,
  styleDisableScrollbar,
  triggerOpenStateMapping,
  useAnchorPositioning,
  useClick,
  useClientPoint,
  useDelayGroup,
  useDismiss,
  useFloatingNodeId,
  useFloatingParentNodeId,
  useFloatingPortalNode,
  useFloatingRootContext,
  useFloatingTree,
  useFocus,
  useHoverFloatingInteraction,
  useHoverInteractionSharedState,
  useHoverReferenceInteraction,
  useImplicitActiveTrigger,
  useInteractions,
  useListNavigation,
  useOnFirstRender,
  useOpenInteractionType,
  useOpenStateTransitions,
  useRole,
  useScrollLock,
  useStore,
  useSyncedFloatingRootContext,
  useToolbarRootContext,
  useTriggerDataForwarding,
  useTriggerRegistration,
  useTypeahead,
  useValueAsRef,
  useValueChanged,
  visuallyHidden,
  visuallyHiddenInput
} from "./chunk-SJR4D3RB.js";
import {
  Button
} from "./chunk-EH42BHWQ.js";
import {
  CheckboxGroupContext,
  FieldsetRootContext,
  Input,
  index_parts_exports as index_parts_exports2,
  useCheckboxGroupContext,
  useFieldItemContext,
  useFieldsetRootContext
} from "./chunk-JWUKFLHA.js";
import {
  DEFAULT_FIELD_STATE_ATTRIBUTES,
  FormContext,
  Timeout,
  fieldValidityMapping,
  focusElementWithVisible,
  useField,
  useFieldRootContext,
  useFormContext,
  useLabel,
  useLabelableContext,
  useLabelableId,
  useRegisteredLabelId,
  useTimeout
} from "./chunk-C3CRFMQC.js";
import {
  ACTIVE_COMPOSITE_ITEM,
  CompositeRoot,
  getCssDimensions,
  index_parts_exports,
  isElementDisabled,
  useCompositeItem
} from "./chunk-V2IB7DOE.js";
import {
  ARROW_DOWN,
  ARROW_LEFT,
  ARROW_RIGHT,
  ARROW_UP,
  COMPOSITE_KEYS,
  CSPContext,
  CompositeList,
  DirectionContext,
  END,
  HOME,
  IndexGuessBehavior,
  SHIFT,
  inertValue,
  useCSPContext,
  useCompositeListItem,
  useDirection,
  useForcedRerendering
} from "./chunk-LKT5JO7J.js";
import {
  useButton,
  useCompositeRootContext,
  useFocusableWhenDisabled
} from "./chunk-PFTC7WLJ.js";
import {
  AnimationFrame,
  TransitionStatusDataAttributes,
  activeElement,
  contains,
  createChangeEventDetails,
  createGenericEventDetails,
  disableFocusInside,
  enableFocusInside,
  getNextTabbable,
  getNodeChildren,
  getPreviousTabbable,
  getTabbableAfterElement,
  getTabbableBeforeElement,
  getTarget,
  isAndroid,
  isFirefox,
  isIOS,
  isMac,
  isOutsideEvent,
  isTabbable,
  isWebKit,
  matchesFocusVisible,
  ownerDocument,
  reason_parts_exports,
  require_jsx_runtime,
  stopEvent,
  transitionStatusMapping,
  useAnimationFrame,
  useAnimationsFinished,
  useBaseUiId,
  useControlled,
  useId,
  useOnMount,
  useOpenChangeComplete,
  useTransitionStatus
} from "./chunk-6CLN6COV.js";
import {
  BASE_UI_SWIPE_IGNORE_SELECTOR,
  CLICK_TRIGGER_IDENTIFIER,
  DROPDOWN_COLLISION_AVOIDANCE,
  EMPTY_ARRAY,
  EMPTY_OBJECT,
  LEGACY_SWIPE_IGNORE_SELECTOR,
  NOOP,
  PATIENT_CLICK_THRESHOLD,
  POPUP_COLLISION_AVOIDANCE,
  SafeReact,
  TYPEAHEAD_RESET_MS,
  error,
  getComputedStyle as getComputedStyle2,
  getParentNode,
  getWindow,
  isElement,
  isHTMLElement,
  isLastTraversableNode,
  makeEventPreventable,
  mergeClassNames,
  mergeProps,
  mergePropsN,
  ownerVisuallyHidden,
  useIsoLayoutEffect,
  useMergedRefs,
  useRefWithInit,
  useRenderElement,
  useStableCallback,
  warn
} from "./chunk-RQE4V27S.js";
import {
  require_react_dom
} from "./chunk-AU2MKR2E.js";
import {
  require_react
} from "./chunk-VX2H6PUQ.js";
import "./chunk-THIMG3DX.js";
import {
  __export,
  __toESM
} from "./chunk-G3PMV62Z.js";

// node_modules/@base-ui/react/esm/accordion/index.parts.js
var index_parts_exports4 = {};
__export(index_parts_exports4, {
  Header: () => AccordionHeader,
  Item: () => AccordionItem,
  Panel: () => AccordionPanel,
  Root: () => AccordionRoot,
  Trigger: () => AccordionTrigger
});

// node_modules/@base-ui/react/esm/accordion/root/AccordionRoot.js
var React2 = __toESM(require_react(), 1);

// node_modules/@base-ui/react/esm/accordion/root/AccordionRootContext.js
var React = __toESM(require_react(), 1);
var AccordionRootContext = React.createContext(void 0);
if (true) AccordionRootContext.displayName = "AccordionRootContext";
function useAccordionRootContext() {
  const context = React.useContext(AccordionRootContext);
  if (context === void 0) {
    throw new Error(true ? "Base UI: AccordionRootContext is missing. Accordion parts must be placed within <Accordion.Root>." : formatErrorMessage_default(10));
  }
  return context;
}

// node_modules/@base-ui/react/esm/accordion/root/AccordionRoot.js
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
var rootStateAttributesMapping = {
  value: () => null
};
var AccordionRoot = React2.forwardRef(function AccordionRoot2(componentProps, forwardedRef) {
  const {
    render,
    className,
    disabled = false,
    hiddenUntilFound: hiddenUntilFoundProp,
    keepMounted: keepMountedProp,
    loopFocus = true,
    onValueChange: onValueChangeProp,
    multiple = false,
    orientation = "vertical",
    value: valueProp,
    defaultValue: defaultValueProp,
    ...elementProps
  } = componentProps;
  const direction = useDirection();
  if (true) {
    useIsoLayoutEffect(() => {
      if (hiddenUntilFoundProp && keepMountedProp === false) {
        warn("The `keepMounted={false}` prop on a Accordion.Root will be ignored when using `hiddenUntilFound` since it requires Panels to remain mounted when closed.");
      }
    }, [hiddenUntilFoundProp, keepMountedProp]);
  }
  const defaultValue = React2.useMemo(() => {
    if (valueProp === void 0) {
      return defaultValueProp ?? [];
    }
    return void 0;
  }, [valueProp, defaultValueProp]);
  const onValueChange = useStableCallback(onValueChangeProp);
  const accordionItemRefs = React2.useRef([]);
  const [value, setValue] = useControlled({
    controlled: valueProp,
    default: defaultValue,
    name: "Accordion",
    state: "value"
  });
  const handleValueChange = useStableCallback((newValue, nextOpen) => {
    const details = createChangeEventDetails(reason_parts_exports.none);
    if (!multiple) {
      const nextValue = value[0] === newValue ? [] : [newValue];
      onValueChange(nextValue, details);
      if (details.isCanceled) {
        return;
      }
      setValue(nextValue);
    } else if (nextOpen) {
      const nextOpenValues = value.slice();
      nextOpenValues.push(newValue);
      onValueChange(nextOpenValues, details);
      if (details.isCanceled) {
        return;
      }
      setValue(nextOpenValues);
    } else {
      const nextOpenValues = value.filter((v) => v !== newValue);
      onValueChange(nextOpenValues, details);
      if (details.isCanceled) {
        return;
      }
      setValue(nextOpenValues);
    }
  });
  const state = React2.useMemo(() => ({
    value,
    disabled,
    orientation
  }), [value, disabled, orientation]);
  const contextValue = React2.useMemo(() => ({
    accordionItemRefs,
    direction,
    disabled,
    handleValueChange,
    hiddenUntilFound: hiddenUntilFoundProp ?? false,
    keepMounted: keepMountedProp ?? false,
    loopFocus,
    orientation,
    state,
    value
  }), [direction, disabled, handleValueChange, hiddenUntilFoundProp, keepMountedProp, loopFocus, orientation, state, value]);
  const element = useRenderElement("div", componentProps, {
    state,
    ref: forwardedRef,
    props: [{
      dir: direction,
      role: "region"
    }, elementProps],
    stateAttributesMapping: rootStateAttributesMapping
  });
  return (0, import_jsx_runtime.jsx)(AccordionRootContext.Provider, {
    value: contextValue,
    children: (0, import_jsx_runtime.jsx)(CompositeList, {
      elementsRef: accordionItemRefs,
      children: element
    })
  });
});
if (true) AccordionRoot.displayName = "AccordionRoot";

// node_modules/@base-ui/react/esm/accordion/item/AccordionItem.js
var React6 = __toESM(require_react(), 1);

// node_modules/@base-ui/react/esm/collapsible/root/useCollapsibleRoot.js
var React3 = __toESM(require_react(), 1);
function useCollapsibleRoot(parameters) {
  const {
    open: openParam,
    defaultOpen,
    onOpenChange,
    disabled
  } = parameters;
  const isControlled = openParam !== void 0;
  const [open, setOpen] = useControlled({
    controlled: openParam,
    default: defaultOpen,
    name: "Collapsible",
    state: "open"
  });
  const {
    mounted,
    setMounted,
    transitionStatus
  } = useTransitionStatus(open, true, true);
  const [visible, setVisible] = React3.useState(open);
  const [{
    height,
    width
  }, setDimensions] = React3.useState({
    height: void 0,
    width: void 0
  });
  const defaultPanelId = useBaseUiId();
  const [panelIdState, setPanelIdState] = React3.useState();
  const panelId = panelIdState ?? defaultPanelId;
  const [hiddenUntilFound, setHiddenUntilFound] = React3.useState(false);
  const [keepMounted, setKeepMounted] = React3.useState(false);
  const abortControllerRef = React3.useRef(null);
  const animationTypeRef = React3.useRef(null);
  const transitionDimensionRef = React3.useRef(null);
  const panelRef = React3.useRef(null);
  const runOnceAnimationsFinish = useAnimationsFinished(panelRef, false);
  const handleTrigger = useStableCallback((event) => {
    const nextOpen = !open;
    const eventDetails = createChangeEventDetails(reason_parts_exports.triggerPress, event.nativeEvent);
    onOpenChange(nextOpen, eventDetails);
    if (eventDetails.isCanceled) {
      return;
    }
    const panel = panelRef.current;
    if (animationTypeRef.current === "css-animation" && panel != null) {
      panel.style.removeProperty("animation-name");
    }
    if (!hiddenUntilFound && !keepMounted) {
      if (animationTypeRef.current != null && animationTypeRef.current !== "css-animation") {
        if (!mounted && nextOpen) {
          setMounted(true);
        }
      }
      if (animationTypeRef.current === "css-animation") {
        if (!visible && nextOpen) {
          setVisible(true);
        }
        if (!mounted && nextOpen) {
          setMounted(true);
        }
      }
    }
    setOpen(nextOpen);
    if (animationTypeRef.current === "none" && mounted && !nextOpen) {
      setMounted(false);
    }
  });
  useIsoLayoutEffect(() => {
    if (isControlled && animationTypeRef.current === "none" && !keepMounted && !open) {
      setMounted(false);
    }
  }, [isControlled, keepMounted, open, openParam, setMounted]);
  return React3.useMemo(() => ({
    abortControllerRef,
    animationTypeRef,
    disabled,
    handleTrigger,
    height,
    mounted,
    open,
    panelId,
    panelRef,
    runOnceAnimationsFinish,
    setDimensions,
    setHiddenUntilFound,
    setKeepMounted,
    setMounted,
    setOpen,
    setPanelIdState,
    setVisible,
    transitionDimensionRef,
    transitionStatus,
    visible,
    width
  }), [abortControllerRef, animationTypeRef, disabled, handleTrigger, height, mounted, open, panelId, panelRef, runOnceAnimationsFinish, setDimensions, setHiddenUntilFound, setKeepMounted, setMounted, setOpen, setVisible, transitionDimensionRef, transitionStatus, visible, width]);
}

// node_modules/@base-ui/react/esm/collapsible/root/CollapsibleRootContext.js
var React4 = __toESM(require_react(), 1);
var CollapsibleRootContext = React4.createContext(void 0);
if (true) CollapsibleRootContext.displayName = "CollapsibleRootContext";
function useCollapsibleRootContext() {
  const context = React4.useContext(CollapsibleRootContext);
  if (context === void 0) {
    throw new Error(true ? "Base UI: CollapsibleRootContext is missing. Collapsible parts must be placed within <Collapsible.Root>." : formatErrorMessage_default(15));
  }
  return context;
}

// node_modules/@base-ui/react/esm/accordion/item/AccordionItemContext.js
var React5 = __toESM(require_react(), 1);
var AccordionItemContext = React5.createContext(void 0);
if (true) AccordionItemContext.displayName = "AccordionItemContext";
function useAccordionItemContext() {
  const context = React5.useContext(AccordionItemContext);
  if (context === void 0) {
    throw new Error(true ? "Base UI: AccordionItemContext is missing. Accordion parts must be placed within <Accordion.Item>." : formatErrorMessage_default(9));
  }
  return context;
}

// node_modules/@base-ui/react/esm/collapsible/panel/CollapsiblePanelDataAttributes.js
var CollapsiblePanelDataAttributes = (function(CollapsiblePanelDataAttributes2) {
  CollapsiblePanelDataAttributes2["open"] = "data-open";
  CollapsiblePanelDataAttributes2["closed"] = "data-closed";
  CollapsiblePanelDataAttributes2[CollapsiblePanelDataAttributes2["startingStyle"] = TransitionStatusDataAttributes.startingStyle] = "startingStyle";
  CollapsiblePanelDataAttributes2[CollapsiblePanelDataAttributes2["endingStyle"] = TransitionStatusDataAttributes.endingStyle] = "endingStyle";
  return CollapsiblePanelDataAttributes2;
})({});

// node_modules/@base-ui/react/esm/collapsible/trigger/CollapsibleTriggerDataAttributes.js
var CollapsibleTriggerDataAttributes = (function(CollapsibleTriggerDataAttributes2) {
  CollapsibleTriggerDataAttributes2["panelOpen"] = "data-panel-open";
  return CollapsibleTriggerDataAttributes2;
})({});

// node_modules/@base-ui/react/esm/utils/collapsibleOpenStateMapping.js
var PANEL_OPEN_HOOK = {
  [CollapsiblePanelDataAttributes.open]: ""
};
var PANEL_CLOSED_HOOK = {
  [CollapsiblePanelDataAttributes.closed]: ""
};
var triggerOpenStateMapping2 = {
  open(value) {
    if (value) {
      return {
        [CollapsibleTriggerDataAttributes.panelOpen]: ""
      };
    }
    return null;
  }
};
var collapsibleOpenStateMapping = {
  open(value) {
    if (value) {
      return PANEL_OPEN_HOOK;
    }
    return PANEL_CLOSED_HOOK;
  }
};

// node_modules/@base-ui/react/esm/accordion/item/AccordionItemDataAttributes.js
var AccordionItemDataAttributes = (function(AccordionItemDataAttributes2) {
  AccordionItemDataAttributes2["index"] = "data-index";
  AccordionItemDataAttributes2["disabled"] = "data-disabled";
  AccordionItemDataAttributes2["open"] = "data-open";
  return AccordionItemDataAttributes2;
})({});

// node_modules/@base-ui/react/esm/accordion/item/stateAttributesMapping.js
var accordionStateAttributesMapping = {
  ...collapsibleOpenStateMapping,
  index: (value) => {
    return Number.isInteger(value) ? {
      [AccordionItemDataAttributes.index]: String(value)
    } : null;
  },
  ...transitionStatusMapping,
  value: () => null
};

// node_modules/@base-ui/react/esm/accordion/item/AccordionItem.js
var import_jsx_runtime2 = __toESM(require_jsx_runtime(), 1);
var AccordionItem = React6.forwardRef(function AccordionItem2(componentProps, forwardedRef) {
  const {
    className,
    disabled: disabledProp = false,
    onOpenChange: onOpenChangeProp,
    render,
    value: valueProp,
    ...elementProps
  } = componentProps;
  const {
    ref: listItemRef,
    index
  } = useCompositeListItem();
  const mergedRef = useMergedRefs(forwardedRef, listItemRef);
  const {
    disabled: contextDisabled,
    handleValueChange,
    state: rootState,
    value: openValues
  } = useAccordionRootContext();
  const fallbackValue = useBaseUiId();
  const value = valueProp ?? fallbackValue;
  const disabled = disabledProp || contextDisabled;
  const isOpen = React6.useMemo(() => {
    if (!openValues) {
      return false;
    }
    for (let i = 0; i < openValues.length; i += 1) {
      if (openValues[i] === value) {
        return true;
      }
    }
    return false;
  }, [openValues, value]);
  const onOpenChange = useStableCallback((nextOpen, eventDetails) => {
    onOpenChangeProp?.(nextOpen, eventDetails);
    if (eventDetails.isCanceled) {
      return;
    }
    handleValueChange(value, nextOpen);
  });
  const collapsible = useCollapsibleRoot({
    open: isOpen,
    onOpenChange,
    disabled
  });
  const collapsibleState = React6.useMemo(() => ({
    open: collapsible.open,
    disabled: collapsible.disabled,
    hidden: !collapsible.mounted,
    transitionStatus: collapsible.transitionStatus
  }), [collapsible.open, collapsible.disabled, collapsible.mounted, collapsible.transitionStatus]);
  const collapsibleContext = React6.useMemo(() => ({
    ...collapsible,
    onOpenChange,
    state: collapsibleState
  }), [collapsible, collapsibleState, onOpenChange]);
  const state = React6.useMemo(() => ({
    ...rootState,
    index,
    disabled,
    open: isOpen
  }), [disabled, index, isOpen, rootState]);
  const [triggerId, setTriggerId] = React6.useState(useBaseUiId());
  const accordionItemContext = React6.useMemo(() => ({
    open: isOpen,
    state,
    setTriggerId,
    triggerId
  }), [isOpen, state, setTriggerId, triggerId]);
  const element = useRenderElement("div", componentProps, {
    state,
    ref: mergedRef,
    props: elementProps,
    stateAttributesMapping: accordionStateAttributesMapping
  });
  return (0, import_jsx_runtime2.jsx)(CollapsibleRootContext.Provider, {
    value: collapsibleContext,
    children: (0, import_jsx_runtime2.jsx)(AccordionItemContext.Provider, {
      value: accordionItemContext,
      children: element
    })
  });
});
if (true) AccordionItem.displayName = "AccordionItem";

// node_modules/@base-ui/react/esm/accordion/header/AccordionHeader.js
var React7 = __toESM(require_react(), 1);
var AccordionHeader = React7.forwardRef(function AccordionHeader2(componentProps, forwardedRef) {
  const {
    render,
    className,
    ...elementProps
  } = componentProps;
  const {
    state
  } = useAccordionItemContext();
  const element = useRenderElement("h3", componentProps, {
    state,
    ref: forwardedRef,
    props: elementProps,
    stateAttributesMapping: accordionStateAttributesMapping
  });
  return element;
});
if (true) AccordionHeader.displayName = "AccordionHeader";

// node_modules/@base-ui/react/esm/accordion/trigger/AccordionTrigger.js
var React8 = __toESM(require_react(), 1);
var SUPPORTED_KEYS = /* @__PURE__ */ new Set([ARROW_DOWN, ARROW_UP, ARROW_RIGHT, ARROW_LEFT, HOME, END]);
function getActiveTriggers(accordionItemRefs) {
  const {
    current: accordionItemElements
  } = accordionItemRefs;
  const output = [];
  for (let i = 0; i < accordionItemElements.length; i += 1) {
    const section = accordionItemElements[i];
    if (!isElementDisabled(section)) {
      const trigger = section?.querySelector('[type="button"], [role="button"]');
      if (trigger && !isElementDisabled(trigger)) {
        output.push(trigger);
      }
    }
  }
  return output;
}
var AccordionTrigger = React8.forwardRef(function AccordionTrigger2(componentProps, forwardedRef) {
  const {
    disabled: disabledProp,
    className,
    id: idProp,
    render,
    nativeButton = true,
    ...elementProps
  } = componentProps;
  const {
    panelId,
    open,
    handleTrigger,
    disabled: contextDisabled
  } = useCollapsibleRootContext();
  const disabled = disabledProp ?? contextDisabled;
  const {
    getButtonProps,
    buttonRef
  } = useButton({
    disabled,
    focusableWhenDisabled: true,
    native: nativeButton,
    composite: true
  });
  const {
    accordionItemRefs,
    direction,
    loopFocus,
    orientation
  } = useAccordionRootContext();
  const isRtl = direction === "rtl";
  const isHorizontal = orientation === "horizontal";
  const {
    state,
    setTriggerId,
    triggerId: id
  } = useAccordionItemContext();
  useIsoLayoutEffect(() => {
    if (idProp) {
      setTriggerId(idProp);
    }
    return () => {
      setTriggerId(void 0);
    };
  }, [idProp, setTriggerId]);
  const props = React8.useMemo(() => ({
    "aria-controls": open ? panelId : void 0,
    "aria-expanded": open,
    id,
    tabIndex: 0,
    onClick: handleTrigger,
    onKeyDown(event) {
      if (!SUPPORTED_KEYS.has(event.key)) {
        return;
      }
      stopEvent(event);
      const triggers = getActiveTriggers(accordionItemRefs);
      const numOfEnabledTriggers = triggers.length;
      const lastIndex = numOfEnabledTriggers - 1;
      let nextIndex = -1;
      const thisIndex = triggers.indexOf(event.target);
      function toNext() {
        if (loopFocus) {
          nextIndex = thisIndex + 1 > lastIndex ? 0 : thisIndex + 1;
        } else {
          nextIndex = Math.min(thisIndex + 1, lastIndex);
        }
      }
      function toPrev() {
        if (loopFocus) {
          nextIndex = thisIndex === 0 ? lastIndex : thisIndex - 1;
        } else {
          nextIndex = thisIndex - 1;
        }
      }
      switch (event.key) {
        case ARROW_DOWN:
          if (!isHorizontal) {
            toNext();
          }
          break;
        case ARROW_UP:
          if (!isHorizontal) {
            toPrev();
          }
          break;
        case ARROW_RIGHT:
          if (isHorizontal) {
            if (isRtl) {
              toPrev();
            } else {
              toNext();
            }
          }
          break;
        case ARROW_LEFT:
          if (isHorizontal) {
            if (isRtl) {
              toNext();
            } else {
              toPrev();
            }
          }
          break;
        case "Home":
          nextIndex = 0;
          break;
        case "End":
          nextIndex = lastIndex;
          break;
        default:
          break;
      }
      if (nextIndex > -1) {
        triggers[nextIndex].focus();
      }
    }
  }), [accordionItemRefs, handleTrigger, id, isHorizontal, isRtl, loopFocus, open, panelId]);
  const element = useRenderElement("button", componentProps, {
    state,
    ref: [forwardedRef, buttonRef],
    props: [props, elementProps, getButtonProps],
    stateAttributesMapping: triggerOpenStateMapping2
  });
  return element;
});
if (true) AccordionTrigger.displayName = "AccordionTrigger";

// node_modules/@base-ui/react/esm/accordion/panel/AccordionPanel.js
var React10 = __toESM(require_react(), 1);

// node_modules/@base-ui/react/esm/collapsible/panel/useCollapsiblePanel.js
var React9 = __toESM(require_react(), 1);

// node_modules/@base-ui/react/esm/accordion/root/AccordionRootDataAttributes.js
var AccordionRootDataAttributes = (function(AccordionRootDataAttributes2) {
  AccordionRootDataAttributes2["disabled"] = "data-disabled";
  AccordionRootDataAttributes2["orientation"] = "data-orientation";
  return AccordionRootDataAttributes2;
})({});

// node_modules/@base-ui/react/esm/collapsible/panel/useCollapsiblePanel.js
function useCollapsiblePanel(parameters) {
  const {
    abortControllerRef,
    animationTypeRef,
    externalRef,
    height,
    hiddenUntilFound,
    keepMounted,
    id: idParam,
    mounted,
    onOpenChange,
    open,
    panelRef,
    runOnceAnimationsFinish,
    setDimensions,
    setMounted,
    setOpen,
    setVisible,
    transitionDimensionRef,
    visible,
    width
  } = parameters;
  const isBeforeMatchRef = React9.useRef(false);
  const latestAnimationNameRef = React9.useRef(null);
  const shouldCancelInitialOpenAnimationRef = React9.useRef(open);
  const shouldCancelInitialOpenTransitionRef = React9.useRef(open);
  const endingStyleFrame = useAnimationFrame();
  const hidden = React9.useMemo(() => {
    if (animationTypeRef.current === "css-animation") {
      return !visible;
    }
    return !open && !mounted;
  }, [open, mounted, visible, animationTypeRef]);
  const handlePanelRef = useStableCallback((element) => {
    if (!element) {
      return void 0;
    }
    if (animationTypeRef.current == null || transitionDimensionRef.current == null) {
      const panelStyles = getComputedStyle(element);
      const hasAnimation = panelStyles.animationName !== "none" && panelStyles.animationName !== "";
      const hasTransition = panelStyles.transitionDuration !== "0s" && panelStyles.transitionDuration !== "";
      if (hasAnimation && hasTransition) {
        if (true) {
          warn("CSS transitions and CSS animations both detected on Collapsible or Accordion panel.", "Only one of either animation type should be used.");
        }
      } else if (panelStyles.animationName === "none" && panelStyles.transitionDuration !== "0s") {
        animationTypeRef.current = "css-transition";
      } else if (panelStyles.animationName !== "none" && panelStyles.transitionDuration === "0s") {
        animationTypeRef.current = "css-animation";
      } else {
        animationTypeRef.current = "none";
      }
      if (element.getAttribute(AccordionRootDataAttributes.orientation) === "horizontal" || panelStyles.transitionProperty.indexOf("width") > -1) {
        transitionDimensionRef.current = "width";
      } else {
        transitionDimensionRef.current = "height";
      }
    }
    if (animationTypeRef.current !== "css-transition") {
      return void 0;
    }
    if (height === void 0 || width === void 0) {
      setDimensions({
        height: element.scrollHeight,
        width: element.scrollWidth
      });
      if (shouldCancelInitialOpenTransitionRef.current) {
        element.style.setProperty("transition-duration", "0s");
      }
    }
    let frame = -1;
    let nextFrame = -1;
    frame = AnimationFrame.request(() => {
      shouldCancelInitialOpenTransitionRef.current = false;
      nextFrame = AnimationFrame.request(() => {
        setTimeout(() => {
          element.style.removeProperty("transition-duration");
        });
      });
    });
    return () => {
      AnimationFrame.cancel(frame);
      AnimationFrame.cancel(nextFrame);
    };
  });
  const mergedPanelRef = useMergedRefs(externalRef, panelRef, handlePanelRef);
  useIsoLayoutEffect(() => {
    if (animationTypeRef.current !== "css-transition") {
      return void 0;
    }
    const panel = panelRef.current;
    if (!panel) {
      return void 0;
    }
    let resizeFrame = -1;
    if (abortControllerRef.current != null) {
      abortControllerRef.current.abort();
      abortControllerRef.current = null;
    }
    if (open) {
      const originalLayoutStyles = {
        "justify-content": panel.style.justifyContent,
        "align-items": panel.style.alignItems,
        "align-content": panel.style.alignContent,
        "justify-items": panel.style.justifyItems
      };
      Object.keys(originalLayoutStyles).forEach((key) => {
        panel.style.setProperty(key, "initial", "important");
      });
      if (!shouldCancelInitialOpenTransitionRef.current && !keepMounted) {
        panel.setAttribute(CollapsiblePanelDataAttributes.startingStyle, "");
      }
      setDimensions({
        height: panel.scrollHeight,
        width: panel.scrollWidth
      });
      resizeFrame = AnimationFrame.request(() => {
        Object.entries(originalLayoutStyles).forEach(([key, value]) => {
          if (value === "") {
            panel.style.removeProperty(key);
          } else {
            panel.style.setProperty(key, value);
          }
        });
      });
    } else {
      if (panel.scrollHeight === 0 && panel.scrollWidth === 0) {
        return void 0;
      }
      setDimensions({
        height: panel.scrollHeight,
        width: panel.scrollWidth
      });
      const abortController = new AbortController();
      abortControllerRef.current = abortController;
      const signal = abortController.signal;
      let attributeObserver = null;
      const endingStyleAttribute = CollapsiblePanelDataAttributes.endingStyle;
      attributeObserver = new MutationObserver((mutationList) => {
        const hasEndingStyle = mutationList.some((mutation) => mutation.type === "attributes" && mutation.attributeName === endingStyleAttribute);
        if (hasEndingStyle) {
          attributeObserver?.disconnect();
          attributeObserver = null;
          runOnceAnimationsFinish(() => {
            setDimensions({
              height: 0,
              width: 0
            });
            panel.style.removeProperty("content-visibility");
            setMounted(false);
            if (abortControllerRef.current === abortController) {
              abortControllerRef.current = null;
            }
          }, signal);
        }
      });
      attributeObserver.observe(panel, {
        attributes: true,
        attributeFilter: [endingStyleAttribute]
      });
      return () => {
        attributeObserver?.disconnect();
        endingStyleFrame.cancel();
        if (abortControllerRef.current === abortController) {
          abortController.abort();
          abortControllerRef.current = null;
        }
      };
    }
    return () => {
      AnimationFrame.cancel(resizeFrame);
    };
  }, [abortControllerRef, animationTypeRef, endingStyleFrame, hiddenUntilFound, keepMounted, mounted, open, panelRef, runOnceAnimationsFinish, setDimensions, setMounted]);
  useIsoLayoutEffect(() => {
    if (animationTypeRef.current !== "css-animation") {
      return;
    }
    const panel = panelRef.current;
    if (!panel) {
      return;
    }
    latestAnimationNameRef.current = panel.style.animationName || latestAnimationNameRef.current;
    panel.style.setProperty("animation-name", "none");
    setDimensions({
      height: panel.scrollHeight,
      width: panel.scrollWidth
    });
    if (!shouldCancelInitialOpenAnimationRef.current && !isBeforeMatchRef.current) {
      panel.style.removeProperty("animation-name");
    }
    if (open) {
      if (abortControllerRef.current != null) {
        abortControllerRef.current.abort();
        abortControllerRef.current = null;
      }
      setMounted(true);
      setVisible(true);
    } else {
      abortControllerRef.current = new AbortController();
      runOnceAnimationsFinish(() => {
        setMounted(false);
        setVisible(false);
        abortControllerRef.current = null;
      }, abortControllerRef.current.signal);
    }
  }, [abortControllerRef, animationTypeRef, open, panelRef, runOnceAnimationsFinish, setDimensions, setMounted, setVisible, visible]);
  useOnMount(() => {
    const frame = AnimationFrame.request(() => {
      shouldCancelInitialOpenAnimationRef.current = false;
    });
    return () => AnimationFrame.cancel(frame);
  });
  useIsoLayoutEffect(() => {
    if (!hiddenUntilFound) {
      return void 0;
    }
    const panel = panelRef.current;
    if (!panel) {
      return void 0;
    }
    let frame = -1;
    let nextFrame = -1;
    if (open && isBeforeMatchRef.current) {
      panel.style.transitionDuration = "0s";
      setDimensions({
        height: panel.scrollHeight,
        width: panel.scrollWidth
      });
      frame = AnimationFrame.request(() => {
        isBeforeMatchRef.current = false;
        nextFrame = AnimationFrame.request(() => {
          setTimeout(() => {
            panel.style.removeProperty("transition-duration");
          });
        });
      });
    }
    return () => {
      AnimationFrame.cancel(frame);
      AnimationFrame.cancel(nextFrame);
    };
  }, [hiddenUntilFound, open, panelRef, setDimensions]);
  useIsoLayoutEffect(() => {
    const panel = panelRef.current;
    if (panel && hiddenUntilFound && hidden) {
      panel.setAttribute("hidden", "until-found");
      if (animationTypeRef.current === "css-transition") {
        panel.setAttribute(CollapsiblePanelDataAttributes.startingStyle, "");
      }
    }
  }, [hiddenUntilFound, hidden, animationTypeRef, panelRef]);
  React9.useEffect(function registerBeforeMatchListener() {
    const panel = panelRef.current;
    if (!panel) {
      return void 0;
    }
    function handleBeforeMatch(event) {
      isBeforeMatchRef.current = true;
      setOpen(true);
      onOpenChange(true, createChangeEventDetails(reason_parts_exports.none, event));
    }
    panel.addEventListener("beforematch", handleBeforeMatch);
    return () => {
      panel.removeEventListener("beforematch", handleBeforeMatch);
    };
  }, [onOpenChange, panelRef, setOpen]);
  return React9.useMemo(() => ({
    props: {
      hidden,
      id: idParam,
      ref: mergedPanelRef
    }
  }), [hidden, idParam, mergedPanelRef]);
}

// node_modules/@base-ui/react/esm/accordion/panel/AccordionPanelCssVars.js
var AccordionPanelCssVars = (function(AccordionPanelCssVars2) {
  AccordionPanelCssVars2["accordionPanelHeight"] = "--accordion-panel-height";
  AccordionPanelCssVars2["accordionPanelWidth"] = "--accordion-panel-width";
  return AccordionPanelCssVars2;
})({});

// node_modules/@base-ui/react/esm/accordion/panel/AccordionPanel.js
var AccordionPanel = React10.forwardRef(function AccordionPanel2(componentProps, forwardedRef) {
  const {
    className,
    hiddenUntilFound: hiddenUntilFoundProp,
    keepMounted: keepMountedProp,
    id: idProp,
    render,
    ...elementProps
  } = componentProps;
  const {
    hiddenUntilFound: contextHiddenUntilFound,
    keepMounted: contextKeepMounted
  } = useAccordionRootContext();
  const {
    abortControllerRef,
    animationTypeRef,
    height,
    mounted,
    onOpenChange,
    open,
    panelId,
    panelRef,
    runOnceAnimationsFinish,
    setDimensions,
    setHiddenUntilFound,
    setKeepMounted,
    setMounted,
    setOpen,
    setVisible,
    transitionDimensionRef,
    visible,
    width,
    setPanelIdState,
    transitionStatus
  } = useCollapsibleRootContext();
  const hiddenUntilFound = hiddenUntilFoundProp ?? contextHiddenUntilFound;
  const keepMounted = keepMountedProp ?? contextKeepMounted;
  if (true) {
    useIsoLayoutEffect(() => {
      if (keepMountedProp === false && hiddenUntilFound) {
        warn("The `keepMounted={false}` prop on a Accordion.Panel will be ignored when using `contextHiddenUntilFound` on the Panel or the Root since it requires the panel to remain mounted when closed.");
      }
    }, [hiddenUntilFound, keepMountedProp]);
  }
  useIsoLayoutEffect(() => {
    if (idProp) {
      setPanelIdState(idProp);
      return () => {
        setPanelIdState(void 0);
      };
    }
    return void 0;
  }, [idProp, setPanelIdState]);
  useIsoLayoutEffect(() => {
    setHiddenUntilFound(hiddenUntilFound);
  }, [setHiddenUntilFound, hiddenUntilFound]);
  useIsoLayoutEffect(() => {
    setKeepMounted(keepMounted);
  }, [setKeepMounted, keepMounted]);
  useOpenChangeComplete({
    open: open && transitionStatus === "idle",
    ref: panelRef,
    onComplete() {
      if (!open) {
        return;
      }
      setDimensions({
        width: void 0,
        height: void 0
      });
    }
  });
  const {
    props
  } = useCollapsiblePanel({
    abortControllerRef,
    animationTypeRef,
    externalRef: forwardedRef,
    height,
    hiddenUntilFound,
    id: idProp ?? panelId,
    keepMounted,
    mounted,
    onOpenChange,
    open,
    panelRef,
    runOnceAnimationsFinish,
    setDimensions,
    setMounted,
    setOpen,
    setVisible,
    transitionDimensionRef,
    visible,
    width
  });
  const {
    state,
    triggerId
  } = useAccordionItemContext();
  const panelState = React10.useMemo(() => ({
    ...state,
    transitionStatus
  }), [state, transitionStatus]);
  const element = useRenderElement("div", componentProps, {
    state: panelState,
    ref: [forwardedRef, panelRef],
    props: [props, {
      "aria-labelledby": triggerId,
      role: "region",
      style: {
        [AccordionPanelCssVars.accordionPanelHeight]: height === void 0 ? "auto" : `${height}px`,
        [AccordionPanelCssVars.accordionPanelWidth]: width === void 0 ? "auto" : `${width}px`
      }
    }, elementProps],
    stateAttributesMapping: accordionStateAttributesMapping
  });
  const shouldRender = keepMounted || hiddenUntilFound || !keepMounted && mounted;
  if (!shouldRender) {
    return null;
  }
  return element;
});
if (true) AccordionPanel.displayName = "AccordionPanel";

// node_modules/@base-ui/react/esm/alert-dialog/index.parts.js
var index_parts_exports5 = {};
__export(index_parts_exports5, {
  Backdrop: () => DialogBackdrop,
  Close: () => DialogClose,
  Description: () => DialogDescription,
  Handle: () => DialogHandle,
  Popup: () => DialogPopup,
  Portal: () => DialogPortal,
  Root: () => AlertDialogRoot,
  Title: () => DialogTitle,
  Trigger: () => DialogTrigger,
  Viewport: () => DialogViewport,
  createHandle: () => createAlertDialogHandle
});

// node_modules/@base-ui/react/esm/alert-dialog/root/AlertDialogRoot.js
var React14 = __toESM(require_react(), 1);

// node_modules/@base-ui/react/esm/dialog/root/useDialogRoot.js
var React11 = __toESM(require_react(), 1);
function useDialogRoot(params) {
  const {
    store,
    parentContext,
    actionsRef
  } = params;
  const open = store.useState("open");
  const disablePointerDismissal = store.useState("disablePointerDismissal");
  const modal = store.useState("modal");
  const popupElement = store.useState("popupElement");
  const {
    openMethod,
    triggerProps
  } = useOpenInteractionType(open);
  useImplicitActiveTrigger(store);
  const {
    forceUnmount
  } = useOpenStateTransitions(open, store);
  const createDialogEventDetails = useStableCallback((reason) => {
    const details = createChangeEventDetails(reason);
    details.preventUnmountOnClose = () => {
      store.set("preventUnmountingOnClose", true);
    };
    return details;
  });
  const handleImperativeClose = React11.useCallback(() => {
    store.setOpen(false, createDialogEventDetails(reason_parts_exports.imperativeAction));
  }, [store, createDialogEventDetails]);
  React11.useImperativeHandle(actionsRef, () => ({
    unmount: forceUnmount,
    close: handleImperativeClose
  }), [forceUnmount, handleImperativeClose]);
  const floatingRootContext = useSyncedFloatingRootContext({
    popupStore: store,
    onOpenChange: store.setOpen,
    treatPopupAsFloatingElement: true,
    noEmit: true
  });
  const [ownNestedOpenDialogs, setOwnNestedOpenDialogs] = React11.useState(0);
  const isTopmost = ownNestedOpenDialogs === 0;
  const role = useRole(floatingRootContext);
  const dismiss = useDismiss(floatingRootContext, {
    outsidePressEvent() {
      if (store.context.internalBackdropRef.current || store.context.backdropRef.current) {
        return "intentional";
      }
      return {
        mouse: modal === "trap-focus" ? "sloppy" : "intentional",
        touch: "sloppy"
      };
    },
    outsidePress(event) {
      if (!store.context.outsidePressEnabledRef.current) {
        return false;
      }
      if ("button" in event && event.button !== 0) {
        return false;
      }
      if ("touches" in event && event.touches.length !== 1) {
        return false;
      }
      const target = getTarget(event);
      if (isTopmost && !disablePointerDismissal) {
        const eventTarget = target;
        if (modal) {
          return store.context.internalBackdropRef.current || store.context.backdropRef.current ? store.context.internalBackdropRef.current === eventTarget || store.context.backdropRef.current === eventTarget || contains(eventTarget, popupElement) && !eventTarget?.hasAttribute("data-base-ui-portal") : true;
        }
        return true;
      }
      return false;
    },
    escapeKey: isTopmost
  });
  useScrollLock(open && modal === true, popupElement);
  const {
    getReferenceProps,
    getFloatingProps,
    getTriggerProps
  } = useInteractions([role, dismiss]);
  store.useContextCallback("onNestedDialogOpen", (ownChildrenCount) => {
    setOwnNestedOpenDialogs(ownChildrenCount + 1);
  });
  store.useContextCallback("onNestedDialogClose", () => {
    setOwnNestedOpenDialogs(0);
  });
  React11.useEffect(() => {
    if (parentContext?.onNestedDialogOpen && open) {
      parentContext.onNestedDialogOpen(ownNestedOpenDialogs);
    }
    if (parentContext?.onNestedDialogClose && !open) {
      parentContext.onNestedDialogClose();
    }
    return () => {
      if (parentContext?.onNestedDialogClose && open) {
        parentContext.onNestedDialogClose();
      }
    };
  }, [open, parentContext, ownNestedOpenDialogs]);
  const activeTriggerProps = React11.useMemo(() => getReferenceProps(triggerProps), [getReferenceProps, triggerProps]);
  const inactiveTriggerProps = React11.useMemo(() => getTriggerProps(triggerProps), [getTriggerProps, triggerProps]);
  const popupProps = React11.useMemo(() => getFloatingProps(), [getFloatingProps]);
  store.useSyncedValues({
    openMethod,
    activeTriggerProps,
    inactiveTriggerProps,
    popupProps,
    floatingRootContext,
    nestedOpenDialogCount: ownNestedOpenDialogs
  });
}

// node_modules/@base-ui/react/esm/dialog/root/DialogRootContext.js
var React12 = __toESM(require_react(), 1);
var DialogRootContext = React12.createContext(void 0);
if (true) DialogRootContext.displayName = "DialogRootContext";
function useDialogRootContext(optional) {
  const dialogRootContext = React12.useContext(DialogRootContext);
  if (optional === false && dialogRootContext === void 0) {
    throw new Error(true ? "Base UI: DialogRootContext is missing. Dialog parts must be placed within <Dialog.Root>." : formatErrorMessage_default(27));
  }
  return dialogRootContext;
}

// node_modules/@base-ui/react/esm/dialog/store/DialogStore.js
var React13 = __toESM(require_react(), 1);
var selectors = {
  ...popupStoreSelectors,
  modal: createSelector((state) => state.modal),
  nested: createSelector((state) => state.nested),
  nestedOpenDialogCount: createSelector((state) => state.nestedOpenDialogCount),
  disablePointerDismissal: createSelector((state) => state.disablePointerDismissal),
  openMethod: createSelector((state) => state.openMethod),
  descriptionElementId: createSelector((state) => state.descriptionElementId),
  titleElementId: createSelector((state) => state.titleElementId),
  viewportElement: createSelector((state) => state.viewportElement),
  role: createSelector((state) => state.role)
};
var DialogStore = class extends ReactStore {
  constructor(initialState) {
    super(createInitialState(initialState), {
      popupRef: React13.createRef(),
      backdropRef: React13.createRef(),
      internalBackdropRef: React13.createRef(),
      outsidePressEnabledRef: {
        current: true
      },
      triggerElements: new PopupTriggerMap(),
      onOpenChange: void 0,
      onOpenChangeComplete: void 0
    }, selectors);
  }
  setOpen = (nextOpen, eventDetails) => {
    eventDetails.preventUnmountOnClose = () => {
      this.set("preventUnmountingOnClose", true);
    };
    if (!nextOpen && eventDetails.trigger == null && this.state.activeTriggerId != null) {
      eventDetails.trigger = this.state.activeTriggerElement ?? void 0;
    }
    this.context.onOpenChange?.(nextOpen, eventDetails);
    if (eventDetails.isCanceled) {
      return;
    }
    const details = {
      open: nextOpen,
      nativeEvent: eventDetails.event,
      reason: eventDetails.reason,
      nested: this.state.nested
    };
    this.state.floatingRootContext.context.events?.emit("openchange", details);
    const updatedState = {
      open: nextOpen
    };
    const newTriggerId = eventDetails.trigger?.id ?? null;
    if (newTriggerId || nextOpen) {
      updatedState.activeTriggerId = newTriggerId;
      updatedState.activeTriggerElement = eventDetails.trigger ?? null;
    }
    this.update(updatedState);
  };
};
function createInitialState(initialState = {}) {
  return {
    ...createInitialPopupStoreState(),
    modal: true,
    disablePointerDismissal: false,
    popupElement: null,
    viewportElement: null,
    descriptionElementId: void 0,
    titleElementId: void 0,
    openMethod: null,
    nested: false,
    nestedOpenDialogCount: 0,
    role: "dialog",
    ...initialState
  };
}

// node_modules/@base-ui/react/esm/alert-dialog/root/AlertDialogRoot.js
var import_jsx_runtime3 = __toESM(require_jsx_runtime(), 1);
function AlertDialogRoot(props) {
  const {
    children,
    open: openProp,
    defaultOpen = false,
    onOpenChange,
    onOpenChangeComplete,
    actionsRef,
    handle,
    triggerId: triggerIdProp,
    defaultTriggerId: defaultTriggerIdProp = null
  } = props;
  const parentDialogRootContext = useDialogRootContext();
  const nested = Boolean(parentDialogRootContext);
  const store = useRefWithInit(() => {
    return handle?.store ?? new DialogStore({
      open: defaultOpen,
      openProp,
      activeTriggerId: defaultTriggerIdProp,
      triggerIdProp,
      modal: true,
      disablePointerDismissal: true,
      nested,
      role: "alertdialog"
    });
  }).current;
  store.useControlledProp("openProp", openProp);
  store.useControlledProp("triggerIdProp", triggerIdProp);
  store.useSyncedValue("nested", nested);
  store.useContextCallback("onOpenChange", onOpenChange);
  store.useContextCallback("onOpenChangeComplete", onOpenChangeComplete);
  const payload = store.useState("payload");
  useDialogRoot({
    store,
    actionsRef,
    parentContext: parentDialogRootContext?.store.context,
    onOpenChange,
    triggerIdProp
  });
  const contextValue = React14.useMemo(() => ({
    store
  }), [store]);
  return (0, import_jsx_runtime3.jsx)(DialogRootContext.Provider, {
    value: contextValue,
    children: typeof children === "function" ? children({
      payload
    }) : children
  });
}

// node_modules/@base-ui/react/esm/dialog/backdrop/DialogBackdrop.js
var React15 = __toESM(require_react(), 1);
var stateAttributesMapping = {
  ...popupStateMapping,
  ...transitionStatusMapping
};
var DialogBackdrop = React15.forwardRef(function DialogBackdrop2(componentProps, forwardedRef) {
  const {
    render,
    className,
    forceRender = false,
    ...elementProps
  } = componentProps;
  const {
    store
  } = useDialogRootContext();
  const open = store.useState("open");
  const nested = store.useState("nested");
  const mounted = store.useState("mounted");
  const transitionStatus = store.useState("transitionStatus");
  const state = {
    open,
    transitionStatus
  };
  return useRenderElement("div", componentProps, {
    state,
    ref: [store.context.backdropRef, forwardedRef],
    stateAttributesMapping,
    props: [{
      role: "presentation",
      hidden: !mounted,
      style: {
        userSelect: "none",
        WebkitUserSelect: "none"
      }
    }, elementProps],
    enabled: forceRender || !nested
  });
});
if (true) DialogBackdrop.displayName = "DialogBackdrop";

// node_modules/@base-ui/react/esm/dialog/close/DialogClose.js
var React16 = __toESM(require_react(), 1);
var DialogClose = React16.forwardRef(function DialogClose2(componentProps, forwardedRef) {
  const {
    render,
    className,
    disabled = false,
    nativeButton = true,
    ...elementProps
  } = componentProps;
  const {
    store
  } = useDialogRootContext();
  const open = store.useState("open");
  function handleClick(event) {
    if (open) {
      store.setOpen(false, createChangeEventDetails(reason_parts_exports.closePress, event.nativeEvent));
    }
  }
  const {
    getButtonProps,
    buttonRef
  } = useButton({
    disabled,
    native: nativeButton
  });
  const state = {
    disabled
  };
  return useRenderElement("button", componentProps, {
    state,
    ref: [forwardedRef, buttonRef],
    props: [{
      onClick: handleClick
    }, elementProps, getButtonProps]
  });
});
if (true) DialogClose.displayName = "DialogClose";

// node_modules/@base-ui/react/esm/dialog/description/DialogDescription.js
var React17 = __toESM(require_react(), 1);
var DialogDescription = React17.forwardRef(function DialogDescription2(componentProps, forwardedRef) {
  const {
    render,
    className,
    id: idProp,
    ...elementProps
  } = componentProps;
  const {
    store
  } = useDialogRootContext();
  const id = useBaseUiId(idProp);
  store.useSyncedValueWithCleanup("descriptionElementId", id);
  return useRenderElement("p", componentProps, {
    ref: forwardedRef,
    props: [{
      id
    }, elementProps]
  });
});
if (true) DialogDescription.displayName = "DialogDescription";

// node_modules/@base-ui/react/esm/dialog/popup/DialogPopup.js
var React19 = __toESM(require_react(), 1);

// node_modules/@base-ui/react/esm/dialog/popup/DialogPopupCssVars.js
var DialogPopupCssVars = (function(DialogPopupCssVars2) {
  DialogPopupCssVars2["nestedDialogs"] = "--nested-dialogs";
  return DialogPopupCssVars2;
})({});

// node_modules/@base-ui/react/esm/dialog/popup/DialogPopupDataAttributes.js
var DialogPopupDataAttributes = (function(DialogPopupDataAttributes2) {
  DialogPopupDataAttributes2[DialogPopupDataAttributes2["open"] = CommonPopupDataAttributes.open] = "open";
  DialogPopupDataAttributes2[DialogPopupDataAttributes2["closed"] = CommonPopupDataAttributes.closed] = "closed";
  DialogPopupDataAttributes2[DialogPopupDataAttributes2["startingStyle"] = CommonPopupDataAttributes.startingStyle] = "startingStyle";
  DialogPopupDataAttributes2[DialogPopupDataAttributes2["endingStyle"] = CommonPopupDataAttributes.endingStyle] = "endingStyle";
  DialogPopupDataAttributes2["nested"] = "data-nested";
  DialogPopupDataAttributes2["nestedDialogOpen"] = "data-nested-dialog-open";
  return DialogPopupDataAttributes2;
})({});

// node_modules/@base-ui/react/esm/dialog/portal/DialogPortalContext.js
var React18 = __toESM(require_react(), 1);
var DialogPortalContext = React18.createContext(void 0);
if (true) DialogPortalContext.displayName = "DialogPortalContext";
function useDialogPortalContext() {
  const value = React18.useContext(DialogPortalContext);
  if (value === void 0) {
    throw new Error(true ? "Base UI: <Dialog.Portal> is missing." : formatErrorMessage_default(26));
  }
  return value;
}

// node_modules/@base-ui/react/esm/dialog/popup/DialogPopup.js
var import_jsx_runtime4 = __toESM(require_jsx_runtime(), 1);
var stateAttributesMapping2 = {
  ...popupStateMapping,
  ...transitionStatusMapping,
  nestedDialogOpen(value) {
    return value ? {
      [DialogPopupDataAttributes.nestedDialogOpen]: ""
    } : null;
  }
};
var DialogPopup = React19.forwardRef(function DialogPopup2(componentProps, forwardedRef) {
  const {
    className,
    finalFocus,
    initialFocus,
    render,
    ...elementProps
  } = componentProps;
  const {
    store
  } = useDialogRootContext();
  const descriptionElementId = store.useState("descriptionElementId");
  const disablePointerDismissal = store.useState("disablePointerDismissal");
  const floatingRootContext = store.useState("floatingRootContext");
  const rootPopupProps = store.useState("popupProps");
  const modal = store.useState("modal");
  const mounted = store.useState("mounted");
  const nested = store.useState("nested");
  const nestedOpenDialogCount = store.useState("nestedOpenDialogCount");
  const open = store.useState("open");
  const openMethod = store.useState("openMethod");
  const titleElementId = store.useState("titleElementId");
  const transitionStatus = store.useState("transitionStatus");
  const role = store.useState("role");
  useDialogPortalContext();
  useOpenChangeComplete({
    open,
    ref: store.context.popupRef,
    onComplete() {
      if (open) {
        store.context.onOpenChangeComplete?.(true);
      }
    }
  });
  function defaultInitialFocus(interactionType) {
    if (interactionType === "touch") {
      return store.context.popupRef.current;
    }
    return true;
  }
  const resolvedInitialFocus = initialFocus === void 0 ? defaultInitialFocus : initialFocus;
  const nestedDialogOpen = nestedOpenDialogCount > 0;
  const state = {
    open,
    nested,
    transitionStatus,
    nestedDialogOpen
  };
  const element = useRenderElement("div", componentProps, {
    state,
    props: [rootPopupProps, {
      "aria-labelledby": titleElementId ?? void 0,
      "aria-describedby": descriptionElementId ?? void 0,
      role,
      tabIndex: -1,
      hidden: !mounted,
      onKeyDown(event) {
        if (COMPOSITE_KEYS.has(event.key)) {
          event.stopPropagation();
        }
      },
      style: {
        [DialogPopupCssVars.nestedDialogs]: nestedOpenDialogCount
      }
    }, elementProps],
    ref: [forwardedRef, store.context.popupRef, store.useStateSetter("popupElement")],
    stateAttributesMapping: stateAttributesMapping2
  });
  return (0, import_jsx_runtime4.jsx)(FloatingFocusManager, {
    context: floatingRootContext,
    openInteractionType: openMethod,
    disabled: !mounted,
    closeOnFocusOut: !disablePointerDismissal,
    initialFocus: resolvedInitialFocus,
    returnFocus: finalFocus,
    modal: modal !== false,
    restoreFocus: "popup",
    children: element
  });
});
if (true) DialogPopup.displayName = "DialogPopup";

// node_modules/@base-ui/react/esm/dialog/portal/DialogPortal.js
var React20 = __toESM(require_react(), 1);
var import_jsx_runtime5 = __toESM(require_jsx_runtime(), 1);
var DialogPortal = React20.forwardRef(function DialogPortal2(props, forwardedRef) {
  const {
    keepMounted = false,
    ...portalProps
  } = props;
  const {
    store
  } = useDialogRootContext();
  const mounted = store.useState("mounted");
  const modal = store.useState("modal");
  const open = store.useState("open");
  const shouldRender = mounted || keepMounted;
  if (!shouldRender) {
    return null;
  }
  return (0, import_jsx_runtime5.jsx)(DialogPortalContext.Provider, {
    value: keepMounted,
    children: (0, import_jsx_runtime5.jsxs)(FloatingPortal, {
      ref: forwardedRef,
      ...portalProps,
      children: [mounted && modal === true && (0, import_jsx_runtime5.jsx)(InternalBackdrop, {
        ref: store.context.internalBackdropRef,
        inert: inertValue(!open)
      }), props.children]
    })
  });
});
if (true) DialogPortal.displayName = "DialogPortal";

// node_modules/@base-ui/react/esm/dialog/title/DialogTitle.js
var React21 = __toESM(require_react(), 1);
var DialogTitle = React21.forwardRef(function DialogTitle2(componentProps, forwardedRef) {
  const {
    render,
    className,
    id: idProp,
    ...elementProps
  } = componentProps;
  const {
    store
  } = useDialogRootContext();
  const id = useBaseUiId(idProp);
  store.useSyncedValueWithCleanup("titleElementId", id);
  return useRenderElement("h2", componentProps, {
    ref: forwardedRef,
    props: [{
      id
    }, elementProps]
  });
});
if (true) DialogTitle.displayName = "DialogTitle";

// node_modules/@base-ui/react/esm/dialog/trigger/DialogTrigger.js
var React22 = __toESM(require_react(), 1);
var DialogTrigger = React22.forwardRef(function DialogTrigger2(componentProps, forwardedRef) {
  const {
    render,
    className,
    disabled = false,
    nativeButton = true,
    id: idProp,
    payload,
    handle,
    ...elementProps
  } = componentProps;
  const dialogRootContext = useDialogRootContext(true);
  const store = handle?.store ?? dialogRootContext?.store;
  if (!store) {
    throw new Error(true ? "Base UI: <Dialog.Trigger> must be used within <Dialog.Root> or provided with a handle." : formatErrorMessage_default(79));
  }
  const thisTriggerId = useBaseUiId(idProp);
  const floatingContext = store.useState("floatingRootContext");
  const isOpenedByThisTrigger = store.useState("isOpenedByTrigger", thisTriggerId);
  const triggerElementRef = React22.useRef(null);
  const {
    registerTrigger,
    isMountedByThisTrigger
  } = useTriggerDataForwarding(thisTriggerId, triggerElementRef, store, {
    payload
  });
  const {
    getButtonProps,
    buttonRef
  } = useButton({
    disabled,
    native: nativeButton
  });
  const click = useClick(floatingContext, {
    enabled: floatingContext != null
  });
  const localInteractionProps = useInteractions([click]);
  const state = {
    disabled,
    open: isOpenedByThisTrigger
  };
  const rootTriggerProps = store.useState("triggerProps", isMountedByThisTrigger);
  return useRenderElement("button", componentProps, {
    state,
    ref: [buttonRef, forwardedRef, registerTrigger, triggerElementRef],
    props: [localInteractionProps.getReferenceProps(), rootTriggerProps, {
      [CLICK_TRIGGER_IDENTIFIER]: "",
      id: thisTriggerId
    }, elementProps, getButtonProps],
    stateAttributesMapping: triggerOpenStateMapping
  });
});
if (true) DialogTrigger.displayName = "DialogTrigger";

// node_modules/@base-ui/react/esm/dialog/viewport/DialogViewport.js
var React23 = __toESM(require_react(), 1);

// node_modules/@base-ui/react/esm/dialog/viewport/DialogViewportDataAttributes.js
var DialogViewportDataAttributes = (function(DialogViewportDataAttributes2) {
  DialogViewportDataAttributes2[DialogViewportDataAttributes2["open"] = CommonPopupDataAttributes.open] = "open";
  DialogViewportDataAttributes2[DialogViewportDataAttributes2["closed"] = CommonPopupDataAttributes.closed] = "closed";
  DialogViewportDataAttributes2[DialogViewportDataAttributes2["startingStyle"] = CommonPopupDataAttributes.startingStyle] = "startingStyle";
  DialogViewportDataAttributes2[DialogViewportDataAttributes2["endingStyle"] = CommonPopupDataAttributes.endingStyle] = "endingStyle";
  DialogViewportDataAttributes2["nested"] = "data-nested";
  DialogViewportDataAttributes2["nestedDialogOpen"] = "data-nested-dialog-open";
  return DialogViewportDataAttributes2;
})({});

// node_modules/@base-ui/react/esm/dialog/viewport/DialogViewport.js
var stateAttributesMapping3 = {
  ...popupStateMapping,
  ...transitionStatusMapping,
  nested(value) {
    return value ? {
      [DialogViewportDataAttributes.nested]: ""
    } : null;
  },
  nestedDialogOpen(value) {
    return value ? {
      [DialogViewportDataAttributes.nestedDialogOpen]: ""
    } : null;
  }
};
var DialogViewport = React23.forwardRef(function DialogViewport2(componentProps, forwardedRef) {
  const {
    className,
    render,
    children,
    ...elementProps
  } = componentProps;
  const keepMounted = useDialogPortalContext();
  const {
    store
  } = useDialogRootContext();
  const open = store.useState("open");
  const nested = store.useState("nested");
  const transitionStatus = store.useState("transitionStatus");
  const nestedOpenDialogCount = store.useState("nestedOpenDialogCount");
  const mounted = store.useState("mounted");
  const nestedDialogOpen = nestedOpenDialogCount > 0;
  const state = {
    open,
    nested,
    transitionStatus,
    nestedDialogOpen
  };
  const shouldRender = keepMounted || mounted;
  return useRenderElement("div", componentProps, {
    enabled: shouldRender,
    state,
    ref: [forwardedRef, store.useStateSetter("viewportElement")],
    stateAttributesMapping: stateAttributesMapping3,
    props: [{
      role: "presentation",
      hidden: !mounted,
      style: {
        pointerEvents: !open ? "none" : void 0
      },
      children
    }, elementProps]
  });
});
if (true) DialogViewport.displayName = "DialogViewport";

// node_modules/@base-ui/react/esm/dialog/store/DialogHandle.js
var DialogHandle = class {
  /**
   * Internal store holding the dialog state.
   * @internal
   */
  constructor(store) {
    this.store = store ?? new DialogStore();
  }
  /**
   * Opens the dialog and associates it with the trigger with the given id.
   * The trigger, if provided, must be a Dialog.Trigger component with this handle passed as a prop.
   *
   * This method should only be called in an event handler or an effect (not during rendering).
   *
   * @param triggerId ID of the trigger to associate with the dialog. If null, the dialog will open without a trigger association.
   */
  open(triggerId) {
    const triggerElement = triggerId ? this.store.context.triggerElements.getById(triggerId) : void 0;
    if (true) {
      if (triggerId && !triggerElement) {
        console.warn(`Base UI: DialogHandle.open: No trigger found with id "${triggerId}". The dialog will open, but the trigger will not be associated with the dialog.`);
      }
    }
    this.store.setOpen(true, createChangeEventDetails(reason_parts_exports.imperativeAction, void 0, triggerElement));
  }
  /**
   * Opens the dialog and sets the payload.
   * Does not associate the dialog with any trigger.
   *
   * @param payload Payload to set when opening the dialog.
   */
  openWithPayload(payload) {
    this.store.set("payload", payload);
    this.store.setOpen(true, createChangeEventDetails(reason_parts_exports.imperativeAction, void 0, void 0));
  }
  /**
   * Closes the dialog.
   */
  close() {
    this.store.setOpen(false, createChangeEventDetails(reason_parts_exports.imperativeAction, void 0, void 0));
  }
  /**
   * Indicates whether the dialog is currently open.
   */
  get isOpen() {
    return this.store.state.open;
  }
};
function createDialogHandle() {
  return new DialogHandle();
}

// node_modules/@base-ui/react/esm/alert-dialog/handle.js
function createAlertDialogHandle() {
  return new DialogHandle(new DialogStore({
    modal: true,
    disablePointerDismissal: true,
    role: "alertdialog"
  }));
}

// node_modules/@base-ui/react/esm/autocomplete/index.parts.js
var index_parts_exports6 = {};
__export(index_parts_exports6, {
  Arrow: () => ComboboxArrow,
  Backdrop: () => ComboboxBackdrop,
  Clear: () => ComboboxClear,
  Collection: () => ComboboxCollection,
  Empty: () => ComboboxEmpty,
  Group: () => ComboboxGroup,
  GroupLabel: () => ComboboxGroupLabel,
  Icon: () => ComboboxIcon,
  Input: () => ComboboxInput,
  InputGroup: () => ComboboxInputGroup,
  Item: () => ComboboxItem,
  List: () => ComboboxList,
  Popup: () => ComboboxPopup,
  Portal: () => ComboboxPortal,
  Positioner: () => ComboboxPositioner,
  Root: () => AutocompleteRoot,
  Row: () => ComboboxRow,
  Separator: () => Separator,
  Status: () => ComboboxStatus,
  Trigger: () => ComboboxTrigger,
  Value: () => AutocompleteValue,
  useFilter: () => useCoreFilter,
  useFilteredItems: () => useFilteredItems
});

// node_modules/@base-ui/react/esm/autocomplete/root/AutocompleteRoot.js
var React27 = __toESM(require_react(), 1);

// node_modules/@base-ui/react/esm/combobox/root/AriaCombobox.js
var React26 = __toESM(require_react(), 1);

// node_modules/@base-ui/react/esm/combobox/root/ComboboxRootContext.js
var React24 = __toESM(require_react(), 1);
var ComboboxRootContext = React24.createContext(void 0);
if (true) ComboboxRootContext.displayName = "ComboboxRootContext";
var ComboboxFloatingContext = React24.createContext(void 0);
if (true) ComboboxFloatingContext.displayName = "ComboboxFloatingContext";
var ComboboxDerivedItemsContext = React24.createContext(void 0);
if (true) ComboboxDerivedItemsContext.displayName = "ComboboxDerivedItemsContext";
var ComboboxInputValueContext = React24.createContext("");
if (true) ComboboxInputValueContext.displayName = "ComboboxInputValueContext";
function useComboboxRootContext() {
  const context = React24.useContext(ComboboxRootContext);
  if (!context) {
    throw new Error(true ? "Base UI: ComboboxRootContext is missing. Combobox parts must be placed within <Combobox.Root>." : formatErrorMessage_default(22));
  }
  return context;
}
function useComboboxFloatingContext() {
  const context = React24.useContext(ComboboxFloatingContext);
  if (!context) {
    throw new Error(true ? "Base UI: ComboboxFloatingContext is missing. Combobox parts must be placed within <Combobox.Root>." : formatErrorMessage_default(23));
  }
  return context;
}
function useComboboxDerivedItemsContext() {
  const context = React24.useContext(ComboboxDerivedItemsContext);
  if (!context) {
    throw new Error(true ? "Base UI: ComboboxItemsContext is missing. Combobox parts must be placed within <Combobox.Root>." : formatErrorMessage_default(24));
  }
  return context;
}
function useComboboxInputValueContext() {
  return React24.useContext(ComboboxInputValueContext);
}

// node_modules/@base-ui/react/esm/combobox/store.js
var selectors2 = {
  id: createSelector((state) => state.id),
  labelId: createSelector((state) => state.labelId),
  query: createSelector((state) => state.query),
  items: createSelector((state) => state.items),
  selectedValue: createSelector((state) => state.selectedValue),
  hasSelectionChips: createSelector((state) => {
    const selectedValue = state.selectedValue;
    return Array.isArray(selectedValue) && selectedValue.length > 0;
  }),
  hasSelectedValue: createSelector((state) => {
    const {
      selectedValue,
      selectionMode
    } = state;
    if (selectedValue == null) {
      return false;
    }
    if (selectionMode === "multiple" && Array.isArray(selectedValue)) {
      return selectedValue.length > 0;
    }
    return true;
  }),
  hasNullItemLabel: createSelector((state, enabled) => {
    return enabled ? hasNullItemLabel(state.items) : false;
  }),
  open: createSelector((state) => state.open),
  mounted: createSelector((state) => state.mounted),
  forceMounted: createSelector((state) => state.forceMounted),
  inline: createSelector((state) => state.inline),
  activeIndex: createSelector((state) => state.activeIndex),
  selectedIndex: createSelector((state) => state.selectedIndex),
  isActive: createSelector((state, index) => state.activeIndex === index),
  isSelected: createSelector((state, itemValue) => {
    const comparer = state.isItemEqualToValue;
    const selectedValue = state.selectedValue;
    if (Array.isArray(selectedValue)) {
      return selectedValue.some((selectedItem) => compareItemEquality(itemValue, selectedItem, comparer));
    }
    return compareItemEquality(itemValue, selectedValue, comparer);
  }),
  transitionStatus: createSelector((state) => state.transitionStatus),
  popupProps: createSelector((state) => state.popupProps),
  inputProps: createSelector((state) => state.inputProps),
  triggerProps: createSelector((state) => state.triggerProps),
  getItemProps: createSelector((state) => state.getItemProps),
  positionerElement: createSelector((state) => state.positionerElement),
  listElement: createSelector((state) => state.listElement),
  triggerElement: createSelector((state) => state.triggerElement),
  inputElement: createSelector((state) => state.inputElement),
  inputGroupElement: createSelector((state) => state.inputGroupElement),
  popupSide: createSelector((state) => state.popupSide),
  openMethod: createSelector((state) => state.openMethod),
  inputInsidePopup: createSelector((state) => state.inputInsidePopup),
  selectionMode: createSelector((state) => state.selectionMode),
  listRef: createSelector((state) => state.listRef),
  labelsRef: createSelector((state) => state.labelsRef),
  popupRef: createSelector((state) => state.popupRef),
  emptyRef: createSelector((state) => state.emptyRef),
  inputRef: createSelector((state) => state.inputRef),
  keyboardActiveRef: createSelector((state) => state.keyboardActiveRef),
  chipsContainerRef: createSelector((state) => state.chipsContainerRef),
  clearRef: createSelector((state) => state.clearRef),
  valuesRef: createSelector((state) => state.valuesRef),
  allValuesRef: createSelector((state) => state.allValuesRef),
  name: createSelector((state) => state.name),
  disabled: createSelector((state) => state.disabled),
  readOnly: createSelector((state) => state.readOnly),
  required: createSelector((state) => state.required),
  grid: createSelector((state) => state.grid),
  isGrouped: createSelector((state) => state.isGrouped),
  virtualized: createSelector((state) => state.virtualized),
  onOpenChangeComplete: createSelector((state) => state.onOpenChangeComplete),
  openOnInputClick: createSelector((state) => state.openOnInputClick),
  itemToStringLabel: createSelector((state) => state.itemToStringLabel),
  isItemEqualToValue: createSelector((state) => state.isItemEqualToValue),
  modal: createSelector((state) => state.modal),
  autoHighlight: createSelector((state) => state.autoHighlight),
  submitOnItemClick: createSelector((state) => state.submitOnItemClick)
};

// node_modules/@base-ui/react/esm/combobox/root/utils/index.js
function createCollatorItemFilter(collatorFilter, itemToStringLabel) {
  return (item, query) => {
    if (item == null) {
      return false;
    }
    const itemString = stringifyAsLabel(item, itemToStringLabel);
    return collatorFilter.contains(itemString, query);
  };
}
function createSingleSelectionCollatorFilter(collatorFilter, itemToStringLabel, selectedValue) {
  return (item, query) => {
    if (item == null) {
      return false;
    }
    if (!query) {
      return true;
    }
    const itemString = stringifyAsLabel(item, itemToStringLabel);
    const selectedString = selectedValue != null ? stringifyAsLabel(selectedValue, itemToStringLabel) : "";
    if (selectedString && collatorFilter.contains(selectedString, query) && selectedString.length === query.length) {
      return true;
    }
    return collatorFilter.contains(itemString, query);
  };
}

// node_modules/@base-ui/react/esm/combobox/root/utils/useFilter.js
var React25 = __toESM(require_react(), 1);
var filterCache = /* @__PURE__ */ new Map();
function stringifyLocale(locale) {
  if (Array.isArray(locale)) {
    return locale.map((value) => stringifyLocale(value)).join(",");
  }
  if (locale == null) {
    return "";
  }
  return String(locale);
}
function getFilter(options = {}) {
  const mergedOptions = {
    usage: "search",
    sensitivity: "base",
    ignorePunctuation: true,
    ...options
  };
  const cacheKey = `${stringifyLocale(options.locale)}|${JSON.stringify(mergedOptions)}`;
  const cachedFilter = filterCache.get(cacheKey);
  if (cachedFilter) {
    return cachedFilter;
  }
  const collator = new Intl.Collator(options.locale, mergedOptions);
  const filter = {
    contains(item, query, itemToString) {
      if (!query) {
        return true;
      }
      const itemString = stringifyAsLabel(item, itemToString);
      for (let i = 0; i <= itemString.length - query.length; i += 1) {
        if (collator.compare(itemString.slice(i, i + query.length), query) === 0) {
          return true;
        }
      }
      return false;
    },
    startsWith(item, query, itemToString) {
      if (!query) {
        return true;
      }
      const itemString = stringifyAsLabel(item, itemToString);
      return collator.compare(itemString.slice(0, query.length), query) === 0;
    },
    endsWith(item, query, itemToString) {
      if (!query) {
        return true;
      }
      const itemString = stringifyAsLabel(item, itemToString);
      const queryLength = query.length;
      return itemString.length >= queryLength && collator.compare(itemString.slice(itemString.length - queryLength), query) === 0;
    }
  };
  filterCache.set(cacheKey, filter);
  return filter;
}
var useCoreFilter = getFilter;
function useComboboxFilter(options = {}) {
  const {
    multiple = false,
    value,
    ...collatorOptions
  } = options;
  const coreFilter = getFilter(collatorOptions);
  const contains2 = React25.useCallback((item, query, itemToString) => {
    if (multiple) {
      return createCollatorItemFilter(coreFilter, itemToString)(item, query);
    }
    return createSingleSelectionCollatorFilter(coreFilter, itemToString, value)(item, query);
  }, [coreFilter, value, multiple]);
  return React25.useMemo(() => ({
    contains: contains2,
    startsWith: coreFilter.startsWith,
    endsWith: coreFilter.endsWith
  }), [contains2, coreFilter]);
}

// node_modules/@base-ui/react/esm/combobox/root/utils/constants.js
var NO_ACTIVE_VALUE = /* @__PURE__ */ Symbol("none");
var INITIAL_LAST_HIGHLIGHT = {
  value: NO_ACTIVE_VALUE,
  index: -1
};

// node_modules/@base-ui/react/esm/combobox/root/AriaCombobox.js
var import_jsx_runtime6 = __toESM(require_jsx_runtime(), 1);
function AriaCombobox(props) {
  const {
    id: idProp,
    onOpenChangeComplete: onOpenChangeCompleteProp,
    defaultSelectedValue = null,
    selectedValue: selectedValueProp,
    onSelectedValueChange,
    defaultInputValue: defaultInputValueProp,
    inputValue: inputValueProp,
    selectionMode = "none",
    onItemHighlighted: onItemHighlightedProp,
    name: nameProp,
    disabled: disabledProp = false,
    readOnly = false,
    required = false,
    inputRef: inputRefProp,
    grid = false,
    items,
    filteredItems: filteredItemsProp,
    filter: filterProp,
    openOnInputClick = true,
    autoHighlight = false,
    keepHighlight = false,
    highlightItemOnHover = true,
    loopFocus = true,
    itemToStringLabel,
    itemToStringValue,
    isItemEqualToValue = defaultItemEquality,
    virtualized = false,
    inline: inlineProp = false,
    fillInputOnItemPress = true,
    modal = false,
    limit = -1,
    autoComplete = "list",
    formAutoComplete,
    locale,
    submitOnItemClick = false
  } = props;
  const {
    clearErrors
  } = useFormContext();
  const {
    setDirty,
    validityData,
    shouldValidateOnChange,
    setFilled,
    name: fieldName,
    disabled: fieldDisabled,
    setTouched,
    setFocused,
    validationMode,
    validation
  } = useFieldRootContext();
  const id = useLabelableId({
    id: idProp
  });
  const collatorFilter = useCoreFilter({
    locale
  });
  const [queryChangedAfterOpen, setQueryChangedAfterOpen] = React26.useState(false);
  const [closeQuery, setCloseQuery] = React26.useState(null);
  const listRef = React26.useRef([]);
  const labelsRef = React26.useRef([]);
  const popupRef = React26.useRef(null);
  const inputRef = React26.useRef(null);
  const startDismissRef = React26.useRef(null);
  const endDismissRef = React26.useRef(null);
  const emptyRef = React26.useRef(null);
  const keyboardActiveRef = React26.useRef(true);
  const hadInputClearRef = React26.useRef(false);
  const chipsContainerRef = React26.useRef(null);
  const clearRef = React26.useRef(null);
  const selectionEventRef = React26.useRef(null);
  const lastHighlightRef = React26.useRef(INITIAL_LAST_HIGHLIGHT);
  const pendingQueryHighlightRef = React26.useRef(null);
  const valuesRef = React26.useRef([]);
  const allValuesRef = React26.useRef([]);
  const disabled = fieldDisabled || disabledProp;
  const name = fieldName ?? nameProp;
  const multiple = selectionMode === "multiple";
  const single = selectionMode === "single";
  const hasInputValue = inputValueProp !== void 0 || defaultInputValueProp !== void 0;
  const hasItems = items !== void 0;
  const hasFilteredItemsProp = filteredItemsProp !== void 0;
  let autoHighlightMode;
  if (autoHighlight === "always") {
    autoHighlightMode = "always";
  } else {
    autoHighlightMode = autoHighlight ? "input-change" : false;
  }
  const [selectedValue, setSelectedValueUnwrapped] = useControlled({
    controlled: selectedValueProp,
    default: multiple ? defaultSelectedValue ?? EMPTY_ARRAY : defaultSelectedValue,
    name: "Combobox",
    state: "selectedValue"
  });
  const filter = React26.useMemo(() => {
    if (filterProp === null) {
      return () => true;
    }
    if (filterProp !== void 0) {
      return filterProp;
    }
    if (single && !queryChangedAfterOpen) {
      return createSingleSelectionCollatorFilter(collatorFilter, itemToStringLabel, selectedValue);
    }
    return createCollatorItemFilter(collatorFilter, itemToStringLabel);
  }, [filterProp, single, selectedValue, queryChangedAfterOpen, collatorFilter, itemToStringLabel]);
  const initialDefaultInputValue = useRefWithInit(() => {
    if (hasInputValue) {
      return defaultInputValueProp ?? "";
    }
    if (single) {
      return stringifyAsLabel(selectedValue, itemToStringLabel);
    }
    return "";
  }).current;
  const [inputValue, setInputValueUnwrapped] = useControlled({
    controlled: inputValueProp,
    default: initialDefaultInputValue,
    name: "Combobox",
    state: "inputValue"
  });
  const [open, setOpenUnwrapped] = useControlled({
    controlled: props.open,
    default: props.defaultOpen,
    name: "Combobox",
    state: "open"
  });
  const isGrouped = isGroupedItems(items);
  const query = closeQuery ?? (inputValue === "" ? "" : String(inputValue).trim());
  const selectedLabelString = single ? stringifyAsLabel(selectedValue, itemToStringLabel) : "";
  const shouldBypassFiltering = single && !queryChangedAfterOpen && query !== "" && selectedLabelString !== "" && selectedLabelString.length === query.length && collatorFilter.contains(selectedLabelString, query);
  const filterQuery = shouldBypassFiltering ? "" : query;
  const shouldIgnoreExternalFiltering = hasItems && hasFilteredItemsProp && shouldBypassFiltering;
  const flatItems = React26.useMemo(() => {
    if (!items) {
      return EMPTY_ARRAY;
    }
    if (isGrouped) {
      return items.flatMap((group) => group.items);
    }
    return items;
  }, [items, isGrouped]);
  const filteredItems = React26.useMemo(() => {
    if (filteredItemsProp && !shouldIgnoreExternalFiltering) {
      return filteredItemsProp;
    }
    if (!items) {
      return EMPTY_ARRAY;
    }
    if (isGrouped) {
      const groupedItems = items;
      const resultingGroups = [];
      let currentCount = 0;
      for (const group of groupedItems) {
        if (limit > -1 && currentCount >= limit) {
          break;
        }
        const candidateItems = filterQuery === "" ? group.items : group.items.filter((item) => filter(item, filterQuery, itemToStringLabel));
        if (candidateItems.length === 0) {
          continue;
        }
        const remainingLimit = limit > -1 ? limit - currentCount : Infinity;
        const itemsToTake = candidateItems.slice(0, remainingLimit);
        if (itemsToTake.length > 0) {
          const newGroup = {
            ...group,
            items: itemsToTake
          };
          resultingGroups.push(newGroup);
          currentCount += itemsToTake.length;
        }
      }
      return resultingGroups;
    }
    if (filterQuery === "") {
      return limit > -1 ? flatItems.slice(0, limit) : (
        // The cast here is done as `flatItems` is readonly.
        // valuesRef.current, a mutable ref, can be set to `flatFilteredItems`, which may
        // reference this exact readonly value, creating a mutation risk.
        // However, <Combobox.Item> can never mutate this value as the mutating effect
        // bails early when `items` is provided, and this is only ever returned
        // when `items` is provided due to the early return at the top of this hook.
        flatItems
      );
    }
    const limitedItems = [];
    for (const item of flatItems) {
      if (limit > -1 && limitedItems.length >= limit) {
        break;
      }
      if (filter(item, filterQuery, itemToStringLabel)) {
        limitedItems.push(item);
      }
    }
    return limitedItems;
  }, [filteredItemsProp, shouldIgnoreExternalFiltering, items, isGrouped, filterQuery, limit, filter, itemToStringLabel, flatItems]);
  const flatFilteredItems = React26.useMemo(() => {
    if (isGrouped) {
      const groups = filteredItems;
      return groups.flatMap((g) => g.items);
    }
    return filteredItems;
  }, [filteredItems, isGrouped]);
  const store = useRefWithInit(() => new Store({
    id,
    labelId: void 0,
    selectedValue,
    open,
    filter,
    query,
    items,
    selectionMode,
    listRef,
    labelsRef,
    popupRef,
    emptyRef,
    inputRef,
    startDismissRef,
    endDismissRef,
    keyboardActiveRef,
    chipsContainerRef,
    clearRef,
    valuesRef,
    allValuesRef,
    selectionEventRef,
    name,
    disabled,
    readOnly,
    required,
    grid,
    isGrouped,
    virtualized,
    openOnInputClick,
    itemToStringLabel,
    isItemEqualToValue,
    modal,
    autoHighlight: autoHighlightMode,
    submitOnItemClick,
    hasInputValue,
    mounted: false,
    forceMounted: false,
    transitionStatus: "idle",
    inline: inlineProp,
    activeIndex: null,
    selectedIndex: null,
    popupProps: {},
    inputProps: {},
    triggerProps: {},
    positionerElement: null,
    listElement: null,
    triggerElement: null,
    inputElement: null,
    inputGroupElement: null,
    popupSide: null,
    openMethod: null,
    inputInsidePopup: true,
    onOpenChangeComplete: onOpenChangeCompleteProp || NOOP,
    // Placeholder callbacks replaced on first render
    setOpen: NOOP,
    setInputValue: NOOP,
    setSelectedValue: NOOP,
    setIndices: NOOP,
    onItemHighlighted: NOOP,
    handleSelection: NOOP,
    getItemProps: () => EMPTY_OBJECT,
    forceMount: NOOP,
    requestSubmit: NOOP
  })).current;
  const fieldRawValue = selectionMode === "none" ? inputValue : selectedValue;
  const fieldStringValue = React26.useMemo(() => {
    if (selectionMode === "none") {
      return fieldRawValue;
    }
    if (Array.isArray(selectedValue)) {
      return selectedValue.map((value) => stringifyAsValue(value, itemToStringValue));
    }
    return stringifyAsValue(selectedValue, itemToStringValue);
  }, [fieldRawValue, itemToStringValue, selectionMode, selectedValue]);
  const onItemHighlighted = useStableCallback(onItemHighlightedProp);
  const onOpenChangeComplete = useStableCallback(onOpenChangeCompleteProp);
  const activeIndex = useStore(store, selectors2.activeIndex);
  const selectedIndex = useStore(store, selectors2.selectedIndex);
  const positionerElement = useStore(store, selectors2.positionerElement);
  const listElement = useStore(store, selectors2.listElement);
  const triggerElement = useStore(store, selectors2.triggerElement);
  const inputElement = useStore(store, selectors2.inputElement);
  const inputGroupElement = useStore(store, selectors2.inputGroupElement);
  const inline = useStore(store, selectors2.inline);
  const inputInsidePopup = useStore(store, selectors2.inputInsidePopup);
  const triggerRef = useValueAsRef(triggerElement);
  const {
    mounted,
    setMounted,
    transitionStatus
  } = useTransitionStatus(open);
  const {
    openMethod,
    triggerProps
  } = useOpenInteractionType(open);
  useField({
    id,
    name,
    commit: validation.commit,
    value: fieldRawValue,
    controlRef: inputInsidePopup ? triggerRef : inputRef,
    getValue: () => fieldStringValue
  });
  const forceMount = useStableCallback(() => {
    if (items) {
      labelsRef.current = flatFilteredItems.map((item) => stringifyAsLabel(item, itemToStringLabel));
    } else {
      store.set("forceMounted", true);
    }
  });
  const initialSelectedValueRef = React26.useRef(selectedValue);
  useIsoLayoutEffect(() => {
    if (selectedValue !== initialSelectedValueRef.current) {
      forceMount();
    }
  }, [forceMount, selectedValue]);
  const setIndices = useStableCallback((options) => {
    store.update(options);
    const type = options.type || "none";
    if (options.activeIndex === void 0) {
      return;
    }
    if (options.activeIndex === null) {
      if (lastHighlightRef.current !== INITIAL_LAST_HIGHLIGHT) {
        lastHighlightRef.current = INITIAL_LAST_HIGHLIGHT;
        onItemHighlighted(void 0, createGenericEventDetails(type, void 0, {
          index: -1
        }));
      }
    } else {
      const activeValue = valuesRef.current[options.activeIndex];
      lastHighlightRef.current = {
        value: activeValue,
        index: options.activeIndex
      };
      onItemHighlighted(activeValue, createGenericEventDetails(type, void 0, {
        index: options.activeIndex
      }));
    }
  });
  const setInputValue = useStableCallback((next, eventDetails) => {
    hadInputClearRef.current = eventDetails.reason === reason_parts_exports.inputClear;
    props.onInputValueChange?.(next, eventDetails);
    if (eventDetails.isCanceled) {
      return;
    }
    if (eventDetails.reason === reason_parts_exports.inputChange) {
      const event = eventDetails.event;
      const inputType = event.inputType;
      const isTypedInput = event.type === "compositionend" || inputType != null && inputType !== "" && inputType !== "insertReplacementText";
      if (isTypedInput) {
        const hasQuery = next.trim() !== "";
        if (hasQuery) {
          setQueryChangedAfterOpen(true);
        }
        pendingQueryHighlightRef.current = {
          hasQuery
        };
        if (hasQuery && autoHighlightMode && store.state.activeIndex == null) {
          store.set("activeIndex", 0);
        }
      }
    }
    setInputValueUnwrapped(next);
  });
  const setOpen = useStableCallback((nextOpen, eventDetails) => {
    if (open === nextOpen) {
      return;
    }
    if (eventDetails.reason === "escape-key" && hasItems && flatFilteredItems.length === 0 && !store.state.emptyRef.current) {
      eventDetails.allowPropagation();
    }
    props.onOpenChange?.(nextOpen, eventDetails);
    if (eventDetails.isCanceled) {
      return;
    }
    if (!nextOpen && queryChangedAfterOpen) {
      if (single) {
        if (!inline) {
          setCloseQuery(query);
        }
        if (query === "") {
          setQueryChangedAfterOpen(false);
        }
      } else if (multiple) {
        if (inline || inputInsidePopup) {
          setIndices({
            activeIndex: null
          });
        } else {
          setCloseQuery(query);
        }
        setInputValue("", createChangeEventDetails(reason_parts_exports.inputClear, eventDetails.event));
      }
    }
    setOpenUnwrapped(nextOpen);
    if (!nextOpen && inputInsidePopup && (eventDetails.reason === reason_parts_exports.focusOut || eventDetails.reason === reason_parts_exports.outsidePress)) {
      setTouched(true);
      setFocused(false);
      if (validationMode === "onBlur") {
        const valueToValidate = selectionMode === "none" ? inputValue : selectedValue;
        validation.commit(valueToValidate);
      }
    }
  });
  const setSelectedValue = useStableCallback((nextValue, eventDetails) => {
    onSelectedValueChange?.(nextValue, eventDetails);
    if (eventDetails.isCanceled) {
      return;
    }
    setSelectedValueUnwrapped(nextValue);
    const shouldFillInput = selectionMode === "none" && popupRef.current && fillInputOnItemPress || single && !store.state.inputInsidePopup;
    if (shouldFillInput) {
      setInputValue(stringifyAsLabel(nextValue, itemToStringLabel), createChangeEventDetails(eventDetails.reason, eventDetails.event));
    }
    if (single && nextValue != null && eventDetails.reason !== reason_parts_exports.inputChange && queryChangedAfterOpen && !inline) {
      setCloseQuery(query);
    }
  });
  const handleSelection = useStableCallback((event, passedValue) => {
    let itemValue = passedValue;
    if (itemValue === void 0) {
      if (activeIndex === null) {
        return;
      }
      itemValue = valuesRef.current[activeIndex];
    }
    const targetEl = getTarget(event);
    const overrideEvent = selectionEventRef.current ?? event;
    selectionEventRef.current = null;
    const eventDetails = createChangeEventDetails(reason_parts_exports.itemPress, overrideEvent);
    const href = targetEl?.closest("a")?.getAttribute("href");
    if (href) {
      if (href.startsWith("#")) {
        setOpen(false, eventDetails);
      }
      return;
    }
    if (multiple) {
      const currentSelectedValue = Array.isArray(selectedValue) ? selectedValue : [];
      const isCurrentlySelected = selectedValueIncludes(currentSelectedValue, itemValue, store.state.isItemEqualToValue);
      const nextValue = isCurrentlySelected ? removeItem(currentSelectedValue, itemValue, store.state.isItemEqualToValue) : [...currentSelectedValue, itemValue];
      setSelectedValue(nextValue, eventDetails);
      const wasFiltering = inputRef.current ? inputRef.current.value.trim() !== "" : false;
      if (!wasFiltering) {
        return;
      }
      if (store.state.inputInsidePopup) {
        setInputValue("", createChangeEventDetails(reason_parts_exports.inputClear, eventDetails.event));
      } else {
        setOpen(false, eventDetails);
      }
    } else {
      setSelectedValue(itemValue, eventDetails);
      setOpen(false, eventDetails);
    }
  });
  const requestSubmit = useStableCallback(() => {
    if (!store.state.submitOnItemClick) {
      return;
    }
    const form = store.state.inputElement?.form;
    if (form && typeof form.requestSubmit === "function") {
      form.requestSubmit();
    }
  });
  const handleUnmount = useStableCallback(() => {
    setMounted(false);
    onOpenChangeComplete?.(false);
    setQueryChangedAfterOpen(false);
    setCloseQuery(null);
    if (selectionMode === "none") {
      setIndices({
        activeIndex: null,
        selectedIndex: null
      });
    } else {
      setIndices({
        activeIndex: null
      });
    }
    if (multiple && inputRef.current && inputRef.current.value !== "" && !hadInputClearRef.current) {
      setInputValue("", createChangeEventDetails(reason_parts_exports.inputClear));
    }
    if (single) {
      if (store.state.inputInsidePopup) {
        if (inputRef.current && inputRef.current.value !== "") {
          setInputValue("", createChangeEventDetails(reason_parts_exports.inputClear));
        }
      } else {
        const stringVal = stringifyAsLabel(selectedValue, itemToStringLabel);
        if (inputRef.current && inputRef.current.value !== stringVal) {
          const reason = stringVal === "" ? reason_parts_exports.inputClear : reason_parts_exports.none;
          setInputValue(stringVal, createChangeEventDetails(reason));
        }
      }
    }
  });
  const resolvedPopupRef = React26.useMemo(() => {
    if (inline && positionerElement) {
      return {
        current: positionerElement.closest('[role="dialog"]')
      };
    }
    return popupRef;
  }, [inline, positionerElement]);
  useOpenChangeComplete({
    enabled: !props.actionsRef,
    open,
    ref: resolvedPopupRef,
    onComplete() {
      if (!open) {
        handleUnmount();
      }
    }
  });
  React26.useImperativeHandle(props.actionsRef, () => ({
    unmount: handleUnmount
  }), [handleUnmount]);
  useIsoLayoutEffect(function syncSelectedIndex() {
    if (open || selectionMode === "none") {
      return;
    }
    const registry = items ? flatItems : allValuesRef.current;
    if (multiple) {
      const currentValue = Array.isArray(selectedValue) ? selectedValue : [];
      const lastValue = currentValue[currentValue.length - 1];
      const lastIndex = findItemIndex(registry, lastValue, isItemEqualToValue);
      setIndices({
        selectedIndex: lastIndex === -1 ? null : lastIndex
      });
    } else {
      const index = findItemIndex(registry, selectedValue, isItemEqualToValue);
      setIndices({
        selectedIndex: index === -1 ? null : index
      });
    }
  }, [open, selectedValue, items, selectionMode, flatItems, multiple, isItemEqualToValue, setIndices]);
  useIsoLayoutEffect(() => {
    if (items) {
      valuesRef.current = flatFilteredItems;
      listRef.current.length = flatFilteredItems.length;
    }
  }, [items, flatFilteredItems]);
  useIsoLayoutEffect(() => {
    const pendingHighlight = pendingQueryHighlightRef.current;
    if (pendingHighlight) {
      if (pendingHighlight.hasQuery) {
        if (autoHighlightMode) {
          store.set("activeIndex", 0);
        }
      } else if (autoHighlightMode === "always") {
        store.set("activeIndex", 0);
      }
      pendingQueryHighlightRef.current = null;
    }
    if (!open && !inline) {
      return;
    }
    const shouldUseFlatFilteredItems = hasItems || hasFilteredItemsProp;
    const candidateItems = shouldUseFlatFilteredItems ? flatFilteredItems : valuesRef.current;
    const storeActiveIndex = store.state.activeIndex;
    if (storeActiveIndex == null) {
      if (autoHighlightMode === "always" && candidateItems.length > 0) {
        store.set("activeIndex", 0);
        return;
      }
      if (lastHighlightRef.current !== INITIAL_LAST_HIGHLIGHT) {
        lastHighlightRef.current = INITIAL_LAST_HIGHLIGHT;
        store.state.onItemHighlighted(void 0, createGenericEventDetails(reason_parts_exports.none, void 0, {
          index: -1
        }));
      }
      return;
    }
    if (storeActiveIndex >= candidateItems.length) {
      if (lastHighlightRef.current !== INITIAL_LAST_HIGHLIGHT) {
        lastHighlightRef.current = INITIAL_LAST_HIGHLIGHT;
        store.state.onItemHighlighted(void 0, createGenericEventDetails(reason_parts_exports.none, void 0, {
          index: -1
        }));
      }
      store.set("activeIndex", null);
      return;
    }
    const itemValue = candidateItems[storeActiveIndex];
    const previouslyHighlightedItemValue = lastHighlightRef.current.value;
    const isSameItem = previouslyHighlightedItemValue !== NO_ACTIVE_VALUE && compareItemEquality(itemValue, previouslyHighlightedItemValue, store.state.isItemEqualToValue);
    if (lastHighlightRef.current.index !== storeActiveIndex || !isSameItem) {
      lastHighlightRef.current = {
        value: itemValue,
        index: storeActiveIndex
      };
      store.state.onItemHighlighted(itemValue, createGenericEventDetails(reason_parts_exports.none, void 0, {
        index: storeActiveIndex
      }));
    }
  }, [activeIndex, autoHighlightMode, hasFilteredItemsProp, hasItems, flatFilteredItems, inline, open, store]);
  useIsoLayoutEffect(() => {
    if (selectionMode === "none") {
      setFilled(String(inputValue) !== "");
      return;
    }
    setFilled(multiple ? Array.isArray(selectedValue) && selectedValue.length > 0 : selectedValue != null);
  }, [setFilled, selectionMode, inputValue, selectedValue, multiple]);
  React26.useEffect(() => {
    if (hasItems && autoHighlightMode && flatFilteredItems.length === 0) {
      setIndices({
        activeIndex: null
      });
    }
  }, [hasItems, autoHighlightMode, flatFilteredItems.length, setIndices]);
  useValueChanged(query, () => {
    if (!open || query === "" || query === String(initialDefaultInputValue)) {
      return;
    }
    setQueryChangedAfterOpen(true);
  });
  useValueChanged(selectedValue, () => {
    if (selectionMode === "none") {
      return;
    }
    clearErrors(name);
    setDirty(selectedValue !== validityData.initialValue);
    if (shouldValidateOnChange()) {
      validation.commit(selectedValue);
    } else {
      validation.commit(selectedValue, true);
    }
    if (single && !hasInputValue && !inputInsidePopup) {
      const nextInputValue = stringifyAsLabel(selectedValue, itemToStringLabel);
      if (inputValue !== nextInputValue) {
        setInputValue(nextInputValue, createChangeEventDetails(reason_parts_exports.none));
      }
    }
  });
  useValueChanged(inputValue, () => {
    if (selectionMode !== "none") {
      return;
    }
    clearErrors(name);
    setDirty(inputValue !== validityData.initialValue);
    if (shouldValidateOnChange()) {
      validation.commit(inputValue);
    } else {
      validation.commit(inputValue, true);
    }
  });
  useValueChanged(items, () => {
    if (!single || hasInputValue || inputInsidePopup || queryChangedAfterOpen) {
      return;
    }
    const nextInputValue = stringifyAsLabel(selectedValue, itemToStringLabel);
    if (inputValue !== nextInputValue) {
      setInputValue(nextInputValue, createChangeEventDetails(reason_parts_exports.none));
    }
  });
  const floatingRootContext = useFloatingRootContext({
    open: inline ? true : open,
    onOpenChange: setOpen,
    elements: {
      reference: inputInsidePopup ? triggerElement : inputElement,
      floating: positionerElement
    }
  });
  let ariaHasPopup;
  let ariaExpanded;
  if (!inline) {
    ariaHasPopup = grid ? "grid" : "listbox";
    ariaExpanded = open ? "true" : "false";
  }
  const role = React26.useMemo(() => {
    const isPlainInput = inputElement?.tagName === "INPUT";
    const shouldTreatAsInput = inputElement == null || isPlainInput;
    const shouldApplyAria = shouldTreatAsInput || open;
    const reference = shouldTreatAsInput ? {
      autoComplete: "off",
      spellCheck: "false",
      autoCorrect: "off",
      autoCapitalize: "none"
    } : {};
    if (shouldApplyAria) {
      reference.role = "combobox";
      reference["aria-expanded"] = ariaExpanded;
      reference["aria-haspopup"] = ariaHasPopup;
      reference["aria-controls"] = open ? listElement?.id : void 0;
      reference["aria-autocomplete"] = autoComplete;
    }
    return {
      reference,
      floating: {
        role: "presentation"
      }
    };
  }, [inputElement, open, ariaExpanded, ariaHasPopup, listElement?.id, autoComplete]);
  const click = useClick(floatingRootContext, {
    enabled: !readOnly && !disabled && openOnInputClick,
    event: "mousedown-only",
    toggle: false,
    // Apply a small delay for touch to let iOS viewport centering settle.
    // This avoids top-bottom flip flickers if the preferred position is "top" when first tapping.
    touchOpenDelay: inputInsidePopup ? 0 : 50,
    reason: reason_parts_exports.inputPress
  });
  const dismiss = useDismiss(floatingRootContext, {
    enabled: !readOnly && !disabled && !inline,
    outsidePressEvent: {
      mouse: "sloppy",
      // The visual viewport (affected by the mobile software keyboard) can be
      // somewhat small. The user may want to scroll the screen to see more of
      // the popup.
      touch: "intentional"
    },
    // Without a popup, let the Escape key bubble the event up to other popups' handlers.
    bubbles: inline ? true : void 0,
    outsidePress(event) {
      const target = getTarget(event);
      return !contains(triggerElement, target) && !contains(clearRef.current, target) && !contains(chipsContainerRef.current, target) && !contains(inputGroupElement, target);
    }
  });
  const listNavigation = useListNavigation(floatingRootContext, {
    enabled: !readOnly && !disabled,
    id,
    listRef,
    activeIndex,
    selectedIndex,
    virtual: true,
    loopFocus,
    allowEscape: loopFocus && !autoHighlightMode,
    focusItemOnOpen: queryChangedAfterOpen || selectionMode === "none" && !autoHighlightMode ? false : "auto",
    focusItemOnHover: highlightItemOnHover,
    resetOnPointerLeave: !keepHighlight,
    // `cols` > 1 enables grid navigation.
    // Since <Combobox.Row> infers column sizes (and is required when building a grid),
    // it works correctly even with a value of `2`.
    // Floating UI tests don't require `role="row"` wrappers, so retains the number API.
    cols: grid ? 2 : 1,
    orientation: grid ? "horizontal" : void 0,
    disabledIndices: EMPTY_ARRAY,
    onNavigate(nextActiveIndex, event) {
      if (!event && !open || transitionStatus === "ending") {
        return;
      }
      if (!event) {
        setIndices({
          activeIndex: nextActiveIndex
        });
      } else {
        setIndices({
          activeIndex: nextActiveIndex,
          type: keyboardActiveRef.current ? "keyboard" : "pointer"
        });
      }
    }
  });
  const {
    getReferenceProps,
    getFloatingProps,
    getItemProps
  } = useInteractions([role, click, dismiss, listNavigation]);
  useOnFirstRender(() => {
    store.update({
      inline: inlineProp,
      popupProps: getFloatingProps(),
      inputProps: getReferenceProps(),
      triggerProps,
      getItemProps,
      setOpen,
      setInputValue,
      setSelectedValue,
      setIndices,
      onItemHighlighted,
      handleSelection,
      forceMount,
      requestSubmit
    });
  });
  useIsoLayoutEffect(() => {
    store.update({
      id,
      selectedValue,
      open,
      mounted,
      transitionStatus,
      items,
      inline: inlineProp,
      popupProps: getFloatingProps(),
      inputProps: getReferenceProps(),
      triggerProps,
      openMethod,
      getItemProps,
      selectionMode,
      name,
      disabled,
      readOnly,
      required,
      grid,
      isGrouped,
      virtualized,
      onOpenChangeComplete,
      openOnInputClick,
      itemToStringLabel,
      modal,
      autoHighlight: autoHighlightMode,
      isItemEqualToValue,
      submitOnItemClick,
      hasInputValue,
      requestSubmit
    });
  }, [store, id, selectedValue, open, mounted, transitionStatus, items, getFloatingProps, getReferenceProps, getItemProps, openMethod, triggerProps, selectionMode, name, disabled, readOnly, required, validation, grid, isGrouped, virtualized, onOpenChangeComplete, openOnInputClick, itemToStringLabel, modal, isItemEqualToValue, submitOnItemClick, hasInputValue, inlineProp, requestSubmit, autoHighlightMode]);
  const hiddenInputRef = useMergedRefs(inputRefProp, validation.inputRef);
  const itemsContextValue = React26.useMemo(() => ({
    query,
    hasItems,
    filteredItems,
    flatFilteredItems
  }), [query, hasItems, filteredItems, flatFilteredItems]);
  const serializedValue = React26.useMemo(() => {
    if (Array.isArray(fieldRawValue)) {
      return "";
    }
    return stringifyAsValue(fieldRawValue, itemToStringValue);
  }, [fieldRawValue, itemToStringValue]);
  const hasMultipleSelection = multiple && Array.isArray(selectedValue) && selectedValue.length > 0;
  const hiddenInputName = multiple || selectionMode === "none" ? void 0 : name;
  const hiddenInputs = React26.useMemo(() => {
    if (!multiple || !Array.isArray(selectedValue) || !name) {
      return null;
    }
    return selectedValue.map((value) => {
      const currentSerializedValue = stringifyAsValue(value, itemToStringValue);
      return (0, import_jsx_runtime6.jsx)("input", {
        type: "hidden",
        name,
        value: currentSerializedValue
      }, currentSerializedValue);
    });
  }, [multiple, selectedValue, name, itemToStringValue]);
  const children = (0, import_jsx_runtime6.jsxs)(React26.Fragment, {
    children: [props.children, (0, import_jsx_runtime6.jsx)("input", {
      ...validation.getInputValidationProps({
        // Move focus when the hidden input is focused.
        onFocus() {
          if (inputInsidePopup) {
            triggerElement?.focus();
            return;
          }
          (inputRef.current || triggerElement)?.focus();
        },
        // Handle browser autofill.
        onChange(event) {
          if (event.nativeEvent.defaultPrevented) {
            return;
          }
          const nextValue = event.target.value;
          const details = createChangeEventDetails(reason_parts_exports.none, event.nativeEvent);
          function handleChange() {
            if (multiple) {
              return;
            }
            if (selectionMode === "none") {
              setDirty(nextValue !== validityData.initialValue);
              setInputValue(nextValue, details);
              if (shouldValidateOnChange()) {
                validation.commit(nextValue);
              }
              return;
            }
            const matchingValue = valuesRef.current.find((v) => {
              const candidate = stringifyAsValue(v, itemToStringValue);
              if (candidate.toLowerCase() === nextValue.toLowerCase()) {
                return true;
              }
              return false;
            });
            if (matchingValue != null) {
              setDirty(matchingValue !== validityData.initialValue);
              setSelectedValue?.(matchingValue, details);
              if (shouldValidateOnChange()) {
                validation.commit(matchingValue);
              }
            }
          }
          if (items) {
            handleChange();
          } else {
            forceMount();
            queueMicrotask(handleChange);
          }
        }
      }),
      id: id && hiddenInputName == null ? `${id}-hidden-input` : void 0,
      name: hiddenInputName,
      autoComplete: formAutoComplete,
      disabled,
      required: required && !hasMultipleSelection,
      readOnly,
      value: serializedValue,
      ref: hiddenInputRef,
      style: hiddenInputName ? visuallyHiddenInput : visuallyHidden,
      tabIndex: -1,
      "aria-hidden": true
    }), hiddenInputs]
  });
  return (0, import_jsx_runtime6.jsx)(ComboboxRootContext.Provider, {
    value: store,
    children: (0, import_jsx_runtime6.jsx)(ComboboxFloatingContext.Provider, {
      value: floatingRootContext,
      children: (0, import_jsx_runtime6.jsx)(ComboboxDerivedItemsContext.Provider, {
        value: itemsContextValue,
        children: (0, import_jsx_runtime6.jsx)(ComboboxInputValueContext.Provider, {
          value: inputValue,
          children
        })
      })
    })
  });
}

// node_modules/@base-ui/react/esm/autocomplete/root/AutocompleteRoot.js
var import_jsx_runtime7 = __toESM(require_jsx_runtime(), 1);
function AutocompleteRoot(props) {
  const {
    openOnInputClick = false,
    value,
    defaultValue,
    onValueChange,
    mode = "list",
    itemToStringValue,
    ...other
  } = props;
  const enableInline = mode === "inline" || mode === "both";
  const staticItems = mode === "inline" || mode === "none";
  const isControlled = value !== void 0;
  const [internalValue, setInternalValue] = React27.useState(defaultValue ?? "");
  const [inlineInputValue, setInlineInputValue] = React27.useState("");
  React27.useEffect(() => {
    if (isControlled) {
      setInlineInputValue("");
    }
  }, [value, isControlled]);
  let resolvedInputValue;
  if (enableInline && inlineInputValue !== "") {
    resolvedInputValue = inlineInputValue;
  } else if (isControlled) {
    resolvedInputValue = value ?? "";
  } else {
    resolvedInputValue = internalValue;
  }
  const handleValueChange = useStableCallback((nextValue, eventDetails) => {
    setInlineInputValue("");
    if (!isControlled) {
      setInternalValue(nextValue);
    }
    onValueChange?.(nextValue, eventDetails);
  });
  const collator = useCoreFilter();
  const baseFilter = React27.useMemo(() => {
    if (other.filter !== void 0) {
      return other.filter;
    }
    return collator.contains;
  }, [other.filter, collator]);
  const resolvedQuery = String(isControlled ? value : internalValue).trim();
  const resolvedFilter = React27.useMemo(() => {
    if (mode !== "both") {
      return staticItems ? null : baseFilter;
    }
    if (baseFilter === null) {
      return null;
    }
    return (item, _query, toString) => {
      return baseFilter(item, resolvedQuery, toString);
    };
  }, [baseFilter, mode, resolvedQuery, staticItems]);
  const handleItemHighlighted = useStableCallback((highlightedValue, eventDetails) => {
    props.onItemHighlighted?.(highlightedValue, eventDetails);
    if (eventDetails.reason === reason_parts_exports.pointer) {
      return;
    }
    if (enableInline) {
      if (highlightedValue == null) {
        setInlineInputValue("");
      } else {
        setInlineInputValue(stringifyAsLabel(highlightedValue, itemToStringValue));
      }
    } else {
      setInlineInputValue("");
    }
  });
  return (0, import_jsx_runtime7.jsx)(AriaCombobox, {
    ...other,
    itemToStringLabel: itemToStringValue,
    openOnInputClick,
    selectionMode: "none",
    fillInputOnItemPress: true,
    filter: resolvedFilter,
    autoComplete: mode,
    inputValue: resolvedInputValue,
    defaultInputValue: defaultValue,
    onInputValueChange: handleValueChange,
    onItemHighlighted: handleItemHighlighted
  });
}

// node_modules/@base-ui/react/esm/autocomplete/value/AutocompleteValue.js
var React28 = __toESM(require_react(), 1);
var import_jsx_runtime8 = __toESM(require_jsx_runtime(), 1);
function AutocompleteValue(props) {
  const {
    children
  } = props;
  const inputValue = useComboboxInputValueContext();
  let returnValue = null;
  if (typeof children === "function") {
    returnValue = children(String(inputValue));
  } else if (children != null) {
    returnValue = children;
  } else {
    returnValue = inputValue;
  }
  return (0, import_jsx_runtime8.jsx)(React28.Fragment, {
    children: returnValue
  });
}

// node_modules/@base-ui/react/esm/combobox/trigger/ComboboxTrigger.js
var React29 = __toESM(require_react(), 1);

// node_modules/@base-ui/react/esm/combobox/utils/stateAttributesMapping.js
var triggerStateAttributesMapping = {
  ...pressableTriggerOpenStateMapping,
  ...fieldValidityMapping,
  popupSide: (side) => side ? {
    "data-popup-side": side
  } : null,
  listEmpty: (empty) => empty ? {
    "data-list-empty": ""
  } : null
};

// node_modules/@base-ui/react/esm/combobox/trigger/ComboboxTrigger.js
var BOUNDARY_OFFSET = 2;
var ComboboxTrigger = React29.forwardRef(function ComboboxTrigger2(componentProps, forwardedRef) {
  const {
    render,
    className,
    nativeButton = true,
    disabled: disabledProp = false,
    id: idProp,
    ...elementProps
  } = componentProps;
  const {
    state: fieldState,
    disabled: fieldDisabled,
    setTouched,
    setFocused,
    validationMode,
    validation
  } = useFieldRootContext();
  const {
    labelId: fieldLabelId
  } = useLabelableContext();
  const store = useComboboxRootContext();
  const {
    filteredItems
  } = useComboboxDerivedItemsContext();
  const selectionMode = useStore(store, selectors2.selectionMode);
  const comboboxDisabled = useStore(store, selectors2.disabled);
  const readOnly = useStore(store, selectors2.readOnly);
  const required = useStore(store, selectors2.required);
  const mounted = useStore(store, selectors2.mounted);
  const popupSideValue = useStore(store, selectors2.popupSide);
  const positionerElement = useStore(store, selectors2.positionerElement);
  const listElement = useStore(store, selectors2.listElement);
  const triggerProps = useStore(store, selectors2.triggerProps);
  const triggerElement = useStore(store, selectors2.triggerElement);
  const inputInsidePopup = useStore(store, selectors2.inputInsidePopup);
  const rootId = useStore(store, selectors2.id);
  const comboboxLabelId = useStore(store, selectors2.labelId);
  const open = useStore(store, selectors2.open);
  const selectedValue = useStore(store, selectors2.selectedValue);
  const activeIndex = useStore(store, selectors2.activeIndex);
  const selectedIndex = useStore(store, selectors2.selectedIndex);
  const hasSelectedValue = useStore(store, selectors2.hasSelectedValue);
  const floatingRootContext = useComboboxFloatingContext();
  const inputValue = useComboboxInputValueContext();
  const focusTimeout = useTimeout();
  const disabled = fieldDisabled || comboboxDisabled || disabledProp;
  const listEmpty = filteredItems.length === 0;
  const popupSide = mounted && positionerElement ? popupSideValue : null;
  useLabelableId({
    id: inputInsidePopup ? idProp : void 0
  });
  const id = inputInsidePopup ? idProp ?? rootId : idProp;
  const ariaLabelledBy = resolveAriaLabelledBy(fieldLabelId, comboboxLabelId);
  const currentPointerTypeRef = React29.useRef("");
  function trackPointerType(event) {
    currentPointerTypeRef.current = event.pointerType;
  }
  const domReference = floatingRootContext.useState("domReferenceElement");
  React29.useEffect(() => {
    if (!inputInsidePopup) {
      return;
    }
    if (triggerElement && triggerElement !== domReference) {
      floatingRootContext.set("domReferenceElement", triggerElement);
    }
  }, [triggerElement, domReference, floatingRootContext, inputInsidePopup]);
  const {
    reference: triggerTypeaheadProps
  } = useTypeahead(floatingRootContext, {
    enabled: !open && !readOnly && !comboboxDisabled && selectionMode === "single",
    listRef: store.state.labelsRef,
    activeIndex,
    selectedIndex,
    onMatch(index) {
      const nextSelectedValue = store.state.valuesRef.current[index];
      if (nextSelectedValue !== void 0) {
        store.state.setSelectedValue(nextSelectedValue, createChangeEventDetails("none"));
      }
    }
  });
  const {
    reference: triggerClickProps
  } = useClick(floatingRootContext, {
    enabled: !readOnly && !comboboxDisabled,
    event: "mousedown"
  });
  const {
    buttonRef,
    getButtonProps
  } = useButton({
    native: nativeButton,
    disabled
  });
  const state = {
    ...fieldState,
    open,
    disabled,
    popupSide,
    listEmpty,
    placeholder: !hasSelectedValue
  };
  const setTriggerElement = useStableCallback((element2) => {
    store.set("triggerElement", element2);
  });
  const element = useRenderElement("button", componentProps, {
    ref: [forwardedRef, buttonRef, setTriggerElement],
    state,
    props: [triggerProps, triggerClickProps, triggerTypeaheadProps, {
      id,
      tabIndex: inputInsidePopup ? 0 : -1,
      role: inputInsidePopup ? "combobox" : void 0,
      "aria-expanded": open ? "true" : "false",
      "aria-haspopup": inputInsidePopup ? "dialog" : "listbox",
      "aria-controls": open ? listElement?.id : void 0,
      "aria-required": inputInsidePopup ? required || void 0 : void 0,
      "aria-labelledby": ariaLabelledBy,
      onPointerDown: trackPointerType,
      onPointerEnter: trackPointerType,
      onFocus() {
        setFocused(true);
        if (disabled || readOnly) {
          return;
        }
        focusTimeout.start(0, store.state.forceMount);
      },
      onBlur(event) {
        if (contains(positionerElement, event.relatedTarget)) {
          return;
        }
        setTouched(true);
        setFocused(false);
        if (validationMode === "onBlur") {
          const valueToValidate = selectionMode === "none" ? inputValue : selectedValue;
          validation.commit(valueToValidate);
        }
      },
      onMouseDown(event) {
        if (disabled || readOnly) {
          return;
        }
        if (!inputInsidePopup) {
          floatingRootContext.set("domReferenceElement", event.currentTarget);
        }
        store.state.forceMount();
        if (currentPointerTypeRef.current !== "touch") {
          store.state.inputRef.current?.focus();
          if (!inputInsidePopup) {
            event.preventDefault();
          }
        }
        if (open) {
          return;
        }
        const doc = ownerDocument(event.currentTarget);
        function handleMouseUp(mouseEvent) {
          if (!triggerElement) {
            return;
          }
          const mouseUpTarget = getTarget(mouseEvent);
          const positioner = store.state.positionerElement;
          const list = store.state.listElement;
          if (contains(triggerElement, mouseUpTarget) || contains(positioner, mouseUpTarget) || contains(list, mouseUpTarget) || mouseUpTarget === triggerElement) {
            return;
          }
          const bounds = getPseudoElementBounds(triggerElement);
          const withinHorizontal = mouseEvent.clientX >= bounds.left - BOUNDARY_OFFSET && mouseEvent.clientX <= bounds.right + BOUNDARY_OFFSET;
          const withinVertical = mouseEvent.clientY >= bounds.top - BOUNDARY_OFFSET && mouseEvent.clientY <= bounds.bottom + BOUNDARY_OFFSET;
          if (withinHorizontal && withinVertical) {
            return;
          }
          store.state.setOpen(false, createChangeEventDetails("cancel-open", mouseEvent));
        }
        if (inputInsidePopup) {
          doc.addEventListener("mouseup", handleMouseUp, {
            once: true
          });
        }
      },
      onKeyDown(event) {
        if (disabled || readOnly) {
          return;
        }
        if (event.key === "ArrowDown" || event.key === "ArrowUp") {
          stopEvent(event);
          store.state.setOpen(true, createChangeEventDetails(reason_parts_exports.listNavigation, event.nativeEvent));
          store.state.inputRef.current?.focus();
        }
      }
    }, validation ? validation.getValidationProps(elementProps) : elementProps, getButtonProps],
    stateAttributesMapping: triggerStateAttributesMapping
  });
  return element;
});
if (true) ComboboxTrigger.displayName = "ComboboxTrigger";

// node_modules/@base-ui/react/esm/combobox/input/ComboboxInput.js
var React33 = __toESM(require_react(), 1);

// node_modules/@base-ui/react/esm/combobox/chips/ComboboxChipsContext.js
var React30 = __toESM(require_react(), 1);
var ComboboxChipsContext = React30.createContext(void 0);
if (true) ComboboxChipsContext.displayName = "ComboboxChipsContext";
function useComboboxChipsContext() {
  return React30.useContext(ComboboxChipsContext);
}

// node_modules/@base-ui/react/esm/combobox/positioner/ComboboxPositionerContext.js
var React31 = __toESM(require_react(), 1);
var ComboboxPositionerContext = React31.createContext(void 0);
if (true) ComboboxPositionerContext.displayName = "ComboboxPositionerContext";
function useComboboxPositionerContext(optional) {
  const context = React31.useContext(ComboboxPositionerContext);
  if (context === void 0 && !optional) {
    throw new Error(true ? "Base UI: <Combobox.Popup> and <Combobox.Arrow> must be used within the <Combobox.Positioner> component" : formatErrorMessage_default(21));
  }
  return context;
}

// node_modules/@base-ui/react/esm/combobox/utils/ComboboxInternalDismissButton.js
var React32 = __toESM(require_react(), 1);
var import_jsx_runtime9 = __toESM(require_jsx_runtime(), 1);
var ComboboxInternalDismissButton = React32.forwardRef(function ComboboxInternalDismissButton2(_, forwardedRef) {
  const store = useComboboxRootContext();
  const {
    buttonRef,
    getButtonProps
  } = useButton({
    native: false
  });
  const mergedRef = useMergedRefs(forwardedRef, buttonRef);
  const handleDismiss = useStableCallback((event) => {
    store.state.setOpen(false, createChangeEventDetails(reason_parts_exports.closePress, event.nativeEvent, event.currentTarget));
  });
  const dismissProps = getButtonProps({
    onClick: handleDismiss
  });
  return (0, import_jsx_runtime9.jsx)("span", {
    ref: mergedRef,
    ...dismissProps,
    "aria-label": "Dismiss",
    tabIndex: void 0,
    style: visuallyHiddenInput
  });
});
if (true) ComboboxInternalDismissButton.displayName = "ComboboxInternalDismissButton";

// node_modules/@base-ui/react/esm/combobox/input/ComboboxInput.js
var import_jsx_runtime10 = __toESM(require_jsx_runtime(), 1);
var ComboboxInput = React33.forwardRef(function ComboboxInput2(componentProps, forwardedRef) {
  const {
    render,
    className,
    disabled: disabledProp = false,
    id: idProp,
    ...elementProps
  } = componentProps;
  const {
    state: fieldState,
    disabled: fieldDisabled,
    setTouched,
    setFocused,
    validationMode,
    validation
  } = useFieldRootContext();
  const {
    labelId: fieldLabelId
  } = useLabelableContext();
  const comboboxChipsContext = useComboboxChipsContext();
  const positioning = useComboboxPositionerContext(true);
  const hasPositionerParent = Boolean(positioning);
  const store = useComboboxRootContext();
  const {
    filteredItems
  } = useComboboxDerivedItemsContext();
  const inputValue = useComboboxInputValueContext();
  const direction = useDirection();
  const required = useStore(store, selectors2.required);
  const comboboxDisabled = useStore(store, selectors2.disabled);
  const readOnly = useStore(store, selectors2.readOnly);
  const name = useStore(store, selectors2.name);
  const selectionMode = useStore(store, selectors2.selectionMode);
  const autoHighlightMode = useStore(store, selectors2.autoHighlight);
  const inputProps = useStore(store, selectors2.inputProps);
  const triggerProps = useStore(store, selectors2.triggerProps);
  const open = useStore(store, selectors2.open);
  const mounted = useStore(store, selectors2.mounted);
  const selectedValue = useStore(store, selectors2.selectedValue);
  const popupSideValue = useStore(store, selectors2.popupSide);
  const positionerElement = useStore(store, selectors2.positionerElement);
  const rootId = useStore(store, selectors2.id);
  const inline = useStore(store, selectors2.inline);
  const modal = useStore(store, selectors2.modal);
  const autoHighlightEnabled = Boolean(autoHighlightMode);
  const popupSide = mounted && positionerElement ? popupSideValue : null;
  const disabled = fieldDisabled || comboboxDisabled || disabledProp;
  const listEmpty = filteredItems.length === 0;
  const isInsidePopup = hasPositionerParent || inline;
  const focusManagerModal = !isInsidePopup || modal;
  const id = useBaseUiId(idProp ?? (!isInsidePopup ? rootId : void 0));
  const ariaLabelledBy = resolveAriaLabelledBy(fieldLabelId, void 0);
  const fieldStateForInput = hasPositionerParent ? DEFAULT_FIELD_STATE_ATTRIBUTES : fieldState;
  const [composingValue, setComposingValue] = React33.useState(null);
  const isComposingRef = React33.useRef(false);
  const lastActiveIndexRef = React33.useRef(null);
  const shouldRestoreActiveIndexRef = React33.useRef(false);
  const setInputElement = useStableCallback((element2) => {
    const nextIsInsidePopup = hasPositionerParent || store.state.inline;
    if (nextIsInsidePopup && !store.state.hasInputValue) {
      store.state.setInputValue("", createChangeEventDetails(reason_parts_exports.none));
    }
    store.update({
      inputElement: element2,
      inputInsidePopup: nextIsInsidePopup
    });
  });
  const validationProps = hasPositionerParent || !validation ? elementProps : validation.getValidationProps(elementProps);
  const state = {
    ...fieldStateForInput,
    open,
    disabled,
    readOnly,
    popupSide,
    listEmpty
  };
  function handleKeyDown(event) {
    if (!comboboxChipsContext) {
      return void 0;
    }
    let nextIndex;
    const {
      highlightedChipIndex
    } = comboboxChipsContext;
    if (highlightedChipIndex !== void 0) {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        if (highlightedChipIndex > 0) {
          nextIndex = highlightedChipIndex - 1;
        } else {
          nextIndex = void 0;
        }
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        if (highlightedChipIndex < selectedValue.length - 1) {
          nextIndex = highlightedChipIndex + 1;
        } else {
          nextIndex = void 0;
        }
      } else if (event.key === "Backspace" || event.key === "Delete") {
        event.preventDefault();
        const computedNextIndex = highlightedChipIndex >= selectedValue.length - 1 ? selectedValue.length - 2 : highlightedChipIndex;
        nextIndex = computedNextIndex >= 0 ? computedNextIndex : void 0;
        store.state.setIndices({
          activeIndex: null,
          selectedIndex: null,
          type: "keyboard"
        });
      }
      return nextIndex;
    }
    if (event.key === "ArrowLeft" && (event.currentTarget.selectionStart ?? 0) === 0 && selectedValue.length > 0) {
      event.preventDefault();
      const lastChipIndex = Math.max(selectedValue.length - 1, 0);
      nextIndex = lastChipIndex;
    } else if (event.key === "Backspace" && event.currentTarget.value === "" && selectedValue.length > 0) {
      store.state.setIndices({
        activeIndex: null,
        selectedIndex: null,
        type: "keyboard"
      });
      event.preventDefault();
    }
    return nextIndex;
  }
  const element = useRenderElement("input", componentProps, {
    state,
    ref: [forwardedRef, store.state.inputRef, setInputElement],
    props: [inputProps, triggerProps, {
      type: "text",
      value: componentProps.value ?? composingValue ?? inputValue,
      "aria-readonly": readOnly || void 0,
      "aria-required": required || void 0,
      "aria-labelledby": ariaLabelledBy,
      disabled,
      readOnly,
      required: selectionMode === "none" ? required : void 0,
      ...selectionMode === "none" && name && {
        name
      },
      id,
      onFocus() {
        setFocused(true);
        if (!inline || !shouldRestoreActiveIndexRef.current) {
          return;
        }
        shouldRestoreActiveIndexRef.current = false;
        const nextActiveIndex = lastActiveIndexRef.current;
        if (nextActiveIndex == null || // `valuesRef` can be sparse, so guard against restoring a removed slot.
        !Object.hasOwn(store.state.valuesRef.current, nextActiveIndex)) {
          return;
        }
        store.state.setIndices({
          activeIndex: nextActiveIndex
        });
      },
      onBlur() {
        setTouched(true);
        setFocused(false);
        const activeIndex = store.state.activeIndex;
        if (inline && activeIndex !== null && autoHighlightMode !== "always") {
          lastActiveIndexRef.current = activeIndex;
          shouldRestoreActiveIndexRef.current = true;
          store.state.setIndices({
            activeIndex: null
          });
        }
        if (validationMode === "onBlur") {
          const valueToValidate = selectionMode === "none" ? inputValue : selectedValue;
          validation.commit(valueToValidate);
        }
      },
      onCompositionStart(event) {
        if (isAndroid) {
          return;
        }
        isComposingRef.current = true;
        setComposingValue(event.currentTarget.value);
      },
      onCompositionEnd(event) {
        isComposingRef.current = false;
        const next = event.currentTarget.value;
        setComposingValue(null);
        store.state.setInputValue(next, createChangeEventDetails(reason_parts_exports.inputChange, event.nativeEvent));
      },
      onChange(event) {
        const inputType = event.nativeEvent.inputType;
        const autofillLikeInput = !inputType || inputType === "insertReplacementText";
        const shouldOpenOnInput = isComposingRef.current || !autofillLikeInput;
        if (isComposingRef.current) {
          const nextVal = event.currentTarget.value;
          setComposingValue(nextVal);
          if (nextVal === "" && !store.state.openOnInputClick && !store.state.inputInsidePopup) {
            store.state.setOpen(false, createChangeEventDetails(reason_parts_exports.inputClear, event.nativeEvent));
          }
          const trimmed2 = nextVal.trim();
          const shouldMaintainHighlight = autoHighlightEnabled && trimmed2 !== "";
          if (!readOnly && !disabled && trimmed2) {
            if (shouldOpenOnInput) {
              store.state.setOpen(true, createChangeEventDetails(reason_parts_exports.inputChange, event.nativeEvent));
              if (!autoHighlightEnabled) {
                store.state.setIndices({
                  activeIndex: null,
                  selectedIndex: null,
                  type: store.state.keyboardActiveRef.current ? "keyboard" : "pointer"
                });
              }
            }
          }
          if (open && store.state.activeIndex !== null && !shouldMaintainHighlight) {
            store.state.setIndices({
              activeIndex: null,
              selectedIndex: null,
              type: store.state.keyboardActiveRef.current ? "keyboard" : "pointer"
            });
          }
          return;
        }
        store.state.setInputValue(event.currentTarget.value, createChangeEventDetails(reason_parts_exports.inputChange, event.nativeEvent));
        const empty = event.currentTarget.value === "";
        const clearDetails = createChangeEventDetails(reason_parts_exports.inputClear, event.nativeEvent);
        if (empty && !store.state.inputInsidePopup) {
          if (selectionMode === "single") {
            store.state.setSelectedValue(null, clearDetails);
          }
          if (!store.state.openOnInputClick) {
            store.state.setOpen(false, clearDetails);
          }
        }
        const trimmed = event.currentTarget.value.trim();
        if (!readOnly && !disabled && trimmed) {
          if (shouldOpenOnInput) {
            store.state.setOpen(true, createChangeEventDetails(reason_parts_exports.inputChange, event.nativeEvent));
            if (!autoHighlightEnabled) {
              store.state.setIndices({
                activeIndex: null,
                selectedIndex: null,
                type: store.state.keyboardActiveRef.current ? "keyboard" : "pointer"
              });
            }
          }
        }
        if (open && store.state.activeIndex !== null && !autoHighlightEnabled) {
          store.state.setIndices({
            activeIndex: null,
            selectedIndex: null,
            type: store.state.keyboardActiveRef.current ? "keyboard" : "pointer"
          });
        }
      },
      onKeyDown(event) {
        if (disabled || readOnly) {
          return;
        }
        if (event.ctrlKey || event.shiftKey || event.altKey || event.metaKey) {
          return;
        }
        store.state.keyboardActiveRef.current = true;
        const input = event.currentTarget;
        const scrollAmount = input.scrollWidth - input.clientWidth;
        const isRTL = direction === "rtl";
        if (event.key === "Home") {
          stopEvent(event);
          const cursor = isFirefox && isRTL ? input.value.length : 0;
          input.setSelectionRange(cursor, cursor);
          input.scrollLeft = 0;
          return;
        }
        if (event.key === "End") {
          stopEvent(event);
          const cursor = isFirefox && isRTL ? 0 : input.value.length;
          input.setSelectionRange(cursor, cursor);
          input.scrollLeft = isRTL ? -scrollAmount : scrollAmount;
          return;
        }
        if (!mounted && event.key === "Escape") {
          const isClear = selectionMode === "multiple" && Array.isArray(selectedValue) ? selectedValue.length === 0 : selectedValue === null;
          const details = createChangeEventDetails(reason_parts_exports.escapeKey, event.nativeEvent);
          const value = selectionMode === "multiple" ? [] : null;
          store.state.setInputValue("", details);
          store.state.setSelectedValue(value, details);
          if (!isClear && !store.state.inline && !details.isPropagationAllowed) {
            event.stopPropagation();
          }
          return;
        }
        if (comboboxChipsContext && event.key === "Backspace" && input.value === "" && comboboxChipsContext.highlightedChipIndex === void 0 && Array.isArray(selectedValue) && selectedValue.length > 0) {
          const newValue = selectedValue.slice(0, -1);
          store.state.setIndices({
            activeIndex: null,
            selectedIndex: null,
            type: store.state.keyboardActiveRef.current ? "keyboard" : "pointer"
          });
          store.state.setSelectedValue(newValue, createChangeEventDetails(reason_parts_exports.none, event.nativeEvent));
          return;
        }
        const hadHighlightedChip = comboboxChipsContext?.highlightedChipIndex !== void 0;
        const nextIndex = handleKeyDown(event);
        comboboxChipsContext?.setHighlightedChipIndex(nextIndex);
        if (nextIndex !== void 0) {
          comboboxChipsContext?.chipsRef.current[nextIndex]?.focus();
        } else if (hadHighlightedChip) {
          store.state.inputRef.current?.focus();
        }
        if (event.which === 229) {
          return;
        }
        if (event.key === "Enter" && open) {
          const activeIndex = store.state.activeIndex;
          const nativeEvent = event.nativeEvent;
          if (activeIndex === null) {
            if (inline) {
              return;
            }
            store.state.setOpen(false, createChangeEventDetails(reason_parts_exports.none, nativeEvent));
            return;
          }
          stopEvent(event);
          const listItem = store.state.listRef.current[activeIndex];
          if (listItem) {
            store.state.selectionEventRef.current = nativeEvent;
            listItem.click();
            store.state.selectionEventRef.current = null;
          }
        }
      },
      onPointerMove() {
        store.state.keyboardActiveRef.current = false;
      },
      onPointerDown() {
        store.state.keyboardActiveRef.current = false;
      }
    }, validationProps],
    stateAttributesMapping: triggerStateAttributesMapping
  });
  return (0, import_jsx_runtime10.jsxs)(React33.Fragment, {
    children: [open && focusManagerModal && (0, import_jsx_runtime10.jsx)(ComboboxInternalDismissButton, {
      ref: store.state.startDismissRef
    }), element]
  });
});
if (true) ComboboxInput.displayName = "ComboboxInput";

// node_modules/@base-ui/react/esm/combobox/input-group/ComboboxInputGroup.js
var React34 = __toESM(require_react(), 1);
var ComboboxInputGroup = React34.forwardRef(function ComboboxInputGroup2(componentProps, forwardedRef) {
  const {
    render,
    className,
    ...elementProps
  } = componentProps;
  const {
    state: fieldState,
    disabled: fieldDisabled
  } = useFieldRootContext();
  const store = useComboboxRootContext();
  const {
    filteredItems
  } = useComboboxDerivedItemsContext();
  const open = useStore(store, selectors2.open);
  const mounted = useStore(store, selectors2.mounted);
  const popupSideValue = useStore(store, selectors2.popupSide);
  const positionerElement = useStore(store, selectors2.positionerElement);
  const comboboxDisabled = useStore(store, selectors2.disabled);
  const readOnly = useStore(store, selectors2.readOnly);
  const hasSelectedValue = useStore(store, selectors2.hasSelectedValue);
  const selectionMode = useStore(store, selectors2.selectionMode);
  const popupSide = mounted && positionerElement ? popupSideValue : null;
  const disabled = fieldDisabled || comboboxDisabled;
  const listEmpty = filteredItems.length === 0;
  const placeholder = selectionMode === "none" ? false : !hasSelectedValue;
  const state = {
    ...fieldState,
    open,
    disabled,
    readOnly,
    popupSide,
    listEmpty,
    placeholder
  };
  const setInputGroupElement = useStableCallback((element) => {
    store.set("inputGroupElement", element);
  });
  return useRenderElement("div", componentProps, {
    ref: [forwardedRef, setInputGroupElement],
    props: [{
      role: "group"
    }, elementProps],
    state,
    stateAttributesMapping: triggerStateAttributesMapping
  });
});
if (true) ComboboxInputGroup.displayName = "ComboboxInputGroup";

// node_modules/@base-ui/react/esm/combobox/icon/ComboboxIcon.js
var React35 = __toESM(require_react(), 1);
var ComboboxIcon = React35.forwardRef(function ComboboxIcon2(componentProps, forwardedRef) {
  const {
    className,
    render,
    ...elementProps
  } = componentProps;
  const element = useRenderElement("span", componentProps, {
    ref: forwardedRef,
    props: [{
      "aria-hidden": true,
      children: "▼"
    }, elementProps]
  });
  return element;
});
if (true) ComboboxIcon.displayName = "ComboboxIcon";

// node_modules/@base-ui/react/esm/combobox/clear/ComboboxClear.js
var React36 = __toESM(require_react(), 1);
var stateAttributesMapping4 = {
  ...transitionStatusMapping,
  ...triggerOpenStateMapping
};
var ComboboxClear = React36.forwardRef(function ComboboxClear2(componentProps, forwardedRef) {
  const {
    render,
    className,
    disabled: disabledProp = false,
    nativeButton = true,
    keepMounted = false,
    ...elementProps
  } = componentProps;
  const {
    disabled: fieldDisabled
  } = useFieldRootContext();
  const store = useComboboxRootContext();
  const selectionMode = useStore(store, selectors2.selectionMode);
  const comboboxDisabled = useStore(store, selectors2.disabled);
  const readOnly = useStore(store, selectors2.readOnly);
  const open = useStore(store, selectors2.open);
  const selectedValue = useStore(store, selectors2.selectedValue);
  const hasSelectionChips = useStore(store, selectors2.hasSelectionChips);
  const inputValue = useComboboxInputValueContext();
  let visible = false;
  if (selectionMode === "none") {
    visible = inputValue !== "";
  } else if (selectionMode === "single") {
    visible = selectedValue != null;
  } else {
    visible = hasSelectionChips;
  }
  const disabled = fieldDisabled || comboboxDisabled || disabledProp;
  const {
    buttonRef,
    getButtonProps
  } = useButton({
    native: nativeButton,
    disabled
  });
  const {
    mounted,
    transitionStatus,
    setMounted
  } = useTransitionStatus(visible);
  const state = {
    disabled,
    open,
    transitionStatus
  };
  useOpenChangeComplete({
    open: visible,
    ref: store.state.clearRef,
    onComplete() {
      if (!visible) {
        setMounted(false);
      }
    }
  });
  const element = useRenderElement("button", componentProps, {
    state,
    ref: [forwardedRef, buttonRef, store.state.clearRef],
    props: [{
      tabIndex: -1,
      children: "x",
      // Avoid stealing focus from the input.
      onMouseDown(event) {
        event.preventDefault();
      },
      onClick(event) {
        if (disabled || readOnly) {
          return;
        }
        const keyboardActiveRef = store.state.keyboardActiveRef;
        store.state.setInputValue("", createChangeEventDetails(reason_parts_exports.clearPress, event.nativeEvent));
        if (selectionMode !== "none") {
          store.state.setSelectedValue(Array.isArray(selectedValue) ? [] : null, createChangeEventDetails(reason_parts_exports.clearPress, event.nativeEvent));
          store.state.setIndices({
            activeIndex: null,
            selectedIndex: null,
            type: keyboardActiveRef.current ? "keyboard" : "pointer"
          });
        } else {
          store.state.setIndices({
            activeIndex: null,
            type: keyboardActiveRef.current ? "keyboard" : "pointer"
          });
        }
        store.state.inputRef.current?.focus();
      }
    }, elementProps, getButtonProps],
    stateAttributesMapping: stateAttributesMapping4
  });
  const shouldRender = keepMounted || mounted;
  if (!shouldRender) {
    return null;
  }
  return element;
});
if (true) ComboboxClear.displayName = "ComboboxClear";

// node_modules/@base-ui/react/esm/combobox/list/ComboboxList.js
var React39 = __toESM(require_react(), 1);

// node_modules/@base-ui/react/esm/combobox/collection/ComboboxCollection.js
var React38 = __toESM(require_react(), 1);

// node_modules/@base-ui/react/esm/combobox/collection/GroupCollectionContext.js
var React37 = __toESM(require_react(), 1);
var import_jsx_runtime11 = __toESM(require_jsx_runtime(), 1);
var GroupCollectionContext = React37.createContext(null);
if (true) GroupCollectionContext.displayName = "GroupCollectionContext";
function useGroupCollectionContext() {
  return React37.useContext(GroupCollectionContext);
}
function GroupCollectionProvider(props) {
  const {
    children,
    items
  } = props;
  const contextValue = React37.useMemo(() => ({
    items
  }), [items]);
  return (0, import_jsx_runtime11.jsx)(GroupCollectionContext.Provider, {
    value: contextValue,
    children
  });
}

// node_modules/@base-ui/react/esm/combobox/collection/ComboboxCollection.js
var import_jsx_runtime12 = __toESM(require_jsx_runtime(), 1);
function ComboboxCollection(props) {
  const {
    children
  } = props;
  const {
    filteredItems
  } = useComboboxDerivedItemsContext();
  const groupContext = useGroupCollectionContext();
  const itemsToRender = groupContext ? groupContext.items : filteredItems;
  if (!itemsToRender) {
    return null;
  }
  return (0, import_jsx_runtime12.jsx)(React38.Fragment, {
    children: itemsToRender.map(children)
  });
}

// node_modules/@base-ui/react/esm/combobox/list/ComboboxList.js
var import_jsx_runtime13 = __toESM(require_jsx_runtime(), 1);
var ComboboxList = React39.forwardRef(function ComboboxList2(componentProps, forwardedRef) {
  var _ComboboxCollection;
  const {
    render,
    className,
    children,
    ...elementProps
  } = componentProps;
  const store = useComboboxRootContext();
  const floatingRootContext = useComboboxFloatingContext();
  const hasPositionerContext = Boolean(useComboboxPositionerContext(true));
  const {
    filteredItems
  } = useComboboxDerivedItemsContext();
  const items = useStore(store, selectors2.items);
  const labelsRef = useStore(store, selectors2.labelsRef);
  const listRef = useStore(store, selectors2.listRef);
  const selectionMode = useStore(store, selectors2.selectionMode);
  const grid = useStore(store, selectors2.grid);
  const popupProps = useStore(store, selectors2.popupProps);
  const disabled = useStore(store, selectors2.disabled);
  const readOnly = useStore(store, selectors2.readOnly);
  const virtualized = useStore(store, selectors2.virtualized);
  const multiple = selectionMode === "multiple";
  const empty = filteredItems.length === 0;
  const setPositionerElement = useStableCallback((element2) => {
    store.set("positionerElement", element2);
  });
  const setListElement = useStableCallback((element2) => {
    store.set("listElement", element2);
  });
  const resolvedChildren = React39.useMemo(() => {
    if (typeof children === "function") {
      return _ComboboxCollection || (_ComboboxCollection = (0, import_jsx_runtime13.jsx)(ComboboxCollection, {
        children
      }));
    }
    return children;
  }, [children]);
  const state = {
    empty
  };
  const floatingId = floatingRootContext.useState("floatingId");
  const element = useRenderElement("div", componentProps, {
    state,
    ref: [forwardedRef, setListElement, hasPositionerContext ? null : setPositionerElement],
    props: [popupProps, {
      children: resolvedChildren,
      tabIndex: -1,
      id: floatingId,
      role: grid ? "grid" : "listbox",
      "aria-multiselectable": multiple ? "true" : void 0,
      onKeyDown(event) {
        if (disabled || readOnly) {
          return;
        }
        if (event.key === "Enter") {
          const activeIndex = store.state.activeIndex;
          if (activeIndex == null) {
            return;
          }
          stopEvent(event);
          const nativeEvent = event.nativeEvent;
          const listItem = store.state.listRef.current[activeIndex];
          if (listItem) {
            store.state.selectionEventRef.current = nativeEvent;
            listItem.click();
            store.state.selectionEventRef.current = null;
          }
        }
      },
      onKeyDownCapture() {
        store.state.keyboardActiveRef.current = true;
      },
      onPointerMoveCapture() {
        store.state.keyboardActiveRef.current = false;
      }
    }, elementProps]
  });
  if (virtualized) {
    return element;
  }
  return (0, import_jsx_runtime13.jsx)(CompositeList, {
    elementsRef: listRef,
    labelsRef: items ? void 0 : labelsRef,
    children: element
  });
});
if (true) ComboboxList.displayName = "ComboboxList";

// node_modules/@base-ui/react/esm/combobox/status/ComboboxStatus.js
var React40 = __toESM(require_react(), 1);
var ComboboxStatus = React40.forwardRef(function ComboboxStatus2(componentProps, forwardedRef) {
  const {
    render,
    className,
    ...elementProps
  } = componentProps;
  return useRenderElement("div", componentProps, {
    ref: forwardedRef,
    props: [{
      role: "status",
      "aria-live": "polite",
      "aria-atomic": true
    }, elementProps]
  });
});
if (true) ComboboxStatus.displayName = "ComboboxStatus";

// node_modules/@base-ui/react/esm/combobox/portal/ComboboxPortal.js
var React42 = __toESM(require_react(), 1);

// node_modules/@base-ui/react/esm/combobox/portal/ComboboxPortalContext.js
var React41 = __toESM(require_react(), 1);
var ComboboxPortalContext = React41.createContext(void 0);
if (true) ComboboxPortalContext.displayName = "ComboboxPortalContext";
function useComboboxPortalContext() {
  const context = React41.useContext(ComboboxPortalContext);
  if (context === void 0) {
    throw new Error(true ? "Base UI: <Combobox.Portal> is missing." : formatErrorMessage_default(20));
  }
  return context;
}

// node_modules/@base-ui/react/esm/combobox/portal/ComboboxPortal.js
var import_jsx_runtime14 = __toESM(require_jsx_runtime(), 1);
var ComboboxPortal = React42.forwardRef(function ComboboxPortal2(props, forwardedRef) {
  const {
    keepMounted = false,
    ...portalProps
  } = props;
  const store = useComboboxRootContext();
  const mounted = useStore(store, selectors2.mounted);
  const forceMounted = useStore(store, selectors2.forceMounted);
  const shouldRender = mounted || keepMounted || forceMounted;
  if (!shouldRender) {
    return null;
  }
  return (0, import_jsx_runtime14.jsx)(ComboboxPortalContext.Provider, {
    value: keepMounted,
    children: (0, import_jsx_runtime14.jsx)(FloatingPortal, {
      ref: forwardedRef,
      ...portalProps
    })
  });
});
if (true) ComboboxPortal.displayName = "ComboboxPortal";

// node_modules/@base-ui/react/esm/combobox/backdrop/ComboboxBackdrop.js
var React43 = __toESM(require_react(), 1);
var stateAttributesMapping5 = {
  ...popupStateMapping,
  ...transitionStatusMapping
};
var ComboboxBackdrop = React43.forwardRef(function ComboboxBackdrop2(componentProps, forwardedRef) {
  const {
    className,
    render,
    ...elementProps
  } = componentProps;
  const store = useComboboxRootContext();
  const open = useStore(store, selectors2.open);
  const mounted = useStore(store, selectors2.mounted);
  const transitionStatus = useStore(store, selectors2.transitionStatus);
  const state = {
    open,
    transitionStatus
  };
  return useRenderElement("div", componentProps, {
    state,
    ref: forwardedRef,
    stateAttributesMapping: stateAttributesMapping5,
    props: [{
      role: "presentation",
      hidden: !mounted,
      style: {
        userSelect: "none",
        WebkitUserSelect: "none"
      }
    }, elementProps]
  });
});
if (true) ComboboxBackdrop.displayName = "ComboboxBackdrop";

// node_modules/@base-ui/react/esm/combobox/positioner/ComboboxPositioner.js
var React44 = __toESM(require_react(), 1);
var import_jsx_runtime15 = __toESM(require_jsx_runtime(), 1);
var ComboboxPositioner = React44.forwardRef(function ComboboxPositioner2(componentProps, forwardedRef) {
  const {
    render,
    className,
    anchor,
    positionMethod = "absolute",
    side = "bottom",
    align = "center",
    sideOffset = 0,
    alignOffset = 0,
    collisionBoundary = "clipping-ancestors",
    collisionPadding = 5,
    arrowPadding = 5,
    sticky = false,
    disableAnchorTracking = false,
    collisionAvoidance = DROPDOWN_COLLISION_AVOIDANCE,
    ...elementProps
  } = componentProps;
  const store = useComboboxRootContext();
  const {
    filteredItems
  } = useComboboxDerivedItemsContext();
  const floatingRootContext = useComboboxFloatingContext();
  const keepMounted = useComboboxPortalContext();
  const modal = useStore(store, selectors2.modal);
  const open = useStore(store, selectors2.open);
  const mounted = useStore(store, selectors2.mounted);
  const openMethod = useStore(store, selectors2.openMethod);
  const triggerElement = useStore(store, selectors2.triggerElement);
  const inputElement = useStore(store, selectors2.inputElement);
  const inputGroupElement = useStore(store, selectors2.inputGroupElement);
  const inputInsidePopup = useStore(store, selectors2.inputInsidePopup);
  const transitionStatus = useStore(store, selectors2.transitionStatus);
  const empty = filteredItems.length === 0;
  const resolvedAnchor = anchor ?? (inputInsidePopup ? triggerElement : inputGroupElement ?? inputElement);
  const positioning = useAnchorPositioning({
    anchor: resolvedAnchor,
    floatingRootContext,
    positionMethod,
    mounted,
    side,
    sideOffset,
    align,
    alignOffset,
    arrowPadding,
    collisionBoundary,
    collisionPadding,
    sticky,
    disableAnchorTracking,
    keepMounted,
    collisionAvoidance,
    lazyFlip: true
  });
  useScrollLock(open && modal && openMethod !== "touch", triggerElement);
  const defaultProps = React44.useMemo(() => {
    const style = {
      ...positioning.positionerStyles
    };
    if (!open) {
      style.pointerEvents = "none";
    }
    return {
      role: "presentation",
      hidden: !mounted,
      style
    };
  }, [open, mounted, positioning.positionerStyles]);
  const state = {
    open,
    side: positioning.side,
    align: positioning.align,
    anchorHidden: positioning.anchorHidden,
    empty
  };
  useIsoLayoutEffect(() => {
    store.set("popupSide", positioning.side);
  }, [store, positioning.side]);
  const contextValue = React44.useMemo(() => ({
    side: positioning.side,
    align: positioning.align,
    arrowRef: positioning.arrowRef,
    arrowUncentered: positioning.arrowUncentered,
    arrowStyles: positioning.arrowStyles,
    anchorHidden: positioning.anchorHidden,
    isPositioned: positioning.isPositioned
  }), [positioning.side, positioning.align, positioning.arrowRef, positioning.arrowUncentered, positioning.arrowStyles, positioning.anchorHidden, positioning.isPositioned]);
  const setPositionerElement = useStableCallback((element2) => {
    store.set("positionerElement", element2);
  });
  const element = useRenderElement("div", componentProps, {
    state,
    ref: [forwardedRef, setPositionerElement],
    props: [defaultProps, getDisabledMountTransitionStyles(transitionStatus), elementProps],
    stateAttributesMapping: popupStateMapping
  });
  return (0, import_jsx_runtime15.jsxs)(ComboboxPositionerContext.Provider, {
    value: contextValue,
    children: [mounted && modal && (0, import_jsx_runtime15.jsx)(InternalBackdrop, {
      inert: inertValue(!open),
      cutout: inputGroupElement ?? inputElement ?? triggerElement
    }), element]
  });
});
if (true) ComboboxPositioner.displayName = "ComboboxPositioner";

// node_modules/@base-ui/react/esm/combobox/popup/ComboboxPopup.js
var React45 = __toESM(require_react(), 1);
var import_jsx_runtime16 = __toESM(require_jsx_runtime(), 1);
var stateAttributesMapping6 = {
  ...popupStateMapping,
  ...transitionStatusMapping
};
var ComboboxPopup = React45.forwardRef(function ComboboxPopup2(componentProps, forwardedRef) {
  const {
    render,
    className,
    initialFocus,
    finalFocus,
    ...elementProps
  } = componentProps;
  const store = useComboboxRootContext();
  const positioning = useComboboxPositionerContext();
  const floatingRootContext = useComboboxFloatingContext();
  const {
    filteredItems
  } = useComboboxDerivedItemsContext();
  const mounted = useStore(store, selectors2.mounted);
  const open = useStore(store, selectors2.open);
  const openMethod = useStore(store, selectors2.openMethod);
  const transitionStatus = useStore(store, selectors2.transitionStatus);
  const inputInsidePopup = useStore(store, selectors2.inputInsidePopup);
  const inputElement = useStore(store, selectors2.inputElement);
  const modal = useStore(store, selectors2.modal);
  const empty = filteredItems.length === 0;
  useOpenChangeComplete({
    open,
    ref: store.state.popupRef,
    onComplete() {
      if (open) {
        store.state.onOpenChangeComplete(true);
      }
    }
  });
  const state = {
    open,
    side: positioning.side,
    align: positioning.align,
    anchorHidden: positioning.anchorHidden,
    transitionStatus,
    empty
  };
  const element = useRenderElement("div", componentProps, {
    state,
    ref: [forwardedRef, store.state.popupRef],
    props: [{
      role: inputInsidePopup ? "dialog" : "presentation",
      tabIndex: -1,
      onFocus(event) {
        const target = getTarget(event.nativeEvent);
        if (openMethod !== "touch" && (contains(store.state.listElement, target) || target === event.currentTarget)) {
          store.state.inputRef.current?.focus();
        }
      }
    }, getDisabledMountTransitionStyles(transitionStatus), elementProps],
    stateAttributesMapping: stateAttributesMapping6
  });
  const computedDefaultInitialFocus = inputInsidePopup ? (interactionType) => interactionType === "touch" ? store.state.popupRef.current : inputElement : false;
  const resolvedInitialFocus = initialFocus === void 0 ? computedDefaultInitialFocus : initialFocus;
  let resolvedFinalFocus;
  if (finalFocus != null) {
    resolvedFinalFocus = finalFocus;
  } else {
    resolvedFinalFocus = inputInsidePopup ? void 0 : false;
  }
  const focusManagerModal = !inputInsidePopup || modal;
  return (0, import_jsx_runtime16.jsx)(FloatingFocusManager, {
    context: floatingRootContext,
    disabled: !mounted,
    modal: focusManagerModal,
    openInteractionType: openMethod,
    initialFocus: resolvedInitialFocus,
    returnFocus: resolvedFinalFocus,
    getInsideElements: () => [store.state.startDismissRef.current, store.state.endDismissRef.current],
    children: (0, import_jsx_runtime16.jsxs)(React45.Fragment, {
      children: [element, focusManagerModal && (0, import_jsx_runtime16.jsx)(ComboboxInternalDismissButton, {
        ref: store.state.endDismissRef
      })]
    })
  });
});
if (true) ComboboxPopup.displayName = "ComboboxPopup";

// node_modules/@base-ui/react/esm/combobox/arrow/ComboboxArrow.js
var React46 = __toESM(require_react(), 1);
var ComboboxArrow = React46.forwardRef(function ComboboxArrow2(componentProps, forwardedRef) {
  const {
    className,
    render,
    ...elementProps
  } = componentProps;
  const store = useComboboxRootContext();
  const {
    arrowRef,
    side,
    align,
    arrowUncentered,
    arrowStyles
  } = useComboboxPositionerContext();
  const open = useStore(store, selectors2.open);
  const state = {
    open,
    side,
    align,
    uncentered: arrowUncentered
  };
  return useRenderElement("div", componentProps, {
    ref: [arrowRef, forwardedRef],
    stateAttributesMapping: popupStateMapping,
    state,
    props: {
      style: arrowStyles,
      "aria-hidden": true,
      ...elementProps
    }
  });
});
if (true) ComboboxArrow.displayName = "ComboboxArrow";

// node_modules/@base-ui/react/esm/combobox/group/ComboboxGroup.js
var React48 = __toESM(require_react(), 1);

// node_modules/@base-ui/react/esm/combobox/group/ComboboxGroupContext.js
var React47 = __toESM(require_react(), 1);
var ComboboxGroupContext = React47.createContext(void 0);
if (true) ComboboxGroupContext.displayName = "ComboboxGroupContext";
function useComboboxGroupContext() {
  const context = React47.useContext(ComboboxGroupContext);
  if (context === void 0) {
    throw new Error(true ? "Base UI: ComboboxGroupContext is missing. ComboboxGroup parts must be placed within <Combobox.Group>." : formatErrorMessage_default(18));
  }
  return context;
}

// node_modules/@base-ui/react/esm/combobox/group/ComboboxGroup.js
var import_jsx_runtime17 = __toESM(require_jsx_runtime(), 1);
var ComboboxGroup = React48.forwardRef(function ComboboxGroup2(componentProps, forwardedRef) {
  const {
    render,
    className,
    items,
    ...elementProps
  } = componentProps;
  const [labelId, setLabelId] = React48.useState();
  const contextValue = React48.useMemo(() => ({
    labelId,
    setLabelId,
    items
  }), [labelId, setLabelId, items]);
  const element = useRenderElement("div", componentProps, {
    ref: forwardedRef,
    props: [{
      role: "group",
      "aria-labelledby": labelId
    }, elementProps]
  });
  const wrappedElement = (0, import_jsx_runtime17.jsx)(ComboboxGroupContext.Provider, {
    value: contextValue,
    children: element
  });
  if (items) {
    return (0, import_jsx_runtime17.jsx)(GroupCollectionProvider, {
      items,
      children: wrappedElement
    });
  }
  return wrappedElement;
});
if (true) ComboboxGroup.displayName = "ComboboxGroup";

// node_modules/@base-ui/react/esm/combobox/group-label/ComboboxGroupLabel.js
var React49 = __toESM(require_react(), 1);
var ComboboxGroupLabel = React49.forwardRef(function ComboboxGroupLabel2(componentProps, forwardedRef) {
  const {
    render,
    className,
    id: idProp,
    ...elementProps
  } = componentProps;
  const {
    setLabelId
  } = useComboboxGroupContext();
  const id = useBaseUiId(idProp);
  useIsoLayoutEffect(() => {
    setLabelId(id);
    return () => {
      setLabelId(void 0);
    };
  }, [id, setLabelId]);
  const element = useRenderElement("div", componentProps, {
    ref: forwardedRef,
    props: [{
      id
    }, elementProps]
  });
  return element;
});
if (true) ComboboxGroupLabel.displayName = "ComboboxGroupLabel";

// node_modules/@base-ui/react/esm/combobox/item/ComboboxItem.js
var React52 = __toESM(require_react(), 1);
var ReactDOM = __toESM(require_react_dom(), 1);

// node_modules/@base-ui/react/esm/combobox/item/ComboboxItemContext.js
var React50 = __toESM(require_react(), 1);
var ComboboxItemContext = React50.createContext(void 0);
if (true) ComboboxItemContext.displayName = "ComboboxItemContext";
function useComboboxItemContext() {
  const context = React50.useContext(ComboboxItemContext);
  if (!context) {
    throw new Error(true ? "Base UI: ComboboxItemContext is missing. ComboboxItem parts must be placed within <Combobox.Item>." : formatErrorMessage_default(19));
  }
  return context;
}

// node_modules/@base-ui/react/esm/combobox/row/ComboboxRowContext.js
var React51 = __toESM(require_react(), 1);
var ComboboxRowContext = React51.createContext(false);
if (true) ComboboxRowContext.displayName = "ComboboxRowContext";
function useComboboxRowContext() {
  return React51.useContext(ComboboxRowContext);
}

// node_modules/@base-ui/react/esm/combobox/item/ComboboxItem.js
var import_jsx_runtime18 = __toESM(require_jsx_runtime(), 1);
var ComboboxItem = React52.memo(React52.forwardRef(function ComboboxItem2(componentProps, forwardedRef) {
  const {
    render,
    className,
    value: itemValue = null,
    index: indexProp,
    disabled = false,
    nativeButton = false,
    ...elementProps
  } = componentProps;
  const didPointerDownRef = React52.useRef(false);
  const textRef = React52.useRef(null);
  const listItem = useCompositeListItem({
    index: indexProp,
    textRef,
    indexGuessBehavior: IndexGuessBehavior.GuessFromOrder
  });
  const store = useComboboxRootContext();
  const isRow = useComboboxRowContext();
  const {
    flatFilteredItems,
    hasItems
  } = useComboboxDerivedItemsContext();
  const open = useStore(store, selectors2.open);
  const selectionMode = useStore(store, selectors2.selectionMode);
  const readOnly = useStore(store, selectors2.readOnly);
  const virtualized = useStore(store, selectors2.virtualized);
  const isItemEqualToValue = useStore(store, selectors2.isItemEqualToValue);
  const selectable = selectionMode !== "none";
  const index = indexProp ?? (virtualized ? findItemIndex(flatFilteredItems, itemValue, isItemEqualToValue) : listItem.index);
  const hasRegistered = listItem.index !== -1;
  const rootId = useStore(store, selectors2.id);
  const highlighted = useStore(store, selectors2.isActive, index);
  const matchesSelectedValue = useStore(store, selectors2.isSelected, itemValue);
  const getItemProps = useStore(store, selectors2.getItemProps);
  const itemRef = React52.useRef(null);
  const id = rootId != null && hasRegistered ? `${rootId}-${index}` : void 0;
  const selected = matchesSelectedValue && selectable;
  useIsoLayoutEffect(() => {
    const shouldRun = hasRegistered && (virtualized || indexProp != null);
    if (!shouldRun) {
      return void 0;
    }
    const list = store.state.listRef.current;
    list[index] = itemRef.current;
    return () => {
      delete list[index];
    };
  }, [hasRegistered, virtualized, index, indexProp, store]);
  useIsoLayoutEffect(() => {
    if (!hasRegistered || hasItems) {
      return void 0;
    }
    const visibleMap = store.state.valuesRef.current;
    visibleMap[index] = itemValue;
    if (selectionMode !== "none") {
      store.state.allValuesRef.current.push(itemValue);
    }
    return () => {
      delete visibleMap[index];
    };
  }, [hasRegistered, hasItems, index, itemValue, store, selectionMode]);
  useIsoLayoutEffect(() => {
    if (!open) {
      didPointerDownRef.current = false;
      return;
    }
    if (!hasRegistered || hasItems) {
      return;
    }
    const selectedValue = store.state.selectedValue;
    const lastSelectedValue = Array.isArray(selectedValue) ? selectedValue[selectedValue.length - 1] : selectedValue;
    if (compareItemEquality(itemValue, lastSelectedValue, isItemEqualToValue)) {
      store.set("selectedIndex", index);
    }
  }, [hasRegistered, hasItems, open, store, index, itemValue, isItemEqualToValue]);
  const state = {
    disabled,
    selected,
    highlighted
  };
  const rootProps = getItemProps({
    active: highlighted,
    selected
  });
  rootProps.id = void 0;
  rootProps.onFocus = void 0;
  const {
    getButtonProps,
    buttonRef
  } = useButton({
    disabled,
    focusableWhenDisabled: true,
    native: nativeButton,
    composite: true
  });
  function commitSelection(nativeEvent) {
    function selectItem() {
      store.state.handleSelection(nativeEvent, itemValue);
    }
    if (store.state.submitOnItemClick) {
      ReactDOM.flushSync(selectItem);
      store.state.requestSubmit();
    } else {
      selectItem();
    }
  }
  const defaultProps = {
    id,
    role: isRow ? "gridcell" : "option",
    "aria-selected": selectable ? selected : void 0,
    // Focusable items steal focus from the input upon mouseup.
    // Warn if the user renders a natively focusable element like `<button>`,
    // as it should be a `<div>` instead.
    tabIndex: void 0,
    onPointerDownCapture(event) {
      didPointerDownRef.current = true;
      event.preventDefault();
    },
    onClick(event) {
      if (disabled || readOnly) {
        return;
      }
      commitSelection(event.nativeEvent);
    },
    onMouseUp(event) {
      const pointerStartedOnItem = didPointerDownRef.current;
      didPointerDownRef.current = false;
      if (disabled || readOnly || event.button !== 0 || pointerStartedOnItem || !highlighted) {
        return;
      }
      commitSelection(event.nativeEvent);
    }
  };
  const element = useRenderElement("div", componentProps, {
    ref: [buttonRef, forwardedRef, listItem.ref, itemRef],
    state,
    props: [rootProps, defaultProps, elementProps, getButtonProps]
  });
  const contextValue = React52.useMemo(() => ({
    selected,
    textRef
  }), [selected, textRef]);
  return (0, import_jsx_runtime18.jsx)(ComboboxItemContext.Provider, {
    value: contextValue,
    children: element
  });
}));
if (true) ComboboxItem.displayName = "ComboboxItem";

// node_modules/@base-ui/react/esm/combobox/row/ComboboxRow.js
var React53 = __toESM(require_react(), 1);
var import_jsx_runtime19 = __toESM(require_jsx_runtime(), 1);
var ComboboxRow = React53.forwardRef(function ComboboxRow2(componentProps, forwardedRef) {
  const {
    render,
    className,
    ...elementProps
  } = componentProps;
  const element = useRenderElement("div", componentProps, {
    ref: forwardedRef,
    props: [{
      role: "row"
    }, elementProps]
  });
  return (0, import_jsx_runtime19.jsx)(ComboboxRowContext.Provider, {
    value: true,
    children: element
  });
});
if (true) ComboboxRow.displayName = "ComboboxRow";

// node_modules/@base-ui/react/esm/combobox/empty/ComboboxEmpty.js
var React54 = __toESM(require_react(), 1);
var ComboboxEmpty = React54.forwardRef(function ComboboxEmpty2(componentProps, forwardedRef) {
  const {
    render,
    className,
    children: childrenProp,
    ...elementProps
  } = componentProps;
  const {
    filteredItems
  } = useComboboxDerivedItemsContext();
  const store = useComboboxRootContext();
  const children = filteredItems.length === 0 ? childrenProp : null;
  return useRenderElement("div", componentProps, {
    ref: [forwardedRef, store.state.emptyRef],
    props: [{
      children,
      role: "status",
      "aria-live": "polite",
      "aria-atomic": true
    }, elementProps]
  });
});
if (true) ComboboxEmpty.displayName = "ComboboxEmpty";

// node_modules/@base-ui/react/esm/combobox/root/utils/useFilteredItems.js
function useFilteredItems() {
  const items = useComboboxDerivedItemsContext();
  return items.filteredItems;
}

// node_modules/@base-ui/react/esm/avatar/index.parts.js
var index_parts_exports7 = {};
__export(index_parts_exports7, {
  Fallback: () => AvatarFallback,
  Image: () => AvatarImage,
  Root: () => AvatarRoot
});

// node_modules/@base-ui/react/esm/avatar/root/AvatarRoot.js
var React56 = __toESM(require_react(), 1);

// node_modules/@base-ui/react/esm/avatar/root/AvatarRootContext.js
var React55 = __toESM(require_react(), 1);
var AvatarRootContext = React55.createContext(void 0);
if (true) AvatarRootContext.displayName = "AvatarRootContext";
function useAvatarRootContext() {
  const context = React55.useContext(AvatarRootContext);
  if (context === void 0) {
    throw new Error(true ? "Base UI: AvatarRootContext is missing. Avatar parts must be placed within <Avatar.Root>." : formatErrorMessage_default(13));
  }
  return context;
}

// node_modules/@base-ui/react/esm/avatar/root/stateAttributesMapping.js
var avatarStateAttributesMapping = {
  imageLoadingStatus: () => null
};

// node_modules/@base-ui/react/esm/avatar/root/AvatarRoot.js
var import_jsx_runtime20 = __toESM(require_jsx_runtime(), 1);
var AvatarRoot = React56.forwardRef(function AvatarRoot2(componentProps, forwardedRef) {
  const {
    className,
    render,
    ...elementProps
  } = componentProps;
  const [imageLoadingStatus, setImageLoadingStatus] = React56.useState("idle");
  const state = {
    imageLoadingStatus
  };
  const contextValue = React56.useMemo(() => ({
    imageLoadingStatus,
    setImageLoadingStatus
  }), [imageLoadingStatus, setImageLoadingStatus]);
  const element = useRenderElement("span", componentProps, {
    state,
    ref: forwardedRef,
    props: elementProps,
    stateAttributesMapping: avatarStateAttributesMapping
  });
  return (0, import_jsx_runtime20.jsx)(AvatarRootContext.Provider, {
    value: contextValue,
    children: element
  });
});
if (true) AvatarRoot.displayName = "AvatarRoot";

// node_modules/@base-ui/react/esm/avatar/image/AvatarImage.js
var React58 = __toESM(require_react(), 1);

// node_modules/@base-ui/react/esm/avatar/image/useImageLoadingStatus.js
var React57 = __toESM(require_react(), 1);
function useImageLoadingStatus(src, {
  referrerPolicy,
  crossOrigin
}) {
  const [loadingStatus, setLoadingStatus] = React57.useState("idle");
  useIsoLayoutEffect(() => {
    if (!src) {
      setLoadingStatus("error");
      return NOOP;
    }
    let isMounted = true;
    const image = new window.Image();
    const updateStatus = (status) => () => {
      if (!isMounted) {
        return;
      }
      setLoadingStatus(status);
    };
    setLoadingStatus("loading");
    image.onload = updateStatus("loaded");
    image.onerror = updateStatus("error");
    if (referrerPolicy) {
      image.referrerPolicy = referrerPolicy;
    }
    image.crossOrigin = crossOrigin ?? null;
    image.src = src;
    return () => {
      isMounted = false;
    };
  }, [src, crossOrigin, referrerPolicy]);
  return loadingStatus;
}

// node_modules/@base-ui/react/esm/avatar/image/AvatarImage.js
var stateAttributesMapping7 = {
  ...avatarStateAttributesMapping,
  ...transitionStatusMapping
};
var AvatarImage = React58.forwardRef(function AvatarImage2(componentProps, forwardedRef) {
  const {
    className,
    render,
    onLoadingStatusChange: onLoadingStatusChangeProp,
    referrerPolicy,
    crossOrigin,
    ...elementProps
  } = componentProps;
  const context = useAvatarRootContext();
  const imageLoadingStatus = useImageLoadingStatus(componentProps.src, {
    referrerPolicy,
    crossOrigin
  });
  const isVisible = imageLoadingStatus === "loaded";
  const {
    mounted,
    transitionStatus,
    setMounted
  } = useTransitionStatus(isVisible);
  const imageRef = React58.useRef(null);
  const handleLoadingStatusChange = useStableCallback((status) => {
    onLoadingStatusChangeProp?.(status);
    context.setImageLoadingStatus(status);
  });
  useIsoLayoutEffect(() => {
    if (imageLoadingStatus !== "idle") {
      handleLoadingStatusChange(imageLoadingStatus);
    }
  }, [imageLoadingStatus, handleLoadingStatusChange]);
  const state = {
    imageLoadingStatus,
    transitionStatus
  };
  useOpenChangeComplete({
    open: isVisible,
    ref: imageRef,
    onComplete() {
      if (!isVisible) {
        setMounted(false);
      }
    }
  });
  const element = useRenderElement("img", componentProps, {
    state,
    ref: [forwardedRef, imageRef],
    props: elementProps,
    stateAttributesMapping: stateAttributesMapping7,
    enabled: mounted
  });
  if (!mounted) {
    return null;
  }
  return element;
});
if (true) AvatarImage.displayName = "AvatarImage";

// node_modules/@base-ui/react/esm/avatar/fallback/AvatarFallback.js
var React59 = __toESM(require_react(), 1);
var AvatarFallback = React59.forwardRef(function AvatarFallback2(componentProps, forwardedRef) {
  const {
    className,
    render,
    delay,
    ...elementProps
  } = componentProps;
  const {
    imageLoadingStatus
  } = useAvatarRootContext();
  const [delayPassed, setDelayPassed] = React59.useState(delay === void 0);
  const timeout = useTimeout();
  React59.useEffect(() => {
    if (delay !== void 0) {
      timeout.start(delay, () => setDelayPassed(true));
    }
    return timeout.clear;
  }, [timeout, delay]);
  const state = {
    imageLoadingStatus
  };
  const element = useRenderElement("span", componentProps, {
    state,
    ref: forwardedRef,
    props: elementProps,
    stateAttributesMapping: avatarStateAttributesMapping,
    enabled: imageLoadingStatus !== "loaded" && delayPassed
  });
  return element;
});
if (true) AvatarFallback.displayName = "AvatarFallback";

// node_modules/@base-ui/react/esm/checkbox/index.parts.js
var index_parts_exports8 = {};
__export(index_parts_exports8, {
  Indicator: () => CheckboxIndicator,
  Root: () => CheckboxRoot
});

// node_modules/@base-ui/react/esm/checkbox/root/CheckboxRoot.js
var React63 = __toESM(require_react(), 1);

// node_modules/@base-ui/react/esm/checkbox/utils/useStateAttributesMapping.js
var React60 = __toESM(require_react(), 1);

// node_modules/@base-ui/react/esm/checkbox/root/CheckboxRootDataAttributes.js
var CheckboxRootDataAttributes = (function(CheckboxRootDataAttributes2) {
  CheckboxRootDataAttributes2["checked"] = "data-checked";
  CheckboxRootDataAttributes2["unchecked"] = "data-unchecked";
  CheckboxRootDataAttributes2["indeterminate"] = "data-indeterminate";
  CheckboxRootDataAttributes2["disabled"] = "data-disabled";
  CheckboxRootDataAttributes2["readonly"] = "data-readonly";
  CheckboxRootDataAttributes2["required"] = "data-required";
  CheckboxRootDataAttributes2["valid"] = "data-valid";
  CheckboxRootDataAttributes2["invalid"] = "data-invalid";
  CheckboxRootDataAttributes2["touched"] = "data-touched";
  CheckboxRootDataAttributes2["dirty"] = "data-dirty";
  CheckboxRootDataAttributes2["filled"] = "data-filled";
  CheckboxRootDataAttributes2["focused"] = "data-focused";
  return CheckboxRootDataAttributes2;
})({});

// node_modules/@base-ui/react/esm/checkbox/utils/useStateAttributesMapping.js
function useStateAttributesMapping(state) {
  return React60.useMemo(() => ({
    checked(value) {
      if (state.indeterminate) {
        return {};
      }
      if (value) {
        return {
          [CheckboxRootDataAttributes.checked]: ""
        };
      }
      return {
        [CheckboxRootDataAttributes.unchecked]: ""
      };
    },
    ...fieldValidityMapping
  }), [state.indeterminate]);
}

// node_modules/@base-ui/react/esm/labelable-provider/useAriaLabelledBy.js
var React61 = __toESM(require_react(), 1);
function useAriaLabelledBy(explicitAriaLabelledBy, labelId, labelSourceRef, enableFallback = true, labelSourceId) {
  const [fallbackAriaLabelledBy, setFallbackAriaLabelledBy] = React61.useState();
  const generatedLabelId = useBaseUiId(labelSourceId ? `${labelSourceId}-label` : void 0);
  const ariaLabelledBy = explicitAriaLabelledBy ?? labelId ?? fallbackAriaLabelledBy;
  useIsoLayoutEffect(() => {
    const nextAriaLabelledBy = explicitAriaLabelledBy || labelId || !enableFallback ? void 0 : getAriaLabelledBy(labelSourceRef.current, generatedLabelId);
    if (fallbackAriaLabelledBy !== nextAriaLabelledBy) {
      setFallbackAriaLabelledBy(nextAriaLabelledBy);
    }
  });
  return ariaLabelledBy;
}
function getAriaLabelledBy(labelSource, generatedLabelId) {
  const label = findAssociatedLabel(labelSource);
  if (!label) {
    return void 0;
  }
  if (!label.id && generatedLabelId) {
    label.id = generatedLabelId;
  }
  return label.id || void 0;
}
function findAssociatedLabel(labelSource) {
  if (!labelSource) {
    return void 0;
  }
  const parent = labelSource.parentElement;
  if (parent && parent.tagName === "LABEL") {
    return parent;
  }
  const controlId = labelSource.id;
  if (controlId) {
    const nextSibling = labelSource.nextElementSibling;
    if (nextSibling && nextSibling.htmlFor === controlId) {
      return nextSibling;
    }
  }
  const labels = labelSource.labels;
  return labels && labels[0];
}

// node_modules/@base-ui/react/esm/checkbox/root/CheckboxRootContext.js
var React62 = __toESM(require_react(), 1);
var CheckboxRootContext = React62.createContext(void 0);
if (true) CheckboxRootContext.displayName = "CheckboxRootContext";
function useCheckboxRootContext() {
  const context = React62.useContext(CheckboxRootContext);
  if (context === void 0) {
    throw new Error(true ? "Base UI: CheckboxRootContext is missing. Checkbox parts must be placed within <Checkbox.Root>." : formatErrorMessage_default(14));
  }
  return context;
}

// node_modules/@base-ui/react/esm/checkbox/root/CheckboxRoot.js
var import_jsx_runtime21 = __toESM(require_jsx_runtime(), 1);
var PARENT_CHECKBOX = "data-parent";
var CheckboxRoot = React63.forwardRef(function CheckboxRoot2(componentProps, forwardedRef) {
  const {
    checked: checkedProp,
    className,
    defaultChecked = false,
    "aria-labelledby": ariaLabelledByProp,
    disabled: disabledProp = false,
    id: idProp,
    indeterminate = false,
    inputRef: inputRefProp,
    name: nameProp,
    onCheckedChange: onCheckedChangeProp,
    parent = false,
    readOnly = false,
    render,
    required = false,
    uncheckedValue,
    value: valueProp,
    nativeButton = false,
    ...elementProps
  } = componentProps;
  const {
    clearErrors
  } = useFormContext();
  const {
    disabled: rootDisabled,
    name: fieldName,
    setDirty,
    setFilled,
    setFocused,
    setTouched,
    state: fieldState,
    validationMode,
    validityData,
    shouldValidateOnChange,
    validation: localValidation
  } = useFieldRootContext();
  const fieldItemContext = useFieldItemContext();
  const {
    labelId,
    controlId,
    registerControlId,
    getDescriptionProps
  } = useLabelableContext();
  const groupContext = useCheckboxGroupContext();
  const parentContext = groupContext?.parent;
  const isGroupedWithParent = parentContext && groupContext.allValues;
  const disabled = rootDisabled || fieldItemContext.disabled || groupContext?.disabled || disabledProp;
  const name = fieldName ?? nameProp;
  const value = valueProp ?? name;
  const id = useBaseUiId();
  const parentId = useBaseUiId();
  let inputId = controlId;
  if (isGroupedWithParent) {
    inputId = parent ? parentId : `${parentContext.id}-${value}`;
  } else if (idProp) {
    inputId = idProp;
  }
  let groupProps = {};
  if (isGroupedWithParent) {
    if (parent) {
      groupProps = groupContext.parent.getParentProps();
    } else if (value) {
      groupProps = groupContext.parent.getChildProps(value);
    }
  }
  const onCheckedChange = useStableCallback(onCheckedChangeProp);
  const {
    checked: groupChecked = checkedProp,
    indeterminate: groupIndeterminate = indeterminate,
    onCheckedChange: groupOnChange,
    ...otherGroupProps
  } = groupProps;
  const groupValue = groupContext?.value;
  const setGroupValue = groupContext?.setValue;
  const defaultGroupValue = groupContext?.defaultValue;
  const controlRef = React63.useRef(null);
  const controlSourceRef = useRefWithInit(() => /* @__PURE__ */ Symbol("checkbox-control"));
  const hasRegisteredRef = React63.useRef(false);
  const {
    getButtonProps,
    buttonRef
  } = useButton({
    disabled,
    native: nativeButton
  });
  const validation = groupContext?.validation ?? localValidation;
  const [checked, setCheckedState] = useControlled({
    controlled: value && groupValue && !parent ? groupValue.includes(value) : groupChecked,
    default: value && defaultGroupValue && !parent ? defaultGroupValue.includes(value) : defaultChecked,
    name: "Checkbox",
    state: "checked"
  });
  useIsoLayoutEffect(() => {
    if (registerControlId === NOOP) {
      return void 0;
    }
    hasRegisteredRef.current = true;
    registerControlId(controlSourceRef.current, inputId);
    return void 0;
  }, [inputId, groupContext, registerControlId, parent, controlSourceRef]);
  React63.useEffect(() => {
    const controlSource = controlSourceRef.current;
    return () => {
      if (!hasRegisteredRef.current || registerControlId === NOOP) {
        return;
      }
      hasRegisteredRef.current = false;
      registerControlId(controlSource, void 0);
    };
  }, [registerControlId, controlSourceRef]);
  useField({
    enabled: !groupContext,
    id,
    commit: validation.commit,
    value: checked,
    controlRef,
    name,
    getValue: () => checked
  });
  const inputRef = React63.useRef(null);
  const mergedInputRef = useMergedRefs(inputRefProp, inputRef, validation.inputRef);
  const ariaLabelledBy = useAriaLabelledBy(ariaLabelledByProp, labelId, inputRef, !nativeButton, inputId ?? void 0);
  useIsoLayoutEffect(() => {
    if (inputRef.current) {
      inputRef.current.indeterminate = groupIndeterminate;
      if (checked) {
        setFilled(true);
      }
    }
  }, [checked, groupIndeterminate, setFilled]);
  useValueChanged(checked, () => {
    if (groupContext && !parent) {
      return;
    }
    clearErrors(name);
    setFilled(checked);
    setDirty(checked !== validityData.initialValue);
    if (shouldValidateOnChange()) {
      validation.commit(checked);
    } else {
      validation.commit(checked, true);
    }
  });
  const inputProps = mergeProps(
    {
      checked,
      disabled,
      // parent checkboxes unset `name` to be excluded from form submission
      name: parent ? void 0 : name,
      // Set `id` to stop Chrome warning about an unassociated input.
      // When using a native button, the `id` is applied to the button instead.
      id: nativeButton ? void 0 : inputId ?? void 0,
      required,
      ref: mergedInputRef,
      style: name ? visuallyHiddenInput : visuallyHidden,
      tabIndex: -1,
      type: "checkbox",
      "aria-hidden": true,
      onChange(event) {
        if (event.nativeEvent.defaultPrevented) {
          return;
        }
        const nextChecked = event.target.checked;
        const details = createChangeEventDetails(reason_parts_exports.none, event.nativeEvent);
        groupOnChange?.(nextChecked, details);
        onCheckedChange(nextChecked, details);
        if (details.isCanceled) {
          return;
        }
        setCheckedState(nextChecked);
        if (value && groupValue && setGroupValue && !parent) {
          const nextGroupValue = nextChecked ? [...groupValue, value] : groupValue.filter((item) => item !== value);
          setGroupValue(nextGroupValue, details);
        }
      },
      onFocus() {
        controlRef.current?.focus();
      }
    },
    // React <19 sets an empty value if `undefined` is passed explicitly
    // To avoid this, we only set the value if it's defined
    valueProp !== void 0 ? {
      value: (groupContext ? checked && valueProp : valueProp) || ""
    } : EMPTY_OBJECT,
    getDescriptionProps,
    groupContext ? validation.getValidationProps : validation.getInputValidationProps
  );
  const computedChecked = isGroupedWithParent ? Boolean(groupChecked) : checked;
  const computedIndeterminate = isGroupedWithParent ? groupIndeterminate || indeterminate : indeterminate;
  React63.useEffect(() => {
    if (!parentContext || !value) {
      return void 0;
    }
    const disabledStates = parentContext.disabledStatesRef.current;
    disabledStates.set(value, disabled);
    return () => {
      disabledStates.delete(value);
    };
  }, [parentContext, disabled, value]);
  const state = React63.useMemo(() => ({
    ...fieldState,
    checked: computedChecked,
    disabled,
    readOnly,
    required,
    indeterminate: computedIndeterminate
  }), [fieldState, computedChecked, disabled, readOnly, required, computedIndeterminate]);
  const stateAttributesMapping34 = useStateAttributesMapping(state);
  const element = useRenderElement("span", componentProps, {
    state,
    ref: [buttonRef, controlRef, forwardedRef, groupContext?.registerControlRef],
    props: [{
      id: nativeButton ? inputId ?? void 0 : id,
      role: "checkbox",
      "aria-checked": groupIndeterminate ? "mixed" : checked,
      "aria-readonly": readOnly || void 0,
      "aria-required": required || void 0,
      "aria-labelledby": ariaLabelledBy,
      [PARENT_CHECKBOX]: parent ? "" : void 0,
      onFocus() {
        setFocused(true);
      },
      onBlur() {
        const inputEl = inputRef.current;
        if (!inputEl) {
          return;
        }
        setTouched(true);
        setFocused(false);
        if (validationMode === "onBlur") {
          validation.commit(groupContext ? groupValue : inputEl.checked);
        }
      },
      onClick(event) {
        if (readOnly || disabled) {
          return;
        }
        event.preventDefault();
        inputRef.current?.dispatchEvent(new PointerEvent("click", {
          bubbles: true,
          shiftKey: event.shiftKey,
          ctrlKey: event.ctrlKey,
          altKey: event.altKey,
          metaKey: event.metaKey
        }));
      }
    }, getDescriptionProps, validation.getValidationProps, elementProps, otherGroupProps, getButtonProps],
    stateAttributesMapping: stateAttributesMapping34
  });
  return (0, import_jsx_runtime21.jsxs)(CheckboxRootContext.Provider, {
    value: state,
    children: [element, !checked && !groupContext && name && !parent && uncheckedValue !== void 0 && (0, import_jsx_runtime21.jsx)("input", {
      type: "hidden",
      name,
      value: uncheckedValue
    }), (0, import_jsx_runtime21.jsx)("input", {
      ...inputProps
    })]
  });
});
if (true) CheckboxRoot.displayName = "CheckboxRoot";

// node_modules/@base-ui/react/esm/checkbox/indicator/CheckboxIndicator.js
var React64 = __toESM(require_react(), 1);
var CheckboxIndicator = React64.forwardRef(function CheckboxIndicator2(componentProps, forwardedRef) {
  const {
    render,
    className,
    keepMounted = false,
    ...elementProps
  } = componentProps;
  const rootState = useCheckboxRootContext();
  const rendered = rootState.checked || rootState.indeterminate;
  const {
    mounted,
    transitionStatus,
    setMounted
  } = useTransitionStatus(rendered);
  const indicatorRef = React64.useRef(null);
  const state = {
    ...rootState,
    transitionStatus
  };
  useOpenChangeComplete({
    open: rendered,
    ref: indicatorRef,
    onComplete() {
      if (!rendered) {
        setMounted(false);
      }
    }
  });
  const baseStateAttributesMapping = useStateAttributesMapping(rootState);
  const stateAttributesMapping34 = React64.useMemo(() => ({
    ...baseStateAttributesMapping,
    ...transitionStatusMapping,
    ...fieldValidityMapping
  }), [baseStateAttributesMapping]);
  const shouldRender = keepMounted || mounted;
  const element = useRenderElement("span", componentProps, {
    ref: [forwardedRef, indicatorRef],
    state,
    stateAttributesMapping: stateAttributesMapping34,
    props: elementProps
  });
  if (!shouldRender) {
    return null;
  }
  return element;
});
if (true) CheckboxIndicator.displayName = "CheckboxIndicator";

// node_modules/@base-ui/react/esm/checkbox-group/CheckboxGroup.js
var React66 = __toESM(require_react(), 1);

// node_modules/@base-ui/react/esm/checkbox-group/useCheckboxGroupParent.js
var React65 = __toESM(require_react(), 1);
var EMPTY = [];
function useCheckboxGroupParent(params) {
  const {
    allValues = EMPTY,
    value = EMPTY,
    onValueChange: onValueChangeProp
  } = params;
  const uncontrolledStateRef = React65.useRef(value);
  const disabledStatesRef = React65.useRef(/* @__PURE__ */ new Map());
  const [status, setStatus] = React65.useState("mixed");
  const id = useBaseUiId();
  const checked = value.length === allValues.length;
  const indeterminate = value.length !== allValues.length && value.length > 0;
  const onValueChange = useStableCallback(onValueChangeProp);
  const getParentProps = React65.useCallback(() => ({
    id,
    indeterminate,
    checked,
    // TODO: custom `id` on child checkboxes breaks this
    // https://github.com/mui/base-ui/issues/2691
    "aria-controls": allValues.map((v) => `${id}-${v}`).join(" "),
    onCheckedChange(_, eventDetails) {
      const uncontrolledState = uncontrolledStateRef.current;
      const none = allValues.filter((v) => disabledStatesRef.current.get(v) && uncontrolledState.includes(v));
      const all = allValues.filter((v) => !disabledStatesRef.current.get(v) || disabledStatesRef.current.get(v) && uncontrolledState.includes(v));
      const allOnOrOff = uncontrolledState.length === all.length || uncontrolledState.length === 0;
      if (allOnOrOff) {
        if (value.length === all.length) {
          onValueChange(none, eventDetails);
        } else {
          onValueChange(all, eventDetails);
        }
        return;
      }
      if (status === "mixed") {
        onValueChange(all, eventDetails);
        setStatus("on");
      } else if (status === "on") {
        onValueChange(none, eventDetails);
        setStatus("off");
      } else if (status === "off") {
        onValueChange(uncontrolledState, eventDetails);
        setStatus("mixed");
      }
    }
  }), [allValues, checked, id, indeterminate, onValueChange, status, value.length]);
  const getChildProps = React65.useCallback((childValue) => ({
    checked: value.includes(childValue),
    onCheckedChange(nextChecked, eventDetails) {
      const newValue = value.slice();
      if (nextChecked) {
        newValue.push(childValue);
      } else {
        newValue.splice(newValue.indexOf(childValue), 1);
      }
      uncontrolledStateRef.current = newValue;
      onValueChange(newValue, eventDetails);
      setStatus("mixed");
    }
  }), [onValueChange, value]);
  return React65.useMemo(() => ({
    id,
    indeterminate,
    getParentProps,
    getChildProps,
    disabledStatesRef
  }), [id, indeterminate, getParentProps, getChildProps]);
}

// node_modules/@base-ui/react/esm/utils/areArraysEqual.js
function areArraysEqual(array1, array2, itemComparer = (a, b) => a === b) {
  return array1.length === array2.length && array1.every((value, index) => itemComparer(value, array2[index]));
}

// node_modules/@base-ui/react/esm/checkbox-group/CheckboxGroup.js
var import_jsx_runtime22 = __toESM(require_jsx_runtime(), 1);
var CheckboxGroup = React66.forwardRef(function CheckboxGroup2(componentProps, forwardedRef) {
  const {
    allValues,
    className,
    defaultValue,
    disabled: disabledProp = false,
    id: idProp,
    onValueChange,
    render,
    value: externalValue,
    ...elementProps
  } = componentProps;
  const {
    disabled: fieldDisabled,
    name: fieldName,
    state: fieldState,
    validation,
    setFilled,
    setDirty,
    shouldValidateOnChange,
    validityData
  } = useFieldRootContext();
  const {
    labelId,
    getDescriptionProps
  } = useLabelableContext();
  const {
    clearErrors
  } = useFormContext();
  const disabled = fieldDisabled || disabledProp;
  const [value, setValueUnwrapped] = useControlled({
    controlled: externalValue,
    default: defaultValue,
    name: "CheckboxGroup",
    state: "value"
  });
  const setValue = useStableCallback((v, eventDetails) => {
    onValueChange?.(v, eventDetails);
    if (eventDetails.isCanceled) {
      return;
    }
    setValueUnwrapped(v);
  });
  const parent = useCheckboxGroupParent({
    allValues,
    value: externalValue,
    onValueChange
  });
  const id = useBaseUiId(idProp);
  const controlRef = React66.useRef(null);
  const registerControlRef = React66.useCallback((element2) => {
    if (controlRef.current == null && element2 != null && !element2.hasAttribute(PARENT_CHECKBOX)) {
      controlRef.current = element2;
    }
  }, []);
  useField({
    enabled: !!fieldName,
    id,
    commit: validation.commit,
    value,
    controlRef,
    name: fieldName,
    getValue: () => value
  });
  const resolvedValue = value ?? EMPTY_ARRAY;
  useValueChanged(resolvedValue, () => {
    if (fieldName) {
      clearErrors(fieldName);
    }
    const initialValue = Array.isArray(validityData.initialValue) ? validityData.initialValue : EMPTY_ARRAY;
    setFilled(resolvedValue.length > 0);
    setDirty(!areArraysEqual(resolvedValue, initialValue));
    if (shouldValidateOnChange()) {
      validation.commit(resolvedValue);
    } else {
      validation.commit(resolvedValue, true);
    }
  });
  const state = {
    ...fieldState,
    disabled
  };
  const contextValue = React66.useMemo(() => ({
    allValues,
    value,
    defaultValue,
    setValue,
    parent,
    disabled,
    validation,
    registerControlRef
  }), [allValues, value, defaultValue, setValue, parent, disabled, validation, registerControlRef]);
  const element = useRenderElement("div", componentProps, {
    state,
    ref: forwardedRef,
    props: [{
      role: "group",
      "aria-labelledby": labelId
    }, getDescriptionProps, elementProps],
    stateAttributesMapping: fieldValidityMapping
  });
  return (0, import_jsx_runtime22.jsx)(CheckboxGroupContext.Provider, {
    value: contextValue,
    children: element
  });
});
if (true) CheckboxGroup.displayName = "CheckboxGroup";

// node_modules/@base-ui/react/esm/collapsible/index.parts.js
var index_parts_exports9 = {};
__export(index_parts_exports9, {
  Panel: () => CollapsiblePanel,
  Root: () => CollapsibleRoot,
  Trigger: () => CollapsibleTrigger
});

// node_modules/@base-ui/react/esm/collapsible/root/CollapsibleRoot.js
var React67 = __toESM(require_react(), 1);

// node_modules/@base-ui/react/esm/collapsible/root/stateAttributesMapping.js
var collapsibleStateAttributesMapping = {
  ...collapsibleOpenStateMapping,
  ...transitionStatusMapping
};

// node_modules/@base-ui/react/esm/collapsible/root/CollapsibleRoot.js
var import_jsx_runtime23 = __toESM(require_jsx_runtime(), 1);
var CollapsibleRoot = React67.forwardRef(function CollapsibleRoot2(componentProps, forwardedRef) {
  const {
    render,
    className,
    defaultOpen = false,
    disabled = false,
    onOpenChange: onOpenChangeProp,
    open,
    ...elementProps
  } = componentProps;
  const onOpenChange = useStableCallback(onOpenChangeProp);
  const collapsible = useCollapsibleRoot({
    open,
    defaultOpen,
    onOpenChange,
    disabled
  });
  const state = React67.useMemo(() => ({
    open: collapsible.open,
    disabled: collapsible.disabled,
    transitionStatus: collapsible.transitionStatus
  }), [collapsible.open, collapsible.disabled, collapsible.transitionStatus]);
  const contextValue = React67.useMemo(() => ({
    ...collapsible,
    onOpenChange,
    state
  }), [collapsible, onOpenChange, state]);
  const element = useRenderElement("div", componentProps, {
    state,
    ref: forwardedRef,
    props: elementProps,
    stateAttributesMapping: collapsibleStateAttributesMapping
  });
  return (0, import_jsx_runtime23.jsx)(CollapsibleRootContext.Provider, {
    value: contextValue,
    children: element
  });
});
if (true) CollapsibleRoot.displayName = "CollapsibleRoot";

// node_modules/@base-ui/react/esm/collapsible/trigger/CollapsibleTrigger.js
var React68 = __toESM(require_react(), 1);
var stateAttributesMapping8 = {
  ...triggerOpenStateMapping2,
  ...transitionStatusMapping
};
var CollapsibleTrigger = React68.forwardRef(function CollapsibleTrigger2(componentProps, forwardedRef) {
  const {
    panelId,
    open,
    handleTrigger,
    state,
    disabled: contextDisabled
  } = useCollapsibleRootContext();
  const {
    className,
    disabled = contextDisabled,
    id,
    render,
    nativeButton = true,
    ...elementProps
  } = componentProps;
  const {
    getButtonProps,
    buttonRef
  } = useButton({
    disabled,
    focusableWhenDisabled: true,
    native: nativeButton
  });
  const props = React68.useMemo(() => ({
    "aria-controls": open ? panelId : void 0,
    "aria-expanded": open,
    onClick: handleTrigger
  }), [panelId, open, handleTrigger]);
  const element = useRenderElement("button", componentProps, {
    state,
    ref: [forwardedRef, buttonRef],
    props: [props, elementProps, getButtonProps],
    stateAttributesMapping: stateAttributesMapping8
  });
  return element;
});
if (true) CollapsibleTrigger.displayName = "CollapsibleTrigger";

// node_modules/@base-ui/react/esm/collapsible/panel/CollapsiblePanel.js
var React69 = __toESM(require_react(), 1);

// node_modules/@base-ui/react/esm/collapsible/panel/CollapsiblePanelCssVars.js
var CollapsiblePanelCssVars = (function(CollapsiblePanelCssVars2) {
  CollapsiblePanelCssVars2["collapsiblePanelHeight"] = "--collapsible-panel-height";
  CollapsiblePanelCssVars2["collapsiblePanelWidth"] = "--collapsible-panel-width";
  return CollapsiblePanelCssVars2;
})({});

// node_modules/@base-ui/react/esm/collapsible/panel/CollapsiblePanel.js
var CollapsiblePanel = React69.forwardRef(function CollapsiblePanel2(componentProps, forwardedRef) {
  const {
    className,
    hiddenUntilFound: hiddenUntilFoundProp,
    keepMounted: keepMountedProp,
    render,
    id: idProp,
    ...elementProps
  } = componentProps;
  if (true) {
    useIsoLayoutEffect(() => {
      if (hiddenUntilFoundProp && keepMountedProp === false) {
        warn("The `keepMounted={false}` prop on a Collapsible will be ignored when using `hiddenUntilFound` since it requires the Panel to remain mounted even when closed.");
      }
    }, [hiddenUntilFoundProp, keepMountedProp]);
  }
  const {
    abortControllerRef,
    animationTypeRef,
    height,
    mounted,
    onOpenChange,
    open,
    panelId,
    panelRef,
    runOnceAnimationsFinish,
    setDimensions,
    setHiddenUntilFound,
    setKeepMounted,
    setMounted,
    setPanelIdState,
    setOpen,
    setVisible,
    state,
    transitionDimensionRef,
    visible,
    width,
    transitionStatus
  } = useCollapsibleRootContext();
  const hiddenUntilFound = hiddenUntilFoundProp ?? false;
  const keepMounted = keepMountedProp ?? false;
  useIsoLayoutEffect(() => {
    if (idProp) {
      setPanelIdState(idProp);
      return () => {
        setPanelIdState(void 0);
      };
    }
    return void 0;
  }, [idProp, setPanelIdState]);
  useIsoLayoutEffect(() => {
    setHiddenUntilFound(hiddenUntilFound);
  }, [setHiddenUntilFound, hiddenUntilFound]);
  useIsoLayoutEffect(() => {
    setKeepMounted(keepMounted);
  }, [setKeepMounted, keepMounted]);
  const {
    props
  } = useCollapsiblePanel({
    abortControllerRef,
    animationTypeRef,
    externalRef: forwardedRef,
    height,
    hiddenUntilFound,
    id: panelId,
    keepMounted,
    mounted,
    onOpenChange,
    open,
    panelRef,
    runOnceAnimationsFinish,
    setDimensions,
    setMounted,
    setOpen,
    setVisible,
    transitionDimensionRef,
    visible,
    width
  });
  useOpenChangeComplete({
    open: open && transitionStatus === "idle",
    ref: panelRef,
    onComplete() {
      if (!open) {
        return;
      }
      setDimensions({
        height: void 0,
        width: void 0
      });
    }
  });
  const panelState = React69.useMemo(() => ({
    ...state,
    transitionStatus
  }), [state, transitionStatus]);
  const element = useRenderElement("div", componentProps, {
    state: panelState,
    ref: [forwardedRef, panelRef],
    props: [props, {
      style: {
        [CollapsiblePanelCssVars.collapsiblePanelHeight]: height === void 0 ? "auto" : `${height}px`,
        [CollapsiblePanelCssVars.collapsiblePanelWidth]: width === void 0 ? "auto" : `${width}px`
      }
    }, elementProps],
    stateAttributesMapping: collapsibleStateAttributesMapping
  });
  const shouldRender = keepMounted || hiddenUntilFound || !keepMounted && mounted;
  if (!shouldRender) {
    return null;
  }
  return element;
});
if (true) CollapsiblePanel.displayName = "CollapsiblePanel";

// node_modules/@base-ui/react/esm/combobox/index.parts.js
var index_parts_exports10 = {};
__export(index_parts_exports10, {
  Arrow: () => ComboboxArrow,
  Backdrop: () => ComboboxBackdrop,
  Chip: () => ComboboxChip,
  ChipRemove: () => ComboboxChipRemove,
  Chips: () => ComboboxChips,
  Clear: () => ComboboxClear,
  Collection: () => ComboboxCollection,
  Empty: () => ComboboxEmpty,
  Group: () => ComboboxGroup,
  GroupLabel: () => ComboboxGroupLabel,
  Icon: () => ComboboxIcon,
  Input: () => ComboboxInput,
  InputGroup: () => ComboboxInputGroup,
  Item: () => ComboboxItem,
  ItemIndicator: () => ComboboxItemIndicator,
  Label: () => ComboboxLabel,
  List: () => ComboboxList,
  Popup: () => ComboboxPopup,
  Portal: () => ComboboxPortal,
  Positioner: () => ComboboxPositioner,
  Root: () => ComboboxRoot,
  Row: () => ComboboxRow,
  Separator: () => Separator,
  Status: () => ComboboxStatus,
  Trigger: () => ComboboxTrigger,
  Value: () => ComboboxValue,
  useFilter: () => useComboboxFilter,
  useFilteredItems: () => useFilteredItems
});

// node_modules/@base-ui/react/esm/combobox/root/ComboboxRoot.js
var React70 = __toESM(require_react(), 1);
var import_jsx_runtime24 = __toESM(require_jsx_runtime(), 1);
function ComboboxRoot(props) {
  const {
    multiple = false,
    defaultValue,
    value,
    onValueChange,
    autoComplete,
    ...other
  } = props;
  return (0, import_jsx_runtime24.jsx)(AriaCombobox, {
    ...other,
    selectionMode: multiple ? "multiple" : "single",
    selectedValue: value,
    defaultSelectedValue: defaultValue,
    onSelectedValueChange: onValueChange,
    formAutoComplete: autoComplete
  });
}

// node_modules/@base-ui/react/esm/combobox/label/ComboboxLabel.js
var React71 = __toESM(require_react(), 1);
var ComboboxLabel = React71.forwardRef(function ComboboxLabel2(componentProps, forwardedRef) {
  const {
    render,
    className,
    ...elementProps
  } = componentProps;
  const elementPropsWithoutId = elementProps;
  delete elementPropsWithoutId.id;
  const fieldRootContext = useFieldRootContext();
  const store = useComboboxRootContext();
  const inputInsidePopup = useStore(store, selectors2.inputInsidePopup);
  const triggerElement = useStore(store, selectors2.triggerElement);
  const inputElement = useStore(store, selectors2.inputElement);
  const rootId = useStore(store, selectors2.id);
  const defaultLabelId = getDefaultLabelId(rootId);
  const localControlId = triggerElement?.id ?? (inputInsidePopup ? rootId : void 0);
  if (true) {
    React71.useEffect(() => {
      if (!inputElement || inputInsidePopup) {
        return;
      }
      const ownerStackMessage = SafeReact.captureOwnerStack?.() || "";
      const message = "<Combobox.Label> labels <Combobox.Trigger> only. When <Combobox.Input> is the form control, use a native <label> or <Field.Label> instead.";
      error(`${message}${ownerStackMessage}`);
    }, [inputElement, inputInsidePopup]);
  }
  const labelProps = useLabel({
    id: defaultLabelId,
    fallbackControlId: localControlId,
    setLabelId(nextLabelId) {
      store.set("labelId", nextLabelId);
    }
  });
  return useRenderElement("div", componentProps, {
    ref: forwardedRef,
    state: fieldRootContext.state,
    props: [labelProps, elementProps],
    stateAttributesMapping: fieldValidityMapping
  });
});
if (true) ComboboxLabel.displayName = "ComboboxLabel";

// node_modules/@base-ui/react/esm/combobox/value/ComboboxValue.js
var React72 = __toESM(require_react(), 1);
var import_jsx_runtime25 = __toESM(require_jsx_runtime(), 1);
function ComboboxValue(props) {
  const {
    children: childrenProp,
    placeholder
  } = props;
  const store = useComboboxRootContext();
  const itemToStringLabel = useStore(store, selectors2.itemToStringLabel);
  const selectedValue = useStore(store, selectors2.selectedValue);
  const items = useStore(store, selectors2.items);
  const multiple = useStore(store, selectors2.selectionMode) === "multiple";
  const hasSelectedValue = useStore(store, selectors2.hasSelectedValue);
  const shouldCheckNullItemLabel = !hasSelectedValue && placeholder != null && childrenProp == null;
  const hasNullLabel = useStore(store, selectors2.hasNullItemLabel, shouldCheckNullItemLabel);
  let children = null;
  if (typeof childrenProp === "function") {
    children = childrenProp(selectedValue);
  } else if (childrenProp != null) {
    children = childrenProp;
  } else if (!hasSelectedValue && placeholder != null && !hasNullLabel) {
    children = placeholder;
  } else if (multiple && Array.isArray(selectedValue)) {
    children = resolveMultipleLabels(selectedValue, items, itemToStringLabel);
  } else {
    children = resolveSelectedLabel(selectedValue, items, itemToStringLabel);
  }
  return (0, import_jsx_runtime25.jsx)(React72.Fragment, {
    children
  });
}

// node_modules/@base-ui/react/esm/combobox/item-indicator/ComboboxItemIndicator.js
var React73 = __toESM(require_react(), 1);
var import_jsx_runtime26 = __toESM(require_jsx_runtime(), 1);
var ComboboxItemIndicator = React73.forwardRef(function ComboboxItemIndicator2(componentProps, forwardedRef) {
  const keepMounted = componentProps.keepMounted ?? false;
  const {
    selected
  } = useComboboxItemContext();
  const shouldRender = keepMounted || selected;
  if (!shouldRender) {
    return null;
  }
  return (0, import_jsx_runtime26.jsx)(Inner, {
    ...componentProps,
    ref: forwardedRef
  });
});
if (true) ComboboxItemIndicator.displayName = "ComboboxItemIndicator";
var Inner = React73.memo(React73.forwardRef((componentProps, forwardedRef) => {
  const {
    render,
    className,
    keepMounted,
    ...elementProps
  } = componentProps;
  const {
    selected
  } = useComboboxItemContext();
  const indicatorRef = React73.useRef(null);
  const {
    transitionStatus,
    setMounted
  } = useTransitionStatus(selected);
  const state = {
    selected,
    transitionStatus
  };
  const element = useRenderElement("span", componentProps, {
    ref: [forwardedRef, indicatorRef],
    state,
    props: [{
      "aria-hidden": true,
      children: "✔️"
    }, elementProps],
    stateAttributesMapping: transitionStatusMapping
  });
  useOpenChangeComplete({
    open: selected,
    ref: indicatorRef,
    onComplete() {
      if (!selected) {
        setMounted(false);
      }
    }
  });
  return element;
}));
if (true) Inner.displayName = "Inner";

// node_modules/@base-ui/react/esm/combobox/chips/ComboboxChips.js
var React74 = __toESM(require_react(), 1);
var import_jsx_runtime27 = __toESM(require_jsx_runtime(), 1);
var ComboboxChips = React74.forwardRef(function ComboboxChips2(componentProps, forwardedRef) {
  const {
    render,
    className,
    ...elementProps
  } = componentProps;
  const store = useComboboxRootContext();
  const open = useStore(store, selectors2.open);
  const hasSelectionChips = useStore(store, selectors2.hasSelectionChips);
  const [highlightedChipIndex, setHighlightedChipIndex] = React74.useState(void 0);
  if (open && highlightedChipIndex !== void 0) {
    setHighlightedChipIndex(void 0);
  }
  const chipsRef = React74.useRef([]);
  const element = useRenderElement("div", componentProps, {
    ref: [forwardedRef, store.state.chipsContainerRef],
    // NVDA enters browse mode instead of staying in focus mode when navigating with
    // arrow keys inside a container unless it has a toolbar role.
    props: [hasSelectionChips ? {
      role: "toolbar"
    } : EMPTY_OBJECT, elementProps]
  });
  const contextValue = React74.useMemo(() => ({
    highlightedChipIndex,
    setHighlightedChipIndex,
    chipsRef
  }), [highlightedChipIndex, setHighlightedChipIndex, chipsRef]);
  return (0, import_jsx_runtime27.jsx)(ComboboxChipsContext.Provider, {
    value: contextValue,
    children: (0, import_jsx_runtime27.jsx)(CompositeList, {
      elementsRef: chipsRef,
      children: element
    })
  });
});
if (true) ComboboxChips.displayName = "ComboboxChips";

// node_modules/@base-ui/react/esm/combobox/chip/ComboboxChip.js
var React76 = __toESM(require_react(), 1);
var ReactDOM2 = __toESM(require_react_dom(), 1);

// node_modules/@base-ui/react/esm/combobox/chip/ComboboxChipContext.js
var React75 = __toESM(require_react(), 1);
var ComboboxChipContext = React75.createContext(void 0);
if (true) ComboboxChipContext.displayName = "ComboboxChipContext";
function useComboboxChipContext() {
  const context = React75.useContext(ComboboxChipContext);
  if (!context) {
    throw new Error(true ? "useComboboxChipContext must be used within a ComboboxChip" : formatErrorMessage_default(17));
  }
  return context;
}

// node_modules/@base-ui/react/esm/combobox/chip/ComboboxChip.js
var import_jsx_runtime28 = __toESM(require_jsx_runtime(), 1);
var ComboboxChip = React76.forwardRef(function ComboboxChip2(componentProps, forwardedRef) {
  const {
    render,
    className,
    ...elementProps
  } = componentProps;
  const store = useComboboxRootContext();
  const {
    setHighlightedChipIndex,
    chipsRef
  } = useComboboxChipsContext();
  const disabled = useStore(store, selectors2.disabled);
  const readOnly = useStore(store, selectors2.readOnly);
  const selectedValue = useStore(store, selectors2.selectedValue);
  const {
    ref,
    index
  } = useCompositeListItem();
  function handleKeyDown(event) {
    let nextIndex = index;
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      if (index > 0) {
        nextIndex = index - 1;
      } else {
        nextIndex = void 0;
      }
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      if (index < selectedValue.length - 1) {
        nextIndex = index + 1;
      } else {
        nextIndex = void 0;
      }
    } else if (event.key === "Backspace" || event.key === "Delete") {
      const computedNextIndex = index >= selectedValue.length - 1 ? selectedValue.length - 2 : index;
      nextIndex = computedNextIndex >= 0 ? computedNextIndex : void 0;
      stopEvent(event);
      store.state.setIndices({
        activeIndex: null,
        selectedIndex: null,
        type: "keyboard"
      });
      store.state.setSelectedValue(selectedValue.filter((_, i) => i !== index), createChangeEventDetails(reason_parts_exports.none, event.nativeEvent));
    } else if (event.key === "Enter" || event.key === " ") {
      stopEvent(event);
      nextIndex = void 0;
    } else if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      stopEvent(event);
      store.state.setOpen(true, createChangeEventDetails(reason_parts_exports.listNavigation, event.nativeEvent));
      nextIndex = void 0;
    } else if (
      // Check for printable characters (letters, numbers, symbols)
      event.key.length === 1 && !event.ctrlKey && !event.metaKey && !event.altKey
    ) {
      nextIndex = void 0;
    }
    return nextIndex;
  }
  const state = {
    disabled
  };
  const element = useRenderElement("div", componentProps, {
    ref: [forwardedRef, ref],
    state,
    props: [{
      tabIndex: -1,
      "aria-disabled": disabled || void 0,
      "aria-readonly": readOnly || void 0,
      onKeyDown(event) {
        if (disabled || readOnly) {
          return;
        }
        const nextIndex = handleKeyDown(event);
        ReactDOM2.flushSync(() => {
          setHighlightedChipIndex(nextIndex);
        });
        if (nextIndex === void 0) {
          store.state.inputRef.current?.focus();
        } else {
          chipsRef.current[nextIndex]?.focus();
        }
      },
      onMouseDown(event) {
        if (readOnly) {
          return;
        }
        event.preventDefault();
        if (disabled) {
          return;
        }
        store.state.inputRef.current?.focus();
      }
    }, elementProps]
  });
  const contextValue = React76.useMemo(() => ({
    index
  }), [index]);
  return (0, import_jsx_runtime28.jsx)(ComboboxChipContext.Provider, {
    value: contextValue,
    children: element
  });
});
if (true) ComboboxChip.displayName = "ComboboxChip";

// node_modules/@base-ui/react/esm/combobox/chip-remove/ComboboxChipRemove.js
var React77 = __toESM(require_react(), 1);
var ComboboxChipRemove = React77.forwardRef(function ComboboxChipRemove2(componentProps, forwardedRef) {
  const {
    render,
    className,
    disabled: disabledProp = false,
    nativeButton = true,
    ...elementProps
  } = componentProps;
  const store = useComboboxRootContext();
  const {
    index
  } = useComboboxChipContext();
  const comboboxDisabled = useStore(store, selectors2.disabled);
  const readOnly = useStore(store, selectors2.readOnly);
  const selectedValue = useStore(store, selectors2.selectedValue);
  const isItemEqualToValue = useStore(store, selectors2.isItemEqualToValue);
  const disabled = comboboxDisabled || disabledProp;
  const {
    buttonRef,
    getButtonProps
  } = useButton({
    native: nativeButton,
    disabled: disabled || readOnly,
    focusableWhenDisabled: true
  });
  const state = {
    disabled
  };
  function clearActiveIndexForRemovedItem(removedItem) {
    const activeIndex = store.state.activeIndex;
    if (activeIndex == null) {
      return;
    }
    const removedIndex = findItemIndex(store.state.valuesRef.current, removedItem, isItemEqualToValue);
    if (removedIndex !== -1 && activeIndex === removedIndex) {
      store.state.setIndices({
        activeIndex: null,
        type: store.state.keyboardActiveRef.current ? "keyboard" : "pointer"
      });
    }
  }
  function removeChip(event) {
    const eventDetails = createChangeEventDetails(reason_parts_exports.chipRemovePress, event.nativeEvent);
    const removedItem = selectedValue[index];
    clearActiveIndexForRemovedItem(removedItem);
    store.state.setSelectedValue(selectedValue.filter((_, i) => i !== index), eventDetails);
    store.state.inputRef.current?.focus();
    return eventDetails;
  }
  const element = useRenderElement("button", componentProps, {
    ref: [forwardedRef, buttonRef],
    state,
    props: [{
      tabIndex: -1,
      onClick(event) {
        if (disabled || readOnly) {
          return;
        }
        const eventDetails = removeChip(event);
        if (!eventDetails.isPropagationAllowed) {
          event.stopPropagation();
        }
      },
      onKeyDown(event) {
        if (disabled || readOnly) {
          return;
        }
        if (event.key === "Enter" || event.key === " ") {
          const eventDetails = removeChip(event);
          if (!eventDetails.isPropagationAllowed) {
            stopEvent(event);
          }
        }
      }
    }, elementProps, getButtonProps]
  });
  return element;
});
if (true) ComboboxChipRemove.displayName = "ComboboxChipRemove";

// node_modules/@base-ui/react/esm/context-menu/index.parts.js
var index_parts_exports12 = {};
__export(index_parts_exports12, {
  Arrow: () => MenuArrow,
  Backdrop: () => MenuBackdrop,
  CheckboxItem: () => MenuCheckboxItem,
  CheckboxItemIndicator: () => MenuCheckboxItemIndicator,
  Group: () => MenuGroup,
  GroupLabel: () => MenuGroupLabel,
  Item: () => MenuItem,
  LinkItem: () => MenuLinkItem,
  Popup: () => MenuPopup,
  Portal: () => MenuPortal,
  Positioner: () => MenuPositioner,
  RadioGroup: () => MenuRadioGroup,
  RadioItem: () => MenuRadioItem,
  RadioItemIndicator: () => MenuRadioItemIndicator,
  Root: () => ContextMenuRoot,
  Separator: () => Separator,
  SubmenuRoot: () => MenuSubmenuRoot,
  SubmenuTrigger: () => MenuSubmenuTrigger,
  Trigger: () => ContextMenuTrigger
});

// node_modules/@base-ui/react/esm/context-menu/root/ContextMenuRoot.js
var React115 = __toESM(require_react(), 1);

// node_modules/@base-ui/react/esm/context-menu/root/ContextMenuRootContext.js
var React78 = __toESM(require_react(), 1);
var ContextMenuRootContext = React78.createContext(void 0);
if (true) ContextMenuRootContext.displayName = "ContextMenuRootContext";
function useContextMenuRootContext(optional = true) {
  const context = React78.useContext(ContextMenuRootContext);
  if (context === void 0 && !optional) {
    throw new Error(true ? "Base UI: ContextMenuRootContext is missing. ContextMenu parts must be placed within <ContextMenu.Root>." : formatErrorMessage_default(25));
  }
  return context;
}

// node_modules/@base-ui/react/esm/menu/index.parts.js
var index_parts_exports11 = {};
__export(index_parts_exports11, {
  Arrow: () => MenuArrow,
  Backdrop: () => MenuBackdrop,
  CheckboxItem: () => MenuCheckboxItem,
  CheckboxItemIndicator: () => MenuCheckboxItemIndicator,
  Group: () => MenuGroup,
  GroupLabel: () => MenuGroupLabel,
  Handle: () => MenuHandle,
  Item: () => MenuItem,
  LinkItem: () => MenuLinkItem,
  Popup: () => MenuPopup,
  Portal: () => MenuPortal,
  Positioner: () => MenuPositioner,
  RadioGroup: () => MenuRadioGroup,
  RadioItem: () => MenuRadioItem,
  RadioItemIndicator: () => MenuRadioItemIndicator,
  Root: () => MenuRoot,
  Separator: () => Separator,
  SubmenuRoot: () => MenuSubmenuRoot,
  SubmenuTrigger: () => MenuSubmenuTrigger,
  Trigger: () => MenuTrigger,
  Viewport: () => MenuViewport,
  createHandle: () => createMenuHandle
});

// node_modules/@base-ui/react/esm/menu/arrow/MenuArrow.js
var React81 = __toESM(require_react(), 1);

// node_modules/@base-ui/react/esm/menu/positioner/MenuPositionerContext.js
var React79 = __toESM(require_react(), 1);
var MenuPositionerContext = React79.createContext(void 0);
if (true) MenuPositionerContext.displayName = "MenuPositionerContext";
function useMenuPositionerContext(optional) {
  const context = React79.useContext(MenuPositionerContext);
  if (context === void 0 && !optional) {
    throw new Error(true ? "Base UI: MenuPositionerContext is missing. MenuPositioner parts must be placed within <Menu.Positioner>." : formatErrorMessage_default(33));
  }
  return context;
}

// node_modules/@base-ui/react/esm/menu/root/MenuRootContext.js
var React80 = __toESM(require_react(), 1);
var MenuRootContext = React80.createContext(void 0);
if (true) MenuRootContext.displayName = "MenuRootContext";
function useMenuRootContext(optional) {
  const context = React80.useContext(MenuRootContext);
  if (context === void 0 && !optional) {
    throw new Error(true ? "Base UI: MenuRootContext is missing. Menu parts must be placed within <Menu.Root>." : formatErrorMessage_default(36));
  }
  return context;
}

// node_modules/@base-ui/react/esm/menu/arrow/MenuArrow.js
var MenuArrow = React81.forwardRef(function MenuArrow2(componentProps, forwardedRef) {
  const {
    className,
    render,
    ...elementProps
  } = componentProps;
  const {
    store
  } = useMenuRootContext();
  const {
    arrowRef,
    side,
    align,
    arrowUncentered,
    arrowStyles
  } = useMenuPositionerContext();
  const open = store.useState("open");
  const state = {
    open,
    side,
    align,
    uncentered: arrowUncentered
  };
  return useRenderElement("div", componentProps, {
    ref: [arrowRef, forwardedRef],
    stateAttributesMapping: popupStateMapping,
    state,
    props: {
      style: arrowStyles,
      "aria-hidden": true,
      ...elementProps
    }
  });
});
if (true) MenuArrow.displayName = "MenuArrow";

// node_modules/@base-ui/react/esm/menu/backdrop/MenuBackdrop.js
var React82 = __toESM(require_react(), 1);
var stateAttributesMapping9 = {
  ...popupStateMapping,
  ...transitionStatusMapping
};
var MenuBackdrop = React82.forwardRef(function MenuBackdrop2(componentProps, forwardedRef) {
  const {
    className,
    render,
    ...elementProps
  } = componentProps;
  const {
    store
  } = useMenuRootContext();
  const open = store.useState("open");
  const mounted = store.useState("mounted");
  const transitionStatus = store.useState("transitionStatus");
  const lastOpenChangeReason = store.useState("lastOpenChangeReason");
  const contextMenuContext = useContextMenuRootContext();
  const state = {
    open,
    transitionStatus
  };
  return useRenderElement("div", componentProps, {
    ref: contextMenuContext?.backdropRef ? [forwardedRef, contextMenuContext.backdropRef] : forwardedRef,
    state,
    stateAttributesMapping: stateAttributesMapping9,
    props: [{
      role: "presentation",
      hidden: !mounted,
      style: {
        pointerEvents: lastOpenChangeReason === reason_parts_exports.triggerHover ? "none" : void 0,
        userSelect: "none",
        WebkitUserSelect: "none"
      }
    }, elementProps]
  });
});
if (true) MenuBackdrop.displayName = "MenuBackdrop";

// node_modules/@base-ui/react/esm/menu/checkbox-item/MenuCheckboxItem.js
var React86 = __toESM(require_react(), 1);

// node_modules/@base-ui/react/esm/menu/checkbox-item/MenuCheckboxItemContext.js
var React83 = __toESM(require_react(), 1);
var MenuCheckboxItemContext = React83.createContext(void 0);
if (true) MenuCheckboxItemContext.displayName = "MenuCheckboxItemContext";
function useMenuCheckboxItemContext() {
  const context = React83.useContext(MenuCheckboxItemContext);
  if (context === void 0) {
    throw new Error(true ? "Base UI: MenuCheckboxItemContext is missing. MenuCheckboxItem parts must be placed within <Menu.CheckboxItem>." : formatErrorMessage_default(30));
  }
  return context;
}

// node_modules/@base-ui/react/esm/menu/item/useMenuItem.js
var React85 = __toESM(require_react(), 1);

// node_modules/@base-ui/react/esm/menu/item/useMenuItemCommonProps.js
var React84 = __toESM(require_react(), 1);
function useMenuItemCommonProps(params) {
  const {
    closeOnClick,
    highlighted,
    id,
    nodeId,
    store,
    typingRef,
    itemRef,
    itemMetadata
  } = params;
  const {
    events: menuEvents
  } = store.useState("floatingTreeRoot");
  const contextMenuContext = useContextMenuRootContext(true);
  const isContextMenu = contextMenuContext !== void 0;
  return React84.useMemo(() => ({
    id,
    role: "menuitem",
    tabIndex: highlighted ? 0 : -1,
    onKeyDown(event) {
      if (event.key === " " && typingRef?.current) {
        event.preventDefault();
      }
    },
    onMouseMove(event) {
      if (!nodeId) {
        return;
      }
      menuEvents.emit("itemhover", {
        nodeId,
        target: event.currentTarget
      });
    },
    onClick(event) {
      if (closeOnClick) {
        menuEvents.emit("close", {
          domEvent: event,
          reason: reason_parts_exports.itemPress
        });
      }
    },
    onMouseUp(event) {
      if (contextMenuContext) {
        const initialCursorPoint = contextMenuContext.initialCursorPointRef.current;
        contextMenuContext.initialCursorPointRef.current = null;
        if (isContextMenu && initialCursorPoint && Math.abs(event.clientX - initialCursorPoint.x) <= 1 && Math.abs(event.clientY - initialCursorPoint.y) <= 1) {
          return;
        }
        if (isContextMenu && !isMac && event.button === 2) {
          return;
        }
      }
      if (itemRef.current && store.context.allowMouseUpTriggerRef.current && (!isContextMenu || event.button === 2)) {
        if (!itemMetadata || itemMetadata.type === "regular-item") {
          itemRef.current.click();
        }
      }
    }
  }), [closeOnClick, highlighted, id, menuEvents, nodeId, store, typingRef, itemRef, contextMenuContext, isContextMenu, itemMetadata]);
}

// node_modules/@base-ui/react/esm/menu/item/useMenuItem.js
var REGULAR_ITEM = {
  type: "regular-item"
};
function useMenuItem(params) {
  const {
    closeOnClick,
    disabled = false,
    highlighted,
    id,
    store,
    typingRef = store.context.typingRef,
    nativeButton,
    itemMetadata,
    nodeId
  } = params;
  const itemRef = React85.useRef(null);
  const {
    getButtonProps,
    buttonRef
  } = useButton({
    disabled,
    focusableWhenDisabled: true,
    native: nativeButton,
    composite: true
  });
  const commonProps = useMenuItemCommonProps({
    closeOnClick,
    highlighted,
    id,
    nodeId,
    store,
    typingRef,
    itemRef,
    itemMetadata
  });
  const getItemProps = React85.useCallback((externalProps) => {
    return mergeProps(commonProps, {
      onMouseEnter() {
        if (itemMetadata.type !== "submenu-trigger") {
          return;
        }
        itemMetadata.setActive();
      }
    }, externalProps, getButtonProps);
  }, [commonProps, getButtonProps, itemMetadata]);
  const mergedRef = useMergedRefs(itemRef, buttonRef);
  return React85.useMemo(() => ({
    getItemProps,
    itemRef: mergedRef
  }), [getItemProps, mergedRef]);
}

// node_modules/@base-ui/react/esm/menu/checkbox-item/MenuCheckboxItemDataAttributes.js
var MenuCheckboxItemDataAttributes = (function(MenuCheckboxItemDataAttributes2) {
  MenuCheckboxItemDataAttributes2["checked"] = "data-checked";
  MenuCheckboxItemDataAttributes2["unchecked"] = "data-unchecked";
  MenuCheckboxItemDataAttributes2["disabled"] = "data-disabled";
  MenuCheckboxItemDataAttributes2["highlighted"] = "data-highlighted";
  return MenuCheckboxItemDataAttributes2;
})({});

// node_modules/@base-ui/react/esm/menu/utils/stateAttributesMapping.js
var itemMapping = {
  checked(value) {
    if (value) {
      return {
        [MenuCheckboxItemDataAttributes.checked]: ""
      };
    }
    return {
      [MenuCheckboxItemDataAttributes.unchecked]: ""
    };
  },
  ...transitionStatusMapping
};

// node_modules/@base-ui/react/esm/menu/checkbox-item/MenuCheckboxItem.js
var import_jsx_runtime29 = __toESM(require_jsx_runtime(), 1);
var MenuCheckboxItem = React86.forwardRef(function MenuCheckboxItem2(componentProps, forwardedRef) {
  const {
    render,
    className,
    id: idProp,
    label,
    nativeButton = false,
    disabled = false,
    closeOnClick = false,
    checked: checkedProp,
    defaultChecked,
    onCheckedChange,
    ...elementProps
  } = componentProps;
  const listItem = useCompositeListItem({
    label
  });
  const menuPositionerContext = useMenuPositionerContext(true);
  const id = useBaseUiId(idProp);
  const {
    store
  } = useMenuRootContext();
  const highlighted = store.useState("isActive", listItem.index);
  const itemProps = store.useState("itemProps");
  const [checked, setChecked] = useControlled({
    controlled: checkedProp,
    default: defaultChecked ?? false,
    name: "MenuCheckboxItem",
    state: "checked"
  });
  const {
    getItemProps,
    itemRef
  } = useMenuItem({
    closeOnClick,
    disabled,
    highlighted,
    id,
    store,
    nativeButton,
    nodeId: menuPositionerContext?.nodeId,
    itemMetadata: REGULAR_ITEM
  });
  const state = React86.useMemo(() => ({
    disabled,
    highlighted,
    checked
  }), [disabled, highlighted, checked]);
  const handleClick = useStableCallback((event) => {
    const details = {
      ...createChangeEventDetails(reason_parts_exports.itemPress, event.nativeEvent),
      preventUnmountOnClose: () => {
      }
    };
    onCheckedChange?.(!checked, details);
    if (details.isCanceled) {
      return;
    }
    setChecked((currentlyChecked) => !currentlyChecked);
  });
  const element = useRenderElement("div", componentProps, {
    state,
    stateAttributesMapping: itemMapping,
    props: [itemProps, {
      role: "menuitemcheckbox",
      "aria-checked": checked,
      onClick: handleClick
    }, elementProps, getItemProps],
    ref: [itemRef, forwardedRef, listItem.ref]
  });
  return (0, import_jsx_runtime29.jsx)(MenuCheckboxItemContext.Provider, {
    value: state,
    children: element
  });
});
if (true) MenuCheckboxItem.displayName = "MenuCheckboxItem";

// node_modules/@base-ui/react/esm/menu/checkbox-item-indicator/MenuCheckboxItemIndicator.js
var React87 = __toESM(require_react(), 1);
var MenuCheckboxItemIndicator = React87.forwardRef(function MenuCheckboxItemIndicator2(componentProps, forwardedRef) {
  const {
    render,
    className,
    keepMounted = false,
    ...elementProps
  } = componentProps;
  const item = useMenuCheckboxItemContext();
  const indicatorRef = React87.useRef(null);
  const {
    transitionStatus,
    setMounted
  } = useTransitionStatus(item.checked);
  useOpenChangeComplete({
    open: item.checked,
    ref: indicatorRef,
    onComplete() {
      if (!item.checked) {
        setMounted(false);
      }
    }
  });
  const state = {
    checked: item.checked,
    disabled: item.disabled,
    highlighted: item.highlighted,
    transitionStatus
  };
  const element = useRenderElement("span", componentProps, {
    state,
    ref: [forwardedRef, indicatorRef],
    stateAttributesMapping: itemMapping,
    props: {
      "aria-hidden": true,
      ...elementProps
    },
    enabled: keepMounted || item.checked
  });
  return element;
});
if (true) MenuCheckboxItemIndicator.displayName = "MenuCheckboxItemIndicator";

// node_modules/@base-ui/react/esm/menu/group/MenuGroup.js
var React89 = __toESM(require_react(), 1);

// node_modules/@base-ui/react/esm/menu/group/MenuGroupContext.js
var React88 = __toESM(require_react(), 1);
var MenuGroupContext = React88.createContext(void 0);
if (true) MenuGroupContext.displayName = "MenuGroupContext";
function useMenuGroupRootContext() {
  const context = React88.useContext(MenuGroupContext);
  if (context === void 0) {
    throw new Error(true ? "Base UI: MenuGroupRootContext is missing. Menu group parts must be used within <Menu.Group>." : formatErrorMessage_default(31));
  }
  return context;
}

// node_modules/@base-ui/react/esm/menu/group/MenuGroup.js
var import_jsx_runtime30 = __toESM(require_jsx_runtime(), 1);
var MenuGroup = React89.forwardRef(function MenuGroup2(componentProps, forwardedRef) {
  const {
    render,
    className,
    ...elementProps
  } = componentProps;
  const [labelId, setLabelId] = React89.useState(void 0);
  const context = React89.useMemo(() => ({
    setLabelId
  }), [setLabelId]);
  const element = useRenderElement("div", componentProps, {
    ref: forwardedRef,
    props: {
      role: "group",
      "aria-labelledby": labelId,
      ...elementProps
    }
  });
  return (0, import_jsx_runtime30.jsx)(MenuGroupContext.Provider, {
    value: context,
    children: element
  });
});
if (true) MenuGroup.displayName = "MenuGroup";

// node_modules/@base-ui/react/esm/menu/group-label/MenuGroupLabel.js
var React90 = __toESM(require_react(), 1);
var MenuGroupLabel = React90.forwardRef(function MenuGroupLabelComponent(componentProps, forwardedRef) {
  const {
    className,
    render,
    id: idProp,
    ...elementProps
  } = componentProps;
  const id = useBaseUiId(idProp);
  const {
    setLabelId
  } = useMenuGroupRootContext();
  useIsoLayoutEffect(() => {
    setLabelId(id);
    return () => {
      setLabelId(void 0);
    };
  }, [setLabelId, id]);
  return useRenderElement("div", componentProps, {
    ref: forwardedRef,
    props: {
      id,
      role: "presentation",
      ...elementProps
    }
  });
});
if (true) MenuGroupLabel.displayName = "MenuGroupLabel";

// node_modules/@base-ui/react/esm/menu/item/MenuItem.js
var React91 = __toESM(require_react(), 1);
var MenuItem = React91.forwardRef(function MenuItem2(componentProps, forwardedRef) {
  const {
    render,
    className,
    id: idProp,
    label,
    nativeButton = false,
    disabled = false,
    closeOnClick = true,
    ...elementProps
  } = componentProps;
  const listItem = useCompositeListItem({
    label
  });
  const menuPositionerContext = useMenuPositionerContext(true);
  const id = useBaseUiId(idProp);
  const {
    store
  } = useMenuRootContext();
  const highlighted = store.useState("isActive", listItem.index);
  const itemProps = store.useState("itemProps");
  const {
    getItemProps,
    itemRef
  } = useMenuItem({
    closeOnClick,
    disabled,
    highlighted,
    id,
    store,
    nativeButton,
    nodeId: menuPositionerContext?.nodeId,
    itemMetadata: REGULAR_ITEM
  });
  const state = {
    disabled,
    highlighted
  };
  return useRenderElement("div", componentProps, {
    state,
    props: [itemProps, elementProps, getItemProps],
    ref: [itemRef, forwardedRef, listItem.ref]
  });
});
if (true) MenuItem.displayName = "MenuItem";

// node_modules/@base-ui/react/esm/menu/link-item/MenuLinkItem.js
var React92 = __toESM(require_react(), 1);
var MenuLinkItem = React92.forwardRef(function MenuLinkItem2(componentProps, forwardedRef) {
  const {
    render,
    className,
    id: idProp,
    label,
    closeOnClick = false,
    ...elementProps
  } = componentProps;
  const linkRef = React92.useRef(null);
  const listItem = useCompositeListItem({
    label
  });
  const menuPositionerContext = useMenuPositionerContext(true);
  const nodeId = menuPositionerContext?.nodeId;
  const id = useBaseUiId(idProp);
  const {
    store
  } = useMenuRootContext();
  const highlighted = store.useState("isActive", listItem.index);
  const itemProps = store.useState("itemProps");
  const typingRef = store.context.typingRef;
  const {
    getButtonProps,
    buttonRef
  } = useButton({
    native: false,
    composite: true
  });
  const commonProps = useMenuItemCommonProps({
    closeOnClick,
    highlighted,
    id,
    nodeId,
    store,
    typingRef,
    itemRef: linkRef
  });
  function getItemProps(externalProps) {
    return mergeProps(commonProps, externalProps, getButtonProps);
  }
  const state = React92.useMemo(() => ({
    highlighted
  }), [highlighted]);
  return useRenderElement("a", componentProps, {
    state,
    props: [itemProps, elementProps, getItemProps],
    ref: [linkRef, buttonRef, forwardedRef, listItem.ref]
  });
});
if (true) MenuLinkItem.displayName = "MenuLinkItem";

// node_modules/@base-ui/react/esm/menu/popup/MenuPopup.js
var React93 = __toESM(require_react(), 1);
var import_jsx_runtime31 = __toESM(require_jsx_runtime(), 1);
var stateAttributesMapping10 = {
  ...popupStateMapping,
  ...transitionStatusMapping
};
var MenuPopup = React93.forwardRef(function MenuPopup2(componentProps, forwardedRef) {
  const {
    render,
    className,
    finalFocus,
    ...elementProps
  } = componentProps;
  const {
    store
  } = useMenuRootContext();
  const {
    side,
    align
  } = useMenuPositionerContext();
  const insideToolbar = useToolbarRootContext(true) != null;
  const open = store.useState("open");
  const transitionStatus = store.useState("transitionStatus");
  const popupProps = store.useState("popupProps");
  const mounted = store.useState("mounted");
  const instantType = store.useState("instantType");
  const triggerElement = store.useState("activeTriggerElement");
  const parent = store.useState("parent");
  const lastOpenChangeReason = store.useState("lastOpenChangeReason");
  const rootId = store.useState("rootId");
  const floatingContext = store.useState("floatingRootContext");
  const floatingTreeRoot = store.useState("floatingTreeRoot");
  const closeDelay = store.useState("closeDelay");
  const activeTriggerElement = store.useState("activeTriggerElement");
  const isContextMenu = parent.type === "context-menu";
  useOpenChangeComplete({
    open,
    ref: store.context.popupRef,
    onComplete() {
      if (open) {
        store.context.onOpenChangeComplete?.(true);
      }
    }
  });
  React93.useEffect(() => {
    function handleClose(event) {
      store.setOpen(false, createChangeEventDetails(event.reason, event.domEvent));
    }
    floatingTreeRoot.events.on("close", handleClose);
    return () => {
      floatingTreeRoot.events.off("close", handleClose);
    };
  }, [floatingTreeRoot.events, store]);
  const hoverEnabled = store.useState("hoverEnabled");
  const disabled = store.useState("disabled");
  useHoverFloatingInteraction(floatingContext, {
    enabled: hoverEnabled && !disabled && !isContextMenu && parent.type !== "menubar",
    closeDelay
  });
  const state = {
    transitionStatus,
    side,
    align,
    open,
    nested: parent.type === "menu",
    instant: instantType
  };
  const setPopupElement = React93.useCallback((element2) => {
    store.set("popupElement", element2);
  }, [store]);
  const element = useRenderElement("div", componentProps, {
    state,
    ref: [forwardedRef, store.context.popupRef, setPopupElement],
    stateAttributesMapping: stateAttributesMapping10,
    props: [popupProps, {
      onKeyDown(event) {
        if (insideToolbar && COMPOSITE_KEYS.has(event.key)) {
          event.stopPropagation();
        }
      }
    }, getDisabledMountTransitionStyles(transitionStatus), elementProps, {
      "data-rootownerid": rootId
    }]
  });
  let returnFocus = parent.type === void 0 || isContextMenu;
  if (triggerElement || parent.type === "menubar" && lastOpenChangeReason !== reason_parts_exports.outsidePress) {
    returnFocus = true;
  }
  return (0, import_jsx_runtime31.jsx)(FloatingFocusManager, {
    context: floatingContext,
    modal: isContextMenu,
    disabled: !mounted,
    returnFocus: finalFocus === void 0 ? returnFocus : finalFocus,
    initialFocus: parent.type !== "menu",
    restoreFocus: true,
    externalTree: parent.type !== "menubar" ? floatingTreeRoot : void 0,
    previousFocusableElement: activeTriggerElement,
    nextFocusableElement: parent.type === void 0 ? store.context.triggerFocusTargetRef : void 0,
    beforeContentFocusGuardRef: parent.type === void 0 ? store.context.beforeContentFocusGuardRef : void 0,
    children: element
  });
});
if (true) MenuPopup.displayName = "MenuPopup";

// node_modules/@base-ui/react/esm/menu/portal/MenuPortal.js
var React95 = __toESM(require_react(), 1);

// node_modules/@base-ui/react/esm/menu/portal/MenuPortalContext.js
var React94 = __toESM(require_react(), 1);
var MenuPortalContext = React94.createContext(void 0);
if (true) MenuPortalContext.displayName = "MenuPortalContext";
function useMenuPortalContext() {
  const value = React94.useContext(MenuPortalContext);
  if (value === void 0) {
    throw new Error(true ? "Base UI: <Menu.Portal> is missing." : formatErrorMessage_default(32));
  }
  return value;
}

// node_modules/@base-ui/react/esm/menu/portal/MenuPortal.js
var import_jsx_runtime32 = __toESM(require_jsx_runtime(), 1);
var MenuPortal = React95.forwardRef(function MenuPortal2(props, forwardedRef) {
  const {
    keepMounted = false,
    ...portalProps
  } = props;
  const {
    store
  } = useMenuRootContext();
  const mounted = store.useState("mounted");
  const shouldRender = mounted || keepMounted;
  if (!shouldRender) {
    return null;
  }
  return (0, import_jsx_runtime32.jsx)(MenuPortalContext.Provider, {
    value: keepMounted,
    children: (0, import_jsx_runtime32.jsx)(FloatingPortal, {
      ref: forwardedRef,
      ...portalProps
    })
  });
});
if (true) MenuPortal.displayName = "MenuPortal";

// node_modules/@base-ui/react/esm/menu/positioner/MenuPositioner.js
var React96 = __toESM(require_react(), 1);
var import_jsx_runtime33 = __toESM(require_jsx_runtime(), 1);
var MenuPositioner = React96.forwardRef(function MenuPositioner2(componentProps, forwardedRef) {
  const {
    anchor: anchorProp,
    positionMethod: positionMethodProp = "absolute",
    className,
    render,
    side,
    align: alignProp,
    sideOffset: sideOffsetProp = 0,
    alignOffset: alignOffsetProp = 0,
    collisionBoundary = "clipping-ancestors",
    collisionPadding = 5,
    arrowPadding = 5,
    sticky = false,
    disableAnchorTracking = false,
    collisionAvoidance: collisionAvoidanceProp = DROPDOWN_COLLISION_AVOIDANCE,
    ...elementProps
  } = componentProps;
  const {
    store
  } = useMenuRootContext();
  const keepMounted = useMenuPortalContext();
  const contextMenuContext = useContextMenuRootContext(true);
  const parent = store.useState("parent");
  const floatingRootContext = store.useState("floatingRootContext");
  const floatingTreeRoot = store.useState("floatingTreeRoot");
  const mounted = store.useState("mounted");
  const open = store.useState("open");
  const modal = store.useState("modal");
  const triggerElement = store.useState("activeTriggerElement");
  const transitionStatus = store.useState("transitionStatus");
  const positionerElement = store.useState("positionerElement");
  const instantType = store.useState("instantType");
  const hasViewport = store.useState("hasViewport");
  const lastOpenChangeReason = store.useState("lastOpenChangeReason");
  const floatingNodeId = store.useState("floatingNodeId");
  const floatingParentNodeId = store.useState("floatingParentNodeId");
  const domReference = floatingRootContext.useState("domReferenceElement");
  const previousTriggerRef = React96.useRef(null);
  const runOnceAnimationsFinish = useAnimationsFinished(positionerElement, false, false);
  let anchor = anchorProp;
  let sideOffset = sideOffsetProp;
  let alignOffset = alignOffsetProp;
  let align = alignProp;
  let collisionAvoidance = collisionAvoidanceProp;
  if (parent.type === "context-menu") {
    anchor = anchorProp ?? parent.context?.anchor;
    align = align ?? "start";
    if (!side && align !== "center") {
      alignOffset = componentProps.alignOffset ?? 2;
      sideOffset = componentProps.sideOffset ?? -5;
    }
  }
  let computedSide = side;
  let computedAlign = align;
  if (parent.type === "menu") {
    computedSide = computedSide ?? "inline-end";
    computedAlign = computedAlign ?? "start";
    collisionAvoidance = componentProps.collisionAvoidance ?? POPUP_COLLISION_AVOIDANCE;
  } else if (parent.type === "menubar") {
    computedSide = computedSide ?? "bottom";
    computedAlign = computedAlign ?? "start";
  }
  const contextMenu = parent.type === "context-menu";
  const positioner = useAnchorPositioning({
    anchor,
    floatingRootContext,
    positionMethod: contextMenuContext ? "fixed" : positionMethodProp,
    mounted,
    side: computedSide,
    sideOffset,
    align: computedAlign,
    alignOffset,
    arrowPadding: contextMenu ? 0 : arrowPadding,
    collisionBoundary,
    collisionPadding,
    sticky,
    nodeId: floatingNodeId,
    keepMounted,
    disableAnchorTracking,
    collisionAvoidance,
    shiftCrossAxis: contextMenu && !("side" in collisionAvoidance && collisionAvoidance.side === "flip"),
    externalTree: floatingTreeRoot,
    adaptiveOrigin: hasViewport ? adaptiveOrigin : void 0
  });
  const positionerProps = React96.useMemo(() => {
    const hiddenStyles = {};
    if (!open) {
      hiddenStyles.pointerEvents = "none";
    }
    return {
      role: "presentation",
      hidden: !mounted,
      style: {
        ...positioner.positionerStyles,
        ...hiddenStyles
      }
    };
  }, [open, mounted, positioner.positionerStyles]);
  React96.useEffect(() => {
    function onMenuOpenChange(details) {
      if (details.open) {
        if (details.parentNodeId === floatingNodeId) {
          store.set("hoverEnabled", false);
        }
        if (details.nodeId !== floatingNodeId && details.parentNodeId === store.select("floatingParentNodeId")) {
          store.setOpen(false, createChangeEventDetails(reason_parts_exports.siblingOpen));
        }
      }
    }
    floatingTreeRoot.events.on("menuopenchange", onMenuOpenChange);
    return () => {
      floatingTreeRoot.events.off("menuopenchange", onMenuOpenChange);
    };
  }, [store, floatingTreeRoot.events, floatingNodeId]);
  React96.useEffect(() => {
    if (store.select("floatingParentNodeId") == null) {
      return void 0;
    }
    function onParentClose(details) {
      if (details.open || details.nodeId !== store.select("floatingParentNodeId")) {
        return;
      }
      const reason = details.reason ?? reason_parts_exports.siblingOpen;
      store.setOpen(false, createChangeEventDetails(reason));
    }
    floatingTreeRoot.events.on("menuopenchange", onParentClose);
    return () => {
      floatingTreeRoot.events.off("menuopenchange", onParentClose);
    };
  }, [floatingTreeRoot.events, store]);
  const closeTimeout = useTimeout();
  React96.useEffect(() => {
    if (!open) {
      closeTimeout.clear();
    }
  }, [open, closeTimeout]);
  React96.useEffect(() => {
    function onItemHover(event) {
      if (!open || event.nodeId !== store.select("floatingParentNodeId")) {
        return;
      }
      if (event.target && triggerElement && triggerElement !== event.target) {
        const delay = store.select("closeDelay");
        if (delay > 0) {
          if (!closeTimeout.isStarted()) {
            closeTimeout.start(delay, () => {
              store.setOpen(false, createChangeEventDetails(reason_parts_exports.siblingOpen));
            });
          }
        } else {
          store.setOpen(false, createChangeEventDetails(reason_parts_exports.siblingOpen));
        }
      } else {
        closeTimeout.clear();
      }
    }
    floatingTreeRoot.events.on("itemhover", onItemHover);
    return () => {
      floatingTreeRoot.events.off("itemhover", onItemHover);
    };
  }, [floatingTreeRoot.events, open, triggerElement, store, closeTimeout]);
  React96.useEffect(() => {
    const eventDetails = {
      open,
      nodeId: floatingNodeId,
      parentNodeId: floatingParentNodeId,
      reason: store.select("lastOpenChangeReason")
    };
    floatingTreeRoot.events.emit("menuopenchange", eventDetails);
  }, [floatingTreeRoot.events, open, store, floatingNodeId, floatingParentNodeId]);
  useIsoLayoutEffect(() => {
    const currentTrigger = domReference;
    const previousTrigger = previousTriggerRef.current;
    if (currentTrigger) {
      previousTriggerRef.current = currentTrigger;
    }
    if (previousTrigger && currentTrigger && currentTrigger !== previousTrigger) {
      store.set("instantType", void 0);
      const abortController = new AbortController();
      runOnceAnimationsFinish(() => {
        store.set("instantType", "trigger-change");
      }, abortController.signal);
      return () => {
        abortController.abort();
      };
    }
    return void 0;
  }, [domReference, runOnceAnimationsFinish, store]);
  const state = {
    open,
    side: positioner.side,
    align: positioner.align,
    anchorHidden: positioner.anchorHidden,
    nested: parent.type === "menu",
    instant: instantType
  };
  const contextValue = React96.useMemo(() => ({
    side: positioner.side,
    align: positioner.align,
    arrowRef: positioner.arrowRef,
    arrowUncentered: positioner.arrowUncentered,
    arrowStyles: positioner.arrowStyles,
    nodeId: positioner.context.nodeId
  }), [positioner.side, positioner.align, positioner.arrowRef, positioner.arrowUncentered, positioner.arrowStyles, positioner.context.nodeId]);
  const element = useRenderElement("div", componentProps, {
    state,
    stateAttributesMapping: popupStateMapping,
    ref: [forwardedRef, store.useStateSetter("positionerElement")],
    props: [positionerProps, getDisabledMountTransitionStyles(transitionStatus), elementProps]
  });
  const shouldRenderBackdrop = mounted && parent.type !== "menu" && (parent.type !== "menubar" && modal && lastOpenChangeReason !== reason_parts_exports.triggerHover || parent.type === "menubar" && parent.context.modal);
  let backdropCutout = null;
  if (parent.type === "menubar") {
    backdropCutout = parent.context.contentElement;
  } else if (parent.type === void 0) {
    backdropCutout = triggerElement;
  }
  return (0, import_jsx_runtime33.jsxs)(MenuPositionerContext.Provider, {
    value: contextValue,
    children: [shouldRenderBackdrop && (0, import_jsx_runtime33.jsx)(InternalBackdrop, {
      ref: parent.type === "context-menu" || parent.type === "nested-context-menu" ? parent.context.internalBackdropRef : null,
      inert: inertValue(!open),
      cutout: backdropCutout
    }), (0, import_jsx_runtime33.jsx)(FloatingNode, {
      id: floatingNodeId,
      children: (0, import_jsx_runtime33.jsx)(CompositeList, {
        elementsRef: store.context.itemDomElements,
        labelsRef: store.context.itemLabels,
        children: element
      })
    })]
  });
});
if (true) MenuPositioner.displayName = "MenuPositioner";

// node_modules/@base-ui/react/esm/menu/radio-group/MenuRadioGroup.js
var React98 = __toESM(require_react(), 1);

// node_modules/@base-ui/react/esm/menu/radio-group/MenuRadioGroupContext.js
var React97 = __toESM(require_react(), 1);
var MenuRadioGroupContext = React97.createContext(void 0);
if (true) MenuRadioGroupContext.displayName = "MenuRadioGroupContext";
function useMenuRadioGroupContext() {
  const context = React97.useContext(MenuRadioGroupContext);
  if (context === void 0) {
    throw new Error(true ? "Base UI: MenuRadioGroupContext is missing. MenuRadioGroup parts must be placed within <Menu.RadioGroup>." : formatErrorMessage_default(34));
  }
  return context;
}

// node_modules/@base-ui/react/esm/menu/radio-group/MenuRadioGroup.js
var import_jsx_runtime34 = __toESM(require_jsx_runtime(), 1);
var MenuRadioGroup = React98.memo(React98.forwardRef(function MenuRadioGroup2(componentProps, forwardedRef) {
  const {
    render,
    className,
    value: valueProp,
    defaultValue,
    onValueChange: onValueChangeProp,
    disabled = false,
    ...elementProps
  } = componentProps;
  const [value, setValueUnwrapped] = useControlled({
    controlled: valueProp,
    default: defaultValue,
    name: "MenuRadioGroup"
  });
  const onValueChange = useStableCallback(onValueChangeProp);
  const setValue = useStableCallback((newValue, eventDetails) => {
    onValueChange?.(newValue, eventDetails);
    if (eventDetails.isCanceled) {
      return;
    }
    setValueUnwrapped(newValue);
  });
  const state = {
    disabled
  };
  const element = useRenderElement("div", componentProps, {
    state,
    ref: forwardedRef,
    props: {
      role: "group",
      "aria-disabled": disabled || void 0,
      ...elementProps
    }
  });
  const context = React98.useMemo(() => ({
    value,
    setValue,
    disabled
  }), [value, setValue, disabled]);
  return (0, import_jsx_runtime34.jsx)(MenuRadioGroupContext.Provider, {
    value: context,
    children: element
  });
}));
if (true) MenuRadioGroup.displayName = "MenuRadioGroup";

// node_modules/@base-ui/react/esm/menu/radio-item/MenuRadioItem.js
var React100 = __toESM(require_react(), 1);

// node_modules/@base-ui/react/esm/menu/radio-item/MenuRadioItemContext.js
var React99 = __toESM(require_react(), 1);
var MenuRadioItemContext = React99.createContext(void 0);
if (true) MenuRadioItemContext.displayName = "MenuRadioItemContext";
function useMenuRadioItemContext() {
  const context = React99.useContext(MenuRadioItemContext);
  if (context === void 0) {
    throw new Error(true ? "Base UI: MenuRadioItemContext is missing. MenuRadioItem parts must be placed within <Menu.RadioItem>." : formatErrorMessage_default(35));
  }
  return context;
}

// node_modules/@base-ui/react/esm/menu/radio-item/MenuRadioItem.js
var import_jsx_runtime35 = __toESM(require_jsx_runtime(), 1);
var MenuRadioItem = React100.forwardRef(function MenuRadioItem2(componentProps, forwardedRef) {
  const {
    render,
    className,
    id: idProp,
    label,
    nativeButton = false,
    disabled: disabledProp = false,
    closeOnClick = false,
    value,
    ...elementProps
  } = componentProps;
  const listItem = useCompositeListItem({
    label
  });
  const menuPositionerContext = useMenuPositionerContext(true);
  const id = useBaseUiId(idProp);
  const {
    store
  } = useMenuRootContext();
  const highlighted = store.useState("isActive", listItem.index);
  const itemProps = store.useState("itemProps");
  const {
    value: selectedValue,
    setValue: setSelectedValue,
    disabled: groupDisabled
  } = useMenuRadioGroupContext();
  const disabled = groupDisabled || disabledProp;
  const checked = selectedValue === value;
  const {
    getItemProps,
    itemRef
  } = useMenuItem({
    closeOnClick,
    disabled,
    highlighted,
    id,
    store,
    nativeButton,
    nodeId: menuPositionerContext?.nodeId,
    itemMetadata: REGULAR_ITEM
  });
  const state = React100.useMemo(() => ({
    disabled,
    highlighted,
    checked
  }), [disabled, highlighted, checked]);
  const handleClick = useStableCallback((event) => {
    const details = {
      ...createChangeEventDetails(reason_parts_exports.itemPress, event.nativeEvent),
      preventUnmountOnClose: () => {
      }
    };
    setSelectedValue(value, details);
  });
  const element = useRenderElement("div", componentProps, {
    state,
    stateAttributesMapping: itemMapping,
    props: [itemProps, {
      role: "menuitemradio",
      "aria-checked": checked,
      onClick: handleClick
    }, elementProps, getItemProps],
    ref: [itemRef, forwardedRef, listItem.ref]
  });
  return (0, import_jsx_runtime35.jsx)(MenuRadioItemContext.Provider, {
    value: state,
    children: element
  });
});
if (true) MenuRadioItem.displayName = "MenuRadioItem";

// node_modules/@base-ui/react/esm/menu/radio-item-indicator/MenuRadioItemIndicator.js
var React101 = __toESM(require_react(), 1);
var MenuRadioItemIndicator = React101.forwardRef(function MenuRadioItemIndicator2(componentProps, forwardedRef) {
  const {
    render,
    className,
    keepMounted = false,
    ...elementProps
  } = componentProps;
  const item = useMenuRadioItemContext();
  const indicatorRef = React101.useRef(null);
  const {
    transitionStatus,
    setMounted
  } = useTransitionStatus(item.checked);
  useOpenChangeComplete({
    open: item.checked,
    ref: indicatorRef,
    onComplete() {
      if (!item.checked) {
        setMounted(false);
      }
    }
  });
  const state = {
    checked: item.checked,
    disabled: item.disabled,
    highlighted: item.highlighted,
    transitionStatus
  };
  const element = useRenderElement("span", componentProps, {
    state,
    stateAttributesMapping: itemMapping,
    ref: [forwardedRef, indicatorRef],
    props: {
      "aria-hidden": true,
      ...elementProps
    },
    enabled: keepMounted || item.checked
  });
  return element;
});
if (true) MenuRadioItemIndicator.displayName = "MenuRadioItemIndicator";

// node_modules/@base-ui/react/esm/menu/root/MenuRoot.js
var React105 = __toESM(require_react(), 1);

// node_modules/@base-ui/react/esm/menubar/MenubarContext.js
var React102 = __toESM(require_react(), 1);
var MenubarContext = React102.createContext(null);
if (true) MenubarContext.displayName = "MenubarContext";
function useMenubarContext(optional) {
  const context = React102.useContext(MenubarContext);
  if (context === null && !optional) {
    throw new Error(true ? "Base UI: MenubarContext is missing. Menubar parts must be placed within <Menubar>." : formatErrorMessage_default(5));
  }
  return context;
}

// node_modules/@base-ui/react/esm/menu/store/MenuStore.js
var React103 = __toESM(require_react(), 1);
var selectors3 = {
  ...popupStoreSelectors,
  disabled: createSelector((state) => state.parent.type === "menubar" ? state.parent.context.disabled || state.disabled : state.disabled),
  modal: createSelector((state) => (state.parent.type === void 0 || state.parent.type === "context-menu") && (state.modal ?? true)),
  allowMouseEnter: createSelector((state) => state.allowMouseEnter),
  stickIfOpen: createSelector((state) => state.stickIfOpen),
  parent: createSelector((state) => state.parent),
  rootId: createSelector((state) => {
    if (state.parent.type === "menu") {
      return state.parent.store.select("rootId");
    }
    return state.parent.type !== void 0 ? state.parent.context.rootId : state.rootId;
  }),
  activeIndex: createSelector((state) => state.activeIndex),
  isActive: createSelector((state, itemIndex) => state.activeIndex === itemIndex),
  hoverEnabled: createSelector((state) => state.hoverEnabled),
  instantType: createSelector((state) => state.instantType),
  lastOpenChangeReason: createSelector((state) => state.openChangeReason),
  floatingTreeRoot: createSelector((state) => {
    if (state.parent.type === "menu") {
      return state.parent.store.select("floatingTreeRoot");
    }
    return state.floatingTreeRoot;
  }),
  floatingNodeId: createSelector((state) => state.floatingNodeId),
  floatingParentNodeId: createSelector((state) => state.floatingParentNodeId),
  itemProps: createSelector((state) => state.itemProps),
  closeDelay: createSelector((state) => state.closeDelay),
  hasViewport: createSelector((state) => state.hasViewport),
  keyboardEventRelay: createSelector((state) => {
    if (state.keyboardEventRelay) {
      return state.keyboardEventRelay;
    }
    if (state.parent.type === "menu") {
      return state.parent.store.select("keyboardEventRelay");
    }
    return void 0;
  })
};
var MenuStore = class _MenuStore extends ReactStore {
  constructor(initialState) {
    super({
      ...createInitialState2(),
      ...initialState
    }, {
      positionerRef: React103.createRef(),
      popupRef: React103.createRef(),
      typingRef: {
        current: false
      },
      itemDomElements: {
        current: []
      },
      itemLabels: {
        current: []
      },
      allowMouseUpTriggerRef: {
        current: false
      },
      triggerFocusTargetRef: React103.createRef(),
      beforeContentFocusGuardRef: React103.createRef(),
      onOpenChangeComplete: void 0,
      triggerElements: new PopupTriggerMap()
    }, selectors3);
    this.unsubscribeParentListener = this.observe("parent", (parent) => {
      this.unsubscribeParentListener?.();
      if (parent.type === "menu") {
        let rootId = parent.store.select("rootId");
        let floatingTreeRoot = parent.store.select("floatingTreeRoot");
        let keyboardEventRelay = parent.store.select("keyboardEventRelay");
        this.unsubscribeParentListener = parent.store.subscribe(() => {
          const nextRootId = parent.store.select("rootId");
          const nextFloatingTreeRoot = parent.store.select("floatingTreeRoot");
          const nextKeyboardEventRelay = parent.store.select("keyboardEventRelay");
          if (rootId === nextRootId && floatingTreeRoot === nextFloatingTreeRoot && keyboardEventRelay === nextKeyboardEventRelay) {
            return;
          }
          rootId = nextRootId;
          floatingTreeRoot = nextFloatingTreeRoot;
          keyboardEventRelay = nextKeyboardEventRelay;
          this.notifyAll();
        });
        this.context.allowMouseUpTriggerRef = parent.store.context.allowMouseUpTriggerRef;
        return;
      }
      if (parent.type !== void 0) {
        this.context.allowMouseUpTriggerRef = parent.context.allowMouseUpTriggerRef;
      }
      this.unsubscribeParentListener = null;
    });
  }
  setOpen(open, eventDetails) {
    this.state.floatingRootContext.context.events.emit("setOpen", {
      open,
      eventDetails
    });
  }
  static useStore(externalStore, initialState) {
    const internalStore = useRefWithInit(() => {
      return new _MenuStore(initialState);
    }).current;
    return externalStore ?? internalStore;
  }
  unsubscribeParentListener = null;
};
function createInitialState2() {
  return {
    ...createInitialPopupStoreState(),
    disabled: false,
    modal: true,
    allowMouseEnter: false,
    stickIfOpen: true,
    parent: {
      type: void 0
    },
    rootId: void 0,
    activeIndex: null,
    hoverEnabled: true,
    instantType: void 0,
    openChangeReason: null,
    floatingTreeRoot: new FloatingTreeStore(),
    floatingNodeId: void 0,
    floatingParentNodeId: null,
    itemProps: EMPTY_OBJECT,
    keyboardEventRelay: void 0,
    closeDelay: 0,
    hasViewport: false
  };
}

// node_modules/@base-ui/react/esm/menu/submenu-root/MenuSubmenuRootContext.js
var React104 = __toESM(require_react(), 1);
var MenuSubmenuRootContext = React104.createContext(void 0);
if (true) MenuSubmenuRootContext.displayName = "MenuSubmenuRootContext";
function useMenuSubmenuRootContext() {
  return React104.useContext(MenuSubmenuRootContext);
}

// node_modules/@base-ui/react/esm/menu/root/MenuRoot.js
var import_jsx_runtime36 = __toESM(require_jsx_runtime(), 1);
var MenuRoot = fastComponent(function MenuRoot2(props) {
  const {
    children,
    open: openProp,
    onOpenChange,
    onOpenChangeComplete,
    defaultOpen = false,
    disabled: disabledProp = false,
    modal: modalProp,
    loopFocus = true,
    orientation = "vertical",
    actionsRef,
    closeParentOnEsc = false,
    handle,
    triggerId: triggerIdProp,
    defaultTriggerId: defaultTriggerIdProp = null,
    highlightItemOnHover = true
  } = props;
  const contextMenuContext = useContextMenuRootContext(true);
  const parentMenuRootContext = useMenuRootContext(true);
  const menubarContext = useMenubarContext(true);
  const isSubmenu = useMenuSubmenuRootContext();
  const parentFromContext = React105.useMemo(() => {
    if (isSubmenu && parentMenuRootContext) {
      return {
        type: "menu",
        store: parentMenuRootContext.store
      };
    }
    if (menubarContext) {
      return {
        type: "menubar",
        context: menubarContext
      };
    }
    if (contextMenuContext && !parentMenuRootContext) {
      return {
        type: "context-menu",
        context: contextMenuContext
      };
    }
    return {
      type: void 0
    };
  }, [contextMenuContext, parentMenuRootContext, menubarContext, isSubmenu]);
  const store = MenuStore.useStore(handle?.store, {
    open: defaultOpen,
    openProp,
    activeTriggerId: defaultTriggerIdProp,
    triggerIdProp,
    parent: parentFromContext
  });
  useOnFirstRender(() => {
    if (openProp === void 0 && store.state.open === false && defaultOpen === true) {
      store.update({
        open: true,
        activeTriggerId: defaultTriggerIdProp
      });
    }
  });
  store.useControlledProp("openProp", openProp);
  store.useControlledProp("triggerIdProp", triggerIdProp);
  store.useContextCallback("onOpenChangeComplete", onOpenChangeComplete);
  const floatingTreeRoot = store.useState("floatingTreeRoot");
  const floatingNodeIdFromContext = useFloatingNodeId(floatingTreeRoot);
  const floatingParentNodeIdFromContext = useFloatingParentNodeId();
  useIsoLayoutEffect(() => {
    if (contextMenuContext && !parentMenuRootContext) {
      store.update({
        parent: {
          type: "context-menu",
          context: contextMenuContext
        },
        floatingNodeId: floatingNodeIdFromContext,
        floatingParentNodeId: floatingParentNodeIdFromContext
      });
    } else if (parentMenuRootContext) {
      store.update({
        floatingNodeId: floatingNodeIdFromContext,
        floatingParentNodeId: floatingParentNodeIdFromContext
      });
    }
  }, [contextMenuContext, parentMenuRootContext, floatingNodeIdFromContext, floatingParentNodeIdFromContext, store]);
  const open = store.useState("open");
  const activeTriggerElement = store.useState("activeTriggerElement");
  const positionerElement = store.useState("positionerElement");
  const hoverEnabled = store.useState("hoverEnabled");
  const modal = store.useState("modal");
  const disabled = store.useState("disabled");
  const lastOpenChangeReason = store.useState("lastOpenChangeReason");
  const parent = store.useState("parent");
  const activeIndex = store.useState("activeIndex");
  const payload = store.useState("payload");
  const floatingParentNodeId = store.useState("floatingParentNodeId");
  const openEventRef = React105.useRef(null);
  const nested = floatingParentNodeId != null;
  let floatingEvents;
  if (true) {
    if (parent.type !== void 0 && modalProp !== void 0) {
      console.warn("Base UI: The `modal` prop is not supported on nested menus. It will be ignored.");
    }
  }
  store.useSyncedValues({
    disabled: disabledProp,
    modal: parent.type === void 0 ? modalProp : void 0,
    rootId: useId()
  });
  const {
    openMethod,
    triggerProps: interactionTypeProps
  } = useOpenInteractionType(open);
  useImplicitActiveTrigger(store);
  const {
    forceUnmount
  } = useOpenStateTransitions(open, store, () => {
    store.update({
      allowMouseEnter: false,
      stickIfOpen: true
    });
  });
  const allowOutsidePressDismissalRef = React105.useRef(parent.type !== "context-menu");
  const allowOutsidePressDismissalTimeout = useTimeout();
  React105.useEffect(() => {
    if (!open) {
      openEventRef.current = null;
    }
    if (parent.type !== "context-menu") {
      return;
    }
    if (!open) {
      allowOutsidePressDismissalTimeout.clear();
      allowOutsidePressDismissalRef.current = false;
      return;
    }
    allowOutsidePressDismissalTimeout.start(500, () => {
      allowOutsidePressDismissalRef.current = true;
    });
  }, [allowOutsidePressDismissalTimeout, open, parent.type]);
  useScrollLock(open && modal && lastOpenChangeReason !== reason_parts_exports.triggerHover && openMethod !== "touch", positionerElement);
  useIsoLayoutEffect(() => {
    if (!open && !hoverEnabled) {
      store.set("hoverEnabled", true);
    }
  }, [open, hoverEnabled, store]);
  const allowTouchToCloseRef = React105.useRef(true);
  const allowTouchToCloseTimeout = useTimeout();
  const setOpen = useStableCallback((nextOpen, eventDetails) => {
    const reason = eventDetails.reason;
    if (open === nextOpen && eventDetails.trigger === activeTriggerElement && lastOpenChangeReason === reason) {
      return;
    }
    eventDetails.preventUnmountOnClose = () => {
      store.set("preventUnmountingOnClose", true);
    };
    if (!nextOpen && eventDetails.trigger == null) {
      eventDetails.trigger = activeTriggerElement ?? void 0;
    }
    onOpenChange?.(nextOpen, eventDetails);
    if (eventDetails.isCanceled) {
      return;
    }
    const details = {
      open: nextOpen,
      nativeEvent: eventDetails.event,
      reason: eventDetails.reason,
      nested
    };
    floatingEvents?.emit("openchange", details);
    const nativeEvent = eventDetails.event;
    if (nextOpen === false && nativeEvent?.type === "click" && nativeEvent.pointerType === "touch" && !allowTouchToCloseRef.current) {
      return;
    }
    if (!nextOpen && activeIndex !== null) {
      const activeOption = store.context.itemDomElements.current[activeIndex];
      queueMicrotask(() => {
        activeOption?.setAttribute("tabindex", "-1");
      });
    }
    if (nextOpen && reason === reason_parts_exports.triggerFocus) {
      allowTouchToCloseRef.current = false;
      allowTouchToCloseTimeout.start(300, () => {
        allowTouchToCloseRef.current = true;
      });
    } else {
      allowTouchToCloseRef.current = true;
      allowTouchToCloseTimeout.clear();
    }
    const isKeyboardClick = (reason === reason_parts_exports.triggerPress || reason === reason_parts_exports.itemPress) && nativeEvent.detail === 0 && nativeEvent?.isTrusted;
    const isDismissClose = !nextOpen && (reason === reason_parts_exports.escapeKey || reason == null);
    const updatedState = {
      open: nextOpen,
      openChangeReason: reason
    };
    openEventRef.current = eventDetails.event ?? null;
    const newTriggerId = eventDetails.trigger?.id ?? null;
    if (newTriggerId || nextOpen) {
      updatedState.activeTriggerId = newTriggerId;
      updatedState.activeTriggerElement = eventDetails.trigger ?? null;
    }
    store.update(updatedState);
    if (parent.type === "menubar" && (reason === reason_parts_exports.triggerFocus || reason === reason_parts_exports.focusOut || reason === reason_parts_exports.triggerHover || reason === reason_parts_exports.listNavigation || reason === reason_parts_exports.siblingOpen)) {
      store.set("instantType", "group");
    } else if (isKeyboardClick || isDismissClose) {
      store.set("instantType", isKeyboardClick ? "click" : "dismiss");
    } else {
      store.set("instantType", void 0);
    }
  });
  const createMenuEventDetails = React105.useCallback((reason) => {
    const details = createChangeEventDetails(reason);
    details.preventUnmountOnClose = () => {
      store.set("preventUnmountingOnClose", true);
    };
    return details;
  }, [store]);
  const handleImperativeClose = React105.useCallback(() => {
    store.setOpen(false, createMenuEventDetails(reason_parts_exports.imperativeAction));
  }, [store, createMenuEventDetails]);
  React105.useImperativeHandle(actionsRef, () => ({
    unmount: forceUnmount,
    close: handleImperativeClose
  }), [forceUnmount, handleImperativeClose]);
  let ctx;
  if (parent.type === "context-menu") {
    ctx = parent.context;
  }
  React105.useImperativeHandle(ctx?.positionerRef, () => positionerElement, [positionerElement]);
  React105.useImperativeHandle(ctx?.actionsRef, () => ({
    setOpen
  }), [setOpen]);
  const floatingRootContext = useSyncedFloatingRootContext({
    popupStore: store,
    onOpenChange: setOpen
  });
  floatingEvents = floatingRootContext.context.events;
  React105.useEffect(() => {
    const handleSetOpenEvent = ({
      open: nextOpen,
      eventDetails
    }) => setOpen(nextOpen, eventDetails);
    floatingEvents.on("setOpen", handleSetOpenEvent);
    return () => {
      floatingEvents?.off("setOpen", handleSetOpenEvent);
    };
  }, [floatingEvents, setOpen]);
  const dismiss = useDismiss(floatingRootContext, {
    enabled: !disabled,
    bubbles: {
      escapeKey: closeParentOnEsc && parent.type === "menu"
    },
    outsidePress() {
      if (parent.type !== "context-menu" || openEventRef.current?.type === "contextmenu") {
        return true;
      }
      return allowOutsidePressDismissalRef.current;
    },
    externalTree: nested ? floatingTreeRoot : void 0
  });
  const role = useRole(floatingRootContext, {
    role: "menu"
  });
  const direction = useDirection();
  const setActiveIndex = React105.useCallback((index) => {
    if (store.select("activeIndex") === index) {
      return;
    }
    store.set("activeIndex", index);
  }, [store]);
  const listNavigation = useListNavigation(floatingRootContext, {
    enabled: !disabled,
    listRef: store.context.itemDomElements,
    activeIndex,
    nested: parent.type !== void 0,
    loopFocus,
    orientation,
    parentOrientation: parent.type === "menubar" ? parent.context.orientation : void 0,
    rtl: direction === "rtl",
    disabledIndices: EMPTY_ARRAY,
    onNavigate: setActiveIndex,
    openOnArrowKeyDown: parent.type !== "context-menu",
    externalTree: nested ? floatingTreeRoot : void 0,
    focusItemOnHover: highlightItemOnHover
  });
  const onTypingChange = React105.useCallback((nextTyping) => {
    store.context.typingRef.current = nextTyping;
  }, [store]);
  const typeahead = useTypeahead(floatingRootContext, {
    listRef: store.context.itemLabels,
    elementsRef: store.context.itemDomElements,
    activeIndex,
    resetMs: TYPEAHEAD_RESET_MS,
    onMatch: (index) => {
      if (open && index !== activeIndex) {
        store.set("activeIndex", index);
      }
    },
    onTypingChange
  });
  const {
    getReferenceProps,
    getFloatingProps,
    getItemProps,
    getTriggerProps
  } = useInteractions([dismiss, role, listNavigation, typeahead]);
  const activeTriggerProps = React105.useMemo(() => {
    const mergedProps = mergeProps(getReferenceProps(), {
      onMouseMove() {
        store.set("allowMouseEnter", true);
      }
    }, interactionTypeProps);
    delete mergedProps.role;
    return mergedProps;
  }, [getReferenceProps, store, interactionTypeProps]);
  const inactiveTriggerProps = React105.useMemo(() => {
    const triggerProps = getTriggerProps();
    if (!triggerProps) {
      return triggerProps;
    }
    const mergedProps = mergeProps(triggerProps, interactionTypeProps);
    delete mergedProps.role;
    delete mergedProps["aria-controls"];
    return mergedProps;
  }, [getTriggerProps, interactionTypeProps]);
  const popupProps = React105.useMemo(() => getFloatingProps({
    onMouseMove() {
      store.set("allowMouseEnter", true);
      if (parent.type === "menu") {
        store.set("hoverEnabled", false);
      }
    },
    onClick() {
      if (store.select("hoverEnabled")) {
        store.set("hoverEnabled", false);
      }
    },
    onKeyDown(event) {
      const relay = store.select("keyboardEventRelay");
      if (relay && !event.isPropagationStopped()) {
        relay(event);
      }
    }
  }), [getFloatingProps, parent.type, store]);
  const itemProps = React105.useMemo(() => getItemProps(), [getItemProps]);
  store.useSyncedValues({
    floatingRootContext,
    activeTriggerProps,
    inactiveTriggerProps,
    popupProps,
    itemProps
  });
  const context = React105.useMemo(() => ({
    store,
    parent: parentFromContext
  }), [store, parentFromContext]);
  const content = (0, import_jsx_runtime36.jsx)(MenuRootContext.Provider, {
    value: context,
    children: typeof children === "function" ? children({
      payload
    }) : children
  });
  if (parent.type === void 0 || parent.type === "context-menu") {
    return (0, import_jsx_runtime36.jsx)(FloatingTree, {
      externalTree: floatingTreeRoot,
      children: content
    });
  }
  return content;
});
if (true) MenuRoot.displayName = "MenuRoot";

// node_modules/@base-ui/react/esm/menu/submenu-root/MenuSubmenuRoot.js
var React106 = __toESM(require_react(), 1);
var import_jsx_runtime37 = __toESM(require_jsx_runtime(), 1);
function MenuSubmenuRoot(props) {
  const parentMenu = useMenuRootContext().store;
  const contextValue = React106.useMemo(() => ({
    parentMenu
  }), [parentMenu]);
  return (0, import_jsx_runtime37.jsx)(MenuSubmenuRootContext.Provider, {
    value: contextValue,
    children: (0, import_jsx_runtime37.jsx)(MenuRoot, {
      ...props
    })
  });
}

// node_modules/@base-ui/react/esm/menu/trigger/MenuTrigger.js
var React108 = __toESM(require_react(), 1);
var ReactDOM3 = __toESM(require_react_dom(), 1);

// node_modules/@base-ui/react/esm/composite/item/CompositeItem.js
function CompositeItem(componentProps) {
  const {
    render,
    className,
    state = EMPTY_OBJECT,
    props = EMPTY_ARRAY,
    refs = EMPTY_ARRAY,
    metadata,
    stateAttributesMapping: stateAttributesMapping34,
    tag = "div",
    ...elementProps
  } = componentProps;
  const {
    compositeProps,
    compositeRef
  } = useCompositeItem({
    metadata
  });
  return useRenderElement(tag, componentProps, {
    state,
    ref: [...refs, compositeRef],
    props: [compositeProps, ...props, elementProps],
    stateAttributesMapping: stateAttributesMapping34
  });
}

// node_modules/@base-ui/react/esm/menu/utils/findRootOwnerId.js
function findRootOwnerId(node) {
  if (isHTMLElement(node) && node.hasAttribute("data-rootownerid")) {
    return node.getAttribute("data-rootownerid") ?? void 0;
  }
  if (isLastTraversableNode(node)) {
    return void 0;
  }
  return findRootOwnerId(getParentNode(node));
}

// node_modules/@base-ui/react/esm/utils/useMixedToggleClickHandler.js
var React107 = __toESM(require_react(), 1);
function useMixedToggleClickHandler(params) {
  const {
    enabled = true,
    mouseDownAction,
    open
  } = params;
  const ignoreClickRef = React107.useRef(false);
  return React107.useMemo(() => {
    if (!enabled) {
      return EMPTY_OBJECT;
    }
    return {
      onMouseDown: (event) => {
        if (mouseDownAction === "open" && !open || mouseDownAction === "close" && open) {
          ignoreClickRef.current = true;
          ownerDocument(event.currentTarget).addEventListener("click", () => {
            ignoreClickRef.current = false;
          }, {
            once: true
          });
        }
      },
      onClick: (event) => {
        if (ignoreClickRef.current) {
          ignoreClickRef.current = false;
          event.preventBaseUIHandler();
        }
      }
    };
  }, [enabled, mouseDownAction, open]);
}

// node_modules/@base-ui/react/esm/menu/trigger/MenuTrigger.js
var import_jsx_runtime38 = __toESM(require_jsx_runtime(), 1);
var BOUNDARY_OFFSET2 = 2;
var MenuTrigger = fastComponentRef(function MenuTrigger2(componentProps, forwardedRef) {
  const {
    render,
    className,
    disabled: disabledProp = false,
    nativeButton = true,
    id: idProp,
    openOnHover: openOnHoverProp,
    delay = 100,
    closeDelay = 0,
    handle,
    payload,
    ...elementProps
  } = componentProps;
  const rootContext = useMenuRootContext(true);
  const store = handle?.store ?? rootContext?.store;
  if (!store) {
    throw new Error(true ? "Base UI: <Menu.Trigger> must be either used within a <Menu.Root> component or provided with a handle." : formatErrorMessage_default(85));
  }
  const thisTriggerId = useBaseUiId(idProp);
  const isTriggerActive = store.useState("isTriggerActive", thisTriggerId);
  const floatingRootContext = store.useState("floatingRootContext");
  const isOpenedByThisTrigger = store.useState("isOpenedByTrigger", thisTriggerId);
  const triggerElementRef = React108.useRef(null);
  const parent = useMenuParent();
  const compositeRootContext = useCompositeRootContext(true);
  const floatingTreeRootFromContext = useFloatingTree();
  const floatingTreeRoot = React108.useMemo(() => {
    return floatingTreeRootFromContext ?? new FloatingTreeStore();
  }, [floatingTreeRootFromContext]);
  const floatingNodeId = useFloatingNodeId(floatingTreeRoot);
  const floatingParentNodeId = useFloatingParentNodeId();
  const {
    registerTrigger,
    isMountedByThisTrigger
  } = useTriggerDataForwarding(thisTriggerId, triggerElementRef, store, {
    payload,
    closeDelay,
    parent,
    floatingTreeRoot,
    floatingNodeId,
    floatingParentNodeId,
    keyboardEventRelay: compositeRootContext?.relayKeyboardEvent
  });
  const isInMenubar = parent.type === "menubar";
  const rootDisabled = store.useState("disabled");
  const disabled = disabledProp || rootDisabled || isInMenubar && parent.context.disabled;
  const {
    getButtonProps,
    buttonRef
  } = useButton({
    disabled,
    native: nativeButton
  });
  React108.useEffect(() => {
    if (!isOpenedByThisTrigger && parent.type === void 0) {
      store.context.allowMouseUpTriggerRef.current = false;
    }
  }, [store, isOpenedByThisTrigger, parent.type]);
  const triggerRef = React108.useRef(null);
  const allowMouseUpTriggerTimeout = useTimeout();
  const handleDocumentMouseUp = useStableCallback((mouseEvent) => {
    if (!triggerRef.current) {
      return;
    }
    allowMouseUpTriggerTimeout.clear();
    store.context.allowMouseUpTriggerRef.current = false;
    const mouseUpTarget = mouseEvent.target;
    if (contains(triggerRef.current, mouseUpTarget) || contains(store.select("positionerElement"), mouseUpTarget) || mouseUpTarget === triggerRef.current) {
      return;
    }
    if (mouseUpTarget != null && findRootOwnerId(mouseUpTarget) === store.select("rootId")) {
      return;
    }
    const bounds = getPseudoElementBounds(triggerRef.current);
    if (mouseEvent.clientX >= bounds.left - BOUNDARY_OFFSET2 && mouseEvent.clientX <= bounds.right + BOUNDARY_OFFSET2 && mouseEvent.clientY >= bounds.top - BOUNDARY_OFFSET2 && mouseEvent.clientY <= bounds.bottom + BOUNDARY_OFFSET2) {
      return;
    }
    floatingTreeRoot.events.emit("close", {
      domEvent: mouseEvent,
      reason: reason_parts_exports.cancelOpen
    });
  });
  React108.useEffect(() => {
    if (isOpenedByThisTrigger && store.select("lastOpenChangeReason") === reason_parts_exports.triggerHover) {
      const doc = ownerDocument(triggerRef.current);
      doc.addEventListener("mouseup", handleDocumentMouseUp, {
        once: true
      });
    }
  }, [isOpenedByThisTrigger, handleDocumentMouseUp, store]);
  const parentMenubarHasSubmenuOpen = isInMenubar && parent.context.hasSubmenuOpen;
  const openOnHover = openOnHoverProp ?? parentMenubarHasSubmenuOpen;
  const hoverProps = useHoverReferenceInteraction(floatingRootContext, {
    enabled: openOnHover && !disabled && parent.type !== "context-menu" && (!isInMenubar || parentMenubarHasSubmenuOpen && !isMountedByThisTrigger),
    handleClose: safePolygon({
      blockPointerEvents: !isInMenubar
    }),
    mouseOnly: true,
    move: false,
    restMs: parent.type === void 0 ? delay : void 0,
    delay: {
      close: closeDelay
    },
    triggerElementRef,
    externalTree: floatingTreeRoot,
    isActiveTrigger: isTriggerActive
  });
  const stickIfOpen = useStickIfOpen(isOpenedByThisTrigger, store.select("lastOpenChangeReason"));
  const click = useClick(floatingRootContext, {
    enabled: !disabled && parent.type !== "context-menu",
    event: isOpenedByThisTrigger && isInMenubar ? "click" : "mousedown",
    toggle: true,
    ignoreMouse: false,
    stickIfOpen: parent.type === void 0 ? stickIfOpen : false
  });
  const focus = useFocus(floatingRootContext, {
    enabled: !disabled && parentMenubarHasSubmenuOpen
  });
  const mixedToggleHandlers = useMixedToggleClickHandler({
    open: isOpenedByThisTrigger,
    enabled: isInMenubar,
    mouseDownAction: "open"
  });
  const localInteractionProps = useInteractions([click, focus]);
  const state = {
    disabled,
    open: isOpenedByThisTrigger
  };
  const rootTriggerProps = store.useState("triggerProps", isMountedByThisTrigger);
  const ref = [triggerRef, forwardedRef, buttonRef, registerTrigger, triggerElementRef];
  const props = [localInteractionProps.getReferenceProps(), hoverProps ?? EMPTY_OBJECT, rootTriggerProps, {
    "aria-haspopup": "menu",
    id: thisTriggerId,
    onMouseDown: (event) => {
      if (store.select("open")) {
        return;
      }
      allowMouseUpTriggerTimeout.start(200, () => {
        store.context.allowMouseUpTriggerRef.current = true;
      });
      const doc = ownerDocument(event.currentTarget);
      doc.addEventListener("mouseup", handleDocumentMouseUp, {
        once: true
      });
    }
  }, isInMenubar ? {
    role: "menuitem"
  } : {}, mixedToggleHandlers, elementProps, getButtonProps];
  const preFocusGuardRef = React108.useRef(null);
  const handlePreFocusGuardFocus = useStableCallback((event) => {
    ReactDOM3.flushSync(() => {
      store.setOpen(false, createChangeEventDetails(reason_parts_exports.focusOut, event.nativeEvent, event.currentTarget));
    });
    const previousTabbable = getTabbableBeforeElement(preFocusGuardRef.current);
    previousTabbable?.focus();
  });
  const handleFocusTargetFocus = useStableCallback((event) => {
    const currentPositionerElement = store.select("positionerElement");
    if (currentPositionerElement && isOutsideEvent(event, currentPositionerElement)) {
      store.context.beforeContentFocusGuardRef.current?.focus();
    } else {
      ReactDOM3.flushSync(() => {
        store.setOpen(false, createChangeEventDetails(reason_parts_exports.focusOut, event.nativeEvent, event.currentTarget));
      });
      let nextTabbable = getTabbableAfterElement(store.context.triggerFocusTargetRef.current || triggerElementRef.current);
      while (nextTabbable !== null && contains(currentPositionerElement, nextTabbable)) {
        const prevTabbable = nextTabbable;
        nextTabbable = getNextTabbable(nextTabbable);
        if (nextTabbable === prevTabbable) {
          break;
        }
      }
      nextTabbable?.focus();
    }
  });
  const element = useRenderElement("button", componentProps, {
    enabled: !isInMenubar,
    stateAttributesMapping: pressableTriggerOpenStateMapping,
    state,
    ref,
    props
  });
  if (isInMenubar) {
    return (0, import_jsx_runtime38.jsx)(CompositeItem, {
      tag: "button",
      render,
      className,
      state,
      refs: ref,
      props,
      stateAttributesMapping: pressableTriggerOpenStateMapping
    });
  }
  if (isOpenedByThisTrigger) {
    return (0, import_jsx_runtime38.jsxs)(React108.Fragment, {
      children: [(0, import_jsx_runtime38.jsx)(FocusGuard, {
        ref: preFocusGuardRef,
        onFocus: handlePreFocusGuardFocus
      }, `${thisTriggerId}-pre-focus-guard`), (0, import_jsx_runtime38.jsx)(React108.Fragment, {
        children: element
      }, thisTriggerId), (0, import_jsx_runtime38.jsx)(FocusGuard, {
        ref: store.context.triggerFocusTargetRef,
        onFocus: handleFocusTargetFocus
      }, `${thisTriggerId}-post-focus-guard`)]
    });
  }
  return (0, import_jsx_runtime38.jsx)(React108.Fragment, {
    children: element
  }, thisTriggerId);
});
if (true) MenuTrigger.displayName = "MenuTrigger";
function useStickIfOpen(open, openReason) {
  const stickIfOpenTimeout = useTimeout();
  const [stickIfOpen, setStickIfOpen] = React108.useState(false);
  useIsoLayoutEffect(() => {
    if (open && openReason === "trigger-hover") {
      setStickIfOpen(true);
      stickIfOpenTimeout.start(PATIENT_CLICK_THRESHOLD, () => {
        setStickIfOpen(false);
      });
    } else if (!open) {
      stickIfOpenTimeout.clear();
      setStickIfOpen(false);
    }
  }, [open, openReason, stickIfOpenTimeout]);
  return stickIfOpen;
}
function useMenuParent() {
  const contextMenuContext = useContextMenuRootContext(true);
  const parentContext = useMenuRootContext(true);
  const menubarContext = useMenubarContext(true);
  const parent = React108.useMemo(() => {
    if (menubarContext) {
      return {
        type: "menubar",
        context: menubarContext
      };
    }
    if (contextMenuContext && !parentContext) {
      return {
        type: "context-menu",
        context: contextMenuContext
      };
    }
    return {
      type: void 0
    };
  }, [contextMenuContext, parentContext, menubarContext]);
  return parent;
}

// node_modules/@base-ui/react/esm/menu/viewport/MenuViewport.js
var React113 = __toESM(require_react(), 1);

// node_modules/@base-ui/react/esm/utils/usePopupViewport.js
var React112 = __toESM(require_react(), 1);
var ReactDOM4 = __toESM(require_react_dom(), 1);

// node_modules/@base-ui/utils/esm/usePreviousValue.js
var React109 = __toESM(require_react());
function usePreviousValue(value) {
  const [state, setState] = React109.useState({
    current: value,
    previous: null
  });
  if (value !== state.current) {
    setState({
      current: value,
      previous: state.current
    });
  }
  return state.previous;
}

// node_modules/@base-ui/react/esm/utils/usePopupAutoResize.js
var React110 = __toESM(require_react(), 1);
var DEFAULT_ENABLED = () => true;
function usePopupAutoResize(parameters) {
  const {
    popupElement,
    positionerElement,
    content,
    mounted,
    enabled = DEFAULT_ENABLED,
    onMeasureLayout: onMeasureLayoutParam,
    onMeasureLayoutComplete: onMeasureLayoutCompleteParam,
    side,
    direction
  } = parameters;
  const runOnceAnimationsFinish = useAnimationsFinished(popupElement, true, false);
  const animationFrame = useAnimationFrame();
  const committedDimensionsRef = React110.useRef(null);
  const liveDimensionsRef = React110.useRef(null);
  const isInitialRenderRef = React110.useRef(true);
  const restoreAnchoringStylesRef = React110.useRef(NOOP);
  const onMeasureLayout = useStableCallback(onMeasureLayoutParam);
  const onMeasureLayoutComplete = useStableCallback(onMeasureLayoutCompleteParam);
  const anchoringStyles = React110.useMemo(() => {
    let isOriginSide = side === "top";
    let isPhysicalLeft = side === "left";
    if (direction === "rtl") {
      isOriginSide = isOriginSide || side === "inline-end";
      isPhysicalLeft = isPhysicalLeft || side === "inline-end";
    } else {
      isOriginSide = isOriginSide || side === "inline-start";
      isPhysicalLeft = isPhysicalLeft || side === "inline-start";
    }
    return isOriginSide ? {
      position: "absolute",
      [side === "top" ? "bottom" : "top"]: "0",
      [isPhysicalLeft ? "right" : "left"]: "0"
    } : EMPTY_OBJECT;
  }, [side, direction]);
  useIsoLayoutEffect(() => {
    if (!mounted || !enabled() || typeof ResizeObserver !== "function") {
      restoreAnchoringStylesRef.current = NOOP;
      isInitialRenderRef.current = true;
      committedDimensionsRef.current = null;
      liveDimensionsRef.current = null;
      return void 0;
    }
    if (!popupElement || !positionerElement) {
      return void 0;
    }
    restoreAnchoringStylesRef.current = applyElementStyles(popupElement, anchoringStyles);
    const observer = new ResizeObserver((entries) => {
      const entry = entries[0];
      if (entry) {
        liveDimensionsRef.current = {
          width: Math.ceil(entry.borderBoxSize[0].inlineSize),
          height: Math.ceil(entry.borderBoxSize[0].blockSize)
        };
      }
    });
    observer.observe(popupElement);
    setPopupCssSize(popupElement, "auto");
    const restorePopupPosition = overrideElementStyle(popupElement, "position", "static");
    const restorePopupTransform = overrideElementStyle(popupElement, "transform", "none");
    const restorePopupScale = overrideElementStyle(popupElement, "scale", "1");
    const restorePositionerAvailableSize = applyElementStyles(positionerElement, {
      "--available-width": "max-content",
      "--available-height": "max-content"
    });
    function restoreMeasurementOverrides() {
      restorePopupPosition();
      restorePopupTransform();
      restorePositionerAvailableSize();
    }
    function restoreMeasurementOverridesIncludingScale() {
      restoreMeasurementOverrides();
      restorePopupScale();
    }
    onMeasureLayout?.();
    if (isInitialRenderRef.current || committedDimensionsRef.current === null) {
      setPositionerCssSize(positionerElement, "max-content");
      const dimensions = getCssDimensions(popupElement);
      committedDimensionsRef.current = dimensions;
      setPositionerCssSize(positionerElement, dimensions);
      restoreMeasurementOverridesIncludingScale();
      onMeasureLayoutComplete?.(null, dimensions);
      isInitialRenderRef.current = false;
      return () => {
        observer.disconnect();
        restoreAnchoringStylesRef.current();
        restoreAnchoringStylesRef.current = NOOP;
      };
    }
    setPopupCssSize(popupElement, "auto");
    setPositionerCssSize(positionerElement, "max-content");
    const previousDimensions = committedDimensionsRef.current ?? liveDimensionsRef.current;
    const newDimensions = getCssDimensions(popupElement);
    committedDimensionsRef.current = newDimensions;
    if (!previousDimensions) {
      setPositionerCssSize(positionerElement, newDimensions);
      restoreMeasurementOverridesIncludingScale();
      onMeasureLayoutComplete?.(null, newDimensions);
      return () => {
        observer.disconnect();
        animationFrame.cancel();
        restoreAnchoringStylesRef.current();
        restoreAnchoringStylesRef.current = NOOP;
      };
    }
    setPopupCssSize(popupElement, previousDimensions);
    restoreMeasurementOverridesIncludingScale();
    onMeasureLayoutComplete?.(previousDimensions, newDimensions);
    setPositionerCssSize(positionerElement, newDimensions);
    const abortController = new AbortController();
    animationFrame.request(() => {
      setPopupCssSize(popupElement, newDimensions);
      runOnceAnimationsFinish(() => {
        popupElement.style.setProperty("--popup-width", "auto");
        popupElement.style.setProperty("--popup-height", "auto");
      }, abortController.signal);
    });
    return () => {
      observer.disconnect();
      abortController.abort();
      animationFrame.cancel();
      restoreAnchoringStylesRef.current();
      restoreAnchoringStylesRef.current = NOOP;
    };
  }, [content, popupElement, positionerElement, runOnceAnimationsFinish, animationFrame, enabled, mounted, onMeasureLayout, onMeasureLayoutComplete, anchoringStyles]);
}
function overrideElementStyle(element, property, value) {
  const originalValue = element.style.getPropertyValue(property);
  element.style.setProperty(property, value);
  return () => {
    element.style.setProperty(property, originalValue);
  };
}
function applyElementStyles(element, styles) {
  const restorers = [];
  for (const [key, value] of Object.entries(styles)) {
    restorers.push(overrideElementStyle(element, key, value));
  }
  return restorers.length ? () => {
    restorers.forEach((restore) => restore());
  } : NOOP;
}
function setPopupCssSize(popupElement, size) {
  const width = size === "auto" ? "auto" : `${size.width}px`;
  const height = size === "auto" ? "auto" : `${size.height}px`;
  popupElement.style.setProperty("--popup-width", width);
  popupElement.style.setProperty("--popup-height", height);
}
function setPositionerCssSize(positionerElement, size) {
  const width = size === "max-content" ? "max-content" : `${size.width}px`;
  const height = size === "max-content" ? "max-content" : `${size.height}px`;
  positionerElement.style.setProperty("--positioner-width", width);
  positionerElement.style.setProperty("--positioner-height", height);
}

// node_modules/@base-ui/react/esm/direction-provider/DirectionProvider.js
var React111 = __toESM(require_react(), 1);
var import_jsx_runtime39 = __toESM(require_jsx_runtime(), 1);
var DirectionProvider = function DirectionProvider2(props) {
  const {
    direction = "ltr"
  } = props;
  const contextValue = React111.useMemo(() => ({
    direction
  }), [direction]);
  return (0, import_jsx_runtime39.jsx)(DirectionContext.Provider, {
    value: contextValue,
    children: props.children
  });
};
if (true) DirectionProvider.displayName = "DirectionProvider";

// node_modules/@base-ui/react/esm/utils/usePopupViewport.js
var import_jsx_runtime40 = __toESM(require_jsx_runtime(), 1);
function usePopupViewport(parameters) {
  const {
    store,
    side,
    cssVars,
    children
  } = parameters;
  const direction = useDirection();
  const activeTrigger = store.useState("activeTriggerElement");
  const activeTriggerId = store.useState("activeTriggerId");
  const open = store.useState("open");
  const payload = store.useState("payload");
  const mounted = store.useState("mounted");
  const popupElement = store.useState("popupElement");
  const positionerElement = store.useState("positionerElement");
  const previousActiveTrigger = usePreviousValue(open ? activeTrigger : null);
  const currentContentKey = usePopupContentKey(activeTriggerId, payload);
  const capturedNodeRef = React112.useRef(null);
  const [previousContentNode, setPreviousContentNode] = React112.useState(null);
  const [newTriggerOffset, setNewTriggerOffset] = React112.useState(null);
  const currentContainerRef = React112.useRef(null);
  const previousContainerRef = React112.useRef(null);
  const onAnimationsFinished = useAnimationsFinished(currentContainerRef, true, false);
  const cleanupFrame = useAnimationFrame();
  const [previousContentDimensions, setPreviousContentDimensions] = React112.useState(null);
  const [showStartingStyleAttribute, setShowStartingStyleAttribute] = React112.useState(false);
  useIsoLayoutEffect(() => {
    store.set("hasViewport", true);
    return () => {
      store.set("hasViewport", false);
    };
  }, [store]);
  const handleMeasureLayout = useStableCallback(() => {
    currentContainerRef.current?.style.setProperty("animation", "none");
    currentContainerRef.current?.style.setProperty("transition", "none");
    previousContainerRef.current?.style.setProperty("display", "none");
  });
  const handleMeasureLayoutComplete = useStableCallback((previousDimensions) => {
    currentContainerRef.current?.style.removeProperty("animation");
    currentContainerRef.current?.style.removeProperty("transition");
    previousContainerRef.current?.style.removeProperty("display");
    if (previousDimensions) {
      setPreviousContentDimensions(previousDimensions);
    }
  });
  const lastHandledTriggerRef = React112.useRef(null);
  useIsoLayoutEffect(() => {
    if (activeTrigger && previousActiveTrigger && activeTrigger !== previousActiveTrigger && lastHandledTriggerRef.current !== activeTrigger && capturedNodeRef.current) {
      setPreviousContentNode(capturedNodeRef.current);
      setShowStartingStyleAttribute(true);
      const offset = calculateRelativePosition(previousActiveTrigger, activeTrigger);
      setNewTriggerOffset(offset);
      cleanupFrame.request(() => {
        ReactDOM4.flushSync(() => {
          setShowStartingStyleAttribute(false);
        });
        onAnimationsFinished(() => {
          setPreviousContentNode(null);
          setPreviousContentDimensions(null);
          capturedNodeRef.current = null;
        });
      });
      lastHandledTriggerRef.current = activeTrigger;
    }
  }, [activeTrigger, previousActiveTrigger, previousContentNode, onAnimationsFinished, cleanupFrame]);
  useIsoLayoutEffect(() => {
    const source = currentContainerRef.current;
    if (!source) {
      return;
    }
    const wrapper = document.createElement("div");
    for (const child of Array.from(source.childNodes)) {
      wrapper.appendChild(child.cloneNode(true));
    }
    capturedNodeRef.current = wrapper;
  });
  const isTransitioning = previousContentNode != null;
  let childrenToRender;
  if (!isTransitioning) {
    childrenToRender = (0, import_jsx_runtime40.jsx)("div", {
      "data-current": true,
      ref: currentContainerRef,
      children
    }, currentContentKey);
  } else {
    childrenToRender = (0, import_jsx_runtime40.jsxs)(React112.Fragment, {
      children: [(0, import_jsx_runtime40.jsx)("div", {
        "data-previous": true,
        inert: inertValue(true),
        ref: previousContainerRef,
        style: {
          ...previousContentDimensions ? {
            [cssVars.popupWidth]: `${previousContentDimensions.width}px`,
            [cssVars.popupHeight]: `${previousContentDimensions.height}px`
          } : null,
          position: "absolute"
        },
        "data-ending-style": showStartingStyleAttribute ? void 0 : ""
      }, "previous"), (0, import_jsx_runtime40.jsx)("div", {
        "data-current": true,
        ref: currentContainerRef,
        "data-starting-style": showStartingStyleAttribute ? "" : void 0,
        children
      }, currentContentKey)]
    });
  }
  useIsoLayoutEffect(() => {
    const container = previousContainerRef.current;
    if (!container || !previousContentNode) {
      return;
    }
    container.replaceChildren(...Array.from(previousContentNode.childNodes));
  }, [previousContentNode]);
  usePopupAutoResize({
    popupElement,
    positionerElement,
    mounted,
    content: payload,
    onMeasureLayout: handleMeasureLayout,
    onMeasureLayoutComplete: handleMeasureLayoutComplete,
    side,
    direction
  });
  const state = {
    activationDirection: getActivationDirection(newTriggerOffset),
    transitioning: isTransitioning
  };
  return {
    children: childrenToRender,
    state
  };
}
function getActivationDirection(offset) {
  if (!offset) {
    return void 0;
  }
  return `${getValueWithTolerance(offset.horizontal, 5, "right", "left")} ${getValueWithTolerance(offset.vertical, 5, "down", "up")}`;
}
function getValueWithTolerance(value, tolerance, positiveLabel, negativeLabel) {
  if (value > tolerance) {
    return positiveLabel;
  }
  if (value < -tolerance) {
    return negativeLabel;
  }
  return "";
}
function calculateRelativePosition(from, to) {
  const fromRect = from.getBoundingClientRect();
  const toRect = to.getBoundingClientRect();
  const fromCenter = {
    x: fromRect.left + fromRect.width / 2,
    y: fromRect.top + fromRect.height / 2
  };
  const toCenter = {
    x: toRect.left + toRect.width / 2,
    y: toRect.top + toRect.height / 2
  };
  return {
    horizontal: toCenter.x - fromCenter.x,
    vertical: toCenter.y - fromCenter.y
  };
}
function usePopupContentKey(activeTriggerId, payload) {
  const [contentKey, setContentKey] = React112.useState(0);
  const previousActiveTriggerIdRef = React112.useRef(activeTriggerId);
  const previousPayloadRef = React112.useRef(payload);
  const pendingPayloadUpdateRef = React112.useRef(false);
  useIsoLayoutEffect(() => {
    const previousActiveTriggerId = previousActiveTriggerIdRef.current;
    const previousPayload = previousPayloadRef.current;
    const triggerIdChanged = activeTriggerId !== previousActiveTriggerId;
    const payloadChanged = payload !== previousPayload;
    if (triggerIdChanged) {
      setContentKey((value) => value + 1);
      pendingPayloadUpdateRef.current = !payloadChanged;
    } else if (pendingPayloadUpdateRef.current && payloadChanged) {
      setContentKey((value) => value + 1);
      pendingPayloadUpdateRef.current = false;
    }
    previousActiveTriggerIdRef.current = activeTriggerId;
    previousPayloadRef.current = payload;
  }, [activeTriggerId, payload]);
  return `${activeTriggerId ?? "current"}-${contentKey}`;
}

// node_modules/@base-ui/react/esm/menu/viewport/MenuViewportCssVars.js
var MenuViewportCssVars = (function(MenuViewportCssVars2) {
  MenuViewportCssVars2["popupWidth"] = "--popup-width";
  MenuViewportCssVars2["popupHeight"] = "--popup-height";
  return MenuViewportCssVars2;
})({});

// node_modules/@base-ui/react/esm/menu/viewport/MenuViewport.js
var stateAttributesMapping11 = {
  activationDirection: (value) => value ? {
    "data-activation-direction": value
  } : null
};
var MenuViewport = React113.forwardRef(function MenuViewport2(componentProps, forwardedRef) {
  const {
    render,
    className,
    children,
    ...elementProps
  } = componentProps;
  const {
    store
  } = useMenuRootContext();
  const {
    side
  } = useMenuPositionerContext();
  const instantType = store.useState("instantType");
  const {
    children: childrenToRender,
    state: viewportState
  } = usePopupViewport({
    store,
    side,
    cssVars: MenuViewportCssVars,
    children
  });
  const state = {
    activationDirection: viewportState.activationDirection,
    transitioning: viewportState.transitioning,
    instant: instantType
  };
  return useRenderElement("div", componentProps, {
    state,
    ref: forwardedRef,
    props: [elementProps, {
      children: childrenToRender
    }],
    stateAttributesMapping: stateAttributesMapping11
  });
});
if (true) MenuViewport.displayName = "MenuViewport";

// node_modules/@base-ui/react/esm/menu/submenu-trigger/MenuSubmenuTrigger.js
var React114 = __toESM(require_react(), 1);
var MenuSubmenuTrigger = React114.forwardRef(function SubmenuTriggerComponent(componentProps, forwardedRef) {
  const {
    render,
    className,
    label,
    id: idProp,
    nativeButton = false,
    openOnHover = true,
    delay = 100,
    closeDelay = 0,
    disabled: disabledProp = false,
    ...elementProps
  } = componentProps;
  const listItem = useCompositeListItem();
  const menuPositionerContext = useMenuPositionerContext();
  const {
    store
  } = useMenuRootContext();
  const thisTriggerId = useBaseUiId(idProp);
  const open = store.useState("open");
  const floatingRootContext = store.useState("floatingRootContext");
  const floatingTreeRoot = store.useState("floatingTreeRoot");
  const baseRegisterTrigger = useTriggerRegistration(thisTriggerId, store);
  const registerTrigger = React114.useCallback((element2) => {
    const cleanup = baseRegisterTrigger(element2);
    if (element2 !== null && store.select("open") && store.select("activeTriggerId") == null) {
      store.update({
        activeTriggerId: thisTriggerId,
        activeTriggerElement: element2,
        closeDelay
      });
    }
    return cleanup;
  }, [baseRegisterTrigger, closeDelay, store, thisTriggerId]);
  const triggerElementRef = React114.useRef(null);
  const handleTriggerElementRef = React114.useCallback((el) => {
    triggerElementRef.current = el;
    store.set("activeTriggerElement", el);
  }, [store]);
  const submenuRootContext = useMenuSubmenuRootContext();
  if (!submenuRootContext?.parentMenu) {
    throw new Error(true ? "Base UI: <Menu.SubmenuTrigger> must be placed in <Menu.SubmenuRoot>." : formatErrorMessage_default(37));
  }
  store.useSyncedValue("closeDelay", closeDelay);
  const parentMenuStore = submenuRootContext.parentMenu;
  const itemProps = parentMenuStore.useState("itemProps");
  const highlighted = parentMenuStore.useState("isActive", listItem.index);
  const itemMetadata = React114.useMemo(() => ({
    type: "submenu-trigger",
    setActive() {
      parentMenuStore.set("activeIndex", listItem.index);
    }
  }), [parentMenuStore, listItem.index]);
  const rootDisabled = store.useState("disabled");
  const disabled = disabledProp || rootDisabled;
  const {
    getItemProps,
    itemRef
  } = useMenuItem({
    closeOnClick: false,
    disabled,
    highlighted,
    id: thisTriggerId,
    store,
    typingRef: parentMenuStore.context.typingRef,
    nativeButton,
    itemMetadata,
    nodeId: menuPositionerContext?.nodeId
  });
  const hoverEnabled = store.useState("hoverEnabled");
  const allowMouseEnter = parentMenuStore.useState("allowMouseEnter");
  const hoverProps = useHoverReferenceInteraction(floatingRootContext, {
    enabled: hoverEnabled && openOnHover && !disabled,
    handleClose: safePolygon({
      blockPointerEvents: true
    }),
    mouseOnly: true,
    move: true,
    restMs: delay,
    delay: allowMouseEnter ? {
      open: delay,
      close: closeDelay
    } : 0,
    triggerElementRef,
    externalTree: floatingTreeRoot
  });
  const click = useClick(floatingRootContext, {
    enabled: !disabled,
    event: "mousedown",
    toggle: !openOnHover,
    ignoreMouse: openOnHover,
    stickIfOpen: false
  });
  const localInteractionProps = useInteractions([click]);
  const rootTriggerProps = store.useState("triggerProps", true);
  delete rootTriggerProps.id;
  const state = {
    disabled,
    highlighted,
    open
  };
  const element = useRenderElement("div", componentProps, {
    state,
    stateAttributesMapping: triggerOpenStateMapping,
    props: [localInteractionProps.getReferenceProps(), hoverProps, rootTriggerProps, itemProps, {
      tabIndex: open || highlighted ? 0 : -1,
      onBlur() {
        if (highlighted) {
          parentMenuStore.set("activeIndex", null);
        }
      }
    }, elementProps, getItemProps],
    ref: [forwardedRef, listItem.ref, itemRef, registerTrigger, handleTriggerElementRef]
  });
  return element;
});
if (true) MenuSubmenuTrigger.displayName = "MenuSubmenuTrigger";

// node_modules/@base-ui/react/esm/menu/store/MenuHandle.js
var MenuHandle = class {
  /**
   * Internal store holding the menu's state.
   * @internal
   */
  constructor() {
    this.store = new MenuStore();
  }
  /**
   * Opens the menu and associates it with the trigger with the given id.
   * The trigger must be a Menu.Trigger component with this handle passed as a prop.
   *
   * @param triggerId ID of the trigger to associate with the menu.
   */
  open(triggerId) {
    const triggerElement = triggerId ? this.store.context.triggerElements.getById(triggerId) : void 0;
    if (triggerId && !triggerElement) {
      throw new Error(true ? `Base UI: MenuHandle.open: No trigger found with id "${triggerId}".` : formatErrorMessage_default(83, triggerId));
    }
    this.store.setOpen(true, createChangeEventDetails("imperative-action", void 0, triggerElement));
  }
  /**
   * Closes the menu.
   */
  close() {
    this.store.setOpen(false, createChangeEventDetails("imperative-action", void 0, void 0));
  }
  /**
   * Indicates whether the menu is currently open.
   */
  get isOpen() {
    return this.store.state.open;
  }
};
function createMenuHandle() {
  return new MenuHandle();
}

// node_modules/@base-ui/react/esm/context-menu/root/ContextMenuRoot.js
var import_jsx_runtime41 = __toESM(require_jsx_runtime(), 1);
function ContextMenuRoot(props) {
  const [anchor, setAnchor] = React115.useState({
    getBoundingClientRect() {
      return DOMRect.fromRect({
        width: 0,
        height: 0,
        x: 0,
        y: 0
      });
    }
  });
  const backdropRef = React115.useRef(null);
  const internalBackdropRef = React115.useRef(null);
  const actionsRef = React115.useRef(null);
  const positionerRef = React115.useRef(null);
  const allowMouseUpTriggerRef = React115.useRef(true);
  const initialCursorPointRef = React115.useRef(null);
  const id = useId();
  const contextValue = React115.useMemo(() => ({
    anchor,
    setAnchor,
    actionsRef,
    backdropRef,
    internalBackdropRef,
    positionerRef,
    allowMouseUpTriggerRef,
    initialCursorPointRef,
    rootId: id
  }), [anchor, id]);
  return (0, import_jsx_runtime41.jsx)(ContextMenuRootContext.Provider, {
    value: contextValue,
    children: (0, import_jsx_runtime41.jsx)(MenuRootContext.Provider, {
      value: void 0,
      children: (0, import_jsx_runtime41.jsx)(index_parts_exports11.Root, {
        ...props
      })
    })
  });
}

// node_modules/@base-ui/react/esm/context-menu/trigger/ContextMenuTrigger.js
var React116 = __toESM(require_react(), 1);
var LONG_PRESS_DELAY = 500;
var ContextMenuTrigger = React116.forwardRef(function ContextMenuTrigger2(componentProps, forwardedRef) {
  const {
    render,
    className,
    ...elementProps
  } = componentProps;
  const {
    setAnchor,
    actionsRef,
    internalBackdropRef,
    backdropRef,
    positionerRef,
    allowMouseUpTriggerRef,
    initialCursorPointRef,
    rootId
  } = useContextMenuRootContext(false);
  const {
    store
  } = useMenuRootContext(false);
  const open = store.useState("open");
  const disabled = store.useState("disabled");
  const triggerRef = React116.useRef(null);
  const touchPositionRef = React116.useRef(null);
  const longPressTimeout = useTimeout();
  const allowMouseUpTimeout = useTimeout();
  const allowMouseUpRef = React116.useRef(false);
  function handleLongPress(x, y, event) {
    const isTouchEvent = event.type.startsWith("touch");
    initialCursorPointRef.current = {
      x,
      y
    };
    setAnchor({
      getBoundingClientRect() {
        return DOMRect.fromRect({
          width: isTouchEvent ? 10 : 0,
          height: isTouchEvent ? 10 : 0,
          x,
          y
        });
      }
    });
    allowMouseUpRef.current = false;
    actionsRef.current?.setOpen(true, createChangeEventDetails(reason_parts_exports.triggerPress, event));
    allowMouseUpTimeout.start(LONG_PRESS_DELAY, () => {
      allowMouseUpRef.current = true;
    });
  }
  function handleContextMenu(event) {
    if (disabled) {
      return;
    }
    allowMouseUpTriggerRef.current = true;
    stopEvent(event);
    handleLongPress(event.clientX, event.clientY, event.nativeEvent);
    const doc = ownerDocument(triggerRef.current);
    doc.addEventListener("mouseup", (mouseEvent) => {
      allowMouseUpTriggerRef.current = false;
      if (!allowMouseUpRef.current) {
        return;
      }
      allowMouseUpTimeout.clear();
      allowMouseUpRef.current = false;
      const mouseUpTarget = getTarget(mouseEvent);
      if (contains(positionerRef.current, mouseUpTarget)) {
        return;
      }
      if (rootId && mouseUpTarget && findRootOwnerId(mouseUpTarget) === rootId) {
        return;
      }
      actionsRef.current?.setOpen(false, createChangeEventDetails(reason_parts_exports.cancelOpen, mouseEvent));
    }, {
      once: true
    });
  }
  function handleTouchStart(event) {
    if (disabled) {
      return;
    }
    allowMouseUpTriggerRef.current = false;
    if (event.touches.length === 1) {
      event.stopPropagation();
      const touch = event.touches[0];
      touchPositionRef.current = {
        x: touch.clientX,
        y: touch.clientY
      };
      longPressTimeout.start(LONG_PRESS_DELAY, () => {
        if (touchPositionRef.current) {
          handleLongPress(touchPositionRef.current.x, touchPositionRef.current.y, event.nativeEvent);
        }
      });
    }
  }
  function handleTouchMove(event) {
    if (longPressTimeout.isStarted() && touchPositionRef.current && event.touches.length === 1) {
      const touch = event.touches[0];
      const moveThreshold = 10;
      const deltaX = Math.abs(touch.clientX - touchPositionRef.current.x);
      const deltaY = Math.abs(touch.clientY - touchPositionRef.current.y);
      if (deltaX > moveThreshold || deltaY > moveThreshold) {
        longPressTimeout.clear();
      }
    }
  }
  function handleTouchEnd() {
    longPressTimeout.clear();
    touchPositionRef.current = null;
  }
  React116.useEffect(() => {
    function handleDocumentContextMenu(event) {
      if (disabled) {
        return;
      }
      const target = getTarget(event);
      const targetElement = target;
      if (contains(triggerRef.current, targetElement) || contains(internalBackdropRef.current, targetElement) || contains(backdropRef.current, targetElement)) {
        event.preventDefault();
      }
    }
    const doc = ownerDocument(triggerRef.current);
    doc.addEventListener("contextmenu", handleDocumentContextMenu);
    return () => {
      doc.removeEventListener("contextmenu", handleDocumentContextMenu);
    };
  }, [backdropRef, disabled, internalBackdropRef]);
  const state = {
    open
  };
  const element = useRenderElement("div", componentProps, {
    state,
    ref: [triggerRef, forwardedRef],
    props: [{
      onContextMenu: handleContextMenu,
      onTouchStart: handleTouchStart,
      onTouchMove: handleTouchMove,
      onTouchEnd: handleTouchEnd,
      onTouchCancel: handleTouchEnd,
      style: {
        WebkitTouchCallout: "none"
      }
    }, elementProps],
    stateAttributesMapping: pressableTriggerOpenStateMapping
  });
  return element;
});
if (true) ContextMenuTrigger.displayName = "ContextMenuTrigger";

// node_modules/@base-ui/react/esm/csp-provider/CSPProvider.js
var React117 = __toESM(require_react(), 1);
var import_jsx_runtime42 = __toESM(require_jsx_runtime(), 1);
function CSPProvider(props) {
  const {
    children,
    nonce,
    disableStyleElements
  } = props;
  const contextValue = React117.useMemo(() => ({
    nonce,
    disableStyleElements
  }), [nonce, disableStyleElements]);
  return (0, import_jsx_runtime42.jsx)(CSPContext.Provider, {
    value: contextValue,
    children
  });
}

// node_modules/@base-ui/react/esm/dialog/index.parts.js
var index_parts_exports13 = {};
__export(index_parts_exports13, {
  Backdrop: () => DialogBackdrop,
  Close: () => DialogClose,
  Description: () => DialogDescription,
  Handle: () => DialogHandle,
  Popup: () => DialogPopup,
  Portal: () => DialogPortal,
  Root: () => DialogRoot,
  Title: () => DialogTitle,
  Trigger: () => DialogTrigger,
  Viewport: () => DialogViewport,
  createHandle: () => createDialogHandle
});

// node_modules/@base-ui/react/esm/dialog/root/DialogRoot.js
var React118 = __toESM(require_react(), 1);
var import_jsx_runtime43 = __toESM(require_jsx_runtime(), 1);
function DialogRoot(props) {
  const {
    children,
    open: openProp,
    defaultOpen = false,
    onOpenChange,
    onOpenChangeComplete,
    disablePointerDismissal = false,
    modal = true,
    actionsRef,
    handle,
    triggerId: triggerIdProp,
    defaultTriggerId: defaultTriggerIdProp = null
  } = props;
  const parentDialogRootContext = useDialogRootContext(true);
  const nested = Boolean(parentDialogRootContext);
  const store = useRefWithInit(() => {
    return handle?.store ?? new DialogStore({
      open: defaultOpen,
      openProp,
      activeTriggerId: defaultTriggerIdProp,
      triggerIdProp,
      modal,
      disablePointerDismissal,
      nested
    });
  }).current;
  useOnFirstRender(() => {
    if (openProp === void 0 && store.state.open === false && defaultOpen === true) {
      store.update({
        open: true,
        activeTriggerId: defaultTriggerIdProp
      });
    }
  });
  store.useControlledProp("openProp", openProp);
  store.useControlledProp("triggerIdProp", triggerIdProp);
  store.useSyncedValues({
    disablePointerDismissal,
    nested,
    modal
  });
  store.useContextCallback("onOpenChange", onOpenChange);
  store.useContextCallback("onOpenChangeComplete", onOpenChangeComplete);
  const payload = store.useState("payload");
  useDialogRoot({
    store,
    actionsRef,
    parentContext: parentDialogRootContext?.store.context,
    onOpenChange,
    triggerIdProp
  });
  const contextValue = React118.useMemo(() => ({
    store
  }), [store]);
  return (0, import_jsx_runtime43.jsx)(DialogRootContext.Provider, {
    value: contextValue,
    children: typeof children === "function" ? children({
      payload
    }) : children
  });
}

// node_modules/@base-ui/react/esm/drawer/index.parts.js
var index_parts_exports14 = {};
__export(index_parts_exports14, {
  Backdrop: () => DrawerBackdrop,
  Close: () => DrawerClose,
  Content: () => DrawerContent,
  Description: () => DrawerDescription,
  Handle: () => DialogHandle,
  Indent: () => DrawerIndent,
  IndentBackground: () => DrawerIndentBackground,
  Popup: () => DrawerPopup,
  Portal: () => DrawerPortal,
  Provider: () => DrawerProvider,
  Root: () => DrawerRoot,
  SwipeArea: () => DrawerSwipeArea,
  Title: () => DrawerTitle,
  Trigger: () => DrawerTrigger,
  Viewport: () => DrawerViewport,
  createHandle: () => createDialogHandle
});

// node_modules/@base-ui/react/esm/drawer/backdrop/DrawerBackdrop.js
var React119 = __toESM(require_react(), 1);

// node_modules/@base-ui/react/esm/drawer/popup/DrawerPopupCssVars.js
var DrawerPopupCssVars = (function(DrawerPopupCssVars2) {
  DrawerPopupCssVars2["nestedDrawers"] = "--nested-drawers";
  DrawerPopupCssVars2["height"] = "--drawer-height";
  DrawerPopupCssVars2["frontmostHeight"] = "--drawer-frontmost-height";
  DrawerPopupCssVars2["swipeMovementX"] = "--drawer-swipe-movement-x";
  DrawerPopupCssVars2["swipeMovementY"] = "--drawer-swipe-movement-y";
  DrawerPopupCssVars2["snapPointOffset"] = "--drawer-snap-point-offset";
  DrawerPopupCssVars2["swipeStrength"] = "--drawer-swipe-strength";
  return DrawerPopupCssVars2;
})({});

// node_modules/@base-ui/react/esm/drawer/backdrop/DrawerBackdropCssVars.js
var DrawerBackdropCssVars = (function(DrawerBackdropCssVars2) {
  DrawerBackdropCssVars2["swipeProgress"] = "--drawer-swipe-progress";
  return DrawerBackdropCssVars2;
})({});

// node_modules/@base-ui/react/esm/drawer/backdrop/DrawerBackdrop.js
var stateAttributesMapping12 = {
  ...popupStateMapping,
  ...transitionStatusMapping
};
var DrawerBackdrop = React119.forwardRef(function DrawerBackdrop2(componentProps, forwardedRef) {
  const {
    render,
    className,
    forceRender = false,
    ...elementProps
  } = componentProps;
  const {
    store
  } = useDialogRootContext();
  const open = store.useState("open");
  const nested = store.useState("nested");
  const mounted = store.useState("mounted");
  const transitionStatus = store.useState("transitionStatus");
  const state = {
    open,
    transitionStatus
  };
  return useRenderElement("div", componentProps, {
    state,
    ref: [store.context.backdropRef, forwardedRef],
    stateAttributesMapping: stateAttributesMapping12,
    props: [{
      role: "presentation",
      hidden: !mounted,
      style: {
        pointerEvents: !open ? "none" : void 0,
        userSelect: "none",
        WebkitUserSelect: "none",
        [DrawerBackdropCssVars.swipeProgress]: "0",
        [DrawerPopupCssVars.swipeStrength]: "1"
      }
    }, elementProps],
    enabled: forceRender || !nested
  });
});
if (true) DrawerBackdrop.displayName = "DrawerBackdrop";

// node_modules/@base-ui/react/esm/drawer/close/DrawerClose.js
var DrawerClose = DialogClose;

// node_modules/@base-ui/react/esm/drawer/content/DrawerContent.js
var React120 = __toESM(require_react(), 1);

// node_modules/@base-ui/react/esm/drawer/content/DrawerContentDataAttributes.js
var DRAWER_CONTENT_ATTRIBUTE = "data-drawer-content";

// node_modules/@base-ui/react/esm/drawer/content/DrawerContent.js
var DrawerContent = React120.forwardRef(function DrawerContent2(componentProps, forwardedRef) {
  const {
    render,
    className,
    ...elementProps
  } = componentProps;
  useDialogRootContext();
  return useRenderElement("div", componentProps, {
    ref: forwardedRef,
    props: [{
      [DRAWER_CONTENT_ATTRIBUTE]: ""
    }, elementProps]
  });
});
if (true) DrawerContent.displayName = "DrawerContent";

// node_modules/@base-ui/react/esm/drawer/description/DrawerDescription.js
var DrawerDescription = DialogDescription;

// node_modules/@base-ui/react/esm/drawer/indent/DrawerIndent.js
var React122 = __toESM(require_react(), 1);

// node_modules/@base-ui/react/esm/drawer/provider/DrawerProviderContext.js
var React121 = __toESM(require_react(), 1);
var DrawerProviderContext = React121.createContext(void 0);
if (true) DrawerProviderContext.displayName = "DrawerProviderContext";
function useDrawerProviderContext(optional) {
  const context = React121.useContext(DrawerProviderContext);
  if (optional === false && context === void 0) {
    throw new Error(true ? "Base UI: DrawerProviderContext is missing. Use <Drawer.Provider>." : formatErrorMessage_default(91));
  }
  return context;
}

// node_modules/@base-ui/react/esm/drawer/indent/DrawerIndent.js
var stateAttributesMapping13 = {
  active(value) {
    if (value) {
      return {
        "data-active": ""
      };
    }
    return {
      "data-inactive": ""
    };
  }
};
var DrawerIndent = React122.forwardRef(function DrawerIndent2(componentProps, forwardedRef) {
  const {
    render,
    className,
    ...elementProps
  } = componentProps;
  const providerContext = useDrawerProviderContext(true);
  const active = providerContext?.active ?? false;
  const visualStateStore = providerContext?.visualStateStore;
  const indentRef = React122.useRef(null);
  useIsoLayoutEffect(() => {
    const element = indentRef.current;
    if (!element || !visualStateStore) {
      return void 0;
    }
    const syncVisualState = () => {
      const {
        swipeProgress,
        frontmostHeight
      } = visualStateStore.getSnapshot();
      if (swipeProgress <= 0) {
        element.style.setProperty(DrawerBackdropCssVars.swipeProgress, "0");
      } else {
        element.style.setProperty(DrawerBackdropCssVars.swipeProgress, `${swipeProgress}`);
      }
      if (frontmostHeight <= 0) {
        element.style.removeProperty(DrawerPopupCssVars.height);
      } else {
        element.style.setProperty(DrawerPopupCssVars.height, `${frontmostHeight}px`);
      }
    };
    syncVisualState();
    const unsubscribe = visualStateStore.subscribe(syncVisualState);
    return () => {
      unsubscribe();
      element.style.setProperty(DrawerBackdropCssVars.swipeProgress, "0");
      element.style.removeProperty(DrawerPopupCssVars.height);
    };
  }, [visualStateStore]);
  const state = {
    active
  };
  return useRenderElement("div", componentProps, {
    ref: [forwardedRef, indentRef],
    state,
    props: [{
      style: {
        [DrawerBackdropCssVars.swipeProgress]: "0"
      }
    }, elementProps],
    stateAttributesMapping: stateAttributesMapping13
  });
});
if (true) DrawerIndent.displayName = "DrawerIndent";

// node_modules/@base-ui/react/esm/drawer/indent-background/DrawerIndentBackground.js
var React123 = __toESM(require_react(), 1);
var stateAttributesMapping14 = {
  active(value) {
    if (value) {
      return {
        "data-active": ""
      };
    }
    return {
      "data-inactive": ""
    };
  }
};
var DrawerIndentBackground = React123.forwardRef(function DrawerIndentBackground2(componentProps, forwardedRef) {
  const {
    render,
    className,
    ...elementProps
  } = componentProps;
  const providerContext = useDrawerProviderContext(true);
  const active = providerContext?.active ?? false;
  const state = {
    active
  };
  return useRenderElement("div", componentProps, {
    ref: forwardedRef,
    state,
    props: elementProps,
    stateAttributesMapping: stateAttributesMapping14
  });
});
if (true) DrawerIndentBackground.displayName = "DrawerIndentBackground";

// node_modules/@base-ui/react/esm/drawer/popup/DrawerPopup.js
var React127 = __toESM(require_react(), 1);

// node_modules/@base-ui/react/esm/drawer/popup/DrawerPopupDataAttributes.js
var DrawerPopupDataAttributes = (function(DrawerPopupDataAttributes2) {
  DrawerPopupDataAttributes2[DrawerPopupDataAttributes2["open"] = CommonPopupDataAttributes.open] = "open";
  DrawerPopupDataAttributes2[DrawerPopupDataAttributes2["closed"] = CommonPopupDataAttributes.closed] = "closed";
  DrawerPopupDataAttributes2[DrawerPopupDataAttributes2["startingStyle"] = CommonPopupDataAttributes.startingStyle] = "startingStyle";
  DrawerPopupDataAttributes2[DrawerPopupDataAttributes2["endingStyle"] = CommonPopupDataAttributes.endingStyle] = "endingStyle";
  DrawerPopupDataAttributes2["expanded"] = "data-expanded";
  DrawerPopupDataAttributes2["nestedDrawerOpen"] = "data-nested-drawer-open";
  DrawerPopupDataAttributes2["nestedDrawerSwiping"] = "data-nested-drawer-swiping";
  DrawerPopupDataAttributes2["swipeDismiss"] = "data-swipe-dismiss";
  DrawerPopupDataAttributes2["swipeDirection"] = "data-swipe-direction";
  DrawerPopupDataAttributes2["swiping"] = "data-swiping";
  return DrawerPopupDataAttributes2;
})({});

// node_modules/@base-ui/react/esm/drawer/root/DrawerRootContext.js
var React124 = __toESM(require_react(), 1);
var DrawerRootContext = React124.createContext(void 0);
if (true) DrawerRootContext.displayName = "DrawerRootContext";
function useDrawerRootContext(optional) {
  const drawerRootContext = React124.useContext(DrawerRootContext);
  if (optional === false && drawerRootContext === void 0) {
    throw new Error(true ? "Base UI: DrawerRootContext is missing. Drawer parts must be placed within <Drawer.Root>." : formatErrorMessage_default(90));
  }
  return drawerRootContext;
}

// node_modules/@base-ui/react/esm/drawer/root/useDrawerSnapPoints.js
var React125 = __toESM(require_react(), 1);
function resolveSnapPointValue(snapPoint, viewportHeight, rootFontSize) {
  if (!Number.isFinite(viewportHeight) || viewportHeight <= 0) {
    return null;
  }
  if (typeof snapPoint === "number") {
    if (!Number.isFinite(snapPoint)) {
      return null;
    }
    if (snapPoint <= 1) {
      return clamp(snapPoint, 0, 1) * viewportHeight;
    }
    return snapPoint;
  }
  const trimmed = snapPoint.trim();
  if (trimmed.endsWith("px")) {
    const value = Number.parseFloat(trimmed);
    return Number.isFinite(value) ? value : null;
  }
  if (trimmed.endsWith("rem")) {
    const value = Number.parseFloat(trimmed);
    return Number.isFinite(value) ? value * rootFontSize : null;
  }
  return null;
}
function findClosestSnapPoint(height, points) {
  let closest = null;
  let closestDistance = Infinity;
  for (const point of points) {
    const distance = Math.abs(point.height - height);
    if (distance < closestDistance) {
      closestDistance = distance;
      closest = point;
    }
  }
  return closest;
}
function useDrawerSnapPoints() {
  const {
    store
  } = useDialogRootContext();
  const {
    snapPoints,
    activeSnapPoint,
    setActiveSnapPoint,
    popupHeight
  } = useDrawerRootContext();
  const viewportElement = store.useState("viewportElement");
  const [viewportHeight, setViewportHeight] = React125.useState(0);
  const [rootFontSize, setRootFontSize] = React125.useState(16);
  const measureViewportHeight = useStableCallback(() => {
    const doc = ownerDocument(viewportElement);
    const html = doc.documentElement;
    if (viewportElement) {
      setViewportHeight(viewportElement.offsetHeight);
    }
    if (!viewportElement) {
      setViewportHeight(html.clientHeight);
    }
    const fontSize = parseFloat(getComputedStyle(html).fontSize);
    if (Number.isFinite(fontSize)) {
      setRootFontSize(fontSize);
    }
  });
  useIsoLayoutEffect(() => {
    measureViewportHeight();
    if (!viewportElement || typeof ResizeObserver !== "function") {
      return void 0;
    }
    const resizeObserver = new ResizeObserver(measureViewportHeight);
    resizeObserver.observe(viewportElement);
    return () => {
      resizeObserver.disconnect();
    };
  }, [measureViewportHeight, viewportElement]);
  const resolvedSnapPoints = React125.useMemo(() => {
    if (!snapPoints || snapPoints.length === 0 || viewportHeight <= 0 || popupHeight <= 0) {
      return [];
    }
    const maxHeight = Math.min(popupHeight, viewportHeight);
    if (!Number.isFinite(maxHeight) || maxHeight <= 0) {
      return [];
    }
    const resolved = snapPoints.map((value) => {
      const resolvedHeight = resolveSnapPointValue(value, viewportHeight, rootFontSize);
      if (resolvedHeight === null || !Number.isFinite(resolvedHeight)) {
        return null;
      }
      const clampedHeight = clamp(resolvedHeight, 0, maxHeight);
      return {
        value,
        height: clampedHeight,
        offset: Math.max(0, popupHeight - clampedHeight)
      };
    }).filter((point) => Boolean(point));
    if (resolved.length <= 1) {
      return resolved;
    }
    const deduped = [];
    const seenHeights = [];
    for (let index = resolved.length - 1; index >= 0; index -= 1) {
      const point = resolved[index];
      const isDuplicate = seenHeights.some((height) => Math.abs(height - point.height) <= 1);
      if (isDuplicate) {
        continue;
      }
      seenHeights.push(point.height);
      deduped.push(point);
    }
    deduped.reverse();
    return deduped;
  }, [popupHeight, rootFontSize, snapPoints, viewportHeight]);
  const resolvedActiveSnapPoint = React125.useMemo(() => {
    if (activeSnapPoint === void 0) {
      return resolvedSnapPoints[0];
    }
    if (activeSnapPoint === null) {
      return void 0;
    }
    const exactMatch = resolvedSnapPoints.find((point) => Object.is(point.value, activeSnapPoint));
    if (exactMatch) {
      return exactMatch;
    }
    const maxHeight = Math.min(popupHeight, viewportHeight);
    const resolvedHeight = resolveSnapPointValue(activeSnapPoint, viewportHeight, rootFontSize);
    if (resolvedHeight === null || !Number.isFinite(resolvedHeight)) {
      return void 0;
    }
    const clampedHeight = clamp(resolvedHeight, 0, maxHeight);
    return findClosestSnapPoint(clampedHeight, resolvedSnapPoints) ?? void 0;
  }, [activeSnapPoint, popupHeight, resolvedSnapPoints, rootFontSize, viewportHeight]);
  return {
    snapPoints,
    activeSnapPoint,
    setActiveSnapPoint,
    popupHeight,
    viewportHeight,
    resolvedSnapPoints,
    activeSnapPointOffset: resolvedActiveSnapPoint?.offset ?? null
  };
}

// node_modules/@base-ui/react/esm/drawer/viewport/DrawerViewportContext.js
var React126 = __toESM(require_react(), 1);
var DrawerViewportContext = React126.createContext(null);
if (true) DrawerViewportContext.displayName = "DrawerViewportContext";
function useDrawerViewportContext(optional) {
  const context = React126.useContext(DrawerViewportContext);
  if (optional === false && context === null) {
    throw new Error(true ? "Base UI: DrawerViewportContext is missing. Drawer parts must be placed within <Drawer.Viewport>." : formatErrorMessage_default(92));
  }
  return context;
}

// node_modules/@base-ui/react/esm/drawer/popup/DrawerPopup.js
var import_jsx_runtime44 = __toESM(require_jsx_runtime(), 1);
var drawerSwipeVarsRegistered = false;
function removeCSSVariableInheritance() {
  if (drawerSwipeVarsRegistered) {
    return;
  }
  if (typeof CSS !== "undefined" && "registerProperty" in CSS) {
    [DrawerPopupCssVars.swipeMovementX, DrawerPopupCssVars.swipeMovementY, DrawerPopupCssVars.snapPointOffset].forEach((name) => {
      try {
        CSS.registerProperty({
          name,
          syntax: "<length>",
          inherits: false,
          initialValue: "0px"
        });
      } catch {
      }
    });
    [{
      name: DrawerBackdropCssVars.swipeProgress,
      initialValue: "0"
    }, {
      name: DrawerPopupCssVars.swipeStrength,
      initialValue: "1"
    }].forEach(({
      name,
      initialValue
    }) => {
      try {
        CSS.registerProperty({
          name,
          syntax: "<number>",
          inherits: false,
          initialValue
        });
      } catch {
      }
    });
  }
  drawerSwipeVarsRegistered = true;
}
var stateAttributesMapping15 = {
  ...popupStateMapping,
  ...transitionStatusMapping,
  expanded(value) {
    return value ? {
      [DrawerPopupDataAttributes.expanded]: ""
    } : null;
  },
  nestedDrawerOpen(value) {
    return value ? {
      [DrawerPopupDataAttributes.nestedDrawerOpen]: ""
    } : null;
  },
  nestedDrawerSwiping(value) {
    return value ? {
      [DrawerPopupDataAttributes.nestedDrawerSwiping]: ""
    } : null;
  },
  swipeDirection(value) {
    return value ? {
      [DrawerPopupDataAttributes.swipeDirection]: value
    } : null;
  },
  swiping(value) {
    return value ? {
      [DrawerPopupDataAttributes.swiping]: ""
    } : null;
  }
};
var DrawerPopup = React127.forwardRef(function DrawerPopup2(componentProps, forwardedRef) {
  const {
    className,
    finalFocus,
    initialFocus,
    render,
    ...elementProps
  } = componentProps;
  const {
    store
  } = useDialogRootContext();
  const {
    swipeDirection,
    frontmostHeight,
    hasNestedDrawer,
    nestedSwiping,
    nestedSwipeProgressStore,
    onPopupHeightChange,
    notifyParentFrontmostHeight,
    notifyParentHasNestedDrawer
  } = useDrawerRootContext();
  const descriptionElementId = store.useState("descriptionElementId");
  const disablePointerDismissal = store.useState("disablePointerDismissal");
  const floatingRootContext = store.useState("floatingRootContext");
  const rootPopupProps = store.useState("popupProps");
  const modal = store.useState("modal");
  const mounted = store.useState("mounted");
  const nested = store.useState("nested");
  const nestedOpenDialogCount = store.useState("nestedOpenDialogCount");
  const transitionStatus = store.useState("transitionStatus");
  const open = store.useState("open");
  const openMethod = store.useState("openMethod");
  const titleElementId = store.useState("titleElementId");
  const role = store.useState("role");
  const nestedDrawerOpen = nestedOpenDialogCount > 0;
  const swipe = useDrawerViewportContext(true);
  const swiping = swipe?.swiping ?? false;
  const swipeStrength = swipe?.swipeStrength ?? null;
  const {
    snapPoints,
    activeSnapPoint,
    activeSnapPointOffset
  } = useDrawerSnapPoints();
  useDialogPortalContext();
  const [popupHeight, setPopupHeight] = React127.useState(0);
  const popupHeightRef = React127.useRef(0);
  const measureHeight = useStableCallback(() => {
    const popupElement = store.context.popupRef.current;
    if (!popupElement) {
      return;
    }
    const offsetHeight = popupElement.offsetHeight;
    if (popupHeightRef.current > 0 && frontmostHeight > popupHeightRef.current && offsetHeight > popupHeightRef.current) {
      return;
    }
    const keepHeightWhileNested = popupHeightRef.current > 0 && hasNestedDrawer;
    if (keepHeightWhileNested) {
      const oldHeight = popupHeightRef.current;
      setPopupHeight(oldHeight);
      onPopupHeightChange(oldHeight);
      return;
    }
    const nextHeight = offsetHeight;
    if (nextHeight === popupHeightRef.current) {
      return;
    }
    popupHeightRef.current = nextHeight;
    setPopupHeight(nextHeight);
    onPopupHeightChange(nextHeight);
  });
  useIsoLayoutEffect(() => {
    if (!mounted) {
      popupHeightRef.current = 0;
      setPopupHeight(0);
      onPopupHeightChange(0);
      return void 0;
    }
    const popupElement = store.context.popupRef.current;
    if (!popupElement) {
      return void 0;
    }
    removeCSSVariableInheritance();
    measureHeight();
    if (typeof ResizeObserver !== "function") {
      return void 0;
    }
    const resizeObserver = new ResizeObserver(measureHeight);
    resizeObserver.observe(popupElement);
    return () => {
      resizeObserver.disconnect();
    };
  }, [measureHeight, mounted, nestedDrawerOpen, onPopupHeightChange, store.context.popupRef]);
  useIsoLayoutEffect(() => {
    const popupRef = store.context.popupRef;
    const syncNestedSwipeProgress = () => {
      const popupElement = popupRef.current;
      if (!popupElement) {
        return;
      }
      const progress = nestedSwipeProgressStore.getSnapshot();
      if (progress > 0) {
        popupElement.style.setProperty(DrawerBackdropCssVars.swipeProgress, `${progress}`);
      } else {
        popupElement.style.setProperty(DrawerBackdropCssVars.swipeProgress, "0");
      }
    };
    syncNestedSwipeProgress();
    const unsubscribe = nestedSwipeProgressStore.subscribe(syncNestedSwipeProgress);
    return () => {
      unsubscribe();
      const popupElement = popupRef.current;
      if (popupElement) {
        popupElement.style.setProperty(DrawerBackdropCssVars.swipeProgress, "0");
      }
    };
  }, [nestedSwipeProgressStore, store.context.popupRef]);
  React127.useEffect(() => {
    if (!open) {
      return void 0;
    }
    notifyParentFrontmostHeight?.(frontmostHeight);
    return () => {
      notifyParentFrontmostHeight?.(0);
    };
  }, [frontmostHeight, open, notifyParentFrontmostHeight]);
  React127.useEffect(() => {
    if (!notifyParentHasNestedDrawer) {
      return void 0;
    }
    const present = open || transitionStatus === "ending";
    notifyParentHasNestedDrawer(present);
    return () => {
      notifyParentHasNestedDrawer(false);
    };
  }, [notifyParentHasNestedDrawer, open, transitionStatus]);
  useOpenChangeComplete({
    open,
    ref: store.context.popupRef,
    onComplete() {
      if (open) {
        store.context.onOpenChangeComplete?.(true);
      }
    }
  });
  const resolvedInitialFocus = initialFocus === void 0 ? store.context.popupRef : initialFocus;
  const state = {
    open,
    nested,
    transitionStatus,
    expanded: activeSnapPoint === 1,
    nestedDrawerOpen,
    nestedDrawerSwiping: nestedSwiping,
    swipeDirection,
    swiping
  };
  let popupHeightCssVarValue;
  const shouldUseAutoHeight = !hasNestedDrawer && transitionStatus !== "ending";
  if (popupHeight && !shouldUseAutoHeight) {
    popupHeightCssVarValue = `${popupHeight}px`;
  }
  const shouldApplySnapPoints = snapPoints && snapPoints.length > 0 && (swipeDirection === "down" || swipeDirection === "up");
  let snapPointOffsetValue = null;
  if (shouldApplySnapPoints && activeSnapPointOffset !== null) {
    snapPointOffsetValue = swipeDirection === "up" ? -activeSnapPointOffset : activeSnapPointOffset;
  }
  let dragStyles = swipe ? swipe.getDragStyles() : EMPTY_OBJECT;
  if (shouldApplySnapPoints && swipeDirection === "down") {
    const baseOffset = activeSnapPointOffset ?? 0;
    const movementValue = Number.parseFloat(String(dragStyles[DrawerPopupCssVars.swipeMovementY] ?? 0));
    const nextOffset = Number.isFinite(movementValue) ? baseOffset + movementValue : baseOffset;
    const shouldDamp = nextOffset < 0;
    if (swiping && shouldDamp && Number.isFinite(movementValue)) {
      const overshoot = Math.abs(nextOffset);
      const dampedOffset = -Math.sqrt(overshoot);
      const dampedMovement = dampedOffset - baseOffset;
      dragStyles = {
        ...dragStyles,
        transform: void 0,
        [DrawerPopupCssVars.swipeMovementY]: `${dampedMovement}px`
      };
    } else {
      dragStyles = {
        ...dragStyles,
        transform: void 0
      };
    }
  }
  const element = useRenderElement("div", componentProps, {
    state,
    props: [rootPopupProps, {
      "aria-labelledby": titleElementId,
      "aria-describedby": descriptionElementId,
      role,
      tabIndex: -1,
      hidden: !mounted,
      onKeyDown(event) {
        if (COMPOSITE_KEYS.has(event.key)) {
          event.stopPropagation();
        }
      },
      style: {
        ...dragStyles,
        [DrawerBackdropCssVars.swipeProgress]: "0",
        [DrawerPopupCssVars.nestedDrawers]: nestedOpenDialogCount,
        [DrawerPopupCssVars.height]: popupHeightCssVarValue,
        [DrawerPopupCssVars.snapPointOffset]: typeof snapPointOffsetValue === "number" ? `${snapPointOffsetValue}px` : "0px",
        [DrawerPopupCssVars.frontmostHeight]: frontmostHeight ? `${frontmostHeight}px` : void 0,
        [DrawerPopupCssVars.swipeStrength]: typeof swipeStrength === "number" && Number.isFinite(swipeStrength) && swipeStrength > 0 ? `${swipeStrength}` : "1"
      }
    }, elementProps],
    ref: [forwardedRef, store.context.popupRef, store.useStateSetter("popupElement")],
    stateAttributesMapping: stateAttributesMapping15
  });
  return (0, import_jsx_runtime44.jsx)(FloatingFocusManager, {
    context: floatingRootContext,
    openInteractionType: openMethod,
    disabled: !mounted,
    closeOnFocusOut: !disablePointerDismissal,
    initialFocus: resolvedInitialFocus,
    returnFocus: finalFocus,
    modal: modal !== false,
    restoreFocus: "popup",
    children: element
  });
});
if (true) DrawerPopup.displayName = "DrawerPopup";

// node_modules/@base-ui/react/esm/drawer/portal/DrawerPortal.js
var DrawerPortal = DialogPortal;

// node_modules/@base-ui/react/esm/drawer/provider/DrawerProvider.js
var React128 = __toESM(require_react(), 1);
var import_jsx_runtime45 = __toESM(require_jsx_runtime(), 1);
function DrawerProvider(props) {
  const {
    children
  } = props;
  const [openById, setOpenById] = React128.useState(() => /* @__PURE__ */ new Map());
  const [visualStateStore] = React128.useState(createVisualStateStore);
  const setDrawerOpen = useStableCallback((drawerId, open) => {
    setOpenById((prev) => {
      const prevOpen = prev.get(drawerId);
      if (prevOpen === open) {
        return prev;
      }
      const next = new Map(prev);
      next.set(drawerId, open);
      return next;
    });
  });
  const removeDrawer = useStableCallback((drawerId) => {
    setOpenById((prev) => {
      if (!prev.has(drawerId)) {
        return prev;
      }
      const next = new Map(prev);
      next.delete(drawerId);
      return next;
    });
  });
  const active = React128.useMemo(() => {
    for (const open of openById.values()) {
      if (open) {
        return true;
      }
    }
    return false;
  }, [openById]);
  const contextValue = React128.useMemo(() => ({
    setDrawerOpen,
    removeDrawer,
    active,
    visualStateStore
  }), [active, removeDrawer, setDrawerOpen, visualStateStore]);
  return (0, import_jsx_runtime45.jsx)(DrawerProviderContext.Provider, {
    value: contextValue,
    children
  });
}
function createVisualStateStore() {
  let state = {
    swipeProgress: 0,
    frontmostHeight: 0
  };
  const listeners = /* @__PURE__ */ new Set();
  return {
    getSnapshot: () => state,
    set(nextState) {
      let nextSwipeProgress = state.swipeProgress;
      if (nextState.swipeProgress !== void 0) {
        nextSwipeProgress = Number.isFinite(nextState.swipeProgress) ? nextState.swipeProgress : 0;
      }
      let nextFrontmostHeight = state.frontmostHeight;
      if (nextState.frontmostHeight !== void 0) {
        nextFrontmostHeight = Number.isFinite(nextState.frontmostHeight) ? nextState.frontmostHeight : 0;
      }
      if (nextSwipeProgress === state.swipeProgress && nextFrontmostHeight === state.frontmostHeight) {
        return;
      }
      state = {
        swipeProgress: nextSwipeProgress,
        frontmostHeight: nextFrontmostHeight
      };
      listeners.forEach((listener) => {
        listener();
      });
    },
    subscribe(listener) {
      listeners.add(listener);
      return () => {
        listeners.delete(listener);
      };
    }
  };
}

// node_modules/@base-ui/react/esm/drawer/root/DrawerRoot.js
var React129 = __toESM(require_react(), 1);
var import_jsx_runtime46 = __toESM(require_jsx_runtime(), 1);
var _DrawerProviderReport;
var _DrawerProviderReport2;
function DrawerRoot(props) {
  const {
    children,
    open: openProp,
    defaultOpen = false,
    onOpenChange,
    onOpenChangeComplete,
    disablePointerDismissal = false,
    modal = true,
    actionsRef,
    handle,
    triggerId: triggerIdProp,
    defaultTriggerId: defaultTriggerIdProp = null,
    swipeDirection = "down",
    snapToSequentialPoints = false,
    snapPoints,
    snapPoint: snapPointProp,
    defaultSnapPoint,
    onSnapPointChange: onSnapPointChangeProp
  } = props;
  const onSnapPointChange = useStableCallback(onSnapPointChangeProp);
  const parentDrawerRootContext = useDrawerRootContext(true);
  const notifyParentSwipeProgressChange = parentDrawerRootContext?.onNestedSwipeProgressChange;
  const notifyParentFrontmostHeight = parentDrawerRootContext?.onNestedFrontmostHeightChange;
  const notifyParentSwipingChange = parentDrawerRootContext?.onNestedSwipingChange;
  const notifyParentHasNestedDrawer = parentDrawerRootContext?.onNestedDrawerPresenceChange;
  const [popupHeight, setPopupHeight] = React129.useState(0);
  const [frontmostHeight, setFrontmostHeight] = React129.useState(0);
  const [hasNestedDrawer, setHasNestedDrawer] = React129.useState(false);
  const [nestedSwiping, setNestedSwiping] = React129.useState(false);
  const [nestedSwipeProgressStore] = React129.useState(createNestedSwipeProgressStore);
  const resolvedDefaultSnapPoint = defaultSnapPoint !== void 0 ? defaultSnapPoint : snapPoints?.[0] ?? null;
  const isSnapPointControlled = snapPointProp !== void 0;
  const [activeSnapPoint, setActiveSnapPointUnwrapped] = useControlled({
    controlled: snapPointProp,
    default: resolvedDefaultSnapPoint,
    name: "Drawer",
    state: "snapPoint"
  });
  const isNestedDrawerOpenRef = React129.useRef(false);
  const setActiveSnapPoint = useStableCallback((nextSnapPoint, eventDetails) => {
    const resolvedEventDetails = eventDetails ?? createChangeEventDetails(reason_parts_exports.none);
    onSnapPointChange?.(nextSnapPoint, resolvedEventDetails);
    if (resolvedEventDetails.isCanceled) {
      return;
    }
    setActiveSnapPointUnwrapped(nextSnapPoint);
  });
  const resolvedActiveSnapPoint = React129.useMemo(() => {
    if (isSnapPointControlled) {
      return activeSnapPoint;
    }
    if (!snapPoints || snapPoints.length === 0) {
      return activeSnapPoint;
    }
    if (activeSnapPoint === null || !snapPoints.some((snapPoint) => Object.is(snapPoint, activeSnapPoint))) {
      return resolvedDefaultSnapPoint;
    }
    return activeSnapPoint;
  }, [activeSnapPoint, isSnapPointControlled, resolvedDefaultSnapPoint, snapPoints]);
  const onPopupHeightChange = useStableCallback((height) => {
    setPopupHeight(height);
    if (!isNestedDrawerOpenRef.current && height > 0) {
      setFrontmostHeight(height);
    }
  });
  const onNestedFrontmostHeightChange = useStableCallback((height) => {
    if (height > 0) {
      isNestedDrawerOpenRef.current = true;
      setFrontmostHeight(height);
      return;
    }
    isNestedDrawerOpenRef.current = false;
    if (popupHeight > 0) {
      setFrontmostHeight(popupHeight);
    }
  });
  const onNestedDrawerPresenceChange = useStableCallback((present) => {
    setHasNestedDrawer(present);
  });
  const onNestedSwipeProgressChange = useStableCallback((progress) => {
    nestedSwipeProgressStore.set(progress);
    notifyParentSwipeProgressChange?.(progress);
  });
  const onNestedSwipingChange = useStableCallback((swiping) => {
    setNestedSwiping(swiping);
    notifyParentSwipingChange?.(swiping);
  });
  const handleOpenChange = useStableCallback((nextOpen, eventDetails) => {
    onOpenChange?.(nextOpen, eventDetails);
    if (eventDetails.isCanceled) {
      return;
    }
    if (!nextOpen && snapPoints && snapPoints.length > 0) {
      setActiveSnapPoint(resolvedDefaultSnapPoint, createChangeEventDetails(eventDetails.reason, eventDetails.event, eventDetails.trigger));
    }
  });
  const contextValue = React129.useMemo(() => ({
    swipeDirection,
    snapToSequentialPoints,
    snapPoints,
    activeSnapPoint: resolvedActiveSnapPoint,
    setActiveSnapPoint,
    frontmostHeight,
    popupHeight,
    hasNestedDrawer,
    nestedSwiping,
    nestedSwipeProgressStore,
    onNestedDrawerPresenceChange,
    onPopupHeightChange,
    onNestedFrontmostHeightChange,
    onNestedSwipingChange,
    onNestedSwipeProgressChange,
    notifyParentFrontmostHeight,
    notifyParentSwipingChange,
    notifyParentSwipeProgressChange,
    notifyParentHasNestedDrawer
  }), [resolvedActiveSnapPoint, frontmostHeight, hasNestedDrawer, nestedSwiping, nestedSwipeProgressStore, notifyParentHasNestedDrawer, notifyParentSwipeProgressChange, notifyParentSwipingChange, notifyParentFrontmostHeight, onNestedDrawerPresenceChange, onNestedFrontmostHeightChange, onNestedSwipeProgressChange, onNestedSwipingChange, onPopupHeightChange, popupHeight, setActiveSnapPoint, snapPoints, snapToSequentialPoints, swipeDirection]);
  const resolvedChildren = typeof children === "function" ? (payload) => (0, import_jsx_runtime46.jsxs)(React129.Fragment, {
    children: [_DrawerProviderReport || (_DrawerProviderReport = (0, import_jsx_runtime46.jsx)(DrawerProviderReporter, {})), children(payload)]
  }) : (0, import_jsx_runtime46.jsxs)(React129.Fragment, {
    children: [_DrawerProviderReport2 || (_DrawerProviderReport2 = (0, import_jsx_runtime46.jsx)(DrawerProviderReporter, {})), children]
  });
  return (0, import_jsx_runtime46.jsx)(DrawerRootContext.Provider, {
    value: contextValue,
    children: (0, import_jsx_runtime46.jsx)(index_parts_exports13.Root, {
      open: openProp,
      defaultOpen,
      onOpenChange: handleOpenChange,
      onOpenChangeComplete,
      disablePointerDismissal,
      modal,
      actionsRef,
      handle,
      triggerId: triggerIdProp,
      defaultTriggerId: defaultTriggerIdProp,
      children: resolvedChildren
    })
  });
}
function createNestedSwipeProgressStore() {
  let progress = 0;
  const listeners = /* @__PURE__ */ new Set();
  return {
    getSnapshot: () => progress,
    set(nextProgress) {
      const resolved = Number.isFinite(nextProgress) ? nextProgress : 0;
      if (resolved === progress) {
        return;
      }
      progress = resolved;
      listeners.forEach((listener) => {
        listener();
      });
    },
    subscribe(listener) {
      listeners.add(listener);
      return () => {
        listeners.delete(listener);
      };
    }
  };
}
function DrawerProviderReporter() {
  const drawerId = useId();
  const providerContext = useDrawerProviderContext(true);
  const dialogRootContext = useDialogRootContext(false);
  const open = dialogRootContext.store.useState("open");
  const nestedOpenDialogCount = dialogRootContext.store.useState("nestedOpenDialogCount");
  const popupElement = dialogRootContext.store.useState("popupElement");
  const isTopmost = nestedOpenDialogCount === 0;
  React129.useEffect(() => {
    if (!providerContext || drawerId == null) {
      return void 0;
    }
    return () => {
      providerContext.removeDrawer(drawerId);
    };
  }, [drawerId, providerContext]);
  React129.useEffect(() => {
    if (drawerId == null) {
      return;
    }
    providerContext?.setDrawerOpen(drawerId, open);
  }, [drawerId, open, providerContext]);
  React129.useEffect(() => {
    if (!open || !isTopmost || !isAndroid) {
      return void 0;
    }
    const win = getWindow(popupElement);
    const CloseWatcherCtor = win.CloseWatcher;
    if (!CloseWatcherCtor) {
      return void 0;
    }
    function handleCloseWatcher(event) {
      if (!dialogRootContext.store.select("open")) {
        return;
      }
      dialogRootContext.store.setOpen(false, createChangeEventDetails(reason_parts_exports.closeWatcher, event));
    }
    const closeWatcher = new CloseWatcherCtor();
    closeWatcher.addEventListener("close", handleCloseWatcher);
    return () => {
      closeWatcher.removeEventListener("close", handleCloseWatcher);
      closeWatcher.destroy();
    };
  }, [dialogRootContext.store, isTopmost, open, popupElement]);
  return null;
}

// node_modules/@base-ui/react/esm/drawer/swipe-area/DrawerSwipeArea.js
var React131 = __toESM(require_react(), 1);

// node_modules/@base-ui/react/esm/utils/useSwipeDismiss.js
var React130 = __toESM(require_react(), 1);

// node_modules/@base-ui/react/esm/utils/scrollable.js
function isScrollable(element, axis) {
  const style = getComputedStyle2(element);
  if (axis === "vertical") {
    const overflowY = style.overflowY;
    return (overflowY === "auto" || overflowY === "scroll") && element.scrollHeight > element.clientHeight;
  }
  const overflowX = style.overflowX;
  return (overflowX === "auto" || overflowX === "scroll") && element.scrollWidth > element.clientWidth;
}
function hasScrollableAncestor(target, root, axes) {
  let node = target;
  while (node && node !== root) {
    for (const axis of axes) {
      if (isScrollable(node, axis)) {
        return true;
      }
    }
    node = node.parentElement;
  }
  return false;
}
function findScrollableTouchTarget(target, root, axis = "vertical") {
  let node = isHTMLElement(target) ? target : null;
  while (node && node !== root) {
    if (isScrollable(node, axis)) {
      return node;
    }
    node = node.parentElement;
  }
  return isScrollable(root, axis) ? root : null;
}

// node_modules/@base-ui/react/esm/utils/getElementAtPoint.js
function getElementAtPoint(doc, x, y) {
  return typeof doc?.elementFromPoint === "function" ? doc.elementFromPoint(x, y) : null;
}

// node_modules/@base-ui/react/esm/utils/useSwipeDismiss.js
var DEFAULT_SWIPE_THRESHOLD = 40;
var REVERSE_CANCEL_THRESHOLD = 10;
var MIN_DRAG_THRESHOLD = 1;
var MIN_VELOCITY_DURATION_MS = 50;
var MIN_RELEASE_VELOCITY_DURATION_MS = 16;
var MAX_RELEASE_VELOCITY_AGE_MS = 80;
var DEFAULT_IGNORE_SELECTOR = 'button,a,input,select,textarea,label,[role="button"]';
function getDisplacement(direction, deltaX, deltaY) {
  switch (direction) {
    case "up":
      return -deltaY;
    case "down":
      return deltaY;
    case "left":
      return -deltaX;
    case "right":
      return deltaX;
    default:
      return 0;
  }
}
function getElementTransform(element) {
  const computedStyle = window.getComputedStyle(element);
  const transform = computedStyle.transform;
  let translateX = 0;
  let translateY = 0;
  let scale = 1;
  if (transform && transform !== "none") {
    const matrix = transform.match(/matrix(?:3d)?\(([^)]+)\)/);
    if (matrix) {
      const values = matrix[1].split(", ").map(parseFloat);
      if (values.length === 6) {
        translateX = values[4];
        translateY = values[5];
        scale = Math.sqrt(values[0] * values[0] + values[1] * values[1]);
      } else if (values.length === 16) {
        translateX = values[12];
        translateY = values[13];
        scale = values[0];
      }
    }
  }
  return {
    x: translateX,
    y: translateY,
    scale
  };
}
function getValidTimeStamp(timeStamp) {
  return Number.isFinite(timeStamp) && timeStamp > 0 ? timeStamp : null;
}
function hasPrimaryMouseButton(buttons) {
  return buttons % 2 === 1;
}
function safelyChangePointerCapture(element, pointerId, method) {
  const pointerCaptureMethod = element[method];
  if (typeof pointerCaptureMethod !== "function") {
    return;
  }
  try {
    pointerCaptureMethod.call(element, pointerId);
  } catch (error2) {
    if (error2 && typeof error2 === "object" && "name" in error2 && error2.name === "NotFoundError") {
      return;
    }
    throw error2;
  }
}
function useSwipeDismiss(options) {
  const {
    enabled,
    directions,
    elementRef,
    movementCssVars,
    canStart,
    ignoreSelectorWhenTouch = true,
    ignoreScrollableAncestors = false,
    swipeThreshold: swipeThresholdProp,
    onDismiss,
    onProgress,
    onSwipeStart,
    onRelease,
    onSwipingChange,
    trackDrag = true
  } = options;
  const ignoreSelector = DEFAULT_IGNORE_SELECTOR;
  const primaryDirection = directions.length === 1 ? directions[0] : void 0;
  const swipeThresholdDefault = Math.max(0, typeof swipeThresholdProp === "number" ? swipeThresholdProp : DEFAULT_SWIPE_THRESHOLD);
  const allowLeft = directions.includes("left");
  const allowRight = directions.includes("right");
  const allowUp = directions.includes("up");
  const allowDown = directions.includes("down");
  const hasHorizontal = allowLeft || allowRight;
  const hasVertical = allowUp || allowDown;
  const scrollAxes = React130.useMemo(() => {
    const axes = [];
    if (hasVertical) {
      axes.push("vertical");
    }
    if (hasHorizontal) {
      axes.push("horizontal");
    }
    return axes;
  }, [hasHorizontal, hasVertical]);
  const [currentSwipeDirection, setCurrentSwipeDirection] = React130.useState(void 0);
  const [isSwiping, setIsSwiping] = React130.useState(false);
  const [isRealSwipe, setIsRealSwipe] = React130.useState(false);
  const [dragDismissed, setDragDismissed] = React130.useState(false);
  const [dragOffset, setDragOffset] = React130.useState({
    x: 0,
    y: 0
  });
  const [initialTransform, setInitialTransform] = React130.useState({
    x: 0,
    y: 0,
    scale: 1
  });
  const [lockedDirection, setLockedDirection] = React130.useState(null);
  const dragStartPosRef = React130.useRef({
    x: 0,
    y: 0
  });
  const dragOffsetRef = React130.useRef({
    x: 0,
    y: 0
  });
  const lastMovePosRef = React130.useRef(null);
  const initialTransformRef = React130.useRef({
    x: 0,
    y: 0,
    scale: 1
  });
  const intendedSwipeDirectionRef = React130.useRef(void 0);
  const maxSwipeDisplacementRef = React130.useRef(0);
  const cancelledSwipeRef = React130.useRef(false);
  const swipeCancelBaselineRef = React130.useRef({
    x: 0,
    y: 0
  });
  const isFirstPointerMoveRef = React130.useRef(false);
  const pendingSwipeRef = React130.useRef(false);
  const pendingSwipeStartPosRef = React130.useRef(null);
  const swipeFromScrollableRef = React130.useRef(false);
  const sawPrimaryButtonsOnMoveRef = React130.useRef(false);
  const elementSizeRef = React130.useRef({
    width: 0,
    height: 0
  });
  const swipeProgressRef = React130.useRef(0);
  const swipeThresholdRef = React130.useRef(swipeThresholdDefault);
  const swipeStartTimeRef = React130.useRef(null);
  const lastDragSampleRef = React130.useRef(null);
  const lastDragVelocityRef = React130.useRef({
    x: 0,
    y: 0
  });
  const lastProgressDetailsRef = React130.useRef(null);
  const isSwipingRef = React130.useRef(false);
  const setSwiping = useStableCallback((nextSwiping) => {
    if (isSwipingRef.current === nextSwiping) {
      return;
    }
    isSwipingRef.current = nextSwiping;
    setIsSwiping(nextSwiping);
    onSwipingChange?.(nextSwiping);
  });
  function resolveSwipeThreshold(direction) {
    if (!direction) {
      return;
    }
    if (typeof swipeThresholdProp !== "function") {
      swipeThresholdRef.current = swipeThresholdDefault;
      return;
    }
    const element = elementRef.current;
    if (!element) {
      return;
    }
    const value = swipeThresholdProp({
      element,
      direction
    });
    swipeThresholdRef.current = Math.max(0, value);
  }
  const updateSwipeProgress = useStableCallback((progress, details) => {
    const nextProgress = Number.isFinite(progress) ? clamp(progress, 0, 1) : 0;
    const progressChanged = nextProgress !== swipeProgressRef.current;
    let detailsChanged = false;
    if (details) {
      const lastDetails = lastProgressDetailsRef.current;
      detailsChanged = !lastDetails || lastDetails.deltaX !== details.deltaX || lastDetails.deltaY !== details.deltaY || lastDetails.direction !== details.direction;
    }
    if (!progressChanged && !detailsChanged) {
      return;
    }
    swipeProgressRef.current = nextProgress;
    if (details) {
      lastProgressDetailsRef.current = details;
    } else if (progressChanged) {
      lastProgressDetailsRef.current = null;
    }
    onProgress?.(nextProgress, details);
  });
  function recordDragSample(offset, timeStamp) {
    if (timeStamp === null) {
      return;
    }
    const lastSample = lastDragSampleRef.current;
    if (lastSample && timeStamp > lastSample.time) {
      const durationMs = Math.max(timeStamp - lastSample.time, MIN_RELEASE_VELOCITY_DURATION_MS);
      lastDragVelocityRef.current = {
        x: (offset.x - lastSample.x) / durationMs,
        y: (offset.y - lastSample.y) / durationMs
      };
    }
    lastDragSampleRef.current = {
      x: offset.x,
      y: offset.y,
      time: timeStamp
    };
  }
  const reset = React130.useCallback(() => {
    setCurrentSwipeDirection(void 0);
    setSwiping(false);
    setIsRealSwipe(false);
    setDragDismissed(false);
    setDragOffset({
      x: 0,
      y: 0
    });
    setInitialTransform({
      x: 0,
      y: 0,
      scale: 1
    });
    setLockedDirection(null);
    updateSwipeProgress(0);
    swipeThresholdRef.current = swipeThresholdDefault;
    dragStartPosRef.current = {
      x: 0,
      y: 0
    };
    dragOffsetRef.current = {
      x: 0,
      y: 0
    };
    initialTransformRef.current = {
      x: 0,
      y: 0,
      scale: 1
    };
    intendedSwipeDirectionRef.current = void 0;
    maxSwipeDisplacementRef.current = 0;
    cancelledSwipeRef.current = false;
    swipeCancelBaselineRef.current = {
      x: 0,
      y: 0
    };
    isFirstPointerMoveRef.current = false;
    lastMovePosRef.current = null;
    pendingSwipeRef.current = false;
    pendingSwipeStartPosRef.current = null;
    swipeFromScrollableRef.current = false;
    sawPrimaryButtonsOnMoveRef.current = false;
    elementSizeRef.current = {
      width: 0,
      height: 0
    };
    swipeStartTimeRef.current = null;
    lastDragSampleRef.current = null;
    lastDragVelocityRef.current = {
      x: 0,
      y: 0
    };
    lastProgressDetailsRef.current = null;
  }, [setSwiping, swipeThresholdDefault, updateSwipeProgress]);
  React130.useEffect(() => {
    if (typeof swipeThresholdProp !== "function") {
      swipeThresholdRef.current = swipeThresholdDefault;
    }
  }, [swipeThresholdDefault, swipeThresholdProp]);
  function getPrimaryPointerPosition(event) {
    if ("touches" in event) {
      const touch = event.touches[0];
      return touch ? {
        x: touch.clientX,
        y: touch.clientY
      } : null;
    }
    return {
      x: event.clientX,
      y: event.clientY
    };
  }
  function isTouchLikeEvent(event) {
    if ("touches" in event) {
      return true;
    }
    return event.pointerType === "touch";
  }
  function getTargetAtPoint(position, nativeEvent) {
    const doc = ownerDocument(elementRef.current);
    const elementAtPoint = getElementAtPoint(doc, position.x, position.y);
    const target = elementAtPoint ?? getTarget(nativeEvent);
    return target;
  }
  function findGestureScrollableTouchTarget(target, root) {
    if (hasHorizontal && !hasVertical) {
      return findScrollableTouchTarget(target, root, "horizontal");
    }
    if (hasVertical && !hasHorizontal) {
      return findScrollableTouchTarget(target, root, "vertical");
    }
    return findScrollableTouchTarget(target, root, "vertical") ?? findScrollableTouchTarget(target, root, "horizontal");
  }
  function startSwipeAtPosition(event, position, startOptions) {
    swipeFromScrollableRef.current = false;
    const touchLike = isTouchLikeEvent(event);
    const target = getTargetAtPoint(position, event.nativeEvent);
    const doc = ownerDocument(elementRef.current);
    const body = doc.body;
    const scrollableTarget = touchLike && body ? findGestureScrollableTouchTarget(target, body) : null;
    const ignoreScrollableTarget = startOptions?.ignoreScrollableTarget ?? false;
    if (scrollableTarget && !ignoreScrollableTarget) {
      return false;
    }
    swipeFromScrollableRef.current = Boolean(scrollableTarget && ignoreScrollableTarget);
    const isInteractiveElement = target ? target.closest(ignoreSelector) : false;
    if (isInteractiveElement && (!touchLike || ignoreSelectorWhenTouch)) {
      return false;
    }
    const element = elementRef.current;
    if (ignoreScrollableAncestors && element && target && scrollAxes.length > 0) {
      const ignoreAncestors = startOptions?.ignoreScrollableAncestors ?? false;
      if (!ignoreAncestors && hasScrollableAncestor(target, element, scrollAxes)) {
        return false;
      }
    }
    cancelledSwipeRef.current = false;
    intendedSwipeDirectionRef.current = void 0;
    maxSwipeDisplacementRef.current = 0;
    dragStartPosRef.current = position;
    swipeStartTimeRef.current = getValidTimeStamp(event.timeStamp);
    swipeCancelBaselineRef.current = position;
    lastMovePosRef.current = position;
    if (element) {
      elementSizeRef.current = {
        width: element.offsetWidth,
        height: element.offsetHeight
      };
      resolveSwipeThreshold(primaryDirection);
      const transform = getElementTransform(element);
      initialTransformRef.current = transform;
      dragOffsetRef.current = {
        x: transform.x,
        y: transform.y
      };
      setInitialTransform(transform);
      setDragOffset({
        x: transform.x,
        y: transform.y
      });
      recordDragSample({
        x: transform.x,
        y: transform.y
      }, swipeStartTimeRef.current);
      if (!("touches" in event)) {
        safelyChangePointerCapture(element, event.pointerId, "setPointerCapture");
      }
    }
    onSwipeStart?.(event.nativeEvent);
    setSwiping(true);
    setIsRealSwipe(false);
    setLockedDirection(null);
    isFirstPointerMoveRef.current = true;
    updateSwipeProgress(0);
    return true;
  }
  function resetPendingSwipeState() {
    clearPendingSwipeStartState();
    swipeFromScrollableRef.current = false;
    lastMovePosRef.current = null;
  }
  function clearPendingSwipeStartState() {
    pendingSwipeRef.current = false;
    pendingSwipeStartPosRef.current = null;
  }
  function cancelSwipeInteraction(event) {
    resetPendingSwipeState();
    if (!isSwipingRef.current) {
      return;
    }
    setSwiping(false);
    setIsRealSwipe(false);
    setLockedDirection(null);
    const resolvedInitialTransform = trackDrag ? initialTransform : initialTransformRef.current;
    dragOffsetRef.current = {
      x: resolvedInitialTransform.x,
      y: resolvedInitialTransform.y
    };
    setDragOffset({
      x: resolvedInitialTransform.x,
      y: resolvedInitialTransform.y
    });
    setCurrentSwipeDirection(void 0);
    sawPrimaryButtonsOnMoveRef.current = false;
    const element = elementRef.current;
    if (element) {
      safelyChangePointerCapture(element, event.pointerId, "releasePointerCapture");
    }
    updateSwipeProgress(0, {
      deltaX: 0,
      deltaY: 0,
      direction: void 0
    });
  }
  function applyDirectionalDamping(deltaX, deltaY) {
    const exponent = (value) => value >= 0 ? value ** 0.5 : -(Math.abs(value) ** 0.5);
    const dampAxis = (delta, allowNegative, allowPositive) => {
      if (!allowNegative && delta < 0) {
        return exponent(delta);
      }
      if (!allowPositive && delta > 0) {
        return exponent(delta);
      }
      return delta;
    };
    const newDeltaX = hasHorizontal ? dampAxis(deltaX, allowLeft, allowRight) : exponent(deltaX);
    const newDeltaY = hasVertical ? dampAxis(deltaY, allowUp, allowDown) : exponent(deltaY);
    return {
      x: newDeltaX,
      y: newDeltaY
    };
  }
  function canSwipeFromScrollEdgeOnPendingMove(scrollTarget, deltaX, deltaY) {
    const absDeltaX = Math.abs(deltaX);
    const absDeltaY = Math.abs(deltaY);
    const useVerticalAxis = hasVertical && deltaY !== 0 && (!hasHorizontal || absDeltaY >= absDeltaX);
    if (useVerticalAxis) {
      const maxScrollTop = Math.max(0, scrollTarget.scrollHeight - scrollTarget.clientHeight);
      const atTop = scrollTarget.scrollTop <= 0;
      const atBottom = scrollTarget.scrollTop >= maxScrollTop;
      const movingDown = deltaY > 0;
      const movingUp = deltaY < 0;
      const canSwipeDown = movingDown && atTop && allowDown;
      const canSwipeUp = movingUp && atBottom && allowUp;
      return canSwipeDown || canSwipeUp;
    }
    const useHorizontalAxis = hasHorizontal && deltaX !== 0 && (!hasVertical || absDeltaX > absDeltaY);
    if (useHorizontalAxis) {
      const maxScrollLeft = Math.max(0, scrollTarget.scrollWidth - scrollTarget.clientWidth);
      const atLeft = scrollTarget.scrollLeft <= 0;
      const atRight = scrollTarget.scrollLeft >= maxScrollLeft;
      const movingRight = deltaX > 0;
      const movingLeft = deltaX < 0;
      const canSwipeRight = movingRight && atLeft && allowRight;
      const canSwipeLeft = movingLeft && atRight && allowLeft;
      return canSwipeRight || canSwipeLeft;
    }
    return null;
  }
  const handleStart = useStableCallback((event) => {
    if (!enabled) {
      return;
    }
    if (event.defaultPrevented || event.nativeEvent.defaultPrevented) {
      return;
    }
    if (!("touches" in event) && event.button !== 0) {
      return;
    }
    const startPos = getPrimaryPointerPosition(event);
    if (!startPos) {
      return;
    }
    pendingSwipeRef.current = true;
    pendingSwipeStartPosRef.current = startPos;
    swipeFromScrollableRef.current = false;
    sawPrimaryButtonsOnMoveRef.current = false;
    const allowedToStart = canStart ? canStart(startPos, {
      nativeEvent: event.nativeEvent,
      direction: primaryDirection
    }) : true;
    if (!allowedToStart) {
      return;
    }
    if (startSwipeAtPosition(event, startPos)) {
      clearPendingSwipeStartState();
    }
  });
  function handleMoveCore(event, position, movement) {
    if (!enabled || !isSwipingRef.current) {
      return;
    }
    const target = getTarget(event.nativeEvent);
    if (isTouchLikeEvent(event) && !swipeFromScrollableRef.current) {
      const boundaryElement = event.currentTarget;
      if (findGestureScrollableTouchTarget(target, boundaryElement)) {
        return;
      }
    }
    if (!("touches" in event)) {
      event.preventDefault();
    }
    if (isFirstPointerMoveRef.current) {
      dragStartPosRef.current = position;
      const moveTime = getValidTimeStamp(event.timeStamp);
      if (moveTime !== null) {
        swipeStartTimeRef.current = moveTime;
      }
      isFirstPointerMoveRef.current = false;
    }
    const clientX = position.x;
    const clientY = position.y;
    const movementX = movement.x;
    const movementY = movement.y;
    if (movementY < 0 && clientY > swipeCancelBaselineRef.current.y || movementY > 0 && clientY < swipeCancelBaselineRef.current.y) {
      swipeCancelBaselineRef.current = {
        x: swipeCancelBaselineRef.current.x,
        y: clientY
      };
    }
    if (movementX < 0 && clientX > swipeCancelBaselineRef.current.x || movementX > 0 && clientX < swipeCancelBaselineRef.current.x) {
      swipeCancelBaselineRef.current = {
        x: clientX,
        y: swipeCancelBaselineRef.current.y
      };
    }
    const deltaX = clientX - dragStartPosRef.current.x;
    const deltaY = clientY - dragStartPosRef.current.y;
    const cancelDeltaY = clientY - swipeCancelBaselineRef.current.y;
    const cancelDeltaX = clientX - swipeCancelBaselineRef.current.x;
    if (!isRealSwipe) {
      const movementDistance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
      if (movementDistance >= MIN_DRAG_THRESHOLD) {
        setIsRealSwipe(true);
        if (lockedDirection === null) {
          if (hasHorizontal && hasVertical) {
            const absX = Math.abs(deltaX);
            const absY = Math.abs(deltaY);
            setLockedDirection(absX > absY ? "horizontal" : "vertical");
          }
        }
      }
    }
    let candidate;
    if (!intendedSwipeDirectionRef.current) {
      if (lockedDirection === "vertical") {
        if (deltaY > 0) {
          candidate = "down";
        } else if (deltaY < 0) {
          candidate = "up";
        }
      } else if (lockedDirection === "horizontal") {
        if (deltaX > 0) {
          candidate = "right";
        } else if (deltaX < 0) {
          candidate = "left";
        }
      } else if (Math.abs(deltaX) >= Math.abs(deltaY)) {
        candidate = deltaX > 0 ? "right" : "left";
      } else {
        candidate = deltaY > 0 ? "down" : "up";
      }
      if (candidate) {
        const isAllowed = candidate === "left" && allowLeft || candidate === "right" && allowRight || candidate === "up" && allowUp || candidate === "down" && allowDown;
        if (isAllowed) {
          intendedSwipeDirectionRef.current = candidate;
          maxSwipeDisplacementRef.current = getDisplacement(candidate, deltaX, deltaY);
          setCurrentSwipeDirection(candidate);
          resolveSwipeThreshold(candidate);
        }
      }
    } else {
      const direction = intendedSwipeDirectionRef.current;
      const currentDisplacement = getDisplacement(direction, cancelDeltaX, cancelDeltaY);
      if (currentDisplacement > swipeThresholdRef.current) {
        cancelledSwipeRef.current = false;
        setCurrentSwipeDirection(direction);
      } else if (!(allowLeft && allowRight) && !(allowUp && allowDown) && maxSwipeDisplacementRef.current - currentDisplacement >= REVERSE_CANCEL_THRESHOLD) {
        cancelledSwipeRef.current = true;
      }
    }
    const dampedDelta = applyDirectionalDamping(deltaX, deltaY);
    let newOffsetX = initialTransformRef.current.x;
    let newOffsetY = initialTransformRef.current.y;
    if (lockedDirection === "horizontal") {
      if (hasHorizontal) {
        newOffsetX += dampedDelta.x;
      }
    } else if (lockedDirection === "vertical") {
      if (hasVertical) {
        newOffsetY += dampedDelta.y;
      }
    } else {
      if (hasHorizontal) {
        newOffsetX += dampedDelta.x;
      }
      if (hasVertical) {
        newOffsetY += dampedDelta.y;
      }
    }
    dragOffsetRef.current = {
      x: newOffsetX,
      y: newOffsetY
    };
    if (trackDrag) {
      setDragOffset({
        x: newOffsetX,
        y: newOffsetY
      });
    }
    recordDragSample({
      x: newOffsetX,
      y: newOffsetY
    }, getValidTimeStamp(event.timeStamp));
    const dragDeltaX = newOffsetX - initialTransformRef.current.x;
    const dragDeltaY = newOffsetY - initialTransformRef.current.y;
    const swipeDirectionDetails = intendedSwipeDirectionRef.current;
    const progressDirection = primaryDirection ?? intendedSwipeDirectionRef.current;
    if (!progressDirection) {
      updateSwipeProgress(0, {
        deltaX: dragDeltaX,
        deltaY: dragDeltaY,
        direction: swipeDirectionDetails
      });
      return;
    }
    const size = progressDirection === "left" || progressDirection === "right" ? elementSizeRef.current.width : elementSizeRef.current.height;
    const scale = initialTransformRef.current.scale || 1;
    if (size <= 0 || scale <= 0) {
      updateSwipeProgress(0, {
        deltaX: dragDeltaX,
        deltaY: dragDeltaY,
        direction: swipeDirectionDetails
      });
      return;
    }
    const progressDisplacement = getDisplacement(progressDirection, newOffsetX - initialTransformRef.current.x, newOffsetY - initialTransformRef.current.y);
    if (progressDisplacement <= 0) {
      updateSwipeProgress(0, {
        deltaX: dragDeltaX,
        deltaY: dragDeltaY,
        direction: swipeDirectionDetails
      });
      return;
    }
    updateSwipeProgress(progressDisplacement / (size * scale), {
      deltaX: dragDeltaX,
      deltaY: dragDeltaY,
      direction: swipeDirectionDetails
    });
  }
  const handleMove = useStableCallback((event) => {
    const currentPos = getPrimaryPointerPosition(event);
    if (!currentPos) {
      return;
    }
    if (!("touches" in event)) {
      const hasPrimaryButton = hasPrimaryMouseButton(event.buttons);
      if (hasPrimaryButton) {
        sawPrimaryButtonsOnMoveRef.current = true;
      }
      const lostPrimaryButtonDuringSwipe = event.buttons === 0 && sawPrimaryButtonsOnMoveRef.current;
      if (event.buttons !== 0 && !hasPrimaryButton || lostPrimaryButtonDuringSwipe) {
        cancelSwipeInteraction(event);
        return;
      }
    }
    if (!isSwiping && pendingSwipeRef.current) {
      if (!isTouchLikeEvent(event) && (event.defaultPrevented || event.nativeEvent.defaultPrevented)) {
        resetPendingSwipeState();
        return;
      }
      const allowedToStart = canStart ? canStart(currentPos, {
        nativeEvent: event.nativeEvent,
        direction: primaryDirection
      }) : true;
      if (allowedToStart) {
        const pendingStartPos = pendingSwipeStartPosRef.current;
        let ignoreScrollableOnStart = false;
        if (isTouchLikeEvent(event)) {
          const element = elementRef.current;
          if (pendingStartPos && element) {
            const target = getTargetAtPoint(currentPos, event.nativeEvent);
            const doc = ownerDocument(element);
            const body = doc.body;
            const scrollTarget = body ? findGestureScrollableTouchTarget(target, body) : null;
            if (scrollTarget && (contains(element, scrollTarget) || contains(scrollTarget, element))) {
              const deltaX = currentPos.x - pendingStartPos.x;
              const deltaY = currentPos.y - pendingStartPos.y;
              const canSwipeFromEdge = canSwipeFromScrollEdgeOnPendingMove(scrollTarget, deltaX, deltaY);
              if (canSwipeFromEdge === false) {
                return;
              }
              if (canSwipeFromEdge === true) {
                ignoreScrollableOnStart = true;
              }
            }
          }
        }
        const started = startSwipeAtPosition(event, currentPos, {
          ignoreScrollableTarget: ignoreScrollableOnStart,
          ignoreScrollableAncestors: ignoreScrollableOnStart
        });
        if (started) {
          if (pendingStartPos && ignoreScrollableOnStart) {
            clearPendingSwipeStartState();
            dragStartPosRef.current = pendingStartPos;
            swipeCancelBaselineRef.current = pendingStartPos;
            lastMovePosRef.current = pendingStartPos;
            isFirstPointerMoveRef.current = false;
          } else {
            clearPendingSwipeStartState();
            swipeFromScrollableRef.current = false;
          }
        }
      }
    }
    const previousPos = lastMovePosRef.current;
    const movement = previousPos === null ? {
      x: 0,
      y: 0
    } : {
      x: currentPos.x - previousPos.x,
      y: currentPos.y - previousPos.y
    };
    lastMovePosRef.current = currentPos;
    handleMoveCore(event, currentPos, movement);
  });
  const handleEnd = useStableCallback((event) => {
    if (!enabled) {
      return;
    }
    const resolvedDragOffset = dragOffsetRef.current;
    const resolvedInitialTransform = initialTransformRef.current;
    const releaseDeltaX = resolvedDragOffset.x - resolvedInitialTransform.x;
    const releaseDeltaY = resolvedDragOffset.y - resolvedInitialTransform.y;
    const progressDetails = {
      deltaX: releaseDeltaX,
      deltaY: releaseDeltaY,
      direction: currentSwipeDirection ?? intendedSwipeDirectionRef.current
    };
    if (!isSwipingRef.current) {
      resetPendingSwipeState();
      updateSwipeProgress(0, progressDetails);
      return;
    }
    setSwiping(false);
    setIsRealSwipe(false);
    setLockedDirection(null);
    resetPendingSwipeState();
    sawPrimaryButtonsOnMoveRef.current = false;
    const element = elementRef.current;
    if (element) {
      if (!("touches" in event)) {
        safelyChangePointerCapture(element, event.pointerId, "releasePointerCapture");
      }
    }
    const deltaX = releaseDeltaX;
    const deltaY = releaseDeltaY;
    const startTime = swipeStartTimeRef.current;
    const endTime = getValidTimeStamp(event.timeStamp);
    const durationMs = startTime !== null && endTime !== null && endTime > startTime ? endTime - startTime : 0;
    const velocityDurationMs = durationMs > 0 ? Math.max(durationMs, MIN_VELOCITY_DURATION_MS) : 0;
    const velocityX = velocityDurationMs > 0 ? deltaX / velocityDurationMs : 0;
    const velocityY = velocityDurationMs > 0 ? deltaY / velocityDurationMs : 0;
    let releaseVelocityX = lastDragVelocityRef.current.x;
    let releaseVelocityY = lastDragVelocityRef.current.y;
    const lastSample = lastDragSampleRef.current;
    if (lastSample && endTime !== null && endTime >= lastSample.time) {
      const ageMs = endTime - lastSample.time;
      if (ageMs <= MAX_RELEASE_VELOCITY_AGE_MS) {
        const sampleDurationMs = Math.max(ageMs, MIN_RELEASE_VELOCITY_DURATION_MS);
        const deltaFromLastSampleX = resolvedDragOffset.x - lastSample.x;
        const deltaFromLastSampleY = resolvedDragOffset.y - lastSample.y;
        const sampleVelocityX = deltaFromLastSampleX / sampleDurationMs;
        const sampleVelocityY = deltaFromLastSampleY / sampleDurationMs;
        if (sampleVelocityX !== 0) {
          releaseVelocityX = sampleVelocityX;
        }
        if (sampleVelocityY !== 0) {
          releaseVelocityY = sampleVelocityY;
        }
      } else {
        releaseVelocityX = 0;
        releaseVelocityY = 0;
      }
    }
    const releaseDecision = onRelease?.({
      event: event.nativeEvent,
      direction: currentSwipeDirection ?? intendedSwipeDirectionRef.current,
      deltaX,
      deltaY,
      velocityX,
      velocityY,
      releaseVelocityX,
      releaseVelocityY
    });
    const hasReleaseDecision = typeof releaseDecision === "boolean";
    if (cancelledSwipeRef.current && !hasReleaseDecision) {
      dragOffsetRef.current = {
        x: resolvedInitialTransform.x,
        y: resolvedInitialTransform.y
      };
      setDragOffset({
        x: resolvedInitialTransform.x,
        y: resolvedInitialTransform.y
      });
      setCurrentSwipeDirection(void 0);
      updateSwipeProgress(0, progressDetails);
      return;
    }
    let shouldClose = false;
    let dismissDirection;
    if (hasReleaseDecision) {
      shouldClose = releaseDecision;
      dismissDirection = currentSwipeDirection ?? intendedSwipeDirectionRef.current ?? primaryDirection;
    } else {
      for (const direction of directions) {
        switch (direction) {
          case "right":
            if (deltaX > swipeThresholdRef.current) {
              shouldClose = true;
              dismissDirection = "right";
            }
            break;
          case "left":
            if (deltaX < -swipeThresholdRef.current) {
              shouldClose = true;
              dismissDirection = "left";
            }
            break;
          case "down":
            if (deltaY > swipeThresholdRef.current) {
              shouldClose = true;
              dismissDirection = "down";
            }
            break;
          case "up":
            if (deltaY < -swipeThresholdRef.current) {
              shouldClose = true;
              dismissDirection = "up";
            }
            break;
          default:
            break;
        }
        if (shouldClose) {
          break;
        }
      }
    }
    if (shouldClose && dismissDirection) {
      setCurrentSwipeDirection(dismissDirection);
      setDragDismissed(true);
      onDismiss?.(event.nativeEvent, {
        direction: dismissDirection
      });
    } else {
      dragOffsetRef.current = {
        x: resolvedInitialTransform.x,
        y: resolvedInitialTransform.y
      };
      setDragOffset({
        x: resolvedInitialTransform.x,
        y: resolvedInitialTransform.y
      });
      setCurrentSwipeDirection(void 0);
      updateSwipeProgress(0, progressDetails);
    }
  });
  const getDragStyles = React130.useCallback(() => {
    const resolvedDragOffset = trackDrag ? dragOffset : dragOffsetRef.current;
    const resolvedInitialTransform = trackDrag ? initialTransform : initialTransformRef.current;
    if (!isSwiping && resolvedDragOffset.x === resolvedInitialTransform.x && resolvedDragOffset.y === resolvedInitialTransform.y && !dragDismissed) {
      return {
        [movementCssVars.x]: "0px",
        [movementCssVars.y]: "0px"
      };
    }
    const deltaX = resolvedDragOffset.x - resolvedInitialTransform.x;
    const deltaY = resolvedDragOffset.y - resolvedInitialTransform.y;
    return {
      transition: isSwiping ? "none" : void 0,
      // While swiping, freeze the element at its current visual transform so it doesn't snap to the
      // end position.
      transform: isSwiping ? `translateX(${resolvedDragOffset.x}px) translateY(${resolvedDragOffset.y}px) scale(${resolvedInitialTransform.scale})` : void 0,
      [movementCssVars.x]: `${deltaX}px`,
      [movementCssVars.y]: `${deltaY}px`
    };
  }, [dragDismissed, dragOffset, initialTransform, isSwiping, movementCssVars, trackDrag]);
  const getPointerProps = React130.useCallback(() => {
    if (!enabled) {
      return {};
    }
    return {
      onPointerDown: handleStart,
      onPointerMove: handleMove,
      onPointerUp: handleEnd,
      onPointerCancel: handleEnd
    };
  }, [enabled, handleEnd, handleMove, handleStart]);
  const getTouchProps = React130.useCallback(() => {
    if (!enabled) {
      return {};
    }
    return {
      onTouchStart: handleStart,
      onTouchMove: handleMove,
      onTouchEnd: handleEnd,
      onTouchCancel: handleEnd
    };
  }, [enabled, handleEnd, handleMove, handleStart]);
  return {
    swiping: isSwiping,
    swipeDirection: currentSwipeDirection,
    dragDismissed,
    getPointerProps,
    getTouchProps,
    getDragStyles,
    reset
  };
}

// node_modules/@base-ui/react/esm/drawer/swipe-area/DrawerSwipeAreaDataAttributes.js
var DrawerSwipeAreaDataAttributes = (function(DrawerSwipeAreaDataAttributes2) {
  DrawerSwipeAreaDataAttributes2[DrawerSwipeAreaDataAttributes2["open"] = CommonPopupDataAttributes.open] = "open";
  DrawerSwipeAreaDataAttributes2[DrawerSwipeAreaDataAttributes2["closed"] = CommonPopupDataAttributes.closed] = "closed";
  DrawerSwipeAreaDataAttributes2["disabled"] = "data-disabled";
  DrawerSwipeAreaDataAttributes2["swipeDirection"] = "data-swipe-direction";
  DrawerSwipeAreaDataAttributes2["swiping"] = "data-swiping";
  return DrawerSwipeAreaDataAttributes2;
})({});

// node_modules/@base-ui/react/esm/drawer/swipe-area/DrawerSwipeArea.js
var DEFAULT_SWIPE_OPEN_RATIO = 0.5;
var MIN_SWIPE_START_DISTANCE = 1;
var VELOCITY_THRESHOLD = 0.1;
var FALLBACK_SWIPE_OPEN_THRESHOLD = 40;
var SWIPE_AREA_OPEN_HOOK = {
  [DrawerSwipeAreaDataAttributes.open]: ""
};
var SWIPE_AREA_CLOSED_HOOK = {
  [DrawerSwipeAreaDataAttributes.closed]: ""
};
var SWIPE_AREA_SWIPING_HOOK = {
  [DrawerSwipeAreaDataAttributes.swiping]: ""
};
var SWIPE_AREA_DISABLED_HOOK = {
  [DrawerSwipeAreaDataAttributes.disabled]: ""
};
var stateAttributesMapping16 = {
  open(value) {
    return value ? SWIPE_AREA_OPEN_HOOK : SWIPE_AREA_CLOSED_HOOK;
  },
  swiping(value) {
    return value ? SWIPE_AREA_SWIPING_HOOK : null;
  },
  swipeDirection(value) {
    return value ? {
      [DrawerSwipeAreaDataAttributes.swipeDirection]: value
    } : null;
  },
  disabled(value) {
    return value ? SWIPE_AREA_DISABLED_HOOK : null;
  }
};
var oppositeSwipeDirection = {
  up: "down",
  down: "up",
  left: "right",
  right: "left"
};
function resolveTouchAction(direction) {
  return direction === "left" || direction === "right" ? "pan-y" : "pan-x";
}
var DrawerSwipeArea = React131.forwardRef(function DrawerSwipeArea2(componentProps, forwardedRef) {
  const {
    className,
    render,
    disabled = false,
    swipeDirection: swipeDirectionProp,
    ...elementProps
  } = componentProps;
  const {
    store
  } = useDialogRootContext();
  const {
    swipeDirection,
    frontmostHeight
  } = useDrawerRootContext();
  const providerContext = useDrawerProviderContext(true);
  const [swipeActive, setSwipeActive] = React131.useState(false);
  const releaseDismissTimeout = useTimeout();
  const swipeAreaRef = React131.useRef(null);
  const swipeStartEventRef = React131.useRef(null);
  const openedBySwipeRef = React131.useRef(false);
  const dragDeltaRef = React131.useRef({
    x: 0,
    y: 0
  });
  const closedOffsetRef = React131.useRef(null);
  const appliedSwipeStylesRef = React131.useRef(false);
  const popupTransitionRef = React131.useRef(null);
  const swipeAreaId = useBaseUiId(componentProps.id);
  const registerTrigger = useTriggerRegistration(swipeAreaId, store);
  const open = store.useState("open");
  const resolvedSwipeDirection = swipeDirectionProp ?? oppositeSwipeDirection[swipeDirection];
  const dismissDirection = oppositeSwipeDirection[resolvedSwipeDirection];
  const enabled = !disabled && (!open || swipeActive);
  const resetDragDelta = useStableCallback(() => {
    dragDeltaRef.current.x = 0;
    dragDeltaRef.current.y = 0;
  });
  function disableDismissForSwipe() {
    releaseDismissTimeout.clear();
    store.context.outsidePressEnabledRef.current = false;
  }
  function enableDismissAfterRelease() {
    releaseDismissTimeout.start(0, () => {
      store.context.outsidePressEnabledRef.current = true;
    });
  }
  function resolvePopupSize() {
    const popupElement = store.context.popupRef.current;
    if (!popupElement) {
      return null;
    }
    const isHorizontal = dismissDirection === "left" || dismissDirection === "right";
    const size = isHorizontal ? popupElement.offsetWidth : popupElement.offsetHeight;
    if (size <= 0) {
      return null;
    }
    return size;
  }
  function resolveClosedOffset() {
    const offset = resolvePopupSize();
    if (offset == null) {
      return null;
    }
    const popupElement = store.context.popupRef.current;
    if (!popupElement) {
      return offset;
    }
    const isHorizontal = dismissDirection === "left" || dismissDirection === "right";
    const transform = getElementTransform(popupElement);
    const transformOffset = isHorizontal ? transform.x : transform.y;
    if (Number.isFinite(transformOffset) && Math.abs(transformOffset) > 0.5) {
      return Math.min(offset, Math.abs(transformOffset));
    }
    return offset;
  }
  function resolveSwipeOpenThreshold() {
    const popupSize = resolvePopupSize();
    if (popupSize == null) {
      return FALLBACK_SWIPE_OPEN_THRESHOLD;
    }
    return popupSize * DEFAULT_SWIPE_OPEN_RATIO;
  }
  function applySwipeMovement() {
    if (!swipeActive) {
      return;
    }
    const popupElement = store.context.popupRef.current;
    if (!popupElement) {
      return;
    }
    if (!store.select("open") || !store.select("mounted")) {
      return;
    }
    if (closedOffsetRef.current == null) {
      closedOffsetRef.current = resolveClosedOffset();
    }
    const closedOffset = closedOffsetRef.current;
    if (!closedOffset || !Number.isFinite(closedOffset) || closedOffset <= 0) {
      return;
    }
    const {
      x,
      y
    } = dragDeltaRef.current;
    const displacement = getDisplacement(resolvedSwipeDirection, x, y);
    const clampedDisplacement = Math.max(0, displacement);
    const dampedDisplacement = clampedDisplacement > closedOffset ? closedOffset + Math.sqrt(clampedDisplacement - closedOffset) : clampedDisplacement;
    const remaining = closedOffset - dampedDisplacement;
    const directionSign = dismissDirection === "left" || dismissDirection === "up" ? -1 : 1;
    const movement = remaining * directionSign;
    const isHorizontal = dismissDirection === "left" || dismissDirection === "right";
    const movementX = isHorizontal ? movement : 0;
    const movementY = isHorizontal ? 0 : movement;
    const openProgress = Math.max(0, Math.min(1, clampedDisplacement / closedOffset));
    const backdropProgress = Math.max(0, Math.min(1, 1 - openProgress));
    popupElement.style.setProperty(DrawerPopupCssVars.swipeMovementX, `${movementX}px`);
    popupElement.style.setProperty(DrawerPopupCssVars.swipeMovementY, `${movementY}px`);
    popupElement.setAttribute(DrawerPopupDataAttributes.swiping, "");
    if (popupTransitionRef.current === null) {
      popupTransitionRef.current = popupElement.style.transition;
    }
    popupElement.style.transition = "none";
    const backdropElement = store.context.backdropRef.current;
    if (backdropElement) {
      backdropElement.setAttribute(DrawerPopupDataAttributes.swiping, "");
      backdropElement.style.setProperty(DrawerBackdropCssVars.swipeProgress, `${backdropProgress}`);
      if (openProgress > 0 && frontmostHeight > 0) {
        backdropElement.style.setProperty(DrawerPopupCssVars.height, `${frontmostHeight}px`);
      } else {
        backdropElement.style.removeProperty(DrawerPopupCssVars.height);
      }
    }
    providerContext?.visualStateStore.set({
      swipeProgress: openProgress,
      frontmostHeight: openProgress > 0 ? frontmostHeight : 0
    });
    appliedSwipeStylesRef.current = true;
  }
  const clearSwipeStyles = useStableCallback(() => {
    const popupElement = store.context.popupRef.current;
    if (popupElement && appliedSwipeStylesRef.current) {
      popupElement.style.removeProperty(DrawerPopupCssVars.swipeMovementX);
      popupElement.style.removeProperty(DrawerPopupCssVars.swipeMovementY);
      popupElement.removeAttribute(DrawerPopupDataAttributes.swiping);
    }
    if (popupElement && popupTransitionRef.current !== null) {
      popupElement.style.transition = popupTransitionRef.current;
      popupTransitionRef.current = null;
    }
    const backdropElement = store.context.backdropRef.current;
    if (backdropElement) {
      backdropElement.removeAttribute(DrawerPopupDataAttributes.swiping);
      backdropElement.style.setProperty(DrawerBackdropCssVars.swipeProgress, "0");
      backdropElement.style.removeProperty(DrawerPopupCssVars.height);
    }
    providerContext?.visualStateStore.set({
      swipeProgress: 0,
      frontmostHeight: 0
    });
    appliedSwipeStylesRef.current = false;
  });
  function openDrawer(event) {
    if (store.select("open")) {
      return;
    }
    openedBySwipeRef.current = true;
    store.setOpen(true, createChangeEventDetails(reason_parts_exports.swipe, event, swipeAreaRef.current ?? void 0));
  }
  function closeDrawer(event) {
    if (!store.select("open")) {
      return;
    }
    store.setOpen(false, createChangeEventDetails(reason_parts_exports.swipe, event, swipeAreaRef.current ?? void 0));
  }
  const swipe = useSwipeDismiss({
    enabled,
    directions: [resolvedSwipeDirection],
    elementRef: swipeAreaRef,
    trackDrag: false,
    movementCssVars: {
      x: DrawerPopupCssVars.swipeMovementX,
      y: DrawerPopupCssVars.swipeMovementY
    },
    onSwipeStart(event) {
      disableDismissForSwipe();
      swipeStartEventRef.current = event;
      openedBySwipeRef.current = false;
      setSwipeActive(true);
      resetDragDelta();
    },
    onProgress(_progress, details) {
      if (!details) {
        return;
      }
      if (!swipeStartEventRef.current) {
        return;
      }
      dragDeltaRef.current.x = details.deltaX;
      dragDeltaRef.current.y = details.deltaY;
      if (details.direction !== resolvedSwipeDirection) {
        return;
      }
      const displacement = getDisplacement(resolvedSwipeDirection, details.deltaX, details.deltaY);
      if (displacement < MIN_SWIPE_START_DISTANCE && !openedBySwipeRef.current) {
        return;
      }
      if (!openedBySwipeRef.current) {
        openDrawer(swipeStartEventRef.current);
      }
      applySwipeMovement();
    },
    onRelease({
      event,
      direction,
      deltaX,
      deltaY,
      releaseVelocityX,
      releaseVelocityY
    }) {
      const displacement = getDisplacement(resolvedSwipeDirection, deltaX, deltaY);
      const releaseVelocity = getDisplacement(resolvedSwipeDirection, releaseVelocityX, releaseVelocityY);
      const threshold = resolveSwipeOpenThreshold();
      const hasEnoughDistance = threshold != null && displacement >= threshold;
      const hasEnoughVelocity = releaseVelocity >= VELOCITY_THRESHOLD;
      const shouldOpen = threshold != null && direction === resolvedSwipeDirection && (hasEnoughDistance || hasEnoughVelocity) && !disabled;
      if (shouldOpen) {
        if (!store.select("open")) {
          openDrawer(event);
        }
      } else if (openedBySwipeRef.current) {
        closeDrawer(event);
      }
      swipeStartEventRef.current = null;
      openedBySwipeRef.current = false;
      setSwipeActive(false);
      closedOffsetRef.current = null;
      enableDismissAfterRelease();
      resetDragDelta();
      clearSwipeStyles();
      return false;
    }
  });
  const swipePointerProps = swipe.getPointerProps();
  const swipeTouchProps = swipe.getTouchProps();
  const resetSwipe = swipe.reset;
  React131.useEffect(() => {
    if (!enabled) {
      resetSwipe();
      resetDragDelta();
      clearSwipeStyles();
      setSwipeActive(false);
      openedBySwipeRef.current = false;
      swipeStartEventRef.current = null;
      closedOffsetRef.current = null;
    }
  }, [clearSwipeStyles, enabled, resetDragDelta, resetSwipe]);
  React131.useEffect(() => {
    return () => {
      store.context.outsidePressEnabledRef.current = true;
    };
  }, [store]);
  const state = {
    open,
    swiping: swipe.swiping,
    swipeDirection: resolvedSwipeDirection,
    disabled
  };
  return useRenderElement("div", componentProps, {
    state,
    ref: [forwardedRef, swipeAreaRef, registerTrigger],
    stateAttributesMapping: stateAttributesMapping16,
    props: [{
      role: "presentation",
      "aria-hidden": true,
      style: {
        pointerEvents: !enabled ? "none" : void 0,
        touchAction: resolveTouchAction(resolvedSwipeDirection)
      },
      onPointerDown(event) {
        if (event.pointerType === "touch") {
          return;
        }
        swipePointerProps.onPointerDown?.(event);
        if (event.cancelable) {
          event.preventDefault();
        }
      },
      onPointerMove(event) {
        if (event.pointerType === "touch") {
          return;
        }
        swipePointerProps.onPointerMove?.(event);
      },
      onPointerUp(event) {
        if (event.pointerType === "touch") {
          return;
        }
        swipePointerProps.onPointerUp?.(event);
      },
      onPointerCancel(event) {
        if (event.pointerType === "touch") {
          return;
        }
        swipePointerProps.onPointerCancel?.(event);
      }
    }, swipeTouchProps, swipeAreaId ? {
      id: swipeAreaId
    } : void 0, elementProps]
  });
});
if (true) DrawerSwipeArea.displayName = "DrawerSwipeArea";

// node_modules/@base-ui/react/esm/drawer/title/DrawerTitle.js
var DrawerTitle = DialogTitle;

// node_modules/@base-ui/react/esm/drawer/trigger/DrawerTrigger.js
var DrawerTrigger = DialogTrigger;

// node_modules/@base-ui/react/esm/drawer/viewport/DrawerViewport.js
var React132 = __toESM(require_react(), 1);
var ReactDOM5 = __toESM(require_react_dom(), 1);
var import_jsx_runtime47 = __toESM(require_jsx_runtime(), 1);
var MIN_SWIPE_THRESHOLD = 10;
var FAST_SWIPE_VELOCITY = 0.5;
var SNAP_VELOCITY_THRESHOLD = 0.5;
var SNAP_VELOCITY_MULTIPLIER = 300;
var MAX_SNAP_VELOCITY = 4;
var MIN_SWIPE_RELEASE_VELOCITY = 0.2;
var MAX_SWIPE_RELEASE_VELOCITY = 4;
var MIN_SWIPE_RELEASE_DURATION_MS = 80;
var MAX_SWIPE_RELEASE_DURATION_MS = 360;
var MIN_SWIPE_RELEASE_SCALAR = 0.1;
var MAX_SWIPE_RELEASE_SCALAR = 1;
var DRAWER_CONTENT_SELECTOR = `[${DRAWER_CONTENT_ATTRIBUTE}]`;
var DrawerViewport = React132.forwardRef(function DrawerViewport2(props, forwardedRef) {
  const {
    className,
    render,
    children,
    ...elementProps
  } = props;
  const {
    store
  } = useDialogRootContext();
  const {
    swipeDirection,
    notifyParentSwipingChange,
    notifyParentSwipeProgressChange,
    frontmostHeight,
    snapToSequentialPoints
  } = useDrawerRootContext();
  const providerContext = useDrawerProviderContext(true);
  const visualStateStore = providerContext?.visualStateStore;
  const open = store.useState("open");
  const mounted = store.useState("mounted");
  const nested = store.useState("nested");
  const nestedOpenDialogCount = store.useState("nestedOpenDialogCount");
  const viewportElement = store.useState("viewportElement");
  const popupElementState = store.useState("popupElement");
  const nestedDrawerOpen = nestedOpenDialogCount > 0;
  const scrollAxis = swipeDirection === "left" || swipeDirection === "right" ? "horizontal" : "vertical";
  const isVerticalScrollAxis = scrollAxis === "vertical";
  const crossScrollAxis = isVerticalScrollAxis ? "horizontal" : "vertical";
  const {
    snapPoints,
    resolvedSnapPoints,
    activeSnapPoint,
    activeSnapPointOffset,
    setActiveSnapPoint,
    popupHeight
  } = useDrawerSnapPoints();
  const [swipeRelease, setSwipeRelease] = React132.useState(null);
  const pendingSwipeCloseSnapPointRef = React132.useRef(void 0);
  const resetSwipeRef = React132.useRef(null);
  const controlledDismissFrame = useAnimationFrame();
  const nestedSwipeActiveRef = React132.useRef(false);
  const lastPointerTypeRef = React132.useRef("");
  const ignoreNextTouchStartFromPenRef = React132.useRef(false);
  const ignoreTouchSwipeRef = React132.useRef(false);
  const touchScrollStateRef = React132.useRef(null);
  const snapPointRange = React132.useMemo(() => {
    if (!snapPoints || snapPoints.length < 2) {
      return null;
    }
    if (swipeDirection !== "down" && swipeDirection !== "up") {
      return null;
    }
    if (resolvedSnapPoints.length < 2) {
      return null;
    }
    const offsets = resolvedSnapPoints.map((point) => point.offset).filter((offset) => Number.isFinite(offset)).sort((a, b) => a - b);
    if (offsets.length < 2) {
      return null;
    }
    const minOffset = offsets[0];
    const nextOffset = offsets[1];
    const maxOffset = offsets[offsets.length - 1];
    let range = nextOffset - minOffset;
    if (!Number.isFinite(range) || range <= 0) {
      const fallbackRange = maxOffset - minOffset;
      if (!Number.isFinite(fallbackRange) || fallbackRange <= 0) {
        return null;
      }
      range = fallbackRange;
    }
    return {
      minOffset,
      range
    };
  }, [resolvedSnapPoints, snapPoints, swipeDirection]);
  const snapPointProgress = React132.useMemo(() => {
    if (!snapPointRange || activeSnapPointOffset === null) {
      return null;
    }
    return clamp((activeSnapPointOffset - snapPointRange.minOffset) / snapPointRange.range, 0, 1);
  }, [activeSnapPointOffset, snapPointRange]);
  const swipeDirections = React132.useMemo(() => {
    if (snapPoints && snapPoints.length > 0 && (swipeDirection === "down" || swipeDirection === "up")) {
      return swipeDirection === "down" ? ["down", "up"] : ["up", "down"];
    }
    return [swipeDirection];
  }, [snapPoints, swipeDirection]);
  const setSwipeDismissed = useStableCallback((dismissed) => {
    setSwipeDismissedElements(store.context.popupRef.current, store.context.backdropRef.current, dismissed);
  });
  const clearSwipeRelease = useStableCallback(() => {
    setSwipeDismissed(false);
    store.context.popupRef.current?.removeAttribute(TransitionStatusDataAttributes.endingStyle);
    setSwipeRelease(null);
  });
  const applySwipeProgress = useStableCallback(({
    resolvedProgress,
    shouldTrackProgress,
    notifyParent
  }) => {
    const isActive = open && !nested && shouldTrackProgress;
    const swipeProgress = isActive ? resolvedProgress : 0;
    if (notifyParent && notifyParentSwipeProgressChange) {
      const nestedSwipeProgress = open && shouldTrackProgress ? resolvedProgress : 0;
      notifyParentSwipeProgressChange(nestedSwipeProgress);
    }
    visualStateStore?.set({
      swipeProgress,
      frontmostHeight: swipeProgress > 0 ? frontmostHeight : 0
    });
    const backdropElement = store.context.backdropRef.current;
    if (!backdropElement) {
      return;
    }
    if (!isActive || swipeProgress <= 0) {
      backdropElement.style.setProperty(DrawerBackdropCssVars.swipeProgress, "0");
      backdropElement.style.removeProperty(DrawerPopupCssVars.height);
      return;
    }
    backdropElement.style.setProperty(DrawerBackdropCssVars.swipeProgress, `${swipeProgress}`);
    if (frontmostHeight > 0) {
      backdropElement.style.setProperty(DrawerPopupCssVars.height, `${frontmostHeight}px`);
    } else {
      backdropElement.style.removeProperty(DrawerPopupCssVars.height);
    }
  });
  function resolveSwipeRelease({
    direction,
    deltaX,
    deltaY,
    velocityX,
    velocityY,
    releaseVelocityX,
    releaseVelocityY
  }) {
    if (!direction) {
      return null;
    }
    const popupElement = store.context.popupRef.current;
    if (!popupElement) {
      return null;
    }
    const size = direction === "left" || direction === "right" ? popupElement.offsetWidth : popupElement.offsetHeight;
    if (!Number.isFinite(size) || size <= 0) {
      return null;
    }
    const axisDelta = direction === "left" || direction === "right" ? deltaX : deltaY;
    const snapPointBaseOffset = snapPoints && snapPoints.length > 0 ? activeSnapPointOffset ?? 0 : 0;
    let baseOffset = 0;
    if (direction === "down") {
      baseOffset = snapPointBaseOffset;
    } else if (direction === "up") {
      baseOffset = -snapPointBaseOffset;
    }
    const translation = baseOffset + axisDelta;
    const translationAlongDirection = direction === "left" || direction === "up" ? -translation : translation;
    const remainingDistance = Math.max(0, size - translationAlongDirection);
    if (!Number.isFinite(remainingDistance) || remainingDistance <= 0) {
      return null;
    }
    const axisVelocity = direction === "left" || direction === "right" ? releaseVelocityX : releaseVelocityY;
    const fallbackVelocity = direction === "left" || direction === "right" ? velocityX : velocityY;
    const resolvedVelocity = Math.abs(axisVelocity) > 0 && Number.isFinite(axisVelocity) ? axisVelocity : fallbackVelocity;
    const directionalVelocity = direction === "left" || direction === "up" ? -resolvedVelocity : resolvedVelocity;
    if (!Number.isFinite(directionalVelocity) || directionalVelocity <= MIN_SWIPE_RELEASE_VELOCITY) {
      return null;
    }
    const clampedVelocity = clamp(directionalVelocity, MIN_SWIPE_RELEASE_VELOCITY, MAX_SWIPE_RELEASE_VELOCITY);
    const durationMs = clamp(remainingDistance / clampedVelocity, MIN_SWIPE_RELEASE_DURATION_MS, MAX_SWIPE_RELEASE_DURATION_MS);
    if (!Number.isFinite(durationMs)) {
      return null;
    }
    const normalizedDuration = (durationMs - MIN_SWIPE_RELEASE_DURATION_MS) / (MAX_SWIPE_RELEASE_DURATION_MS - MIN_SWIPE_RELEASE_DURATION_MS);
    const durationScalar = clamp(MIN_SWIPE_RELEASE_SCALAR + normalizedDuration * (MAX_SWIPE_RELEASE_SCALAR - MIN_SWIPE_RELEASE_SCALAR), MIN_SWIPE_RELEASE_SCALAR, MAX_SWIPE_RELEASE_SCALAR);
    if (!Number.isFinite(durationScalar) || durationScalar <= 0) {
      return null;
    }
    return durationScalar;
  }
  function updateNestedSwipeActive(details) {
    if (nestedSwipeActiveRef.current || !details) {
      return;
    }
    const direction = details.direction ?? swipeDirection;
    const delta = direction === "left" || direction === "right" ? details.deltaX : details.deltaY;
    if (!Number.isFinite(delta) || Math.abs(delta) < MIN_SWIPE_THRESHOLD) {
      return;
    }
    nestedSwipeActiveRef.current = true;
    notifyParentSwipingChange?.(true);
  }
  const swipe = useSwipeDismiss({
    enabled: mounted && !nestedDrawerOpen,
    directions: swipeDirections,
    elementRef: store.context.popupRef,
    ignoreSelectorWhenTouch: false,
    ignoreScrollableAncestors: true,
    movementCssVars: {
      x: DrawerPopupCssVars.swipeMovementX,
      y: DrawerPopupCssVars.swipeMovementY
    },
    onSwipeStart(event) {
      if ("touches" in event || "pointerType" in event && event.pointerType === "touch") {
        return;
      }
      const popupElement = store.context.popupRef.current;
      if (!popupElement) {
        return;
      }
      const doc = ownerDocument(popupElement);
      const selection = doc.getSelection?.();
      if (!selection || selection.isCollapsed) {
        return;
      }
      const anchorElement = isElement(selection.anchorNode) ? selection.anchorNode : selection.anchorNode?.parentElement;
      const focusElement = isElement(selection.focusNode) ? selection.focusNode : selection.focusNode?.parentElement;
      if (!contains(popupElement, anchorElement) && !contains(popupElement, focusElement)) {
        return;
      }
      selection.removeAllRanges();
    },
    onSwipingChange(swiping) {
      setBackdropSwipingAttribute(store.context.backdropRef.current, swiping);
      if (!swiping) {
        nestedSwipeActiveRef.current = false;
        notifyParentSwipingChange?.(false);
      }
    },
    swipeThreshold({
      element,
      direction
    }) {
      return getBaseSwipeThreshold(element, direction);
    },
    canStart(position, details) {
      const popupElement = store.context.popupRef.current;
      if (!popupElement) {
        return false;
      }
      const doc = popupElement.ownerDocument;
      const elementAtPoint = getElementAtPoint(doc, position.x, position.y);
      if (!elementAtPoint || !contains(popupElement, elementAtPoint)) {
        return false;
      }
      const nativeEvent = details.nativeEvent;
      const touchLike = "touches" in nativeEvent || "pointerType" in nativeEvent && nativeEvent.pointerType === "touch";
      if (touchLike && shouldIgnoreSwipeForTextSelection(doc, popupElement)) {
        return false;
      }
      if (nativeEvent.type === "touchstart" && isSwipeIgnoredTarget(elementAtPoint)) {
        return false;
      }
      return true;
    },
    onProgress(progress, details) {
      updateNestedSwipeActive(details);
      const currentDirection = details?.direction ?? swipe.swipeDirection;
      const isDismissSwipe = currentDirection === void 0 || currentDirection === swipeDirection;
      const hasSnapPoints = Boolean(snapPoints && snapPoints.length > 0);
      const isVerticalSwipe = swipeDirection === "down" || swipeDirection === "up";
      const shouldTrackProgress = hasSnapPoints && isVerticalSwipe || !hasSnapPoints || swipeDirection === "left" || swipeDirection === "right" || isDismissSwipe;
      let resolvedProgress = progress;
      if (snapPointRange && popupHeight > 0) {
        if (details && Number.isFinite(details.deltaY)) {
          const baseOffset = activeSnapPointOffset ?? snapPointRange.minOffset;
          const nextOffset = clamp(baseOffset + details.deltaY, 0, popupHeight);
          resolvedProgress = clamp((nextOffset - snapPointRange.minOffset) / snapPointRange.range, 0, 1);
        } else if (snapPointProgress !== null) {
          resolvedProgress = snapPointProgress;
        } else if (currentDirection === "down" || currentDirection === "up") {
          const displacement = progress * popupHeight;
          const baseOffset = activeSnapPointOffset ?? snapPointRange.minOffset;
          const nextOffset = currentDirection === "down" ? baseOffset + displacement : baseOffset - displacement;
          resolvedProgress = clamp((nextOffset - snapPointRange.minOffset) / snapPointRange.range, 0, 1);
        }
      }
      applySwipeProgress({
        resolvedProgress,
        shouldTrackProgress,
        notifyParent: true
      });
    },
    onRelease({
      event,
      deltaX,
      deltaY,
      direction,
      velocityX,
      velocityY,
      releaseVelocityX,
      releaseVelocityY
    }) {
      const swipeReleasePayload = {
        deltaX,
        deltaY,
        velocityX,
        velocityY,
        releaseVelocityX,
        releaseVelocityY
      };
      function startSwipeRelease(resolvedDirection) {
        const popupElement = store.context.popupRef.current;
        if (!popupElement) {
          return;
        }
        notifyParentSwipingChange?.(false);
        setSwipeDismissed(true);
        popupElement.style.removeProperty("transition");
        popupElement.setAttribute(TransitionStatusDataAttributes.endingStyle, "");
        ReactDOM5.flushSync(() => {
          setSwipeRelease(resolveSwipeRelease({
            direction: resolvedDirection,
            ...swipeReleasePayload
          }));
        });
      }
      if (!snapPoints || snapPoints.length === 0) {
        if (!direction) {
          clearSwipeRelease();
          return void 0;
        }
        const element = store.context.popupRef.current;
        if (!element) {
          clearSwipeRelease();
          return void 0;
        }
        const baseThreshold = getBaseSwipeThreshold(element, direction);
        const delta = direction === "left" || direction === "right" ? deltaX : deltaY;
        if (!Number.isFinite(delta)) {
          clearSwipeRelease();
          return void 0;
        }
        const directionalDelta = direction === "left" || direction === "up" ? -delta : delta;
        if (directionalDelta <= 0) {
          clearSwipeRelease();
          return false;
        }
        const velocity = direction === "left" || direction === "right" ? velocityX : velocityY;
        const directionalVelocity = direction === "left" || direction === "up" ? -velocity : velocity;
        if (directionalVelocity >= FAST_SWIPE_VELOCITY && directionalDelta > 0) {
          startSwipeRelease(direction);
          return true;
        }
        const shouldClose = directionalDelta > baseThreshold;
        if (shouldClose) {
          startSwipeRelease(direction);
        } else {
          clearSwipeRelease();
        }
        return shouldClose;
      }
      if (swipeDirection !== "down" && swipeDirection !== "up") {
        clearSwipeRelease();
        return void 0;
      }
      if (!popupHeight || resolvedSnapPoints.length === 0) {
        clearSwipeRelease();
        return void 0;
      }
      const dragDelta = swipeDirection === "down" ? deltaY : -deltaY;
      if (!Number.isFinite(dragDelta)) {
        clearSwipeRelease();
        return void 0;
      }
      const dragDirection = Math.sign(dragDelta);
      const releaseDirectionalVelocity = swipeDirection === "down" ? releaseVelocityY : -releaseVelocityY;
      const fallbackDirectionalVelocity = swipeDirection === "down" ? velocityY : -velocityY;
      let resolvedDirectionalVelocity = Number.isFinite(releaseDirectionalVelocity) ? releaseDirectionalVelocity : fallbackDirectionalVelocity;
      if (dragDirection !== 0 && Math.abs(dragDelta) >= MIN_SWIPE_THRESHOLD && Number.isFinite(resolvedDirectionalVelocity)) {
        const velocityDirection = Math.sign(resolvedDirectionalVelocity);
        if (velocityDirection !== 0 && velocityDirection !== dragDirection) {
          resolvedDirectionalVelocity = fallbackDirectionalVelocity;
        }
      }
      const currentOffset = activeSnapPointOffset ?? 0;
      const dragTargetOffset = clamp(currentOffset + dragDelta, 0, popupHeight);
      const velocityOffset = Number.isFinite(resolvedDirectionalVelocity) && Math.abs(resolvedDirectionalVelocity) >= SNAP_VELOCITY_THRESHOLD ? clamp(resolvedDirectionalVelocity, -MAX_SNAP_VELOCITY, MAX_SNAP_VELOCITY) * SNAP_VELOCITY_MULTIPLIER : 0;
      const targetOffset = snapToSequentialPoints ? dragTargetOffset : clamp(dragTargetOffset + velocityOffset, 0, popupHeight);
      const snapPointEventDetails = createChangeEventDetails(reason_parts_exports.swipe, event);
      const closeFromSnapPoints = () => {
        pendingSwipeCloseSnapPointRef.current = activeSnapPoint;
        setActiveSnapPoint?.(null, snapPointEventDetails);
        startSwipeRelease(swipeDirection);
        return true;
      };
      if (snapToSequentialPoints) {
        const orderedSnapPoints = [...resolvedSnapPoints].sort((first, second) => first.offset - second.offset);
        if (orderedSnapPoints.length === 0) {
          clearSwipeRelease();
          return false;
        }
        let currentIndex = 0;
        let closestDistance2 = Math.abs(currentOffset - orderedSnapPoints[0].offset);
        for (let index = 1; index < orderedSnapPoints.length; index += 1) {
          const distance = Math.abs(currentOffset - orderedSnapPoints[index].offset);
          if (distance < closestDistance2) {
            closestDistance2 = distance;
            currentIndex = index;
          }
        }
        let targetSnapPoint = orderedSnapPoints[0];
        closestDistance2 = Math.abs(targetOffset - targetSnapPoint.offset);
        for (const snapPoint of orderedSnapPoints) {
          const distance = Math.abs(targetOffset - snapPoint.offset);
          if (distance < closestDistance2) {
            closestDistance2 = distance;
            targetSnapPoint = snapPoint;
          }
        }
        const velocityDirection = Math.sign(resolvedDirectionalVelocity);
        const shouldAdvance = dragDirection !== 0 && velocityDirection !== 0 && velocityDirection === dragDirection && Math.abs(resolvedDirectionalVelocity) >= SNAP_VELOCITY_THRESHOLD;
        let effectiveTargetOffset = targetOffset;
        if (shouldAdvance) {
          const adjacentIndex = clamp(currentIndex + dragDirection, 0, orderedSnapPoints.length - 1);
          if (adjacentIndex !== currentIndex) {
            const adjacentPoint = orderedSnapPoints[adjacentIndex];
            const shouldForceAdjacent = dragDirection > 0 ? targetOffset < adjacentPoint.offset : targetOffset > adjacentPoint.offset;
            if (shouldForceAdjacent) {
              targetSnapPoint = adjacentPoint;
              effectiveTargetOffset = adjacentPoint.offset;
            }
          } else if (dragDirection > 0) {
            return closeFromSnapPoints();
          }
        }
        const closeOffset2 = popupHeight;
        const closeDistance2 = Math.abs(effectiveTargetOffset - closeOffset2);
        const snapDistance = Math.abs(effectiveTargetOffset - targetSnapPoint.offset);
        if (closeDistance2 < snapDistance) {
          return closeFromSnapPoints();
        }
        setActiveSnapPoint?.(targetSnapPoint.value, snapPointEventDetails);
        clearSwipeRelease();
        return false;
      }
      if (resolvedDirectionalVelocity >= FAST_SWIPE_VELOCITY && dragDelta > 0) {
        return closeFromSnapPoints();
      }
      let closestSnapPoint = resolvedSnapPoints[0];
      let closestDistance = Math.abs(targetOffset - closestSnapPoint.offset);
      for (const snapPoint of resolvedSnapPoints) {
        const distance = Math.abs(targetOffset - snapPoint.offset);
        if (distance < closestDistance) {
          closestDistance = distance;
          closestSnapPoint = snapPoint;
        }
      }
      const closeOffset = popupHeight;
      const closeDistance = Math.abs(targetOffset - closeOffset);
      if (closeDistance < closestDistance) {
        return closeFromSnapPoints();
      }
      setActiveSnapPoint?.(closestSnapPoint.value, snapPointEventDetails);
      clearSwipeRelease();
      return false;
    },
    onDismiss(event) {
      visualStateStore?.set({
        swipeProgress: 0,
        frontmostHeight: 0
      });
      const backdropElement = store.context.backdropRef.current;
      if (backdropElement) {
        backdropElement.style.setProperty(DrawerBackdropCssVars.swipeProgress, "0");
        backdropElement.style.removeProperty(DrawerPopupCssVars.height);
      }
      const dismissEventDetails = createChangeEventDetails(reason_parts_exports.swipe, event);
      store.setOpen(false, dismissEventDetails);
      if (dismissEventDetails.isCanceled) {
        const pendingSnapPoint = pendingSwipeCloseSnapPointRef.current;
        if (pendingSnapPoint !== void 0) {
          setActiveSnapPoint?.(pendingSnapPoint, createChangeEventDetails(reason_parts_exports.swipe, event));
        }
        pendingSwipeCloseSnapPointRef.current = void 0;
        resetSwipeRef.current?.();
        clearSwipeRelease();
        return;
      }
      if (store.select("open")) {
        const savedEvent = event;
        controlledDismissFrame.request(() => {
          if (store.select("open")) {
            const pendingSnapPoint = pendingSwipeCloseSnapPointRef.current;
            if (pendingSnapPoint !== void 0) {
              setActiveSnapPoint?.(pendingSnapPoint, createChangeEventDetails(reason_parts_exports.swipe, savedEvent));
            }
            pendingSwipeCloseSnapPointRef.current = void 0;
            clearSwipeRelease();
            resetSwipeRef.current?.();
          } else {
            pendingSwipeCloseSnapPointRef.current = void 0;
          }
        });
        return;
      }
      pendingSwipeCloseSnapPointRef.current = void 0;
      setSwipeDismissed(true);
    }
  });
  const swipePointerProps = swipe.getPointerProps();
  const swipeTouchProps = swipe.getTouchProps();
  const resetSwipe = swipe.reset;
  resetSwipeRef.current = resetSwipe;
  React132.useEffect(() => {
    const rootElement = viewportElement ?? popupElementState;
    if (!rootElement) {
      return void 0;
    }
    const resolvedRootElement = rootElement;
    const doc = ownerDocument(resolvedRootElement);
    const win = getWindow(doc);
    function handleNativeTouchMove(event) {
      if (ignoreTouchSwipeRef.current) {
        return;
      }
      const touchState = touchScrollStateRef.current;
      const touch = event.touches[0];
      if (!touch || !touchState) {
        return;
      }
      const drawerAxisDelta = isVerticalScrollAxis ? touch.clientY - touchState.lastY : touch.clientX - touchState.lastX;
      if (isEventOnRangeInput(event, win)) {
        touchState.allowSwipe = false;
        updateTouchScrollPosition(touchState, touch);
        return;
      }
      if (event.touches.length === 2) {
        updateTouchScrollPosition(touchState, touch);
        return;
      }
      const allowTouchMove = shouldIgnoreSwipeForTextSelection(doc, resolvedRootElement);
      if (allowTouchMove || !open || !mounted || nestedDrawerOpen) {
        updateTouchScrollPosition(touchState, touch);
        return;
      }
      if (preserveNativeCrossAxisScrollOnMove(touchState, touch, isVerticalScrollAxis)) {
        updateTouchScrollPosition(touchState, touch);
        return;
      }
      const scrollTarget = touchState.scrollTarget;
      if (!scrollTarget || scrollTarget === doc.documentElement || scrollTarget === doc.body) {
        if (event.cancelable) {
          event.preventDefault();
        }
        updateTouchScrollPosition(touchState, touch);
        return;
      }
      const hasScrollableContent = hasScrollableContentOnAxis(scrollTarget, scrollAxis);
      if (!hasScrollableContent) {
        if (event.cancelable) {
          event.preventDefault();
        }
        updateTouchScrollPosition(touchState, touch);
        return;
      }
      const delta = drawerAxisDelta;
      if (delta !== 0) {
        const canSwipeFromScrollEdge = canSwipeFromScrollEdgeOnMove(scrollTarget, scrollAxis, swipeDirection, delta);
        if (!touchState.allowSwipe) {
          if (!event.cancelable) {
            touchState.allowSwipe = false;
          } else if (canSwipeFromScrollEdge) {
            touchState.allowSwipe = true;
            event.preventDefault();
          } else {
            touchState.allowSwipe = false;
          }
        } else if (event.cancelable) {
          event.preventDefault();
        }
      }
      updateTouchScrollPosition(touchState, touch);
    }
    doc.addEventListener("touchmove", handleNativeTouchMove, {
      passive: false,
      capture: true
    });
    return () => {
      doc.removeEventListener("touchmove", handleNativeTouchMove, {
        capture: true
      });
    };
  }, [mounted, nestedDrawerOpen, open, popupElementState, isVerticalScrollAxis, scrollAxis, swipeDirection, viewportElement]);
  React132.useEffect(() => {
    if (!snapPointRange || swipe.swiping) {
      return;
    }
    const resolvedProgress = !open || nested ? 0 : snapPointProgress ?? 0;
    applySwipeProgress({
      resolvedProgress,
      shouldTrackProgress: true,
      notifyParent: false
    });
  }, [applySwipeProgress, frontmostHeight, nested, notifyParentSwipeProgressChange, open, snapPointProgress, snapPointRange, swipe.swiping, store, visualStateStore]);
  React132.useEffect(() => {
    if (!notifyParentSwipeProgressChange) {
      return void 0;
    }
    if (!open) {
      notifyParentSwipeProgressChange(0);
    }
    return () => {
      notifyParentSwipeProgressChange(0);
    };
  }, [notifyParentSwipeProgressChange, open]);
  React132.useEffect(() => {
    if (open) {
      resetSwipe();
      clearSwipeRelease();
    }
  }, [clearSwipeRelease, open, resetSwipe]);
  React132.useEffect(() => {
    return () => {
      visualStateStore?.set({
        swipeProgress: 0,
        frontmostHeight: 0
      });
      setBackdropSwipingAttribute(store.context.backdropRef.current, false);
      notifyParentSwipingChange?.(false);
    };
  }, [notifyParentSwipingChange, store, visualStateStore]);
  const swipeProviderValue = React132.useMemo(() => ({
    swiping: swipe.swiping,
    getDragStyles: swipe.getDragStyles,
    swipeStrength: swipeRelease ?? null,
    setSwipeDismissed(dismissed) {
      setSwipeDismissedElements(store.context.popupRef.current, store.context.backdropRef.current, dismissed);
    }
  }), [store, swipe.getDragStyles, swipe.swiping, swipeRelease]);
  function resetTouchTrackingState() {
    ignoreTouchSwipeRef.current = false;
    touchScrollStateRef.current = null;
    lastPointerTypeRef.current = "";
    ignoreNextTouchStartFromPenRef.current = false;
  }
  return (0, import_jsx_runtime47.jsx)(DialogViewport, {
    ref: forwardedRef,
    className,
    render,
    ...mergeProps(elementProps, {
      onPointerDown(event) {
        lastPointerTypeRef.current = event.pointerType;
        ignoreNextTouchStartFromPenRef.current = event.pointerType === "pen";
        if (!open || !mounted || nestedDrawerOpen) {
          return;
        }
        const doc = ownerDocument(event.currentTarget);
        const elementAtPoint = getElementAtPoint(doc, event.clientX, event.clientY);
        if (isSwipeIgnoredTarget(elementAtPoint) || isDrawerContentTarget(elementAtPoint)) {
          return;
        }
        if (event.pointerType === "touch") {
          return;
        }
        swipePointerProps.onPointerDown?.(event);
      },
      onPointerMove(event) {
        if (event.pointerType === "touch") {
          return;
        }
        swipePointerProps.onPointerMove?.(event);
      },
      onPointerUp(event) {
        if (lastPointerTypeRef.current === event.pointerType) {
          lastPointerTypeRef.current = "";
        }
        if (event.pointerType === "touch") {
          return;
        }
        swipePointerProps.onPointerUp?.(event);
      },
      onPointerCancel(event) {
        if (lastPointerTypeRef.current === event.pointerType) {
          lastPointerTypeRef.current = "";
        }
        if (event.pointerType === "touch") {
          return;
        }
        swipePointerProps.onPointerCancel?.(event);
      },
      onTouchStart(event) {
        const startedFromPenPointerDown = lastPointerTypeRef.current === "pen" && ignoreNextTouchStartFromPenRef.current;
        if (startedFromPenPointerDown) {
          ignoreNextTouchStartFromPenRef.current = false;
          ignoreTouchSwipeRef.current = false;
          touchScrollStateRef.current = null;
          return;
        }
        if (!open || !mounted || nestedDrawerOpen) {
          ignoreTouchSwipeRef.current = false;
          touchScrollStateRef.current = null;
          return;
        }
        const touch = event.touches[0];
        if (!touch) {
          return;
        }
        if (isReactTouchEventOnRangeInput(event)) {
          ignoreTouchSwipeRef.current = false;
          touchScrollStateRef.current = null;
          return;
        }
        const doc = ownerDocument(event.currentTarget);
        const elementAtPoint = getElementAtPoint(doc, touch.clientX, touch.clientY);
        ignoreTouchSwipeRef.current = isSwipeIgnoredTarget(elementAtPoint);
        if (ignoreTouchSwipeRef.current) {
          touchScrollStateRef.current = null;
          return;
        }
        const rootElement = viewportElement ?? popupElementState;
        const target = isElement(event.target) ? event.target : null;
        let scrollTarget = null;
        let hasCrossAxisScrollableContent = false;
        if (rootElement && target && contains(rootElement, target)) {
          scrollTarget = findScrollableTouchTarget(target, rootElement, scrollAxis);
          hasCrossAxisScrollableContent = findScrollableTouchTarget(target, rootElement, crossScrollAxis) != null;
        }
        let allowSwipe = null;
        if (scrollTarget) {
          const canSwipeFromEdge = isAtSwipeStartEdge(scrollTarget, scrollAxis, swipeDirection);
          allowSwipe = canSwipeFromEdge ? null : false;
        }
        touchScrollStateRef.current = {
          startX: touch.clientX,
          startY: touch.clientY,
          lastX: touch.clientX,
          lastY: touch.clientY,
          scrollTarget,
          hasCrossAxisScrollableContent,
          allowSwipe,
          preserveNativeCrossAxisScroll: false
        };
        swipeTouchProps.onTouchStart?.(event);
      },
      onTouchMove(event) {
        if (ignoreTouchSwipeRef.current) {
          return;
        }
        if (isReactTouchEventOnRangeInput(event)) {
          return;
        }
        const touchState = touchScrollStateRef.current;
        if (touchState?.preserveNativeCrossAxisScroll) {
          return;
        }
        if (touchState?.allowSwipe === false || touchState?.scrollTarget != null && !touchState.allowSwipe) {
          return;
        }
        swipeTouchProps.onTouchMove?.(event);
      },
      onTouchEnd(event) {
        resetTouchTrackingState();
        swipeTouchProps.onTouchEnd?.(event);
      },
      onTouchCancel(event) {
        resetTouchTrackingState();
        swipeTouchProps.onTouchCancel?.(event);
      },
      // Drawer popups use drawer-specific nested state attributes.
      // Suppress DialogViewport's generic nested dialog attribute.
      ["data-nested-dialog-open"]: void 0
    }),
    children: (0, import_jsx_runtime47.jsx)(DrawerViewportContext.Provider, {
      value: swipeProviderValue,
      children
    })
  });
});
if (true) DrawerViewport.displayName = "DrawerViewport";
function setSwipeDismissedElements(popupElement, backdropElement, dismissed) {
  if (dismissed) {
    popupElement?.setAttribute(DrawerPopupDataAttributes.swipeDismiss, "");
    backdropElement?.setAttribute(DrawerPopupDataAttributes.swipeDismiss, "");
    return;
  }
  popupElement?.removeAttribute(DrawerPopupDataAttributes.swipeDismiss);
  backdropElement?.removeAttribute(DrawerPopupDataAttributes.swipeDismiss);
}
function setBackdropSwipingAttribute(backdropElement, swiping) {
  if (!backdropElement) {
    return;
  }
  if (swiping) {
    backdropElement.setAttribute(DrawerPopupDataAttributes.swiping, "");
    return;
  }
  backdropElement.removeAttribute(DrawerPopupDataAttributes.swiping);
}
function isSwipeIgnoredTarget(target) {
  return Boolean(target?.closest(BASE_UI_SWIPE_IGNORE_SELECTOR));
}
function isDrawerContentTarget(target) {
  return Boolean(target?.closest(DRAWER_CONTENT_SELECTOR));
}
function getBaseSwipeThreshold(element, direction) {
  const size = direction === "left" || direction === "right" ? element.offsetWidth : element.offsetHeight;
  return Math.max(size * 0.5, MIN_SWIPE_THRESHOLD);
}
function isRangeInput(target, win) {
  return target instanceof win.HTMLInputElement && target.type === "range";
}
function isTextSelectionControl(target) {
  if (!isElement(target)) {
    return false;
  }
  return target.tagName === "INPUT" || target.tagName === "TEXTAREA";
}
function hasExpandedSelectionWithinTarget(selection, target) {
  const anchorElement = isElement(selection.anchorNode) ? selection.anchorNode : selection.anchorNode?.parentElement;
  const focusElement = isElement(selection.focusNode) ? selection.focusNode : selection.focusNode?.parentElement;
  return selection.containsNode(target, true) || contains(target, anchorElement) || contains(target, focusElement);
}
function shouldIgnoreSwipeForTextSelection(doc, rootElement) {
  const activeElement2 = doc.activeElement;
  const activeElementWithinRoot = Boolean(activeElement2 && contains(rootElement, activeElement2));
  if (activeElementWithinRoot && isTextSelectionControl(activeElement2)) {
    const {
      selectionStart,
      selectionEnd
    } = activeElement2;
    if (selectionStart != null && selectionEnd != null && selectionStart < selectionEnd) {
      return true;
    }
  }
  const selection = doc.getSelection?.();
  if (!selection || selection.isCollapsed) {
    return false;
  }
  return hasExpandedSelectionWithinTarget(selection, rootElement);
}
function isEventOnRangeInput(event, win) {
  const composedPath = event.composedPath();
  if (composedPath) {
    return composedPath.some((pathTarget) => isRangeInput(pathTarget, win));
  }
  return isRangeInput(event.target, win);
}
function isReactTouchEventOnRangeInput(event) {
  return isEventOnRangeInput(event.nativeEvent, getWindow(event.currentTarget));
}
function updateTouchScrollPosition(touchState, touch) {
  touchState.lastX = touch.clientX;
  touchState.lastY = touch.clientY;
}
function preserveNativeCrossAxisScrollOnMove(touchState, touch, isVerticalScrollAxis) {
  if (touchState.preserveNativeCrossAxisScroll) {
    return true;
  }
  if (touchState.allowSwipe === true || !touchState.hasCrossAxisScrollableContent) {
    return false;
  }
  const drawerAxisGestureDelta = isVerticalScrollAxis ? touch.clientY - touchState.startY : touch.clientX - touchState.startX;
  const crossAxisGestureDelta = isVerticalScrollAxis ? touch.clientX - touchState.startX : touch.clientY - touchState.startY;
  const absDrawerAxisGestureDelta = Math.abs(drawerAxisGestureDelta);
  const absCrossAxisGestureDelta = Math.abs(crossAxisGestureDelta);
  if (absCrossAxisGestureDelta < 6 || absCrossAxisGestureDelta <= absDrawerAxisGestureDelta + 2) {
    return false;
  }
  touchState.preserveNativeCrossAxisScroll = true;
  return true;
}
function hasScrollableContentOnAxis(scrollTarget, axis) {
  return axis === "vertical" ? scrollTarget.scrollHeight > scrollTarget.clientHeight : scrollTarget.scrollWidth > scrollTarget.clientWidth;
}
function getScrollMetrics(scrollTarget, axis) {
  if (axis === "vertical") {
    const max2 = Math.max(0, scrollTarget.scrollHeight - scrollTarget.clientHeight);
    return {
      offset: scrollTarget.scrollTop,
      max: max2
    };
  }
  const max = Math.max(0, scrollTarget.scrollWidth - scrollTarget.clientWidth);
  return {
    offset: scrollTarget.scrollLeft,
    max
  };
}
function isAtSwipeStartEdge(scrollTarget, axis, direction) {
  const {
    offset,
    max
  } = getScrollMetrics(scrollTarget, axis);
  const dismissFromStartEdge = shouldDismissFromStartEdge(direction, axis);
  if (dismissFromStartEdge === null) {
    return false;
  }
  return dismissFromStartEdge ? offset <= 0 : offset >= max;
}
function canSwipeFromScrollEdgeOnMove(scrollTarget, axis, direction, delta) {
  const {
    offset,
    max
  } = getScrollMetrics(scrollTarget, axis);
  const dismissFromStartEdge = shouldDismissFromStartEdge(direction, axis);
  if (dismissFromStartEdge === null) {
    return false;
  }
  const movingTowardDismiss = dismissFromStartEdge ? delta > 0 : delta < 0;
  if (!movingTowardDismiss) {
    return false;
  }
  return dismissFromStartEdge ? offset <= 0 : offset >= max;
}
function shouldDismissFromStartEdge(direction, axis) {
  if (axis === "vertical") {
    if (direction === "down") {
      return true;
    }
    if (direction === "up") {
      return false;
    }
    return null;
  }
  if (direction === "right") {
    return true;
  }
  if (direction === "left") {
    return false;
  }
  return null;
}

// node_modules/@base-ui/react/esm/fieldset/index.parts.js
var index_parts_exports15 = {};
__export(index_parts_exports15, {
  Legend: () => FieldsetLegend,
  Root: () => FieldsetRoot
});

// node_modules/@base-ui/react/esm/fieldset/root/FieldsetRoot.js
var React133 = __toESM(require_react(), 1);
var import_jsx_runtime48 = __toESM(require_jsx_runtime(), 1);
var FieldsetRoot = React133.forwardRef(function FieldsetRoot2(componentProps, forwardedRef) {
  const {
    render,
    className,
    disabled = false,
    ...elementProps
  } = componentProps;
  const [legendId, setLegendId] = React133.useState(void 0);
  const state = {
    disabled
  };
  const element = useRenderElement("fieldset", componentProps, {
    ref: forwardedRef,
    state,
    props: [{
      "aria-labelledby": legendId
    }, elementProps]
  });
  const contextValue = React133.useMemo(() => ({
    legendId,
    setLegendId,
    disabled
  }), [legendId, setLegendId, disabled]);
  return (0, import_jsx_runtime48.jsx)(FieldsetRootContext.Provider, {
    value: contextValue,
    children: element
  });
});
if (true) FieldsetRoot.displayName = "FieldsetRoot";

// node_modules/@base-ui/react/esm/fieldset/legend/FieldsetLegend.js
var React134 = __toESM(require_react(), 1);
var FieldsetLegend = React134.forwardRef(function FieldsetLegend2(componentProps, forwardedRef) {
  const {
    render,
    className,
    id: idProp,
    ...elementProps
  } = componentProps;
  const {
    disabled,
    setLegendId
  } = useFieldsetRootContext();
  const id = useBaseUiId(idProp);
  useIsoLayoutEffect(() => {
    setLegendId(id);
    return () => {
      setLegendId(void 0);
    };
  }, [setLegendId, id]);
  const state = {
    disabled: disabled ?? false
  };
  const element = useRenderElement("div", componentProps, {
    state,
    ref: forwardedRef,
    props: [{
      id
    }, elementProps]
  });
  return element;
});
if (true) FieldsetLegend.displayName = "FieldsetLegend";

// node_modules/@base-ui/react/esm/form/Form.js
var React135 = __toESM(require_react(), 1);
var import_jsx_runtime49 = __toESM(require_jsx_runtime(), 1);
var Form = React135.forwardRef(function Form2(componentProps, forwardedRef) {
  const {
    render,
    className,
    validationMode = "onSubmit",
    errors: externalErrors,
    onSubmit,
    onFormSubmit,
    actionsRef,
    ...elementProps
  } = componentProps;
  const formRef = React135.useRef({
    fields: /* @__PURE__ */ new Map()
  });
  const submittedRef = React135.useRef(false);
  const submitAttemptedRef = React135.useRef(false);
  const focusControl = useStableCallback((control) => {
    if (!control) {
      return;
    }
    control.focus();
    if (control.tagName === "INPUT") {
      control.select();
    }
  });
  const [errors, setErrors] = React135.useState(externalErrors);
  useValueChanged(externalErrors, () => {
    setErrors(externalErrors);
  });
  React135.useEffect(() => {
    if (!submittedRef.current) {
      return;
    }
    submittedRef.current = false;
    const invalidFields = Array.from(formRef.current.fields.values()).filter((field) => field.validityData.state.valid === false);
    if (invalidFields.length) {
      focusControl(invalidFields[0].controlRef.current);
    }
  }, [errors, focusControl]);
  const handleImperativeValidate = React135.useCallback((fieldName) => {
    const values = Array.from(formRef.current.fields.values());
    if (fieldName) {
      const namedField = values.find((field) => field.name === fieldName);
      if (namedField) {
        namedField.validate(false);
      }
    } else {
      values.forEach((field) => {
        field.validate(false);
      });
    }
  }, []);
  React135.useImperativeHandle(actionsRef, () => ({
    validate: handleImperativeValidate
  }), [handleImperativeValidate]);
  const element = useRenderElement("form", componentProps, {
    ref: forwardedRef,
    props: [{
      noValidate: true,
      onSubmit(event) {
        submitAttemptedRef.current = true;
        let values = Array.from(formRef.current.fields.values());
        values.forEach((field) => {
          field.validate();
        });
        values = Array.from(formRef.current.fields.values());
        const invalidFields = values.filter((field) => !field.validityData.state.valid);
        if (invalidFields.length) {
          event.preventDefault();
          focusControl(invalidFields[0].controlRef.current);
        } else {
          submittedRef.current = true;
          onSubmit?.(event);
          if (onFormSubmit) {
            event.preventDefault();
            const formValues = values.reduce((acc, field) => {
              if (field.name) {
                acc[field.name] = field.getValue();
              }
              return acc;
            }, {});
            onFormSubmit(formValues, createGenericEventDetails(reason_parts_exports.none, event.nativeEvent));
          }
        }
      }
    }, elementProps]
  });
  const clearErrors = useStableCallback((name) => {
    if (name && errors && EMPTY_OBJECT.hasOwnProperty.call(errors, name)) {
      const nextErrors = {
        ...errors
      };
      delete nextErrors[name];
      setErrors(nextErrors);
    }
  });
  const contextValue = React135.useMemo(() => ({
    formRef,
    validationMode,
    errors: errors ?? EMPTY_OBJECT,
    clearErrors,
    submitAttemptedRef
  }), [formRef, validationMode, errors, clearErrors]);
  return (0, import_jsx_runtime49.jsx)(FormContext.Provider, {
    value: contextValue,
    children: element
  });
});
if (true) Form.displayName = "Form";

// node_modules/@base-ui/react/esm/menubar/Menubar.js
var React136 = __toESM(require_react(), 1);
var import_jsx_runtime50 = __toESM(require_jsx_runtime(), 1);
var menubarStateAttributesMapping = {
  hasSubmenuOpen(value) {
    return {
      "data-has-submenu-open": value ? "true" : "false"
    };
  }
};
var Menubar = React136.forwardRef(function Menubar2(props, forwardedRef) {
  const {
    orientation = "horizontal",
    loopFocus = true,
    render,
    className,
    modal = true,
    disabled = false,
    id: idProp,
    ...elementProps
  } = props;
  const [contentElement, setContentElement] = React136.useState(null);
  const [hasSubmenuOpen, setHasSubmenuOpen] = React136.useState(false);
  const {
    openMethod,
    triggerProps: interactionTypeProps
  } = useOpenInteractionType(hasSubmenuOpen);
  useScrollLock(modal && hasSubmenuOpen && openMethod !== "touch", contentElement);
  const id = useBaseUiId(idProp);
  const state = {
    orientation,
    modal,
    hasSubmenuOpen
  };
  const contentRef = React136.useRef(null);
  const allowMouseUpTriggerRef = React136.useRef(false);
  const context = React136.useMemo(() => ({
    contentElement,
    setContentElement,
    setHasSubmenuOpen,
    hasSubmenuOpen,
    modal,
    disabled,
    orientation,
    allowMouseUpTriggerRef,
    rootId: id
  }), [contentElement, hasSubmenuOpen, modal, disabled, orientation, id]);
  return (0, import_jsx_runtime50.jsx)(MenubarContext.Provider, {
    value: context,
    children: (0, import_jsx_runtime50.jsx)(FloatingTree, {
      children: (0, import_jsx_runtime50.jsx)(MenubarContent, {
        children: (0, import_jsx_runtime50.jsx)(CompositeRoot, {
          render,
          className,
          state,
          stateAttributesMapping: menubarStateAttributesMapping,
          refs: [forwardedRef, setContentElement, contentRef],
          props: [{
            role: "menubar",
            id
          }, interactionTypeProps, elementProps],
          orientation,
          loopFocus,
          highlightItemOnHover: hasSubmenuOpen
        })
      })
    })
  });
});
if (true) Menubar.displayName = "Menubar";
function MenubarContent(props) {
  const nodeId = useFloatingNodeId();
  const {
    events: menuEvents
  } = useFloatingTree();
  const rootContext = useMenubarContext();
  React136.useEffect(() => {
    function onSubmenuOpenChange(details) {
      if (!details.nodeId || details.parentNodeId !== nodeId) {
        return;
      }
      if (details.open) {
        if (!rootContext.hasSubmenuOpen) {
          rootContext.setHasSubmenuOpen(true);
        }
      } else if (details.reason !== "sibling-open" && details.reason !== "list-navigation") {
        rootContext.setHasSubmenuOpen(false);
      }
    }
    menuEvents.on("menuopenchange", onSubmenuOpenChange);
    return () => {
      menuEvents.off("menuopenchange", onSubmenuOpenChange);
    };
  }, [menuEvents, nodeId, rootContext]);
  return (0, import_jsx_runtime50.jsx)(FloatingNode, {
    id: nodeId,
    children: props.children
  });
}

// node_modules/@base-ui/react/esm/meter/index.parts.js
var index_parts_exports16 = {};
__export(index_parts_exports16, {
  Indicator: () => MeterIndicator,
  Label: () => MeterLabel,
  Root: () => MeterRoot,
  Track: () => MeterTrack,
  Value: () => MeterValue
});

// node_modules/@base-ui/react/esm/meter/root/MeterRoot.js
var React138 = __toESM(require_react(), 1);

// node_modules/@base-ui/react/esm/meter/root/MeterRootContext.js
var React137 = __toESM(require_react(), 1);
var MeterRootContext = React137.createContext(void 0);
if (true) MeterRootContext.displayName = "MeterRootContext";
function useMeterRootContext() {
  const context = React137.useContext(MeterRootContext);
  if (context === void 0) {
    throw new Error(true ? "Base UI: MeterRootContext is missing. Meter parts must be placed within <Meter.Root>." : formatErrorMessage_default(38));
  }
  return context;
}

// node_modules/@base-ui/react/esm/utils/formatNumber.js
var cache = /* @__PURE__ */ new Map();
function getFormatter(locale, options) {
  const optionsString = JSON.stringify({
    locale,
    options
  });
  const cachedFormatter = cache.get(optionsString);
  if (cachedFormatter) {
    return cachedFormatter;
  }
  const formatter = new Intl.NumberFormat(locale, options);
  cache.set(optionsString, formatter);
  return formatter;
}
function formatNumber(value, locale, options) {
  if (value == null) {
    return "";
  }
  return getFormatter(locale, options).format(value);
}
function formatNumberMaxPrecision(value, locale, options) {
  return formatNumber(value, locale, {
    ...options,
    maximumFractionDigits: 20
  });
}
function formatNumberValue(value, locale, format) {
  if (value == null) {
    return "";
  }
  if (!format) {
    return formatNumber(value / 100, locale, {
      style: "percent"
    });
  }
  return formatNumber(value, locale, format);
}

// node_modules/@base-ui/react/esm/meter/root/MeterRoot.js
var import_jsx_runtime51 = __toESM(require_jsx_runtime(), 1);
var MeterRoot = React138.forwardRef(function MeterRoot2(componentProps, forwardedRef) {
  const {
    format,
    getAriaValueText,
    locale,
    max = 100,
    min = 0,
    value: valueProp,
    render,
    className,
    children,
    ...elementProps
  } = componentProps;
  const [labelId, setLabelId] = React138.useState();
  const formattedValue = formatNumberValue(valueProp, locale, format);
  let ariaValuetext = `${valueProp}%`;
  if (getAriaValueText) {
    ariaValuetext = getAriaValueText(formattedValue, valueProp);
  } else if (format) {
    ariaValuetext = formattedValue;
  }
  const defaultProps = {
    "aria-labelledby": labelId,
    "aria-valuemax": max,
    "aria-valuemin": min,
    "aria-valuenow": valueProp,
    "aria-valuetext": ariaValuetext,
    role: "meter",
    children: (0, import_jsx_runtime51.jsxs)(React138.Fragment, {
      children: [children, (0, import_jsx_runtime51.jsx)("span", {
        role: "presentation",
        style: visuallyHidden,
        children: "x"
      })]
    })
  };
  const contextValue = React138.useMemo(() => ({
    formattedValue,
    max,
    min,
    setLabelId,
    value: valueProp
  }), [formattedValue, max, min, setLabelId, valueProp]);
  const element = useRenderElement("div", componentProps, {
    ref: forwardedRef,
    props: [defaultProps, elementProps]
  });
  return (0, import_jsx_runtime51.jsx)(MeterRootContext.Provider, {
    value: contextValue,
    children: element
  });
});
if (true) MeterRoot.displayName = "MeterRoot";

// node_modules/@base-ui/react/esm/meter/track/MeterTrack.js
var React139 = __toESM(require_react(), 1);
var MeterTrack = React139.forwardRef(function MeterTrack2(componentProps, forwardedRef) {
  const {
    render,
    className,
    ...elementProps
  } = componentProps;
  return useRenderElement("div", componentProps, {
    ref: forwardedRef,
    props: elementProps
  });
});
if (true) MeterTrack.displayName = "MeterTrack";

// node_modules/@base-ui/react/esm/meter/indicator/MeterIndicator.js
var React140 = __toESM(require_react(), 1);

// node_modules/@base-ui/react/esm/utils/valueToPercent.js
function valueToPercent(value, min, max) {
  return (value - min) * 100 / (max - min);
}

// node_modules/@base-ui/react/esm/meter/indicator/MeterIndicator.js
var MeterIndicator = React140.forwardRef(function MeterIndicator2(componentProps, forwardedRef) {
  const {
    render,
    className,
    ...elementProps
  } = componentProps;
  const context = useMeterRootContext();
  const percentageWidth = valueToPercent(context.value, context.min, context.max);
  return useRenderElement("div", componentProps, {
    ref: forwardedRef,
    props: [{
      style: {
        insetInlineStart: 0,
        height: "inherit",
        width: `${percentageWidth}%`
      }
    }, elementProps]
  });
});
if (true) MeterIndicator.displayName = "MeterIndicator";

// node_modules/@base-ui/react/esm/meter/value/MeterValue.js
var React141 = __toESM(require_react(), 1);
var MeterValue = React141.forwardRef(function MeterValue2(componentProps, forwardedRef) {
  const {
    className,
    render,
    children,
    ...elementProps
  } = componentProps;
  const {
    value,
    formattedValue
  } = useMeterRootContext();
  return useRenderElement("span", componentProps, {
    ref: forwardedRef,
    props: [{
      "aria-hidden": true,
      children: typeof children === "function" ? children(formattedValue, value) : (formattedValue || value) ?? ""
    }, elementProps]
  });
});
if (true) MeterValue.displayName = "MeterValue";

// node_modules/@base-ui/react/esm/meter/label/MeterLabel.js
var React142 = __toESM(require_react(), 1);
var MeterLabel = React142.forwardRef(function MeterLabel2(componentProps, forwardedRef) {
  const {
    render,
    className,
    id: idProp,
    ...elementProps
  } = componentProps;
  const {
    setLabelId
  } = useMeterRootContext();
  const id = useRegisteredLabelId(idProp, setLabelId);
  return useRenderElement("span", componentProps, {
    ref: forwardedRef,
    props: [{
      id,
      role: "presentation"
    }, elementProps]
  });
});
if (true) MeterLabel.displayName = "MeterLabel";

// node_modules/@base-ui/react/esm/navigation-menu/index.parts.js
var index_parts_exports17 = {};
__export(index_parts_exports17, {
  Arrow: () => NavigationMenuArrow,
  Backdrop: () => NavigationMenuBackdrop,
  Content: () => NavigationMenuContent,
  Icon: () => NavigationMenuIcon,
  Item: () => NavigationMenuItem,
  Link: () => NavigationMenuLink,
  List: () => NavigationMenuList,
  Popup: () => NavigationMenuPopup,
  Portal: () => NavigationMenuPortal,
  Positioner: () => NavigationMenuPositioner,
  Root: () => NavigationMenuRoot,
  Trigger: () => NavigationMenuTrigger,
  Viewport: () => NavigationMenuViewport
});

// node_modules/@base-ui/react/esm/navigation-menu/root/NavigationMenuRoot.js
var React144 = __toESM(require_react(), 1);

// node_modules/@base-ui/react/esm/navigation-menu/root/NavigationMenuRootContext.js
var React143 = __toESM(require_react(), 1);
var NavigationMenuRootContext = React143.createContext(void 0);
if (true) NavigationMenuRootContext.displayName = "NavigationMenuRootContext";
if (true) {
  NavigationMenuRootContext.displayName = "NavigationMenuRootContext";
}
function useNavigationMenuRootContext(optional) {
  const context = React143.useContext(NavigationMenuRootContext);
  if (context === void 0 && !optional) {
    throw new Error(true ? "Base UI: NavigationMenuRootContext is missing. Navigation Menu parts must be placed within <NavigationMenu.Root>." : formatErrorMessage_default(41));
  }
  return context;
}
var NavigationMenuTreeContext = React143.createContext(void 0);
if (true) NavigationMenuTreeContext.displayName = "NavigationMenuTreeContext";
function useNavigationMenuTreeContext() {
  return React143.useContext(NavigationMenuTreeContext);
}

// node_modules/@base-ui/react/esm/navigation-menu/popup/NavigationMenuPopupCssVars.js
var NavigationMenuPopupCssVars = (function(NavigationMenuPopupCssVars2) {
  NavigationMenuPopupCssVars2["popupWidth"] = "--popup-width";
  NavigationMenuPopupCssVars2["popupHeight"] = "--popup-height";
  return NavigationMenuPopupCssVars2;
})({});

// node_modules/@base-ui/react/esm/navigation-menu/positioner/NavigationMenuPositionerCssVars.js
var NavigationMenuPositionerCssVars = (function(NavigationMenuPositionerCssVars2) {
  NavigationMenuPositionerCssVars2["availableWidth"] = "--available-width";
  NavigationMenuPositionerCssVars2["availableHeight"] = "--available-height";
  NavigationMenuPositionerCssVars2["anchorWidth"] = "--anchor-width";
  NavigationMenuPositionerCssVars2["anchorHeight"] = "--anchor-height";
  NavigationMenuPositionerCssVars2["transformOrigin"] = "--transform-origin";
  NavigationMenuPositionerCssVars2["positionerWidth"] = "--positioner-width";
  NavigationMenuPositionerCssVars2["positionerHeight"] = "--positioner-height";
  return NavigationMenuPositionerCssVars2;
})({});

// node_modules/@base-ui/react/esm/navigation-menu/root/NavigationMenuRoot.js
var import_jsx_runtime52 = __toESM(require_jsx_runtime(), 1);
var blockedReturnFocusReasons = /* @__PURE__ */ new Set([reason_parts_exports.triggerHover, reason_parts_exports.outsidePress, reason_parts_exports.focusOut]);
function setSharedFixedSize(popupElement, positionerElement) {
  const {
    width,
    height
  } = getCssDimensions(popupElement);
  if (width === 0 || height === 0) {
    return;
  }
  popupElement.style.setProperty(NavigationMenuPopupCssVars.popupWidth, `${width}px`);
  popupElement.style.setProperty(NavigationMenuPopupCssVars.popupHeight, `${height}px`);
  positionerElement.style.setProperty(NavigationMenuPositionerCssVars.positionerWidth, `${width}px`);
  positionerElement.style.setProperty(NavigationMenuPositionerCssVars.positionerHeight, `${height}px`);
}
var NavigationMenuRoot = React144.forwardRef(function NavigationMenuRoot2(componentProps, forwardedRef) {
  const {
    defaultValue = null,
    value: valueParam,
    onValueChange,
    actionsRef,
    delay = 50,
    closeDelay = 50,
    orientation = "horizontal",
    onOpenChangeComplete
  } = componentProps;
  const nested = useFloatingParentNodeId() != null;
  const parentRootContext = useNavigationMenuRootContext(true);
  const [value, setValueUnwrapped] = useControlled({
    controlled: valueParam,
    default: defaultValue,
    name: "NavigationMenu",
    state: "value"
  });
  const open = value != null;
  const closeReasonRef = React144.useRef(void 0);
  const rootRef = React144.useRef(null);
  const [positionerElement, setPositionerElement] = React144.useState(null);
  const [popupElement, setPopupElement] = React144.useState(null);
  const [viewportElement, setViewportElement] = React144.useState(null);
  const [viewportTargetElement, setViewportTargetElement] = React144.useState(null);
  const [activationDirection, setActivationDirection] = React144.useState(null);
  const [floatingRootContext, setFloatingRootContext] = React144.useState(void 0);
  const [viewportInert, setViewportInert] = React144.useState(false);
  const prevTriggerElementRef = React144.useRef(null);
  const currentContentRef = React144.useRef(null);
  const beforeInsideRef = React144.useRef(null);
  const afterInsideRef = React144.useRef(null);
  const beforeOutsideRef = React144.useRef(null);
  const afterOutsideRef = React144.useRef(null);
  const {
    mounted,
    setMounted,
    transitionStatus
  } = useTransitionStatus(open);
  React144.useEffect(() => {
    setViewportInert(false);
  }, [value]);
  const setValue = useStableCallback((nextValue, eventDetails) => {
    if (!nextValue) {
      closeReasonRef.current = eventDetails.reason;
      setActivationDirection(null);
      setFloatingRootContext(void 0);
      if (positionerElement && popupElement) {
        setSharedFixedSize(popupElement, positionerElement);
      }
    }
    if (nextValue !== value) {
      onValueChange?.(nextValue, eventDetails);
    }
    if (eventDetails.isCanceled) {
      return;
    }
    setValueUnwrapped(nextValue);
    if (nested && !nextValue && eventDetails.reason === reason_parts_exports.linkPress && parentRootContext) {
      parentRootContext.setValue(null, eventDetails);
    }
  });
  const handleUnmount = useStableCallback(() => {
    const doc = ownerDocument(rootRef.current);
    const activeEl = activeElement(doc);
    const isReturnFocusBlocked = closeReasonRef.current ? blockedReturnFocusReasons.has(closeReasonRef.current) : false;
    if (!isReturnFocusBlocked && isHTMLElement(prevTriggerElementRef.current) && (activeEl === ownerDocument(popupElement).body || contains(popupElement, activeEl)) && popupElement) {
      prevTriggerElementRef.current.focus({
        preventScroll: true
      });
      prevTriggerElementRef.current = void 0;
    }
    setMounted(false);
    onOpenChangeComplete?.(false);
    setActivationDirection(null);
    setFloatingRootContext(void 0);
    currentContentRef.current = null;
    closeReasonRef.current = void 0;
  });
  useOpenChangeComplete({
    enabled: !actionsRef,
    open,
    ref: {
      current: popupElement
    },
    onComplete() {
      if (!open) {
        handleUnmount();
      }
    }
  });
  useOpenChangeComplete({
    enabled: !actionsRef,
    open,
    ref: {
      current: viewportTargetElement
    },
    onComplete() {
      if (!open) {
        handleUnmount();
      }
    }
  });
  const contextValue = React144.useMemo(() => ({
    open,
    value,
    setValue,
    mounted,
    transitionStatus,
    positionerElement,
    setPositionerElement,
    popupElement,
    setPopupElement,
    viewportElement,
    setViewportElement,
    viewportTargetElement,
    setViewportTargetElement,
    activationDirection,
    setActivationDirection,
    floatingRootContext,
    setFloatingRootContext,
    currentContentRef,
    nested,
    rootRef,
    beforeInsideRef,
    afterInsideRef,
    beforeOutsideRef,
    afterOutsideRef,
    prevTriggerElementRef,
    delay,
    closeDelay,
    orientation,
    viewportInert,
    setViewportInert
  }), [open, value, setValue, mounted, transitionStatus, positionerElement, popupElement, viewportElement, viewportTargetElement, activationDirection, floatingRootContext, nested, delay, closeDelay, orientation, viewportInert]);
  const jsx = (0, import_jsx_runtime52.jsx)(NavigationMenuRootContext.Provider, {
    value: contextValue,
    children: (0, import_jsx_runtime52.jsx)(TreeContext, {
      componentProps,
      forwardedRef,
      children: componentProps.children
    })
  });
  if (!nested) {
    return (0, import_jsx_runtime52.jsx)(FloatingTree, {
      children: jsx
    });
  }
  return jsx;
});
if (true) NavigationMenuRoot.displayName = "NavigationMenuRoot";
function TreeContext(props) {
  const {
    className,
    render,
    defaultValue,
    value: valueParam,
    onValueChange,
    actionsRef,
    delay,
    closeDelay,
    orientation,
    onOpenChangeComplete,
    ...elementProps
  } = props.componentProps;
  const nodeId = useFloatingNodeId();
  const {
    rootRef,
    nested
  } = useNavigationMenuRootContext();
  const {
    open
  } = useNavigationMenuRootContext();
  const state = {
    open,
    nested
  };
  const element = useRenderElement(nested ? "div" : "nav", props.componentProps, {
    state,
    ref: [props.forwardedRef, rootRef],
    props: elementProps
  });
  return (0, import_jsx_runtime52.jsx)(NavigationMenuTreeContext.Provider, {
    value: nodeId,
    children: (0, import_jsx_runtime52.jsx)(FloatingNode, {
      id: nodeId,
      children: element
    })
  });
}

// node_modules/@base-ui/react/esm/navigation-menu/list/NavigationMenuList.js
var React146 = __toESM(require_react(), 1);

// node_modules/@base-ui/react/esm/navigation-menu/utils/constants.js
var NAVIGATION_MENU_TRIGGER_IDENTIFIER = "data-base-ui-navigation-menu-trigger";

// node_modules/@base-ui/react/esm/navigation-menu/list/NavigationMenuDismissContext.js
var React145 = __toESM(require_react(), 1);
var NavigationMenuDismissContext = React145.createContext(void 0);
if (true) NavigationMenuDismissContext.displayName = "NavigationMenuDismissContext";
function useNavigationMenuDismissContext() {
  return React145.useContext(NavigationMenuDismissContext);
}

// node_modules/@base-ui/react/esm/navigation-menu/list/NavigationMenuList.js
var import_jsx_runtime53 = __toESM(require_jsx_runtime(), 1);
var NavigationMenuList = React146.forwardRef(function NavigationMenuList2(componentProps, forwardedRef) {
  const {
    className,
    render,
    ...elementProps
  } = componentProps;
  const {
    orientation,
    open,
    floatingRootContext,
    positionerElement,
    value,
    closeDelay,
    viewportElement,
    nested
  } = useNavigationMenuRootContext();
  const fallbackContext = React146.useMemo(() => getEmptyRootContext(), []);
  const context = floatingRootContext || fallbackContext;
  const interactionsEnabled = positionerElement ? true : !value;
  const hoverInteractionsEnabled = positionerElement || viewportElement ? true : !value;
  useHoverFloatingInteraction(context, {
    enabled: Boolean(floatingRootContext) && hoverInteractionsEnabled,
    closeDelay
  });
  const dismiss = useDismiss(context, {
    enabled: interactionsEnabled,
    outsidePressEvent: "intentional",
    outsidePress(event) {
      const target = getTarget(event);
      const closestNavigationMenuTrigger = target?.closest(`[${NAVIGATION_MENU_TRIGGER_IDENTIFIER}]`);
      return closestNavigationMenuTrigger === null;
    }
  });
  const dismissProps = floatingRootContext ? dismiss : void 0;
  const state = {
    open
  };
  const defaultProps = nested ? {
    "aria-orientation": orientation
  } : {
    onKeyDown(event) {
      const shouldStop = orientation === "horizontal" && (event.key === "ArrowLeft" || event.key === "ArrowRight") || orientation === "vertical" && (event.key === "ArrowUp" || event.key === "ArrowDown");
      if (shouldStop) {
        event.stopPropagation();
      }
    }
  };
  const props = [dismissProps?.floating || EMPTY_OBJECT, defaultProps, elementProps];
  const element = useRenderElement("ul", componentProps, {
    state,
    ref: forwardedRef,
    props,
    enabled: nested
  });
  if (nested) {
    return (0, import_jsx_runtime53.jsx)(NavigationMenuDismissContext.Provider, {
      value: dismissProps,
      children: element
    });
  }
  return (0, import_jsx_runtime53.jsx)(NavigationMenuDismissContext.Provider, {
    value: dismissProps,
    children: (0, import_jsx_runtime53.jsx)(CompositeRoot, {
      render,
      className,
      state,
      refs: [forwardedRef],
      props,
      loopFocus: false,
      orientation,
      tag: "ul"
    })
  });
});
if (true) NavigationMenuList.displayName = "NavigationMenuList";

// node_modules/@base-ui/react/esm/navigation-menu/item/NavigationMenuItem.js
var React148 = __toESM(require_react(), 1);

// node_modules/@base-ui/react/esm/navigation-menu/item/NavigationMenuItemContext.js
var React147 = __toESM(require_react(), 1);
var NavigationMenuItemContext = React147.createContext(void 0);
if (true) NavigationMenuItemContext.displayName = "NavigationMenuItemContext";
function useNavigationMenuItemContext() {
  const value = React147.useContext(NavigationMenuItemContext);
  if (!value) {
    throw new Error(true ? "Base UI: NavigationMenuItem parts must be used within a <NavigationMenu.Item>." : formatErrorMessage_default(39));
  }
  return value;
}

// node_modules/@base-ui/react/esm/navigation-menu/item/NavigationMenuItem.js
var import_jsx_runtime54 = __toESM(require_jsx_runtime(), 1);
var NavigationMenuItem = React148.forwardRef(function NavigationMenuItem2(componentProps, forwardedRef) {
  const {
    className,
    render,
    value: valueProp,
    ...elementProps
  } = componentProps;
  const fallbackValue = useBaseUiId();
  const value = valueProp ?? fallbackValue;
  const element = useRenderElement("li", componentProps, {
    ref: forwardedRef,
    props: elementProps
  });
  const contextValue = React148.useMemo(() => ({
    value
  }), [value]);
  return (0, import_jsx_runtime54.jsx)(NavigationMenuItemContext.Provider, {
    value: contextValue,
    children: element
  });
});
if (true) NavigationMenuItem.displayName = "NavigationMenuItem";

// node_modules/@base-ui/react/esm/navigation-menu/content/NavigationMenuContent.js
var React149 = __toESM(require_react(), 1);
var ReactDOM6 = __toESM(require_react_dom(), 1);
var import_jsx_runtime55 = __toESM(require_jsx_runtime(), 1);
var stateAttributesMapping17 = {
  ...popupStateMapping,
  ...transitionStatusMapping,
  activationDirection(value) {
    if (!value) {
      return null;
    }
    return {
      "data-activation-direction": value
    };
  }
};
var NavigationMenuContent = React149.forwardRef(function NavigationMenuContent2(componentProps, forwardedRef) {
  const {
    className,
    render,
    keepMounted = false,
    ...elementProps
  } = componentProps;
  const {
    mounted: popupMounted,
    viewportElement,
    value,
    activationDirection,
    currentContentRef,
    viewportTargetElement
  } = useNavigationMenuRootContext();
  const {
    value: itemValue
  } = useNavigationMenuItemContext();
  const nodeId = useNavigationMenuTreeContext();
  const open = popupMounted && value === itemValue;
  const ref = React149.useRef(null);
  const [hasMountedInPortal, setHasMountedInPortal] = React149.useState(false);
  const [focusInside, setFocusInside] = React149.useState(false);
  const {
    mounted,
    setMounted,
    transitionStatus
  } = useTransitionStatus(open);
  if (mounted && !popupMounted) {
    setMounted(false);
  }
  useOpenChangeComplete({
    ref,
    open,
    onComplete() {
      if (!open) {
        setMounted(false);
      }
    }
  });
  useIsoLayoutEffect(() => {
    if (open && ref.current) {
      currentContentRef.current = ref.current;
    }
  }, [open, currentContentRef]);
  const state = {
    open,
    transitionStatus,
    activationDirection
  };
  const handleCurrentContentRef = React149.useCallback((node) => {
    if (node) {
      currentContentRef.current = node;
    }
  }, [currentContentRef]);
  const commonProps = {
    onFocus(event) {
      const target = getTarget(event.nativeEvent);
      if (target?.hasAttribute("data-base-ui-focus-guard")) {
        return;
      }
      setFocusInside(true);
    },
    onBlur(event) {
      if (!contains(event.currentTarget, event.relatedTarget)) {
        setFocusInside(false);
      }
    }
  };
  const defaultProps = !open && mounted ? {
    style: {
      position: "absolute",
      top: 0,
      left: 0
    },
    inert: inertValue(!focusInside),
    ...commonProps
  } : commonProps;
  const portalContainer = viewportTargetElement || viewportElement;
  const hidden = keepMounted && !mounted;
  const shouldRenderInline = keepMounted && !portalContainer && !hasMountedInPortal;
  if (keepMounted && portalContainer && !hasMountedInPortal) {
    setHasMountedInPortal(true);
  }
  if (shouldRenderInline) {
    return (0, import_jsx_runtime55.jsx)(CompositeRoot, {
      render,
      className,
      state,
      refs: [forwardedRef],
      props: [defaultProps, {
        hidden: true
      }, elementProps],
      stateAttributesMapping: stateAttributesMapping17
    });
  }
  if (!portalContainer || !mounted && !keepMounted) {
    return null;
  }
  return ReactDOM6.createPortal((0, import_jsx_runtime55.jsx)(FloatingNode, {
    id: nodeId,
    children: (0, import_jsx_runtime55.jsx)(CompositeRoot, {
      render,
      className,
      state,
      refs: [forwardedRef, ref, handleCurrentContentRef],
      props: [defaultProps, hidden ? {
        hidden: true
      } : EMPTY_OBJECT, elementProps],
      stateAttributesMapping: stateAttributesMapping17
    })
  }), portalContainer);
});
if (true) NavigationMenuContent.displayName = "NavigationMenuContent";

// node_modules/@base-ui/react/esm/navigation-menu/trigger/NavigationMenuTrigger.js
var React150 = __toESM(require_react(), 1);
var ReactDOM7 = __toESM(require_react_dom(), 1);

// node_modules/@base-ui/react/esm/navigation-menu/utils/isOutsideMenuEvent.js
function isOutsideMenuEvent({
  currentTarget,
  relatedTarget
}, params) {
  const {
    popupElement,
    viewportElement,
    rootRef,
    tree,
    nodeId
  } = params;
  const nodeChildrenContains = tree ? getNodeChildren(tree.nodesRef.current, nodeId).some((node) => contains(node.context?.elements.floating, relatedTarget)) : [];
  if (!popupElement) {
    return !contains(rootRef.current, relatedTarget) && !nodeChildrenContains;
  }
  const floatingElement = popupElement || viewportElement;
  return !contains(floatingElement, currentTarget) && !contains(floatingElement, relatedTarget) && !contains(rootRef.current, relatedTarget) && !nodeChildrenContains && !(contains(floatingElement, relatedTarget) && relatedTarget?.hasAttribute("data-base-ui-focus-guard"));
}

// node_modules/@base-ui/react/esm/navigation-menu/trigger/NavigationMenuTrigger.js
var import_jsx_runtime56 = __toESM(require_jsx_runtime(), 1);
var DEFAULT_SIZE = {
  width: 0,
  height: 0
};
var NavigationMenuTrigger = React150.forwardRef(function NavigationMenuTrigger2(componentProps, forwardedRef) {
  const {
    className,
    render,
    nativeButton = true,
    disabled,
    ...elementProps
  } = componentProps;
  const {
    value,
    setValue,
    mounted,
    open,
    positionerElement,
    setActivationDirection,
    setFloatingRootContext,
    popupElement,
    viewportElement,
    transitionStatus,
    rootRef,
    beforeOutsideRef,
    afterOutsideRef,
    afterInsideRef,
    beforeInsideRef,
    prevTriggerElementRef,
    currentContentRef,
    delay,
    closeDelay,
    orientation,
    setViewportInert,
    nested
  } = useNavigationMenuRootContext();
  const {
    value: itemValue
  } = useNavigationMenuItemContext();
  const nodeId = useNavigationMenuTreeContext();
  const tree = useFloatingTree();
  const dismissProps = useNavigationMenuDismissContext();
  const stickIfOpenTimeout = useTimeout();
  const focusFrame = useAnimationFrame();
  const mutationFrame = useAnimationFrame();
  const resizeFrame = useAnimationFrame();
  const sizeFrame = useAnimationFrame();
  const [triggerElement, setTriggerElement] = React150.useState(null);
  const [stickIfOpen, setStickIfOpen] = React150.useState(true);
  const [pointerType, setPointerType] = React150.useState("");
  const triggerElementRef = React150.useRef(null);
  const allowFocusRef = React150.useRef(false);
  const prevSizeRef = React150.useRef(DEFAULT_SIZE);
  const animationAbortControllerRef = React150.useRef(null);
  const skipAutoSizeSyncRef = React150.useRef(false);
  const isActiveItem = open && value === itemValue;
  const isActiveItemRef = useValueAsRef(isActiveItem);
  const interactionsEnabled = positionerElement ? true : !value;
  const hoverFloatingElement = positionerElement || viewportElement;
  const hoverInteractionsEnabled = hoverFloatingElement ? true : !value;
  const runOnceAnimationsFinish = useAnimationsFinished(popupElement, false, false);
  const handleTriggerElement = React150.useCallback((element) => {
    triggerElementRef.current = element;
    setTriggerElement(element);
  }, []);
  React150.useEffect(() => {
    animationAbortControllerRef.current?.abort();
  }, [isActiveItem]);
  function setAutoSizes() {
    if (!popupElement) {
      return;
    }
    popupElement.style.setProperty(NavigationMenuPopupCssVars.popupWidth, "auto");
    popupElement.style.setProperty(NavigationMenuPopupCssVars.popupHeight, "auto");
  }
  function clearFixedSizes() {
    if (!popupElement || !positionerElement) {
      return;
    }
    popupElement.style.removeProperty(NavigationMenuPopupCssVars.popupWidth);
    popupElement.style.removeProperty(NavigationMenuPopupCssVars.popupHeight);
    positionerElement.style.removeProperty(NavigationMenuPositionerCssVars.positionerWidth);
    positionerElement.style.removeProperty(NavigationMenuPositionerCssVars.positionerHeight);
  }
  function setSharedFixedSizes(width, height) {
    if (!popupElement || !positionerElement) {
      return;
    }
    popupElement.style.setProperty(NavigationMenuPopupCssVars.popupWidth, `${width}px`);
    popupElement.style.setProperty(NavigationMenuPopupCssVars.popupHeight, `${height}px`);
    positionerElement.style.setProperty(NavigationMenuPositionerCssVars.positionerWidth, `${width}px`);
    positionerElement.style.setProperty(NavigationMenuPositionerCssVars.positionerHeight, `${height}px`);
  }
  function scheduleAutoSizeReset() {
    animationAbortControllerRef.current = new AbortController();
    runOnceAnimationsFinish(setAutoSizes, animationAbortControllerRef.current.signal);
  }
  const handleValueChange = useStableCallback((currentWidth, currentHeight, options = {}) => {
    if (!popupElement || !positionerElement) {
      return;
    }
    const {
      syncPositioner = false
    } = options;
    clearFixedSizes();
    const {
      width,
      height
    } = getCssDimensions(popupElement);
    const measuredWidth = width || prevSizeRef.current.width;
    const measuredHeight = height || prevSizeRef.current.height;
    if (currentHeight === 0 || currentWidth === 0) {
      currentWidth = measuredWidth;
      currentHeight = measuredHeight;
    }
    popupElement.style.setProperty(NavigationMenuPopupCssVars.popupWidth, `${currentWidth}px`);
    popupElement.style.setProperty(NavigationMenuPopupCssVars.popupHeight, `${currentHeight}px`);
    positionerElement.style.setProperty(NavigationMenuPositionerCssVars.positionerWidth, `${syncPositioner ? currentWidth : measuredWidth}px`);
    positionerElement.style.setProperty(NavigationMenuPositionerCssVars.positionerHeight, `${syncPositioner ? currentHeight : measuredHeight}px`);
    sizeFrame.request(() => {
      popupElement.style.setProperty(NavigationMenuPopupCssVars.popupWidth, `${measuredWidth}px`);
      popupElement.style.setProperty(NavigationMenuPopupCssVars.popupHeight, `${measuredHeight}px`);
      if (syncPositioner) {
        positionerElement.style.setProperty(NavigationMenuPositionerCssVars.positionerWidth, `${measuredWidth}px`);
        positionerElement.style.setProperty(NavigationMenuPositionerCssVars.positionerHeight, `${measuredHeight}px`);
      }
      scheduleAutoSizeReset();
    });
  });
  const handleInterruptedMutationResize = useStableCallback((currentWidth, currentHeight) => {
    if (!popupElement || !positionerElement) {
      return;
    }
    sizeFrame.cancel();
    mutationFrame.cancel();
    animationAbortControllerRef.current?.abort();
    animationAbortControllerRef.current = null;
    if (currentWidth === 0 || currentHeight === 0) {
      return;
    }
    setSharedFixedSizes(currentWidth, currentHeight);
    mutationFrame.request(() => {
      mutationFrame.request(() => {
        clearFixedSizes();
        const {
          width,
          height
        } = getCssDimensions(popupElement);
        const measuredWidth = width || currentWidth || prevSizeRef.current.width;
        const measuredHeight = height || currentHeight || prevSizeRef.current.height;
        setSharedFixedSizes(currentWidth, currentHeight);
        sizeFrame.request(() => {
          setSharedFixedSizes(measuredWidth, measuredHeight);
          scheduleAutoSizeReset();
        });
      });
    });
  });
  const syncCurrentSize = useStableCallback(() => {
    if (!popupElement || !positionerElement) {
      return;
    }
    sizeFrame.cancel();
    animationAbortControllerRef.current?.abort();
    animationAbortControllerRef.current = null;
    clearFixedSizes();
    const {
      width,
      height
    } = getCssDimensions(popupElement);
    if (width === 0 || height === 0) {
      return;
    }
    prevSizeRef.current = {
      width,
      height
    };
    setAutoSizes();
    positionerElement.style.setProperty(NavigationMenuPositionerCssVars.positionerWidth, `${width}px`);
    positionerElement.style.setProperty(NavigationMenuPositionerCssVars.positionerHeight, `${height}px`);
  });
  const getMutationBaseline = useStableCallback(() => {
    if (!popupElement) {
      return {
        size: prevSizeRef.current,
        syncPositioner: false
      };
    }
    const popupWidth = popupElement.style.getPropertyValue(NavigationMenuPopupCssVars.popupWidth);
    const popupHeight = popupElement.style.getPropertyValue(NavigationMenuPopupCssVars.popupHeight);
    const isResizing = popupWidth !== "" && popupWidth !== "auto" && popupHeight !== "" && popupHeight !== "auto";
    if (!isResizing) {
      return {
        size: prevSizeRef.current,
        syncPositioner: false
      };
    }
    return {
      size: {
        width: popupElement.offsetWidth || prevSizeRef.current.width,
        height: popupElement.offsetHeight || prevSizeRef.current.height
      },
      syncPositioner: true
    };
  });
  React150.useEffect(() => {
    if (!open) {
      stickIfOpenTimeout.clear();
      mutationFrame.cancel();
      resizeFrame.cancel();
      sizeFrame.cancel();
      animationAbortControllerRef.current?.abort();
      animationAbortControllerRef.current = null;
      skipAutoSizeSyncRef.current = false;
      setPointerType("");
    }
  }, [stickIfOpenTimeout, open, mutationFrame, resizeFrame, sizeFrame]);
  React150.useEffect(() => {
    if (!mounted) {
      prevSizeRef.current = DEFAULT_SIZE;
    }
  }, [mounted]);
  React150.useEffect(() => {
    if (!popupElement || typeof ResizeObserver !== "function") {
      return void 0;
    }
    const resizeObserver = new ResizeObserver(() => {
      prevSizeRef.current = {
        width: popupElement.offsetWidth,
        height: popupElement.offsetHeight
      };
    });
    resizeObserver.observe(popupElement);
    return () => {
      resizeObserver.disconnect();
    };
  }, [popupElement]);
  React150.useEffect(() => {
    if (!open || !isActiveItem || !popupElement || !positionerElement) {
      return void 0;
    }
    const win = getWindow(positionerElement);
    function handleResize() {
      resizeFrame.cancel();
      resizeFrame.request(syncCurrentSize);
    }
    win.addEventListener("resize", handleResize);
    return () => {
      resizeFrame.cancel();
      win.removeEventListener("resize", handleResize);
    };
  }, [open, isActiveItem, popupElement, positionerElement, resizeFrame, syncCurrentSize]);
  React150.useEffect(() => {
    const observedElement = currentContentRef.current;
    if (!observedElement || !popupElement || !isActiveItem || typeof MutationObserver !== "function") {
      return void 0;
    }
    const mutationObserver = new MutationObserver(() => {
      if (transitionStatus === "starting" || popupElement.hasAttribute(TransitionStatusDataAttributes.startingStyle)) {
        syncCurrentSize();
        return;
      }
      const {
        size,
        syncPositioner
      } = getMutationBaseline();
      if (syncPositioner) {
        handleInterruptedMutationResize(size.width, size.height);
        return;
      }
      handleValueChange(size.width, size.height);
    });
    mutationObserver.observe(observedElement, {
      childList: true,
      subtree: true,
      characterData: true
    });
    return () => {
      mutationObserver.disconnect();
    };
  }, [currentContentRef, popupElement, isActiveItem, transitionStatus, getMutationBaseline, handleInterruptedMutationResize, handleValueChange, syncCurrentSize]);
  React150.useEffect(() => {
    if (isActiveItem && open && popupElement && allowFocusRef.current) {
      allowFocusRef.current = false;
      focusFrame.request(() => {
        beforeOutsideRef.current?.focus();
      });
    }
    return () => {
      focusFrame.cancel();
    };
  }, [beforeOutsideRef, focusFrame, isActiveItem, open, popupElement]);
  useIsoLayoutEffect(() => {
    if (isActiveItemRef.current && open && popupElement) {
      if (transitionStatus === "starting") {
        const hasNestedMenu = currentContentRef.current?.querySelector("[data-nested]") != null;
        if (hasNestedMenu) {
          sizeFrame.request(syncCurrentSize);
          return () => {
            sizeFrame.cancel();
          };
        }
      }
      if (skipAutoSizeSyncRef.current) {
        skipAutoSizeSyncRef.current = false;
        return void 0;
      }
      handleValueChange(0, 0);
    }
    return void 0;
  }, [currentContentRef, handleValueChange, isActiveItemRef, open, popupElement, sizeFrame, syncCurrentSize, transitionStatus]);
  function handleOpenChange(nextOpen, eventDetails) {
    const isHover = eventDetails.reason === reason_parts_exports.triggerHover;
    if (!interactionsEnabled) {
      return;
    }
    if (pointerType === "touch" && isHover) {
      return;
    }
    if (!nextOpen && value !== itemValue) {
      return;
    }
    function changeState() {
      if (isHover) {
        setStickIfOpen(true);
        stickIfOpenTimeout.clear();
        stickIfOpenTimeout.start(PATIENT_CLICK_THRESHOLD, () => {
          setStickIfOpen(false);
        });
      }
      if (nextOpen) {
        setValue(itemValue, eventDetails);
      } else {
        setValue(null, eventDetails);
        setPointerType("");
      }
    }
    if (isHover) {
      ReactDOM7.flushSync(changeState);
    } else {
      changeState();
    }
  }
  const context = useFloatingRootContext({
    open,
    onOpenChange: handleOpenChange,
    elements: {
      reference: triggerElement,
      floating: hoverFloatingElement
    }
  });
  const hoverInteractionState = useHoverInteractionSharedState(context);
  React150.useEffect(() => {
    if (!open) {
      context.context.dataRef.current.openEvent = void 0;
      hoverInteractionState.pointerType = void 0;
      hoverInteractionState.interactedInside = false;
      hoverInteractionState.restTimeoutPending = false;
      hoverInteractionState.openChangeTimeout.clear();
      hoverInteractionState.restTimeout.clear();
      clearSafePolygonPointerEventsMutation(hoverInteractionState);
    }
  }, [context, hoverInteractionState, open]);
  const getInlineHandleCloseContext = useStableCallback(() => {
    if (!nested || positionerElement || !triggerElementRef.current || !hoverFloatingElement) {
      return null;
    }
    return getHandleCloseContext(triggerElementRef.current, hoverFloatingElement, nodeId);
  });
  function getScope() {
    return triggerElementRef.current?.closest("ul") ?? null;
  }
  const hoverProps = useHoverReferenceInteraction(context, {
    enabled: hoverInteractionsEnabled,
    move: false,
    handleClose: safePolygon({
      blockPointerEvents: pointerType !== "touch" && (!isWebKit || nested),
      getScope
    }),
    restMs: mounted && positionerElement ? 0 : delay,
    delay: {
      close: closeDelay
    },
    triggerElementRef,
    getHandleCloseContext: getInlineHandleCloseContext
  });
  const hover = React150.useMemo(() => hoverProps ? {
    reference: hoverProps
  } : void 0, [hoverProps]);
  const click = useClick(context, {
    enabled: interactionsEnabled,
    stickIfOpen,
    toggle: isActiveItem
  });
  const {
    getReferenceProps
  } = useInteractions([hover, click]);
  useIsoLayoutEffect(() => {
    if (isActiveItem) {
      setFloatingRootContext(context);
      prevTriggerElementRef.current = triggerElement;
    }
  }, [isActiveItem, context, setFloatingRootContext, prevTriggerElementRef, triggerElement]);
  function handleActivation(event) {
    ReactDOM7.flushSync(() => {
      const prevTriggerRect = prevTriggerElementRef.current?.getBoundingClientRect();
      if (mounted && prevTriggerRect && triggerElement) {
        const nextTriggerRect = triggerElement.getBoundingClientRect();
        const isMovingRight = nextTriggerRect.left > prevTriggerRect.left;
        const isMovingDown = nextTriggerRect.top > prevTriggerRect.top;
        if (orientation === "horizontal" && nextTriggerRect.left !== prevTriggerRect.left) {
          setActivationDirection(isMovingRight ? "right" : "left");
        } else if (orientation === "vertical" && nextTriggerRect.top !== prevTriggerRect.top) {
          setActivationDirection(isMovingDown ? "down" : "up");
        }
      }
      if (event.type !== "click" && value != null) {
        context.context.dataRef.current.openEvent = void 0;
      }
      if (pointerType === "touch" && event.type !== "click") {
        return;
      }
      if (value != null) {
        setValue(itemValue, createChangeEventDetails(event.type === "mouseenter" ? reason_parts_exports.triggerHover : reason_parts_exports.triggerPress, event.nativeEvent));
      }
      if (event.type === "mouseenter" && nested && !positionerElement && pointerType !== "touch" && hoverFloatingElement && isHTMLElement(event.currentTarget)) {
        const scopeElement = getScope();
        if (!scopeElement) {
          return;
        }
        applySafePolygonPointerEventsMutation(hoverInteractionState, {
          scopeElement,
          referenceElement: event.currentTarget,
          floatingElement: hoverFloatingElement
        });
      }
    });
  }
  const handleOpenEvent = useStableCallback((event) => {
    if (!popupElement || !positionerElement) {
      handleActivation(event);
      return;
    }
    const {
      width,
      height
    } = getCssDimensions(popupElement);
    const shouldSkipAutoSizeSync = value != null && value !== itemValue && (event.type === "click" || pointerType !== "touch");
    handleActivation(event);
    if (shouldSkipAutoSizeSync) {
      skipAutoSizeSyncRef.current = true;
    }
    handleValueChange(width, height);
  });
  const state = {
    open: isActiveItem
  };
  function handleSetPointerType(event) {
    setPointerType(event.pointerType);
  }
  const defaultProps = {
    tabIndex: 0,
    onMouseEnter: handleOpenEvent,
    onClick: handleOpenEvent,
    onPointerEnter: handleSetPointerType,
    onPointerDown: handleSetPointerType,
    "aria-expanded": isActiveItem,
    "aria-controls": isActiveItem ? popupElement?.id : void 0,
    [NAVIGATION_MENU_TRIGGER_IDENTIFIER]: "",
    onFocus() {
      if (!isActiveItem) {
        return;
      }
      setViewportInert(false);
    },
    onMouseMove() {
      allowFocusRef.current = false;
    },
    onKeyDown(event) {
      allowFocusRef.current = true;
      if (nested) {
        return;
      }
      const openHorizontal = orientation === "horizontal" && event.key === "ArrowDown";
      const openVertical = orientation === "vertical" && event.key === "ArrowRight";
      if (openHorizontal || openVertical) {
        setValue(itemValue, createChangeEventDetails(reason_parts_exports.listNavigation, event.nativeEvent));
        handleOpenEvent(event);
        stopEvent(event);
      }
    },
    onBlur(event) {
      if (positionerElement && popupElement && isOutsideMenuEvent({
        currentTarget: event.currentTarget,
        relatedTarget: event.relatedTarget
      }, {
        popupElement,
        rootRef,
        tree,
        nodeId
      })) {
        setValue(null, createChangeEventDetails(reason_parts_exports.focusOut, event.nativeEvent));
      }
    }
  };
  const {
    getButtonProps,
    buttonRef
  } = useButton({
    disabled,
    focusableWhenDisabled: true,
    native: nativeButton
  });
  const referenceElement = hoverFloatingElement;
  return (0, import_jsx_runtime56.jsxs)(React150.Fragment, {
    children: [(0, import_jsx_runtime56.jsx)(CompositeItem, {
      tag: "button",
      render,
      className,
      state,
      stateAttributesMapping: pressableTriggerOpenStateMapping,
      refs: [forwardedRef, handleTriggerElement, buttonRef],
      props: [getReferenceProps, dismissProps?.reference || EMPTY_ARRAY, defaultProps, elementProps, getButtonProps]
    }), isActiveItem && (0, import_jsx_runtime56.jsxs)(React150.Fragment, {
      children: [(0, import_jsx_runtime56.jsx)(FocusGuard, {
        ref: beforeOutsideRef,
        onFocus: (event) => {
          if (referenceElement && isOutsideEvent(event, referenceElement)) {
            beforeInsideRef.current?.focus();
          } else {
            const prevTabbable = getPreviousTabbable(triggerElement);
            prevTabbable?.focus();
          }
        }
      }), (0, import_jsx_runtime56.jsx)("span", {
        "aria-owns": viewportElement?.id,
        style: ownerVisuallyHidden
      }), (0, import_jsx_runtime56.jsx)(FocusGuard, {
        ref: afterOutsideRef,
        onFocus: (event) => {
          if (referenceElement && isOutsideEvent(event, referenceElement)) {
            const elementToFocus = afterInsideRef.current && isTabbable(afterInsideRef.current) ? afterInsideRef.current : triggerElement;
            elementToFocus?.focus();
          } else {
            let nextTabbable = getNextTabbable(triggerElement);
            if (nested && !positionerElement && referenceElement && nextTabbable && contains(referenceElement, nextTabbable)) {
              nextTabbable = getTabbableAfterElement(afterInsideRef.current);
            }
            nextTabbable?.focus();
            if ((!nested || positionerElement) && !contains(rootRef.current, nextTabbable)) {
              setValue(null, createChangeEventDetails(reason_parts_exports.focusOut, event.nativeEvent));
            }
          }
        }
      })]
    })]
  });
});
if (true) NavigationMenuTrigger.displayName = "NavigationMenuTrigger";
function getPlacementFromElements(domReferenceElement, floatingElement) {
  const referenceRect = domReferenceElement.getBoundingClientRect();
  const floatingRect = floatingElement.getBoundingClientRect();
  const referenceCenterX = referenceRect.left + referenceRect.width / 2;
  const referenceCenterY = referenceRect.top + referenceRect.height / 2;
  const floatingCenterX = floatingRect.left + floatingRect.width / 2;
  const floatingCenterY = floatingRect.top + floatingRect.height / 2;
  const deltaX = floatingCenterX - referenceCenterX;
  const deltaY = floatingCenterY - referenceCenterY;
  if (Math.abs(deltaX) >= Math.abs(deltaY)) {
    return deltaX >= 0 ? "right" : "left";
  }
  return deltaY >= 0 ? "bottom" : "top";
}
function getHandleCloseContext(domReferenceElement, floatingElement, nodeId) {
  return {
    placement: getPlacementFromElements(domReferenceElement, floatingElement),
    elements: {
      domReference: domReferenceElement,
      floating: floatingElement
    },
    nodeId
  };
}

// node_modules/@base-ui/react/esm/navigation-menu/portal/NavigationMenuPortal.js
var React152 = __toESM(require_react(), 1);

// node_modules/@base-ui/react/esm/navigation-menu/portal/NavigationMenuPortalContext.js
var React151 = __toESM(require_react(), 1);
var NavigationMenuPortalContext = React151.createContext(void 0);
if (true) NavigationMenuPortalContext.displayName = "NavigationMenuPortalContext";
function useNavigationMenuPortalContext() {
  const value = React151.useContext(NavigationMenuPortalContext);
  if (value === void 0) {
    throw new Error(true ? "Base UI: <NavigationMenu.Portal> is missing." : formatErrorMessage_default(40));
  }
  return value;
}

// node_modules/@base-ui/react/esm/navigation-menu/portal/NavigationMenuPortal.js
var import_jsx_runtime57 = __toESM(require_jsx_runtime(), 1);
var NavigationMenuPortal = React152.forwardRef(function NavigationMenuPortal2(props, forwardedRef) {
  const {
    keepMounted = false,
    ...portalProps
  } = props;
  const {
    mounted
  } = useNavigationMenuRootContext();
  const shouldRender = mounted || keepMounted;
  if (!shouldRender) {
    return null;
  }
  return (0, import_jsx_runtime57.jsx)(NavigationMenuPortalContext.Provider, {
    value: keepMounted,
    children: (0, import_jsx_runtime57.jsx)(FloatingPortal, {
      ref: forwardedRef,
      ...portalProps
    })
  });
});
if (true) NavigationMenuPortal.displayName = "NavigationMenuPortal";

// node_modules/@base-ui/react/esm/navigation-menu/positioner/NavigationMenuPositioner.js
var React154 = __toESM(require_react(), 1);
var ReactDOM8 = __toESM(require_react_dom(), 1);

// node_modules/@base-ui/react/esm/navigation-menu/positioner/NavigationMenuPositionerContext.js
var React153 = __toESM(require_react(), 1);
var NavigationMenuPositionerContext = React153.createContext(void 0);
if (true) NavigationMenuPositionerContext.displayName = "NavigationMenuPositionerContext";
function useNavigationMenuPositionerContext(optional = false) {
  const context = React153.useContext(NavigationMenuPositionerContext);
  if (!context && !optional) {
    throw new Error(true ? "Base UI: NavigationMenuPositionerContext is missing. NavigationMenuPositioner parts must be placed within <NavigationMenu.Positioner>." : formatErrorMessage_default(42));
  }
  return context;
}

// node_modules/@base-ui/react/esm/navigation-menu/positioner/NavigationMenuPositioner.js
var import_jsx_runtime58 = __toESM(require_jsx_runtime(), 1);
var EMPTY_ROOT_CONTEXT = getEmptyRootContext();
var NavigationMenuPositioner = React154.forwardRef(function NavigationMenuPositioner2(componentProps, forwardedRef) {
  const {
    open,
    mounted,
    positionerElement,
    setPositionerElement,
    floatingRootContext,
    nested,
    transitionStatus
  } = useNavigationMenuRootContext();
  const {
    className,
    render,
    anchor,
    positionMethod = "absolute",
    side = "bottom",
    align = "center",
    sideOffset = 0,
    alignOffset = 0,
    collisionBoundary = "clipping-ancestors",
    collisionPadding = 5,
    collisionAvoidance = nested ? POPUP_COLLISION_AVOIDANCE : DROPDOWN_COLLISION_AVOIDANCE,
    arrowPadding = 5,
    sticky = false,
    disableAnchorTracking = false,
    ...elementProps
  } = componentProps;
  const keepMounted = useNavigationMenuPortalContext();
  const nodeId = useNavigationMenuTreeContext();
  const resizeTimeout = useTimeout();
  const [instant, setInstant] = React154.useState(false);
  const positionerRef = React154.useRef(null);
  const prevTriggerElementRef = React154.useRef(null);
  React154.useEffect(() => {
    if (!positionerElement) {
      return void 0;
    }
    function onFocus(event) {
      if (positionerElement && isOutsideEvent(event)) {
        const focusing = event.type === "focusin";
        const manageFocus = focusing ? enableFocusInside : disableFocusInside;
        manageFocus(positionerElement);
      }
    }
    positionerElement.addEventListener("focusin", onFocus, true);
    positionerElement.addEventListener("focusout", onFocus, true);
    return () => {
      positionerElement.removeEventListener("focusin", onFocus, true);
      positionerElement.removeEventListener("focusout", onFocus, true);
    };
  }, [positionerElement]);
  const domReference = (floatingRootContext || EMPTY_ROOT_CONTEXT).useState("domReferenceElement");
  const positioning = useAnchorPositioning({
    anchor: anchor ?? domReference ?? prevTriggerElementRef,
    positionMethod,
    mounted,
    side,
    sideOffset,
    align,
    alignOffset,
    arrowPadding,
    collisionBoundary,
    collisionPadding,
    sticky,
    disableAnchorTracking,
    keepMounted,
    floatingRootContext,
    collisionAvoidance,
    nodeId,
    // Allows the menu to remain anchored without wobbling while its size
    // and position transition simultaneously when side=top or side=left.
    adaptiveOrigin
  });
  const defaultProps = React154.useMemo(() => {
    const hiddenStyles = {};
    if (!open) {
      hiddenStyles.pointerEvents = "none";
    }
    return {
      role: "presentation",
      hidden: !mounted,
      style: {
        ...positioning.positionerStyles,
        ...hiddenStyles
      }
    };
  }, [open, mounted, positioning.positionerStyles]);
  const state = {
    open,
    side: positioning.side,
    align: positioning.align,
    anchorHidden: positioning.anchorHidden,
    instant
  };
  React154.useEffect(() => {
    if (!open) {
      return void 0;
    }
    function handleResize() {
      ReactDOM8.flushSync(() => {
        setInstant(true);
      });
      resizeTimeout.start(100, () => {
        setInstant(false);
      });
    }
    const win = getWindow(positionerElement);
    win.addEventListener("resize", handleResize);
    return () => {
      win.removeEventListener("resize", handleResize);
    };
  }, [open, resizeTimeout, positionerElement]);
  const element = useRenderElement("div", componentProps, {
    state,
    ref: [forwardedRef, setPositionerElement, positionerRef],
    props: [defaultProps, getDisabledMountTransitionStyles(transitionStatus), elementProps],
    stateAttributesMapping: popupStateMapping
  });
  return (0, import_jsx_runtime58.jsx)(NavigationMenuPositionerContext.Provider, {
    value: positioning,
    children: element
  });
});
if (true) NavigationMenuPositioner.displayName = "NavigationMenuPositioner";

// node_modules/@base-ui/react/esm/navigation-menu/viewport/NavigationMenuViewport.js
var React155 = __toESM(require_react(), 1);
var import_jsx_runtime59 = __toESM(require_jsx_runtime(), 1);
var EMPTY_ROOT_CONTEXT2 = getEmptyRootContext();
function Guards({
  children
}) {
  const {
    beforeInsideRef,
    beforeOutsideRef,
    afterInsideRef,
    afterOutsideRef,
    positionerElement,
    viewportElement,
    floatingRootContext
  } = useNavigationMenuRootContext();
  const hasPositioner = Boolean(useNavigationMenuPositionerContext(true));
  const referenceElement = positionerElement || viewportElement;
  if (!floatingRootContext && !hasPositioner) {
    return children;
  }
  return (0, import_jsx_runtime59.jsxs)(React155.Fragment, {
    children: [(0, import_jsx_runtime59.jsx)(FocusGuard, {
      ref: beforeInsideRef,
      onFocus: (event) => {
        if (referenceElement && isOutsideEvent(event, referenceElement)) {
          getNextTabbable(referenceElement)?.focus();
        } else {
          beforeOutsideRef.current?.focus();
        }
      }
    }), children, (0, import_jsx_runtime59.jsx)(FocusGuard, {
      ref: afterInsideRef,
      onFocus: (event) => {
        if (referenceElement && isOutsideEvent(event, referenceElement)) {
          getPreviousTabbable(referenceElement)?.focus();
        } else {
          afterOutsideRef.current?.focus();
        }
      }
    })]
  });
}
var NavigationMenuViewport = React155.forwardRef(function NavigationMenuViewport2(componentProps, forwardedRef) {
  const {
    className,
    render,
    children,
    id: idProp,
    ...elementProps
  } = componentProps;
  const id = useId(idProp);
  const {
    setViewportElement,
    setViewportTargetElement,
    floatingRootContext,
    prevTriggerElementRef,
    viewportInert,
    setViewportInert
  } = useNavigationMenuRootContext();
  const positioning = useNavigationMenuPositionerContext(true);
  const hasPositioner = Boolean(positioning);
  const domReference = (floatingRootContext || EMPTY_ROOT_CONTEXT2).useState("domReferenceElement");
  useIsoLayoutEffect(() => {
    if (domReference) {
      prevTriggerElementRef.current = domReference;
    }
  }, [domReference, prevTriggerElementRef]);
  const element = useRenderElement("div", componentProps, {
    ref: [forwardedRef, setViewportElement],
    props: [{
      id,
      onBlur(event) {
        const relatedTarget = event.relatedTarget;
        const currentTarget = event.currentTarget;
        if (relatedTarget && !contains(currentTarget, relatedTarget) && relatedTarget !== domReference) {
          setViewportInert(true);
        }
      },
      ...!hasPositioner && viewportInert && {
        inert: inertValue(true)
      },
      children: hasPositioner ? children : (0, import_jsx_runtime59.jsx)(Guards, {
        children: (0, import_jsx_runtime59.jsx)("div", {
          ref: setViewportTargetElement,
          children
        })
      })
    }, elementProps]
  });
  return hasPositioner ? (0, import_jsx_runtime59.jsx)(Guards, {
    children: element
  }) : element;
});
if (true) NavigationMenuViewport.displayName = "NavigationMenuViewport";

// node_modules/@base-ui/react/esm/navigation-menu/backdrop/NavigationMenuBackdrop.js
var React156 = __toESM(require_react(), 1);
var stateAttributesMapping18 = {
  ...popupStateMapping,
  ...transitionStatusMapping
};
var NavigationMenuBackdrop = React156.forwardRef(function NavigationMenuBackdrop2(componentProps, forwardedRef) {
  const {
    className,
    render,
    ...elementProps
  } = componentProps;
  const {
    open,
    mounted,
    transitionStatus
  } = useNavigationMenuRootContext();
  const state = {
    open,
    transitionStatus
  };
  const element = useRenderElement("div", componentProps, {
    state,
    ref: forwardedRef,
    props: [{
      role: "presentation",
      hidden: !mounted,
      style: {
        userSelect: "none",
        WebkitUserSelect: "none"
      }
    }, elementProps],
    stateAttributesMapping: stateAttributesMapping18
  });
  return element;
});
if (true) NavigationMenuBackdrop.displayName = "NavigationMenuBackdrop";

// node_modules/@base-ui/react/esm/navigation-menu/popup/NavigationMenuPopup.js
var React157 = __toESM(require_react(), 1);
var stateAttributesMapping19 = {
  ...popupStateMapping,
  ...transitionStatusMapping
};
var NavigationMenuPopup = React157.forwardRef(function NavigationMenuPopup2(componentProps, forwardedRef) {
  const {
    className,
    render,
    id: idProp,
    ...elementProps
  } = componentProps;
  const {
    open,
    transitionStatus,
    setPopupElement
  } = useNavigationMenuRootContext();
  const positioning = useNavigationMenuPositionerContext();
  const direction = useDirection();
  const id = useBaseUiId(idProp);
  const state = {
    open,
    transitionStatus,
    side: positioning.side,
    align: positioning.align,
    anchorHidden: positioning.anchorHidden
  };
  let isOriginSide = positioning.side === "top";
  let isPhysicalLeft = positioning.side === "left";
  if (direction === "rtl") {
    isOriginSide = isOriginSide || positioning.side === "inline-end";
    isPhysicalLeft = isPhysicalLeft || positioning.side === "inline-end";
  } else {
    isOriginSide = isOriginSide || positioning.side === "inline-start";
    isPhysicalLeft = isPhysicalLeft || positioning.side === "inline-start";
  }
  const element = useRenderElement("nav", componentProps, {
    state,
    ref: [forwardedRef, setPopupElement],
    props: [{
      id,
      tabIndex: -1,
      style: isOriginSide ? {
        position: "absolute",
        [positioning.side === "top" ? "bottom" : "top"]: "0",
        [isPhysicalLeft ? "right" : "left"]: "0"
      } : {}
    }, elementProps],
    stateAttributesMapping: stateAttributesMapping19
  });
  return element;
});
if (true) NavigationMenuPopup.displayName = "NavigationMenuPopup";

// node_modules/@base-ui/react/esm/navigation-menu/arrow/NavigationMenuArrow.js
var React158 = __toESM(require_react(), 1);
var NavigationMenuArrow = React158.forwardRef(function NavigationMenuArrow2(componentProps, forwardedRef) {
  const {
    className,
    render,
    ...elementProps
  } = componentProps;
  const {
    open
  } = useNavigationMenuRootContext();
  const {
    arrowRef,
    side,
    align,
    arrowUncentered,
    arrowStyles
  } = useNavigationMenuPositionerContext();
  const state = {
    open,
    side,
    align,
    uncentered: arrowUncentered
  };
  const element = useRenderElement("div", componentProps, {
    state,
    ref: [forwardedRef, arrowRef],
    props: [{
      style: arrowStyles,
      "aria-hidden": true
    }, elementProps],
    stateAttributesMapping: popupStateMapping
  });
  return element;
});
if (true) NavigationMenuArrow.displayName = "NavigationMenuArrow";

// node_modules/@base-ui/react/esm/navigation-menu/link/NavigationMenuLink.js
var React159 = __toESM(require_react(), 1);
var import_jsx_runtime60 = __toESM(require_jsx_runtime(), 1);
var NavigationMenuLink = React159.forwardRef(function NavigationMenuLink2(componentProps, forwardedRef) {
  const {
    className,
    render,
    active = false,
    closeOnClick = false,
    ...elementProps
  } = componentProps;
  const {
    setValue,
    popupElement,
    positionerElement,
    rootRef
  } = useNavigationMenuRootContext();
  const nodeId = useNavigationMenuTreeContext();
  const tree = useFloatingTree();
  const state = {
    active
  };
  const defaultProps = {
    "aria-current": active ? "page" : void 0,
    tabIndex: void 0,
    onClick(event) {
      if (closeOnClick) {
        setValue(null, createChangeEventDetails(reason_parts_exports.linkPress, event.nativeEvent));
      }
    },
    onBlur(event) {
      if (positionerElement && popupElement && isOutsideMenuEvent({
        currentTarget: event.currentTarget,
        relatedTarget: event.relatedTarget
      }, {
        popupElement,
        rootRef,
        tree,
        nodeId
      })) {
        setValue(null, createChangeEventDetails(reason_parts_exports.focusOut, event.nativeEvent));
      }
    }
  };
  return (0, import_jsx_runtime60.jsx)(CompositeItem, {
    tag: "a",
    render,
    className,
    state,
    refs: [forwardedRef],
    props: [defaultProps, elementProps]
  });
});
if (true) NavigationMenuLink.displayName = "NavigationMenuLink";

// node_modules/@base-ui/react/esm/navigation-menu/icon/NavigationMenuIcon.js
var React160 = __toESM(require_react(), 1);
var NavigationMenuIcon = React160.forwardRef(function NavigationMenuIcon2(componentProps, forwardedRef) {
  const {
    className,
    render,
    ...elementProps
  } = componentProps;
  const {
    value: itemValue
  } = useNavigationMenuItemContext();
  const {
    open,
    value
  } = useNavigationMenuRootContext();
  const isActiveItem = open && value === itemValue;
  const state = {
    open: isActiveItem
  };
  const element = useRenderElement("span", componentProps, {
    state,
    ref: forwardedRef,
    props: [{
      "aria-hidden": true,
      children: "▼"
    }, elementProps],
    stateAttributesMapping: triggerOpenStateMapping
  });
  return element;
});
if (true) NavigationMenuIcon.displayName = "NavigationMenuIcon";

// node_modules/@base-ui/react/esm/number-field/index.parts.js
var index_parts_exports18 = {};
__export(index_parts_exports18, {
  Decrement: () => NumberFieldDecrement,
  Group: () => NumberFieldGroup,
  Increment: () => NumberFieldIncrement,
  Input: () => NumberFieldInput,
  Root: () => NumberFieldRoot,
  ScrubArea: () => NumberFieldScrubArea,
  ScrubAreaCursor: () => NumberFieldScrubAreaCursor
});

// node_modules/@base-ui/react/esm/number-field/root/NumberFieldRoot.js
var React162 = __toESM(require_react(), 1);

// node_modules/@base-ui/utils/esm/useInterval.js
var EMPTY2 = 0;
var Interval = class _Interval extends Timeout {
  static create() {
    return new _Interval();
  }
  /**
   * Executes `fn` at `delay` interval, clearing any previously scheduled call.
   */
  start(delay, fn) {
    this.clear();
    this.currentId = setInterval(() => {
      fn();
    }, delay);
  }
  clear = () => {
    if (this.currentId !== EMPTY2) {
      clearInterval(this.currentId);
      this.currentId = EMPTY2;
    }
  };
};
function useInterval() {
  const timeout = useRefWithInit(Interval.create).current;
  useOnMount(timeout.disposeEffect);
  return timeout;
}

// node_modules/@base-ui/react/esm/number-field/root/NumberFieldRootContext.js
var React161 = __toESM(require_react(), 1);
var NumberFieldRootContext = React161.createContext(void 0);
if (true) NumberFieldRootContext.displayName = "NumberFieldRootContext";
function useNumberFieldRootContext() {
  const context = React161.useContext(NumberFieldRootContext);
  if (context === void 0) {
    throw new Error(true ? "Base UI: NumberFieldRootContext is missing. NumberField parts must be placed within <NumberField.Root>." : formatErrorMessage_default(43));
  }
  return context;
}

// node_modules/@base-ui/react/esm/number-field/utils/stateAttributesMapping.js
var stateAttributesMapping20 = {
  inputValue: () => null,
  value: () => null,
  ...fieldValidityMapping
};

// node_modules/@base-ui/react/esm/number-field/utils/parse.js
var HAN_NUMERALS = ["零", "〇", "一", "二", "三", "四", "五", "六", "七", "八", "九"];
var HAN_NUMERAL_TO_DIGIT = {
  零: "0",
  "〇": "0",
  一: "1",
  二: "2",
  三: "3",
  四: "4",
  五: "5",
  六: "6",
  七: "7",
  八: "8",
  九: "9"
};
var ARABIC_NUMERALS = ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"];
var PERSIAN_NUMERALS = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
var FULLWIDTH_NUMERALS = ["０", "１", "２", "３", "４", "５", "６", "７", "８", "９"];
var PERCENTAGES = ["%", "٪", "％", "﹪"];
var PERMILLE = ["‰", "؉"];
var UNICODE_MINUS_SIGNS = ["−", "－", "‒", "–", "—", "﹣"];
var UNICODE_PLUS_SIGNS = ["＋", "﹢"];
var FULLWIDTH_DECIMAL = "．";
var FULLWIDTH_GROUP = "，";
var ARABIC_RE = new RegExp(`[${ARABIC_NUMERALS.join("")}]`, "g");
var PERSIAN_RE = new RegExp(`[${PERSIAN_NUMERALS.join("")}]`, "g");
var FULLWIDTH_RE = new RegExp(`[${FULLWIDTH_NUMERALS.join("")}]`, "g");
var HAN_RE = new RegExp(`[${HAN_NUMERALS.join("")}]`, "g");
var PERCENT_RE = new RegExp(`[${PERCENTAGES.join("")}]`);
var PERMILLE_RE = new RegExp(`[${PERMILLE.join("")}]`);
var ARABIC_DETECT_RE = /[٠١٢٣٤٥٦٧٨٩]/;
var PERSIAN_DETECT_RE = /[۰۱۲۳۴۵۶۷۸۹]/;
var HAN_DETECT_RE = /[零〇一二三四五六七八九]/;
var FULLWIDTH_DETECT_RE = new RegExp(`[${FULLWIDTH_NUMERALS.join("")}]`);
var BASE_NON_NUMERIC_SYMBOLS = [".", ",", FULLWIDTH_DECIMAL, FULLWIDTH_GROUP, "٫", "٬"];
var SPACE_SEPARATOR_RE = new RegExp("\\p{Zs}", "u");
var PLUS_SIGNS_WITH_ASCII = ["+", ...UNICODE_PLUS_SIGNS];
var MINUS_SIGNS_WITH_ASCII = ["-", ...UNICODE_MINUS_SIGNS];
var escapeRegExp = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
var escapeClassChar = (s) => s.replace(/[-\\\]^]/g, (m) => `\\${m}`);
var charClassFrom = (chars) => `[${chars.map(escapeClassChar).join("")}]`;
var ANY_MINUS_CLASS = charClassFrom(["-"].concat(UNICODE_MINUS_SIGNS));
var ANY_PLUS_CLASS = charClassFrom(["+"].concat(UNICODE_PLUS_SIGNS));
var ANY_MINUS_RE = new RegExp(ANY_MINUS_CLASS, "gu");
var ANY_PLUS_RE = new RegExp(ANY_PLUS_CLASS, "gu");
var ANY_MINUS_DETECT_RE = new RegExp(ANY_MINUS_CLASS);
var ANY_PLUS_DETECT_RE = new RegExp(ANY_PLUS_CLASS);
function getNumberLocaleDetails(locale, options) {
  const parts = getFormatter(locale, options).formatToParts(11111.1);
  const result = {};
  parts.forEach((part) => {
    result[part.type] = part.value;
  });
  getFormatter(locale).formatToParts(0.1).forEach((part) => {
    if (part.type === "decimal") {
      result[part.type] = part.value;
    }
  });
  return result;
}
function parseNumber(formattedNumber, locale, options) {
  if (formattedNumber == null) {
    return null;
  }
  let input = String(formattedNumber).replace(new RegExp("\\p{Cf}", "gu"), "").trim();
  input = input.replace(ANY_MINUS_RE, "-").replace(ANY_PLUS_RE, "+");
  let isNegative = false;
  const trailing = input.match(/([+-])\s*$/);
  if (trailing) {
    if (trailing[1] === "-") {
      isNegative = true;
    }
    input = input.replace(/([+-])\s*$/, "");
  }
  const leading = input.match(/^\s*([+-])/);
  if (leading) {
    if (leading[1] === "-") {
      isNegative = true;
    }
    input = input.replace(/^\s*[+-]/, "");
  }
  let computedLocale = locale;
  if (computedLocale === void 0) {
    if (ARABIC_DETECT_RE.test(input) || PERSIAN_DETECT_RE.test(input)) {
      computedLocale = "ar";
    } else if (HAN_DETECT_RE.test(input)) {
      computedLocale = "zh";
    }
  }
  const {
    group,
    decimal,
    currency
  } = getNumberLocaleDetails(computedLocale, options);
  const unitParts = getFormatter(computedLocale, options).formatToParts(1).filter((p) => p.type === "unit").map((p) => escapeRegExp(p.value));
  const unitRegex = unitParts.length ? new RegExp(unitParts.join("|"), "g") : null;
  let groupRegex = null;
  if (group) {
    const isSpaceGroup = new RegExp("\\p{Zs}", "u").test(group);
    const isApostropheGroup = group === "'" || group === "’";
    if (isSpaceGroup) {
      groupRegex = new RegExp("\\p{Zs}", "gu");
    } else if (isApostropheGroup) {
      groupRegex = /['’]/g;
    } else {
      groupRegex = new RegExp(escapeRegExp(group), "g");
    }
  }
  const replacements = [
    {
      regex: group ? groupRegex : null,
      replacement: ""
    },
    {
      regex: decimal ? new RegExp(escapeRegExp(decimal), "g") : null,
      replacement: "."
    },
    // Fullwidth punctuation
    {
      regex: /．/g,
      replacement: "."
    },
    // FULLWIDTH_DECIMAL
    {
      regex: /，/g,
      replacement: ""
    },
    // FULLWIDTH_GROUP
    // Arabic punctuation
    {
      regex: /٫/g,
      replacement: "."
    },
    // ARABIC DECIMAL SEPARATOR (U+066B)
    {
      regex: /٬/g,
      replacement: ""
    },
    // ARABIC THOUSANDS SEPARATOR (U+066C)
    // Currency & unit labels
    {
      regex: currency ? new RegExp(escapeRegExp(currency), "g") : null,
      replacement: ""
    },
    {
      regex: unitRegex,
      replacement: ""
    },
    // Numeral systems to ASCII digits
    {
      regex: ARABIC_RE,
      replacement: (ch) => String(ARABIC_NUMERALS.indexOf(ch))
    },
    {
      regex: PERSIAN_RE,
      replacement: (ch) => String(PERSIAN_NUMERALS.indexOf(ch))
    },
    {
      regex: FULLWIDTH_RE,
      replacement: (ch) => String(FULLWIDTH_NUMERALS.indexOf(ch))
    },
    {
      regex: HAN_RE,
      replacement: (ch) => HAN_NUMERAL_TO_DIGIT[ch]
    }
  ];
  let unformatted = replacements.reduce((acc, {
    regex,
    replacement
  }) => {
    return regex ? acc.replace(regex, replacement) : acc;
  }, input);
  const lastDot = unformatted.lastIndexOf(".");
  if (lastDot !== -1) {
    unformatted = `${unformatted.slice(0, lastDot).replace(/\./g, "")}.${unformatted.slice(lastDot + 1).replace(/\./g, "")}`;
  }
  if (/^[-+]?Infinity$/i.test(input) || /[∞]/.test(input)) {
    return null;
  }
  const parseTarget = (isNegative ? "-" : "") + unformatted;
  let num = parseFloat(parseTarget);
  const style = options?.style;
  const isUnitPercent = style === "unit" && options?.unit === "percent";
  const hasPercentSymbol = PERCENT_RE.test(formattedNumber) || style === "percent";
  const hasPermilleSymbol = PERMILLE_RE.test(formattedNumber);
  if (hasPermilleSymbol) {
    num /= 1e3;
  } else if (!isUnitPercent && hasPercentSymbol) {
    num /= 100;
  }
  if (Number.isNaN(num)) {
    return null;
  }
  return num;
}

// node_modules/@base-ui/react/esm/number-field/utils/constants.js
var CHANGE_VALUE_TICK_DELAY = 60;
var START_AUTO_CHANGE_DELAY = 400;
var TOUCH_TIMEOUT = 50;
var MAX_POINTER_MOVES_AFTER_TOUCH = 3;
var SCROLLING_POINTER_MOVE_DISTANCE = 8;
var DEFAULT_STEP = 1;

// node_modules/@base-ui/react/esm/number-field/utils/validate.js
var STEP_EPSILON_FACTOR = 1e-10;
function getFractionDigits(format) {
  const defaultOptions = getFormatter("en-US").resolvedOptions();
  const minimumFractionDigits = format?.minimumFractionDigits ?? defaultOptions.minimumFractionDigits ?? 0;
  const maximumFractionDigits = Math.max(format?.maximumFractionDigits ?? defaultOptions.maximumFractionDigits ?? 20, minimumFractionDigits);
  return {
    maximumFractionDigits,
    minimumFractionDigits
  };
}
function roundToFractionDigits(value, maximumFractionDigits) {
  if (!Number.isFinite(value)) {
    return value;
  }
  const digits = Math.min(Math.max(maximumFractionDigits, 0), 20);
  return Number(value.toFixed(digits));
}
function removeFloatingPointErrors(value, format) {
  const {
    maximumFractionDigits
  } = getFractionDigits(format);
  return roundToFractionDigits(value, maximumFractionDigits);
}
function snapToStep(clampedValue, base, step, mode = "directional") {
  if (step === 0) {
    return clampedValue;
  }
  const stepSize = Math.abs(step);
  const direction = Math.sign(step);
  const tolerance = stepSize * STEP_EPSILON_FACTOR * direction;
  const divisor = mode === "nearest" ? step : stepSize;
  const rawSteps = (clampedValue - base + tolerance) / divisor;
  let snappedSteps;
  if (mode === "nearest") {
    snappedSteps = Math.round(rawSteps);
  } else if (direction > 0) {
    snappedSteps = Math.floor(rawSteps);
  } else {
    snappedSteps = Math.ceil(rawSteps);
  }
  const stepForResult = mode === "nearest" ? step : stepSize;
  return base + snappedSteps * stepForResult;
}
function toValidatedNumber(value, {
  step,
  minWithDefault,
  maxWithDefault,
  minWithZeroDefault,
  format,
  snapOnStep,
  small,
  clamp: shouldClamp
}) {
  if (value === null) {
    return value;
  }
  const clampedValue = shouldClamp ? clamp(value, minWithDefault, maxWithDefault) : value;
  if (step != null && snapOnStep) {
    if (step === 0) {
      return removeFloatingPointErrors(clampedValue, format);
    }
    let base = minWithZeroDefault;
    if (!small && minWithDefault !== Number.MIN_SAFE_INTEGER) {
      base = minWithDefault;
    }
    const snappedValue = snapToStep(clampedValue, base, step, small ? "nearest" : "directional");
    return removeFloatingPointErrors(snappedValue, format);
  }
  return removeFloatingPointErrors(clampedValue, format);
}

// node_modules/@base-ui/react/esm/number-field/root/NumberFieldRoot.js
var import_jsx_runtime61 = __toESM(require_jsx_runtime(), 1);
var NumberFieldRoot = React162.forwardRef(function NumberFieldRoot2(componentProps, forwardedRef) {
  const {
    id: idProp,
    min,
    max,
    smallStep = 0.1,
    step: stepProp = 1,
    largeStep = 10,
    required = false,
    disabled: disabledProp = false,
    readOnly = false,
    name: nameProp,
    defaultValue,
    value: valueProp,
    onValueChange: onValueChangeProp,
    onValueCommitted: onValueCommittedProp,
    allowWheelScrub = false,
    snapOnStep = false,
    allowOutOfRange = false,
    format,
    locale,
    render,
    className,
    inputRef: inputRefProp,
    ...elementProps
  } = componentProps;
  const {
    setDirty,
    validityData,
    disabled: fieldDisabled,
    setFilled,
    invalid,
    name: fieldName,
    state: fieldState,
    validation,
    shouldValidateOnChange
  } = useFieldRootContext();
  const disabled = fieldDisabled || disabledProp;
  const name = fieldName ?? nameProp;
  const step = stepProp === "any" ? 1 : stepProp;
  const [isScrubbing, setIsScrubbing] = React162.useState(false);
  const minWithDefault = min ?? Number.MIN_SAFE_INTEGER;
  const maxWithDefault = max ?? Number.MAX_SAFE_INTEGER;
  const minWithZeroDefault = min ?? 0;
  const formatStyle = format?.style;
  const inputRef = React162.useRef(null);
  const hiddenInputRef = useMergedRefs(inputRefProp, validation.inputRef);
  const id = useLabelableId({
    id: idProp
  });
  const [valueUnwrapped, setValueUnwrapped] = useControlled({
    controlled: valueProp,
    default: defaultValue,
    name: "NumberField",
    state: "value"
  });
  const value = valueUnwrapped ?? null;
  const valueRef = useValueAsRef(value);
  useIsoLayoutEffect(() => {
    setFilled(value !== null);
  }, [setFilled, value]);
  const forceRender = useForcedRerendering();
  const formatOptionsRef = useValueAsRef(format);
  const hasPendingCommitRef = React162.useRef(false);
  const onValueCommitted = useStableCallback((nextValue, eventDetails) => {
    hasPendingCommitRef.current = false;
    onValueCommittedProp?.(nextValue, eventDetails);
  });
  const startTickTimeout = useTimeout();
  const tickInterval = useInterval();
  const intentionalTouchCheckTimeout = useTimeout();
  const isPressedRef = React162.useRef(false);
  const movesAfterTouchRef = React162.useRef(0);
  const allowInputSyncRef = React162.useRef(true);
  const lastChangedValueRef = React162.useRef(null);
  const unsubscribeFromGlobalContextMenuRef = React162.useRef(() => {
  });
  const [inputValue, setInputValue] = React162.useState(() => {
    if (valueProp !== void 0) {
      return getControlledInputValue(value, locale, format);
    }
    return formatNumber(value, locale, format);
  });
  const [inputMode, setInputMode] = React162.useState("numeric");
  const getAllowedNonNumericKeys = useStableCallback(() => {
    const {
      decimal,
      group,
      currency,
      literal
    } = getNumberLocaleDetails(locale, format);
    const keys = /* @__PURE__ */ new Set();
    BASE_NON_NUMERIC_SYMBOLS.forEach((symbol) => keys.add(symbol));
    if (decimal) {
      keys.add(decimal);
    }
    if (group) {
      keys.add(group);
      if (SPACE_SEPARATOR_RE.test(group)) {
        keys.add(" ");
      }
    }
    const allowPercentSymbols = formatStyle === "percent" || formatStyle === "unit" && format?.unit === "percent";
    const allowPermilleSymbols = formatStyle === "percent" || formatStyle === "unit" && format?.unit === "permille";
    if (allowPercentSymbols) {
      PERCENTAGES.forEach((key) => keys.add(key));
    }
    if (allowPermilleSymbols) {
      PERMILLE.forEach((key) => keys.add(key));
    }
    if (formatStyle === "currency" && currency) {
      keys.add(currency);
    }
    if (literal) {
      Array.from(literal).forEach((char) => keys.add(char));
      if (SPACE_SEPARATOR_RE.test(literal)) {
        keys.add(" ");
      }
    }
    PLUS_SIGNS_WITH_ASCII.forEach((key) => keys.add(key));
    if (minWithDefault < 0) {
      MINUS_SIGNS_WITH_ASCII.forEach((key) => keys.add(key));
    }
    return keys;
  });
  const getStepAmount = useStableCallback((event) => {
    if (event?.altKey) {
      return smallStep;
    }
    if (event?.shiftKey) {
      return largeStep;
    }
    return step;
  });
  const setValue = useStableCallback((unvalidatedValue, details) => {
    const eventWithOptionalKeyState = details.event;
    const dir = details.direction;
    const reason = details.reason;
    const shouldClampValue = !allowOutOfRange || !(reason === reason_parts_exports.inputChange || reason === reason_parts_exports.inputBlur || reason === reason_parts_exports.inputPaste || reason === reason_parts_exports.inputClear || reason === reason_parts_exports.none);
    const validatedValue = toValidatedNumber(unvalidatedValue, {
      step: dir ? getStepAmount(eventWithOptionalKeyState) * dir : void 0,
      format: formatOptionsRef.current,
      minWithDefault,
      maxWithDefault,
      minWithZeroDefault,
      snapOnStep,
      small: eventWithOptionalKeyState?.altKey ?? false,
      clamp: shouldClampValue
    });
    const isInputReason = details.reason === reason_parts_exports.inputChange || details.reason === reason_parts_exports.inputClear || details.reason === reason_parts_exports.inputBlur || details.reason === reason_parts_exports.inputPaste || details.reason === reason_parts_exports.none;
    const shouldFireChange = validatedValue !== value || isInputReason && (unvalidatedValue !== value || allowInputSyncRef.current === false);
    if (shouldFireChange) {
      lastChangedValueRef.current = validatedValue;
      onValueChangeProp?.(validatedValue, details);
      if (details.isCanceled) {
        return shouldFireChange;
      }
      setValueUnwrapped(validatedValue);
      setDirty(validatedValue !== validityData.initialValue);
      hasPendingCommitRef.current = true;
    }
    if (allowInputSyncRef.current) {
      setInputValue(formatNumber(validatedValue, locale, format));
    }
    forceRender();
    return shouldFireChange;
  });
  const incrementValue = useStableCallback((amount, {
    direction,
    currentValue,
    event,
    reason
  }) => {
    const prevValue = currentValue == null ? valueRef.current : currentValue;
    const nextValue = typeof prevValue === "number" ? prevValue + amount * direction : Math.max(0, min ?? 0);
    const nativeEvent = event;
    return setValue(nextValue, createChangeEventDetails(reason, nativeEvent, void 0, {
      direction
    }));
  });
  const stopAutoChange = useStableCallback(() => {
    intentionalTouchCheckTimeout.clear();
    startTickTimeout.clear();
    tickInterval.clear();
    unsubscribeFromGlobalContextMenuRef.current();
    movesAfterTouchRef.current = 0;
  });
  const startAutoChange = useStableCallback((isIncrement, triggerEvent) => {
    stopAutoChange();
    if (!inputRef.current) {
      return;
    }
    const win = getWindow(inputRef.current);
    function handleContextMenu(event) {
      event.preventDefault();
    }
    win.addEventListener("contextmenu", handleContextMenu);
    unsubscribeFromGlobalContextMenuRef.current = () => {
      win.removeEventListener("contextmenu", handleContextMenu);
    };
    win.addEventListener("pointerup", (event) => {
      isPressedRef.current = false;
      stopAutoChange();
      const committed = lastChangedValueRef.current ?? valueRef.current;
      const commitReason = isIncrement ? reason_parts_exports.incrementPress : reason_parts_exports.decrementPress;
      onValueCommitted(committed, createGenericEventDetails(commitReason, event));
    }, {
      once: true
    });
    function tick() {
      const amount = getStepAmount(triggerEvent) ?? DEFAULT_STEP;
      return incrementValue(amount, {
        direction: isIncrement ? 1 : -1,
        event: triggerEvent,
        reason: isIncrement ? "increment-press" : "decrement-press"
      });
    }
    if (!tick()) {
      stopAutoChange();
      return;
    }
    startTickTimeout.start(START_AUTO_CHANGE_DELAY, () => {
      tickInterval.start(CHANGE_VALUE_TICK_DELAY, () => {
        if (!tick()) {
          stopAutoChange();
        }
      });
    });
  });
  useIsoLayoutEffect(function syncFormattedInputValueOnValueChange() {
    if (!allowInputSyncRef.current) {
      return;
    }
    const nextInputValue = valueProp !== void 0 ? getControlledInputValue(value, locale, format) : formatNumber(value, locale, format);
    if (nextInputValue !== inputValue) {
      setInputValue(nextInputValue);
    }
  });
  useIsoLayoutEffect(function setDynamicInputModeForIOS() {
    if (!isIOS) {
      return;
    }
    let computedInputMode = "text";
    if (minWithDefault >= 0) {
      computedInputMode = "decimal";
    }
    setInputMode(computedInputMode);
  }, [minWithDefault, formatStyle]);
  React162.useEffect(() => {
    return () => stopAutoChange();
  }, [stopAutoChange]);
  React162.useEffect(function registerElementWheelListener() {
    const element2 = inputRef.current;
    if (disabled || readOnly || !allowWheelScrub || !element2) {
      return void 0;
    }
    function handleWheel(event) {
      if (
        // Allow pinch-zooming.
        event.ctrlKey || ownerDocument(inputRef.current).activeElement !== inputRef.current
      ) {
        return;
      }
      event.preventDefault();
      const amount = getStepAmount(event) ?? DEFAULT_STEP;
      incrementValue(amount, {
        direction: event.deltaY > 0 ? -1 : 1,
        event,
        reason: "wheel"
      });
    }
    element2.addEventListener("wheel", handleWheel);
    return () => {
      element2.removeEventListener("wheel", handleWheel);
    };
  }, [allowWheelScrub, incrementValue, disabled, readOnly, largeStep, step, getStepAmount]);
  const state = React162.useMemo(() => ({
    ...fieldState,
    disabled,
    readOnly,
    required,
    value,
    inputValue,
    scrubbing: isScrubbing
  }), [fieldState, disabled, readOnly, required, value, inputValue, isScrubbing]);
  const contextValue = React162.useMemo(() => ({
    inputRef,
    inputValue,
    value,
    startAutoChange,
    stopAutoChange,
    minWithDefault,
    maxWithDefault,
    disabled,
    readOnly,
    id,
    setValue,
    incrementValue,
    getStepAmount,
    allowInputSyncRef,
    formatOptionsRef,
    valueRef,
    lastChangedValueRef,
    hasPendingCommitRef,
    isPressedRef,
    intentionalTouchCheckTimeout,
    movesAfterTouchRef,
    name,
    required,
    invalid,
    inputMode,
    getAllowedNonNumericKeys,
    min,
    max,
    setInputValue,
    locale,
    isScrubbing,
    setIsScrubbing,
    state,
    onValueCommitted
  }), [inputRef, inputValue, value, startAutoChange, stopAutoChange, minWithDefault, maxWithDefault, disabled, readOnly, id, setValue, incrementValue, getStepAmount, formatOptionsRef, valueRef, intentionalTouchCheckTimeout, name, required, invalid, inputMode, getAllowedNonNumericKeys, min, max, setInputValue, locale, isScrubbing, state, onValueCommitted]);
  const element = useRenderElement("div", componentProps, {
    ref: forwardedRef,
    state,
    props: elementProps,
    stateAttributesMapping: stateAttributesMapping20
  });
  return (0, import_jsx_runtime61.jsxs)(NumberFieldRootContext.Provider, {
    value: contextValue,
    children: [element, (0, import_jsx_runtime61.jsx)("input", {
      ...validation.getInputValidationProps({
        onFocus() {
          inputRef.current?.focus();
        },
        onChange(event) {
          if (event.nativeEvent.defaultPrevented) {
            return;
          }
          const nextValue = event.currentTarget.valueAsNumber;
          const parsedValue = Number.isNaN(nextValue) ? null : nextValue;
          const details = createChangeEventDetails(reason_parts_exports.none, event.nativeEvent);
          setDirty(parsedValue !== validityData.initialValue);
          setValue(parsedValue, details);
          if (shouldValidateOnChange()) {
            validation.commit(parsedValue);
          }
        }
      }),
      ref: hiddenInputRef,
      type: "number",
      name,
      value: value ?? "",
      min,
      max,
      step: stepProp,
      disabled,
      required,
      "aria-hidden": true,
      tabIndex: -1,
      style: name ? visuallyHiddenInput : visuallyHidden
    })]
  });
});
if (true) NumberFieldRoot.displayName = "NumberFieldRoot";
function getControlledInputValue(value, locale, format) {
  const explicitPrecision = format?.maximumFractionDigits != null || format?.minimumFractionDigits != null;
  return explicitPrecision ? formatNumber(value, locale, format) : formatNumberMaxPrecision(value, locale, format);
}

// node_modules/@base-ui/react/esm/number-field/group/NumberFieldGroup.js
var React163 = __toESM(require_react(), 1);
var NumberFieldGroup = React163.forwardRef(function NumberFieldGroup2(componentProps, forwardedRef) {
  const {
    render,
    className,
    ...elementProps
  } = componentProps;
  const {
    state
  } = useNumberFieldRootContext();
  const element = useRenderElement("div", componentProps, {
    ref: forwardedRef,
    state,
    props: [{
      role: "group"
    }, elementProps],
    stateAttributesMapping: stateAttributesMapping20
  });
  return element;
});
if (true) NumberFieldGroup.displayName = "NumberFieldGroup";

// node_modules/@base-ui/react/esm/number-field/increment/NumberFieldIncrement.js
var React165 = __toESM(require_react(), 1);

// node_modules/@base-ui/react/esm/number-field/root/useNumberFieldButton.js
var React164 = __toESM(require_react(), 1);
function isTouchLikePointerType(pointerType) {
  return pointerType === "touch" || pointerType === "pen";
}
function useNumberFieldButton(params) {
  const {
    allowInputSyncRef,
    disabled,
    formatOptionsRef,
    getStepAmount,
    id,
    incrementValue,
    inputRef,
    inputValue,
    intentionalTouchCheckTimeout,
    isIncrement,
    isPressedRef,
    locale,
    movesAfterTouchRef,
    readOnly,
    setValue,
    startAutoChange,
    stopAutoChange,
    valueRef,
    lastChangedValueRef,
    onValueCommitted
  } = params;
  const incrementDownCoordsRef = React164.useRef({
    x: 0,
    y: 0
  });
  const isTouchingButtonRef = React164.useRef(false);
  const ignoreClickRef = React164.useRef(false);
  const pointerTypeRef = React164.useRef("");
  const pressReason = isIncrement ? "increment-press" : "decrement-press";
  function commitValue(nativeEvent) {
    allowInputSyncRef.current = true;
    const parsedValue = parseNumber(inputValue, locale, formatOptionsRef.current);
    if (parsedValue !== null) {
      valueRef.current = parsedValue;
      setValue(parsedValue, createChangeEventDetails(pressReason, nativeEvent, void 0, {
        direction: isIncrement ? 1 : -1
      }));
    }
  }
  const props = {
    disabled,
    "aria-readonly": readOnly || void 0,
    "aria-label": isIncrement ? "Increase" : "Decrease",
    "aria-controls": id,
    // Keyboard users shouldn't have access to the buttons, since they can use the input element
    // to change the value. On the other hand, `aria-hidden` is not applied because touch screen
    // readers should be able to use the buttons.
    tabIndex: -1,
    style: {
      WebkitUserSelect: "none",
      userSelect: "none"
    },
    onTouchStart() {
      isTouchingButtonRef.current = true;
    },
    onTouchEnd() {
      isTouchingButtonRef.current = false;
    },
    onClick(event) {
      const isDisabled = disabled || readOnly;
      if (event.defaultPrevented || isDisabled || // If it's not a keyboard/virtual click, ignore.
      (isTouchLikePointerType(pointerTypeRef.current) ? ignoreClickRef.current : event.detail !== 0)) {
        return;
      }
      commitValue(event.nativeEvent);
      const amount = getStepAmount(event) ?? DEFAULT_STEP;
      const prev = valueRef.current;
      incrementValue(amount, {
        direction: isIncrement ? 1 : -1,
        event: event.nativeEvent,
        reason: pressReason
      });
      const committed = lastChangedValueRef.current ?? valueRef.current;
      if (committed !== prev) {
        onValueCommitted(committed, createGenericEventDetails(pressReason, event.nativeEvent));
      }
    },
    onPointerDown(event) {
      const isMainButton = !event.button || event.button === 0;
      if (event.defaultPrevented || readOnly || !isMainButton || disabled) {
        return;
      }
      pointerTypeRef.current = event.pointerType;
      ignoreClickRef.current = false;
      isPressedRef.current = true;
      incrementDownCoordsRef.current = {
        x: event.clientX,
        y: event.clientY
      };
      commitValue(event.nativeEvent);
      const isTouchPointer = isTouchLikePointerType(event.pointerType);
      if (!isTouchPointer) {
        event.preventDefault();
        inputRef.current?.focus();
        startAutoChange(isIncrement, event);
      } else {
        intentionalTouchCheckTimeout.start(TOUCH_TIMEOUT, () => {
          const moves = movesAfterTouchRef.current;
          movesAfterTouchRef.current = 0;
          const stillPressed = isPressedRef.current;
          if (stillPressed && moves != null && moves < MAX_POINTER_MOVES_AFTER_TOUCH) {
            startAutoChange(isIncrement, event);
            ignoreClickRef.current = true;
          } else {
            ignoreClickRef.current = false;
            stopAutoChange();
          }
        });
      }
    },
    onPointerUp(event) {
      if (isTouchLikePointerType(event.pointerType)) {
        isPressedRef.current = false;
      }
    },
    onPointerMove(event) {
      const isDisabled = disabled || readOnly;
      if (isDisabled || !isTouchLikePointerType(event.pointerType) || !isPressedRef.current) {
        return;
      }
      if (movesAfterTouchRef.current != null) {
        movesAfterTouchRef.current += 1;
      }
      const {
        x,
        y
      } = incrementDownCoordsRef.current;
      const dx = x - event.clientX;
      const dy = y - event.clientY;
      if (dx ** 2 + dy ** 2 > SCROLLING_POINTER_MOVE_DISTANCE ** 2) {
        stopAutoChange();
      }
    },
    onMouseEnter(event) {
      const isDisabled = disabled || readOnly;
      if (event.defaultPrevented || isDisabled || !isPressedRef.current || isTouchingButtonRef.current || isTouchLikePointerType(pointerTypeRef.current)) {
        return;
      }
      startAutoChange(isIncrement, event);
    },
    onMouseLeave() {
      if (isTouchingButtonRef.current) {
        return;
      }
      stopAutoChange();
    },
    onMouseUp() {
      if (isTouchingButtonRef.current) {
        return;
      }
      stopAutoChange();
    }
  };
  return props;
}

// node_modules/@base-ui/react/esm/number-field/increment/NumberFieldIncrement.js
var NumberFieldIncrement = React165.forwardRef(function NumberFieldIncrement2(componentProps, forwardedRef) {
  const {
    render,
    className,
    disabled: disabledProp = false,
    nativeButton = true,
    ...elementProps
  } = componentProps;
  const {
    allowInputSyncRef,
    disabled: contextDisabled,
    formatOptionsRef,
    getStepAmount,
    id,
    incrementValue,
    inputRef,
    inputValue,
    intentionalTouchCheckTimeout,
    isPressedRef,
    locale,
    maxWithDefault,
    movesAfterTouchRef,
    readOnly,
    setValue,
    startAutoChange,
    state,
    stopAutoChange,
    value,
    valueRef,
    lastChangedValueRef,
    onValueCommitted
  } = useNumberFieldRootContext();
  const isMax = value != null && value >= maxWithDefault;
  const disabled = disabledProp || contextDisabled || isMax;
  const props = useNumberFieldButton({
    isIncrement: true,
    inputRef,
    startAutoChange,
    stopAutoChange,
    inputValue,
    disabled,
    readOnly,
    id,
    setValue,
    getStepAmount,
    incrementValue,
    allowInputSyncRef,
    formatOptionsRef,
    valueRef,
    isPressedRef,
    intentionalTouchCheckTimeout,
    movesAfterTouchRef,
    locale,
    lastChangedValueRef,
    onValueCommitted
  });
  const {
    getButtonProps,
    buttonRef
  } = useButton({
    disabled,
    native: nativeButton,
    focusableWhenDisabled: true
  });
  const buttonState = React165.useMemo(() => ({
    ...state,
    disabled
  }), [state, disabled]);
  const element = useRenderElement("button", componentProps, {
    ref: [forwardedRef, buttonRef],
    state: buttonState,
    props: [props, elementProps, getButtonProps],
    stateAttributesMapping: stateAttributesMapping20
  });
  return element;
});
if (true) NumberFieldIncrement.displayName = "NumberFieldIncrement";

// node_modules/@base-ui/react/esm/number-field/decrement/NumberFieldDecrement.js
var React166 = __toESM(require_react(), 1);
var NumberFieldDecrement = React166.forwardRef(function NumberFieldDecrement2(componentProps, forwardedRef) {
  const {
    render,
    className,
    disabled: disabledProp = false,
    nativeButton = true,
    ...elementProps
  } = componentProps;
  const {
    allowInputSyncRef,
    disabled: contextDisabled,
    formatOptionsRef,
    getStepAmount,
    id,
    incrementValue,
    inputRef,
    inputValue,
    intentionalTouchCheckTimeout,
    isPressedRef,
    minWithDefault,
    movesAfterTouchRef,
    readOnly,
    setValue,
    startAutoChange,
    state,
    stopAutoChange,
    value,
    valueRef,
    locale,
    lastChangedValueRef,
    onValueCommitted
  } = useNumberFieldRootContext();
  const isMin = value != null && value <= minWithDefault;
  const disabled = disabledProp || contextDisabled || isMin;
  const props = useNumberFieldButton({
    isIncrement: false,
    inputRef,
    startAutoChange,
    stopAutoChange,
    inputValue,
    disabled,
    readOnly,
    id,
    setValue,
    getStepAmount,
    incrementValue,
    allowInputSyncRef,
    formatOptionsRef,
    valueRef,
    isPressedRef,
    intentionalTouchCheckTimeout,
    movesAfterTouchRef,
    locale,
    lastChangedValueRef,
    onValueCommitted
  });
  const {
    getButtonProps,
    buttonRef
  } = useButton({
    disabled,
    native: nativeButton,
    focusableWhenDisabled: true
  });
  const buttonState = React166.useMemo(() => ({
    ...state,
    disabled
  }), [state, disabled]);
  const element = useRenderElement("button", componentProps, {
    ref: [forwardedRef, buttonRef],
    state: buttonState,
    props: [props, elementProps, getButtonProps],
    stateAttributesMapping: stateAttributesMapping20
  });
  return element;
});
if (true) NumberFieldDecrement.displayName = "NumberFieldDecrement";

// node_modules/@base-ui/react/esm/number-field/input/NumberFieldInput.js
var React167 = __toESM(require_react(), 1);
var stateAttributesMapping21 = {
  ...fieldValidityMapping,
  ...stateAttributesMapping20
};
var NAVIGATE_KEYS = /* @__PURE__ */ new Set(["Backspace", "Delete", "ArrowLeft", "ArrowRight", "Tab", "Enter", "Escape"]);
var NumberFieldInput = React167.forwardRef(function NumberFieldInput2(componentProps, forwardedRef) {
  const {
    render,
    className,
    ...elementProps
  } = componentProps;
  const {
    allowInputSyncRef,
    disabled,
    formatOptionsRef,
    getAllowedNonNumericKeys,
    getStepAmount,
    id,
    incrementValue,
    inputMode,
    inputValue,
    max,
    min,
    name,
    readOnly,
    required,
    setValue,
    state,
    setInputValue,
    locale,
    inputRef,
    value,
    onValueCommitted,
    lastChangedValueRef,
    hasPendingCommitRef,
    valueRef
  } = useNumberFieldRootContext();
  const {
    clearErrors
  } = useFormContext();
  const {
    validationMode,
    setTouched,
    setFocused,
    invalid,
    shouldValidateOnChange,
    validation
  } = useFieldRootContext();
  const {
    labelId
  } = useLabelableContext();
  const hasTouchedInputRef = React167.useRef(false);
  const blockRevalidationRef = React167.useRef(false);
  useField({
    id,
    commit: validation.commit,
    value,
    controlRef: inputRef,
    name,
    getValue: () => value ?? null
  });
  useValueChanged(value, (previousValue) => {
    const validateOnChange = shouldValidateOnChange();
    clearErrors(name);
    if (validateOnChange) {
      validation.commit(value);
    }
    if (previousValue === value || validateOnChange) {
      return;
    }
    if (blockRevalidationRef.current) {
      blockRevalidationRef.current = false;
      return;
    }
    validation.commit(value, true);
  });
  const inputProps = {
    id,
    required,
    disabled,
    readOnly,
    inputMode,
    value: inputValue,
    type: "text",
    autoComplete: "off",
    autoCorrect: "off",
    spellCheck: "false",
    "aria-roledescription": "Number field",
    "aria-invalid": invalid || void 0,
    "aria-labelledby": labelId,
    // If the server's locale does not match the client's locale, the formatting may not match,
    // causing a hydration mismatch.
    suppressHydrationWarning: true,
    onFocus(event) {
      if (event.defaultPrevented || readOnly || disabled) {
        return;
      }
      setFocused(true);
      if (hasTouchedInputRef.current) {
        return;
      }
      hasTouchedInputRef.current = true;
      const target = event.currentTarget;
      const length = target.value.length;
      target.setSelectionRange(length, length);
    },
    onBlur(event) {
      if (event.defaultPrevented || readOnly || disabled) {
        return;
      }
      setTouched(true);
      setFocused(false);
      const hadManualInput = !allowInputSyncRef.current;
      const hadPendingProgrammaticChange = hasPendingCommitRef.current;
      allowInputSyncRef.current = true;
      if (inputValue.trim() === "") {
        setValue(null, createChangeEventDetails(reason_parts_exports.inputClear, event.nativeEvent));
        if (validationMode === "onBlur") {
          validation.commit(null);
        }
        onValueCommitted(null, createGenericEventDetails(reason_parts_exports.inputClear, event.nativeEvent));
        return;
      }
      const formatOptions = formatOptionsRef.current;
      const parsedValue = parseNumber(inputValue, locale, formatOptions);
      if (parsedValue === null) {
        return;
      }
      const hasExplicitPrecision = formatOptions?.maximumFractionDigits != null || formatOptions?.minimumFractionDigits != null;
      const maxFrac = formatOptions?.maximumFractionDigits;
      const committed = hasExplicitPrecision && typeof maxFrac === "number" ? Number(parsedValue.toFixed(maxFrac)) : parsedValue;
      const nextEventDetails = createGenericEventDetails(reason_parts_exports.inputBlur, event.nativeEvent);
      const shouldUpdateValue = value !== committed;
      const shouldCommit = hadManualInput || shouldUpdateValue || hadPendingProgrammaticChange;
      if (validationMode === "onBlur") {
        validation.commit(committed);
      }
      if (shouldUpdateValue) {
        blockRevalidationRef.current = true;
        setValue(committed, createChangeEventDetails(reason_parts_exports.inputBlur, event.nativeEvent));
      }
      if (shouldCommit) {
        onValueCommitted(committed, nextEventDetails);
      }
      const canonicalText = formatNumber(committed, locale, formatOptions);
      const maxPrecisionText = formatNumberMaxPrecision(parsedValue, locale, formatOptions);
      const shouldPreserveFullPrecision = !hasExplicitPrecision && parsedValue === value && inputValue === maxPrecisionText;
      if (!shouldPreserveFullPrecision && inputValue !== canonicalText) {
        setInputValue(canonicalText);
      }
    },
    onChange(event) {
      if (event.nativeEvent.defaultPrevented) {
        return;
      }
      allowInputSyncRef.current = false;
      const targetValue = event.target.value;
      if (targetValue.trim() === "") {
        setInputValue(targetValue);
        setValue(null, createChangeEventDetails(reason_parts_exports.inputClear, event.nativeEvent));
        return;
      }
      const allowedNonNumericKeys = getAllowedNonNumericKeys();
      const isValidCharacterString = Array.from(targetValue).every((ch) => {
        const isAsciiDigit = ch >= "0" && ch <= "9";
        const isArabicNumeral = ARABIC_DETECT_RE.test(ch);
        const isHanNumeral = HAN_DETECT_RE.test(ch);
        const isPersianNumeral = PERSIAN_DETECT_RE.test(ch);
        const isFullwidthNumeral = FULLWIDTH_DETECT_RE.test(ch);
        const isMinus = ANY_MINUS_DETECT_RE.test(ch);
        return isAsciiDigit || isArabicNumeral || isHanNumeral || isPersianNumeral || isFullwidthNumeral || isMinus || allowedNonNumericKeys.has(ch);
      });
      if (!isValidCharacterString) {
        return;
      }
      const parsedValue = parseNumber(targetValue, locale, formatOptionsRef.current);
      setInputValue(targetValue);
      if (parsedValue !== null) {
        setValue(parsedValue, createChangeEventDetails(reason_parts_exports.inputChange, event.nativeEvent));
      }
    },
    onKeyDown(event) {
      if (event.defaultPrevented || readOnly || disabled) {
        return;
      }
      const nativeEvent = event.nativeEvent;
      allowInputSyncRef.current = true;
      const allowedNonNumericKeys = getAllowedNonNumericKeys();
      let isAllowedNonNumericKey = allowedNonNumericKeys.has(event.key);
      const {
        decimal,
        currency,
        percentSign
      } = getNumberLocaleDetails(locale, formatOptionsRef.current);
      const selectionStart = event.currentTarget.selectionStart;
      const selectionEnd = event.currentTarget.selectionEnd;
      const isAllSelected = selectionStart === 0 && selectionEnd === inputValue.length;
      const selectionContainsIndex = (index) => selectionStart != null && selectionEnd != null && index >= selectionStart && index < selectionEnd;
      if (ANY_MINUS_DETECT_RE.test(event.key) && Array.from(allowedNonNumericKeys).some((k) => ANY_MINUS_DETECT_RE.test(k || ""))) {
        const existingIndex = inputValue.search(ANY_MINUS_RE);
        const isReplacingExisting = existingIndex != null && existingIndex !== -1 && selectionContainsIndex(existingIndex);
        isAllowedNonNumericKey = !(ANY_MINUS_DETECT_RE.test(inputValue) || ANY_PLUS_DETECT_RE.test(inputValue)) || isAllSelected || isReplacingExisting;
      }
      if (ANY_PLUS_DETECT_RE.test(event.key) && Array.from(allowedNonNumericKeys).some((k) => ANY_PLUS_DETECT_RE.test(k || ""))) {
        const existingIndex = inputValue.search(ANY_PLUS_RE);
        const isReplacingExisting = existingIndex != null && existingIndex !== -1 && selectionContainsIndex(existingIndex);
        isAllowedNonNumericKey = !(ANY_MINUS_DETECT_RE.test(inputValue) || ANY_PLUS_DETECT_RE.test(inputValue)) || isAllSelected || isReplacingExisting;
      }
      [decimal, currency, percentSign].forEach((symbol) => {
        if (event.key === symbol) {
          const symbolIndex = inputValue.indexOf(symbol);
          const isSymbolHighlighted = selectionContainsIndex(symbolIndex);
          isAllowedNonNumericKey = !inputValue.includes(symbol) || isAllSelected || isSymbolHighlighted;
        }
      });
      const isAsciiDigit = event.key >= "0" && event.key <= "9";
      const isArabicNumeral = ARABIC_DETECT_RE.test(event.key);
      const isHanNumeral = HAN_DETECT_RE.test(event.key);
      const isFullwidthNumeral = FULLWIDTH_DETECT_RE.test(event.key);
      const isNavigateKey = NAVIGATE_KEYS.has(event.key);
      if (
        // Allow composition events (e.g., pinyin)
        // event.nativeEvent.isComposing does not work in Safari:
        // https://bugs.webkit.org/show_bug.cgi?id=165004
        event.which === 229 || event.altKey || event.ctrlKey || event.metaKey || isAllowedNonNumericKey || isAsciiDigit || isArabicNumeral || isFullwidthNumeral || isHanNumeral || isNavigateKey
      ) {
        return;
      }
      const parsedValue = parseNumber(inputValue, locale, formatOptionsRef.current);
      const amount = getStepAmount(event) ?? DEFAULT_STEP;
      stopEvent(event);
      const commitDetails = createGenericEventDetails(reason_parts_exports.keyboard, nativeEvent);
      if (event.key === "ArrowUp") {
        incrementValue(amount, {
          direction: 1,
          currentValue: parsedValue,
          event: nativeEvent,
          reason: reason_parts_exports.keyboard
        });
        onValueCommitted(lastChangedValueRef.current ?? valueRef.current, commitDetails);
      } else if (event.key === "ArrowDown") {
        incrementValue(amount, {
          direction: -1,
          currentValue: parsedValue,
          event: nativeEvent,
          reason: reason_parts_exports.keyboard
        });
        onValueCommitted(lastChangedValueRef.current ?? valueRef.current, commitDetails);
      } else if (event.key === "Home" && min != null) {
        setValue(min, createChangeEventDetails(reason_parts_exports.keyboard, nativeEvent));
        onValueCommitted(lastChangedValueRef.current ?? valueRef.current, commitDetails);
      } else if (event.key === "End" && max != null) {
        setValue(max, createChangeEventDetails(reason_parts_exports.keyboard, nativeEvent));
        onValueCommitted(lastChangedValueRef.current ?? valueRef.current, commitDetails);
      }
    },
    onPaste(event) {
      if (event.defaultPrevented || readOnly || disabled) {
        return;
      }
      event.preventDefault();
      const clipboardData = event.clipboardData || window.Clipboard;
      const pastedData = clipboardData.getData("text/plain");
      const parsedValue = parseNumber(pastedData, locale, formatOptionsRef.current);
      if (parsedValue !== null) {
        allowInputSyncRef.current = false;
        setValue(parsedValue, createChangeEventDetails(reason_parts_exports.inputPaste, event.nativeEvent));
        setInputValue(pastedData);
      }
    }
  };
  const element = useRenderElement("input", componentProps, {
    ref: [forwardedRef, inputRef],
    state,
    props: [inputProps, validation.getValidationProps(), elementProps],
    stateAttributesMapping: stateAttributesMapping21
  });
  return element;
});
if (true) NumberFieldInput.displayName = "NumberFieldInput";

// node_modules/@base-ui/react/esm/number-field/scrub-area/NumberFieldScrubArea.js
var React169 = __toESM(require_react(), 1);
var ReactDOM9 = __toESM(require_react_dom(), 1);

// node_modules/@base-ui/react/esm/number-field/scrub-area/NumberFieldScrubAreaContext.js
var React168 = __toESM(require_react(), 1);
var NumberFieldScrubAreaContext = React168.createContext(void 0);
if (true) NumberFieldScrubAreaContext.displayName = "NumberFieldScrubAreaContext";
function useNumberFieldScrubAreaContext() {
  const context = React168.useContext(NumberFieldScrubAreaContext);
  if (context === void 0) {
    throw new Error(true ? "Base UI: NumberFieldScrubAreaContext is missing. NumberFieldScrubArea parts must be placed within <NumberField.ScrubArea>." : formatErrorMessage_default(44));
  }
  return context;
}

// node_modules/@base-ui/react/esm/number-field/utils/getViewportRect.js
function getViewportRect(teleportDistance, scrubAreaEl) {
  const win = getWindow(scrubAreaEl);
  const rect = scrubAreaEl.getBoundingClientRect();
  if (rect && teleportDistance != null) {
    return {
      x: rect.left - teleportDistance / 2,
      y: rect.top - teleportDistance / 2,
      width: rect.right + teleportDistance / 2,
      height: rect.bottom + teleportDistance / 2
    };
  }
  const vV = win.visualViewport;
  if (vV) {
    return {
      x: vV.offsetLeft,
      y: vV.offsetTop,
      width: vV.offsetLeft + vV.width,
      height: vV.offsetTop + vV.height
    };
  }
  return {
    x: 0,
    y: 0,
    width: win.document.documentElement.clientWidth,
    height: win.document.documentElement.clientHeight
  };
}

// node_modules/@base-ui/react/esm/number-field/utils/subscribeToVisualViewportResize.js
function subscribeToVisualViewportResize(element, visualScaleRef) {
  const vV = getWindow(element).visualViewport;
  if (!vV) {
    return () => {
    };
  }
  function handleVisualResize() {
    if (vV) {
      visualScaleRef.current = vV.scale;
    }
  }
  handleVisualResize();
  vV.addEventListener("resize", handleVisualResize);
  return () => {
    vV.removeEventListener("resize", handleVisualResize);
  };
}

// node_modules/@base-ui/react/esm/number-field/scrub-area/NumberFieldScrubArea.js
var import_jsx_runtime62 = __toESM(require_jsx_runtime(), 1);
var NumberFieldScrubArea = React169.forwardRef(function NumberFieldScrubArea2(componentProps, forwardedRef) {
  const {
    render,
    className,
    direction = "horizontal",
    pixelSensitivity = 2,
    teleportDistance,
    ...elementProps
  } = componentProps;
  const {
    state,
    setIsScrubbing: setRootScrubbing,
    disabled,
    readOnly,
    inputRef,
    incrementValue,
    getStepAmount,
    onValueCommitted,
    lastChangedValueRef,
    valueRef
  } = useNumberFieldRootContext();
  const scrubAreaRef = React169.useRef(null);
  const isScrubbingRef = React169.useRef(false);
  const didMoveRef = React169.useRef(false);
  const pointerDownTargetRef = React169.useRef(null);
  const scrubAreaCursorRef = React169.useRef(null);
  const virtualCursorCoords = React169.useRef({
    x: 0,
    y: 0
  });
  const visualScaleRef = React169.useRef(1);
  const exitPointerLockTimeout = useTimeout();
  const [isTouchInput, setIsTouchInput] = React169.useState(false);
  const [isPointerLockDenied, setIsPointerLockDenied] = React169.useState(false);
  const [isScrubbing, setIsScrubbing] = React169.useState(false);
  React169.useEffect(() => {
    if (!isScrubbing || !scrubAreaCursorRef.current) {
      return void 0;
    }
    return subscribeToVisualViewportResize(scrubAreaCursorRef.current, visualScaleRef);
  }, [isScrubbing]);
  function updateCursorTransform(x, y) {
    if (scrubAreaCursorRef.current) {
      scrubAreaCursorRef.current.style.transform = `translate3d(${x}px,${y}px,0) scale(${1 / visualScaleRef.current})`;
    }
  }
  const onScrub = useStableCallback(({
    movementX,
    movementY
  }) => {
    const virtualCursor = scrubAreaCursorRef.current;
    const scrubAreaEl = scrubAreaRef.current;
    if (!virtualCursor || !scrubAreaEl) {
      return;
    }
    const rect = getViewportRect(teleportDistance, scrubAreaEl);
    const coords = virtualCursorCoords.current;
    const newCoords = {
      x: Math.round(coords.x + movementX),
      y: Math.round(coords.y + movementY)
    };
    const cursorWidth = virtualCursor.offsetWidth;
    const cursorHeight = virtualCursor.offsetHeight;
    if (newCoords.x + cursorWidth / 2 < rect.x) {
      newCoords.x = rect.width - cursorWidth / 2;
    } else if (newCoords.x + cursorWidth / 2 > rect.width) {
      newCoords.x = rect.x - cursorWidth / 2;
    }
    if (newCoords.y + cursorHeight / 2 < rect.y) {
      newCoords.y = rect.height - cursorHeight / 2;
    } else if (newCoords.y + cursorHeight / 2 > rect.height) {
      newCoords.y = rect.y - cursorHeight / 2;
    }
    virtualCursorCoords.current = newCoords;
    updateCursorTransform(newCoords.x, newCoords.y);
  });
  const onScrubbingChange = useStableCallback((scrubbingValue, {
    clientX,
    clientY
  }) => {
    ReactDOM9.flushSync(() => {
      setIsScrubbing(scrubbingValue);
      setRootScrubbing(scrubbingValue);
    });
    const virtualCursor = scrubAreaCursorRef.current;
    if (!virtualCursor || !scrubbingValue) {
      return;
    }
    const initialCoords = {
      x: clientX - virtualCursor.offsetWidth / 2,
      y: clientY - virtualCursor.offsetHeight / 2
    };
    virtualCursorCoords.current = initialCoords;
    updateCursorTransform(initialCoords.x, initialCoords.y);
  });
  React169.useEffect(function registerGlobalScrubbingEventListeners() {
    if (!inputRef.current || disabled || readOnly || !isScrubbing) {
      return void 0;
    }
    let cumulativeDelta = 0;
    function handleScrubPointerUp(event) {
      function handler() {
        try {
          ownerDocument(scrubAreaRef.current).exitPointerLock();
        } catch {
        } finally {
          isScrubbingRef.current = false;
          onScrubbingChange(false, event);
          onValueCommitted(lastChangedValueRef.current ?? valueRef.current, createGenericEventDetails(reason_parts_exports.scrub, event));
          if (!didMoveRef.current && pointerDownTargetRef.current != null) {
            pointerDownTargetRef.current.dispatchEvent(new MouseEvent("click", {
              bubbles: true,
              cancelable: true
            }));
          }
          didMoveRef.current = false;
          pointerDownTargetRef.current = null;
        }
      }
      if (isFirefox) {
        exitPointerLockTimeout.start(20, handler);
      } else {
        handler();
      }
    }
    function handleScrubPointerMove(event) {
      if (!isScrubbingRef.current) {
        return;
      }
      event.preventDefault();
      onScrub(event);
      const {
        movementX,
        movementY
      } = event;
      cumulativeDelta += direction === "vertical" ? movementY : movementX;
      if (Math.abs(cumulativeDelta) >= pixelSensitivity) {
        cumulativeDelta = 0;
        didMoveRef.current = true;
        const dValue = direction === "vertical" ? -movementY : movementX;
        const stepAmount = getStepAmount(event) ?? DEFAULT_STEP;
        const rawAmount = dValue * stepAmount;
        if (rawAmount !== 0) {
          incrementValue(Math.abs(rawAmount), {
            direction: rawAmount >= 0 ? 1 : -1,
            event,
            reason: reason_parts_exports.scrub
          });
        }
      }
    }
    const win = getWindow(inputRef.current);
    win.addEventListener("pointerup", handleScrubPointerUp, true);
    win.addEventListener("pointermove", handleScrubPointerMove, true);
    return () => {
      exitPointerLockTimeout.clear();
      win.removeEventListener("pointerup", handleScrubPointerUp, true);
      win.removeEventListener("pointermove", handleScrubPointerMove, true);
    };
  }, [disabled, readOnly, incrementValue, isScrubbing, getStepAmount, inputRef, onScrubbingChange, onScrub, direction, pixelSensitivity, lastChangedValueRef, onValueCommitted, valueRef, exitPointerLockTimeout]);
  React169.useEffect(function registerScrubberTouchPreventListener() {
    const element2 = scrubAreaRef.current;
    if (!element2 || disabled || readOnly) {
      return void 0;
    }
    function handleTouchStart(event) {
      if (event.touches.length === 1) {
        event.preventDefault();
      }
    }
    element2.addEventListener("touchstart", handleTouchStart);
    return () => {
      element2.removeEventListener("touchstart", handleTouchStart);
    };
  }, [disabled, readOnly]);
  const defaultProps = {
    role: "presentation",
    style: {
      touchAction: "none",
      WebkitUserSelect: "none",
      userSelect: "none"
    },
    async onPointerDown(event) {
      const isMainButton = !event.button || event.button === 0;
      if (event.defaultPrevented || readOnly || !isMainButton || disabled) {
        return;
      }
      const isTouch = event.pointerType === "touch";
      setIsTouchInput(isTouch);
      if (event.pointerType === "mouse") {
        event.preventDefault();
        inputRef.current?.focus();
      }
      isScrubbingRef.current = true;
      didMoveRef.current = false;
      pointerDownTargetRef.current = event.target;
      onScrubbingChange(true, event.nativeEvent);
      if (!isTouch && !isWebKit) {
        try {
          await ownerDocument(scrubAreaRef.current).body.requestPointerLock();
          setIsPointerLockDenied(false);
        } catch (error2) {
          setIsPointerLockDenied(true);
        } finally {
          if (isScrubbingRef.current) {
            ReactDOM9.flushSync(() => {
              onScrubbingChange(true, event.nativeEvent);
            });
          }
        }
      }
    }
  };
  const element = useRenderElement("span", componentProps, {
    ref: [forwardedRef, scrubAreaRef],
    state,
    props: [defaultProps, elementProps],
    stateAttributesMapping: stateAttributesMapping20
  });
  const contextValue = React169.useMemo(() => ({
    isScrubbing,
    isTouchInput,
    isPointerLockDenied,
    scrubAreaCursorRef,
    scrubAreaRef,
    direction,
    pixelSensitivity,
    teleportDistance
  }), [isScrubbing, isTouchInput, isPointerLockDenied, direction, pixelSensitivity, teleportDistance]);
  return (0, import_jsx_runtime62.jsx)(NumberFieldScrubAreaContext.Provider, {
    value: contextValue,
    children: element
  });
});
if (true) NumberFieldScrubArea.displayName = "NumberFieldScrubArea";

// node_modules/@base-ui/react/esm/number-field/scrub-area-cursor/NumberFieldScrubAreaCursor.js
var React170 = __toESM(require_react(), 1);
var ReactDOM10 = __toESM(require_react_dom(), 1);
var NumberFieldScrubAreaCursor = React170.forwardRef(function NumberFieldScrubAreaCursor2(componentProps, forwardedRef) {
  const {
    render,
    className,
    ...elementProps
  } = componentProps;
  const {
    state
  } = useNumberFieldRootContext();
  const {
    isScrubbing,
    isTouchInput,
    isPointerLockDenied,
    scrubAreaCursorRef
  } = useNumberFieldScrubAreaContext();
  const [domElement, setDomElement] = React170.useState(null);
  const shouldRender = isScrubbing && !isWebKit && !isTouchInput && !isPointerLockDenied;
  const element = useRenderElement("span", componentProps, {
    enabled: shouldRender,
    ref: [forwardedRef, scrubAreaCursorRef, setDomElement],
    state,
    props: [{
      role: "presentation",
      style: {
        position: "fixed",
        top: 0,
        left: 0,
        pointerEvents: "none"
      }
    }, elementProps],
    stateAttributesMapping: stateAttributesMapping20
  });
  return element && ReactDOM10.createPortal(element, ownerDocument(domElement).body);
});
if (true) NumberFieldScrubAreaCursor.displayName = "NumberFieldScrubAreaCursor";

// node_modules/@base-ui/react/esm/popover/index.parts.js
var index_parts_exports19 = {};
__export(index_parts_exports19, {
  Arrow: () => PopoverArrow,
  Backdrop: () => PopoverBackdrop,
  Close: () => PopoverClose,
  Description: () => PopoverDescription,
  Handle: () => PopoverHandle,
  Popup: () => PopoverPopup,
  Portal: () => PopoverPortal,
  Positioner: () => PopoverPositioner,
  Root: () => PopoverRoot,
  Title: () => PopoverTitle,
  Trigger: () => PopoverTrigger,
  Viewport: () => PopoverViewport,
  createHandle: () => createPopoverHandle
});

// node_modules/@base-ui/react/esm/popover/root/PopoverRoot.js
var React173 = __toESM(require_react(), 1);

// node_modules/@base-ui/react/esm/popover/root/PopoverRootContext.js
var React171 = __toESM(require_react(), 1);
var PopoverRootContext = React171.createContext(void 0);
if (true) PopoverRootContext.displayName = "PopoverRootContext";
function usePopoverRootContext(optional) {
  const context = React171.useContext(PopoverRootContext);
  if (context === void 0 && !optional) {
    throw new Error(true ? "Base UI: PopoverRootContext is missing. Popover parts must be placed within <Popover.Root>." : formatErrorMessage_default(47));
  }
  return context;
}

// node_modules/@base-ui/react/esm/popover/store/PopoverStore.js
var React172 = __toESM(require_react(), 1);
var ReactDOM11 = __toESM(require_react_dom(), 1);
function createInitialState3() {
  return {
    ...createInitialPopupStoreState(),
    disabled: false,
    modal: false,
    instantType: void 0,
    openMethod: null,
    openChangeReason: null,
    titleElementId: void 0,
    descriptionElementId: void 0,
    stickIfOpen: true,
    nested: false,
    openOnHover: false,
    closeDelay: 0,
    hasViewport: false
  };
}
var selectors4 = {
  ...popupStoreSelectors,
  disabled: createSelector((state) => state.disabled),
  instantType: createSelector((state) => state.instantType),
  openMethod: createSelector((state) => state.openMethod),
  openChangeReason: createSelector((state) => state.openChangeReason),
  modal: createSelector((state) => state.modal),
  stickIfOpen: createSelector((state) => state.stickIfOpen),
  titleElementId: createSelector((state) => state.titleElementId),
  descriptionElementId: createSelector((state) => state.descriptionElementId),
  openOnHover: createSelector((state) => state.openOnHover),
  closeDelay: createSelector((state) => state.closeDelay),
  hasViewport: createSelector((state) => state.hasViewport)
};
var PopoverStore = class _PopoverStore extends ReactStore {
  constructor(initialState) {
    const initial = {
      ...createInitialState3(),
      ...initialState
    };
    if (initial.open && initialState?.mounted === void 0) {
      initial.mounted = true;
    }
    super(initial, {
      popupRef: React172.createRef(),
      backdropRef: React172.createRef(),
      internalBackdropRef: React172.createRef(),
      onOpenChange: void 0,
      onOpenChangeComplete: void 0,
      triggerFocusTargetRef: React172.createRef(),
      beforeContentFocusGuardRef: React172.createRef(),
      stickIfOpenTimeout: new Timeout(),
      triggerElements: new PopupTriggerMap()
    }, selectors4);
  }
  setOpen = (nextOpen, eventDetails) => {
    const isHover = eventDetails.reason === reason_parts_exports.triggerHover;
    const isKeyboardClick = eventDetails.reason === reason_parts_exports.triggerPress && eventDetails.event.detail === 0;
    const isDismissClose = !nextOpen && (eventDetails.reason === reason_parts_exports.escapeKey || eventDetails.reason == null);
    eventDetails.preventUnmountOnClose = () => {
      this.set("preventUnmountingOnClose", true);
    };
    this.context.onOpenChange?.(nextOpen, eventDetails);
    if (eventDetails.isCanceled) {
      return;
    }
    const details = {
      open: nextOpen,
      nativeEvent: eventDetails.event,
      reason: eventDetails.reason,
      nested: this.state.nested,
      triggerElement: eventDetails.trigger
    };
    const floatingEvents = this.state.floatingRootContext.context.events;
    floatingEvents?.emit("openchange", details);
    const changeState = () => {
      const updatedState = {
        open: nextOpen,
        openChangeReason: eventDetails.reason
      };
      const newTriggerId = eventDetails.trigger?.id ?? null;
      if (newTriggerId || nextOpen) {
        updatedState.activeTriggerId = newTriggerId;
        updatedState.activeTriggerElement = eventDetails.trigger ?? null;
      }
      this.update(updatedState);
    };
    if (isHover) {
      this.set("stickIfOpen", true);
      this.context.stickIfOpenTimeout.start(PATIENT_CLICK_THRESHOLD, () => {
        this.set("stickIfOpen", false);
      });
      ReactDOM11.flushSync(changeState);
    } else {
      changeState();
    }
    if (isKeyboardClick || isDismissClose) {
      this.set("instantType", isKeyboardClick ? "click" : "dismiss");
    } else if (eventDetails.reason === reason_parts_exports.focusOut) {
      this.set("instantType", "focus");
    } else {
      this.set("instantType", void 0);
    }
  };
  static useStore(externalStore, initialState) {
    const internalStore = useRefWithInit(() => {
      return new _PopoverStore(initialState);
    }).current;
    const store = externalStore ?? internalStore;
    useOnMount(internalStore.disposeEffect);
    return store;
  }
  disposeEffect = () => {
    return this.context.stickIfOpenTimeout.disposeEffect();
  };
};

// node_modules/@base-ui/react/esm/popover/root/PopoverRoot.js
var import_jsx_runtime63 = __toESM(require_jsx_runtime(), 1);
function PopoverRootComponent({
  props
}) {
  const {
    children,
    open: openProp,
    defaultOpen = false,
    onOpenChange,
    onOpenChangeComplete,
    modal = false,
    handle,
    triggerId: triggerIdProp,
    defaultTriggerId: defaultTriggerIdProp = null
  } = props;
  const store = PopoverStore.useStore(handle?.store, {
    modal,
    open: defaultOpen,
    openProp,
    activeTriggerId: defaultTriggerIdProp,
    triggerIdProp
  });
  useOnFirstRender(() => {
    if (openProp === void 0 && store.state.open === false && defaultOpen === true) {
      store.update({
        open: true,
        activeTriggerId: defaultTriggerIdProp
      });
    }
  });
  store.useControlledProp("openProp", openProp);
  store.useControlledProp("triggerIdProp", triggerIdProp);
  const open = store.useState("open");
  const positionerElement = store.useState("positionerElement");
  const payload = store.useState("payload");
  const openReason = store.useState("openChangeReason");
  store.useContextCallback("onOpenChange", onOpenChange);
  store.useContextCallback("onOpenChangeComplete", onOpenChangeComplete);
  const {
    openMethod,
    triggerProps: interactionTypeTriggerProps
  } = useOpenInteractionType(open);
  useImplicitActiveTrigger(store);
  const {
    forceUnmount
  } = useOpenStateTransitions(open, store, () => {
    store.update({
      stickIfOpen: true,
      openChangeReason: null
    });
  });
  useScrollLock(open && modal === true && openReason !== reason_parts_exports.triggerHover && openMethod !== "touch", positionerElement);
  React173.useEffect(() => {
    if (!open) {
      store.context.stickIfOpenTimeout.clear();
    }
  }, [store, open]);
  const createPopoverEventDetails = React173.useCallback((reason) => {
    const details = createChangeEventDetails(reason);
    details.preventUnmountOnClose = () => {
      store.set("preventUnmountingOnClose", true);
    };
    return details;
  }, [store]);
  const handleImperativeClose = React173.useCallback(() => {
    store.setOpen(false, createPopoverEventDetails(reason_parts_exports.imperativeAction));
  }, [store, createPopoverEventDetails]);
  React173.useImperativeHandle(props.actionsRef, () => ({
    unmount: forceUnmount,
    close: handleImperativeClose
  }), [forceUnmount, handleImperativeClose]);
  const floatingRootContext = useSyncedFloatingRootContext({
    popupStore: store,
    onOpenChange: store.setOpen
  });
  const dismiss = useDismiss(floatingRootContext, {
    outsidePressEvent: {
      // Ensure `aria-hidden` on outside elements is removed immediately
      // on outside press when trapping focus.
      mouse: modal === "trap-focus" ? "sloppy" : "intentional",
      touch: "sloppy"
    }
  });
  const role = useRole(floatingRootContext);
  const {
    getReferenceProps,
    getFloatingProps,
    getTriggerProps
  } = useInteractions([dismiss, role]);
  const activeTriggerProps = React173.useMemo(() => {
    return getReferenceProps(interactionTypeTriggerProps);
  }, [getReferenceProps, interactionTypeTriggerProps]);
  const inactiveTriggerProps = React173.useMemo(() => {
    return getTriggerProps(interactionTypeTriggerProps);
  }, [getTriggerProps, interactionTypeTriggerProps]);
  const popupProps = React173.useMemo(() => {
    return getFloatingProps();
  }, [getFloatingProps]);
  store.useSyncedValues({
    modal,
    openMethod,
    activeTriggerProps,
    inactiveTriggerProps,
    popupProps,
    floatingRootContext,
    nested: useFloatingParentNodeId() != null
  });
  const popoverContext = React173.useMemo(() => ({
    store
  }), [store]);
  return (0, import_jsx_runtime63.jsx)(PopoverRootContext.Provider, {
    value: popoverContext,
    children: typeof children === "function" ? children({
      payload
    }) : children
  });
}
function PopoverRoot(props) {
  if (usePopoverRootContext(true)) {
    return (0, import_jsx_runtime63.jsx)(PopoverRootComponent, {
      props
    });
  }
  return (0, import_jsx_runtime63.jsx)(FloatingTree, {
    children: (0, import_jsx_runtime63.jsx)(PopoverRootComponent, {
      props
    })
  });
}

// node_modules/@base-ui/react/esm/popover/trigger/PopoverTrigger.js
var React174 = __toESM(require_react(), 1);
var ReactDOM12 = __toESM(require_react_dom(), 1);

// node_modules/@base-ui/react/esm/popover/utils/constants.js
var OPEN_DELAY = 300;

// node_modules/@base-ui/react/esm/popover/trigger/PopoverTrigger.js
var import_jsx_runtime64 = __toESM(require_jsx_runtime(), 1);
var PopoverTrigger = React174.forwardRef(function PopoverTrigger2(componentProps, forwardedRef) {
  const {
    render,
    className,
    disabled = false,
    nativeButton = true,
    handle,
    payload,
    openOnHover = false,
    delay = OPEN_DELAY,
    closeDelay = 0,
    id: idProp,
    ...elementProps
  } = componentProps;
  const rootContext = usePopoverRootContext(true);
  const store = handle?.store ?? rootContext?.store;
  if (!store) {
    throw new Error(true ? "Base UI: <Popover.Trigger> must be either used within a <Popover.Root> component or provided with a handle." : formatErrorMessage_default(74));
  }
  const thisTriggerId = useBaseUiId(idProp);
  const isTriggerActive = store.useState("isTriggerActive", thisTriggerId);
  const floatingContext = store.useState("floatingRootContext");
  const isOpenedByThisTrigger = store.useState("isOpenedByTrigger", thisTriggerId);
  const triggerElementRef = React174.useRef(null);
  const {
    registerTrigger,
    isMountedByThisTrigger
  } = useTriggerDataForwarding(thisTriggerId, triggerElementRef, store, {
    payload,
    disabled,
    openOnHover,
    closeDelay
  });
  const openReason = store.useState("openChangeReason");
  const stickIfOpen = store.useState("stickIfOpen");
  const openMethod = store.useState("openMethod");
  const hoverProps = useHoverReferenceInteraction(floatingContext, {
    enabled: floatingContext != null && openOnHover && (openMethod !== "touch" || openReason !== reason_parts_exports.triggerPress),
    mouseOnly: true,
    move: false,
    handleClose: safePolygon(),
    restMs: delay,
    delay: {
      close: closeDelay
    },
    triggerElementRef,
    isActiveTrigger: isTriggerActive
  });
  const click = useClick(floatingContext, {
    enabled: floatingContext != null,
    stickIfOpen
  });
  const localProps = useInteractions([click]);
  const rootTriggerProps = store.useState("triggerProps", isMountedByThisTrigger);
  const state = {
    disabled,
    open: isOpenedByThisTrigger
  };
  const {
    getButtonProps,
    buttonRef
  } = useButton({
    disabled,
    native: nativeButton
  });
  const stateAttributesMapping34 = React174.useMemo(() => ({
    open(value) {
      if (value && openReason === reason_parts_exports.triggerPress) {
        return pressableTriggerOpenStateMapping.open(value);
      }
      return triggerOpenStateMapping.open(value);
    }
  }), [openReason]);
  const element = useRenderElement("button", componentProps, {
    state,
    ref: [buttonRef, forwardedRef, registerTrigger, triggerElementRef],
    props: [localProps.getReferenceProps(), hoverProps, rootTriggerProps, {
      [CLICK_TRIGGER_IDENTIFIER]: "",
      id: thisTriggerId
    }, elementProps, getButtonProps],
    stateAttributesMapping: stateAttributesMapping34
  });
  const preFocusGuardRef = React174.useRef(null);
  const handlePreFocusGuardFocus = useStableCallback((event) => {
    ReactDOM12.flushSync(() => {
      store.setOpen(false, createChangeEventDetails(reason_parts_exports.focusOut, event.nativeEvent, event.currentTarget));
    });
    const previousTabbable = getTabbableBeforeElement(preFocusGuardRef.current);
    previousTabbable?.focus();
  });
  const handleFocusTargetFocus = useStableCallback((event) => {
    const positionerElement = store.select("positionerElement");
    if (positionerElement && isOutsideEvent(event, positionerElement)) {
      store.context.beforeContentFocusGuardRef.current?.focus();
    } else {
      ReactDOM12.flushSync(() => {
        store.setOpen(false, createChangeEventDetails(reason_parts_exports.focusOut, event.nativeEvent, event.currentTarget));
      });
      let nextTabbable = getTabbableAfterElement(store.context.triggerFocusTargetRef.current || triggerElementRef.current);
      while (nextTabbable !== null && contains(positionerElement, nextTabbable)) {
        const prevTabbable = nextTabbable;
        nextTabbable = getNextTabbable(nextTabbable);
        if (nextTabbable === prevTabbable) {
          break;
        }
      }
      nextTabbable?.focus();
    }
  });
  if (isTriggerActive) {
    return (0, import_jsx_runtime64.jsxs)(React174.Fragment, {
      children: [(0, import_jsx_runtime64.jsx)(FocusGuard, {
        ref: preFocusGuardRef,
        onFocus: handlePreFocusGuardFocus
      }), (0, import_jsx_runtime64.jsx)(React174.Fragment, {
        children: element
      }, thisTriggerId), (0, import_jsx_runtime64.jsx)(FocusGuard, {
        ref: store.context.triggerFocusTargetRef,
        onFocus: handleFocusTargetFocus
      })]
    });
  }
  return (0, import_jsx_runtime64.jsx)(React174.Fragment, {
    children: element
  }, thisTriggerId);
});
if (true) PopoverTrigger.displayName = "PopoverTrigger";

// node_modules/@base-ui/react/esm/popover/portal/PopoverPortal.js
var React176 = __toESM(require_react(), 1);

// node_modules/@base-ui/react/esm/popover/portal/PopoverPortalContext.js
var React175 = __toESM(require_react(), 1);
var PopoverPortalContext = React175.createContext(void 0);
if (true) PopoverPortalContext.displayName = "PopoverPortalContext";
function usePopoverPortalContext() {
  const value = React175.useContext(PopoverPortalContext);
  if (value === void 0) {
    throw new Error(true ? "Base UI: <Popover.Portal> is missing." : formatErrorMessage_default(45));
  }
  return value;
}

// node_modules/@base-ui/react/esm/popover/portal/PopoverPortal.js
var import_jsx_runtime65 = __toESM(require_jsx_runtime(), 1);
var PopoverPortal = React176.forwardRef(function PopoverPortal2(props, forwardedRef) {
  const {
    keepMounted = false,
    ...portalProps
  } = props;
  const {
    store
  } = usePopoverRootContext();
  const mounted = store.useState("mounted");
  const shouldRender = mounted || keepMounted;
  if (!shouldRender) {
    return null;
  }
  return (0, import_jsx_runtime65.jsx)(PopoverPortalContext.Provider, {
    value: keepMounted,
    children: (0, import_jsx_runtime65.jsx)(FloatingPortal, {
      ref: forwardedRef,
      ...portalProps
    })
  });
});
if (true) PopoverPortal.displayName = "PopoverPortal";

// node_modules/@base-ui/react/esm/popover/positioner/PopoverPositioner.js
var React178 = __toESM(require_react(), 1);

// node_modules/@base-ui/react/esm/popover/positioner/PopoverPositionerContext.js
var React177 = __toESM(require_react(), 1);
var PopoverPositionerContext = React177.createContext(void 0);
if (true) PopoverPositionerContext.displayName = "PopoverPositionerContext";
function usePopoverPositionerContext() {
  const context = React177.useContext(PopoverPositionerContext);
  if (!context) {
    throw new Error(true ? "Base UI: PopoverPositionerContext is missing. PopoverPositioner parts must be placed within <Popover.Positioner>." : formatErrorMessage_default(46));
  }
  return context;
}

// node_modules/@base-ui/react/esm/popover/positioner/PopoverPositioner.js
var import_jsx_runtime66 = __toESM(require_jsx_runtime(), 1);
var PopoverPositioner = React178.forwardRef(function PopoverPositioner2(componentProps, forwardedRef) {
  const {
    render,
    className,
    anchor,
    positionMethod = "absolute",
    side = "bottom",
    align = "center",
    sideOffset = 0,
    alignOffset = 0,
    collisionBoundary = "clipping-ancestors",
    collisionPadding = 5,
    arrowPadding = 5,
    sticky = false,
    disableAnchorTracking = false,
    collisionAvoidance = POPUP_COLLISION_AVOIDANCE,
    ...elementProps
  } = componentProps;
  const {
    store
  } = usePopoverRootContext();
  const keepMounted = usePopoverPortalContext();
  const nodeId = useFloatingNodeId();
  const floatingRootContext = store.useState("floatingRootContext");
  const mounted = store.useState("mounted");
  const open = store.useState("open");
  const openReason = store.useState("openChangeReason");
  const triggerElement = store.useState("activeTriggerElement");
  const modal = store.useState("modal");
  const positionerElement = store.useState("positionerElement");
  const instantType = store.useState("instantType");
  const transitionStatus = store.useState("transitionStatus");
  const hasViewport = store.useState("hasViewport");
  const prevTriggerElementRef = React178.useRef(null);
  const runOnceAnimationsFinish = useAnimationsFinished(positionerElement, false, false);
  const positioning = useAnchorPositioning({
    anchor,
    floatingRootContext,
    positionMethod,
    mounted,
    side,
    sideOffset,
    align,
    alignOffset,
    arrowPadding,
    collisionBoundary,
    collisionPadding,
    sticky,
    disableAnchorTracking,
    keepMounted,
    nodeId,
    collisionAvoidance,
    adaptiveOrigin: hasViewport ? adaptiveOrigin : void 0
  });
  const defaultProps = React178.useMemo(() => {
    const hiddenStyles = {};
    if (!open) {
      hiddenStyles.pointerEvents = "none";
    }
    return {
      role: "presentation",
      hidden: !mounted,
      style: {
        ...positioning.positionerStyles,
        ...hiddenStyles
      }
    };
  }, [open, mounted, positioning.positionerStyles]);
  const positioner = React178.useMemo(() => ({
    props: defaultProps,
    ...positioning
  }), [defaultProps, positioning]);
  const domReference = floatingRootContext.useState("domReferenceElement");
  useIsoLayoutEffect(() => {
    const currentTriggerElement = domReference;
    const prevTriggerElement = prevTriggerElementRef.current;
    if (currentTriggerElement) {
      prevTriggerElementRef.current = currentTriggerElement;
    }
    if (prevTriggerElement && currentTriggerElement && currentTriggerElement !== prevTriggerElement) {
      store.set("instantType", void 0);
      const ac = new AbortController();
      runOnceAnimationsFinish(() => {
        store.set("instantType", "trigger-change");
      }, ac.signal);
      return () => {
        ac.abort();
      };
    }
    return void 0;
  }, [domReference, runOnceAnimationsFinish, store]);
  const state = {
    open,
    side: positioner.side,
    align: positioner.align,
    anchorHidden: positioner.anchorHidden,
    instant: instantType
  };
  const setPositionerElement = React178.useCallback((element2) => {
    store.set("positionerElement", element2);
  }, [store]);
  const element = useRenderElement("div", componentProps, {
    state,
    props: [positioner.props, getDisabledMountTransitionStyles(transitionStatus), elementProps],
    ref: [forwardedRef, setPositionerElement],
    stateAttributesMapping: popupStateMapping
  });
  return (0, import_jsx_runtime66.jsxs)(PopoverPositionerContext.Provider, {
    value: positioner,
    children: [mounted && modal === true && openReason !== reason_parts_exports.triggerHover && (0, import_jsx_runtime66.jsx)(InternalBackdrop, {
      ref: store.context.internalBackdropRef,
      inert: inertValue(!open),
      cutout: triggerElement
    }), (0, import_jsx_runtime66.jsx)(FloatingNode, {
      id: nodeId,
      children: element
    })]
  });
});
if (true) PopoverPositioner.displayName = "PopoverPositioner";

// node_modules/@base-ui/react/esm/popover/popup/PopoverPopup.js
var React180 = __toESM(require_react(), 1);

// node_modules/@base-ui/react/esm/utils/closePart.js
var React179 = __toESM(require_react(), 1);
var import_jsx_runtime67 = __toESM(require_jsx_runtime(), 1);
var ClosePartContext = React179.createContext(void 0);
if (true) ClosePartContext.displayName = "ClosePartContext";
function useClosePartCount() {
  const [closePartCount, setClosePartCount] = React179.useState(0);
  const register = useStableCallback(() => {
    setClosePartCount((count) => count + 1);
    return () => {
      setClosePartCount((count) => Math.max(0, count - 1));
    };
  });
  const context = React179.useMemo(() => ({
    register
  }), [register]);
  return {
    context,
    hasClosePart: closePartCount > 0
  };
}
function ClosePartProvider(props) {
  const {
    value,
    children
  } = props;
  return (0, import_jsx_runtime67.jsx)(ClosePartContext.Provider, {
    value,
    children
  });
}
function useClosePartRegistration() {
  const context = React179.useContext(ClosePartContext);
  useIsoLayoutEffect(() => {
    return context?.register();
  }, [context]);
}

// node_modules/@base-ui/react/esm/popover/popup/PopoverPopup.js
var import_jsx_runtime68 = __toESM(require_jsx_runtime(), 1);
var stateAttributesMapping22 = {
  ...popupStateMapping,
  ...transitionStatusMapping
};
var PopoverPopup = React180.forwardRef(function PopoverPopup2(componentProps, forwardedRef) {
  const {
    className,
    render,
    initialFocus,
    finalFocus,
    ...elementProps
  } = componentProps;
  const {
    store
  } = usePopoverRootContext();
  const positioner = usePopoverPositionerContext();
  const insideToolbar = useToolbarRootContext(true) != null;
  const {
    context: closePartContext,
    hasClosePart
  } = useClosePartCount();
  const open = store.useState("open");
  const openMethod = store.useState("openMethod");
  const instantType = store.useState("instantType");
  const transitionStatus = store.useState("transitionStatus");
  const popupProps = store.useState("popupProps");
  const titleId = store.useState("titleElementId");
  const descriptionId = store.useState("descriptionElementId");
  const modal = store.useState("modal");
  const mounted = store.useState("mounted");
  const openReason = store.useState("openChangeReason");
  const activeTriggerElement = store.useState("activeTriggerElement");
  const floatingContext = store.useState("floatingRootContext");
  useOpenChangeComplete({
    open,
    ref: store.context.popupRef,
    onComplete() {
      if (open) {
        store.context.onOpenChangeComplete?.(true);
      }
    }
  });
  const disabled = store.useState("disabled");
  const openOnHover = store.useState("openOnHover");
  const closeDelay = store.useState("closeDelay");
  useHoverFloatingInteraction(floatingContext, {
    enabled: openOnHover && !disabled,
    closeDelay
  });
  function defaultInitialFocus(interactionType) {
    if (interactionType === "touch") {
      return store.context.popupRef.current;
    }
    return true;
  }
  const resolvedInitialFocus = initialFocus === void 0 ? defaultInitialFocus : initialFocus;
  const state = {
    open,
    side: positioner.side,
    align: positioner.align,
    instant: instantType,
    transitionStatus
  };
  const focusManagerModal = modal !== false && hasClosePart;
  const setPopupElement = React180.useCallback((element2) => {
    store.set("popupElement", element2);
  }, [store]);
  const element = useRenderElement("div", componentProps, {
    state,
    ref: [forwardedRef, store.context.popupRef, setPopupElement],
    props: [popupProps, {
      "aria-labelledby": titleId,
      "aria-describedby": descriptionId,
      onKeyDown(event) {
        if (insideToolbar && COMPOSITE_KEYS.has(event.key)) {
          event.stopPropagation();
        }
      }
    }, getDisabledMountTransitionStyles(transitionStatus), elementProps],
    stateAttributesMapping: stateAttributesMapping22
  });
  return (0, import_jsx_runtime68.jsx)(FloatingFocusManager, {
    context: floatingContext,
    openInteractionType: openMethod,
    modal: focusManagerModal,
    disabled: !mounted || openReason === reason_parts_exports.triggerHover,
    initialFocus: resolvedInitialFocus,
    returnFocus: finalFocus,
    restoreFocus: "popup",
    previousFocusableElement: isHTMLElement(activeTriggerElement) ? activeTriggerElement : void 0,
    nextFocusableElement: store.context.triggerFocusTargetRef,
    beforeContentFocusGuardRef: store.context.beforeContentFocusGuardRef,
    children: (0, import_jsx_runtime68.jsx)(ClosePartProvider, {
      value: closePartContext,
      children: element
    })
  });
});
if (true) PopoverPopup.displayName = "PopoverPopup";

// node_modules/@base-ui/react/esm/popover/arrow/PopoverArrow.js
var React181 = __toESM(require_react(), 1);
var PopoverArrow = React181.forwardRef(function PopoverArrow2(componentProps, forwardedRef) {
  const {
    className,
    render,
    ...elementProps
  } = componentProps;
  const {
    store
  } = usePopoverRootContext();
  const open = store.useState("open");
  const {
    arrowRef,
    side,
    align,
    arrowUncentered,
    arrowStyles
  } = usePopoverPositionerContext();
  const state = {
    open,
    side,
    align,
    uncentered: arrowUncentered
  };
  const element = useRenderElement("div", componentProps, {
    state,
    ref: [forwardedRef, arrowRef],
    props: [{
      style: arrowStyles,
      "aria-hidden": true
    }, elementProps],
    stateAttributesMapping: popupStateMapping
  });
  return element;
});
if (true) PopoverArrow.displayName = "PopoverArrow";

// node_modules/@base-ui/react/esm/popover/backdrop/PopoverBackdrop.js
var React182 = __toESM(require_react(), 1);
var stateAttributesMapping23 = {
  ...popupStateMapping,
  ...transitionStatusMapping
};
var PopoverBackdrop = React182.forwardRef(function PopoverBackdrop2(props, forwardedRef) {
  const {
    className,
    render,
    ...elementProps
  } = props;
  const {
    store
  } = usePopoverRootContext();
  const open = store.useState("open");
  const mounted = store.useState("mounted");
  const transitionStatus = store.useState("transitionStatus");
  const openReason = store.useState("openChangeReason");
  const state = {
    open,
    transitionStatus
  };
  const element = useRenderElement("div", props, {
    state,
    ref: [store.context.backdropRef, forwardedRef],
    props: [{
      role: "presentation",
      hidden: !mounted,
      style: {
        pointerEvents: openReason === reason_parts_exports.triggerHover ? "none" : void 0,
        userSelect: "none",
        WebkitUserSelect: "none"
      }
    }, elementProps],
    stateAttributesMapping: stateAttributesMapping23
  });
  return element;
});
if (true) PopoverBackdrop.displayName = "PopoverBackdrop";

// node_modules/@base-ui/react/esm/popover/title/PopoverTitle.js
var React183 = __toESM(require_react(), 1);
var PopoverTitle = React183.forwardRef(function PopoverTitle2(componentProps, forwardedRef) {
  const {
    render,
    className,
    ...elementProps
  } = componentProps;
  const {
    store
  } = usePopoverRootContext();
  const id = useBaseUiId(elementProps.id);
  useIsoLayoutEffect(() => {
    store.set("titleElementId", id);
    return () => {
      store.set("titleElementId", void 0);
    };
  }, [store, id]);
  const element = useRenderElement("h2", componentProps, {
    ref: forwardedRef,
    props: [{
      id
    }, elementProps]
  });
  return element;
});
if (true) PopoverTitle.displayName = "PopoverTitle";

// node_modules/@base-ui/react/esm/popover/description/PopoverDescription.js
var React184 = __toESM(require_react(), 1);
var PopoverDescription = React184.forwardRef(function PopoverDescription2(componentProps, forwardedRef) {
  const {
    render,
    className,
    ...elementProps
  } = componentProps;
  const {
    store
  } = usePopoverRootContext();
  const id = useBaseUiId(elementProps.id);
  useIsoLayoutEffect(() => {
    store.set("descriptionElementId", id);
    return () => {
      store.set("descriptionElementId", void 0);
    };
  }, [store, id]);
  const element = useRenderElement("p", componentProps, {
    ref: forwardedRef,
    props: [{
      id
    }, elementProps]
  });
  return element;
});
if (true) PopoverDescription.displayName = "PopoverDescription";

// node_modules/@base-ui/react/esm/popover/close/PopoverClose.js
var React185 = __toESM(require_react(), 1);
var PopoverClose = React185.forwardRef(function PopoverClose2(componentProps, forwardedRef) {
  const {
    render,
    className,
    disabled = false,
    nativeButton = true,
    ...elementProps
  } = componentProps;
  const {
    buttonRef,
    getButtonProps
  } = useButton({
    disabled,
    focusableWhenDisabled: false,
    native: nativeButton
  });
  const {
    store
  } = usePopoverRootContext();
  useClosePartRegistration();
  const element = useRenderElement("button", componentProps, {
    ref: [forwardedRef, buttonRef],
    props: [{
      onClick(event) {
        store.setOpen(false, createChangeEventDetails(reason_parts_exports.closePress, event.nativeEvent, event.currentTarget));
      }
    }, elementProps, getButtonProps]
  });
  return element;
});
if (true) PopoverClose.displayName = "PopoverClose";

// node_modules/@base-ui/react/esm/popover/viewport/PopoverViewport.js
var React186 = __toESM(require_react(), 1);

// node_modules/@base-ui/react/esm/popover/viewport/PopoverViewportCssVars.js
var PopoverViewportCssVars = (function(PopoverViewportCssVars2) {
  PopoverViewportCssVars2["popupWidth"] = "--popup-width";
  PopoverViewportCssVars2["popupHeight"] = "--popup-height";
  return PopoverViewportCssVars2;
})({});

// node_modules/@base-ui/react/esm/popover/viewport/PopoverViewport.js
var stateAttributesMapping24 = {
  activationDirection: (value) => value ? {
    "data-activation-direction": value
  } : null
};
var PopoverViewport = React186.forwardRef(function PopoverViewport2(componentProps, forwardedRef) {
  const {
    render,
    className,
    children,
    ...elementProps
  } = componentProps;
  const {
    store
  } = usePopoverRootContext();
  const {
    side
  } = usePopoverPositionerContext();
  const instantType = store.useState("instantType");
  const {
    children: childrenToRender,
    state: viewportState
  } = usePopupViewport({
    store,
    side,
    cssVars: PopoverViewportCssVars,
    children
  });
  const state = {
    activationDirection: viewportState.activationDirection,
    transitioning: viewportState.transitioning,
    instant: instantType
  };
  return useRenderElement("div", componentProps, {
    state,
    ref: forwardedRef,
    props: [elementProps, {
      children: childrenToRender
    }],
    stateAttributesMapping: stateAttributesMapping24
  });
});
if (true) PopoverViewport.displayName = "PopoverViewport";

// node_modules/@base-ui/react/esm/popover/store/PopoverHandle.js
var PopoverHandle = class {
  /**
   * Internal store holding the popover's state.
   * @internal
   */
  constructor() {
    this.store = new PopoverStore();
  }
  /**
   * Opens the popover and associates it with the trigger with the given id.
   * The trigger must be a Popover.Trigger component with this handle passed as a prop.
   *
   * @param triggerId ID of the trigger to associate with the popover.
   */
  open(triggerId) {
    const triggerElement = triggerId ? this.store.context.triggerElements.getById(triggerId) ?? void 0 : void 0;
    if (triggerId && !triggerElement) {
      throw new Error(true ? `Base UI: PopoverHandle.open: No trigger found with id "${triggerId}".` : formatErrorMessage_default(80, triggerId));
    }
    this.store.setOpen(true, createChangeEventDetails(reason_parts_exports.imperativeAction, void 0, triggerElement));
  }
  /**
   * Closes the popover.
   */
  close() {
    this.store.setOpen(false, createChangeEventDetails(reason_parts_exports.imperativeAction, void 0, void 0));
  }
  /**
   * Indicates whether the popover is currently open.
   */
  get isOpen() {
    return this.store.state.open;
  }
};
function createPopoverHandle() {
  return new PopoverHandle();
}

// node_modules/@base-ui/react/esm/preview-card/index.parts.js
var index_parts_exports20 = {};
__export(index_parts_exports20, {
  Arrow: () => PreviewCardArrow,
  Backdrop: () => PreviewCardBackdrop,
  Handle: () => PreviewCardHandle,
  Popup: () => PreviewCardPopup,
  Portal: () => PreviewCardPortal,
  Positioner: () => PreviewCardPositioner,
  Root: () => PreviewCardRoot,
  Trigger: () => PreviewCardTrigger,
  Viewport: () => PreviewCardViewport,
  createHandle: () => createPreviewCardHandle
});

// node_modules/@base-ui/react/esm/preview-card/root/PreviewCardRoot.js
var React189 = __toESM(require_react(), 1);

// node_modules/@base-ui/react/esm/preview-card/root/PreviewCardContext.js
var React187 = __toESM(require_react(), 1);
var PreviewCardRootContext = React187.createContext(void 0);
if (true) PreviewCardRootContext.displayName = "PreviewCardRootContext";
function usePreviewCardRootContext(optional) {
  const context = React187.useContext(PreviewCardRootContext);
  if (context === void 0 && !optional) {
    throw new Error(true ? "Base UI: PreviewCardRootContext is missing. PreviewCard parts must be placed within <PreviewCard.Root>." : formatErrorMessage_default(50));
  }
  return context;
}

// node_modules/@base-ui/react/esm/preview-card/store/PreviewCardStore.js
var React188 = __toESM(require_react(), 1);
var ReactDOM13 = __toESM(require_react_dom(), 1);

// node_modules/@base-ui/react/esm/preview-card/utils/constants.js
var OPEN_DELAY2 = 600;
var CLOSE_DELAY = 300;

// node_modules/@base-ui/react/esm/preview-card/store/PreviewCardStore.js
var selectors5 = {
  ...popupStoreSelectors,
  instantType: createSelector((state) => state.instantType),
  hasViewport: createSelector((state) => state.hasViewport)
};
var PreviewCardStore = class _PreviewCardStore extends ReactStore {
  constructor(initialState) {
    super({
      ...createInitialState4(),
      ...initialState
    }, {
      popupRef: React188.createRef(),
      onOpenChange: void 0,
      onOpenChangeComplete: void 0,
      triggerElements: new PopupTriggerMap(),
      closeDelayRef: {
        current: CLOSE_DELAY
      }
    }, selectors5);
  }
  setOpen = (nextOpen, eventDetails) => {
    const reason = eventDetails.reason;
    const isHover = reason === reason_parts_exports.triggerHover;
    const isFocusOpen = nextOpen && reason === reason_parts_exports.triggerFocus;
    const isDismissClose = !nextOpen && (reason === reason_parts_exports.triggerPress || reason === reason_parts_exports.escapeKey);
    eventDetails.preventUnmountOnClose = () => {
      this.set("preventUnmountingOnClose", true);
    };
    this.context.onOpenChange?.(nextOpen, eventDetails);
    if (eventDetails.isCanceled) {
      return;
    }
    const changeState = () => {
      const updatedState = {
        open: nextOpen
      };
      if (isFocusOpen) {
        updatedState.instantType = "focus";
      } else if (isDismissClose) {
        updatedState.instantType = "dismiss";
      } else if (reason === reason_parts_exports.triggerHover) {
        updatedState.instantType = void 0;
      }
      const newTriggerId = eventDetails.trigger?.id ?? null;
      if (newTriggerId || nextOpen) {
        updatedState.activeTriggerId = newTriggerId;
        updatedState.activeTriggerElement = eventDetails.trigger ?? null;
      }
      this.update(updatedState);
    };
    if (isHover) {
      ReactDOM13.flushSync(changeState);
    } else {
      changeState();
    }
  };
  static useStore(externalStore, initialState) {
    const internalStore = useRefWithInit(() => {
      return new _PreviewCardStore(initialState);
    }).current;
    const store = externalStore ?? internalStore;
    const floatingRootContext = useSyncedFloatingRootContext({
      popupStore: store,
      onOpenChange: store.setOpen
    });
    store.state.floatingRootContext = floatingRootContext;
    return store;
  }
};
function createInitialState4() {
  return {
    ...createInitialPopupStoreState(),
    instantType: void 0,
    hasViewport: false
  };
}

// node_modules/@base-ui/react/esm/preview-card/root/PreviewCardRoot.js
var import_jsx_runtime69 = __toESM(require_jsx_runtime(), 1);
function PreviewCardRootComponent(props) {
  const {
    open: openProp,
    defaultOpen = false,
    onOpenChange,
    onOpenChangeComplete,
    actionsRef,
    handle,
    triggerId: triggerIdProp,
    defaultTriggerId: defaultTriggerIdProp = null,
    children
  } = props;
  const store = PreviewCardStore.useStore(handle?.store, {
    open: defaultOpen,
    openProp,
    activeTriggerId: defaultTriggerIdProp,
    triggerIdProp
  });
  useOnFirstRender(() => {
    if (openProp === void 0 && store.state.open === false && defaultOpen === true) {
      store.update({
        open: true,
        activeTriggerId: defaultTriggerIdProp
      });
    }
  });
  store.useControlledProp("openProp", openProp);
  store.useControlledProp("triggerIdProp", triggerIdProp);
  store.useContextCallback("onOpenChange", onOpenChange);
  store.useContextCallback("onOpenChangeComplete", onOpenChangeComplete);
  const open = store.useState("open");
  const activeTriggerId = store.useState("activeTriggerId");
  const payload = store.useState("payload");
  useImplicitActiveTrigger(store);
  const {
    forceUnmount
  } = useOpenStateTransitions(open, store);
  useIsoLayoutEffect(() => {
    if (open) {
      if (activeTriggerId == null) {
        store.set("payload", void 0);
      }
    }
  }, [store, activeTriggerId, open]);
  const handleImperativeClose = React189.useCallback(() => {
    store.setOpen(false, createPreviewCardEventDetails(store, reason_parts_exports.imperativeAction));
  }, [store]);
  React189.useImperativeHandle(actionsRef, () => ({
    unmount: forceUnmount,
    close: handleImperativeClose
  }), [forceUnmount, handleImperativeClose]);
  const floatingRootContext = store.useState("floatingRootContext");
  const dismiss = useDismiss(floatingRootContext);
  const {
    getReferenceProps,
    getTriggerProps,
    getFloatingProps
  } = useInteractions([dismiss]);
  const activeTriggerProps = React189.useMemo(() => getReferenceProps(), [getReferenceProps]);
  const inactiveTriggerProps = React189.useMemo(() => getTriggerProps(), [getTriggerProps]);
  const popupProps = React189.useMemo(() => getFloatingProps(), [getFloatingProps]);
  store.useSyncedValues({
    activeTriggerProps,
    inactiveTriggerProps,
    popupProps
  });
  return (0, import_jsx_runtime69.jsx)(PreviewCardRootContext.Provider, {
    value: store,
    children: typeof children === "function" ? children({
      payload
    }) : children
  });
}
function PreviewCardRoot(props) {
  if (usePreviewCardRootContext(true)) {
    return (0, import_jsx_runtime69.jsx)(PreviewCardRootComponent, {
      ...props
    });
  }
  return (0, import_jsx_runtime69.jsx)(FloatingTree, {
    children: (0, import_jsx_runtime69.jsx)(PreviewCardRootComponent, {
      ...props
    })
  });
}
function createPreviewCardEventDetails(store, reason) {
  const details = createChangeEventDetails(reason);
  details.preventUnmountOnClose = () => {
    store.set("preventUnmountingOnClose", true);
  };
  return details;
}

// node_modules/@base-ui/react/esm/preview-card/portal/PreviewCardPortal.js
var React192 = __toESM(require_react(), 1);

// node_modules/@base-ui/react/esm/preview-card/portal/PreviewCardPortalContext.js
var React190 = __toESM(require_react(), 1);
var PreviewCardPortalContext = React190.createContext(void 0);
if (true) PreviewCardPortalContext.displayName = "PreviewCardPortalContext";
function usePreviewCardPortalContext() {
  const value = React190.useContext(PreviewCardPortalContext);
  if (value === void 0) {
    throw new Error(true ? "Base UI: <PreviewCard.Portal> is missing." : formatErrorMessage_default(48));
  }
  return value;
}

// node_modules/@base-ui/react/esm/utils/FloatingPortalLite.js
var React191 = __toESM(require_react(), 1);
var ReactDOM14 = __toESM(require_react_dom(), 1);
var import_jsx_runtime70 = __toESM(require_jsx_runtime(), 1);
var FloatingPortalLite = React191.forwardRef(function FloatingPortalLite2(componentProps, forwardedRef) {
  const {
    children,
    container,
    className,
    render,
    ...elementProps
  } = componentProps;
  const {
    portalNode,
    portalSubtree
  } = useFloatingPortalNode({
    container,
    ref: forwardedRef,
    componentProps,
    elementProps
  });
  if (!portalSubtree && !portalNode) {
    return null;
  }
  return (0, import_jsx_runtime70.jsxs)(React191.Fragment, {
    children: [portalSubtree, portalNode && ReactDOM14.createPortal(children, portalNode)]
  });
});
if (true) FloatingPortalLite.displayName = "FloatingPortalLite";

// node_modules/@base-ui/react/esm/preview-card/portal/PreviewCardPortal.js
var import_jsx_runtime71 = __toESM(require_jsx_runtime(), 1);
var PreviewCardPortal = React192.forwardRef(function PreviewCardPortal2(props, forwardedRef) {
  const {
    keepMounted = false,
    ...portalProps
  } = props;
  const store = usePreviewCardRootContext();
  const mounted = store.useState("mounted");
  const shouldRender = mounted || keepMounted;
  if (!shouldRender) {
    return null;
  }
  return (0, import_jsx_runtime71.jsx)(PreviewCardPortalContext.Provider, {
    value: keepMounted,
    children: (0, import_jsx_runtime71.jsx)(FloatingPortalLite, {
      ref: forwardedRef,
      ...portalProps
    })
  });
});
if (true) PreviewCardPortal.displayName = "PreviewCardPortal";

// node_modules/@base-ui/react/esm/preview-card/trigger/PreviewCardTrigger.js
var React193 = __toESM(require_react(), 1);
var PreviewCardTrigger = React193.forwardRef(function PreviewCardTrigger2(componentProps, forwardedRef) {
  const {
    render,
    className,
    delay,
    closeDelay,
    id: idProp,
    payload,
    handle,
    ...elementProps
  } = componentProps;
  const rootContext = usePreviewCardRootContext(true);
  const store = handle?.store ?? rootContext;
  if (!store) {
    throw new Error(true ? "Base UI: <PreviewCard.Trigger> must be either used within a <PreviewCard.Root> component or provided with a handle." : formatErrorMessage_default(89));
  }
  const thisTriggerId = useBaseUiId(idProp);
  const isTriggerActive = store.useState("isTriggerActive", thisTriggerId);
  const isOpenedByThisTrigger = store.useState("isOpenedByTrigger", thisTriggerId);
  const floatingRootContext = store.useState("floatingRootContext");
  const triggerElementRef = React193.useRef(null);
  const delayWithDefault = delay ?? OPEN_DELAY2;
  const closeDelayWithDefault = closeDelay ?? CLOSE_DELAY;
  const {
    registerTrigger,
    isMountedByThisTrigger
  } = useTriggerDataForwarding(thisTriggerId, triggerElementRef, store, {
    payload
  });
  useIsoLayoutEffect(() => {
    if (isMountedByThisTrigger) {
      store.context.closeDelayRef.current = closeDelayWithDefault;
    }
  }, [store, isMountedByThisTrigger, closeDelayWithDefault]);
  const hoverProps = useHoverReferenceInteraction(floatingRootContext, {
    mouseOnly: true,
    move: false,
    handleClose: safePolygon(),
    delay: () => ({
      open: delayWithDefault,
      close: closeDelayWithDefault
    }),
    triggerElementRef,
    isActiveTrigger: isTriggerActive
  });
  const focusProps = useFocus(floatingRootContext, {
    delay: delayWithDefault
  });
  const state = {
    open: isOpenedByThisTrigger
  };
  const rootTriggerProps = store.useState("triggerProps", isMountedByThisTrigger);
  const element = useRenderElement("a", componentProps, {
    state,
    ref: [forwardedRef, registerTrigger, triggerElementRef],
    props: [hoverProps, focusProps.reference, rootTriggerProps, {
      id: thisTriggerId
    }, elementProps],
    stateAttributesMapping: triggerOpenStateMapping
  });
  return element;
});
if (true) PreviewCardTrigger.displayName = "PreviewCardTrigger";

// node_modules/@base-ui/react/esm/preview-card/positioner/PreviewCardPositioner.js
var React195 = __toESM(require_react(), 1);

// node_modules/@base-ui/react/esm/preview-card/positioner/PreviewCardPositionerContext.js
var React194 = __toESM(require_react(), 1);
var PreviewCardPositionerContext = React194.createContext(void 0);
if (true) PreviewCardPositionerContext.displayName = "PreviewCardPositionerContext";
function usePreviewCardPositionerContext() {
  const context = React194.useContext(PreviewCardPositionerContext);
  if (context === void 0) {
    throw new Error(true ? "Base UI: <PreviewCard.Popup> and <PreviewCard.Arrow> must be used within the <PreviewCard.Positioner> component" : formatErrorMessage_default(49));
  }
  return context;
}

// node_modules/@base-ui/react/esm/preview-card/positioner/PreviewCardPositioner.js
var import_jsx_runtime72 = __toESM(require_jsx_runtime(), 1);
var PreviewCardPositioner = React195.forwardRef(function PreviewCardPositioner2(componentProps, forwardedRef) {
  const {
    render,
    className,
    anchor,
    positionMethod = "absolute",
    side = "bottom",
    align = "center",
    sideOffset = 0,
    alignOffset = 0,
    collisionBoundary = "clipping-ancestors",
    collisionPadding = 5,
    arrowPadding = 5,
    sticky = false,
    disableAnchorTracking = false,
    collisionAvoidance = POPUP_COLLISION_AVOIDANCE,
    ...elementProps
  } = componentProps;
  const store = usePreviewCardRootContext();
  const keepMounted = usePreviewCardPortalContext();
  const nodeId = useFloatingNodeId();
  const open = store.useState("open");
  const mounted = store.useState("mounted");
  const floatingRootContext = store.useState("floatingRootContext");
  const instantType = store.useState("instantType");
  const transitionStatus = store.useState("transitionStatus");
  const hasViewport = store.useState("hasViewport");
  const positioning = useAnchorPositioning({
    anchor,
    floatingRootContext,
    positionMethod,
    mounted,
    side,
    sideOffset,
    align,
    alignOffset,
    arrowPadding,
    collisionBoundary,
    collisionPadding,
    sticky,
    disableAnchorTracking,
    keepMounted,
    nodeId,
    collisionAvoidance,
    adaptiveOrigin: hasViewport ? adaptiveOrigin : void 0
  });
  const defaultProps = React195.useMemo(() => {
    const hiddenStyles = {};
    if (!open) {
      hiddenStyles.pointerEvents = "none";
    }
    return {
      role: "presentation",
      hidden: !mounted,
      style: {
        ...positioning.positionerStyles,
        ...hiddenStyles
      }
    };
  }, [open, mounted, positioning.positionerStyles]);
  const state = {
    open,
    side: positioning.side,
    align: positioning.align,
    anchorHidden: positioning.anchorHidden,
    instant: instantType
  };
  const contextValue = React195.useMemo(() => ({
    side: positioning.side,
    align: positioning.align,
    arrowRef: positioning.arrowRef,
    arrowUncentered: positioning.arrowUncentered,
    arrowStyles: positioning.arrowStyles
  }), [positioning.side, positioning.align, positioning.arrowRef, positioning.arrowUncentered, positioning.arrowStyles]);
  const element = useRenderElement("div", componentProps, {
    state,
    props: [defaultProps, getDisabledMountTransitionStyles(transitionStatus), elementProps],
    ref: [forwardedRef, store.useStateSetter("positionerElement")],
    stateAttributesMapping: popupStateMapping
  });
  return (0, import_jsx_runtime72.jsx)(PreviewCardPositionerContext.Provider, {
    value: contextValue,
    children: (0, import_jsx_runtime72.jsx)(FloatingNode, {
      id: nodeId,
      children: element
    })
  });
});
if (true) PreviewCardPositioner.displayName = "PreviewCardPositioner";

// node_modules/@base-ui/react/esm/preview-card/popup/PreviewCardPopup.js
var React196 = __toESM(require_react(), 1);
var stateAttributesMapping25 = {
  ...popupStateMapping,
  ...transitionStatusMapping
};
var PreviewCardPopup = React196.forwardRef(function PreviewCardPopup2(componentProps, forwardedRef) {
  const {
    className,
    render,
    ...elementProps
  } = componentProps;
  const store = usePreviewCardRootContext();
  const {
    side,
    align
  } = usePreviewCardPositionerContext();
  const open = store.useState("open");
  const instantType = store.useState("instantType");
  const transitionStatus = store.useState("transitionStatus");
  const popupProps = store.useState("popupProps");
  const floatingContext = store.useState("floatingRootContext");
  useOpenChangeComplete({
    open,
    ref: store.context.popupRef,
    onComplete() {
      if (open) {
        store.context.onOpenChangeComplete?.(true);
      }
    }
  });
  const getCloseDelay = useStableCallback(() => store.context.closeDelayRef.current);
  useHoverFloatingInteraction(floatingContext, {
    closeDelay: getCloseDelay
  });
  const state = {
    open,
    side,
    align,
    instant: instantType,
    transitionStatus
  };
  const element = useRenderElement("div", componentProps, {
    state,
    ref: [forwardedRef, store.context.popupRef, store.useStateSetter("popupElement")],
    props: [popupProps, getDisabledMountTransitionStyles(transitionStatus), elementProps],
    stateAttributesMapping: stateAttributesMapping25
  });
  return element;
});
if (true) PreviewCardPopup.displayName = "PreviewCardPopup";

// node_modules/@base-ui/react/esm/preview-card/arrow/PreviewCardArrow.js
var React197 = __toESM(require_react(), 1);
var PreviewCardArrow = React197.forwardRef(function PreviewCardArrow2(componentProps, forwardedRef) {
  const {
    render,
    className,
    ...elementProps
  } = componentProps;
  const store = usePreviewCardRootContext();
  const {
    arrowRef,
    side,
    align,
    arrowUncentered,
    arrowStyles
  } = usePreviewCardPositionerContext();
  const open = store.useState("open");
  const state = {
    open,
    side,
    align,
    uncentered: arrowUncentered
  };
  const element = useRenderElement("div", componentProps, {
    state,
    ref: [arrowRef, forwardedRef],
    props: [{
      style: arrowStyles,
      "aria-hidden": true
    }, elementProps],
    stateAttributesMapping: popupStateMapping
  });
  return element;
});
if (true) PreviewCardArrow.displayName = "PreviewCardArrow";

// node_modules/@base-ui/react/esm/preview-card/backdrop/PreviewCardBackdrop.js
var React198 = __toESM(require_react(), 1);
var stateAttributesMapping26 = {
  ...popupStateMapping,
  ...transitionStatusMapping
};
var PreviewCardBackdrop = React198.forwardRef(function PreviewCardBackdrop2(componentProps, forwardedRef) {
  const {
    render,
    className,
    ...elementProps
  } = componentProps;
  const store = usePreviewCardRootContext();
  const open = store.useState("open");
  const mounted = store.useState("mounted");
  const transitionStatus = store.useState("transitionStatus");
  const state = {
    open,
    transitionStatus
  };
  const element = useRenderElement("div", componentProps, {
    state,
    ref: [forwardedRef],
    props: [{
      role: "presentation",
      hidden: !mounted,
      style: {
        pointerEvents: "none",
        userSelect: "none",
        WebkitUserSelect: "none"
      }
    }, elementProps],
    stateAttributesMapping: stateAttributesMapping26
  });
  return element;
});
if (true) PreviewCardBackdrop.displayName = "PreviewCardBackdrop";

// node_modules/@base-ui/react/esm/preview-card/viewport/PreviewCardViewport.js
var React199 = __toESM(require_react(), 1);

// node_modules/@base-ui/react/esm/preview-card/viewport/PreviewCardViewportCssVars.js
var PreviewCardViewportCssVars = (function(PreviewCardViewportCssVars2) {
  PreviewCardViewportCssVars2["popupWidth"] = "--popup-width";
  PreviewCardViewportCssVars2["popupHeight"] = "--popup-height";
  return PreviewCardViewportCssVars2;
})({});

// node_modules/@base-ui/react/esm/preview-card/viewport/PreviewCardViewport.js
var stateAttributesMapping27 = {
  activationDirection: (value) => value ? {
    "data-activation-direction": value
  } : null
};
var PreviewCardViewport = React199.forwardRef(function PreviewCardViewport2(componentProps, forwardedRef) {
  const {
    render,
    className,
    children,
    ...elementProps
  } = componentProps;
  const store = usePreviewCardRootContext();
  const positioner = usePreviewCardPositionerContext();
  const instantType = store.useState("instantType");
  const {
    children: childrenToRender,
    state: viewportState
  } = usePopupViewport({
    store,
    side: positioner.side,
    cssVars: PreviewCardViewportCssVars,
    children
  });
  const state = {
    activationDirection: viewportState.activationDirection,
    transitioning: viewportState.transitioning,
    instant: instantType
  };
  return useRenderElement("div", componentProps, {
    state,
    ref: forwardedRef,
    props: [elementProps, {
      children: childrenToRender
    }],
    stateAttributesMapping: stateAttributesMapping27
  });
});
if (true) PreviewCardViewport.displayName = "PreviewCardViewport";

// node_modules/@base-ui/react/esm/preview-card/store/PreviewCardHandle.js
var PreviewCardHandle = class {
  /**
   * Internal store holding the preview card state.
   * @internal
   */
  constructor() {
    this.store = new PreviewCardStore();
  }
  /**
   * Opens the preview card and associates it with the trigger with the given ID.
   * The trigger must be a PreviewCard.Trigger component with this handle passed as a prop.
   *
   * This method should only be called in an event handler or an effect (not during rendering).
   *
   * @param triggerId ID of the trigger to associate with the preview card.
   */
  open(triggerId) {
    const triggerElement = triggerId ? this.store.context.triggerElements.getById(triggerId) : void 0;
    if (triggerId && !triggerElement) {
      throw new Error(true ? `Base UI: PreviewCardHandle.open: No trigger found with id "${triggerId}".` : formatErrorMessage_default(88, triggerId));
    }
    this.store.setOpen(true, createChangeEventDetails(reason_parts_exports.imperativeAction, void 0, triggerElement));
  }
  /**
   * Closes the preview card.
   */
  close() {
    this.store.setOpen(false, createChangeEventDetails(reason_parts_exports.imperativeAction, void 0, void 0));
  }
  /**
   * Indicates whether the preview card is currently open.
   */
  get isOpen() {
    return this.store.state.open;
  }
};
function createPreviewCardHandle() {
  return new PreviewCardHandle();
}

// node_modules/@base-ui/react/esm/progress/index.parts.js
var index_parts_exports21 = {};
__export(index_parts_exports21, {
  Indicator: () => ProgressIndicator,
  Label: () => ProgressLabel,
  Root: () => ProgressRoot,
  Track: () => ProgressTrack,
  Value: () => ProgressValue
});

// node_modules/@base-ui/react/esm/progress/root/ProgressRoot.js
var React201 = __toESM(require_react(), 1);

// node_modules/@base-ui/react/esm/progress/root/ProgressRootContext.js
var React200 = __toESM(require_react(), 1);
var ProgressRootContext = React200.createContext(void 0);
if (true) ProgressRootContext.displayName = "ProgressRootContext";
function useProgressRootContext() {
  const context = React200.useContext(ProgressRootContext);
  if (context === void 0) {
    throw new Error(true ? "Base UI: ProgressRootContext is missing. Progress parts must be placed within <Progress.Root>." : formatErrorMessage_default(51));
  }
  return context;
}

// node_modules/@base-ui/react/esm/progress/root/ProgressRootDataAttributes.js
var ProgressRootDataAttributes = (function(ProgressRootDataAttributes2) {
  ProgressRootDataAttributes2["complete"] = "data-complete";
  ProgressRootDataAttributes2["indeterminate"] = "data-indeterminate";
  ProgressRootDataAttributes2["progressing"] = "data-progressing";
  return ProgressRootDataAttributes2;
})({});

// node_modules/@base-ui/react/esm/progress/root/stateAttributesMapping.js
var progressStateAttributesMapping = {
  status(value) {
    if (value === "progressing") {
      return {
        [ProgressRootDataAttributes.progressing]: ""
      };
    }
    if (value === "complete") {
      return {
        [ProgressRootDataAttributes.complete]: ""
      };
    }
    if (value === "indeterminate") {
      return {
        [ProgressRootDataAttributes.indeterminate]: ""
      };
    }
    return null;
  }
};

// node_modules/@base-ui/react/esm/progress/root/ProgressRoot.js
var import_jsx_runtime73 = __toESM(require_jsx_runtime(), 1);
function getDefaultAriaValueText(formattedValue, value) {
  if (value == null) {
    return "indeterminate progress";
  }
  return formattedValue || `${value}%`;
}
var ProgressRoot = React201.forwardRef(function ProgressRoot2(componentProps, forwardedRef) {
  const {
    format,
    getAriaValueText = getDefaultAriaValueText,
    locale,
    max = 100,
    min = 0,
    value,
    render,
    className,
    children,
    ...elementProps
  } = componentProps;
  const [labelId, setLabelId] = React201.useState();
  const formatOptionsRef = useValueAsRef(format);
  let status = "indeterminate";
  if (Number.isFinite(value)) {
    status = value === max ? "complete" : "progressing";
  }
  const formattedValue = formatNumberValue(value, locale, formatOptionsRef.current);
  const state = React201.useMemo(() => ({
    status
  }), [status]);
  const defaultProps = {
    "aria-labelledby": labelId,
    "aria-valuemax": max,
    "aria-valuemin": min,
    "aria-valuenow": value ?? void 0,
    "aria-valuetext": getAriaValueText(formattedValue, value),
    role: "progressbar",
    children: (0, import_jsx_runtime73.jsxs)(React201.Fragment, {
      children: [children, (0, import_jsx_runtime73.jsx)("span", {
        role: "presentation",
        style: visuallyHidden,
        children: "x"
      })]
    })
  };
  const contextValue = React201.useMemo(() => ({
    formattedValue,
    max,
    min,
    setLabelId,
    state,
    status,
    value
  }), [formattedValue, max, min, setLabelId, state, status, value]);
  const element = useRenderElement("div", componentProps, {
    state,
    ref: forwardedRef,
    props: [defaultProps, elementProps],
    stateAttributesMapping: progressStateAttributesMapping
  });
  return (0, import_jsx_runtime73.jsx)(ProgressRootContext.Provider, {
    value: contextValue,
    children: element
  });
});
if (true) ProgressRoot.displayName = "ProgressRoot";

// node_modules/@base-ui/react/esm/progress/track/ProgressTrack.js
var React202 = __toESM(require_react(), 1);
var ProgressTrack = React202.forwardRef(function ProgressTrack2(componentProps, forwardedRef) {
  const {
    render,
    className,
    ...elementProps
  } = componentProps;
  const {
    state
  } = useProgressRootContext();
  const element = useRenderElement("div", componentProps, {
    state,
    ref: forwardedRef,
    props: elementProps,
    stateAttributesMapping: progressStateAttributesMapping
  });
  return element;
});
if (true) ProgressTrack.displayName = "ProgressTrack";

// node_modules/@base-ui/react/esm/progress/indicator/ProgressIndicator.js
var React203 = __toESM(require_react(), 1);
var ProgressIndicator = React203.forwardRef(function ProgressIndicator2(componentProps, forwardedRef) {
  const {
    render,
    className,
    ...elementProps
  } = componentProps;
  const {
    max,
    min,
    value,
    state
  } = useProgressRootContext();
  const percentageValue = Number.isFinite(value) && value !== null ? valueToPercent(value, min, max) : null;
  const getStyles = React203.useCallback(() => {
    if (percentageValue == null) {
      return {};
    }
    return {
      insetInlineStart: 0,
      height: "inherit",
      width: `${percentageValue}%`
    };
  }, [percentageValue]);
  const element = useRenderElement("div", componentProps, {
    state,
    ref: forwardedRef,
    props: [{
      style: getStyles()
    }, elementProps],
    stateAttributesMapping: progressStateAttributesMapping
  });
  return element;
});
if (true) ProgressIndicator.displayName = "ProgressIndicator";

// node_modules/@base-ui/react/esm/progress/value/ProgressValue.js
var React204 = __toESM(require_react(), 1);
var ProgressValue = React204.forwardRef(function ProgressValue2(componentProps, forwardedRef) {
  const {
    className,
    render,
    children,
    ...elementProps
  } = componentProps;
  const {
    value,
    formattedValue,
    state
  } = useProgressRootContext();
  const formattedValueArg = value == null ? "indeterminate" : formattedValue;
  const formattedValueDisplay = value == null ? null : formattedValue;
  const element = useRenderElement("span", componentProps, {
    state,
    ref: forwardedRef,
    props: [{
      "aria-hidden": true,
      children: typeof children === "function" ? children(formattedValueArg, value) : formattedValueDisplay
    }, elementProps],
    stateAttributesMapping: progressStateAttributesMapping
  });
  return element;
});
if (true) ProgressValue.displayName = "ProgressValue";

// node_modules/@base-ui/react/esm/progress/label/ProgressLabel.js
var React205 = __toESM(require_react(), 1);
var ProgressLabel = React205.forwardRef(function ProgressLabel2(componentProps, forwardedRef) {
  const {
    render,
    className,
    id: idProp,
    ...elementProps
  } = componentProps;
  const {
    setLabelId,
    state
  } = useProgressRootContext();
  const id = useRegisteredLabelId(idProp, setLabelId);
  const element = useRenderElement("span", componentProps, {
    state,
    ref: forwardedRef,
    props: [{
      id,
      role: "presentation"
    }, elementProps],
    stateAttributesMapping: progressStateAttributesMapping
  });
  return element;
});
if (true) ProgressLabel.displayName = "ProgressLabel";

// node_modules/@base-ui/react/esm/radio/index.parts.js
var index_parts_exports22 = {};
__export(index_parts_exports22, {
  Indicator: () => RadioIndicator,
  Root: () => RadioRoot
});

// node_modules/@base-ui/react/esm/radio/root/RadioRoot.js
var React208 = __toESM(require_react(), 1);

// node_modules/@base-ui/react/esm/radio/root/RadioRootDataAttributes.js
var RadioRootDataAttributes = (function(RadioRootDataAttributes2) {
  RadioRootDataAttributes2["checked"] = "data-checked";
  RadioRootDataAttributes2["unchecked"] = "data-unchecked";
  RadioRootDataAttributes2["disabled"] = "data-disabled";
  RadioRootDataAttributes2["readonly"] = "data-readonly";
  RadioRootDataAttributes2["required"] = "data-required";
  RadioRootDataAttributes2["valid"] = "data-valid";
  RadioRootDataAttributes2["invalid"] = "data-invalid";
  RadioRootDataAttributes2["touched"] = "data-touched";
  RadioRootDataAttributes2["dirty"] = "data-dirty";
  RadioRootDataAttributes2["filled"] = "data-filled";
  RadioRootDataAttributes2["focused"] = "data-focused";
  return RadioRootDataAttributes2;
})({});

// node_modules/@base-ui/react/esm/radio/utils/stateAttributesMapping.js
var stateAttributesMapping28 = {
  checked(value) {
    if (value) {
      return {
        [RadioRootDataAttributes.checked]: ""
      };
    }
    return {
      [RadioRootDataAttributes.unchecked]: ""
    };
  },
  ...transitionStatusMapping,
  ...fieldValidityMapping
};

// node_modules/@base-ui/react/esm/radio-group/RadioGroupContext.js
var React206 = __toESM(require_react(), 1);
var RadioGroupContext = React206.createContext(void 0);
if (true) RadioGroupContext.displayName = "RadioGroupContext";
function useRadioGroupContext() {
  return React206.useContext(RadioGroupContext);
}

// node_modules/@base-ui/react/esm/radio/root/RadioRootContext.js
var React207 = __toESM(require_react(), 1);
var RadioRootContext = React207.createContext(void 0);
if (true) RadioRootContext.displayName = "RadioRootContext";
function useRadioRootContext() {
  const value = React207.useContext(RadioRootContext);
  if (value === void 0) {
    throw new Error(true ? "Base UI: RadioRootContext is missing. Radio parts must be placed within <Radio.Root>." : formatErrorMessage_default(52));
  }
  return value;
}

// node_modules/@base-ui/react/esm/radio/root/RadioRoot.js
var import_jsx_runtime74 = __toESM(require_jsx_runtime(), 1);
var RadioRoot = React208.forwardRef(function RadioRoot2(componentProps, forwardedRef) {
  const {
    render,
    className,
    disabled: disabledProp = false,
    readOnly: readOnlyProp = false,
    required: requiredProp = false,
    "aria-labelledby": ariaLabelledByProp,
    value,
    inputRef: inputRefProp,
    nativeButton = false,
    id: idProp,
    ...elementProps
  } = componentProps;
  const groupContext = useRadioGroupContext();
  const {
    disabled: disabledGroup,
    readOnly: readOnlyGroup,
    required: requiredGroup,
    checkedValue,
    touched = false,
    validation,
    name
  } = groupContext ?? {};
  const setCheckedValue = groupContext?.setCheckedValue ?? NOOP;
  const setTouched = groupContext?.setTouched ?? NOOP;
  const registerControlRef = groupContext?.registerControlRef ?? NOOP;
  const registerInputRef = groupContext?.registerInputRef ?? NOOP;
  const {
    setDirty,
    validityData,
    setTouched: setFieldTouched,
    setFilled,
    state: fieldState,
    disabled: fieldDisabled
  } = useFieldRootContext();
  const fieldItemContext = useFieldItemContext();
  const {
    labelId,
    getDescriptionProps
  } = useLabelableContext();
  const disabled = fieldDisabled || fieldItemContext.disabled || disabledGroup || disabledProp;
  const readOnly = readOnlyGroup || readOnlyProp;
  const required = requiredGroup || requiredProp;
  const checked = groupContext ? checkedValue === value : value === "";
  const serializedValue = React208.useMemo(() => serializeValue(value), [value]);
  const radioRef = React208.useRef(null);
  const inputRef = React208.useRef(null);
  const handleControlRef = useStableCallback((element2) => {
    if (!element2) {
      return;
    }
    registerControlRef(element2, disabled);
  });
  const mergedInputRef = useMergedRefs(inputRefProp, inputRef, registerInputRef);
  useIsoLayoutEffect(() => {
    if (inputRef.current?.checked) {
      setFilled(true);
    }
  }, [setFilled]);
  useIsoLayoutEffect(() => {
    if (!inputRef.current) {
      return;
    }
    if (disabled && checked) {
      registerInputRef(null);
      return;
    }
    if (radioRef.current) {
      registerControlRef(radioRef.current, disabled);
    }
    registerInputRef(inputRef.current);
  }, [checked, disabled, registerControlRef, registerInputRef]);
  const id = useBaseUiId();
  const inputId = useLabelableId({
    id: idProp,
    implicit: false,
    controlRef: radioRef
  });
  const hiddenInputId = nativeButton ? void 0 : inputId;
  const ariaLabelledBy = useAriaLabelledBy(ariaLabelledByProp, labelId, inputRef, !nativeButton, hiddenInputId);
  const rootProps = {
    role: "radio",
    "aria-checked": checked,
    "aria-required": required || void 0,
    "aria-readonly": readOnly || void 0,
    "aria-labelledby": ariaLabelledBy,
    [ACTIVE_COMPOSITE_ITEM]: checked ? "" : void 0,
    id: nativeButton ? inputId : id,
    onKeyDown(event) {
      if (event.key === "Enter") {
        event.preventDefault();
      }
    },
    onClick(event) {
      if (event.defaultPrevented || disabled || readOnly) {
        return;
      }
      event.preventDefault();
      inputRef.current?.dispatchEvent(new PointerEvent("click", {
        bubbles: true,
        shiftKey: event.shiftKey,
        ctrlKey: event.ctrlKey,
        altKey: event.altKey,
        metaKey: event.metaKey
      }));
    },
    onFocus(event) {
      if (event.defaultPrevented || disabled || readOnly || !touched) {
        return;
      }
      inputRef.current?.click();
      setTouched(false);
    }
  };
  const {
    getButtonProps,
    buttonRef
  } = useButton({
    disabled,
    native: nativeButton
  });
  const inputProps = {
    type: "radio",
    ref: mergedInputRef,
    id: hiddenInputId,
    name,
    tabIndex: -1,
    style: name ? visuallyHiddenInput : visuallyHidden,
    "aria-hidden": true,
    ...value !== void 0 ? {
      value: serializedValue
    } : EMPTY_OBJECT,
    disabled,
    checked,
    required,
    readOnly,
    onChange(event) {
      if (event.nativeEvent.defaultPrevented) {
        return;
      }
      if (disabled || readOnly || value === void 0) {
        return;
      }
      const details = createChangeEventDetails(reason_parts_exports.none, event.nativeEvent);
      if (details.isCanceled) {
        return;
      }
      setFieldTouched(true);
      setDirty(value !== validityData.initialValue);
      setFilled(true);
      setCheckedValue(value, details);
    },
    onFocus() {
      radioRef.current?.focus();
    }
  };
  const state = React208.useMemo(() => ({
    ...fieldState,
    required,
    disabled,
    readOnly,
    checked
  }), [fieldState, disabled, readOnly, checked, required]);
  const contextValue = state;
  const isRadioGroup = groupContext !== void 0;
  const refs = [forwardedRef, radioRef, buttonRef, handleControlRef];
  const props = [rootProps, getDescriptionProps, validation?.getValidationProps ?? EMPTY_OBJECT, elementProps, getButtonProps];
  const element = useRenderElement("span", componentProps, {
    enabled: !isRadioGroup,
    state,
    ref: refs,
    props,
    stateAttributesMapping: stateAttributesMapping28
  });
  return (0, import_jsx_runtime74.jsxs)(RadioRootContext.Provider, {
    value: contextValue,
    children: [isRadioGroup ? (0, import_jsx_runtime74.jsx)(CompositeItem, {
      tag: "span",
      render,
      className,
      state,
      refs,
      props,
      stateAttributesMapping: stateAttributesMapping28
    }) : element, (0, import_jsx_runtime74.jsx)("input", {
      ...inputProps
    })]
  });
});
if (true) RadioRoot.displayName = "RadioRoot";

// node_modules/@base-ui/react/esm/radio/indicator/RadioIndicator.js
var React209 = __toESM(require_react(), 1);
var RadioIndicator = React209.forwardRef(function RadioIndicator2(componentProps, forwardedRef) {
  const {
    render,
    className,
    keepMounted = false,
    ...elementProps
  } = componentProps;
  const rootState = useRadioRootContext();
  const rendered = rootState.checked;
  const {
    mounted,
    transitionStatus,
    setMounted
  } = useTransitionStatus(rendered);
  const state = {
    ...rootState,
    transitionStatus
  };
  const indicatorRef = React209.useRef(null);
  const shouldRender = keepMounted || mounted;
  const element = useRenderElement("span", componentProps, {
    ref: [forwardedRef, indicatorRef],
    state,
    props: elementProps,
    stateAttributesMapping: stateAttributesMapping28
  });
  useOpenChangeComplete({
    open: rendered,
    ref: indicatorRef,
    onComplete() {
      if (!rendered) {
        setMounted(false);
      }
    }
  });
  if (!shouldRender) {
    return null;
  }
  return element;
});
if (true) RadioIndicator.displayName = "RadioIndicator";

// node_modules/@base-ui/react/esm/radio-group/RadioGroup.js
var React210 = __toESM(require_react(), 1);
var import_jsx_runtime75 = __toESM(require_jsx_runtime(), 1);
var MODIFIER_KEYS = [SHIFT];
var RadioGroup = React210.forwardRef(function RadioGroup2(componentProps, forwardedRef) {
  const {
    render,
    className,
    disabled: disabledProp,
    readOnly,
    required,
    onValueChange: onValueChangeProp,
    value: externalValue,
    defaultValue,
    name: nameProp,
    inputRef: inputRefProp,
    id: idProp,
    ...elementProps
  } = componentProps;
  const {
    setTouched: setFieldTouched,
    setFocused,
    shouldValidateOnChange,
    validationMode,
    name: fieldName,
    disabled: fieldDisabled,
    state: fieldState,
    validation,
    setDirty,
    setFilled,
    validityData
  } = useFieldRootContext();
  const {
    labelId
  } = useLabelableContext();
  const {
    clearErrors
  } = useFormContext();
  const fieldsetContext = useFieldsetRootContext(true);
  const disabled = fieldDisabled || disabledProp;
  const name = fieldName ?? nameProp;
  const id = useBaseUiId(idProp);
  const [checkedValue, setCheckedValueUnwrapped] = useControlled({
    controlled: externalValue,
    default: defaultValue,
    name: "RadioGroup",
    state: "value"
  });
  const onValueChange = useStableCallback(onValueChangeProp);
  const setCheckedValue = useStableCallback((value, eventDetails) => {
    onValueChange(value, eventDetails);
    if (eventDetails.isCanceled) {
      return;
    }
    setCheckedValueUnwrapped(value);
  });
  const controlRef = React210.useRef(null);
  const groupInputRef = React210.useRef(null);
  const firstEnabledInputRef = React210.useRef(null);
  function setInputRef(hiddenInput) {
    let cleanup = void 0;
    if (inputRefProp) {
      if (typeof inputRefProp === "function") {
        cleanup = inputRefProp(hiddenInput);
      } else {
        inputRefProp.current = hiddenInput;
      }
    }
    groupInputRef.current = hiddenInput;
    validation.inputRef.current = hiddenInput;
    return cleanup;
  }
  const registerControlRef = useStableCallback((element, isDisabled = false) => {
    if (!element) {
      return;
    }
    if (isDisabled) {
      if (controlRef.current === element) {
        controlRef.current = null;
      }
      return;
    }
    if (controlRef.current == null) {
      controlRef.current = element;
    }
  });
  const registerInputRef = useStableCallback((input) => {
    if (!input || input.disabled) {
      return void 0;
    }
    if (!firstEnabledInputRef.current) {
      firstEnabledInputRef.current = input;
    }
    const currentInput = groupInputRef.current;
    if (input.checked || currentInput == null || currentInput.disabled) {
      return setInputRef(input);
    }
    return void 0;
  });
  useField({
    id,
    commit: validation.commit,
    value: checkedValue,
    controlRef,
    name,
    getValue: () => checkedValue ?? null
  });
  useValueChanged(checkedValue, () => {
    clearErrors(name);
    setDirty(checkedValue !== validityData.initialValue);
    setFilled(checkedValue != null);
    if (shouldValidateOnChange()) {
      validation.commit(checkedValue);
    } else {
      validation.commit(checkedValue, true);
    }
    const fallbackInput = firstEnabledInputRef.current;
    if (checkedValue == null && fallbackInput && !fallbackInput.disabled) {
      setInputRef(fallbackInput);
    }
  });
  const [touched, setTouched] = React210.useState(false);
  const ariaLabelledby = elementProps["aria-labelledby"] ?? labelId ?? fieldsetContext?.legendId;
  const state = {
    ...fieldState,
    disabled: disabled ?? false,
    required: required ?? false,
    readOnly: readOnly ?? false
  };
  const contextValue = React210.useMemo(() => ({
    ...fieldState,
    checkedValue,
    disabled,
    validation,
    name,
    onValueChange,
    readOnly,
    registerControlRef,
    registerInputRef,
    required,
    setCheckedValue,
    setTouched,
    touched
  }), [checkedValue, disabled, validation, fieldState, name, onValueChange, readOnly, registerControlRef, registerInputRef, required, setCheckedValue, setTouched, touched]);
  const defaultProps = {
    role: "radiogroup",
    "aria-required": required || void 0,
    "aria-disabled": disabled || void 0,
    "aria-readonly": readOnly || void 0,
    "aria-labelledby": ariaLabelledby,
    onFocus() {
      setFocused(true);
    },
    onBlur(event) {
      if (!contains(event.currentTarget, event.relatedTarget)) {
        setFieldTouched(true);
        setFocused(false);
        if (validationMode === "onBlur") {
          validation.commit(checkedValue);
        }
      }
    },
    onKeyDownCapture(event) {
      if (event.key.startsWith("Arrow")) {
        setFieldTouched(true);
        setTouched(true);
        setFocused(true);
      }
    }
  };
  return (0, import_jsx_runtime75.jsx)(RadioGroupContext.Provider, {
    value: contextValue,
    children: (0, import_jsx_runtime75.jsx)(CompositeRoot, {
      render,
      className,
      state,
      props: [defaultProps, validation.getValidationProps, elementProps],
      refs: [forwardedRef],
      stateAttributesMapping: fieldValidityMapping,
      enableHomeAndEndKeys: false,
      modifierKeys: MODIFIER_KEYS
    })
  });
});
if (true) RadioGroup.displayName = "RadioGroup";

// node_modules/@base-ui/react/esm/scroll-area/index.parts.js
var index_parts_exports23 = {};
__export(index_parts_exports23, {
  Content: () => ScrollAreaContent,
  Corner: () => ScrollAreaCorner,
  Root: () => ScrollAreaRoot,
  Scrollbar: () => ScrollAreaScrollbar,
  Thumb: () => ScrollAreaThumb,
  Viewport: () => ScrollAreaViewport
});

// node_modules/@base-ui/react/esm/scroll-area/root/ScrollAreaRoot.js
var React212 = __toESM(require_react(), 1);

// node_modules/@base-ui/react/esm/scroll-area/root/ScrollAreaRootContext.js
var React211 = __toESM(require_react(), 1);
var ScrollAreaRootContext = React211.createContext(void 0);
if (true) ScrollAreaRootContext.displayName = "ScrollAreaRootContext";
function useScrollAreaRootContext() {
  const context = React211.useContext(ScrollAreaRootContext);
  if (context === void 0) {
    throw new Error(true ? "Base UI: ScrollAreaRootContext is missing. ScrollArea parts must be placed within <ScrollArea.Root>." : formatErrorMessage_default(53));
  }
  return context;
}

// node_modules/@base-ui/react/esm/scroll-area/root/ScrollAreaRootCssVars.js
var ScrollAreaRootCssVars = (function(ScrollAreaRootCssVars2) {
  ScrollAreaRootCssVars2["scrollAreaCornerHeight"] = "--scroll-area-corner-height";
  ScrollAreaRootCssVars2["scrollAreaCornerWidth"] = "--scroll-area-corner-width";
  return ScrollAreaRootCssVars2;
})({});

// node_modules/@base-ui/react/esm/scroll-area/constants.js
var SCROLL_TIMEOUT = 500;
var MIN_THUMB_SIZE = 16;

// node_modules/@base-ui/react/esm/scroll-area/utils/getOffset.js
function getOffset(element, prop, axis) {
  if (!element) {
    return 0;
  }
  const styles = getComputedStyle(element);
  const propAxis = axis === "x" ? "Inline" : "Block";
  if (axis === "x" && prop === "margin") {
    return parseFloat(styles[`${prop}InlineStart`]) * 2;
  }
  return parseFloat(styles[`${prop}${propAxis}Start`]) + parseFloat(styles[`${prop}${propAxis}End`]);
}

// node_modules/@base-ui/react/esm/scroll-area/scrollbar/ScrollAreaScrollbarDataAttributes.js
var ScrollAreaScrollbarDataAttributes = (function(ScrollAreaScrollbarDataAttributes2) {
  ScrollAreaScrollbarDataAttributes2["orientation"] = "data-orientation";
  ScrollAreaScrollbarDataAttributes2["hovering"] = "data-hovering";
  ScrollAreaScrollbarDataAttributes2["scrolling"] = "data-scrolling";
  ScrollAreaScrollbarDataAttributes2["hasOverflowX"] = "data-has-overflow-x";
  ScrollAreaScrollbarDataAttributes2["hasOverflowY"] = "data-has-overflow-y";
  ScrollAreaScrollbarDataAttributes2["overflowXStart"] = "data-overflow-x-start";
  ScrollAreaScrollbarDataAttributes2["overflowXEnd"] = "data-overflow-x-end";
  ScrollAreaScrollbarDataAttributes2["overflowYStart"] = "data-overflow-y-start";
  ScrollAreaScrollbarDataAttributes2["overflowYEnd"] = "data-overflow-y-end";
  return ScrollAreaScrollbarDataAttributes2;
})({});

// node_modules/@base-ui/react/esm/scroll-area/root/ScrollAreaRootDataAttributes.js
var ScrollAreaRootDataAttributes = (function(ScrollAreaRootDataAttributes2) {
  ScrollAreaRootDataAttributes2["scrolling"] = "data-scrolling";
  ScrollAreaRootDataAttributes2["hasOverflowX"] = "data-has-overflow-x";
  ScrollAreaRootDataAttributes2["hasOverflowY"] = "data-has-overflow-y";
  ScrollAreaRootDataAttributes2["overflowXStart"] = "data-overflow-x-start";
  ScrollAreaRootDataAttributes2["overflowXEnd"] = "data-overflow-x-end";
  ScrollAreaRootDataAttributes2["overflowYStart"] = "data-overflow-y-start";
  ScrollAreaRootDataAttributes2["overflowYEnd"] = "data-overflow-y-end";
  return ScrollAreaRootDataAttributes2;
})({});

// node_modules/@base-ui/react/esm/scroll-area/root/stateAttributes.js
var scrollAreaStateAttributesMapping = {
  hasOverflowX: (value) => value ? {
    [ScrollAreaRootDataAttributes.hasOverflowX]: ""
  } : null,
  hasOverflowY: (value) => value ? {
    [ScrollAreaRootDataAttributes.hasOverflowY]: ""
  } : null,
  overflowXStart: (value) => value ? {
    [ScrollAreaRootDataAttributes.overflowXStart]: ""
  } : null,
  overflowXEnd: (value) => value ? {
    [ScrollAreaRootDataAttributes.overflowXEnd]: ""
  } : null,
  overflowYStart: (value) => value ? {
    [ScrollAreaRootDataAttributes.overflowYStart]: ""
  } : null,
  overflowYEnd: (value) => value ? {
    [ScrollAreaRootDataAttributes.overflowYEnd]: ""
  } : null,
  cornerHidden: () => null
};

// node_modules/@base-ui/react/esm/scroll-area/root/ScrollAreaRoot.js
var import_jsx_runtime76 = __toESM(require_jsx_runtime(), 1);
var DEFAULT_COORDS = {
  x: 0,
  y: 0
};
var DEFAULT_SIZE2 = {
  width: 0,
  height: 0
};
var DEFAULT_OVERFLOW_EDGES = {
  xStart: false,
  xEnd: false,
  yStart: false,
  yEnd: false
};
var DEFAULT_HIDDEN_STATE = {
  x: true,
  y: true,
  corner: true
};
var ScrollAreaRoot = React212.forwardRef(function ScrollAreaRoot2(componentProps, forwardedRef) {
  const {
    render,
    className,
    overflowEdgeThreshold: overflowEdgeThresholdProp,
    ...elementProps
  } = componentProps;
  const overflowEdgeThreshold = normalizeOverflowEdgeThreshold(overflowEdgeThresholdProp);
  const rootId = useBaseUiId();
  const scrollYTimeout = useTimeout();
  const scrollXTimeout = useTimeout();
  const {
    nonce,
    disableStyleElements
  } = useCSPContext();
  const [hovering, setHovering] = React212.useState(false);
  const [scrollingX, setScrollingX] = React212.useState(false);
  const [scrollingY, setScrollingY] = React212.useState(false);
  const [touchModality, setTouchModality] = React212.useState(false);
  const [hasMeasuredScrollbar, setHasMeasuredScrollbar] = React212.useState(false);
  const [cornerSize, setCornerSize] = React212.useState(DEFAULT_SIZE2);
  const [thumbSize, setThumbSize] = React212.useState(DEFAULT_SIZE2);
  const [overflowEdges, setOverflowEdges] = React212.useState(DEFAULT_OVERFLOW_EDGES);
  const [hiddenState, setHiddenState] = React212.useState(DEFAULT_HIDDEN_STATE);
  const rootRef = React212.useRef(null);
  const viewportRef = React212.useRef(null);
  const scrollbarYRef = React212.useRef(null);
  const scrollbarXRef = React212.useRef(null);
  const thumbYRef = React212.useRef(null);
  const thumbXRef = React212.useRef(null);
  const cornerRef = React212.useRef(null);
  const thumbDraggingRef = React212.useRef(false);
  const startYRef = React212.useRef(0);
  const startXRef = React212.useRef(0);
  const startScrollTopRef = React212.useRef(0);
  const startScrollLeftRef = React212.useRef(0);
  const currentOrientationRef = React212.useRef("vertical");
  const scrollPositionRef = React212.useRef(DEFAULT_COORDS);
  const handleScroll = useStableCallback((scrollPosition) => {
    const offsetX = scrollPosition.x - scrollPositionRef.current.x;
    const offsetY = scrollPosition.y - scrollPositionRef.current.y;
    scrollPositionRef.current = scrollPosition;
    if (offsetY !== 0) {
      setScrollingY(true);
      scrollYTimeout.start(SCROLL_TIMEOUT, () => {
        setScrollingY(false);
      });
    }
    if (offsetX !== 0) {
      setScrollingX(true);
      scrollXTimeout.start(SCROLL_TIMEOUT, () => {
        setScrollingX(false);
      });
    }
  });
  const handlePointerDown = useStableCallback((event) => {
    if (event.button !== 0) {
      return;
    }
    thumbDraggingRef.current = true;
    startYRef.current = event.clientY;
    startXRef.current = event.clientX;
    currentOrientationRef.current = event.currentTarget.getAttribute(ScrollAreaScrollbarDataAttributes.orientation);
    if (viewportRef.current) {
      startScrollTopRef.current = viewportRef.current.scrollTop;
      startScrollLeftRef.current = viewportRef.current.scrollLeft;
    }
    if (thumbYRef.current && currentOrientationRef.current === "vertical") {
      thumbYRef.current.setPointerCapture(event.pointerId);
    }
    if (thumbXRef.current && currentOrientationRef.current === "horizontal") {
      thumbXRef.current.setPointerCapture(event.pointerId);
    }
  });
  const handlePointerMove = useStableCallback((event) => {
    if (!thumbDraggingRef.current) {
      return;
    }
    const deltaY = event.clientY - startYRef.current;
    const deltaX = event.clientX - startXRef.current;
    if (viewportRef.current) {
      const scrollableContentHeight = viewportRef.current.scrollHeight;
      const viewportHeight = viewportRef.current.clientHeight;
      const scrollableContentWidth = viewportRef.current.scrollWidth;
      const viewportWidth = viewportRef.current.clientWidth;
      if (thumbYRef.current && scrollbarYRef.current && currentOrientationRef.current === "vertical") {
        const scrollbarYOffset = getOffset(scrollbarYRef.current, "padding", "y");
        const thumbYOffset = getOffset(thumbYRef.current, "margin", "y");
        const thumbHeight = thumbYRef.current.offsetHeight;
        const maxThumbOffsetY = scrollbarYRef.current.offsetHeight - thumbHeight - scrollbarYOffset - thumbYOffset;
        const scrollRatioY = deltaY / maxThumbOffsetY;
        viewportRef.current.scrollTop = startScrollTopRef.current + scrollRatioY * (scrollableContentHeight - viewportHeight);
        event.preventDefault();
        setScrollingY(true);
        scrollYTimeout.start(SCROLL_TIMEOUT, () => {
          setScrollingY(false);
        });
      }
      if (thumbXRef.current && scrollbarXRef.current && currentOrientationRef.current === "horizontal") {
        const scrollbarXOffset = getOffset(scrollbarXRef.current, "padding", "x");
        const thumbXOffset = getOffset(thumbXRef.current, "margin", "x");
        const thumbWidth = thumbXRef.current.offsetWidth;
        const maxThumbOffsetX = scrollbarXRef.current.offsetWidth - thumbWidth - scrollbarXOffset - thumbXOffset;
        const scrollRatioX = deltaX / maxThumbOffsetX;
        viewportRef.current.scrollLeft = startScrollLeftRef.current + scrollRatioX * (scrollableContentWidth - viewportWidth);
        event.preventDefault();
        setScrollingX(true);
        scrollXTimeout.start(SCROLL_TIMEOUT, () => {
          setScrollingX(false);
        });
      }
    }
  });
  const handlePointerUp = useStableCallback((event) => {
    thumbDraggingRef.current = false;
    if (thumbYRef.current && currentOrientationRef.current === "vertical") {
      thumbYRef.current.releasePointerCapture(event.pointerId);
    }
    if (thumbXRef.current && currentOrientationRef.current === "horizontal") {
      thumbXRef.current.releasePointerCapture(event.pointerId);
    }
  });
  function handleTouchModalityChange(event) {
    setTouchModality(event.pointerType === "touch");
  }
  function handlePointerEnterOrMove(event) {
    handleTouchModalityChange(event);
    if (event.pointerType !== "touch") {
      const isTargetRootChild = contains(rootRef.current, event.target);
      setHovering(isTargetRootChild);
    }
  }
  const state = React212.useMemo(() => ({
    scrolling: scrollingX || scrollingY,
    hasOverflowX: !hiddenState.x,
    hasOverflowY: !hiddenState.y,
    overflowXStart: overflowEdges.xStart,
    overflowXEnd: overflowEdges.xEnd,
    overflowYStart: overflowEdges.yStart,
    overflowYEnd: overflowEdges.yEnd,
    cornerHidden: hiddenState.corner
  }), [scrollingX, scrollingY, hiddenState.x, hiddenState.y, hiddenState.corner, overflowEdges]);
  const props = {
    role: "presentation",
    onPointerEnter: handlePointerEnterOrMove,
    onPointerMove: handlePointerEnterOrMove,
    onPointerDown: handleTouchModalityChange,
    onPointerLeave() {
      setHovering(false);
    },
    style: {
      position: "relative",
      [ScrollAreaRootCssVars.scrollAreaCornerHeight]: `${cornerSize.height}px`,
      [ScrollAreaRootCssVars.scrollAreaCornerWidth]: `${cornerSize.width}px`
    }
  };
  const element = useRenderElement("div", componentProps, {
    state,
    ref: [forwardedRef, rootRef],
    props: [props, elementProps],
    stateAttributesMapping: scrollAreaStateAttributesMapping
  });
  const contextValue = React212.useMemo(() => ({
    handlePointerDown,
    handlePointerMove,
    handlePointerUp,
    handleScroll,
    cornerSize,
    setCornerSize,
    thumbSize,
    setThumbSize,
    hasMeasuredScrollbar,
    setHasMeasuredScrollbar,
    touchModality,
    cornerRef,
    scrollingX,
    setScrollingX,
    scrollingY,
    setScrollingY,
    hovering,
    setHovering,
    viewportRef,
    rootRef,
    scrollbarYRef,
    scrollbarXRef,
    thumbYRef,
    thumbXRef,
    rootId,
    hiddenState,
    setHiddenState,
    overflowEdges,
    setOverflowEdges,
    viewportState: state,
    overflowEdgeThreshold
  }), [handlePointerDown, handlePointerMove, handlePointerUp, handleScroll, cornerSize, thumbSize, hasMeasuredScrollbar, touchModality, scrollingX, setScrollingX, scrollingY, setScrollingY, hovering, setHovering, rootId, hiddenState, overflowEdges, state, overflowEdgeThreshold]);
  return (0, import_jsx_runtime76.jsxs)(ScrollAreaRootContext.Provider, {
    value: contextValue,
    children: [!disableStyleElements && styleDisableScrollbar.getElement(nonce), element]
  });
});
if (true) ScrollAreaRoot.displayName = "ScrollAreaRoot";
function normalizeOverflowEdgeThreshold(threshold) {
  if (typeof threshold === "number") {
    const value = Math.max(0, threshold);
    return {
      xStart: value,
      xEnd: value,
      yStart: value,
      yEnd: value
    };
  }
  return {
    xStart: Math.max(0, threshold?.xStart || 0),
    xEnd: Math.max(0, threshold?.xEnd || 0),
    yStart: Math.max(0, threshold?.yStart || 0),
    yEnd: Math.max(0, threshold?.yEnd || 0)
  };
}

// node_modules/@base-ui/react/esm/scroll-area/viewport/ScrollAreaViewport.js
var React214 = __toESM(require_react(), 1);

// node_modules/@base-ui/react/esm/scroll-area/viewport/ScrollAreaViewportContext.js
var React213 = __toESM(require_react(), 1);
var ScrollAreaViewportContext = React213.createContext(void 0);
if (true) ScrollAreaViewportContext.displayName = "ScrollAreaViewportContext";
function useScrollAreaViewportContext() {
  const context = React213.useContext(ScrollAreaViewportContext);
  if (context === void 0) {
    throw new Error(true ? "Base UI: ScrollAreaViewportContext missing. ScrollAreaViewport parts must be placed within <ScrollArea.Viewport>." : formatErrorMessage_default(55));
  }
  return context;
}

// node_modules/@base-ui/react/esm/scroll-area/utils/onVisible.js
function onVisible(element, callback) {
  if (typeof IntersectionObserver === "undefined") {
    return () => {
    };
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.intersectionRatio > 0) {
        callback();
        observer.disconnect();
      }
    });
  });
  observer.observe(element);
  return () => {
    observer.disconnect();
  };
}

// node_modules/@base-ui/react/esm/scroll-area/viewport/ScrollAreaViewportCssVars.js
var ScrollAreaViewportCssVars = (function(ScrollAreaViewportCssVars2) {
  ScrollAreaViewportCssVars2["scrollAreaOverflowXStart"] = "--scroll-area-overflow-x-start";
  ScrollAreaViewportCssVars2["scrollAreaOverflowXEnd"] = "--scroll-area-overflow-x-end";
  ScrollAreaViewportCssVars2["scrollAreaOverflowYStart"] = "--scroll-area-overflow-y-start";
  ScrollAreaViewportCssVars2["scrollAreaOverflowYEnd"] = "--scroll-area-overflow-y-end";
  return ScrollAreaViewportCssVars2;
})({});

// node_modules/@base-ui/react/esm/scroll-area/utils/scrollEdges.js
var SCROLL_EDGE_TOLERANCE_PX = 1;
function normalizeScrollOffset(value, max) {
  if (max <= 0) {
    return 0;
  }
  const clamped = clamp(value, 0, max);
  const startDistance = clamped;
  const endDistance = max - clamped;
  const withinStartTolerance = startDistance <= SCROLL_EDGE_TOLERANCE_PX;
  const withinEndTolerance = endDistance <= SCROLL_EDGE_TOLERANCE_PX;
  if (withinStartTolerance && withinEndTolerance) {
    return startDistance <= endDistance ? 0 : max;
  }
  if (withinStartTolerance) {
    return 0;
  }
  if (withinEndTolerance) {
    return max;
  }
  return clamped;
}

// node_modules/@base-ui/react/esm/scroll-area/viewport/ScrollAreaViewport.js
var import_jsx_runtime77 = __toESM(require_jsx_runtime(), 1);
var scrollAreaOverflowVarsRegistered = false;
var HAS_RESIZE_OBSERVER = typeof ResizeObserver !== "undefined";
function removeCSSVariableInheritance2() {
  if (scrollAreaOverflowVarsRegistered || // When `inherits: false`, specifying `inherit` on child elements doesn't work
  // in Safari. To let CSS features work correctly, this optimization must be skipped.
  isWebKit) {
    return;
  }
  if (typeof CSS !== "undefined" && "registerProperty" in CSS) {
    [ScrollAreaViewportCssVars.scrollAreaOverflowXStart, ScrollAreaViewportCssVars.scrollAreaOverflowXEnd, ScrollAreaViewportCssVars.scrollAreaOverflowYStart, ScrollAreaViewportCssVars.scrollAreaOverflowYEnd].forEach((name) => {
      try {
        CSS.registerProperty({
          name,
          syntax: "<length>",
          inherits: false,
          initialValue: "0px"
        });
      } catch {
      }
    });
  }
  scrollAreaOverflowVarsRegistered = true;
}
var ScrollAreaViewport = React214.forwardRef(function ScrollAreaViewport2(componentProps, forwardedRef) {
  const {
    render,
    className,
    ...elementProps
  } = componentProps;
  const {
    viewportRef,
    scrollbarYRef,
    scrollbarXRef,
    thumbYRef,
    thumbXRef,
    cornerRef,
    cornerSize,
    setCornerSize,
    setThumbSize,
    rootId,
    setHiddenState,
    hiddenState,
    setHasMeasuredScrollbar,
    handleScroll,
    setHovering,
    setOverflowEdges,
    overflowEdges,
    overflowEdgeThreshold,
    scrollingX,
    scrollingY
  } = useScrollAreaRootContext();
  const direction = useDirection();
  const programmaticScrollRef = React214.useRef(true);
  const lastMeasuredViewportMetricsRef = React214.useRef([NaN, NaN, NaN, NaN]);
  const scrollEndTimeout = useTimeout();
  const waitForAnimationsTimeout = useTimeout();
  const computeThumbPosition = useStableCallback(() => {
    const viewportEl = viewportRef.current;
    const scrollbarYEl = scrollbarYRef.current;
    const scrollbarXEl = scrollbarXRef.current;
    const thumbYEl = thumbYRef.current;
    const thumbXEl = thumbXRef.current;
    const cornerEl = cornerRef.current;
    if (!viewportEl) {
      return;
    }
    const scrollableContentHeight = viewportEl.scrollHeight;
    const scrollableContentWidth = viewportEl.scrollWidth;
    const viewportHeight = viewportEl.clientHeight;
    const viewportWidth = viewportEl.clientWidth;
    const scrollTop = viewportEl.scrollTop;
    const scrollLeft = viewportEl.scrollLeft;
    const lastMeasuredViewportMetrics = lastMeasuredViewportMetricsRef.current;
    const isFirstMeasurement = Number.isNaN(lastMeasuredViewportMetrics[0]);
    lastMeasuredViewportMetrics[0] = viewportHeight;
    lastMeasuredViewportMetrics[1] = scrollableContentHeight;
    lastMeasuredViewportMetrics[2] = viewportWidth;
    lastMeasuredViewportMetrics[3] = scrollableContentWidth;
    if (isFirstMeasurement) {
      setHasMeasuredScrollbar(true);
    }
    if (scrollableContentHeight === 0 || scrollableContentWidth === 0) {
      return;
    }
    const nextHiddenState = getHiddenState(viewportEl);
    const scrollbarYHidden = nextHiddenState.y;
    const scrollbarXHidden = nextHiddenState.x;
    const ratioX = viewportWidth / scrollableContentWidth;
    const ratioY = viewportHeight / scrollableContentHeight;
    const maxScrollLeft = Math.max(0, scrollableContentWidth - viewportWidth);
    const maxScrollTop = Math.max(0, scrollableContentHeight - viewportHeight);
    let scrollLeftFromStart = 0;
    let scrollLeftFromEnd = 0;
    if (!scrollbarXHidden) {
      let rawScrollLeftFromStart = 0;
      if (direction === "rtl") {
        rawScrollLeftFromStart = clamp(-scrollLeft, 0, maxScrollLeft);
      } else {
        rawScrollLeftFromStart = clamp(scrollLeft, 0, maxScrollLeft);
      }
      scrollLeftFromStart = normalizeScrollOffset(rawScrollLeftFromStart, maxScrollLeft);
      scrollLeftFromEnd = maxScrollLeft - scrollLeftFromStart;
    }
    const rawScrollTopFromStart = !scrollbarYHidden ? clamp(scrollTop, 0, maxScrollTop) : 0;
    const scrollTopFromStart = !scrollbarYHidden ? normalizeScrollOffset(rawScrollTopFromStart, maxScrollTop) : 0;
    const scrollTopFromEnd = !scrollbarYHidden ? maxScrollTop - scrollTopFromStart : 0;
    const nextWidth = scrollbarXHidden ? 0 : viewportWidth;
    const nextHeight = scrollbarYHidden ? 0 : viewportHeight;
    let nextCornerWidth = 0;
    let nextCornerHeight = 0;
    if (!scrollbarXHidden && !scrollbarYHidden) {
      nextCornerWidth = scrollbarYEl?.offsetWidth || 0;
      nextCornerHeight = scrollbarXEl?.offsetHeight || 0;
    }
    const cornerNotYetSized = cornerSize.width === 0 && cornerSize.height === 0;
    const cornerWidthOffset = cornerNotYetSized ? nextCornerWidth : 0;
    const cornerHeightOffset = cornerNotYetSized ? nextCornerHeight : 0;
    const scrollbarXOffset = getOffset(scrollbarXEl, "padding", "x");
    const scrollbarYOffset = getOffset(scrollbarYEl, "padding", "y");
    const thumbXOffset = getOffset(thumbXEl, "margin", "x");
    const thumbYOffset = getOffset(thumbYEl, "margin", "y");
    const idealNextWidth = nextWidth - scrollbarXOffset - thumbXOffset;
    const idealNextHeight = nextHeight - scrollbarYOffset - thumbYOffset;
    const maxNextWidth = scrollbarXEl ? Math.min(scrollbarXEl.offsetWidth - cornerWidthOffset, idealNextWidth) : idealNextWidth;
    const maxNextHeight = scrollbarYEl ? Math.min(scrollbarYEl.offsetHeight - cornerHeightOffset, idealNextHeight) : idealNextHeight;
    const clampedNextWidth = Math.max(MIN_THUMB_SIZE, maxNextWidth * ratioX);
    const clampedNextHeight = Math.max(MIN_THUMB_SIZE, maxNextHeight * ratioY);
    setThumbSize((prevSize) => {
      if (prevSize.height === clampedNextHeight && prevSize.width === clampedNextWidth) {
        return prevSize;
      }
      return {
        width: clampedNextWidth,
        height: clampedNextHeight
      };
    });
    if (scrollbarYEl && thumbYEl) {
      const maxThumbOffsetY = scrollbarYEl.offsetHeight - clampedNextHeight - scrollbarYOffset - thumbYOffset;
      const scrollRangeY = scrollableContentHeight - viewportHeight;
      const scrollRatioY = scrollRangeY === 0 ? 0 : scrollTop / scrollRangeY;
      const thumbOffsetY = Math.min(maxThumbOffsetY, Math.max(0, scrollRatioY * maxThumbOffsetY));
      thumbYEl.style.transform = `translate3d(0,${thumbOffsetY}px,0)`;
    }
    if (scrollbarXEl && thumbXEl) {
      const maxThumbOffsetX = scrollbarXEl.offsetWidth - clampedNextWidth - scrollbarXOffset - thumbXOffset;
      const scrollRangeX = scrollableContentWidth - viewportWidth;
      const scrollRatioX = scrollRangeX === 0 ? 0 : scrollLeft / scrollRangeX;
      const thumbOffsetX = direction === "rtl" ? clamp(scrollRatioX * maxThumbOffsetX, -maxThumbOffsetX, 0) : clamp(scrollRatioX * maxThumbOffsetX, 0, maxThumbOffsetX);
      thumbXEl.style.transform = `translate3d(${thumbOffsetX}px,0,0)`;
    }
    const overflowMetricsPx = [[ScrollAreaViewportCssVars.scrollAreaOverflowXStart, scrollLeftFromStart], [ScrollAreaViewportCssVars.scrollAreaOverflowXEnd, scrollLeftFromEnd], [ScrollAreaViewportCssVars.scrollAreaOverflowYStart, scrollTopFromStart], [ScrollAreaViewportCssVars.scrollAreaOverflowYEnd, scrollTopFromEnd]];
    for (const [cssVar, value] of overflowMetricsPx) {
      viewportEl.style.setProperty(cssVar, `${value}px`);
    }
    if (cornerEl) {
      if (scrollbarXHidden || scrollbarYHidden) {
        setCornerSize({
          width: 0,
          height: 0
        });
      } else if (!scrollbarXHidden && !scrollbarYHidden) {
        setCornerSize({
          width: nextCornerWidth,
          height: nextCornerHeight
        });
      }
    }
    setHiddenState((prevState) => mergeHiddenState(prevState, nextHiddenState));
    const nextOverflowEdges = {
      xStart: !scrollbarXHidden && scrollLeftFromStart > overflowEdgeThreshold.xStart,
      xEnd: !scrollbarXHidden && scrollLeftFromEnd > overflowEdgeThreshold.xEnd,
      yStart: !scrollbarYHidden && scrollTopFromStart > overflowEdgeThreshold.yStart,
      yEnd: !scrollbarYHidden && scrollTopFromEnd > overflowEdgeThreshold.yEnd
    };
    setOverflowEdges((prev) => {
      if (prev.xStart === nextOverflowEdges.xStart && prev.xEnd === nextOverflowEdges.xEnd && prev.yStart === nextOverflowEdges.yStart && prev.yEnd === nextOverflowEdges.yEnd) {
        return prev;
      }
      return nextOverflowEdges;
    });
  });
  useIsoLayoutEffect(() => {
    if (!viewportRef.current) {
      return void 0;
    }
    removeCSSVariableInheritance2();
    if (HAS_RESIZE_OBSERVER) {
      return void 0;
    }
    return onVisible(viewportRef.current, () => {
      computeThumbPosition();
    });
  }, [computeThumbPosition, viewportRef]);
  useIsoLayoutEffect(() => {
    queueMicrotask(computeThumbPosition);
  }, [computeThumbPosition, hiddenState, direction]);
  useIsoLayoutEffect(() => {
    if (viewportRef.current?.matches(":hover")) {
      setHovering(true);
    }
  }, [viewportRef, setHovering]);
  React214.useEffect(() => {
    const viewport = viewportRef.current;
    if (!HAS_RESIZE_OBSERVER || !viewport) {
      return void 0;
    }
    let hasInitialized = false;
    const ro = new ResizeObserver(() => {
      if (!hasInitialized) {
        hasInitialized = true;
        const lastMeasuredViewportMetrics = lastMeasuredViewportMetricsRef.current;
        if (lastMeasuredViewportMetrics[0] === viewport.clientHeight && lastMeasuredViewportMetrics[1] === viewport.scrollHeight && lastMeasuredViewportMetrics[2] === viewport.clientWidth && lastMeasuredViewportMetrics[3] === viewport.scrollWidth) {
          return;
        }
      }
      computeThumbPosition();
    });
    ro.observe(viewport);
    waitForAnimationsTimeout.start(0, () => {
      const animations = viewport.getAnimations({
        subtree: true
      });
      if (animations.length === 0) {
        return;
      }
      Promise.allSettled(animations.map((animation) => animation.finished)).then(computeThumbPosition).catch(() => {
      });
    });
    return () => {
      ro.disconnect();
      waitForAnimationsTimeout.clear();
    };
  }, [computeThumbPosition, viewportRef, waitForAnimationsTimeout]);
  function handleUserInteraction() {
    programmaticScrollRef.current = false;
  }
  const props = {
    role: "presentation",
    ...rootId && {
      "data-id": `${rootId}-viewport`
    },
    // https://accessibilityinsights.io/info-examples/web/scrollable-region-focusable/
    // Keep non-scrollable viewports out of tab order.
    tabIndex: hiddenState.x && hiddenState.y ? -1 : 0,
    className: styleDisableScrollbar.className,
    style: {
      overflow: "scroll"
    },
    onScroll() {
      if (!viewportRef.current) {
        return;
      }
      computeThumbPosition();
      if (!programmaticScrollRef.current) {
        handleScroll({
          x: viewportRef.current.scrollLeft,
          y: viewportRef.current.scrollTop
        });
      }
      scrollEndTimeout.start(100, () => {
        programmaticScrollRef.current = true;
      });
    },
    onWheel: handleUserInteraction,
    onTouchMove: handleUserInteraction,
    onPointerMove: handleUserInteraction,
    onPointerEnter: handleUserInteraction,
    onKeyDown: handleUserInteraction
  };
  const viewportState = React214.useMemo(() => ({
    scrolling: scrollingX || scrollingY,
    hasOverflowX: !hiddenState.x,
    hasOverflowY: !hiddenState.y,
    overflowXStart: overflowEdges.xStart,
    overflowXEnd: overflowEdges.xEnd,
    overflowYStart: overflowEdges.yStart,
    overflowYEnd: overflowEdges.yEnd,
    cornerHidden: hiddenState.corner
  }), [scrollingX, scrollingY, hiddenState.x, hiddenState.y, hiddenState.corner, overflowEdges]);
  const element = useRenderElement("div", componentProps, {
    ref: [forwardedRef, viewportRef],
    state: viewportState,
    props: [props, elementProps],
    stateAttributesMapping: scrollAreaStateAttributesMapping
  });
  const contextValue = React214.useMemo(() => ({
    computeThumbPosition
  }), [computeThumbPosition]);
  return (0, import_jsx_runtime77.jsx)(ScrollAreaViewportContext.Provider, {
    value: contextValue,
    children: element
  });
});
if (true) ScrollAreaViewport.displayName = "ScrollAreaViewport";
function getHiddenState(viewport) {
  const y = viewport.clientHeight >= viewport.scrollHeight;
  const x = viewport.clientWidth >= viewport.scrollWidth;
  return {
    y,
    x,
    corner: y || x
  };
}
function mergeHiddenState(prevState, nextState) {
  if (prevState.y === nextState.y && prevState.x === nextState.x && prevState.corner === nextState.corner) {
    return prevState;
  }
  return nextState;
}

// node_modules/@base-ui/react/esm/scroll-area/scrollbar/ScrollAreaScrollbar.js
var React216 = __toESM(require_react(), 1);

// node_modules/@base-ui/react/esm/scroll-area/scrollbar/ScrollAreaScrollbarContext.js
var React215 = __toESM(require_react(), 1);
var ScrollAreaScrollbarContext = React215.createContext(void 0);
if (true) ScrollAreaScrollbarContext.displayName = "ScrollAreaScrollbarContext";
function useScrollAreaScrollbarContext() {
  const context = React215.useContext(ScrollAreaScrollbarContext);
  if (context === void 0) {
    throw new Error(true ? "Base UI: ScrollAreaScrollbarContext is missing. ScrollAreaScrollbar parts must be placed within <ScrollArea.Scrollbar>." : formatErrorMessage_default(54));
  }
  return context;
}

// node_modules/@base-ui/react/esm/scroll-area/scrollbar/ScrollAreaScrollbarCssVars.js
var ScrollAreaScrollbarCssVars = (function(ScrollAreaScrollbarCssVars2) {
  ScrollAreaScrollbarCssVars2["scrollAreaThumbHeight"] = "--scroll-area-thumb-height";
  ScrollAreaScrollbarCssVars2["scrollAreaThumbWidth"] = "--scroll-area-thumb-width";
  return ScrollAreaScrollbarCssVars2;
})({});

// node_modules/@base-ui/react/esm/scroll-area/scrollbar/ScrollAreaScrollbar.js
var import_jsx_runtime78 = __toESM(require_jsx_runtime(), 1);
var ScrollAreaScrollbar = React216.forwardRef(function ScrollAreaScrollbar2(componentProps, forwardedRef) {
  const {
    render,
    className,
    orientation = "vertical",
    keepMounted = false,
    ...elementProps
  } = componentProps;
  const {
    hovering,
    scrollingX,
    scrollingY,
    hiddenState,
    overflowEdges,
    scrollbarYRef,
    scrollbarXRef,
    viewportRef,
    thumbYRef,
    thumbXRef,
    handlePointerDown,
    handlePointerUp,
    rootId,
    thumbSize,
    hasMeasuredScrollbar
  } = useScrollAreaRootContext();
  const state = {
    hovering,
    scrolling: {
      horizontal: scrollingX,
      vertical: scrollingY
    }[orientation],
    orientation,
    hasOverflowX: !hiddenState.x,
    hasOverflowY: !hiddenState.y,
    overflowXStart: overflowEdges.xStart,
    overflowXEnd: overflowEdges.xEnd,
    overflowYStart: overflowEdges.yStart,
    overflowYEnd: overflowEdges.yEnd,
    cornerHidden: hiddenState.corner
  };
  const direction = useDirection();
  const hideTrackUntilMeasured = !hasMeasuredScrollbar && !keepMounted;
  React216.useEffect(() => {
    const viewportEl = viewportRef.current;
    const scrollbarEl = orientation === "vertical" ? scrollbarYRef.current : scrollbarXRef.current;
    if (!scrollbarEl) {
      return void 0;
    }
    function handleWheel(event) {
      if (!viewportEl || !scrollbarEl || event.ctrlKey) {
        return;
      }
      event.preventDefault();
      if (orientation === "vertical") {
        if (viewportEl.scrollTop === 0 && event.deltaY < 0) {
          return;
        }
      } else if (viewportEl.scrollLeft === 0 && event.deltaX < 0) {
        return;
      }
      if (orientation === "vertical") {
        if (viewportEl.scrollTop === viewportEl.scrollHeight - viewportEl.clientHeight && event.deltaY > 0) {
          return;
        }
      } else if (viewportEl.scrollLeft === viewportEl.scrollWidth - viewportEl.clientWidth && event.deltaX > 0) {
        return;
      }
      if (orientation === "vertical") {
        viewportEl.scrollTop += event.deltaY;
      } else {
        viewportEl.scrollLeft += event.deltaX;
      }
    }
    scrollbarEl.addEventListener("wheel", handleWheel, {
      passive: false
    });
    return () => {
      scrollbarEl.removeEventListener("wheel", handleWheel);
    };
  }, [orientation, scrollbarXRef, scrollbarYRef, viewportRef]);
  const props = {
    ...rootId && {
      "data-id": `${rootId}-scrollbar`
    },
    onPointerDown(event) {
      if (event.button !== 0) {
        return;
      }
      if (event.currentTarget !== event.target) {
        return;
      }
      if (!viewportRef.current) {
        return;
      }
      if (thumbYRef.current && scrollbarYRef.current && orientation === "vertical") {
        const thumbYOffset = getOffset(thumbYRef.current, "margin", "y");
        const scrollbarYOffset = getOffset(scrollbarYRef.current, "padding", "y");
        const thumbHeight = thumbYRef.current.offsetHeight;
        const trackRectY = scrollbarYRef.current.getBoundingClientRect();
        const clickY = event.clientY - trackRectY.top - thumbHeight / 2 - scrollbarYOffset + thumbYOffset / 2;
        const scrollableContentHeight = viewportRef.current.scrollHeight;
        const viewportHeight = viewportRef.current.clientHeight;
        const maxThumbOffsetY = scrollbarYRef.current.offsetHeight - thumbHeight - scrollbarYOffset - thumbYOffset;
        const scrollRatioY = clickY / maxThumbOffsetY;
        const newScrollTop = scrollRatioY * (scrollableContentHeight - viewportHeight);
        viewportRef.current.scrollTop = newScrollTop;
      }
      if (thumbXRef.current && scrollbarXRef.current && orientation === "horizontal") {
        const thumbXOffset = getOffset(thumbXRef.current, "margin", "x");
        const scrollbarXOffset = getOffset(scrollbarXRef.current, "padding", "x");
        const thumbWidth = thumbXRef.current.offsetWidth;
        const trackRectX = scrollbarXRef.current.getBoundingClientRect();
        const clickX = event.clientX - trackRectX.left - thumbWidth / 2 - scrollbarXOffset + thumbXOffset / 2;
        const scrollableContentWidth = viewportRef.current.scrollWidth;
        const viewportWidth = viewportRef.current.clientWidth;
        const maxThumbOffsetX = scrollbarXRef.current.offsetWidth - thumbWidth - scrollbarXOffset - thumbXOffset;
        const scrollRatioX = clickX / maxThumbOffsetX;
        let newScrollLeft;
        if (direction === "rtl") {
          newScrollLeft = (1 - scrollRatioX) * (scrollableContentWidth - viewportWidth);
          if (viewportRef.current.scrollLeft <= 0) {
            newScrollLeft = -newScrollLeft;
          }
        } else {
          newScrollLeft = scrollRatioX * (scrollableContentWidth - viewportWidth);
        }
        viewportRef.current.scrollLeft = newScrollLeft;
      }
      handlePointerDown(event);
    },
    onPointerUp: handlePointerUp,
    style: {
      position: "absolute",
      touchAction: "none",
      WebkitUserSelect: "none",
      userSelect: "none",
      visibility: hideTrackUntilMeasured ? "hidden" : void 0,
      ...orientation === "vertical" && {
        top: 0,
        bottom: `var(${ScrollAreaRootCssVars.scrollAreaCornerHeight})`,
        insetInlineEnd: 0,
        [ScrollAreaScrollbarCssVars.scrollAreaThumbHeight]: `${thumbSize.height}px`
      },
      ...orientation === "horizontal" && {
        insetInlineStart: 0,
        insetInlineEnd: `var(${ScrollAreaRootCssVars.scrollAreaCornerWidth})`,
        bottom: 0,
        [ScrollAreaScrollbarCssVars.scrollAreaThumbWidth]: `${thumbSize.width}px`
      }
    }
  };
  const element = useRenderElement("div", componentProps, {
    ref: [forwardedRef, orientation === "vertical" ? scrollbarYRef : scrollbarXRef],
    state,
    props: [props, elementProps],
    stateAttributesMapping: scrollAreaStateAttributesMapping
  });
  const contextValue = React216.useMemo(() => ({
    orientation
  }), [orientation]);
  const isHidden = orientation === "vertical" ? hiddenState.y : hiddenState.x;
  const shouldRender = keepMounted || !isHidden;
  if (!shouldRender) {
    return null;
  }
  return (0, import_jsx_runtime78.jsx)(ScrollAreaScrollbarContext.Provider, {
    value: contextValue,
    children: element
  });
});
if (true) ScrollAreaScrollbar.displayName = "ScrollAreaScrollbar";

// node_modules/@base-ui/react/esm/scroll-area/content/ScrollAreaContent.js
var React217 = __toESM(require_react(), 1);
var ScrollAreaContent = React217.forwardRef(function ScrollAreaContent2(componentProps, forwardedRef) {
  const {
    render,
    className,
    ...elementProps
  } = componentProps;
  const contentWrapperRef = React217.useRef(null);
  const {
    computeThumbPosition
  } = useScrollAreaViewportContext();
  const {
    viewportState
  } = useScrollAreaRootContext();
  useIsoLayoutEffect(() => {
    if (typeof ResizeObserver === "undefined") {
      return void 0;
    }
    let hasInitialized = false;
    const ro = new ResizeObserver(() => {
      if (!hasInitialized) {
        hasInitialized = true;
        return;
      }
      computeThumbPosition();
    });
    if (contentWrapperRef.current) {
      ro.observe(contentWrapperRef.current);
    }
    return () => {
      ro.disconnect();
    };
  }, [computeThumbPosition]);
  const element = useRenderElement("div", componentProps, {
    ref: [forwardedRef, contentWrapperRef],
    state: viewportState,
    stateAttributesMapping: scrollAreaStateAttributesMapping,
    props: [{
      role: "presentation",
      style: {
        minWidth: "fit-content"
      }
    }, elementProps]
  });
  return element;
});
if (true) ScrollAreaContent.displayName = "ScrollAreaContent";

// node_modules/@base-ui/react/esm/scroll-area/thumb/ScrollAreaThumb.js
var React218 = __toESM(require_react(), 1);
var ScrollAreaThumb = React218.forwardRef(function ScrollAreaThumb2(componentProps, forwardedRef) {
  const {
    render,
    className,
    ...elementProps
  } = componentProps;
  const {
    thumbYRef,
    thumbXRef,
    handlePointerDown,
    handlePointerMove,
    handlePointerUp,
    setScrollingX,
    setScrollingY,
    hasMeasuredScrollbar
  } = useScrollAreaRootContext();
  const {
    orientation
  } = useScrollAreaScrollbarContext();
  const state = {
    orientation
  };
  const element = useRenderElement("div", componentProps, {
    ref: [forwardedRef, orientation === "vertical" ? thumbYRef : thumbXRef],
    state,
    props: [{
      onPointerDown: handlePointerDown,
      onPointerMove: handlePointerMove,
      onPointerUp(event) {
        if (orientation === "vertical") {
          setScrollingY(false);
        }
        if (orientation === "horizontal") {
          setScrollingX(false);
        }
        handlePointerUp(event);
      },
      style: {
        visibility: hasMeasuredScrollbar ? void 0 : "hidden",
        ...orientation === "vertical" && {
          height: `var(${ScrollAreaScrollbarCssVars.scrollAreaThumbHeight})`
        },
        ...orientation === "horizontal" && {
          width: `var(${ScrollAreaScrollbarCssVars.scrollAreaThumbWidth})`
        }
      }
    }, elementProps]
  });
  return element;
});
if (true) ScrollAreaThumb.displayName = "ScrollAreaThumb";

// node_modules/@base-ui/react/esm/scroll-area/corner/ScrollAreaCorner.js
var React219 = __toESM(require_react(), 1);
var ScrollAreaCorner = React219.forwardRef(function ScrollAreaCorner2(componentProps, forwardedRef) {
  const {
    render,
    className,
    ...elementProps
  } = componentProps;
  const {
    cornerRef,
    cornerSize,
    hiddenState
  } = useScrollAreaRootContext();
  const element = useRenderElement("div", componentProps, {
    ref: [forwardedRef, cornerRef],
    props: [{
      style: {
        position: "absolute",
        bottom: 0,
        insetInlineEnd: 0,
        width: cornerSize.width,
        height: cornerSize.height
      }
    }, elementProps]
  });
  if (hiddenState.corner) {
    return null;
  }
  return element;
});
if (true) ScrollAreaCorner.displayName = "ScrollAreaCorner";

// node_modules/@base-ui/react/esm/slider/index.parts.js
var index_parts_exports24 = {};
__export(index_parts_exports24, {
  Control: () => SliderControl,
  Indicator: () => SliderIndicator,
  Label: () => SliderLabel,
  Root: () => SliderRoot,
  Thumb: () => SliderThumb,
  Track: () => SliderTrack,
  Value: () => SliderValue
});

// node_modules/@base-ui/react/esm/slider/root/SliderRoot.js
var React221 = __toESM(require_react(), 1);

// node_modules/@base-ui/react/esm/slider/utils/asc.js
function asc(a, b) {
  return a - b;
}

// node_modules/@base-ui/react/esm/slider/utils/replaceArrayItemAtIndex.js
function replaceArrayItemAtIndex(array, index, newValue) {
  const output = array.slice();
  output[index] = newValue;
  return output.sort(asc);
}

// node_modules/@base-ui/react/esm/slider/utils/getSliderValue.js
function getSliderValue(valueInput, index, min, max, range, values) {
  let newValue = valueInput;
  newValue = clamp(newValue, min, max);
  if (range) {
    newValue = replaceArrayItemAtIndex(
      values,
      index,
      // Bound the new value to the thumb's neighbours.
      clamp(newValue, values[index - 1] || -Infinity, values[index + 1] || Infinity)
    );
  }
  return newValue;
}

// node_modules/@base-ui/react/esm/slider/utils/validateMinimumDistance.js
function validateMinimumDistance(values, step, minStepsBetweenValues) {
  if (!Array.isArray(values)) {
    return true;
  }
  const distances = values.reduce((acc, val, index, vals) => {
    if (index === vals.length - 1) {
      return acc;
    }
    acc.push(Math.abs(val - vals[index + 1]));
    return acc;
  }, []);
  return Math.min(...distances) >= step * minStepsBetweenValues;
}

// node_modules/@base-ui/react/esm/slider/root/stateAttributesMapping.js
var sliderStateAttributesMapping = {
  activeThumbIndex: () => null,
  max: () => null,
  min: () => null,
  minStepsBetweenValues: () => null,
  step: () => null,
  values: () => null,
  ...fieldValidityMapping
};

// node_modules/@base-ui/react/esm/slider/root/SliderRootContext.js
var React220 = __toESM(require_react(), 1);
var SliderRootContext = React220.createContext(void 0);
if (true) SliderRootContext.displayName = "SliderRootContext";
function useSliderRootContext() {
  const context = React220.useContext(SliderRootContext);
  if (context === void 0) {
    throw new Error(true ? "Base UI: SliderRootContext is missing. Slider parts must be placed within <Slider.Root>." : formatErrorMessage_default(62));
  }
  return context;
}

// node_modules/@base-ui/react/esm/slider/root/SliderRoot.js
var import_jsx_runtime79 = __toESM(require_jsx_runtime(), 1);
function getSliderChangeEventReason(event) {
  return "key" in event ? reason_parts_exports.keyboard : reason_parts_exports.inputChange;
}
function areValuesEqual(newValue, oldValue) {
  if (typeof newValue === "number" && typeof oldValue === "number") {
    return newValue === oldValue;
  }
  if (Array.isArray(newValue) && Array.isArray(oldValue)) {
    return areArraysEqual(newValue, oldValue);
  }
  return false;
}
var SliderRoot = React221.forwardRef(function SliderRoot2(componentProps, forwardedRef) {
  const {
    "aria-labelledby": ariaLabelledByProp,
    className,
    defaultValue,
    disabled: disabledProp = false,
    id: idProp,
    format,
    largeStep = 10,
    locale,
    render,
    max = 100,
    min = 0,
    minStepsBetweenValues = 0,
    name: nameProp,
    onValueChange: onValueChangeProp,
    onValueCommitted: onValueCommittedProp,
    orientation = "horizontal",
    step = 1,
    thumbCollisionBehavior = "push",
    thumbAlignment = "center",
    value: valueProp,
    ...elementProps
  } = componentProps;
  const id = useBaseUiId(idProp);
  const defaultLabelId = getDefaultLabelId(id);
  const onValueChange = useStableCallback(onValueChangeProp);
  const onValueCommitted = useStableCallback(onValueCommittedProp);
  const {
    clearErrors
  } = useFormContext();
  const {
    state: fieldState,
    disabled: fieldDisabled,
    name: fieldName,
    setTouched,
    setDirty,
    validityData,
    shouldValidateOnChange,
    validation
  } = useFieldRootContext();
  const {
    labelId: fieldLabelId
  } = useLabelableContext();
  const [labelId, setLabelId] = React221.useState();
  const ariaLabelledby = ariaLabelledByProp ?? resolveAriaLabelledBy(fieldLabelId, labelId);
  const disabled = fieldDisabled || disabledProp;
  const name = fieldName ?? nameProp;
  const [valueUnwrapped, setValueUnwrapped] = useControlled({
    controlled: valueProp,
    default: defaultValue ?? min,
    name: "Slider"
  });
  const sliderRef = React221.useRef(null);
  const controlRef = React221.useRef(null);
  const thumbRefs = React221.useRef([]);
  const pressedInputRef = React221.useRef(null);
  const pressedThumbCenterOffsetRef = React221.useRef(null);
  const pressedThumbIndexRef = React221.useRef(-1);
  const pressedValuesRef = React221.useRef(null);
  const lastChangedValueRef = React221.useRef(null);
  const lastChangeReasonRef = React221.useRef("none");
  const formatOptionsRef = useValueAsRef(format);
  const [active, setActiveState] = React221.useState(-1);
  const [lastUsedThumbIndex, setLastUsedThumbIndex] = React221.useState(-1);
  const [dragging, setDragging] = React221.useState(false);
  const [thumbMap, setThumbMap] = React221.useState(() => /* @__PURE__ */ new Map());
  const [indicatorPosition, setIndicatorPosition] = React221.useState([void 0, void 0]);
  const setActive = useStableCallback((value) => {
    setActiveState(value);
    if (value !== -1) {
      setLastUsedThumbIndex(value);
    }
  });
  useField({
    id,
    commit: validation.commit,
    value: valueUnwrapped,
    controlRef,
    name,
    getValue: () => valueUnwrapped
  });
  useValueChanged(valueUnwrapped, () => {
    clearErrors(name);
    if (shouldValidateOnChange()) {
      validation.commit(valueUnwrapped);
    } else {
      validation.commit(valueUnwrapped, true);
    }
    const initialValue = validityData.initialValue;
    let isDirty;
    if (Array.isArray(valueUnwrapped) && Array.isArray(initialValue)) {
      isDirty = !areArraysEqual(valueUnwrapped, initialValue);
    } else {
      isDirty = valueUnwrapped !== initialValue;
    }
    setDirty(isDirty);
  });
  const registerFieldControlRef = useStableCallback((element2) => {
    if (element2) {
      controlRef.current = element2;
    }
  });
  const range = Array.isArray(valueUnwrapped);
  const values = React221.useMemo(() => {
    if (!range) {
      return [clamp(valueUnwrapped, min, max)];
    }
    return valueUnwrapped.slice().sort(asc);
  }, [max, min, range, valueUnwrapped]);
  const setValue = useStableCallback((newValue, details) => {
    if (Number.isNaN(newValue) || areValuesEqual(newValue, valueUnwrapped)) {
      return;
    }
    const changeDetails = details ?? createChangeEventDetails(reason_parts_exports.none, void 0, void 0, {
      activeThumbIndex: -1
    });
    lastChangeReasonRef.current = changeDetails.reason;
    const nativeEvent = changeDetails.event;
    const EventConstructor = nativeEvent.constructor ?? Event;
    const clonedEvent = new EventConstructor(nativeEvent.type, nativeEvent);
    Object.defineProperty(clonedEvent, "target", {
      writable: true,
      value: {
        value: newValue,
        name
      }
    });
    changeDetails.event = clonedEvent;
    lastChangedValueRef.current = newValue;
    onValueChange(newValue, changeDetails);
    if (changeDetails.isCanceled) {
      return;
    }
    setValueUnwrapped(newValue);
  });
  const handleInputChange = useStableCallback((valueInput, index, event) => {
    const newValue = getSliderValue(valueInput, index, min, max, range, values);
    if (validateMinimumDistance(newValue, step, minStepsBetweenValues)) {
      const reason = getSliderChangeEventReason(event);
      setValue(newValue, createChangeEventDetails(reason, event.nativeEvent, void 0, {
        activeThumbIndex: index
      }));
      setTouched(true);
      const nextValue = lastChangedValueRef.current ?? newValue;
      onValueCommitted(nextValue, createGenericEventDetails(reason, event.nativeEvent));
    }
  });
  if (true) {
    if (min >= max) {
      warn("Slider `max` must be greater than `min`.");
    }
  }
  useIsoLayoutEffect(() => {
    const activeEl = activeElement(ownerDocument(sliderRef.current));
    if (disabled && activeEl && sliderRef.current?.contains(activeEl)) {
      activeEl.blur();
    }
  }, [disabled]);
  if (disabled && active !== -1) {
    setActive(-1);
  }
  const state = React221.useMemo(() => ({
    ...fieldState,
    activeThumbIndex: active,
    disabled,
    dragging,
    orientation,
    max,
    min,
    minStepsBetweenValues,
    step,
    values
  }), [fieldState, active, disabled, dragging, max, min, minStepsBetweenValues, orientation, step, values]);
  const contextValue = React221.useMemo(() => ({
    active,
    controlRef,
    disabled,
    dragging,
    validation,
    formatOptionsRef,
    handleInputChange,
    indicatorPosition,
    inset: thumbAlignment !== "center",
    labelId: ariaLabelledby,
    rootLabelId: defaultLabelId,
    largeStep,
    lastUsedThumbIndex,
    lastChangedValueRef,
    lastChangeReasonRef,
    locale,
    max,
    min,
    minStepsBetweenValues,
    name,
    onValueCommitted,
    orientation,
    pressedInputRef,
    pressedThumbCenterOffsetRef,
    pressedThumbIndexRef,
    pressedValuesRef,
    registerFieldControlRef,
    renderBeforeHydration: thumbAlignment === "edge",
    setActive,
    setDragging,
    setIndicatorPosition,
    setLabelId,
    setValue,
    state,
    step,
    thumbCollisionBehavior,
    thumbMap,
    thumbRefs,
    values
  }), [active, controlRef, ariaLabelledby, defaultLabelId, disabled, dragging, validation, formatOptionsRef, handleInputChange, indicatorPosition, largeStep, lastUsedThumbIndex, lastChangedValueRef, lastChangeReasonRef, locale, max, min, minStepsBetweenValues, name, onValueCommitted, orientation, pressedInputRef, pressedThumbCenterOffsetRef, pressedThumbIndexRef, pressedValuesRef, registerFieldControlRef, setActive, setDragging, setIndicatorPosition, setLabelId, setValue, state, step, thumbCollisionBehavior, thumbAlignment, thumbMap, thumbRefs, values]);
  const element = useRenderElement("div", componentProps, {
    state,
    ref: [forwardedRef, sliderRef],
    props: [{
      "aria-labelledby": ariaLabelledby,
      id,
      role: "group"
    }, validation.getValidationProps, elementProps],
    stateAttributesMapping: sliderStateAttributesMapping
  });
  return (0, import_jsx_runtime79.jsx)(SliderRootContext.Provider, {
    value: contextValue,
    children: (0, import_jsx_runtime79.jsx)(CompositeList, {
      elementsRef: thumbRefs,
      onMapChange: setThumbMap,
      children: element
    })
  });
});
if (true) SliderRoot.displayName = "SliderRoot";

// node_modules/@base-ui/react/esm/slider/label/SliderLabel.js
var React222 = __toESM(require_react(), 1);
var SliderLabel = React222.forwardRef(function SliderLabel2(componentProps, forwardedRef) {
  const {
    render,
    className,
    ...elementProps
  } = componentProps;
  const elementPropsWithoutId = elementProps;
  delete elementPropsWithoutId.id;
  const {
    state,
    setLabelId,
    controlRef,
    rootLabelId
  } = useSliderRootContext();
  function focusControl(event, controlId) {
    if (controlId) {
      const controlElement = ownerDocument(event.currentTarget).getElementById(controlId);
      if (isHTMLElement(controlElement)) {
        focusElementWithVisible(controlElement);
        return;
      }
    }
    const fallbackInputs = controlRef.current?.querySelectorAll('input[type="range"]');
    const fallbackInput = fallbackInputs?.length === 1 ? fallbackInputs[0] : null;
    if (isHTMLElement(fallbackInput)) {
      focusElementWithVisible(fallbackInput);
    }
  }
  const labelProps = useLabel({
    id: rootLabelId,
    setLabelId,
    focusControl
  });
  return useRenderElement("div", componentProps, {
    ref: forwardedRef,
    state,
    props: [labelProps, elementProps],
    stateAttributesMapping: sliderStateAttributesMapping
  });
});
if (true) SliderLabel.displayName = "SliderLabel";

// node_modules/@base-ui/react/esm/slider/value/SliderValue.js
var React223 = __toESM(require_react(), 1);
var SliderValue = React223.forwardRef(function SliderValue2(componentProps, forwardedRef) {
  const {
    "aria-live": ariaLive = "off",
    render,
    className,
    children,
    ...elementProps
  } = componentProps;
  const {
    thumbMap,
    state,
    values,
    formatOptionsRef,
    locale
  } = useSliderRootContext();
  const outputFor = React223.useMemo(() => {
    let htmlFor = "";
    for (const thumbMetadata of thumbMap.values()) {
      if (thumbMetadata?.inputId) {
        htmlFor += `${thumbMetadata.inputId} `;
      }
    }
    return htmlFor.trim() === "" ? void 0 : htmlFor.trim();
  }, [thumbMap]);
  const formattedValues = React223.useMemo(() => {
    const arr = [];
    for (let i = 0; i < values.length; i += 1) {
      arr.push(formatNumber(values[i], locale, formatOptionsRef.current ?? void 0));
    }
    return arr;
  }, [formatOptionsRef, locale, values]);
  const defaultDisplayValue = React223.useMemo(() => {
    const arr = [];
    for (let i = 0; i < values.length; i += 1) {
      arr.push(formattedValues[i] || values[i]);
    }
    return arr.join(" – ");
  }, [values, formattedValues]);
  const element = useRenderElement("output", componentProps, {
    state,
    ref: forwardedRef,
    props: [{
      // off by default because it will keep announcing when the slider is being dragged
      // and also when the value is changing (but not yet committed)
      "aria-live": ariaLive,
      children: typeof children === "function" ? children(formattedValues, values) : defaultDisplayValue,
      htmlFor: outputFor
    }, elementProps],
    stateAttributesMapping: sliderStateAttributesMapping
  });
  return element;
});
if (true) SliderValue.displayName = "SliderValue";

// node_modules/@base-ui/react/esm/slider/control/SliderControl.js
var React224 = __toESM(require_react(), 1);

// node_modules/@base-ui/react/esm/slider/utils/getMidpoint.js
function getMidpoint(element) {
  const rect = element.getBoundingClientRect();
  return {
    x: (rect.left + rect.right) / 2,
    y: (rect.top + rect.bottom) / 2
  };
}

// node_modules/@base-ui/react/esm/slider/utils/roundValueToStep.js
function getDecimalPrecision(num) {
  if (Math.abs(num) < 1) {
    const parts = num.toExponential().split("e-");
    const matissaDecimalPart = parts[0].split(".")[1];
    return (matissaDecimalPart ? matissaDecimalPart.length : 0) + parseInt(parts[1], 10);
  }
  const decimalPart = num.toString().split(".")[1];
  return decimalPart ? decimalPart.length : 0;
}
function roundValueToStep(value, step, min) {
  const nearest = Math.round((value - min) / step) * step + min;
  return Number(nearest.toFixed(getDecimalPrecision(step)));
}

// node_modules/@base-ui/react/esm/slider/utils/getPushedThumbValues.js
function getPushedThumbValues({
  values,
  index,
  nextValue,
  min,
  max,
  step,
  minStepsBetweenValues,
  initialValues
}) {
  if (values.length === 0) {
    return [];
  }
  const nextValues = values.slice();
  const minValueDifference = step * minStepsBetweenValues;
  const lastIndex = nextValues.length - 1;
  const baseInitialValues = initialValues ?? values;
  const indexMin = min + index * minValueDifference;
  const indexMax = max - (lastIndex - index) * minValueDifference;
  nextValues[index] = clamp(nextValue, indexMin, indexMax);
  for (let i = index + 1; i <= lastIndex; i += 1) {
    const minAllowed = nextValues[i - 1] + minValueDifference;
    const maxAllowed = max - (lastIndex - i) * minValueDifference;
    const initialValue = baseInitialValues[i] ?? nextValues[i];
    let candidate = Math.max(nextValues[i], minAllowed);
    if (initialValue < candidate) {
      candidate = Math.max(initialValue, minAllowed);
    }
    nextValues[i] = clamp(candidate, minAllowed, maxAllowed);
  }
  for (let i = index - 1; i >= 0; i -= 1) {
    const maxAllowed = nextValues[i + 1] - minValueDifference;
    const minAllowed = min + i * minValueDifference;
    const initialValue = baseInitialValues[i] ?? nextValues[i];
    let candidate = Math.min(nextValues[i], maxAllowed);
    if (initialValue > candidate) {
      candidate = Math.min(initialValue, maxAllowed);
    }
    nextValues[i] = clamp(candidate, minAllowed, maxAllowed);
  }
  for (let i = 0; i <= lastIndex; i += 1) {
    nextValues[i] = Number(nextValues[i].toFixed(12));
  }
  return nextValues;
}

// node_modules/@base-ui/react/esm/slider/utils/resolveThumbCollision.js
function resolveThumbCollision({
  behavior,
  values,
  currentValues,
  initialValues,
  pressedIndex,
  nextValue,
  min,
  max,
  step,
  minStepsBetweenValues
}) {
  const activeValues = currentValues ?? values;
  const baselineValues = initialValues ?? values;
  const range = activeValues.length > 1;
  if (!range) {
    return {
      value: nextValue,
      thumbIndex: 0,
      didSwap: false
    };
  }
  const minValueDifference = step * minStepsBetweenValues;
  switch (behavior) {
    case "swap": {
      const pressedInitialValue = activeValues[pressedIndex];
      const epsilon = 1e-7;
      const candidateValues = activeValues.slice();
      const previousNeighbor = candidateValues[pressedIndex - 1];
      const nextNeighbor = candidateValues[pressedIndex + 1];
      const lowerBound = previousNeighbor != null ? previousNeighbor + minValueDifference : min;
      const upperBound = nextNeighbor != null ? nextNeighbor - minValueDifference : max;
      const constrainedValue = clamp(nextValue, lowerBound, upperBound);
      const pressedValueAfterClamp = Number(constrainedValue.toFixed(12));
      candidateValues[pressedIndex] = pressedValueAfterClamp;
      const movingForward = nextValue > pressedInitialValue;
      const movingBackward = nextValue < pressedInitialValue;
      const shouldSwapForward = movingForward && nextNeighbor != null && nextValue >= nextNeighbor - epsilon;
      const shouldSwapBackward = movingBackward && previousNeighbor != null && nextValue <= previousNeighbor + epsilon;
      if (!shouldSwapForward && !shouldSwapBackward) {
        return {
          value: candidateValues,
          thumbIndex: pressedIndex,
          didSwap: false
        };
      }
      const targetIndex = shouldSwapForward ? pressedIndex + 1 : pressedIndex - 1;
      const initialValuesForPush = candidateValues.map((_, index) => {
        if (index === pressedIndex) {
          return pressedValueAfterClamp;
        }
        const baseline = baselineValues[index];
        if (baseline != null) {
          return baseline;
        }
        return activeValues[index];
      });
      let nextValueForTarget = nextValue;
      if (shouldSwapForward) {
        nextValueForTarget = Math.max(nextValue, candidateValues[targetIndex]);
      } else {
        nextValueForTarget = Math.min(nextValue, candidateValues[targetIndex]);
      }
      const adjustedValues = getPushedThumbValues({
        values: candidateValues,
        index: targetIndex,
        nextValue: nextValueForTarget,
        min,
        max,
        step,
        minStepsBetweenValues,
        initialValues: initialValuesForPush
      });
      const neighborIndex = shouldSwapForward ? targetIndex - 1 : targetIndex + 1;
      if (neighborIndex >= 0 && neighborIndex < adjustedValues.length) {
        const previousValue = adjustedValues[neighborIndex - 1];
        const nextValueAfter = adjustedValues[neighborIndex + 1];
        let neighborLowerBound = previousValue != null ? previousValue + minValueDifference : min;
        neighborLowerBound = Math.max(neighborLowerBound, min + neighborIndex * minValueDifference);
        let neighborUpperBound = nextValueAfter != null ? nextValueAfter - minValueDifference : max;
        neighborUpperBound = Math.min(neighborUpperBound, max - (adjustedValues.length - 1 - neighborIndex) * minValueDifference);
        const restoredValue = clamp(pressedValueAfterClamp, neighborLowerBound, neighborUpperBound);
        adjustedValues[neighborIndex] = Number(restoredValue.toFixed(12));
      }
      return {
        value: adjustedValues,
        thumbIndex: targetIndex,
        didSwap: true
      };
    }
    case "push": {
      const nextValues = getPushedThumbValues({
        values: activeValues,
        index: pressedIndex,
        nextValue,
        min,
        max,
        step,
        minStepsBetweenValues
      });
      return {
        value: nextValues,
        thumbIndex: pressedIndex,
        didSwap: false
      };
    }
    case "none":
    default: {
      const candidateValues = activeValues.slice();
      const previousNeighbor = candidateValues[pressedIndex - 1];
      const nextNeighbor = candidateValues[pressedIndex + 1];
      const lowerBound = previousNeighbor != null ? previousNeighbor + minValueDifference : min;
      const upperBound = nextNeighbor != null ? nextNeighbor - minValueDifference : max;
      const constrainedValue = clamp(nextValue, lowerBound, upperBound);
      candidateValues[pressedIndex] = Number(constrainedValue.toFixed(12));
      return {
        value: candidateValues,
        thumbIndex: pressedIndex,
        didSwap: false
      };
    }
  }
}

// node_modules/@base-ui/react/esm/slider/control/SliderControl.js
var INTENTIONAL_DRAG_COUNT_THRESHOLD = 2;
function getControlOffset(styles, vertical) {
  if (!styles) {
    return {
      start: 0,
      end: 0
    };
  }
  function parseSize(value) {
    const parsed = value != null ? parseFloat(value) : 0;
    return Number.isNaN(parsed) ? 0 : parsed;
  }
  const start = !vertical ? "InlineStart" : "Top";
  const end = !vertical ? "InlineEnd" : "Bottom";
  return {
    start: parseSize(styles[`border${start}Width`]) + parseSize(styles[`padding${start}`]),
    end: parseSize(styles[`border${end}Width`]) + parseSize(styles[`padding${end}`])
  };
}
function getFingerCoords(event, touchIdRef) {
  if (touchIdRef.current != null && event.changedTouches) {
    const touchEvent = event;
    for (let i = 0; i < touchEvent.changedTouches.length; i += 1) {
      const touch = touchEvent.changedTouches[i];
      if (touch.identifier === touchIdRef.current) {
        return {
          x: touch.clientX,
          y: touch.clientY
        };
      }
    }
    return null;
  }
  return {
    x: event.clientX,
    y: event.clientY
  };
}
var SliderControl = React224.forwardRef(function SliderControl2(componentProps, forwardedRef) {
  const {
    render: renderProp,
    className,
    ...elementProps
  } = componentProps;
  const {
    disabled,
    dragging,
    inset,
    lastChangedValueRef,
    lastChangeReasonRef,
    max,
    min,
    minStepsBetweenValues,
    onValueCommitted,
    orientation,
    pressedInputRef,
    pressedThumbCenterOffsetRef,
    pressedThumbIndexRef,
    pressedValuesRef,
    registerFieldControlRef,
    renderBeforeHydration,
    setActive,
    setDragging,
    setValue,
    state,
    step,
    thumbCollisionBehavior,
    thumbRefs,
    values
  } = useSliderRootContext();
  const direction = useDirection();
  const range = values.length > 1;
  const vertical = orientation === "vertical";
  const controlRef = React224.useRef(null);
  const stylesRef = React224.useRef(null);
  const setStylesRef = useStableCallback((element2) => {
    if (element2 && stylesRef.current == null) {
      if (stylesRef.current == null) {
        stylesRef.current = getComputedStyle(element2);
      }
    }
  });
  const touchIdRef = React224.useRef(null);
  const moveCountRef = React224.useRef(0);
  const insetThumbOffsetRef = React224.useRef(0);
  const latestValuesRef = useValueAsRef(values);
  const updatePressedThumb = useStableCallback((nextIndex) => {
    if (pressedThumbIndexRef.current !== nextIndex) {
      pressedThumbIndexRef.current = nextIndex;
    }
    const thumbElement = thumbRefs.current[nextIndex];
    if (!thumbElement) {
      pressedThumbCenterOffsetRef.current = null;
      pressedInputRef.current = null;
      return;
    }
    pressedInputRef.current = thumbElement.querySelector('input[type="range"]');
  });
  const getFingerState = useStableCallback((fingerCoords) => {
    const control = controlRef.current;
    if (!control) {
      return null;
    }
    const {
      width,
      height,
      bottom,
      left,
      right
    } = control.getBoundingClientRect();
    const controlOffset = getControlOffset(stylesRef.current, vertical);
    const insetThumbOffset = insetThumbOffsetRef.current;
    const controlSize = (vertical ? height : width) - controlOffset.start - controlOffset.end - insetThumbOffset * 2;
    const thumbCenterOffset = pressedThumbCenterOffsetRef.current ?? 0;
    const fingerX = fingerCoords.x - thumbCenterOffset;
    const fingerY = fingerCoords.y - thumbCenterOffset;
    const valueSize = vertical ? bottom - fingerY - controlOffset.end : (direction === "rtl" ? right - fingerX : fingerX - left) - controlOffset.start;
    const valueRescaled = clamp((valueSize - insetThumbOffset) / controlSize, 0, 1);
    let newValue = (max - min) * valueRescaled + min;
    newValue = roundValueToStep(newValue, step, min);
    newValue = clamp(newValue, min, max);
    if (!range) {
      return {
        value: newValue,
        thumbIndex: 0,
        didSwap: false
      };
    }
    const thumbIndex = pressedThumbIndexRef.current;
    if (thumbIndex < 0) {
      return null;
    }
    const collisionResult = resolveThumbCollision({
      behavior: thumbCollisionBehavior,
      values,
      currentValues: latestValuesRef.current ?? values,
      initialValues: pressedValuesRef.current,
      pressedIndex: thumbIndex,
      nextValue: newValue,
      min,
      max,
      step,
      minStepsBetweenValues
    });
    if (thumbCollisionBehavior === "swap" && collisionResult.didSwap) {
      updatePressedThumb(collisionResult.thumbIndex);
    } else {
      pressedThumbIndexRef.current = collisionResult.thumbIndex;
    }
    return collisionResult;
  });
  const startPressing = useStableCallback((fingerCoords) => {
    pressedValuesRef.current = range ? values.slice() : null;
    latestValuesRef.current = values;
    const pressedThumbIndex = pressedThumbIndexRef.current;
    let closestThumbIndex = pressedThumbIndex;
    if (pressedThumbIndex > -1 && pressedThumbIndex < values.length) {
      if (values[pressedThumbIndex] === max) {
        let candidateIndex = pressedThumbIndex;
        while (candidateIndex > 0 && values[candidateIndex - 1] === max) {
          candidateIndex -= 1;
        }
        closestThumbIndex = candidateIndex;
      }
    } else {
      const axis = !vertical ? "x" : "y";
      let minDistance;
      closestThumbIndex = -1;
      for (let i = 0; i < thumbRefs.current.length; i += 1) {
        const thumbEl = thumbRefs.current[i];
        if (isElement(thumbEl)) {
          const midpoint = getMidpoint(thumbEl);
          const distance = Math.abs(fingerCoords[axis] - midpoint[axis]);
          if (minDistance === void 0 || distance <= minDistance) {
            closestThumbIndex = i;
            minDistance = distance;
          }
        }
      }
    }
    if (closestThumbIndex > -1 && closestThumbIndex !== pressedThumbIndex) {
      updatePressedThumb(closestThumbIndex);
    }
    if (inset) {
      const thumbEl = thumbRefs.current[closestThumbIndex];
      if (isElement(thumbEl)) {
        const thumbRect = thumbEl.getBoundingClientRect();
        const side = !vertical ? "width" : "height";
        insetThumbOffsetRef.current = thumbRect[side] / 2;
      }
    }
  });
  const focusThumb = useStableCallback((thumbIndex) => {
    thumbRefs.current?.[thumbIndex]?.querySelector('input[type="range"]')?.focus({
      preventScroll: true
    });
  });
  const handleTouchMove = useStableCallback((nativeEvent) => {
    const fingerCoords = getFingerCoords(nativeEvent, touchIdRef);
    if (fingerCoords == null) {
      return;
    }
    moveCountRef.current += 1;
    if (nativeEvent.type === "pointermove" && nativeEvent.buttons === 0) {
      handleTouchEnd(nativeEvent);
      return;
    }
    const finger = getFingerState(fingerCoords);
    if (finger == null) {
      return;
    }
    if (validateMinimumDistance(finger.value, step, minStepsBetweenValues)) {
      if (!dragging && moveCountRef.current > INTENTIONAL_DRAG_COUNT_THRESHOLD) {
        setDragging(true);
      }
      setValue(finger.value, createChangeEventDetails(reason_parts_exports.drag, nativeEvent, void 0, {
        activeThumbIndex: finger.thumbIndex
      }));
      latestValuesRef.current = Array.isArray(finger.value) ? finger.value : [finger.value];
      if (finger.didSwap) {
        focusThumb(finger.thumbIndex);
      }
    }
  });
  function handleTouchEnd(nativeEvent) {
    setActive(-1);
    setDragging(false);
    pressedInputRef.current = null;
    pressedThumbCenterOffsetRef.current = null;
    const fingerCoords = getFingerCoords(nativeEvent, touchIdRef);
    const finger = fingerCoords != null ? getFingerState(fingerCoords) : null;
    if (finger != null) {
      const commitReason = lastChangeReasonRef.current;
      onValueCommitted(lastChangedValueRef.current ?? finger.value, createGenericEventDetails(commitReason, nativeEvent));
    }
    if ("pointerType" in nativeEvent && controlRef.current?.hasPointerCapture(nativeEvent.pointerId)) {
      controlRef.current?.releasePointerCapture(nativeEvent.pointerId);
    }
    pressedThumbIndexRef.current = -1;
    touchIdRef.current = null;
    pressedValuesRef.current = null;
    stopListening();
  }
  const handleTouchStart = useStableCallback((nativeEvent) => {
    if (disabled) {
      return;
    }
    const touch = nativeEvent.changedTouches[0];
    if (touch != null) {
      touchIdRef.current = touch.identifier;
    }
    const fingerCoords = getFingerCoords(nativeEvent, touchIdRef);
    if (fingerCoords != null) {
      startPressing(fingerCoords);
      const finger = getFingerState(fingerCoords);
      if (finger == null) {
        return;
      }
      focusThumb(finger.thumbIndex);
      setValue(finger.value, createChangeEventDetails(reason_parts_exports.trackPress, nativeEvent, void 0, {
        activeThumbIndex: finger.thumbIndex
      }));
      latestValuesRef.current = Array.isArray(finger.value) ? finger.value : [finger.value];
      if (finger.didSwap) {
        focusThumb(finger.thumbIndex);
      }
    }
    moveCountRef.current = 0;
    const doc = ownerDocument(controlRef.current);
    doc.addEventListener("touchmove", handleTouchMove, {
      passive: true
    });
    doc.addEventListener("touchend", handleTouchEnd, {
      passive: true
    });
  });
  const stopListening = useStableCallback(() => {
    const doc = ownerDocument(controlRef.current);
    doc.removeEventListener("pointermove", handleTouchMove);
    doc.removeEventListener("pointerup", handleTouchEnd);
    doc.removeEventListener("touchmove", handleTouchMove);
    doc.removeEventListener("touchend", handleTouchEnd);
    pressedValuesRef.current = null;
  });
  const focusFrame = useAnimationFrame();
  React224.useEffect(() => {
    const control = controlRef.current;
    if (!control) {
      return () => stopListening();
    }
    control.addEventListener("touchstart", handleTouchStart, {
      passive: true
    });
    return () => {
      control.removeEventListener("touchstart", handleTouchStart);
      focusFrame.cancel();
      stopListening();
    };
  }, [stopListening, handleTouchStart, controlRef, focusFrame]);
  React224.useEffect(() => {
    if (disabled) {
      stopListening();
    }
  }, [disabled, stopListening]);
  const element = useRenderElement("div", componentProps, {
    state,
    ref: [forwardedRef, registerFieldControlRef, controlRef, setStylesRef],
    props: [{
      ["data-base-ui-slider-control"]: renderBeforeHydration ? "" : void 0,
      onPointerDown(event) {
        const control = controlRef.current;
        if (!control || disabled || event.defaultPrevented || !isElement(event.target) || // Only handle left clicks
        event.button !== 0) {
          return;
        }
        const fingerCoords = getFingerCoords(event, touchIdRef);
        if (fingerCoords != null) {
          startPressing(fingerCoords);
          const finger = getFingerState(fingerCoords);
          if (finger == null) {
            return;
          }
          const pressedOnFocusedThumb = contains(thumbRefs.current[finger.thumbIndex], activeElement(ownerDocument(control)));
          if (pressedOnFocusedThumb) {
            event.preventDefault();
          } else {
            focusFrame.request(() => {
              focusThumb(finger.thumbIndex);
            });
          }
          setDragging(true);
          const pressedOnAnyThumb = pressedThumbCenterOffsetRef.current != null;
          if (!pressedOnAnyThumb) {
            setValue(finger.value, createChangeEventDetails(reason_parts_exports.trackPress, event.nativeEvent, void 0, {
              activeThumbIndex: finger.thumbIndex
            }));
            latestValuesRef.current = Array.isArray(finger.value) ? finger.value : [finger.value];
            if (finger.didSwap) {
              focusThumb(finger.thumbIndex);
            }
          }
        }
        if (event.nativeEvent.pointerId) {
          control.setPointerCapture(event.nativeEvent.pointerId);
        }
        moveCountRef.current = 0;
        const doc = ownerDocument(controlRef.current);
        doc.addEventListener("pointermove", handleTouchMove, {
          passive: true
        });
        doc.addEventListener("pointerup", handleTouchEnd, {
          once: true
        });
      },
      tabIndex: -1
    }, elementProps],
    stateAttributesMapping: sliderStateAttributesMapping
  });
  return element;
});
if (true) SliderControl.displayName = "SliderControl";

// node_modules/@base-ui/react/esm/slider/track/SliderTrack.js
var React225 = __toESM(require_react(), 1);
var SliderTrack = React225.forwardRef(function SliderTrack2(componentProps, forwardedRef) {
  const {
    render,
    className,
    ...elementProps
  } = componentProps;
  const {
    state
  } = useSliderRootContext();
  const element = useRenderElement("div", componentProps, {
    state,
    ref: forwardedRef,
    props: [{
      style: {
        position: "relative"
      }
    }, elementProps],
    stateAttributesMapping: sliderStateAttributesMapping
  });
  return element;
});
if (true) SliderTrack.displayName = "SliderTrack";

// node_modules/@base-ui/react/esm/slider/thumb/SliderThumb.js
var React226 = __toESM(require_react(), 1);

// node_modules/@base-ui/react/esm/slider/thumb/SliderThumbDataAttributes.js
var SliderThumbDataAttributes = (function(SliderThumbDataAttributes2) {
  SliderThumbDataAttributes2["index"] = "data-index";
  SliderThumbDataAttributes2["dragging"] = "data-dragging";
  SliderThumbDataAttributes2["orientation"] = "data-orientation";
  SliderThumbDataAttributes2["disabled"] = "data-disabled";
  SliderThumbDataAttributes2["valid"] = "data-valid";
  SliderThumbDataAttributes2["invalid"] = "data-invalid";
  SliderThumbDataAttributes2["touched"] = "data-touched";
  SliderThumbDataAttributes2["dirty"] = "data-dirty";
  SliderThumbDataAttributes2["focused"] = "data-focused";
  return SliderThumbDataAttributes2;
})({});

// node_modules/@base-ui/react/esm/slider/thumb/prehydrationScript.min.js
var script = '!function(){const t=document.currentScript?.parentElement;if(!t)return;const e=t.closest("[data-base-ui-slider-control]");if(!e)return;const r=e.querySelector("[data-base-ui-slider-indicator]"),i=e.getBoundingClientRect(),n="vertical"===e.getAttribute("data-orientation")?"height":"width",o=e.querySelectorAll(\'input[type="range"]\'),l=o.length>1,s=o.length-1;let a=null,u=null;for(let t=0;t<o.length;t+=1){const e=o[t],y=parseFloat(e.getAttribute("value")??"");if(Number.isNaN(y))return;const c=e.parentElement;if(!c)return;const p=parseFloat(e.getAttribute("max")??"100"),g=parseFloat(e.getAttribute("min")??"0"),b=c?.getBoundingClientRect(),d=i[n]-b[n],m=100*(y-g)/(p-g),v=(b[n]/2+d*m/100)/i[n]*100;c.style.setProperty("--position",`${v}%`),Number.isFinite(v)&&(c.style.removeProperty("visibility"),r&&(0===t?(a=v,r.style.setProperty("--start-position",`${v}%`),l||r.style.removeProperty("visibility")):t===s&&(u=v-(a??0),r.style.setProperty("--end-position",`${v}%`),r.style.setProperty("--relative-size",`${u}%`),r.style.removeProperty("visibility"))))}}();';

// node_modules/@base-ui/react/esm/slider/thumb/SliderThumb.js
var import_jsx_runtime80 = __toESM(require_jsx_runtime(), 1);
var PAGE_UP = "PageUp";
var PAGE_DOWN = "PageDown";
var ALL_KEYS = /* @__PURE__ */ new Set([ARROW_UP, ARROW_DOWN, ARROW_LEFT, ARROW_RIGHT, HOME, END, PAGE_UP, PAGE_DOWN]);
function getDefaultAriaValueText2(values, index, format, locale) {
  if (index < 0) {
    return void 0;
  }
  if (values.length === 2) {
    if (index === 0) {
      return `${formatNumber(values[index], locale, format)} start range`;
    }
    return `${formatNumber(values[index], locale, format)} end range`;
  }
  return format ? formatNumber(values[index], locale, format) : void 0;
}
function getNewValue(thumbValue, step, direction, min, max) {
  return direction === 1 ? Math.min(thumbValue + step, max) : Math.max(thumbValue - step, min);
}
var SliderThumb = React226.forwardRef(function SliderThumb2(componentProps, forwardedRef) {
  const {
    render,
    children: childrenProp,
    className,
    "aria-describedby": ariaDescribedByProp,
    "aria-label": ariaLabelProp,
    "aria-labelledby": ariaLabelledByProp,
    disabled: disabledProp = false,
    getAriaLabel: getAriaLabelProp,
    getAriaValueText: getAriaValueTextProp,
    id: idProp,
    index: indexProp,
    inputRef: inputRefProp,
    onBlur: onBlurProp,
    onFocus: onFocusProp,
    onKeyDown: onKeyDownProp,
    tabIndex: tabIndexProp,
    ...elementProps
  } = componentProps;
  const {
    nonce
  } = useCSPContext();
  const id = useBaseUiId(idProp);
  const {
    active: activeIndex,
    lastUsedThumbIndex,
    controlRef,
    disabled: contextDisabled,
    validation,
    formatOptionsRef,
    handleInputChange,
    inset,
    labelId,
    largeStep,
    locale,
    max,
    min,
    minStepsBetweenValues,
    name,
    orientation,
    pressedInputRef,
    pressedThumbCenterOffsetRef,
    pressedThumbIndexRef,
    renderBeforeHydration,
    setActive,
    setIndicatorPosition,
    state,
    step,
    values: sliderValues
  } = useSliderRootContext();
  const direction = useDirection();
  const disabled = disabledProp || contextDisabled;
  const range = sliderValues.length > 1;
  const vertical = orientation === "vertical";
  const rtl = direction === "rtl";
  const {
    setTouched,
    setFocused,
    validationMode
  } = useFieldRootContext();
  const thumbRef = React226.useRef(null);
  const inputRef = React226.useRef(null);
  const defaultInputId = useBaseUiId();
  const labelableId = useLabelableId();
  const inputId = range ? defaultInputId : labelableId;
  const thumbMetadata = React226.useMemo(() => ({
    inputId
  }), [inputId]);
  const {
    ref: listItemRef,
    index: compositeIndex
  } = useCompositeListItem({
    metadata: thumbMetadata
  });
  const index = !range ? 0 : indexProp ?? compositeIndex;
  const last = index === sliderValues.length - 1;
  const thumbValue = sliderValues[index];
  const thumbValuePercent = valueToPercent(thumbValue, min, max);
  const [isMounted, setIsMounted] = React226.useState(false);
  const [positionPercent, setPositionPercent] = React226.useState();
  useOnMount(() => setIsMounted(true));
  const safeLastUsedThumbIndex = lastUsedThumbIndex >= 0 && lastUsedThumbIndex < sliderValues.length ? lastUsedThumbIndex : -1;
  const getInsetPosition = useStableCallback(() => {
    const control = controlRef.current;
    const thumb = thumbRef.current;
    if (!control || !thumb) {
      return;
    }
    const thumbRect = thumb.getBoundingClientRect();
    const controlRect = control.getBoundingClientRect();
    const side = vertical ? "height" : "width";
    const controlSize = controlRect[side] - thumbRect[side];
    const thumbOffsetFromControlEdge = thumbRect[side] / 2 + controlSize * thumbValuePercent / 100;
    const nextPositionPercent = thumbOffsetFromControlEdge / controlRect[side] * 100;
    setPositionPercent(nextPositionPercent);
    if (index === 0) {
      setIndicatorPosition((prevPosition) => [nextPositionPercent, prevPosition[1]]);
    } else if (last) {
      setIndicatorPosition((prevPosition) => [prevPosition[0], nextPositionPercent]);
    }
  });
  useIsoLayoutEffect(() => {
    if (inset) {
      queueMicrotask(getInsetPosition);
    }
  }, [getInsetPosition, inset]);
  useIsoLayoutEffect(() => {
    if (inset) {
      getInsetPosition();
    }
  }, [getInsetPosition, inset, thumbValuePercent]);
  const getThumbStyle = React226.useCallback(() => {
    const startEdge = vertical ? "bottom" : "insetInlineStart";
    const crossOffsetProperty = vertical ? "left" : "top";
    let zIndex;
    if (range) {
      if (activeIndex === index) {
        zIndex = 2;
      } else if (safeLastUsedThumbIndex === index) {
        zIndex = 1;
      }
    } else if (activeIndex === index) {
      zIndex = 1;
    }
    if (!inset) {
      if (!Number.isFinite(thumbValuePercent)) {
        return visuallyHidden;
      }
      return {
        position: "absolute",
        [startEdge]: `${thumbValuePercent}%`,
        [crossOffsetProperty]: "50%",
        translate: `${(vertical || !rtl ? -1 : 1) * 50}% ${(vertical ? 1 : -1) * 50}%`,
        zIndex
      };
    }
    return {
      ["--position"]: `${positionPercent}%`,
      visibility: renderBeforeHydration && !isMounted || positionPercent === void 0 ? "hidden" : void 0,
      position: "absolute",
      [startEdge]: "var(--position)",
      [crossOffsetProperty]: "50%",
      translate: `${(vertical || !rtl ? -1 : 1) * 50}% ${(vertical ? 1 : -1) * 50}%`,
      zIndex
    };
  }, [activeIndex, index, inset, isMounted, positionPercent, range, renderBeforeHydration, rtl, safeLastUsedThumbIndex, thumbValuePercent, vertical]);
  let cssWritingMode;
  if (orientation === "vertical") {
    cssWritingMode = rtl ? "vertical-rl" : "vertical-lr";
  }
  const ariaLabel = typeof getAriaLabelProp === "function" ? getAriaLabelProp(index) : ariaLabelProp;
  const inputProps = mergeProps({
    "aria-label": ariaLabel,
    "aria-labelledby": ariaLabelledByProp ?? (ariaLabel == null ? labelId : void 0),
    "aria-describedby": ariaDescribedByProp,
    "aria-orientation": orientation,
    "aria-valuenow": thumbValue,
    "aria-valuetext": typeof getAriaValueTextProp === "function" ? getAriaValueTextProp(formatNumber(thumbValue, locale, formatOptionsRef.current ?? void 0), thumbValue, index) : getDefaultAriaValueText2(sliderValues, index, formatOptionsRef.current ?? void 0, locale),
    disabled,
    id: inputId,
    max,
    min,
    name,
    onChange(event) {
      handleInputChange(event.target.valueAsNumber, index, event);
    },
    onFocus() {
      setActive(index);
      setFocused(true);
    },
    onBlur() {
      if (!thumbRef.current) {
        return;
      }
      setActive(-1);
      setTouched(true);
      setFocused(false);
      if (validationMode === "onBlur") {
        validation.commit(getSliderValue(thumbValue, index, min, max, range, sliderValues));
      }
    },
    onKeyDown(event) {
      if (!ALL_KEYS.has(event.key)) {
        return;
      }
      if (COMPOSITE_KEYS.has(event.key)) {
        event.stopPropagation();
      }
      let newValue = null;
      const roundedValue = roundValueToStep(thumbValue, step, min);
      switch (event.key) {
        case ARROW_UP:
          newValue = getNewValue(roundedValue, event.shiftKey ? largeStep : step, 1, min, max);
          break;
        case ARROW_RIGHT:
          newValue = getNewValue(roundedValue, event.shiftKey ? largeStep : step, rtl ? -1 : 1, min, max);
          break;
        case ARROW_DOWN:
          newValue = getNewValue(roundedValue, event.shiftKey ? largeStep : step, -1, min, max);
          break;
        case ARROW_LEFT:
          newValue = getNewValue(roundedValue, event.shiftKey ? largeStep : step, rtl ? 1 : -1, min, max);
          break;
        case PAGE_UP:
          newValue = getNewValue(roundedValue, largeStep, 1, min, max);
          break;
        case PAGE_DOWN:
          newValue = getNewValue(roundedValue, largeStep, -1, min, max);
          break;
        case END:
          newValue = max;
          if (range) {
            newValue = Number.isFinite(sliderValues[index + 1]) ? sliderValues[index + 1] - step * minStepsBetweenValues : max;
          }
          break;
        case HOME:
          newValue = min;
          if (range) {
            newValue = Number.isFinite(sliderValues[index - 1]) ? sliderValues[index - 1] + step * minStepsBetweenValues : min;
          }
          break;
        default:
          break;
      }
      if (newValue !== null) {
        handleInputChange(newValue, index, event);
        event.preventDefault();
      }
    },
    step,
    style: {
      ...visuallyHidden,
      // So that VoiceOver's focus indicator matches the thumb's dimensions
      width: "100%",
      height: "100%",
      writingMode: cssWritingMode
    },
    tabIndex: tabIndexProp ?? void 0,
    type: "range",
    value: thumbValue ?? ""
  }, validation.getInputValidationProps);
  const mergedInputRef = useMergedRefs(inputRef, validation.inputRef, inputRefProp);
  const element = useRenderElement("div", componentProps, {
    state,
    ref: [forwardedRef, listItemRef, thumbRef],
    props: [{
      [SliderThumbDataAttributes.index]: index,
      children: (0, import_jsx_runtime80.jsxs)(React226.Fragment, {
        children: [childrenProp, (0, import_jsx_runtime80.jsx)("input", {
          ref: mergedInputRef,
          ...inputProps
        }), inset && !isMounted && renderBeforeHydration && // this must be rendered with the last thumb to ensure all
        // preceding thumbs are already rendered in the DOM
        last && (0, import_jsx_runtime80.jsx)("script", {
          nonce,
          dangerouslySetInnerHTML: {
            __html: script
          },
          suppressHydrationWarning: true
        })]
      }),
      id,
      onBlur: onBlurProp,
      onFocus: onFocusProp,
      onPointerDown(event) {
        pressedThumbIndexRef.current = index;
        if (thumbRef.current != null) {
          const axis = orientation === "horizontal" ? "x" : "y";
          const midpoint = getMidpoint(thumbRef.current);
          const offset = (orientation === "horizontal" ? event.clientX : event.clientY) - midpoint[axis];
          pressedThumbCenterOffsetRef.current = offset;
        }
        if (inputRef.current != null && pressedInputRef.current !== inputRef.current) {
          pressedInputRef.current = inputRef.current;
        }
      },
      style: getThumbStyle(),
      suppressHydrationWarning: renderBeforeHydration || void 0,
      tabIndex: -1
    }, elementProps],
    stateAttributesMapping: sliderStateAttributesMapping
  });
  return element;
});
if (true) SliderThumb.displayName = "SliderThumb";

// node_modules/@base-ui/react/esm/slider/indicator/SliderIndicator.js
var React227 = __toESM(require_react(), 1);
function getInsetStyles(vertical, range, start, end, renderBeforeHydration, mounted) {
  const visibility = start === void 0 || range && end === void 0 ? "hidden" : void 0;
  const startEdge = vertical ? "bottom" : "insetInlineStart";
  const mainSide = vertical ? "height" : "width";
  const crossSide = vertical ? "width" : "height";
  const styles = {
    visibility: renderBeforeHydration && !mounted ? "hidden" : visibility,
    position: vertical ? "absolute" : "relative",
    [crossSide]: "inherit"
  };
  styles["--start-position"] = `${start ?? 0}%`;
  if (!range) {
    styles[startEdge] = 0;
    styles[mainSide] = "var(--start-position)";
    return styles;
  }
  styles["--relative-size"] = `${(end ?? 0) - (start ?? 0)}%`;
  styles[startEdge] = "var(--start-position)";
  styles[mainSide] = "var(--relative-size)";
  return styles;
}
function getCenteredStyles(vertical, range, start, end) {
  const startEdge = vertical ? "bottom" : "insetInlineStart";
  const mainSide = vertical ? "height" : "width";
  const crossSide = vertical ? "width" : "height";
  const styles = {
    position: vertical ? "absolute" : "relative",
    [crossSide]: "inherit"
  };
  if (!range) {
    styles[startEdge] = 0;
    styles[mainSide] = `${start}%`;
    return styles;
  }
  const size = end - start;
  styles[startEdge] = `${start}%`;
  styles[mainSide] = `${size}%`;
  return styles;
}
var SliderIndicator = React227.forwardRef(function SliderIndicator2(componentProps, forwardedRef) {
  const {
    render,
    className,
    ...elementProps
  } = componentProps;
  const {
    indicatorPosition,
    inset,
    max,
    min,
    orientation,
    renderBeforeHydration,
    state,
    values
  } = useSliderRootContext();
  const [isMounted, setIsMounted] = React227.useState(false);
  useOnMount(() => setIsMounted(true));
  const vertical = orientation === "vertical";
  const range = values.length > 1;
  const style = inset ? getInsetStyles(vertical, range, indicatorPosition[0], indicatorPosition[1], renderBeforeHydration, isMounted) : getCenteredStyles(vertical, range, valueToPercent(values[0], min, max), valueToPercent(values[values.length - 1], min, max));
  const element = useRenderElement("div", componentProps, {
    state,
    ref: forwardedRef,
    props: [{
      ["data-base-ui-slider-indicator"]: renderBeforeHydration ? "" : void 0,
      style,
      suppressHydrationWarning: renderBeforeHydration || void 0
    }, elementProps],
    stateAttributesMapping: sliderStateAttributesMapping
  });
  return element;
});
if (true) SliderIndicator.displayName = "SliderIndicator";

// node_modules/@base-ui/react/esm/switch/index.parts.js
var index_parts_exports25 = {};
__export(index_parts_exports25, {
  Root: () => SwitchRoot,
  Thumb: () => SwitchThumb
});

// node_modules/@base-ui/react/esm/switch/root/SwitchRoot.js
var React229 = __toESM(require_react(), 1);

// node_modules/@base-ui/react/esm/switch/root/SwitchRootContext.js
var React228 = __toESM(require_react(), 1);
var SwitchRootContext = React228.createContext(void 0);
if (true) SwitchRootContext.displayName = "SwitchRootContext";
function useSwitchRootContext() {
  const context = React228.useContext(SwitchRootContext);
  if (context === void 0) {
    throw new Error(true ? "Base UI: SwitchRootContext is missing. Switch parts must be placed within <Switch.Root>." : formatErrorMessage_default(63));
  }
  return context;
}

// node_modules/@base-ui/react/esm/switch/root/SwitchRootDataAttributes.js
var SwitchRootDataAttributes = (function(SwitchRootDataAttributes2) {
  SwitchRootDataAttributes2["checked"] = "data-checked";
  SwitchRootDataAttributes2["unchecked"] = "data-unchecked";
  SwitchRootDataAttributes2["disabled"] = "data-disabled";
  SwitchRootDataAttributes2["readonly"] = "data-readonly";
  SwitchRootDataAttributes2["required"] = "data-required";
  SwitchRootDataAttributes2["valid"] = "data-valid";
  SwitchRootDataAttributes2["invalid"] = "data-invalid";
  SwitchRootDataAttributes2["touched"] = "data-touched";
  SwitchRootDataAttributes2["dirty"] = "data-dirty";
  SwitchRootDataAttributes2["filled"] = "data-filled";
  SwitchRootDataAttributes2["focused"] = "data-focused";
  return SwitchRootDataAttributes2;
})({});

// node_modules/@base-ui/react/esm/switch/stateAttributesMapping.js
var stateAttributesMapping29 = {
  ...fieldValidityMapping,
  checked(value) {
    if (value) {
      return {
        [SwitchRootDataAttributes.checked]: ""
      };
    }
    return {
      [SwitchRootDataAttributes.unchecked]: ""
    };
  }
};

// node_modules/@base-ui/react/esm/switch/root/SwitchRoot.js
var import_jsx_runtime81 = __toESM(require_jsx_runtime(), 1);
var SwitchRoot = React229.forwardRef(function SwitchRoot2(componentProps, forwardedRef) {
  const {
    checked: checkedProp,
    className,
    defaultChecked,
    "aria-labelledby": ariaLabelledByProp,
    id: idProp,
    inputRef: externalInputRef,
    name: nameProp,
    nativeButton = false,
    onCheckedChange: onCheckedChangeProp,
    readOnly = false,
    required = false,
    disabled: disabledProp = false,
    render,
    uncheckedValue,
    value,
    ...elementProps
  } = componentProps;
  const {
    clearErrors
  } = useFormContext();
  const {
    state: fieldState,
    setTouched,
    setDirty,
    validityData,
    setFilled,
    setFocused,
    shouldValidateOnChange,
    validationMode,
    disabled: fieldDisabled,
    name: fieldName,
    validation
  } = useFieldRootContext();
  const {
    labelId
  } = useLabelableContext();
  const disabled = fieldDisabled || disabledProp;
  const name = fieldName ?? nameProp;
  const onCheckedChange = useStableCallback(onCheckedChangeProp);
  const inputRef = React229.useRef(null);
  const handleInputRef = useMergedRefs(inputRef, externalInputRef, validation.inputRef);
  const switchRef = React229.useRef(null);
  const id = useBaseUiId();
  const controlId = useLabelableId({
    id: idProp,
    implicit: false,
    controlRef: switchRef
  });
  const hiddenInputId = nativeButton ? void 0 : controlId;
  const [checked, setCheckedState] = useControlled({
    controlled: checkedProp,
    default: Boolean(defaultChecked),
    name: "Switch",
    state: "checked"
  });
  useField({
    id,
    commit: validation.commit,
    value: checked,
    controlRef: switchRef,
    name,
    getValue: () => checked
  });
  useIsoLayoutEffect(() => {
    if (inputRef.current) {
      setFilled(inputRef.current.checked);
    }
  }, [inputRef, setFilled]);
  useValueChanged(checked, () => {
    clearErrors(name);
    setDirty(checked !== validityData.initialValue);
    setFilled(checked);
    if (shouldValidateOnChange()) {
      validation.commit(checked);
    } else {
      validation.commit(checked, true);
    }
  });
  const {
    getButtonProps,
    buttonRef
  } = useButton({
    disabled,
    native: nativeButton
  });
  const ariaLabelledBy = useAriaLabelledBy(ariaLabelledByProp, labelId, inputRef, !nativeButton, hiddenInputId);
  const rootProps = {
    id: nativeButton ? controlId : id,
    role: "switch",
    "aria-checked": checked,
    "aria-readonly": readOnly || void 0,
    "aria-required": required || void 0,
    "aria-labelledby": ariaLabelledBy,
    onFocus() {
      if (!disabled) {
        setFocused(true);
      }
    },
    onBlur() {
      const element2 = inputRef.current;
      if (!element2 || disabled) {
        return;
      }
      setTouched(true);
      setFocused(false);
      if (validationMode === "onBlur") {
        validation.commit(element2.checked);
      }
    },
    onClick(event) {
      if (readOnly || disabled) {
        return;
      }
      event.preventDefault();
      inputRef.current?.dispatchEvent(new PointerEvent("click", {
        bubbles: true,
        shiftKey: event.shiftKey,
        ctrlKey: event.ctrlKey,
        altKey: event.altKey,
        metaKey: event.metaKey
      }));
    }
  };
  const inputProps = React229.useMemo(() => mergeProps(
    {
      checked,
      disabled,
      id: hiddenInputId,
      name,
      required,
      style: name ? visuallyHiddenInput : visuallyHidden,
      tabIndex: -1,
      type: "checkbox",
      "aria-hidden": true,
      ref: handleInputRef,
      onChange(event) {
        if (event.nativeEvent.defaultPrevented) {
          return;
        }
        const nextChecked = event.target.checked;
        const eventDetails = createChangeEventDetails(reason_parts_exports.none, event.nativeEvent);
        onCheckedChange?.(nextChecked, eventDetails);
        if (eventDetails.isCanceled) {
          return;
        }
        setCheckedState(nextChecked);
      },
      onFocus() {
        switchRef.current?.focus();
      }
    },
    validation.getInputValidationProps,
    // React <19 sets an empty value if `undefined` is passed explicitly
    // To avoid this, we only set the value if it's defined
    value !== void 0 ? {
      value
    } : EMPTY_OBJECT
  ), [checked, disabled, handleInputRef, hiddenInputId, name, onCheckedChange, required, setCheckedState, validation, value]);
  const state = React229.useMemo(() => ({
    ...fieldState,
    checked,
    disabled,
    readOnly,
    required
  }), [fieldState, checked, disabled, readOnly, required]);
  const element = useRenderElement("span", componentProps, {
    state,
    ref: [forwardedRef, switchRef, buttonRef],
    props: [rootProps, validation.getValidationProps, elementProps, getButtonProps],
    stateAttributesMapping: stateAttributesMapping29
  });
  return (0, import_jsx_runtime81.jsxs)(SwitchRootContext.Provider, {
    value: state,
    children: [element, !checked && name && uncheckedValue !== void 0 && (0, import_jsx_runtime81.jsx)("input", {
      type: "hidden",
      name,
      value: uncheckedValue
    }), (0, import_jsx_runtime81.jsx)("input", {
      ...inputProps
    })]
  });
});
if (true) SwitchRoot.displayName = "SwitchRoot";

// node_modules/@base-ui/react/esm/switch/thumb/SwitchThumb.js
var React230 = __toESM(require_react(), 1);
var SwitchThumb = React230.forwardRef(function SwitchThumb2(componentProps, forwardedRef) {
  const {
    render,
    className,
    ...elementProps
  } = componentProps;
  const {
    state: fieldState
  } = useFieldRootContext();
  const state = useSwitchRootContext();
  const extendedState = {
    ...fieldState,
    ...state
  };
  return useRenderElement("span", componentProps, {
    state: extendedState,
    ref: forwardedRef,
    stateAttributesMapping: stateAttributesMapping29,
    props: elementProps
  });
});
if (true) SwitchThumb.displayName = "SwitchThumb";

// node_modules/@base-ui/react/esm/toast/index.parts.js
var index_parts_exports26 = {};
__export(index_parts_exports26, {
  Action: () => ToastAction,
  Arrow: () => ToastArrow,
  Close: () => ToastClose,
  Content: () => ToastContent,
  Description: () => ToastDescription,
  Portal: () => ToastPortal,
  Positioner: () => ToastPositioner,
  Provider: () => ToastProvider,
  Root: () => ToastRoot,
  Title: () => ToastTitle,
  Viewport: () => ToastViewport,
  createToastManager: () => createToastManager,
  useToastManager: () => useToastManager
});

// node_modules/@base-ui/react/esm/toast/provider/ToastProvider.js
var React232 = __toESM(require_react(), 1);

// node_modules/@base-ui/react/esm/toast/provider/ToastProviderContext.js
var React231 = __toESM(require_react(), 1);
var ToastContext = React231.createContext(void 0);
if (true) ToastContext.displayName = "ToastContext";
function useToastProviderContext() {
  const context = React231.useContext(ToastContext);
  if (!context) {
    throw new Error(true ? "Base UI: useToastManager must be used within <Toast.Provider>." : formatErrorMessage_default(73));
  }
  return context;
}

// node_modules/@base-ui/utils/esm/generateId.js
var counter = 0;
function generateId(prefix) {
  counter += 1;
  return `${prefix}-${Math.random().toString(36).slice(2, 6)}-${counter}`;
}

// node_modules/@base-ui/react/esm/toast/utils/resolvePromiseOptions.js
function resolvePromiseOptions(options, result) {
  if (typeof options === "string") {
    return {
      description: options
    };
  }
  if (typeof options === "function") {
    const resolvedOptions = options(result);
    return typeof resolvedOptions === "string" ? {
      description: resolvedOptions
    } : resolvedOptions;
  }
  return options;
}

// node_modules/@base-ui/react/esm/toast/store.js
var toastMapSelector = createSelectorMemoized((state) => state.toasts, (toasts) => {
  const map = /* @__PURE__ */ new Map();
  let visibleIndex = 0;
  let offsetY = 0;
  toasts.forEach((toast, toastIndex) => {
    const isEnding = toast.transitionStatus === "ending";
    map.set(toast.id, {
      value: toast,
      domIndex: toastIndex,
      visibleIndex: isEnding ? -1 : visibleIndex,
      offsetY
    });
    offsetY += toast.height || 0;
    if (!isEnding) {
      visibleIndex += 1;
    }
  });
  return map;
});
var selectors6 = {
  toasts: createSelector((state) => state.toasts),
  isEmpty: createSelector((state) => state.toasts.length === 0),
  toast: createSelector(toastMapSelector, (toastMap, id) => toastMap.get(id)?.value),
  toastIndex: createSelector(toastMapSelector, (toastMap, id) => toastMap.get(id)?.domIndex ?? -1),
  toastOffsetY: createSelector(toastMapSelector, (toastMap, id) => toastMap.get(id)?.offsetY ?? 0),
  toastVisibleIndex: createSelector(toastMapSelector, (toastMap, id) => toastMap.get(id)?.visibleIndex ?? -1),
  hovering: createSelector((state) => state.hovering),
  focused: createSelector((state) => state.focused),
  expanded: createSelector((state) => state.hovering || state.focused),
  expandedOrOutOfFocus: createSelector((state) => state.hovering || state.focused || !state.isWindowFocused),
  prevFocusElement: createSelector((state) => state.prevFocusElement)
};
var ToastStore = class extends ReactStore {
  timers = /* @__PURE__ */ new Map();
  areTimersPaused = false;
  constructor(initialState) {
    super(initialState, {}, selectors6);
  }
  setFocused(focused) {
    this.set("focused", focused);
  }
  setHovering(hovering) {
    this.set("hovering", hovering);
  }
  setIsWindowFocused(isWindowFocused) {
    this.set("isWindowFocused", isWindowFocused);
  }
  setPrevFocusElement(prevFocusElement) {
    this.set("prevFocusElement", prevFocusElement);
  }
  setViewport = (viewport) => {
    this.set("viewport", viewport);
  };
  disposeEffect = () => {
    return () => {
      this.timers.forEach((timer) => {
        timer.timeout?.clear();
      });
      this.timers.clear();
    };
  };
  removeToast(toastId) {
    const index = selectors6.toastIndex(this.state, toastId);
    if (index === -1) {
      return;
    }
    const toast = this.state.toasts[index];
    toast?.onRemove?.();
    const newToasts = [...this.state.toasts];
    newToasts.splice(index, 1);
    this.setToasts(newToasts);
  }
  addToast = (toast) => {
    const {
      toasts,
      timeout,
      limit
    } = this.state;
    const id = toast.id || generateId("toast");
    const toastToAdd = {
      ...toast,
      id,
      transitionStatus: "starting"
    };
    const updatedToasts = [toastToAdd, ...toasts];
    const activeToasts = updatedToasts.filter((t) => t.transitionStatus !== "ending");
    if (activeToasts.length > limit) {
      const excessCount = activeToasts.length - limit;
      const oldestActiveToasts = activeToasts.slice(-excessCount);
      const limitedIds = new Set(oldestActiveToasts.map((t) => t.id));
      this.setToasts(updatedToasts.map((t) => {
        const limited = limitedIds.has(t.id);
        if (t.limited !== limited) {
          return {
            ...t,
            limited
          };
        }
        return t;
      }));
    } else {
      this.setToasts(updatedToasts.map((t) => t.limited ? {
        ...t,
        limited: false
      } : t));
    }
    const duration = toastToAdd.timeout ?? timeout;
    if (toastToAdd.type !== "loading" && duration > 0) {
      this.scheduleTimer(id, duration, () => this.closeToast(id));
    }
    if (selectors6.expandedOrOutOfFocus(this.state)) {
      this.pauseTimers();
    }
    return id;
  };
  updateToast = (id, updates) => {
    this.updateToastInternal(id, updates);
  };
  updateToastInternal = (id, updates) => {
    const {
      timeout,
      toasts
    } = this.state;
    const prevToast = selectors6.toast(this.state, id) ?? null;
    if (!prevToast) {
      return;
    }
    if (prevToast.transitionStatus === "ending") {
      return;
    }
    const nextToast = {
      ...prevToast,
      ...updates
    };
    this.setToasts(toasts.map((toast) => toast.id === id ? {
      ...toast,
      ...updates
    } : toast));
    const nextTimeout = nextToast.timeout ?? timeout;
    const prevTimeout = prevToast?.timeout ?? timeout;
    const timeoutUpdated = Object.hasOwn(updates, "timeout");
    const shouldHaveTimer = nextToast.transitionStatus !== "ending" && nextToast.type !== "loading" && nextTimeout > 0;
    const hasTimer = this.timers.has(id);
    const timeoutChanged = prevTimeout !== nextTimeout;
    const wasLoading = prevToast?.type === "loading";
    if (!shouldHaveTimer && hasTimer) {
      const timer = this.timers.get(id);
      timer?.timeout?.clear();
      this.timers.delete(id);
      return;
    }
    if (shouldHaveTimer && (!hasTimer || timeoutChanged || timeoutUpdated || wasLoading)) {
      const timer = this.timers.get(id);
      if (timer) {
        timer.timeout?.clear();
        this.timers.delete(id);
      }
      this.scheduleTimer(id, nextTimeout, () => this.closeToast(id));
      if (selectors6.expandedOrOutOfFocus(this.state)) {
        this.pauseTimers();
      }
    }
  };
  closeToast = (toastId) => {
    const closeAll = toastId === void 0;
    const {
      limit,
      toasts
    } = this.state;
    let toastsToClose;
    if (closeAll) {
      toastsToClose = toasts;
      this.timers.forEach((timer) => {
        timer.timeout?.clear();
      });
      this.timers.clear();
    } else {
      const toast = selectors6.toast(this.state, toastId);
      if (!toast) {
        return;
      }
      toastsToClose = [toast];
      const timer = this.timers.get(toastId);
      if (timer?.timeout) {
        timer.timeout.clear();
        this.timers.delete(toastId);
      }
    }
    let activeIndex = 0;
    const newToasts = toasts.map((item) => {
      if (closeAll || item.id === toastId) {
        return {
          ...item,
          transitionStatus: "ending",
          height: 0
        };
      }
      if (item.transitionStatus === "ending") {
        return item;
      }
      const isLimited = activeIndex >= limit;
      activeIndex += 1;
      return item.limited !== isLimited ? {
        ...item,
        limited: isLimited
      } : item;
    });
    const updates = {
      toasts: newToasts
    };
    if (closeAll || toasts.length === 1) {
      updates.hovering = false;
      updates.focused = false;
    }
    this.update(updates);
    toastsToClose.forEach((toast) => {
      if (toast.transitionStatus !== "ending") {
        toast.onClose?.();
      }
    });
    this.handleFocusManagement(toastId);
  };
  promiseToast = (promiseValue, options) => {
    const loadingOptions = resolvePromiseOptions(options.loading);
    const id = this.addToast({
      ...loadingOptions,
      type: "loading"
    });
    const handledPromise = promiseValue.then((result) => {
      const successOptions = resolvePromiseOptions(options.success, result);
      this.updateToast(id, {
        ...successOptions,
        type: "success",
        timeout: successOptions.timeout
      });
      return result;
    }).catch((error2) => {
      const errorOptions = resolvePromiseOptions(options.error, error2);
      this.updateToast(id, {
        ...errorOptions,
        type: "error",
        timeout: errorOptions.timeout
      });
      return Promise.reject(error2);
    });
    if ({}.hasOwnProperty.call(options, "setPromise")) {
      options.setPromise(handledPromise);
    }
    return handledPromise;
  };
  pauseTimers() {
    if (this.areTimersPaused) {
      return;
    }
    this.areTimersPaused = true;
    this.timers.forEach((timer) => {
      if (timer.timeout) {
        timer.timeout.clear();
        const elapsed = Date.now() - timer.start;
        const remaining = timer.delay - elapsed;
        timer.remaining = remaining > 0 ? remaining : 0;
      }
    });
  }
  resumeTimers() {
    if (!this.areTimersPaused) {
      return;
    }
    this.areTimersPaused = false;
    this.timers.forEach((timer, id) => {
      timer.remaining = timer.remaining > 0 ? timer.remaining : timer.delay;
      timer.timeout ??= Timeout.create();
      timer.timeout.start(timer.remaining, () => {
        this.timers.delete(id);
        timer.callback();
      });
      timer.start = Date.now();
    });
  }
  restoreFocusToPrevElement() {
    this.state.prevFocusElement?.focus({
      preventScroll: true
    });
  }
  handleDocumentPointerDown = (event) => {
    if (event.pointerType !== "touch") {
      return;
    }
    const target = getTarget(event);
    if (contains(this.state.viewport, target)) {
      return;
    }
    this.resumeTimers();
    this.update({
      hovering: false,
      focused: false
    });
  };
  scheduleTimer(id, delay, callback) {
    const start = Date.now();
    const shouldStartActive = !selectors6.expandedOrOutOfFocus(this.state);
    const currentTimeout = shouldStartActive ? Timeout.create() : void 0;
    currentTimeout?.start(delay, () => {
      this.timers.delete(id);
      callback();
    });
    this.timers.set(id, {
      timeout: currentTimeout,
      start: shouldStartActive ? start : 0,
      delay,
      remaining: delay,
      callback
    });
  }
  setToasts(newToasts) {
    const updates = {
      toasts: newToasts
    };
    if (newToasts.length === 0) {
      updates.hovering = false;
      updates.focused = false;
    }
    this.update(updates);
  }
  handleFocusManagement(toastId) {
    const activeEl = activeElement(ownerDocument(this.state.viewport));
    if (!this.state.viewport || !contains(this.state.viewport, activeEl) || !matchesFocusVisible(activeEl)) {
      return;
    }
    if (toastId === void 0) {
      this.restoreFocusToPrevElement();
      return;
    }
    const toasts = selectors6.toasts(this.state);
    const currentIndex = selectors6.toastIndex(this.state, toastId);
    let nextToast = null;
    let index = currentIndex + 1;
    while (index < toasts.length) {
      if (toasts[index].transitionStatus !== "ending") {
        nextToast = toasts[index];
        break;
      }
      index += 1;
    }
    if (!nextToast) {
      index = currentIndex - 1;
      while (index >= 0) {
        if (toasts[index].transitionStatus !== "ending") {
          nextToast = toasts[index];
          break;
        }
        index -= 1;
      }
    }
    if (nextToast) {
      nextToast.ref?.current?.focus();
    } else {
      this.restoreFocusToPrevElement();
    }
  }
};

// node_modules/@base-ui/react/esm/toast/provider/ToastProvider.js
var import_jsx_runtime82 = __toESM(require_jsx_runtime(), 1);
var ToastProvider = function ToastProvider2(props) {
  const {
    children,
    timeout = 5e3,
    limit = 3,
    toastManager
  } = props;
  const store = useRefWithInit(() => new ToastStore({
    timeout,
    limit,
    viewport: null,
    toasts: [],
    hovering: false,
    focused: false,
    isWindowFocused: true,
    prevFocusElement: null
  })).current;
  useOnMount(store.disposeEffect);
  React232.useEffect(function subscribeToToastManager() {
    if (!toastManager) {
      return void 0;
    }
    const unsubscribe = toastManager[" subscribe"](({
      action,
      options
    }) => {
      const id = options.id;
      if (action === "promise" && options.promise) {
        store.promiseToast(options.promise, options);
      } else if (action === "update" && id) {
        store.updateToast(id, options);
      } else if (action === "close") {
        store.closeToast(id);
      } else {
        store.addToast(options);
      }
    });
    return unsubscribe;
  }, [store, timeout, toastManager]);
  store.useSyncedValues({
    timeout,
    limit
  });
  return (0, import_jsx_runtime82.jsx)(ToastContext.Provider, {
    value: store,
    children
  });
};
if (true) ToastProvider.displayName = "ToastProvider";

// node_modules/@base-ui/react/esm/toast/viewport/ToastViewport.js
var React233 = __toESM(require_react(), 1);

// node_modules/@base-ui/react/esm/toast/viewport/ToastViewportCssVars.js
var ToastViewportCssVars = (function(ToastViewportCssVars2) {
  ToastViewportCssVars2["frontmostHeight"] = "--toast-frontmost-height";
  return ToastViewportCssVars2;
})({});

// node_modules/@base-ui/react/esm/toast/viewport/ToastViewport.js
var import_jsx_runtime83 = __toESM(require_jsx_runtime(), 1);
var ToastViewport = React233.forwardRef(function ToastViewport2(componentProps, forwardedRef) {
  const {
    render,
    className,
    children,
    ...elementProps
  } = componentProps;
  const store = useToastProviderContext();
  const windowFocusTimeout = useTimeout();
  const handlingFocusGuardRef = React233.useRef(false);
  const markedReadyForMouseLeaveRef = React233.useRef(false);
  const isEmpty = store.useState("isEmpty");
  const toasts = store.useState("toasts");
  const focused = store.useState("focused");
  const expanded = store.useState("expanded");
  const prevFocusElement = store.useState("prevFocusElement");
  const frontmostHeight = toasts[0]?.height ?? 0;
  const hasTransitioningToasts = React233.useMemo(() => toasts.some((toast) => toast.transitionStatus === "ending"), [toasts]);
  React233.useEffect(() => {
    const viewport = store.state.viewport;
    if (!viewport) {
      return void 0;
    }
    function handleGlobalKeyDown(event) {
      if (isEmpty) {
        return;
      }
      if (event.key === "F6" && event.target !== viewport) {
        event.preventDefault();
        store.setPrevFocusElement(activeElement(ownerDocument(viewport)));
        viewport?.focus({
          preventScroll: true
        });
        store.pauseTimers();
        store.setFocused(true);
      }
    }
    const win = getWindow(viewport);
    win.addEventListener("keydown", handleGlobalKeyDown);
    return () => {
      win.removeEventListener("keydown", handleGlobalKeyDown);
    };
  }, [store, isEmpty]);
  React233.useEffect(() => {
    const viewport = store.state.viewport;
    if (!viewport || isEmpty) {
      return void 0;
    }
    const win = getWindow(viewport);
    function handleWindowBlur(event) {
      if (event.target !== win) {
        return;
      }
      store.setIsWindowFocused(false);
      store.pauseTimers();
    }
    function handleWindowFocus(event) {
      if (event.relatedTarget || event.target === win) {
        return;
      }
      const target = getTarget(event);
      const activeEl = activeElement(ownerDocument(viewport));
      if (!contains(viewport, target) || !matchesFocusVisible(activeEl)) {
        store.resumeTimers();
      }
      windowFocusTimeout.start(0, () => store.setIsWindowFocused(true));
    }
    win.addEventListener("blur", handleWindowBlur, true);
    win.addEventListener("focus", handleWindowFocus, true);
    return () => {
      win.removeEventListener("blur", handleWindowBlur, true);
      win.removeEventListener("focus", handleWindowFocus, true);
    };
  }, [
    store,
    windowFocusTimeout,
    // `store.state.viewport` isn't available on the first render,
    // since the portal node hasn't yet been created.
    // By adding this dependency, we ensure the window listeners
    // are added when toasts have been created, once the ref is available.
    isEmpty
  ]);
  React233.useEffect(() => {
    const viewport = store.state.viewport;
    if (!viewport || isEmpty) {
      return void 0;
    }
    const doc = ownerDocument(viewport);
    doc.addEventListener("pointerdown", store.handleDocumentPointerDown, true);
    return () => {
      doc.removeEventListener("pointerdown", store.handleDocumentPointerDown, true);
    };
  }, [isEmpty, store]);
  function handleFocusGuard(event) {
    const viewport = store.state.viewport;
    if (!viewport) {
      return;
    }
    handlingFocusGuardRef.current = true;
    if (event.relatedTarget === viewport) {
      toasts[0]?.ref?.current?.focus();
    } else {
      store.restoreFocusToPrevElement();
    }
  }
  function handleKeyDown(event) {
    if (event.key === "Tab" && event.shiftKey && event.target === store.state.viewport) {
      event.preventDefault();
      store.restoreFocusToPrevElement();
      store.resumeTimers();
    }
  }
  React233.useEffect(() => {
    if (!store.state.isWindowFocused || hasTransitioningToasts || !markedReadyForMouseLeaveRef.current) {
      return;
    }
    store.resumeTimers();
    store.setHovering(false);
    markedReadyForMouseLeaveRef.current = false;
  }, [hasTransitioningToasts, store]);
  function handleMouseEnter() {
    store.pauseTimers();
    store.setHovering(true);
    markedReadyForMouseLeaveRef.current = false;
  }
  function handleMouseLeave() {
    if (hasTransitioningToasts) {
      markedReadyForMouseLeaveRef.current = true;
    } else {
      store.resumeTimers();
      store.setHovering(false);
    }
  }
  function handleFocus() {
    if (handlingFocusGuardRef.current) {
      handlingFocusGuardRef.current = false;
      return;
    }
    if (focused) {
      return;
    }
    if (matchesFocusVisible(ownerDocument(store.state.viewport).activeElement)) {
      store.setFocused(true);
      store.pauseTimers();
    }
  }
  function handleBlur(event) {
    if (!focused || contains(store.state.viewport, event.relatedTarget)) {
      return;
    }
    store.setFocused(false);
    store.resumeTimers();
  }
  const defaultProps = {
    tabIndex: -1,
    role: "region",
    "aria-live": "polite",
    "aria-atomic": false,
    "aria-relevant": "additions text",
    "aria-label": "Notifications",
    onMouseEnter: handleMouseEnter,
    onMouseMove: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    onFocus: handleFocus,
    onBlur: handleBlur,
    onKeyDown: handleKeyDown,
    onClick: handleFocus
  };
  const state = {
    expanded
  };
  const element = useRenderElement("div", componentProps, {
    ref: [forwardedRef, store.setViewport],
    state,
    props: [defaultProps, {
      style: {
        [ToastViewportCssVars.frontmostHeight]: frontmostHeight ? `${frontmostHeight}px` : void 0
      }
    }, elementProps, {
      children: (0, import_jsx_runtime83.jsxs)(React233.Fragment, {
        children: [!isEmpty && prevFocusElement && (0, import_jsx_runtime83.jsx)(FocusGuard, {
          onFocus: handleFocusGuard
        }), children, !isEmpty && prevFocusElement && (0, import_jsx_runtime83.jsx)(FocusGuard, {
          onFocus: handleFocusGuard
        })]
      })
    }]
  });
  const highPriorityToasts = React233.useMemo(() => toasts.filter((toast) => toast.priority === "high"), [toasts]);
  return (0, import_jsx_runtime83.jsxs)(React233.Fragment, {
    children: [!isEmpty && prevFocusElement && (0, import_jsx_runtime83.jsx)(FocusGuard, {
      onFocus: handleFocusGuard
    }), element, !focused && highPriorityToasts.length > 0 && (0, import_jsx_runtime83.jsx)("div", {
      style: visuallyHidden,
      children: highPriorityToasts.map((toast) => (0, import_jsx_runtime83.jsxs)("div", {
        role: "alert",
        "aria-atomic": true,
        children: [(0, import_jsx_runtime83.jsx)("div", {
          children: toast.title
        }), (0, import_jsx_runtime83.jsx)("div", {
          children: toast.description
        })]
      }, toast.id))
    })]
  });
});
if (true) ToastViewport.displayName = "ToastViewport";

// node_modules/@base-ui/react/esm/toast/root/ToastRoot.js
var React235 = __toESM(require_react(), 1);
var ReactDOM15 = __toESM(require_react_dom(), 1);

// node_modules/@base-ui/react/esm/toast/root/ToastRootContext.js
var React234 = __toESM(require_react(), 1);
var ToastRootContext = React234.createContext(void 0);
if (true) ToastRootContext.displayName = "ToastRootContext";
function useToastRootContext() {
  const context = React234.useContext(ToastRootContext);
  if (!context) {
    throw new Error(true ? "Base UI: ToastRootContext is missing. Toast parts must be used within <Toast.Root>." : formatErrorMessage_default(66));
  }
  return context;
}

// node_modules/@base-ui/react/esm/toast/root/ToastRootCssVars.js
var ToastRootCssVars = (function(ToastRootCssVars2) {
  ToastRootCssVars2["index"] = "--toast-index";
  ToastRootCssVars2["offsetY"] = "--toast-offset-y";
  ToastRootCssVars2["height"] = "--toast-height";
  ToastRootCssVars2["swipeMovementX"] = "--toast-swipe-movement-x";
  ToastRootCssVars2["swipeMovementY"] = "--toast-swipe-movement-y";
  return ToastRootCssVars2;
})({});

// node_modules/@base-ui/react/esm/toast/root/ToastRoot.js
var import_jsx_runtime84 = __toESM(require_jsx_runtime(), 1);
var stateAttributesMapping30 = {
  ...transitionStatusMapping,
  swipeDirection(value) {
    return value ? {
      "data-swipe-direction": value
    } : null;
  }
};
var SWIPE_THRESHOLD = 40;
var REVERSE_CANCEL_THRESHOLD2 = 10;
var OPPOSITE_DIRECTION_DAMPING_FACTOR = 0.5;
var MIN_DRAG_THRESHOLD2 = 1;
var TOAST_SWIPE_IGNORE_SELECTOR = `${BASE_UI_SWIPE_IGNORE_SELECTOR},${LEGACY_SWIPE_IGNORE_SELECTOR}`;
function getDisplacement2(direction, deltaX, deltaY) {
  switch (direction) {
    case "up":
      return -deltaY;
    case "down":
      return deltaY;
    case "left":
      return -deltaX;
    case "right":
      return deltaX;
    default:
      return 0;
  }
}
function getElementTransform2(element) {
  const computedStyle = window.getComputedStyle(element);
  const transform = computedStyle.transform;
  let translateX = 0;
  let translateY = 0;
  let scale = 1;
  if (transform && transform !== "none") {
    const matrix = transform.match(/matrix(?:3d)?\(([^)]+)\)/);
    if (matrix) {
      const values = matrix[1].split(", ").map(parseFloat);
      if (values.length === 6) {
        translateX = values[4];
        translateY = values[5];
        scale = Math.sqrt(values[0] * values[0] + values[1] * values[1]);
      } else if (values.length === 16) {
        translateX = values[12];
        translateY = values[13];
        scale = values[0];
      }
    }
  }
  return {
    x: translateX,
    y: translateY,
    scale
  };
}
var ToastRoot = React235.forwardRef(function ToastRoot2(componentProps, forwardedRef) {
  const {
    toast,
    render,
    className,
    swipeDirection = ["down", "right"],
    ...elementProps
  } = componentProps;
  const isAnchored = toast.positionerProps?.anchor !== void 0;
  let swipeDirections = [];
  if (!isAnchored) {
    swipeDirections = Array.isArray(swipeDirection) ? swipeDirection : [swipeDirection];
  }
  const swipeEnabled = swipeDirections.length > 0;
  const store = useToastProviderContext();
  const [currentSwipeDirection, setCurrentSwipeDirection] = React235.useState(void 0);
  const [isSwiping, setIsSwiping] = React235.useState(false);
  const [isRealSwipe, setIsRealSwipe] = React235.useState(false);
  const [dragDismissed, setDragDismissed] = React235.useState(false);
  const [dragOffset, setDragOffset] = React235.useState({
    x: 0,
    y: 0
  });
  const [initialTransform, setInitialTransform] = React235.useState({
    x: 0,
    y: 0,
    scale: 1
  });
  const [titleId, setTitleId] = React235.useState();
  const [descriptionId, setDescriptionId] = React235.useState();
  const [lockedDirection, setLockedDirection] = React235.useState(null);
  const rootRef = React235.useRef(null);
  const dragStartPosRef = React235.useRef({
    x: 0,
    y: 0
  });
  const initialTransformRef = React235.useRef({
    x: 0,
    y: 0,
    scale: 1
  });
  const intendedSwipeDirectionRef = React235.useRef(void 0);
  const maxSwipeDisplacementRef = React235.useRef(0);
  const cancelledSwipeRef = React235.useRef(false);
  const swipeCancelBaselineRef = React235.useRef({
    x: 0,
    y: 0
  });
  const isFirstPointerMoveRef = React235.useRef(false);
  const domIndex = store.useState("toastIndex", toast.id);
  const visibleIndex = store.useState("toastVisibleIndex", toast.id);
  const offsetY = store.useState("toastOffsetY", toast.id);
  const focused = store.useState("focused");
  const expanded = store.useState("expanded");
  useOpenChangeComplete({
    open: toast.transitionStatus !== "ending",
    ref: rootRef,
    onComplete() {
      if (toast.transitionStatus === "ending") {
        store.removeToast(toast.id);
      }
    }
  });
  const recalculateHeight = useStableCallback((flushSync14 = false) => {
    const element2 = rootRef.current;
    if (!element2) {
      return;
    }
    const previousHeight = element2.style.height;
    element2.style.height = "auto";
    const height = element2.offsetHeight;
    element2.style.height = previousHeight;
    function update() {
      store.updateToastInternal(toast.id, {
        ref: rootRef,
        height,
        ...toast.transitionStatus === "starting" ? {
          transitionStatus: void 0
        } : {}
      });
    }
    if (flushSync14) {
      ReactDOM15.flushSync(update);
    } else {
      update();
    }
  });
  useIsoLayoutEffect(recalculateHeight, [recalculateHeight]);
  function applyDirectionalDamping(deltaX, deltaY) {
    let newDeltaX = deltaX;
    let newDeltaY = deltaY;
    if (!swipeDirections.includes("left") && !swipeDirections.includes("right")) {
      newDeltaX = deltaX > 0 ? deltaX ** OPPOSITE_DIRECTION_DAMPING_FACTOR : -(Math.abs(deltaX) ** OPPOSITE_DIRECTION_DAMPING_FACTOR);
    } else {
      if (!swipeDirections.includes("right") && deltaX > 0) {
        newDeltaX = deltaX ** OPPOSITE_DIRECTION_DAMPING_FACTOR;
      }
      if (!swipeDirections.includes("left") && deltaX < 0) {
        newDeltaX = -(Math.abs(deltaX) ** OPPOSITE_DIRECTION_DAMPING_FACTOR);
      }
    }
    if (!swipeDirections.includes("up") && !swipeDirections.includes("down")) {
      newDeltaY = deltaY > 0 ? deltaY ** OPPOSITE_DIRECTION_DAMPING_FACTOR : -(Math.abs(deltaY) ** OPPOSITE_DIRECTION_DAMPING_FACTOR);
    } else {
      if (!swipeDirections.includes("down") && deltaY > 0) {
        newDeltaY = deltaY ** OPPOSITE_DIRECTION_DAMPING_FACTOR;
      }
      if (!swipeDirections.includes("up") && deltaY < 0) {
        newDeltaY = -(Math.abs(deltaY) ** OPPOSITE_DIRECTION_DAMPING_FACTOR);
      }
    }
    return {
      x: newDeltaX,
      y: newDeltaY
    };
  }
  function handlePointerDown(event) {
    if (event.button !== 0) {
      return;
    }
    if (event.pointerType === "touch") {
      store.pauseTimers();
    }
    const target = getTarget(event.nativeEvent);
    const isInteractiveElement = target ? target.closest(`button,a,input,textarea,[role="button"],${TOAST_SWIPE_IGNORE_SELECTOR}`) : false;
    if (isInteractiveElement) {
      return;
    }
    cancelledSwipeRef.current = false;
    intendedSwipeDirectionRef.current = void 0;
    maxSwipeDisplacementRef.current = 0;
    dragStartPosRef.current = {
      x: event.clientX,
      y: event.clientY
    };
    swipeCancelBaselineRef.current = dragStartPosRef.current;
    if (rootRef.current) {
      const transform = getElementTransform2(rootRef.current);
      initialTransformRef.current = transform;
      setInitialTransform(transform);
      setDragOffset({
        x: transform.x,
        y: transform.y
      });
    }
    store.setHovering(true);
    setIsSwiping(true);
    setIsRealSwipe(false);
    setLockedDirection(null);
    isFirstPointerMoveRef.current = true;
    rootRef.current?.setPointerCapture(event.pointerId);
  }
  function handlePointerMove(event) {
    if (!isSwiping) {
      return;
    }
    event.preventDefault();
    if (isFirstPointerMoveRef.current) {
      dragStartPosRef.current = {
        x: event.clientX,
        y: event.clientY
      };
      isFirstPointerMoveRef.current = false;
    }
    const {
      clientY,
      clientX,
      movementX,
      movementY
    } = event;
    if (movementY < 0 && clientY > swipeCancelBaselineRef.current.y || movementY > 0 && clientY < swipeCancelBaselineRef.current.y) {
      swipeCancelBaselineRef.current = {
        x: swipeCancelBaselineRef.current.x,
        y: clientY
      };
    }
    if (movementX < 0 && clientX > swipeCancelBaselineRef.current.x || movementX > 0 && clientX < swipeCancelBaselineRef.current.x) {
      swipeCancelBaselineRef.current = {
        x: clientX,
        y: swipeCancelBaselineRef.current.y
      };
    }
    const deltaX = clientX - dragStartPosRef.current.x;
    const deltaY = clientY - dragStartPosRef.current.y;
    const cancelDeltaY = clientY - swipeCancelBaselineRef.current.y;
    const cancelDeltaX = clientX - swipeCancelBaselineRef.current.x;
    if (!isRealSwipe) {
      const movementDistance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
      if (movementDistance >= MIN_DRAG_THRESHOLD2) {
        setIsRealSwipe(true);
        if (lockedDirection === null) {
          const hasHorizontal = swipeDirections.includes("left") || swipeDirections.includes("right");
          const hasVertical = swipeDirections.includes("up") || swipeDirections.includes("down");
          if (hasHorizontal && hasVertical) {
            const absX = Math.abs(deltaX);
            const absY = Math.abs(deltaY);
            setLockedDirection(absX > absY ? "horizontal" : "vertical");
          }
        }
      }
    }
    let candidate;
    if (!intendedSwipeDirectionRef.current) {
      if (lockedDirection === "vertical") {
        if (deltaY > 0) {
          candidate = "down";
        } else if (deltaY < 0) {
          candidate = "up";
        }
      } else if (lockedDirection === "horizontal") {
        if (deltaX > 0) {
          candidate = "right";
        } else if (deltaX < 0) {
          candidate = "left";
        }
      } else if (Math.abs(deltaX) >= Math.abs(deltaY)) {
        candidate = deltaX > 0 ? "right" : "left";
      } else {
        candidate = deltaY > 0 ? "down" : "up";
      }
      if (candidate && swipeDirections.includes(candidate)) {
        intendedSwipeDirectionRef.current = candidate;
        maxSwipeDisplacementRef.current = getDisplacement2(candidate, deltaX, deltaY);
        setCurrentSwipeDirection(candidate);
      }
    } else {
      const direction = intendedSwipeDirectionRef.current;
      const currentDisplacement = getDisplacement2(direction, cancelDeltaX, cancelDeltaY);
      if (currentDisplacement > SWIPE_THRESHOLD) {
        cancelledSwipeRef.current = false;
        setCurrentSwipeDirection(direction);
      } else if (!(swipeDirections.includes("left") && swipeDirections.includes("right")) && !(swipeDirections.includes("up") && swipeDirections.includes("down")) && maxSwipeDisplacementRef.current - currentDisplacement >= REVERSE_CANCEL_THRESHOLD2) {
        cancelledSwipeRef.current = true;
      }
    }
    const dampedDelta = applyDirectionalDamping(deltaX, deltaY);
    let newOffsetX = initialTransformRef.current.x;
    let newOffsetY = initialTransformRef.current.y;
    if (lockedDirection === "horizontal") {
      if (swipeDirections.includes("left") || swipeDirections.includes("right")) {
        newOffsetX += dampedDelta.x;
      }
    } else if (lockedDirection === "vertical") {
      if (swipeDirections.includes("up") || swipeDirections.includes("down")) {
        newOffsetY += dampedDelta.y;
      }
    } else {
      if (swipeDirections.includes("left") || swipeDirections.includes("right")) {
        newOffsetX += dampedDelta.x;
      }
      if (swipeDirections.includes("up") || swipeDirections.includes("down")) {
        newOffsetY += dampedDelta.y;
      }
    }
    setDragOffset({
      x: newOffsetX,
      y: newOffsetY
    });
  }
  function handlePointerUp(event) {
    if (!isSwiping) {
      return;
    }
    setIsSwiping(false);
    setIsRealSwipe(false);
    setLockedDirection(null);
    rootRef.current?.releasePointerCapture(event.pointerId);
    if (cancelledSwipeRef.current) {
      setDragOffset({
        x: initialTransform.x,
        y: initialTransform.y
      });
      setCurrentSwipeDirection(void 0);
      return;
    }
    let shouldClose = false;
    const deltaX = dragOffset.x - initialTransform.x;
    const deltaY = dragOffset.y - initialTransform.y;
    let dismissDirection;
    for (const direction of swipeDirections) {
      switch (direction) {
        case "right":
          if (deltaX > SWIPE_THRESHOLD) {
            shouldClose = true;
            dismissDirection = "right";
          }
          break;
        case "left":
          if (deltaX < -SWIPE_THRESHOLD) {
            shouldClose = true;
            dismissDirection = "left";
          }
          break;
        case "down":
          if (deltaY > SWIPE_THRESHOLD) {
            shouldClose = true;
            dismissDirection = "down";
          }
          break;
        case "up":
          if (deltaY < -SWIPE_THRESHOLD) {
            shouldClose = true;
            dismissDirection = "up";
          }
          break;
        default:
          break;
      }
      if (shouldClose) {
        break;
      }
    }
    if (shouldClose) {
      setCurrentSwipeDirection(dismissDirection);
      setDragDismissed(true);
      store.closeToast(toast.id);
    } else {
      setDragOffset({
        x: initialTransform.x,
        y: initialTransform.y
      });
      setCurrentSwipeDirection(void 0);
    }
  }
  function handleKeyDown(event) {
    if (event.key === "Escape") {
      if (!rootRef.current || !contains(rootRef.current, activeElement(ownerDocument(rootRef.current)))) {
        return;
      }
      store.closeToast(toast.id);
    }
  }
  React235.useEffect(() => {
    if (!swipeEnabled) {
      return void 0;
    }
    const element2 = rootRef.current;
    if (!element2) {
      return void 0;
    }
    function preventDefaultTouchStart(event) {
      if (contains(element2, event.target)) {
        event.preventDefault();
      }
    }
    element2.addEventListener("touchmove", preventDefaultTouchStart, {
      passive: false
    });
    return () => {
      element2.removeEventListener("touchmove", preventDefaultTouchStart);
    };
  }, [swipeEnabled]);
  function getDragStyles() {
    if (!isSwiping && dragOffset.x === initialTransform.x && dragOffset.y === initialTransform.y && !dragDismissed) {
      return {
        [ToastRootCssVars.swipeMovementX]: "0px",
        [ToastRootCssVars.swipeMovementY]: "0px"
      };
    }
    const deltaX = dragOffset.x - initialTransform.x;
    const deltaY = dragOffset.y - initialTransform.y;
    return {
      transition: isSwiping ? "none" : void 0,
      // While swiping, freeze the element at its current visual transform so it doesn't snap to the
      // end position.
      transform: isSwiping ? `translateX(${dragOffset.x}px) translateY(${dragOffset.y}px) scale(${initialTransform.scale})` : void 0,
      [ToastRootCssVars.swipeMovementX]: `${deltaX}px`,
      [ToastRootCssVars.swipeMovementY]: `${deltaY}px`
    };
  }
  const isHighPriority = toast.priority === "high";
  const defaultProps = {
    role: isHighPriority ? "alertdialog" : "dialog",
    tabIndex: 0,
    "aria-modal": false,
    "aria-labelledby": titleId,
    "aria-describedby": descriptionId,
    "aria-hidden": isHighPriority && !focused ? true : void 0,
    onPointerDown: swipeEnabled ? handlePointerDown : void 0,
    onPointerMove: swipeEnabled ? handlePointerMove : void 0,
    onPointerUp: swipeEnabled ? handlePointerUp : void 0,
    onKeyDown: handleKeyDown,
    inert: inertValue(toast.limited),
    style: {
      ...getDragStyles(),
      [ToastRootCssVars.index]: toast.transitionStatus === "ending" ? domIndex : visibleIndex,
      [ToastRootCssVars.offsetY]: `${offsetY}px`,
      [ToastRootCssVars.height]: toast.height ? `${toast.height}px` : void 0
    }
  };
  const toastRoot = React235.useMemo(() => ({
    rootRef,
    toast,
    titleId,
    setTitleId,
    descriptionId,
    setDescriptionId,
    swiping: isSwiping,
    swipeDirection: currentSwipeDirection,
    recalculateHeight,
    index: domIndex,
    visibleIndex,
    expanded
  }), [toast, titleId, descriptionId, isSwiping, currentSwipeDirection, recalculateHeight, domIndex, visibleIndex, expanded]);
  const state = {
    transitionStatus: toast.transitionStatus,
    expanded,
    limited: toast.limited || false,
    type: toast.type,
    swiping: toastRoot.swiping,
    swipeDirection: toastRoot.swipeDirection
  };
  const element = useRenderElement("div", componentProps, {
    ref: [forwardedRef, toastRoot.rootRef],
    state,
    stateAttributesMapping: stateAttributesMapping30,
    props: [defaultProps, elementProps]
  });
  return (0, import_jsx_runtime84.jsx)(ToastRootContext.Provider, {
    value: toastRoot,
    children: element
  });
});
if (true) ToastRoot.displayName = "ToastRoot";

// node_modules/@base-ui/react/esm/toast/content/ToastContent.js
var React236 = __toESM(require_react(), 1);
var ToastContent = React236.forwardRef(function ToastContent2(componentProps, forwardedRef) {
  const {
    render,
    className,
    ...elementProps
  } = componentProps;
  const {
    visibleIndex,
    expanded,
    recalculateHeight
  } = useToastRootContext();
  const contentRef = React236.useRef(null);
  useIsoLayoutEffect(() => {
    const node = contentRef.current;
    if (!node) {
      return void 0;
    }
    recalculateHeight();
    if (typeof ResizeObserver !== "function" || typeof MutationObserver !== "function") {
      return void 0;
    }
    const resizeObserver = new ResizeObserver(() => recalculateHeight(true));
    const mutationObserver = new MutationObserver(() => recalculateHeight(true));
    resizeObserver.observe(node);
    mutationObserver.observe(node, {
      childList: true,
      subtree: true,
      characterData: true
    });
    return () => {
      resizeObserver.disconnect();
      mutationObserver.disconnect();
    };
  }, [recalculateHeight]);
  const behind = visibleIndex > 0;
  const state = {
    expanded,
    behind
  };
  const element = useRenderElement("div", componentProps, {
    ref: [forwardedRef, contentRef],
    state,
    props: elementProps
  });
  return element;
});
if (true) ToastContent.displayName = "ToastContent";

// node_modules/@base-ui/react/esm/toast/description/ToastDescription.js
var React237 = __toESM(require_react(), 1);
var ToastDescription = React237.forwardRef(function ToastDescription2(componentProps, forwardedRef) {
  const {
    render,
    className,
    id: idProp,
    children: childrenProp,
    ...elementProps
  } = componentProps;
  const {
    toast,
    setDescriptionId
  } = useToastRootContext();
  const children = childrenProp ?? toast.description;
  const shouldRender = Boolean(children);
  const id = useId(idProp);
  useIsoLayoutEffect(() => {
    if (!shouldRender) {
      return void 0;
    }
    setDescriptionId(id);
    return () => {
      setDescriptionId(void 0);
    };
  }, [shouldRender, id, setDescriptionId]);
  const state = {
    type: toast.type
  };
  const element = useRenderElement("p", componentProps, {
    ref: forwardedRef,
    state,
    props: {
      ...elementProps,
      id,
      children
    }
  });
  if (!shouldRender) {
    return null;
  }
  return element;
});
if (true) ToastDescription.displayName = "ToastDescription";

// node_modules/@base-ui/react/esm/toast/title/ToastTitle.js
var React238 = __toESM(require_react(), 1);
var ToastTitle = React238.forwardRef(function ToastTitle2(componentProps, forwardedRef) {
  const {
    render,
    className,
    id: idProp,
    children: childrenProp,
    ...elementProps
  } = componentProps;
  const {
    toast,
    setTitleId
  } = useToastRootContext();
  const children = childrenProp ?? toast.title;
  const shouldRender = Boolean(children);
  const id = useId(idProp);
  useIsoLayoutEffect(() => {
    if (!shouldRender) {
      return void 0;
    }
    setTitleId(id);
    return () => {
      setTitleId(void 0);
    };
  }, [shouldRender, id, setTitleId]);
  const state = {
    type: toast.type
  };
  const element = useRenderElement("h2", componentProps, {
    ref: forwardedRef,
    state,
    props: {
      ...elementProps,
      id,
      children
    }
  });
  if (!shouldRender) {
    return null;
  }
  return element;
});
if (true) ToastTitle.displayName = "ToastTitle";

// node_modules/@base-ui/react/esm/toast/close/ToastClose.js
var React239 = __toESM(require_react(), 1);
var ToastClose = React239.forwardRef(function ToastClose2(componentProps, forwardedRef) {
  const {
    render,
    className,
    disabled,
    nativeButton = true,
    ...elementProps
  } = componentProps;
  const store = useToastProviderContext();
  const {
    toast
  } = useToastRootContext();
  const expanded = store.useState("expanded");
  const [hasFocus, setHasFocus] = React239.useState(false);
  const {
    getButtonProps,
    buttonRef
  } = useButton({
    disabled,
    native: nativeButton
  });
  const state = {
    type: toast.type
  };
  const element = useRenderElement("button", componentProps, {
    ref: [forwardedRef, buttonRef],
    state,
    props: [{
      "aria-hidden": !expanded && !hasFocus,
      onClick() {
        store.closeToast(toast.id);
      },
      onFocus() {
        setHasFocus(true);
      },
      onBlur() {
        setHasFocus(false);
      }
    }, elementProps, getButtonProps]
  });
  return element;
});
if (true) ToastClose.displayName = "ToastClose";

// node_modules/@base-ui/react/esm/toast/action/ToastAction.js
var React240 = __toESM(require_react(), 1);
var ToastAction = React240.forwardRef(function ToastAction2(componentProps, forwardedRef) {
  const {
    render,
    className,
    disabled,
    nativeButton = true,
    ...elementProps
  } = componentProps;
  const {
    toast
  } = useToastRootContext();
  const computedChildren = toast.actionProps?.children ?? elementProps.children;
  const shouldRender = Boolean(computedChildren);
  const {
    getButtonProps,
    buttonRef
  } = useButton({
    disabled,
    native: nativeButton
  });
  const state = {
    type: toast.type
  };
  const element = useRenderElement("button", componentProps, {
    ref: [forwardedRef, buttonRef],
    state,
    props: [elementProps, toast.actionProps, getButtonProps, {
      children: computedChildren
    }]
  });
  if (!shouldRender) {
    return null;
  }
  return element;
});
if (true) ToastAction.displayName = "ToastAction";

// node_modules/@base-ui/react/esm/toast/portal/ToastPortal.js
var ToastPortal = FloatingPortalLite;

// node_modules/@base-ui/react/esm/toast/positioner/ToastPositioner.js
var React242 = __toESM(require_react(), 1);

// node_modules/@base-ui/react/esm/toast/positioner/ToastPositionerContext.js
var React241 = __toESM(require_react(), 1);
var ToastPositionerContext = React241.createContext(void 0);
if (true) ToastPositionerContext.displayName = "ToastPositionerContext";
function useToastPositionerContext() {
  const context = React241.useContext(ToastPositionerContext);
  if (context === void 0) {
    throw new Error(true ? "Base UI: ToastPositionerContext is missing. ToastPositioner parts must be placed within <Toast.Positioner>." : formatErrorMessage_default(84));
  }
  return context;
}

// node_modules/@base-ui/react/esm/toast/positioner/ToastPositioner.js
var import_jsx_runtime85 = __toESM(require_jsx_runtime(), 1);
var ToastPositioner = React242.forwardRef(function ToastPositioner2(componentProps, forwardedRef) {
  const {
    toast,
    ...props
  } = componentProps;
  const store = useToastProviderContext();
  const positionerProps = toast.positionerProps ?? EMPTY_OBJECT;
  const {
    render,
    className,
    anchor: anchorProp = positionerProps.anchor,
    positionMethod = positionerProps.positionMethod ?? "absolute",
    side = positionerProps.side ?? "top",
    align = positionerProps.align ?? "center",
    sideOffset = positionerProps.sideOffset ?? 0,
    alignOffset = positionerProps.alignOffset ?? 0,
    collisionBoundary = positionerProps.collisionBoundary ?? "clipping-ancestors",
    collisionPadding = positionerProps.collisionPadding ?? 5,
    arrowPadding = positionerProps.arrowPadding ?? 5,
    sticky = positionerProps.sticky ?? false,
    disableAnchorTracking = positionerProps.disableAnchorTracking ?? false,
    collisionAvoidance = positionerProps.collisionAvoidance ?? POPUP_COLLISION_AVOIDANCE,
    ...elementProps
  } = props;
  const [positionerElement, setPositionerElement] = React242.useState(null);
  const domIndex = store.useState("toastIndex", toast.id);
  const visibleIndex = store.useState("toastVisibleIndex", toast.id);
  const anchor = isElement(anchorProp) ? anchorProp : null;
  const floatingRootContext = useFloatingRootContext({
    open: true,
    onOpenChange: NOOP,
    elements: {
      floating: positionerElement,
      reference: anchor
    }
  });
  const positioning = useAnchorPositioning({
    anchor,
    positionMethod,
    floatingRootContext,
    mounted: true,
    side,
    sideOffset,
    align,
    alignOffset,
    collisionBoundary,
    collisionPadding,
    sticky,
    arrowPadding,
    disableAnchorTracking,
    keepMounted: true,
    collisionAvoidance
  });
  const defaultProps = React242.useMemo(() => {
    const hiddenStyles = {};
    return {
      role: "presentation",
      style: {
        ...positioning.positionerStyles,
        ...hiddenStyles,
        [ToastRootCssVars.index]: toast.transitionStatus === "ending" ? domIndex : visibleIndex
      }
    };
  }, [positioning.positionerStyles, toast.transitionStatus, domIndex, visibleIndex]);
  const state = React242.useMemo(() => ({
    side: positioning.side,
    align: positioning.align,
    anchorHidden: positioning.anchorHidden
  }), [positioning.side, positioning.align, positioning.anchorHidden]);
  const contextValue = React242.useMemo(() => ({
    ...state,
    arrowRef: positioning.arrowRef,
    arrowStyles: positioning.arrowStyles,
    arrowUncentered: positioning.arrowUncentered
  }), [state, positioning.arrowRef, positioning.arrowStyles, positioning.arrowUncentered]);
  const element = useRenderElement("div", componentProps, {
    state,
    props: [defaultProps, getDisabledMountTransitionStyles(toast.transitionStatus), elementProps],
    ref: [forwardedRef, setPositionerElement],
    stateAttributesMapping: popupStateMapping
  });
  return (0, import_jsx_runtime85.jsx)(ToastPositionerContext.Provider, {
    value: contextValue,
    children: element
  });
});
if (true) ToastPositioner.displayName = "ToastPositioner";

// node_modules/@base-ui/react/esm/toast/arrow/ToastArrow.js
var React243 = __toESM(require_react(), 1);
var ToastArrow = React243.forwardRef(function ToastArrow2(componentProps, forwardedRef) {
  const {
    className,
    render,
    ...elementProps
  } = componentProps;
  const {
    arrowRef,
    side,
    align,
    arrowUncentered,
    arrowStyles
  } = useToastPositionerContext();
  const state = {
    side,
    align,
    uncentered: arrowUncentered
  };
  const element = useRenderElement("div", componentProps, {
    state,
    ref: [forwardedRef, arrowRef],
    props: [{
      style: arrowStyles,
      "aria-hidden": true
    }, elementProps]
  });
  return element;
});
if (true) ToastArrow.displayName = "ToastArrow";

// node_modules/@base-ui/react/esm/toast/useToastManager.js
var React244 = __toESM(require_react(), 1);
function useToastManager() {
  const store = React244.useContext(ToastContext);
  if (!store) {
    throw new Error(true ? "Base UI: useToastManager must be used within <Toast.Provider>." : formatErrorMessage_default(73));
  }
  const toasts = store.useState("toasts");
  return React244.useMemo(() => ({
    toasts,
    add: store.addToast,
    close: store.closeToast,
    update: store.updateToast,
    promise: store.promiseToast
  }), [toasts, store]);
}

// node_modules/@base-ui/react/esm/toast/createToastManager.js
function createToastManager() {
  const listeners = /* @__PURE__ */ new Set();
  function emit(data) {
    listeners.forEach((listener) => listener(data));
  }
  return {
    // This should be private aside from ToastProvider needing to access it.
    // https://x.com/drosenwasser/status/1816947740032872664
    " subscribe": function subscribe(listener) {
      listeners.add(listener);
      return () => {
        listeners.delete(listener);
      };
    },
    add(options) {
      const id = options.id || generateId("toast");
      const toastToAdd = {
        ...options,
        id,
        transitionStatus: "starting"
      };
      emit({
        action: "add",
        options: toastToAdd
      });
      return id;
    },
    close(id) {
      emit({
        action: "close",
        options: {
          id
        }
      });
    },
    update(id, updates) {
      emit({
        action: "update",
        options: {
          ...updates,
          id
        }
      });
    },
    promise(promiseValue, options) {
      let handledPromise = promiseValue;
      emit({
        action: "promise",
        options: {
          ...options,
          promise: promiseValue,
          setPromise(promise) {
            handledPromise = promise;
          }
        }
      });
      return handledPromise;
    }
  };
}

// node_modules/@base-ui/react/esm/toggle/Toggle.js
var React246 = __toESM(require_react(), 1);

// node_modules/@base-ui/react/esm/toggle-group/ToggleGroupContext.js
var React245 = __toESM(require_react(), 1);
var ToggleGroupContext = React245.createContext(void 0);
if (true) ToggleGroupContext.displayName = "ToggleGroupContext";
function useToggleGroupContext(optional = true) {
  const context = React245.useContext(ToggleGroupContext);
  if (context === void 0 && !optional) {
    throw new Error(true ? "Base UI: ToggleGroupContext is missing. ToggleGroup parts must be placed within <ToggleGroup>." : formatErrorMessage_default(7));
  }
  return context;
}

// node_modules/@base-ui/react/esm/toggle/Toggle.js
var import_jsx_runtime86 = __toESM(require_jsx_runtime(), 1);
var Toggle = React246.forwardRef(function Toggle2(componentProps, forwardedRef) {
  const {
    className,
    defaultPressed: defaultPressedProp = false,
    disabled: disabledProp = false,
    form,
    // never participates in form validation
    onPressedChange: onPressedChangeProp,
    pressed: pressedProp,
    render,
    type,
    // cannot change button type
    value: valueProp,
    nativeButton = true,
    ...elementProps
  } = componentProps;
  const value = useBaseUiId(valueProp || void 0);
  const groupContext = useToggleGroupContext();
  const groupValue = groupContext?.value ?? [];
  const defaultPressed = groupContext ? void 0 : defaultPressedProp;
  const disabled = (disabledProp || groupContext?.disabled) ?? false;
  if (true) {
    useIsoLayoutEffect(() => {
      if (groupContext && valueProp === void 0 && groupContext.isValueInitialized) {
        error("A `<Toggle>` component rendered in a `<ToggleGroup>` has no explicit `value` prop.", "This will cause issues between the Toggle Group and Toggle values.", "Provide the `<Toggle>` with a `value` prop matching the `<ToggleGroup>` values prop type.");
      }
    }, [groupContext, valueProp, groupContext?.isValueInitialized]);
  }
  const [pressed, setPressedState] = useControlled({
    controlled: groupContext ? value !== void 0 && groupValue.indexOf(value) > -1 : pressedProp,
    default: defaultPressed,
    name: "Toggle",
    state: "pressed"
  });
  const onPressedChange = useStableCallback((nextPressed, eventDetails) => {
    if (value) {
      groupContext?.setGroupValue?.(value, nextPressed, eventDetails);
    }
    onPressedChangeProp?.(nextPressed, eventDetails);
  });
  const {
    getButtonProps,
    buttonRef
  } = useButton({
    disabled,
    native: nativeButton
  });
  const state = {
    disabled,
    pressed
  };
  const refs = [buttonRef, forwardedRef];
  const props = [{
    "aria-pressed": pressed,
    onClick(event) {
      const nextPressed = !pressed;
      const details = createChangeEventDetails(reason_parts_exports.none, event.nativeEvent);
      onPressedChange(nextPressed, details);
      if (details.isCanceled) {
        return;
      }
      setPressedState(nextPressed);
    }
  }, elementProps, getButtonProps];
  const element = useRenderElement("button", componentProps, {
    enabled: !groupContext,
    state,
    ref: refs,
    props
  });
  if (groupContext) {
    return (0, import_jsx_runtime86.jsx)(CompositeItem, {
      tag: "button",
      render,
      className,
      state,
      refs,
      props
    });
  }
  return element;
});
if (true) Toggle.displayName = "Toggle";

// node_modules/@base-ui/react/esm/toggle-group/ToggleGroup.js
var React247 = __toESM(require_react(), 1);

// node_modules/@base-ui/react/esm/toggle-group/ToggleGroupDataAttributes.js
var ToggleGroupDataAttributes = (function(ToggleGroupDataAttributes2) {
  ToggleGroupDataAttributes2["disabled"] = "data-disabled";
  ToggleGroupDataAttributes2["orientation"] = "data-orientation";
  ToggleGroupDataAttributes2["multiple"] = "data-multiple";
  return ToggleGroupDataAttributes2;
})({});

// node_modules/@base-ui/react/esm/toggle-group/ToggleGroup.js
var import_jsx_runtime87 = __toESM(require_jsx_runtime(), 1);
var stateAttributesMapping31 = {
  multiple(value) {
    if (value) {
      return {
        [ToggleGroupDataAttributes.multiple]: ""
      };
    }
    return null;
  }
};
var ToggleGroup = React247.forwardRef(function ToggleGroup2(componentProps, forwardedRef) {
  const {
    defaultValue: defaultValueProp,
    disabled: disabledProp = false,
    loopFocus = true,
    onValueChange,
    orientation = "horizontal",
    multiple = false,
    value: valueProp,
    className,
    render,
    ...elementProps
  } = componentProps;
  const toolbarContext = useToolbarRootContext(true);
  const defaultValue = React247.useMemo(() => {
    if (valueProp === void 0) {
      return defaultValueProp ?? [];
    }
    return void 0;
  }, [valueProp, defaultValueProp]);
  const isValueInitialized = React247.useMemo(() => valueProp !== void 0 || defaultValueProp !== void 0, [valueProp, defaultValueProp]);
  const disabled = (toolbarContext?.disabled ?? false) || disabledProp;
  const [groupValue, setValueState] = useControlled({
    controlled: valueProp,
    default: defaultValue,
    name: "ToggleGroup",
    state: "value"
  });
  const setGroupValue = useStableCallback((newValue, nextPressed, eventDetails) => {
    let newGroupValue;
    if (multiple) {
      newGroupValue = groupValue.slice();
      if (nextPressed) {
        newGroupValue.push(newValue);
      } else {
        newGroupValue.splice(groupValue.indexOf(newValue), 1);
      }
    } else {
      newGroupValue = nextPressed ? [newValue] : [];
    }
    if (Array.isArray(newGroupValue)) {
      onValueChange?.(newGroupValue, eventDetails);
      if (eventDetails.isCanceled) {
        return;
      }
      setValueState(newGroupValue);
    }
  });
  const state = {
    disabled,
    multiple,
    orientation
  };
  const contextValue = React247.useMemo(() => ({
    disabled,
    orientation,
    setGroupValue,
    value: groupValue,
    isValueInitialized
  }), [disabled, orientation, setGroupValue, groupValue, isValueInitialized]);
  const defaultProps = {
    role: "group"
  };
  const element = useRenderElement("div", componentProps, {
    enabled: Boolean(toolbarContext),
    state,
    ref: forwardedRef,
    props: [defaultProps, elementProps],
    stateAttributesMapping: stateAttributesMapping31
  });
  return (0, import_jsx_runtime87.jsx)(ToggleGroupContext.Provider, {
    value: contextValue,
    children: toolbarContext ? element : (0, import_jsx_runtime87.jsx)(CompositeRoot, {
      render,
      className,
      state,
      refs: [forwardedRef],
      props: [defaultProps, elementProps],
      stateAttributesMapping: stateAttributesMapping31,
      loopFocus,
      enableHomeAndEndKeys: true
    })
  });
});
if (true) ToggleGroup.displayName = "ToggleGroup";

// node_modules/@base-ui/react/esm/toolbar/index.parts.js
var index_parts_exports27 = {};
__export(index_parts_exports27, {
  Button: () => ToolbarButton,
  Group: () => ToolbarGroup,
  Input: () => ToolbarInput,
  Link: () => ToolbarLink,
  Root: () => ToolbarRoot,
  Separator: () => ToolbarSeparator
});

// node_modules/@base-ui/react/esm/toolbar/separator/ToolbarSeparator.js
var React248 = __toESM(require_react(), 1);
var import_jsx_runtime88 = __toESM(require_jsx_runtime(), 1);
var ToolbarSeparator = React248.forwardRef(function ToolbarSeparator2(props, forwardedRef) {
  const context = useToolbarRootContext();
  const orientation = {
    vertical: "horizontal",
    horizontal: "vertical"
  }[context.orientation];
  return (0, import_jsx_runtime88.jsx)(Separator, {
    orientation,
    ...props,
    ref: forwardedRef
  });
});
if (true) ToolbarSeparator.displayName = "ToolbarSeparator";

// node_modules/@base-ui/react/esm/toolbar/root/ToolbarRoot.js
var React249 = __toESM(require_react(), 1);
var import_jsx_runtime89 = __toESM(require_jsx_runtime(), 1);
var ToolbarRoot = React249.forwardRef(function ToolbarRoot2(componentProps, forwardedRef) {
  const {
    disabled = false,
    loopFocus = true,
    orientation = "horizontal",
    className,
    render,
    ...elementProps
  } = componentProps;
  const [itemMap, setItemMap] = React249.useState(() => /* @__PURE__ */ new Map());
  const disabledIndices = React249.useMemo(() => {
    const output = [];
    for (const itemMetadata of itemMap.values()) {
      if (itemMetadata?.index && !itemMetadata.focusableWhenDisabled) {
        output.push(itemMetadata.index);
      }
    }
    return output;
  }, [itemMap]);
  const toolbarRootContext = React249.useMemo(() => ({
    disabled,
    orientation,
    setItemMap
  }), [disabled, orientation, setItemMap]);
  const state = {
    disabled,
    orientation
  };
  const defaultProps = {
    "aria-orientation": orientation,
    role: "toolbar"
  };
  return (0, import_jsx_runtime89.jsx)(ToolbarRootContext.Provider, {
    value: toolbarRootContext,
    children: (0, import_jsx_runtime89.jsx)(CompositeRoot, {
      render,
      className,
      state,
      refs: [forwardedRef],
      props: [defaultProps, elementProps],
      disabledIndices,
      loopFocus,
      onMapChange: setItemMap,
      orientation
    })
  });
});
if (true) ToolbarRoot.displayName = "ToolbarRoot";

// node_modules/@base-ui/react/esm/toolbar/group/ToolbarGroup.js
var React251 = __toESM(require_react(), 1);

// node_modules/@base-ui/react/esm/toolbar/group/ToolbarGroupContext.js
var React250 = __toESM(require_react(), 1);
var ToolbarGroupContext = React250.createContext(void 0);
if (true) ToolbarGroupContext.displayName = "ToolbarGroupContext";
function useToolbarGroupContext(optional) {
  const context = React250.useContext(ToolbarGroupContext);
  if (context === void 0 && !optional) {
    throw new Error(true ? "Base UI: ToolbarGroupContext is missing. ToolbarGroup parts must be placed within <Toolbar.Group>." : formatErrorMessage_default(68));
  }
  return context;
}

// node_modules/@base-ui/react/esm/toolbar/group/ToolbarGroup.js
var import_jsx_runtime90 = __toESM(require_jsx_runtime(), 1);
var ToolbarGroup = React251.forwardRef(function ToolbarGroup2(componentProps, forwardedRef) {
  const {
    className,
    disabled: disabledProp = false,
    render,
    ...elementProps
  } = componentProps;
  const {
    orientation,
    disabled: toolbarDisabled
  } = useToolbarRootContext();
  const disabled = toolbarDisabled || disabledProp;
  const contextValue = React251.useMemo(() => ({
    disabled
  }), [disabled]);
  const state = {
    disabled,
    orientation
  };
  const element = useRenderElement("div", componentProps, {
    state,
    ref: forwardedRef,
    props: [{
      role: "group"
    }, elementProps]
  });
  return (0, import_jsx_runtime90.jsx)(ToolbarGroupContext.Provider, {
    value: contextValue,
    children: element
  });
});
if (true) ToolbarGroup.displayName = "ToolbarGroup";

// node_modules/@base-ui/react/esm/toolbar/button/ToolbarButton.js
var React252 = __toESM(require_react(), 1);
var import_jsx_runtime91 = __toESM(require_jsx_runtime(), 1);
var ToolbarButton = React252.forwardRef(function ToolbarButton2(componentProps, forwardedRef) {
  const {
    className,
    disabled: disabledProp = false,
    focusableWhenDisabled = true,
    render,
    nativeButton = true,
    ...elementProps
  } = componentProps;
  const itemMetadata = React252.useMemo(() => ({
    focusableWhenDisabled
  }), [focusableWhenDisabled]);
  const {
    disabled: toolbarDisabled,
    orientation
  } = useToolbarRootContext();
  const groupContext = useToolbarGroupContext(true);
  const disabled = toolbarDisabled || (groupContext?.disabled ?? false) || disabledProp;
  const {
    getButtonProps,
    buttonRef
  } = useButton({
    disabled,
    focusableWhenDisabled,
    native: nativeButton
  });
  const state = {
    disabled,
    orientation,
    focusable: focusableWhenDisabled
  };
  return (0, import_jsx_runtime91.jsx)(CompositeItem, {
    tag: "button",
    render,
    className,
    metadata: itemMetadata,
    state,
    refs: [forwardedRef, buttonRef],
    props: [
      elementProps,
      // for integrating with Menu and Select disabled states, `disabled` is
      // intentionally duplicated even though getButtonProps includes it already
      // TODO: follow up after https://github.com/mui/base-ui/issues/1976#issuecomment-2916905663
      {
        disabled
      },
      getButtonProps
    ]
  });
});
if (true) ToolbarButton.displayName = "ToolbarButton";

// node_modules/@base-ui/react/esm/toolbar/link/ToolbarLink.js
var React253 = __toESM(require_react(), 1);
var import_jsx_runtime92 = __toESM(require_jsx_runtime(), 1);
var TOOLBAR_LINK_METADATA = {
  // links cannot be disabled, this metadata is only used for deriving `disabledIndices``
  // TODO: better name
  focusableWhenDisabled: true
};
var ToolbarLink = React253.forwardRef(function ToolbarLink2(componentProps, forwardedRef) {
  const {
    className,
    render,
    ...elementProps
  } = componentProps;
  const {
    orientation
  } = useToolbarRootContext();
  const state = {
    orientation
  };
  return (0, import_jsx_runtime92.jsx)(CompositeItem, {
    tag: "a",
    render,
    className,
    metadata: TOOLBAR_LINK_METADATA,
    state,
    refs: [forwardedRef],
    props: [elementProps]
  });
});
if (true) ToolbarLink.displayName = "ToolbarLink";

// node_modules/@base-ui/react/esm/toolbar/input/ToolbarInput.js
var React254 = __toESM(require_react(), 1);
var import_jsx_runtime93 = __toESM(require_jsx_runtime(), 1);
var ToolbarInput = React254.forwardRef(function ToolbarInput2(componentProps, forwardedRef) {
  const {
    className,
    focusableWhenDisabled = true,
    render,
    disabled: disabledProp = false,
    ...elementProps
  } = componentProps;
  const itemMetadata = React254.useMemo(() => ({
    focusableWhenDisabled
  }), [focusableWhenDisabled]);
  const {
    disabled: toolbarDisabled,
    orientation
  } = useToolbarRootContext();
  const groupContext = useToolbarGroupContext(true);
  const disabled = toolbarDisabled || (groupContext?.disabled ?? false) || disabledProp;
  const {
    props: focusableWhenDisabledProps
  } = useFocusableWhenDisabled({
    composite: true,
    disabled,
    focusableWhenDisabled,
    isNativeButton: false
  });
  const state = {
    disabled,
    orientation,
    focusable: focusableWhenDisabled
  };
  const defaultProps = {
    onClick(event) {
      if (disabled) {
        event.preventDefault();
      }
    },
    onKeyDown(event) {
      if (event.key !== ARROW_LEFT && event.key !== ARROW_RIGHT && disabled) {
        stopEvent(event);
      }
    },
    onPointerDown(event) {
      if (disabled) {
        event.preventDefault();
      }
    }
  };
  return (0, import_jsx_runtime93.jsx)(CompositeItem, {
    tag: "input",
    render,
    className,
    metadata: itemMetadata,
    state,
    refs: [forwardedRef],
    props: [defaultProps, elementProps, focusableWhenDisabledProps]
  });
});
if (true) ToolbarInput.displayName = "ToolbarInput";

// node_modules/@base-ui/react/esm/tooltip/index.parts.js
var index_parts_exports28 = {};
__export(index_parts_exports28, {
  Arrow: () => TooltipArrow,
  Handle: () => TooltipHandle,
  Popup: () => TooltipPopup,
  Portal: () => TooltipPortal,
  Positioner: () => TooltipPositioner,
  Provider: () => TooltipProvider,
  Root: () => TooltipRoot,
  Trigger: () => TooltipTrigger,
  Viewport: () => TooltipViewport,
  createHandle: () => createTooltipHandle
});

// node_modules/@base-ui/react/esm/tooltip/root/TooltipRoot.js
var React257 = __toESM(require_react(), 1);

// node_modules/@base-ui/react/esm/tooltip/root/TooltipRootContext.js
var React255 = __toESM(require_react(), 1);
var TooltipRootContext = React255.createContext(void 0);
if (true) TooltipRootContext.displayName = "TooltipRootContext";
function useTooltipRootContext(optional) {
  const context = React255.useContext(TooltipRootContext);
  if (context === void 0 && !optional) {
    throw new Error(true ? "Base UI: TooltipRootContext is missing. Tooltip parts must be placed within <Tooltip.Root>." : formatErrorMessage_default(72));
  }
  return context;
}

// node_modules/@base-ui/react/esm/tooltip/store/TooltipStore.js
var React256 = __toESM(require_react(), 1);
var ReactDOM16 = __toESM(require_react_dom(), 1);
var selectors7 = {
  ...popupStoreSelectors,
  disabled: createSelector((state) => state.disabled),
  instantType: createSelector((state) => state.instantType),
  isInstantPhase: createSelector((state) => state.isInstantPhase),
  trackCursorAxis: createSelector((state) => state.trackCursorAxis),
  disableHoverablePopup: createSelector((state) => state.disableHoverablePopup),
  lastOpenChangeReason: createSelector((state) => state.openChangeReason),
  closeOnClick: createSelector((state) => state.closeOnClick),
  closeDelay: createSelector((state) => state.closeDelay),
  hasViewport: createSelector((state) => state.hasViewport)
};
var TooltipStore = class _TooltipStore extends ReactStore {
  constructor(initialState) {
    super({
      ...createInitialState5(),
      ...initialState
    }, {
      popupRef: React256.createRef(),
      onOpenChange: void 0,
      onOpenChangeComplete: void 0,
      triggerElements: new PopupTriggerMap()
    }, selectors7);
  }
  setOpen = (nextOpen, eventDetails) => {
    const reason = eventDetails.reason;
    const isHover = reason === reason_parts_exports.triggerHover;
    const isFocusOpen = nextOpen && reason === reason_parts_exports.triggerFocus;
    const isDismissClose = !nextOpen && (reason === reason_parts_exports.triggerPress || reason === reason_parts_exports.escapeKey);
    eventDetails.preventUnmountOnClose = () => {
      this.set("preventUnmountingOnClose", true);
    };
    this.context.onOpenChange?.(nextOpen, eventDetails);
    if (eventDetails.isCanceled) {
      return;
    }
    const changeState = () => {
      const updatedState = {
        open: nextOpen,
        openChangeReason: reason
      };
      if (isFocusOpen) {
        updatedState.instantType = "focus";
      } else if (isDismissClose) {
        updatedState.instantType = "dismiss";
      } else if (reason === reason_parts_exports.triggerHover) {
        updatedState.instantType = void 0;
      }
      const newTriggerId = eventDetails.trigger?.id ?? null;
      if (newTriggerId || nextOpen) {
        updatedState.activeTriggerId = newTriggerId;
        updatedState.activeTriggerElement = eventDetails.trigger ?? null;
      }
      this.update(updatedState);
    };
    if (isHover) {
      ReactDOM16.flushSync(changeState);
    } else {
      changeState();
    }
  };
  static useStore(externalStore, initialState) {
    const internalStore = useRefWithInit(() => {
      return new _TooltipStore(initialState);
    }).current;
    const store = externalStore ?? internalStore;
    const floatingRootContext = useSyncedFloatingRootContext({
      popupStore: store,
      onOpenChange: store.setOpen
    });
    store.state.floatingRootContext = floatingRootContext;
    return store;
  }
};
function createInitialState5() {
  return {
    ...createInitialPopupStoreState(),
    disabled: false,
    instantType: void 0,
    isInstantPhase: false,
    trackCursorAxis: "none",
    disableHoverablePopup: false,
    openChangeReason: null,
    closeOnClick: true,
    closeDelay: 0,
    hasViewport: false
  };
}

// node_modules/@base-ui/react/esm/tooltip/root/TooltipRoot.js
var import_jsx_runtime94 = __toESM(require_jsx_runtime(), 1);
var TooltipRoot = fastComponent(function TooltipRoot2(props) {
  const {
    disabled = false,
    defaultOpen = false,
    open: openProp,
    disableHoverablePopup = false,
    trackCursorAxis = "none",
    actionsRef,
    onOpenChange,
    onOpenChangeComplete,
    handle,
    triggerId: triggerIdProp,
    defaultTriggerId: defaultTriggerIdProp = null,
    children
  } = props;
  const store = TooltipStore.useStore(handle?.store, {
    open: defaultOpen,
    openProp,
    activeTriggerId: defaultTriggerIdProp,
    triggerIdProp
  });
  useOnFirstRender(() => {
    if (openProp === void 0 && store.state.open === false && defaultOpen === true) {
      store.update({
        open: true,
        activeTriggerId: defaultTriggerIdProp
      });
    }
  });
  store.useControlledProp("openProp", openProp);
  store.useControlledProp("triggerIdProp", triggerIdProp);
  store.useContextCallback("onOpenChange", onOpenChange);
  store.useContextCallback("onOpenChangeComplete", onOpenChangeComplete);
  const openState = store.useState("open");
  const open = !disabled && openState;
  const activeTriggerId = store.useState("activeTriggerId");
  const payload = store.useState("payload");
  store.useSyncedValues({
    trackCursorAxis,
    disableHoverablePopup
  });
  useIsoLayoutEffect(() => {
    if (openState && disabled) {
      store.setOpen(false, createChangeEventDetails(reason_parts_exports.disabled));
    }
  }, [openState, disabled, store]);
  store.useSyncedValue("disabled", disabled);
  useImplicitActiveTrigger(store);
  const {
    forceUnmount,
    transitionStatus
  } = useOpenStateTransitions(open, store);
  const isInstantPhase = store.useState("isInstantPhase");
  const instantType = store.useState("instantType");
  const lastOpenChangeReason = store.useState("lastOpenChangeReason");
  const previousInstantTypeRef = React257.useRef(null);
  useIsoLayoutEffect(() => {
    if (transitionStatus === "ending" && lastOpenChangeReason === reason_parts_exports.none || transitionStatus !== "ending" && isInstantPhase) {
      if (instantType !== "delay") {
        previousInstantTypeRef.current = instantType;
      }
      store.set("instantType", "delay");
    } else if (previousInstantTypeRef.current !== null) {
      store.set("instantType", previousInstantTypeRef.current);
      previousInstantTypeRef.current = null;
    }
  }, [transitionStatus, isInstantPhase, lastOpenChangeReason, instantType, store]);
  useIsoLayoutEffect(() => {
    if (open) {
      if (activeTriggerId == null) {
        store.set("payload", void 0);
      }
    }
  }, [store, activeTriggerId, open]);
  const handleImperativeClose = React257.useCallback(() => {
    store.setOpen(false, createTooltipEventDetails(store, reason_parts_exports.imperativeAction));
  }, [store]);
  React257.useImperativeHandle(actionsRef, () => ({
    unmount: forceUnmount,
    close: handleImperativeClose
  }), [forceUnmount, handleImperativeClose]);
  const floatingRootContext = store.useState("floatingRootContext");
  const dismiss = useDismiss(floatingRootContext, {
    enabled: !disabled,
    referencePress: () => store.select("closeOnClick")
  });
  const clientPoint = useClientPoint(floatingRootContext, {
    enabled: !disabled && trackCursorAxis !== "none",
    axis: trackCursorAxis === "none" ? void 0 : trackCursorAxis
  });
  const {
    getReferenceProps,
    getFloatingProps,
    getTriggerProps
  } = useInteractions([dismiss, clientPoint]);
  const activeTriggerProps = React257.useMemo(() => getReferenceProps(), [getReferenceProps]);
  const inactiveTriggerProps = React257.useMemo(() => getTriggerProps(), [getTriggerProps]);
  const popupProps = React257.useMemo(() => getFloatingProps(), [getFloatingProps]);
  store.useSyncedValues({
    activeTriggerProps,
    inactiveTriggerProps,
    popupProps
  });
  return (0, import_jsx_runtime94.jsx)(TooltipRootContext.Provider, {
    value: store,
    children: typeof children === "function" ? children({
      payload
    }) : children
  });
});
if (true) TooltipRoot.displayName = "TooltipRoot";
function createTooltipEventDetails(store, reason) {
  const details = createChangeEventDetails(reason);
  details.preventUnmountOnClose = () => {
    store.set("preventUnmountingOnClose", true);
  };
  return details;
}

// node_modules/@base-ui/react/esm/tooltip/trigger/TooltipTrigger.js
var React259 = __toESM(require_react(), 1);

// node_modules/@base-ui/react/esm/tooltip/provider/TooltipProviderContext.js
var React258 = __toESM(require_react(), 1);
var TooltipProviderContext = React258.createContext(void 0);
if (true) TooltipProviderContext.displayName = "TooltipProviderContext";
function useTooltipProviderContext() {
  return React258.useContext(TooltipProviderContext);
}

// node_modules/@base-ui/react/esm/tooltip/trigger/TooltipTriggerDataAttributes.js
var TooltipTriggerDataAttributes = (function(TooltipTriggerDataAttributes2) {
  TooltipTriggerDataAttributes2[TooltipTriggerDataAttributes2["popupOpen"] = CommonTriggerDataAttributes.popupOpen] = "popupOpen";
  TooltipTriggerDataAttributes2["triggerDisabled"] = "data-trigger-disabled";
  return TooltipTriggerDataAttributes2;
})({});

// node_modules/@base-ui/react/esm/tooltip/utils/constants.js
var OPEN_DELAY3 = 600;

// node_modules/@base-ui/react/esm/tooltip/trigger/TooltipTrigger.js
var TooltipTrigger = fastComponentRef(function TooltipTrigger2(componentProps, forwardedRef) {
  const {
    className,
    render,
    handle,
    payload,
    disabled: disabledProp,
    delay,
    closeOnClick = true,
    closeDelay,
    id: idProp,
    ...elementProps
  } = componentProps;
  const rootContext = useTooltipRootContext(true);
  const store = handle?.store ?? rootContext;
  if (!store) {
    throw new Error(true ? "Base UI: <Tooltip.Trigger> must be either used within a <Tooltip.Root> component or provided with a handle." : formatErrorMessage_default(82));
  }
  const thisTriggerId = useBaseUiId(idProp);
  const isTriggerActive = store.useState("isTriggerActive", thisTriggerId);
  const isOpenedByThisTrigger = store.useState("isOpenedByTrigger", thisTriggerId);
  const floatingRootContext = store.useState("floatingRootContext");
  const triggerElementRef = React259.useRef(null);
  const delayWithDefault = delay ?? OPEN_DELAY3;
  const closeDelayWithDefault = closeDelay ?? 0;
  const {
    registerTrigger,
    isMountedByThisTrigger
  } = useTriggerDataForwarding(thisTriggerId, triggerElementRef, store, {
    payload,
    closeOnClick,
    closeDelay: closeDelayWithDefault
  });
  const providerContext = useTooltipProviderContext();
  const {
    delayRef,
    isInstantPhase,
    hasProvider
  } = useDelayGroup(floatingRootContext, {
    open: isOpenedByThisTrigger
  });
  store.useSyncedValue("isInstantPhase", isInstantPhase);
  const rootDisabled = store.useState("disabled");
  const disabled = disabledProp ?? rootDisabled;
  const trackCursorAxis = store.useState("trackCursorAxis");
  const disableHoverablePopup = store.useState("disableHoverablePopup");
  const hoverProps = useHoverReferenceInteraction(floatingRootContext, {
    enabled: !disabled,
    mouseOnly: true,
    move: false,
    handleClose: !disableHoverablePopup && trackCursorAxis !== "both" ? safePolygon() : null,
    restMs() {
      const providerDelay = providerContext?.delay;
      const groupOpenValue = typeof delayRef.current === "object" ? delayRef.current.open : void 0;
      let computedRestMs = delayWithDefault;
      if (hasProvider) {
        if (groupOpenValue !== 0) {
          computedRestMs = delay ?? providerDelay ?? delayWithDefault;
        } else {
          computedRestMs = 0;
        }
      }
      return computedRestMs;
    },
    delay() {
      const closeValue = typeof delayRef.current === "object" ? delayRef.current.close : void 0;
      let computedCloseDelay = closeDelayWithDefault;
      if (closeDelay == null && hasProvider) {
        computedCloseDelay = closeValue;
      }
      return {
        close: computedCloseDelay
      };
    },
    triggerElementRef,
    isActiveTrigger: isTriggerActive
  });
  const focusProps = useFocus(floatingRootContext, {
    enabled: !disabled
  }).reference;
  const state = {
    open: isOpenedByThisTrigger
  };
  const rootTriggerProps = store.useState("triggerProps", isMountedByThisTrigger);
  const element = useRenderElement("button", componentProps, {
    state,
    ref: [forwardedRef, registerTrigger, triggerElementRef],
    props: [hoverProps, focusProps, rootTriggerProps, {
      onPointerDown() {
        store.set("closeOnClick", closeOnClick);
      },
      id: thisTriggerId,
      [TooltipTriggerDataAttributes.triggerDisabled]: disabled ? "" : void 0
    }, elementProps],
    stateAttributesMapping: triggerOpenStateMapping
  });
  return element;
});
if (true) TooltipTrigger.displayName = "TooltipTrigger";

// node_modules/@base-ui/react/esm/tooltip/portal/TooltipPortal.js
var React261 = __toESM(require_react(), 1);

// node_modules/@base-ui/react/esm/tooltip/portal/TooltipPortalContext.js
var React260 = __toESM(require_react(), 1);
var TooltipPortalContext = React260.createContext(void 0);
if (true) TooltipPortalContext.displayName = "TooltipPortalContext";
function useTooltipPortalContext() {
  const value = React260.useContext(TooltipPortalContext);
  if (value === void 0) {
    throw new Error(true ? "Base UI: <Tooltip.Portal> is missing." : formatErrorMessage_default(70));
  }
  return value;
}

// node_modules/@base-ui/react/esm/tooltip/portal/TooltipPortal.js
var import_jsx_runtime95 = __toESM(require_jsx_runtime(), 1);
var TooltipPortal = React261.forwardRef(function TooltipPortal2(props, forwardedRef) {
  const {
    keepMounted = false,
    ...portalProps
  } = props;
  const store = useTooltipRootContext();
  const mounted = store.useState("mounted");
  const shouldRender = mounted || keepMounted;
  if (!shouldRender) {
    return null;
  }
  return (0, import_jsx_runtime95.jsx)(TooltipPortalContext.Provider, {
    value: keepMounted,
    children: (0, import_jsx_runtime95.jsx)(FloatingPortalLite, {
      ref: forwardedRef,
      ...portalProps
    })
  });
});
if (true) TooltipPortal.displayName = "TooltipPortal";

// node_modules/@base-ui/react/esm/tooltip/positioner/TooltipPositioner.js
var React263 = __toESM(require_react(), 1);

// node_modules/@base-ui/react/esm/tooltip/positioner/TooltipPositionerContext.js
var React262 = __toESM(require_react(), 1);
var TooltipPositionerContext = React262.createContext(void 0);
if (true) TooltipPositionerContext.displayName = "TooltipPositionerContext";
function useTooltipPositionerContext() {
  const context = React262.useContext(TooltipPositionerContext);
  if (context === void 0) {
    throw new Error(true ? "Base UI: TooltipPositionerContext is missing. TooltipPositioner parts must be placed within <Tooltip.Positioner>." : formatErrorMessage_default(71));
  }
  return context;
}

// node_modules/@base-ui/react/esm/tooltip/positioner/TooltipPositioner.js
var import_jsx_runtime96 = __toESM(require_jsx_runtime(), 1);
var TooltipPositioner = React263.forwardRef(function TooltipPositioner2(componentProps, forwardedRef) {
  const {
    render,
    className,
    anchor,
    positionMethod = "absolute",
    side = "top",
    align = "center",
    sideOffset = 0,
    alignOffset = 0,
    collisionBoundary = "clipping-ancestors",
    collisionPadding = 5,
    arrowPadding = 5,
    sticky = false,
    disableAnchorTracking = false,
    collisionAvoidance = POPUP_COLLISION_AVOIDANCE,
    ...elementProps
  } = componentProps;
  const store = useTooltipRootContext();
  const keepMounted = useTooltipPortalContext();
  const open = store.useState("open");
  const mounted = store.useState("mounted");
  const trackCursorAxis = store.useState("trackCursorAxis");
  const disableHoverablePopup = store.useState("disableHoverablePopup");
  const floatingRootContext = store.useState("floatingRootContext");
  const instantType = store.useState("instantType");
  const transitionStatus = store.useState("transitionStatus");
  const hasViewport = store.useState("hasViewport");
  const positioning = useAnchorPositioning({
    anchor,
    positionMethod,
    floatingRootContext,
    mounted,
    side,
    sideOffset,
    align,
    alignOffset,
    collisionBoundary,
    collisionPadding,
    sticky,
    arrowPadding,
    disableAnchorTracking,
    keepMounted,
    collisionAvoidance,
    adaptiveOrigin: hasViewport ? adaptiveOrigin : void 0
  });
  const defaultProps = React263.useMemo(() => {
    const hiddenStyles = {};
    if (!open || trackCursorAxis === "both" || disableHoverablePopup) {
      hiddenStyles.pointerEvents = "none";
    }
    return {
      role: "presentation",
      hidden: !mounted,
      style: {
        ...positioning.positionerStyles,
        ...hiddenStyles
      }
    };
  }, [open, trackCursorAxis, disableHoverablePopup, mounted, positioning.positionerStyles]);
  const state = React263.useMemo(() => ({
    open,
    side: positioning.side,
    align: positioning.align,
    anchorHidden: positioning.anchorHidden,
    instant: trackCursorAxis !== "none" ? "tracking-cursor" : instantType
  }), [open, positioning.side, positioning.align, positioning.anchorHidden, trackCursorAxis, instantType]);
  const contextValue = React263.useMemo(() => ({
    ...state,
    arrowRef: positioning.arrowRef,
    arrowStyles: positioning.arrowStyles,
    arrowUncentered: positioning.arrowUncentered
  }), [state, positioning.arrowRef, positioning.arrowStyles, positioning.arrowUncentered]);
  const element = useRenderElement("div", componentProps, {
    state,
    props: [defaultProps, getDisabledMountTransitionStyles(transitionStatus), elementProps],
    ref: [forwardedRef, store.useStateSetter("positionerElement")],
    stateAttributesMapping: popupStateMapping
  });
  return (0, import_jsx_runtime96.jsx)(TooltipPositionerContext.Provider, {
    value: contextValue,
    children: element
  });
});
if (true) TooltipPositioner.displayName = "TooltipPositioner";

// node_modules/@base-ui/react/esm/tooltip/popup/TooltipPopup.js
var React264 = __toESM(require_react(), 1);
var stateAttributesMapping32 = {
  ...popupStateMapping,
  ...transitionStatusMapping
};
var TooltipPopup = React264.forwardRef(function TooltipPopup2(componentProps, forwardedRef) {
  const {
    className,
    render,
    ...elementProps
  } = componentProps;
  const store = useTooltipRootContext();
  const {
    side,
    align
  } = useTooltipPositionerContext();
  const open = store.useState("open");
  const instantType = store.useState("instantType");
  const transitionStatus = store.useState("transitionStatus");
  const popupProps = store.useState("popupProps");
  const floatingContext = store.useState("floatingRootContext");
  useOpenChangeComplete({
    open,
    ref: store.context.popupRef,
    onComplete() {
      if (open) {
        store.context.onOpenChangeComplete?.(true);
      }
    }
  });
  const disabled = store.useState("disabled");
  const closeDelay = store.useState("closeDelay");
  useHoverFloatingInteraction(floatingContext, {
    enabled: !disabled,
    closeDelay
  });
  const state = {
    open,
    side,
    align,
    instant: instantType,
    transitionStatus
  };
  const element = useRenderElement("div", componentProps, {
    state,
    ref: [forwardedRef, store.context.popupRef, store.useStateSetter("popupElement")],
    props: [popupProps, getDisabledMountTransitionStyles(transitionStatus), elementProps],
    stateAttributesMapping: stateAttributesMapping32
  });
  return element;
});
if (true) TooltipPopup.displayName = "TooltipPopup";

// node_modules/@base-ui/react/esm/tooltip/arrow/TooltipArrow.js
var React265 = __toESM(require_react(), 1);
var TooltipArrow = React265.forwardRef(function TooltipArrow2(componentProps, forwardedRef) {
  const {
    className,
    render,
    ...elementProps
  } = componentProps;
  const store = useTooltipRootContext();
  const instantType = store.useState("instantType");
  const {
    open,
    arrowRef,
    side,
    align,
    arrowUncentered,
    arrowStyles
  } = useTooltipPositionerContext();
  const state = {
    open,
    side,
    align,
    uncentered: arrowUncentered,
    instant: instantType
  };
  const element = useRenderElement("div", componentProps, {
    state,
    ref: [forwardedRef, arrowRef],
    props: [{
      style: arrowStyles,
      "aria-hidden": true
    }, elementProps],
    stateAttributesMapping: popupStateMapping
  });
  return element;
});
if (true) TooltipArrow.displayName = "TooltipArrow";

// node_modules/@base-ui/react/esm/tooltip/provider/TooltipProvider.js
var React266 = __toESM(require_react(), 1);
var import_jsx_runtime97 = __toESM(require_jsx_runtime(), 1);
var TooltipProvider = function TooltipProvider2(props) {
  const {
    delay,
    closeDelay,
    timeout = 400
  } = props;
  const contextValue = React266.useMemo(() => ({
    delay,
    closeDelay
  }), [delay, closeDelay]);
  const delayValue = React266.useMemo(() => ({
    open: delay,
    close: closeDelay
  }), [delay, closeDelay]);
  return (0, import_jsx_runtime97.jsx)(TooltipProviderContext.Provider, {
    value: contextValue,
    children: (0, import_jsx_runtime97.jsx)(FloatingDelayGroup, {
      delay: delayValue,
      timeoutMs: timeout,
      children: props.children
    })
  });
};
if (true) TooltipProvider.displayName = "TooltipProvider";

// node_modules/@base-ui/react/esm/tooltip/viewport/TooltipViewport.js
var React267 = __toESM(require_react(), 1);

// node_modules/@base-ui/react/esm/tooltip/viewport/TooltipViewportCssVars.js
var TooltipViewportCssVars = (function(TooltipViewportCssVars2) {
  TooltipViewportCssVars2["popupWidth"] = "--popup-width";
  TooltipViewportCssVars2["popupHeight"] = "--popup-height";
  return TooltipViewportCssVars2;
})({});

// node_modules/@base-ui/react/esm/tooltip/viewport/TooltipViewport.js
var stateAttributesMapping33 = {
  activationDirection: (value) => value ? {
    "data-activation-direction": value
  } : null
};
var TooltipViewport = React267.forwardRef(function TooltipViewport2(componentProps, forwardedRef) {
  const {
    render,
    className,
    children,
    ...elementProps
  } = componentProps;
  const store = useTooltipRootContext();
  const positioner = useTooltipPositionerContext();
  const instantType = store.useState("instantType");
  const {
    children: childrenToRender,
    state: viewportState
  } = usePopupViewport({
    store,
    side: positioner.side,
    cssVars: TooltipViewportCssVars,
    children
  });
  const state = {
    activationDirection: viewportState.activationDirection,
    transitioning: viewportState.transitioning,
    instant: instantType
  };
  return useRenderElement("div", componentProps, {
    state,
    ref: forwardedRef,
    props: [elementProps, {
      children: childrenToRender
    }],
    stateAttributesMapping: stateAttributesMapping33
  });
});
if (true) TooltipViewport.displayName = "TooltipViewport";

// node_modules/@base-ui/react/esm/tooltip/store/TooltipHandle.js
var TooltipHandle = class {
  /**
   * Internal store holding the tooltip state.
   * @internal
   */
  constructor() {
    this.store = new TooltipStore();
  }
  /**
   * Opens the tooltip and associates it with the trigger with the given ID.
   * The trigger must be a Tooltip.Trigger component with this handle passed as a prop.
   *
   * This method should only be called in an event handler or an effect (not during rendering).
   *
   * @param triggerId ID of the trigger to associate with the tooltip.
   */
  open(triggerId) {
    const triggerElement = triggerId ? this.store.context.triggerElements.getById(triggerId) : void 0;
    if (triggerId && !triggerElement) {
      throw new Error(true ? `Base UI: TooltipHandle.open: No trigger found with id "${triggerId}".` : formatErrorMessage_default(81, triggerId));
    }
    this.store.setOpen(true, createChangeEventDetails(reason_parts_exports.imperativeAction, void 0, triggerElement));
  }
  /**
   * Closes the tooltip.
   */
  close() {
    this.store.setOpen(false, createChangeEventDetails(reason_parts_exports.imperativeAction, void 0, void 0));
  }
  /**
   * Indicates whether the tooltip is currently open.
   */
  get isOpen() {
    return this.store.state.open;
  }
};
function createTooltipHandle() {
  return new TooltipHandle();
}

// node_modules/@base-ui/react/esm/use-render/useRender.js
function useRender(params) {
  return useRenderElement(params.defaultTagName ?? "div", params, params);
}
export {
  index_parts_exports4 as Accordion,
  index_parts_exports5 as AlertDialog,
  index_parts_exports6 as Autocomplete,
  index_parts_exports7 as Avatar,
  Button,
  CSPProvider,
  index_parts_exports8 as Checkbox,
  CheckboxGroup,
  index_parts_exports9 as Collapsible,
  index_parts_exports10 as Combobox,
  index_parts_exports12 as ContextMenu,
  index_parts_exports13 as Dialog,
  DirectionProvider,
  index_parts_exports14 as Drawer,
  index_parts_exports2 as Field,
  index_parts_exports15 as Fieldset,
  Form,
  Input,
  index_parts_exports11 as Menu,
  Menubar,
  index_parts_exports16 as Meter,
  index_parts_exports17 as NavigationMenu,
  index_parts_exports18 as NumberField,
  index_parts_exports19 as Popover,
  index_parts_exports20 as PreviewCard,
  index_parts_exports21 as Progress,
  index_parts_exports22 as Radio,
  RadioGroup,
  index_parts_exports23 as ScrollArea,
  index_parts_exports3 as Select,
  Separator,
  index_parts_exports24 as Slider,
  index_parts_exports25 as Switch,
  index_parts_exports as Tabs,
  index_parts_exports26 as Toast,
  Toggle,
  ToggleGroup,
  index_parts_exports27 as Toolbar,
  index_parts_exports28 as Tooltip,
  makeEventPreventable,
  mergeClassNames,
  mergeProps,
  mergePropsN,
  useDirection,
  useRender
};
//# sourceMappingURL=@base-ui_react.js.map
