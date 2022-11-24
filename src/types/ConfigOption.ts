import { ConfigOptionGroupType } from "./ConfigOptionGroup";

export interface ConfigOption {
  id: string;
  title: string;
  price: number;
  image: string;
  onSelect: (configOptionGroupType: ConfigOptionGroupType, optionId: string) => void;
  selected: boolean;
  configOptionGroupType: ConfigOptionGroupType;
}