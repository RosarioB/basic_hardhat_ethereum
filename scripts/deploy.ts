import { ethers } from "hardhat";

const main = async () : Promise<void> => {
  const inbox = await ethers.deployContract("Inbox", ["Hi there!"]);
  await inbox.waitForDeployment();
  console.log(
    `Inbox contract deployed to ${await inbox.getAddress()}`
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
