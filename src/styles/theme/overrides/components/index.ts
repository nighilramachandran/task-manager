import { buttonOverride } from "./Button";
import { inputOverride } from "./Input";
import { paperOverride } from "./Paper";

export const componetnsOverrides = {
  ...paperOverride,
  ...inputOverride,
  ...buttonOverride,
};
