export const BTN_ACTIONS = {
  NUM: "NUM",
  THEME: "THEME",
  CALC: "CALC",
  DELETE: "DELETE",
  CLEAR: "CLEAR",
  PERCENT: "PERCENT",
  EQUAL: "EQUAL",
};

export const btns = [
  {
    display: "C",
    action: BTN_ACTIONS.DELETE,
    class: "btn__op",
  },
  {
    display: "AC",
    action: BTN_ACTIONS.CLEAR,
    class: "btn__op",
  },
  {
    display: "%",
    action: BTN_ACTIONS.NUM,
    class: "btn__op",
  },
  {
    display: "/",
    action: BTN_ACTIONS.NUM,
    class: "btn__op",
    value: "/",
  },
  {
    display: "7",
    action: BTN_ACTIONS.NUM,
    class: "btn__op",
    value: 7,
  },
  {
    display: "8",
    action: BTN_ACTIONS.NUM,
    class: "btn__op",
    value:"8"
  },
  {
    display: "9",
    action: BTN_ACTIONS.NUM,
    class: "btn__op",
    value:"9"
  },
  {
    display: "*",
    action: BTN_ACTIONS.NUM,
    class: "btn__op",
    value:"*"
  },
  {
    display: "4",
    action: BTN_ACTIONS.NUM,
    class: "btn__op",
    value:"4"
  },
  {
    display: "5",
    action: BTN_ACTIONS.NUM,
    class: "btn__op",
    value:"5"
  },
  {
    display: "6",
    action: BTN_ACTIONS.NUM,
    class: "btn__op",
    value:"6"
  },
  {
    display: "-",
    action: BTN_ACTIONS.NUM,
    class: "btn__op",
    value:"-"
  },
  {
    display: "1",
    action: BTN_ACTIONS.NUM,
    class: "btn__op",
    value:"1"
  },
  {
    display: "2",
    action: BTN_ACTIONS.NUM,
    class: "btn__op",
    value: "2",
  },
  {
    display: "3",
    action: BTN_ACTIONS.NUM,
    class: "btn__op",
    value:"3"
  },
  {
    display: "+",
    action: BTN_ACTIONS.NUM,
    class: "btn__op",
    value:"+"
  },
  {
    display: "0",
    action: BTN_ACTIONS.NUM,
    class: "btn__op",
    value:"0"
  },
  {
    display: ".",
    action: BTN_ACTIONS.NUM,
    class: "btn__op",
    value:"."
  },
  {
    display: "=",
    action: BTN_ACTIONS.EQUAL,
    class: "btn__op",
  },
];
