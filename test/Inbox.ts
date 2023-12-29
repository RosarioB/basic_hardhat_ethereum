import { expect } from "chai";
import { ethers } from "hardhat";
import { Inbox, Inbox__factory } from "../typechain-types";

describe("Inbox contract", () => {
    let Inbox: Inbox__factory;
    let inbox: Inbox;

    beforeEach(async () => {
        Inbox = await ethers.getContractFactory("Inbox");
        inbox = await Inbox.deploy("Hi there!");
        await inbox.waitForDeployment();
    });

    describe("Deployment", () => {
        it("The contract has been deployed successfully", async () => {
            const addressInbox = await inbox.getAddress();
            expect(addressInbox).to.not.be.empty;
            expect(addressInbox).to.exist;
        } );

        it("has a default message", async () => {
            const message: string = await inbox.message();
            expect(message).to.be.equal("Hi there!");
        });
    });

    describe("Contract functions", () => {
        it('can change the message', async () => {
            const messageStr: string = "New message"; 
            await inbox.setMessage(messageStr);
            const message: string = await inbox.message();
            expect(message).to.be.equal("New message")
        });
    });
});
