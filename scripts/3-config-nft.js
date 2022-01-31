import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0x98372Ec9cb4237Af6BC03501FFA3441025C465ac",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Seedling",
        description: "This NFT will give you access to uForageDAO!",
        image: readFileSync("scripts/assets/uforage-seedling.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()