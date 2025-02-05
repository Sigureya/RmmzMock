import * as RpgTypes from "@sigureya/rpgtypes";
export const MockGameOver: RpgTypes.Command_GameOver = {
  code: RpgTypes.GAME_OVER,
  indent: 0,
  parameters: [],
};

export const MockBattleProcessing: RpgTypes.Command_BattleProcessing = {
  code: RpgTypes.BATTLE_PROCESSING,
  indent: 0,
  parameters: [0, 0, false, false],
};
