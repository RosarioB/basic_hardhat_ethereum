import { ethers } from "hardhat";
import { Inbox } from "../typechain-types";

const main = async () : Promise<void> => {
  const inbox: Inbox = await ethers.deployContract("Inbox", ["Hi there!"]);
  await inbox.waitForDeployment();
  console.log(
    `Inbox contract deployed to ${await inbox.getAddress()}`
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
