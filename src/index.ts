import { ponder } from "ponder:registry";
import { ManagerCreated } from "ponder:schema";

ponder.on("ArbJLPFactory:LPManagerCreated", async ({ event, context }) => {
  const row = await context.db
    .insert(ManagerCreated)
    .values({
      id: event.log.id,
      nonce: Number(event.args[2]),
      lp: event.args[3].lp, 
      viewer: event.args[3].viewer,
      swapper: event.args[3].swapper,
      receiver: event.args[3].receiver,
      priceHelper: event.args[3].priceHelper,
      lpManager: event.args[3].lpManager,
      doubleTracker: event.args[3].doubleTracker,
      singleTrackerZero: event.args[3].singleTrackerZero,
      singleTrackerOne: event.args[3].singleTrackerOne,
      compounder: event.args[3].compounder,
      router: event.args[3].router,
      blockNumber: event.block.number,
      transactionHash: event.transaction.hash,
      network: "arbitrum",
    });
});
ponder.on("ApeJLPFactory:LPManagerCreated", async ({ event, context }) => {
  const row = await context.db
      .insert(ManagerCreated)
      .values({
        id: event.log.id,
        nonce: Number(event.args[2]),
        lp: event.args[3].lp,
        viewer: event.args[3].viewer,
        swapper: event.args[3].swapper,
        receiver: event.args[3].receiver,
        priceHelper: event.args[3].priceHelper,
        lpManager: event.args[3].lpManager,
        doubleTracker: event.args[3].doubleTracker,
        singleTrackerZero: event.args[3].singleTrackerZero,
        singleTrackerOne: event.args[3].singleTrackerOne,
        compounder: event.args[3].compounder,
        router: event.args[3].router,
        blockNumber: event.block.number,
        transactionHash: event.transaction.hash,
        network: "apechain",
      });
  });
  ponder.on("BaseJLPFactory:LPManagerCreated", async ({ event, context }) => {
    const row = await context.db
      .insert(ManagerCreated)
      .values({
        id: event.log.id,
        nonce: Number(event.args[2]),
        lp: event.args[3].lp,
        viewer: event.args[3].viewer,
        swapper: event.args[3].swapper,
        receiver: event.args[3].receiver,
        priceHelper: event.args[3].priceHelper,
        lpManager: event.args[3].lpManager,
        doubleTracker: event.args[3].doubleTracker,
        singleTrackerZero: event.args[3].singleTrackerZero,
        singleTrackerOne: event.args[3].singleTrackerOne,
        compounder: event.args[3].compounder,
        router: event.args[3].router,
        blockNumber: event.block.number,
        transactionHash: event.transaction.hash,
        network: "base",    
      });
  });
  ponder.on("BlastJLPFactory:LPManagerCreated", async ({ event, context }) => {
    const row = await context.db
      .insert(ManagerCreated)
      .values({
        id: event.log.id,
        nonce: Number(event.args[2]),
        lp: event.args[3].lp,
        viewer: event.args[3].viewer,
        swapper: event.args[3].swapper,
        receiver: event.args[3].receiver,
        priceHelper: event.args[3].priceHelper,
        lpManager: event.args[3].lpManager,
        doubleTracker: event.args[3].doubleTracker,
        singleTrackerZero: event.args[3].singleTrackerZero,
        singleTrackerOne: event.args[3].singleTrackerOne,
        compounder: event.args[3].compounder,
        router: event.args[3].router,
        blockNumber: event.block.number,
        transactionHash: event.transaction.hash,
        network: "blast",
      });
  });
  ponder.on("BeraJLPFactory:LPManagerCreated", async ({ event, context }) => {
    const row = await context.db
      .insert(ManagerCreated)
      .values({
        id: event.log.id,
        nonce: Number(event.args[2]),
        lp: event.args[3].lp,
        viewer: event.args[3].viewer,
        swapper: event.args[3].swapper,
        receiver: event.args[3].receiver,
        priceHelper: event.args[3].priceHelper,
        lpManager: event.args[3].lpManager,
        doubleTracker: event.args[3].doubleTracker,
        singleTrackerZero: event.args[3].singleTrackerZero,
        singleTrackerOne: event.args[3].singleTrackerOne,
        compounder: event.args[3].compounder,
        router: event.args[3].router,
        blockNumber: event.block.number,
        transactionHash: event.transaction.hash,
        network: "berachain",   
      });
  });