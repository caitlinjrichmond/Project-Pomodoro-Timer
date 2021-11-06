import React from "react";

function SetDuration({session, focusDuration, setFocusDuration, breakDuration, setBreakDuration}) {

    return (
        <div className="row">
        <div className="col">
          <div className="input-group input-group-lg mb-2">
            <span className="input-group-text" data-testid="duration-focus">
              {/* TODO: Update this text to display the current focus session duration */}
              Focus Duration: {focusDuration.toString().padStart(2, "0")}:00
            </span>
            <div className="input-group-append">
              {/* TODO: Implement decreasing focus duration and disable during a focus or break session */}
              <button
                onClick={() => {setFocusDuration(focusDuration <= 5 ? 5 : focusDuration > 60 ? 60 : focusDuration - 5)}}
                disabled={session}
                type="button"
                className="btn btn-secondary"
                data-testid="decrease-focus"
              >
                <span className="oi oi-minus" />
              </button>
              {/* TODO: Implement increasing focus duration  and disable during a focus or break session */}
              <button
                onClick={() => {setFocusDuration(focusDuration < 5 ? 5 : focusDuration >= 60 ? 60 : focusDuration + 5)}}
                disabled={session}
                type="button"
                className="btn btn-secondary"
                data-testid="increase-focus"
              >
                <span className="oi oi-plus" />
              </button>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="float-right">
            <div className="input-group input-group-lg mb-2">
              <span className="input-group-text" data-testid="duration-break">
                {/* TODO: Update this text to display the current break session duration */}
                Break Duration: {breakDuration.toString().padStart(2, "0")}:00
              </span>
              <div className="input-group-append">
                {/* TODO: Implement decreasing break duration and disable during a focus or break session*/}
                <button
                  onClick={() => {setBreakDuration(breakDuration <= 1 ? 1 : breakDuration > 15 ? 15 : breakDuration - 1)}}
                  disabled={session}
                  type="button"
                  className="btn btn-secondary"
                  data-testid="decrease-break"
                >
                  <span className="oi oi-minus" />
                </button>
                {/* TODO: Implement increasing break duration and disable during a focus or break session*/}
                <button
                  onClick={() => {setBreakDuration(breakDuration < 1 ? 1 : breakDuration >= 15 ? 15 : breakDuration + 1)}}
                  disabled={session}
                  type="button"
                  className="btn btn-secondary"
                  data-testid="increase-break"
                >
                  <span className="oi oi-plus" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default SetDuration