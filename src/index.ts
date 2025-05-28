import * as fs from 'fs';

type Cloth = {
  id: number;
  name: string;
  type: string;
};

const rawData = fs.readFileSync('clothes.json', 'utf-8');
const clothes: Cloth[] = JSON.parse(rawData);

console.log(clothes);
