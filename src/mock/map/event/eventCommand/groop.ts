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
