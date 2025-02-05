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
