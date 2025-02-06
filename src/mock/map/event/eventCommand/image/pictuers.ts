import * as RpgTypes from "@sigureya/rpgtypes";

export const MockShowPicture: RpgTypes.Command_ShowPicture = {
  code: RpgTypes.SHOW_PICTURE,
  indent: 0,
  parameters: [1, "showPicture", 0, 0, 0, 0, 255, 0, 0],
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

export const MockTintPicture: RpgTypes.Command_TintPicture = {
  code: RpgTypes.TINT_PICTURE,
  indent: 0,
  parameters: [[255, 255, 255, 255], 0, 0, false],
};

export const MockRotatePicture: RpgTypes.Command_RotatePicture = {
  code: RpgTypes.ROTATE_PICTURE,
  indent: 0,
  parameters: [1, 0],
};
