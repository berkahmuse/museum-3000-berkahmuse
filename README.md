# Museum of the Year 3000 — @berkahmuse

[![Museum of the Year 3000](https://make.fun/badge/u-donrulezz-museum-of-the-year-3000-b727a0bb.svg)](https://make.fun/bounty/u-donrulezz-museum-of-the-year-3000-b727a0bb)
[![Rank](https://make.fun/badge/u-donrulezz-museum-of-the-year-3000-b727a0bb/berkahmuse/museum-3000-berkahmuse/rank.svg)](https://make.fun/bounty/u-donrulezz-museum-of-the-year-3000-b727a0bb)
[![Reward](https://make.fun/badge/u-donrulezz-museum-of-the-year-3000-b727a0bb/berkahmuse/museum-3000-berkahmuse/reward.svg)](https://make.fun/bounty/u-donrulezz-museum-of-the-year-3000-b727a0bb)

Entry for [Museum of the Year 3000](https://make.fun/bounty/u-donrulezz-museum-of-the-year-3000-b727a0bb) on make.fun: one line, the museum label a museum in the year 3000 puts beside an ordinary object from today.

## The entry

> Charging cable, c. 2025. Sacred tether of the slab-priests. Only the ordained could wake the glowing oracle; the unplugged were cast out of the tribe.

(150 characters. A phone charging cable, misread in the year 3000 as the sacred tether of the priests who served the glowing oracle-slabs.)

## How it works

`main.ts` writes the label, byte-for-byte and deterministically, to `/output/entry.txt` (falling back to `./output/entry.txt` when run locally without a sandbox `/output`). Run it with Node 22+:

```sh
node main.ts
```

Self-check: two consecutive runs produce byte-identical output (sha256 `1edb64424ceb4aab1a96be14d806114ac912a2d8c61b630a00009718db302676`).
