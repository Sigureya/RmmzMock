import * as RpgTypes from "@sigureya/rpgtypes";
import { MockColorRGBA } from "../params";

export const MockTintScreen: RpgTypes.Command_TintScreen = {
  code: RpgTypes.TINT_SCREEN,
  indent: 0,
  parameters: [MockColorRGBA, 0, false],
};

export const MockFlashScreen: RpgTypes.Command_FlashScreen = {
  code: RpgTypes.FLASH_SCREEN,
  indent: 0,
  parameters: [MockColorRGBA, 0, false],
};

export const MockChangeVehicleImage: RpgTypes.Command_ChangeVehicleImage = {
  code: RpgTypes.CHANGE_VEHICLE_IMAGE,
  indent: 0,
  parameters: [0, "vehicle", 0],
};
