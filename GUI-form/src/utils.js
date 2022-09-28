require("dotenv").config();

export const validPartnerIds = [
  {
    id: 1,
    partnerID: parseInt(process.env.REACT_APP_partnerId_1),
    name: "Roche DEV",
  },
  {
    id: 2,
    partnerID: parseInt(process.env.REACT_APP_partnerI_2),
    name: "Roche SandBox",
  },

  {
    id: 4,
    partnerID: parseInt(process.env.REACT_APP_partnerI_3),
    name: "Roche SandBox",
  },
];

export function splitName(sentence) {
  let text = sentence.split(" ");
  console.log(text);
  return text[1].toLowerCase();
}

export function createNames(type, partner, dataCenter, countryCode, purpose) {
  if (type === "ApiKey") {
    return `${splitName(partner)}_${dataCenter}_${countryCode}_${purpose}`;
  }
}
