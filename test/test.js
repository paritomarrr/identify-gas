const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Which", function () {
  it("Gas pricing", async function () {
    const Which = await ethers.getContractFactory("Which");
    const which = await Which.deploy();
    await which.deployed();

    // expect(await which.which()).to.equal("Hello, world!");

    const method_a = await which.a();
    const method_b = await which.b();
    const method_c = await which.c();
    // console.log(which.c);

    // wait until the transaction is mined
    await method_a.wait();
    await method_b.wait();
    await method_c.wait();

    // expect(await greeter.greet()).to.equal("Hola, mundo!");
  });
});
