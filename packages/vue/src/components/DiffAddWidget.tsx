import { addWidgetBGName, addWidgetColorName } from "./color";

import type { SplitSide } from "./DiffView";
import type { DiffFileExtends } from "../utils/diff-file-extend";

export const DiffSplitAddWidget = ({
  diffFile,
  side,
  lineNumber,
  onWidgetClick,
}: {
  index: number;
  lineNumber: number;
  diffFile: DiffFileExtends;
  side: SplitSide;
  onWidgetClick?: (event: "onAddWidgetClick", lineNumber: number, side: SplitSide) => void;
}) => {
  return (
    <div
      class="diff-add-widget-wrapper absolute left-[100%] top-[1px] translate-x-[-50%]"
      style={{
        width: "calc(var(--diff-font-size--) * 1.4)",
        height: "calc(var(--diff-font-size--) * 1.4)",
      }}
    >
      <button
        class="diff-add-widget absolute overflow-hidden cursor-pointer rounded-md w-0 h-0 left-0 top-0 flex items-center justify-center transition-transform origin-center group-hover:w-full group-hover:h-full hover:scale-110"
        style={{
          color: `var(${addWidgetColorName})`,
          zIndex: 1,
          fontSize: `1.2em`,
          backgroundColor: `var(${addWidgetBGName})`,
        }}
        onClick={() => {
          diffFile.onOpenAddWidget(lineNumber, side);
          onWidgetClick?.("onAddWidgetClick", lineNumber, side);
        }}
      >
        +
      </button>
    </div>
  );
};

export const DiffUnifiedAddWidget = ({
  diffFile,
  lineNumber,
  side,
  onWidgetClick,
}: {
  index: number;
  diffFile: DiffFileExtends;
  lineNumber: number;
  side: SplitSide;
  onWidgetClick?: (lineNumber: number, side: SplitSide) => void;
}) => {
  return (
    <div
      class="diff-add-widget-wrapper absolute left-[100%] top-[1px] translate-x-[-50%]"
      style={{
        width: "calc(var(--diff-font-size--) * 1.4)",
        height: "calc(var(--diff-font-size--) * 1.4)",
      }}
    >
      <button
        class="diff-add-widget absolute overflow-hidden cursor-pointer rounded-md w-0 h-0 left-0 top-0 flex items-center justify-center transition-transform origin-center group-hover:w-full group-hover:h-full hover:scale-110"
        style={{
          color: `var(${addWidgetColorName})`,
          zIndex: 1,
          fontSize: `1.2em`,
          backgroundColor: `var(${addWidgetBGName})`,
        }}
        onClick={() => {
          diffFile.onOpenAddWidget(lineNumber, side);
          onWidgetClick?.(lineNumber, side);
        }}
      >
        +
      </button>
    </div>
  );
};