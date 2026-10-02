import type { CEFRLevel, Unit } from '../../types';
import { a1Unit1 } from './a1-unit1';
import { a1Unit2 } from './a1-unit2';
import { a1Unit3 } from './a1-unit3';
import { a1Unit4 } from './a1-unit4';
import { a2Unit1 } from './a2-unit1';
import { a2Unit2 } from './a2-unit2';
import { b1Unit1 } from './b1-unit1';
import { b2Unit1 } from './b2-unit1';

export const allUnits: Unit[] = [a1Unit1, a1Unit2, a1Unit3, a1Unit4, a2Unit1, a2Unit2, b1Unit1, b2Unit1];

export function getUnitsByLevel(level: CEFRLevel): Unit[] {
  return allUnits.filter((u) => u.level === level).sort((a, b) => a.order - b.order);
}

export function getUnit(id: string): Unit | undefined {
  return allUnits.find((u) => u.id === id);
}

export function getNextUnit(unitId: string): Unit | undefined {
  const current = getUnit(unitId);
  if (!current) return undefined;
  const sameLevel = getUnitsByLevel(current.level);
  const idx = sameLevel.findIndex((u) => u.id === unitId);
  if (idx >= 0 && idx < sameLevel.length - 1) return sameLevel[idx + 1];
  const levelOrder: CEFRLevel[] = ['A1', 'A2', 'B1', 'B2'];
  const nextLevelIdx = levelOrder.indexOf(current.level) + 1;
  if (nextLevelIdx < levelOrder.length) {
    const nextLevelUnits = getUnitsByLevel(levelOrder[nextLevelIdx]);
    return nextLevelUnits[0];
  }
  return undefined;
}
