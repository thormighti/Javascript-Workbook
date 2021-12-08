/**
 * An online retailer sells two products: widgets and gizmos. Each widget weighs 75
grams. Each gizmo weighs 112 grams. Write a program that reads the number of
widgets and the number of gizmos in an order from the user. Then your program
should compute and display the total weight of the order.
 */

const prompt = require("prompt-sync")();
const num_of_widgets = prompt("Input the widgets ordered: ");
const num_of_gizmos = prompt("Input the gizmos ordered: ");
const widget_weight = +num_of_widgets * 75; // in grams
const gizmo_weight = +num_of_gizmos * 112;
const total_weight = +widget_weight + +gizmo_weight;
console.log("The weight of the order is : ", total_weight);