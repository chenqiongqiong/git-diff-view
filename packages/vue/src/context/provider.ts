import type { DiffModeEnum, SplitSide } from "..";
import type { DiffFileExtends } from "../utils";
import type { InjectionKey, Ref, Slot } from "vue";

export const idSymbol: InjectionKey<Ref<string>> = Symbol();

export const modeSymbol: InjectionKey<Ref<DiffModeEnum>> = Symbol();

export const fontSizeSymbol: InjectionKey<Ref<number>> = Symbol();

export const enableWrapSymbol: InjectionKey<Ref<boolean>> = Symbol();

export const enableHighlightSymbol: InjectionKey<Ref<boolean>> = Symbol();

export const enableAddWidgetSymbol: InjectionKey<Ref<boolean>> = Symbol();

export const slotsSymbol: InjectionKey<{
  widget: Slot<{ lineNumber: number; side: SplitSide; diffFile: DiffFileExtends; onClose: () => void }>;
  extend: Slot<{ lineNumber: number; side: SplitSide; data: any; diffFile: DiffFileExtends; onUpdate: () => void }>;
}> = Symbol();

export const extendDataSymbol: InjectionKey<Ref<{ oldFile?: Record<string, { data: any }>; newFile?: Record<string, { data: any }> }>> = Symbol();

export const onAddWidgetClickSymbol: InjectionKey<(event: "onAddWidgetClick", lineNumber: number, side: SplitSide) => void> = Symbol();
