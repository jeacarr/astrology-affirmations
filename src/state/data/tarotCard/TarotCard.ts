import { Record, RecordOf } from "immutable";

export interface TarotCardContract {
    name: string;
    rdesc: string;
    desc: string;
    cbd_desc: string;
    sequence: number; 
    upright: boolean;
}

export const TarotCardRecord = Record<TarotCardContract>({
    name: "",
    rdesc: "",
    desc: "",
    cbd_desc: "",
    sequence: 0,
    upright: false,
});

export type TarotCard = RecordOf<TarotCardContract>;