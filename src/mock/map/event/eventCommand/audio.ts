import * as RpgTypes from "@sigureya/rpgtypes";

export const MockPlayBGM: RpgTypes.Command_PlayBGM = {
  code: RpgTypes.PLAY_BGM,
  indent: 0,
  parameters: [
    {
      name: "playBGM",
      volume: 100,
      pan: 0,
      pitch: 100,
    },
  ],
};

export const MockPlayBGS: RpgTypes.Command_PlayBGS = {
  code: RpgTypes.PLAY_BGS,
  indent: 0,
  parameters: [
    {
      name: "playBGS",
      volume: 100,
      pan: 0,
      pitch: 100,
    },
  ],
};

export const MockPlayME: RpgTypes.Command_PlayME = {
  code: RpgTypes.PLAY_ME,
  indent: 0,
  parameters: [
    {
      name: "playME",
      volume: 100,
      pan: 0,
      pitch: 100,
    },
  ],
};

export const MockPlaySE: RpgTypes.Command_PlaySE = {
  code: RpgTypes.PLAY_SE,
  indent: 0,
  parameters: [
    {
      name: "playSE",
      volume: 100,
      pan: 0,
      pitch: 100,
    },
  ],
};

export const MockStopBGM: RpgTypes.Command_FadeOutBGM = {
  code: RpgTypes.FADEOUT_BGM,
  indent: 0,
  parameters: [0],
};

export const MockStopBGS: RpgTypes.Command_FadeOutBGS = {
  code: RpgTypes.FADEOUT_BGS,
  indent: 0,
  parameters: [0],
};

export const MockChangeBattleBGM: RpgTypes.Command_ChangeBattleBGM = {
  code: RpgTypes.CHANGE_BATTLE_BGM,
  indent: 0,
  parameters: [
    {
      name: "changeBattleBGM",
      volume: 100,
      pan: 0,
      pitch: 100,
    },
  ],
};

export const MockChangeVictoryME: RpgTypes.Command_ChangeVictoryME = {
  code: RpgTypes.CHANGE_VICTORY_ME,
  indent: 0,
  parameters: [
    {
      name: "changeVictoryME",
      volume: 100,
      pan: 0,
      pitch: 100,
    },
  ],
};
export const MockChangeDefeatME: RpgTypes.Command_ChangeDefeatME = {
  code: RpgTypes.CHANGE_DEFEAT_ME,
  indent: 0,
  parameters: [
    {
      name: "changeDefeatME",
      volume: 100,
      pan: 0,
      pitch: 100,
    },
  ],
};

export const MockStopSE: RpgTypes.Command_StopSE = {
  code: RpgTypes.STOP_SE,
  indent: 0,
  parameters: [],
};
export const MockFadeOutBGM: RpgTypes.Command_FadeOutBGM = {
  code: RpgTypes.FADEOUT_BGM,
  indent: 0,
  parameters: [0],
};
