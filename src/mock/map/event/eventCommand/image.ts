import * as RpgTypes from "@sigureya/rpgtypes";
import { MockColorRGBA } from "./params";

export const MockShowPicture: RpgTypes.Command_ShowPicture = {
  code: RpgTypes.SHOW_PICTURE,
  indent: 0,
  parameters: [1, "showPicture", 0, 0, 0, 0, 255, 0, 0],
};
export const MockChangeActorImages: RpgTypes.Command_ChangeActorImages = {
  code: RpgTypes.CHANGE_ACTOR_IMAGES,
  indent: 0,
  parameters: [1, "character", 0, "face", 2, "svBattler"],
};

export const MockChangePallax: RpgTypes.Command_ChangeParallax = {
  code: RpgTypes.CHANGE_PARALLAX,
  indent: 0,
  parameters: ["parallax", false, false, 0, 0],
};

export const MockMovePicture: RpgTypes.Command_MovePicture = {
  code: RpgTypes.MOVE_PICTURE,
  indent: 0,
  parameters: [1, 0, 0, 0, 0, 0, 255, 0, false, 0],
};
export const MockErasePicture: RpgTypes.Command_ErasePicture = {
  code: RpgTypes.ERASE_PICTURE,
  indent: 0,
  parameters: [1],
};
export const MockTintScreen: RpgTypes.Command_TintScreen = {
  code: RpgTypes.TINT_SCREEN,
  indent: 0,
  parameters: [MockColorRGBA, 0, false],
};
