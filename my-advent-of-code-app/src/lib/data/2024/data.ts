import { CalibrationEquationCollection } from '$lib/domain/calibration-equation';
import { ReportCollection } from '$lib/domain/report';
import day2Raw from './day2.txt?raw';
import day7Raw from './day7.txt?raw';

export const day2Data = ReportCollection.fromRaw(day2Raw);
export const day7Data = CalibrationEquationCollection.fromRaw(day7Raw);
