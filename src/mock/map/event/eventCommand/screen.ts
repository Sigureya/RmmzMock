import * as RpgTypes from "@sigureya/rpgtypes";
import { MockColorRGBA } from "./params";
export const MockShakeScreen: RpgTypes.Command_ShakeScreen = {
  code: RpgTypes.SHAKE_SCREEN,
  indent: 0,
  parameters: [5, 5, 5, false],
};

export const MockFlashScreen: RpgTypes.Command_FlashScreen = {
  code: RpgTypes.FLASH_SCREEN,
  indent: 0,
  parameters: [[255, 255, 255, 255], 0, false],
};

export const MockWait: RpgTypes.Command_Wait = {
  code: RpgTypes.WAIT,
  indent: 0,
  parameters: [60],
};
export const MockTintScreen: RpgTypes.Command_TintScreen = {
  code: RpgTypes.TINT_SCREEN,
  indent: 0,
  parameters: [MockColorRGBA, 0, false],
};
