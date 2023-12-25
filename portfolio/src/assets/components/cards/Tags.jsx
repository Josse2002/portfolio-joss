import { Tooltip } from "react-tooltip";

export function Tags({ icon, tooltipText }) {
  return (
    <div>
      <button
        aria-label={tooltipText}
        data-tooltip-id="my-tooltip"
        data-tooltip-content={tooltipText}
        data-tooltip-place="bottom"
        className="text-2xl my-3 mr-3 text-green-950 font-medium"
      >
        <i className={`${icon}`}></i>
      </button>

      <Tooltip id="my-tooltip" place="bottom" />
    </div>
  );
}
