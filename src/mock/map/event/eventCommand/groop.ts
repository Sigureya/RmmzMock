import * as RpgTypes from "@sigureya/rpgtypes";
export const MockShowMessage: RpgTypes.Command_ShowMessage = {
  code: RpgTypes.SHOW_MESSAGE,
  indent: 0,
  parameters: ["face", 0, 0, 2, "speaker"],
};

export const MockShowMessageBody: RpgTypes.Command_ShowMessageBody = {
  code: RpgTypes.SHOW_MESSAGE_BODY,
  indent: 0,
  parameters: ["message1"],
};

export const MockComment: RpgTypes.Command_Comment = {
  code: RpgTypes.COMMENT,
  indent: 0,
  parameters: ["comment"],
};

export const MockCommentBody: RpgTypes.Command_CommentBody = {
  code: RpgTypes.COMMENT_BODY,
  indent: 0,
  parameters: ["comment"],
};

export const MockShowScrollText: RpgTypes.Command_ShowScrollingText = {
  code: RpgTypes.SHOW_SCROLLING_TEXT,
  indent: 0,
  parameters: [0, false],
};

export const MockShowScrollTextBody: RpgTypes.Command_ShowScrollingTextBody = {
  code: RpgTypes.SHOW_SCROLLING_TEXT_BODY,
  indent: 0,
  parameters: ["scrollText"],
};

export const MockScriptEvalHead: RpgTypes.Command_ScriptHeader = {
  code: RpgTypes.SCRIPT_EVAL,
  indent: 0,
  parameters: ["script head"],
};

export const MockScriptEvalBody: RpgTypes.Command_ScriptBody = {
  code: RpgTypes.SCRIPT_EVAL_BODY,
  indent: 0,
  parameters: ["script body"],
};
