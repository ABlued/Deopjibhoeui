export type TargetValue<T> = {
  target: {
    value: T;
  };
};

export type TargetName = {
  target: {
    name?: string;
  };
};

export type TargetCheckEvent = {
  target: {
    checked: boolean;
  };
};
