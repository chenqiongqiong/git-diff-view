import { composeLen, type DiffFile } from "@git-diff-view/core";
import * as React from "react";

import { hunkContentBGName, hunkContentColorName, hunkLineNumberBGName, plainLineNumberColorName } from "./color";
import { ExpandAll, ExpandDown, ExpandUp } from "./DiffExpand";

export const DiffSplitHunkLine = ({
  index,
  diffFile,
  lineNumber,
}: {
  index: number;
  diffFile: DiffFile;
  lineNumber: number;
}) => {
  const currentHunk = diffFile.getSplitHunkLine(index);

  const expandEnabled = diffFile.getExpandEnabled();

  const isExpandAll =
    currentHunk &&
    currentHunk.splitInfo &&
    currentHunk.splitInfo.endHiddenIndex - currentHunk.splitInfo.startHiddenIndex < composeLen;

  const currentIsShow =
    currentHunk &&
    currentHunk.splitInfo &&
    currentHunk.splitInfo.startHiddenIndex < currentHunk.splitInfo.endHiddenIndex;

  const isFirstLine = currentHunk && currentHunk.index === 0;

  const isLastLine = currentHunk && currentHunk.isLast;

  if (!currentIsShow) return null;

  return (
    <tr data-line={`${lineNumber}-hunk`} data-state="hunk" className="diff-line diff-line-hunk">
      <td
        className="diff-line-hunk-action p-[1px] w-[1%] min-w-[40px] select-none"
        style={{
          backgroundColor: `var(${hunkLineNumberBGName})`,
          color: `var(${plainLineNumberColorName})`,
        }}
      >
        {expandEnabled ? (
          isFirstLine ? (
            <button
              className="w-full diff-widget-tooltip hover:bg-blue-300 flex justify-center items-center py-[6px] cursor-pointer rounded-[2px]"
              title="Expand Up"
              data-title="Expand Up"
              onClick={() => diffFile.onSplitHunkExpand("up", index)}
            >
              <ExpandUp className="fill-current" />
            </button>
          ) : isLastLine ? (
            <button
              className="w-full diff-widget-tooltip hover:bg-blue-300 flex justify-center items-center py-[6px] cursor-pointer rounded-[2px]"
              title="Expand Down"
              data-title="Expand Down"
              onClick={() => diffFile.onSplitHunkExpand("down", index)}
            >
              <ExpandDown className="fill-current" />
            </button>
          ) : isExpandAll ? (
            <button
              className="w-full diff-widget-tooltip hover:bg-blue-300 flex justify-center items-center py-[6px] cursor-pointer rounded-[2px]"
              title="Expand All"
              data-title="Expand All"
              onClick={() => diffFile.onSplitHunkExpand("all", index)}
            >
              <ExpandAll className="fill-current" />
            </button>
          ) : (
            <>
              <button
                className="w-full diff-widget-tooltip hover:bg-blue-300 flex justify-center items-center py-[2px] cursor-pointer rounded-[2px]"
                title="Expand Down"
                data-title="Expand Down"
                onClick={() => diffFile.onSplitHunkExpand("down", index)}
              >
                <ExpandDown className="fill-current" />
              </button>
              <button
                className="w-full diff-widget-tooltip hover:bg-blue-300 flex justify-center items-center py-[2px] cursor-pointer rounded-[2px]"
                title="Expand Up"
                data-title="Expand Up"
                onClick={() => diffFile.onSplitHunkExpand("up", index)}
              >
                <ExpandUp className="fill-current" />
              </button>
            </>
          )
        ) : (
          <div className="min-h-[28px]">&ensp;</div>
        )}
      </td>
      <td
        className="diff-line-hunk-content pr-[10px] align-middle"
        style={{ backgroundColor: `var(${hunkContentBGName})` }}
        colSpan={3}
      >
        <div
          className="pl-[1.5em]"
          style={{
            color: `var(${hunkContentColorName})`,
          }}
        >
          {currentHunk.splitInfo.plainText}
        </div>
      </td>
    </tr>
  );
};
