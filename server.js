#!/usr/bin/env node

import minimist from "minimist";
import express from "express";
import {roll} from "./lib/roll.js";

const args = minimist(process.argv.slice(2));
const port = args.port || 5000;

const app = express();
app.use(express.urlencoded({extended: true})));

// checks endpoint adn returns 200 OK (part 3)
app.get("/app/", (req, res) => {
  res.send('200 OK');
});

// part 4
app.get("/app/roll", (req, res) => {
  res.send(roll(6, 2, 1));
});

// part 5
app.post("/app/roll/" (req, res) => {
  const sides = parseInt(req.body.sides)
  const dice = parseInt(req.body.dice)
  const rolls = parseInt(req.body.rolls)
  
  res.send(roll(sides, dice, rolls))
});

// part 6
