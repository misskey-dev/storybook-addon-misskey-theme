import type {
  Renderer,
  PartialStoryFn as StoryFunction,
  StoryContext,
} from "@storybook/types";
import { useEffect, useGlobals } from "@storybook/preview-api";
import { PARAM_KEY } from "./constants";

export const withGlobals = (
  StoryFn: StoryFunction<Renderer>,
  context: StoryContext<Renderer>
) => {
  const [globals] = useGlobals();
  const state = globals[PARAM_KEY];
  const { theme } = context.globals;

  useEffect(() => {
    applyToolState(state);
  }, [state, theme]);

  return StoryFn();
};

function applyToolState(state: string | false) {
  if (state) {
    document.documentElement.dataset.misskeyTheme = state;
  } else {
    delete document.documentElement.dataset.misskeyTheme;
  }
}
