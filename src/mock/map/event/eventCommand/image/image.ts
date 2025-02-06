import * as RpgTypes from "@sigureya/rpgtypes";

export const MockChangeVehicleImage: RpgTypes.Command_ChangeVehicleImage = {
  code: RpgTypes.CHANGE_VEHICLE_IMAGE,
  indent: 0,
  parameters: [0, "vehicle", 0],
};

export const MockChangeParallax: RpgTypes.Command_ChangeParallax = {
  code: RpgTypes.CHANGE_PARALLAX,
  indent: 0,
  parameters: ["parallax", false, false, 0, 0],
};

export const MockChangeBattleBackground: RpgTypes.Command_ChangeBattleBackground =
  {
    code: RpgTypes.CHANGE_BATTLE_BACKGROUND,
    indent: 0,
    parameters: ["battleback1", "battleback2"],
  };

export const MockChangeActorImages: RpgTypes.Command_ChangeActorImages = {
  code: RpgTypes.CHANGE_ACTOR_IMAGES,
  indent: 0,
  parameters: [1, "character", 0, "face", 2, "svBattler"],
};
