import React, { memo, useState } from "react";
import { useGlobals, useStorybookApi } from "@storybook/manager-api";
import { Icons, IconButton, TooltipLinkList, WithTooltip } from "@storybook/components";
import { ADDON_ID, PARAM_KEY, TOOL_ID } from "./constants";

export const Tool = memo(function MyAddonSelector() {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);
  const [globals, updateGlobals] = useGlobals();
  const api = useStorybookApi();

  const isActive = !!globals[PARAM_KEY];

  return (
    <WithTooltip
      placement="top"
      closeOnOutsideClick
      tooltip={({ onHide }) => {
        return (
          <TooltipLinkList
            links={[
              '(clear)',
              'l-light',
              'l-coffee',
              'l-apricot',
              'l-rainy',
              'l-botanical',
              'l-vivid',
              'l-cherry',
              'l-sushi',
              'l-u0',
              'd-dark',
              'd-persimmon',
              'd-astro',
              'd-future',
              'd-botanical',
              'd-green-lime',
              'd-green-orange',
              'd-cherry',
              'd-ice',
              'd-u0',
            ].map((theme, i) => ({
              id: theme,
              title: theme,
              onClick() {
                updateGlobals({
                  [PARAM_KEY]: i ? theme : false,
                });
                onHide();
              },
              value: theme,
              active: theme === globals[PARAM_KEY],
            }))}
          />
        );
      }}
      onVisibleChange={setIsTooltipVisible}
    >
      <IconButton
        key={TOOL_ID}
        active={isActive || isTooltipVisible}
        title="Switch theme"
      >
        <Icons icon="mirror" />
      </IconButton>
    </WithTooltip>
  );
});
