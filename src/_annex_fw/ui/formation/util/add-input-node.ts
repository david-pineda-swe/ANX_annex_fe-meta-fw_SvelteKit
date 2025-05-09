import type {
  ActionButtonNode,
  CheckboxNode,
  CurrencyNode,
  DatePickNode,
  FormSectionNode,
  NumberNode,
  SelectNode,
  TextNode
} from "globalTypes";

// OK - TEXT
// OK - EMAIL
// OK - PASSWORD
// OK - TEXTAREA
export const addTextNode = (nodeSetup: TextNode): TextNode => {
  return {...nodeSetup};
};

// CURRENCY
export const addCurrencyNode = (nodeSetup: CurrencyNode): CurrencyNode => {
  return {...nodeSetup};
};

// SELECT
// RADIO_BTN
export const addSelectNode = (nodeSetup: SelectNode): SelectNode => {
  return {...nodeSetup};
};

// NUMBER
export const addNumberNode = (nodeSetup: NumberNode): NumberNode => {
  return {...nodeSetup};
};

// DATE_PICKER
export const addDatePickNode = (nodeSetup: DatePickNode): DatePickNode => {
  return {...nodeSetup};
};

// CHECKBOX_BTN
export const addCheckboxNode = (nodeSetup: CheckboxNode): CheckboxNode => {
  return {...nodeSetup};
};

// CUSTOM_BTN
export const addCustomButtonNode = (nodeSetup: ActionButtonNode): ActionButtonNode => {
  return {...nodeSetup};
};

// SUBMIT_BTN
export const addSubmitButtonNode = (nodeSetup: ActionButtonNode): ActionButtonNode => {
  return {...nodeSetup};
};

// FIELDSET
export const addFieldsetNode = (nodeSetup: FormSectionNode): FormSectionNode => {
  return {...nodeSetup};
};

// FIELDGROUP
export const addFieldgroupNode = (nodeSetup: FormSectionNode): FormSectionNode => {
  return {...nodeSetup};
};