import { ReportCollection } from '$lib/domain/report';
import raw from './day2.txt?raw';

export const day2Data = ReportCollection.fromRaw(raw);
