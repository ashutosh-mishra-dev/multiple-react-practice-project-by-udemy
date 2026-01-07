// src/App.js
import React, { useReducer, useEffect } from "react";
import "../css/LifecycleDemo.css";

// Initial State
const initialState = {
  count: 0,
  loading: false,
  message: "Ready to start",
  history: [],
};

// Reducer Function
function counterReducer(state, action) {
  console.log("🔄 REDUCER FUNCTION CALLED");
  console.log("📥 Current State:", JSON.stringify(state, null, 2));
  console.log("📨 Action Received:", JSON.stringify(action, null, 2));
  console.log("🕐 Timestamp:", new Date().toLocaleTimeString());
  console.log("================================");

  // Add action to history
  const newHistory = [
    ...state.history,
    {
      action: action.type,
      timestamp: new Date().toLocaleTimeString(),
      previousCount: state.count,
    },
  ];

  switch (action.type) {
    case "INCREMENT":
      console.log("✅ Processing INCREMENT action");
      const incrementState = {
        ...state,
        count: state.count + 1,
        message: `Count incremented! (${state.count} → ${state.count + 1})`,
        history: newHistory,
      };
      console.log(
        "📤 New State (INCREMENT):",
        JSON.stringify(incrementState, null, 2)
      );
      return incrementState;

    case "DECREMENT":
      console.log("✅ Processing DECREMENT action");
      const decrementState = {
        ...state,
        count: state.count - 1,
        message: `Count decremented! (${state.count} → ${state.count - 1})`,
        history: newHistory,
      };
      console.log(
        "📤 New State (DECREMENT):",
        JSON.stringify(decrementState, null, 2)
      );
      return decrementState;

    case "RESET":
      console.log("✅ Processing RESET action");
      const resetState = {
        ...initialState,
        message: "Reset completed! All values back to initial state",
        history: [...newHistory],
      };
      console.log("📤 New State (RESET):", JSON.stringify(resetState, null, 2));
      return resetState;

    case "START_LOADING":
      console.log("✅ Processing START_LOADING action");
      const loadingState = {
        ...state,
        loading: true,
        message: "Processing async operation... Please wait 2 seconds",
        history: newHistory,
      };
      console.log(
        "📤 New State (START_LOADING):",
        JSON.stringify(loadingState, null, 2)
      );
      return loadingState;

    case "FINISH_ASYNC":
      console.log("✅ Processing FINISH_ASYNC action");
      const finishState = {
        ...state,
        count: state.count + action.payload,
        loading: false,
        message: `Async operation completed! Added ${action.payload} to count`,
        history: newHistory,
      };
      console.log(
        "📤 New State (FINISH_ASYNC):",
        JSON.stringify(finishState, null, 2)
      );
      return finishState;

    case "MULTIPLY":
      console.log("✅ Processing MULTIPLY action");
      const multiplyState = {
        ...state,
        count: state.count * action.payload,
        message: `Count multiplied by ${action.payload}! (${state.count} × ${
          action.payload
        } = ${state.count * action.payload})`,
        history: newHistory,
      };
      console.log(
        "📤 New State (MULTIPLY):",
        JSON.stringify(multiplyState, null, 2)
      );
      return multiplyState;

    case "SET_CUSTOM":
      console.log("✅ Processing SET_CUSTOM action");
      const customState = {
        ...state,
        count: action.payload,
        message: `Count set to custom value: ${action.payload}`,
        history: newHistory,
      };
      console.log(
        "📤 New State (SET_CUSTOM):",
        JSON.stringify(customState, null, 2)
      );
      return customState;

    default:
      console.warn("❌ Unknown action type:", action.type);
      console.log("📤 Returning current state (no changes)");
      return state;
  }
}

function LifecycleDemo() {
  console.log("🚀 APP COMPONENT RENDER STARTED");

  // useReducer Hook
  const [state, dispatch] = useReducer(counterReducer, initialState);

  console.log("📊 Current state in component:", state);

  // useEffect to track state changes
  useEffect(() => {
    console.log("🎯 useEffect TRIGGERED - State changed");
    console.log("📋 New state in useEffect:", JSON.stringify(state, null, 2));
    console.log("🎨 Component will re-render with new state");

    // You can add side effects here
    if (state.count > 10) {
      console.log("🚨 High count detected:", state.count);
    }

    if (state.count < 0) {
      console.log("⚠️ Negative count detected:", state.count);
    }
  }, [state]);

  // Event Handlers
  const handleIncrement = () => {
    console.log("👆 USER ACTION: Increment button clicked");
    console.log("📤 Dispatching INCREMENT action");
    dispatch({ type: "INCREMENT" });
  };

  const handleDecrement = () => {
    console.log("👇 USER ACTION: Decrement button clicked");
    console.log("📤 Dispatching DECREMENT action");
    dispatch({ type: "DECREMENT" });
  };

  const handleReset = () => {
    console.log("🔄 USER ACTION: Reset button clicked");
    console.log("📤 Dispatching RESET action");
    dispatch({ type: "RESET" });
  };

  const handleAsyncIncrement = () => {
    console.log("⏳ USER ACTION: Async increment button clicked");
    console.log("📤 Dispatching START_LOADING action");
    dispatch({ type: "START_LOADING" });

    console.log("⏰ Starting 2-second timeout for async operation...");
    setTimeout(() => {
      console.log("✅ Async timeout completed!");
      console.log("📤 Dispatching FINISH_ASYNC action with payload: 5");
      dispatch({
        type: "FINISH_ASYNC",
        payload: 5,
      });
    }, 2000);
  };

  const handleMultiply = () => {
    console.log("✖️ USER ACTION: Multiply button clicked");
    console.log("📤 Dispatching MULTIPLY action with payload: 2");
    dispatch({ type: "MULTIPLY", payload: 2 });
  };

  const handleCustomValue = () => {
    const customValue = parseInt(prompt("Enter a custom number:") || "0");
    console.log(
      "🎯 USER ACTION: Set custom value clicked, value:",
      customValue
    );
    console.log("📤 Dispatching SET_CUSTOM action with payload:", customValue);
    dispatch({ type: "SET_CUSTOM", payload: customValue });
  };

  console.log("🏁 APP COMPONENT RENDER COMPLETED");

  return (
    <div className="app-container">
      <div className="app-header">
        <h1>useReducer Lifecycle Demo</h1>
        <p>Complete implementation with Create React App</p>
      </div>

      <div className="app-content">
        {/* Status Display */}
        <div className="status-card">
          <div className="count-display">Count: {state.count}</div>
          <div className="message">{state.message}</div>
          {state.loading && (
            <div className="loading">
              <div className="spinner"></div>
              Processing async operation...
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="button-grid">
          <div className="button-row">
            <button
              className="btn btn-success"
              onClick={handleIncrement}
              disabled={state.loading}>
              ➕ Increment
            </button>
            <button
              className="btn btn-danger"
              onClick={handleDecrement}
              disabled={state.loading}>
              ➖ Decrement
            </button>
          </div>

          <div className="button-row">
            <button
              className="btn btn-primary"
              onClick={handleMultiply}
              disabled={state.loading}>
              ✖️ Multiply by 2
            </button>
            <button
              className="btn btn-secondary"
              onClick={handleCustomValue}
              disabled={state.loading}>
              🎯 Set Custom Value
            </button>
          </div>

          <button
            className="btn btn-primary btn-full"
            onClick={handleAsyncIncrement}
            disabled={state.loading}>
            {state.loading ? "⏳ Processing..." : "⏳ Async +5 (2 sec delay)"}
          </button>

          <button
            className="btn btn-secondary btn-full"
            onClick={handleReset}
            disabled={state.loading}>
            🔄 Reset Everything
          </button>
        </div>

        {/* Info Box */}
        <div className="info-box">
          <strong>💡 Debug Information:</strong>
          <br />
          Open browser console (Press F12) to see complete lifecycle logs, state
          changes, and understand the useReducer flow in real-time!
        </div>

        {/* Current State Display */}
        <div className="debug-info">
          <h4>📊 Current State Object (Live):</h4>
          <pre>{JSON.stringify(state, null, 2)}</pre>
        </div>

        {/* Action History */}
        {state.history.length > 0 && (
          <div className="debug-info">
            <h4>📜 Action History (Last 5):</h4>
            <pre>{JSON.stringify(state.history.slice(-5), null, 2)}</pre>
          </div>
        )}

        {/* Lifecycle Information */}
        <div className="lifecycle-info">
          <h3>🔄 useReducer Lifecycle Steps</h3>
          <ol className="lifecycle-steps">
            <li>
              Component renders and useReducer initializes with initialState
            </li>
            <li>User interaction (button click) triggers an event handler</li>
            <li>Event handler calls dispatch() function with action object</li>
            <li>React calls reducer function with current state and action</li>
            <li>Reducer function processes action and returns new state</li>
            <li>React compares old state vs new state (shallow comparison)</li>
            <li>If state changed, React schedules component re-render</li>
            <li>Component re-renders with updated state values</li>
            <li>useEffect runs (if state dependencies changed)</li>
            <li>DOM updates with new values and cycle completes</li>
          </ol>
        </div>

        {/* Performance Tips */}
        <div className="info-box">
          <strong>🚀 Performance Tips:</strong>
          <br />
          • Use React.memo() for child components to prevent unnecessary
          re-renders
          <br />
          • Keep reducer functions pure (no side effects)
          <br />
          • Use useCallback() for event handlers if passing to child components
          <br />• Consider splitting large reducers into smaller ones
        </div>
      </div>
    </div>
  );
}
export default LifecycleDemo;
