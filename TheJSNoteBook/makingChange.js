/**
 * Consider the software that runs on a self-checkout machine. One task that it must be
able to perform is to determine how much change to provide when the shopper pays
for a purchase with cash.
Write a program that begins by reading a number of cents from the user as an
integer. Then your program should compute and display the denominations of the
coins that should be used to give that amount of change to the shopper. The change
should be given using as few coins as possible. Assume that the machine is loaded
with pennies, nickels, dimes, quarters, loonies and toonies.
 */
const prompt = require("prompt-sync");
const cent = promt("input the amount of cent\n");
const CentPerToonie = 200;
const centPerLoonie = 100;
const centPerQuarter = 25;
const centPerDime = 10;
const centPerNickel = 5;

