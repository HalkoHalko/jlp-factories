import { onchainTable } from "ponder";

export const ManagerCreated = onchainTable("LPManagerCreated", (t) => ({
  id: t.text().primaryKey(),
  nonce: t.integer(),
  lp: t.text(),
  stage: t.integer(),
  viewer: t.text(),
  swapper: t.text(),
  receiver: t.text(),
  priceHelper: t.text(),
  lpManager: t.text(),
  doubleTracker: t.text(),
  singleTrackerZero: t.text(),
  singleTrackerOne: t.text(),
  compounder: t.text(),
  router: t.text(),
  network: t.text(),
}));