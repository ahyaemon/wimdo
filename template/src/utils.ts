export const swap = (li: any[], idx1: number, idx2: number): any[] => {
    const newli = [...li];
    newli[idx1] = li[idx2];
    newli[idx2] = li[idx1];
    return newli;
};
