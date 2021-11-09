import React from "react";

function SessionDisplay({secondsToDuration, session, focusDuration, breakDuration}) {
    return (
       (session ? 
       <>
        <div className="row mb-2">
          <div className="col">
            {/* TODO: Update message below to include current session (Focusing or On Break) total duration */}
            <h2 data-testid="session-title">
              {session?.label} for {(session.label === "Focusing" ? focusDuration.toString().padStart(2, "0") : session.label === "On Break" ? breakDuration.toString().padStart(2, "0") : null)}:00 minutes
            </h2>
            {/* TODO: Update message below correctly format the time remaining in the current session */}
            <p className="lead" data-testid="session-sub-title">
              {secondsToDuration(session?.timeRemaining)} remaining
            </p>
          </div>
        </div>
        <div className="row mb-2">
          <div className="col">
            <div className="progress" style={{ height: "20px" }}>
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuemin="0"
                aria-valuemax="100"
                aria-valuenow={session.percentComplete}
                style={{ width: `${session.percentComplete}%` }}// TODO: Increase width % as elapsed time increases
              />
            </div>
          </div>
        </div>
        </> 
        : null)
    );
};

export default SessionDisplay