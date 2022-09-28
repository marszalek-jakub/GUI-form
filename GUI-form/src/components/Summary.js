import React from "react";
import Stats from "./Stats";
import { useGlobalState } from "../context";

import { splitName, createNames } from "../utils";

function Summary({ title, ...props }) {
  const [countryCode] = useGlobalState("countryCode");
  const [purpose] = useGlobalState("purpose");
  const [multicountry] = useGlobalState("multicountry");
  const [dataCenter] = useGlobalState("dataCenter");
  const [isChecked] = useGlobalState("isChecked");
  const [working] = useGlobalState("working");

  return (
    <>
      <h3>{title}</h3>
      {working ? (
        <>
          <p>
            {splitName(isChecked[1].name)}_{dataCenter}_{countryCode}_{purpose}
          </p>
          {createNames(
            "ApiKey",
            isChecked[1].name,
            dataCenter,
            countryCode,
            purpose
          )}
          {multicountry}
        </>
      ) : (
        <p>not working</p>
      )}
      <Stats step={4} {...props} />
    </>
  );
}

export default Summary;
