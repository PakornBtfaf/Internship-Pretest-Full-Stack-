"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.merge = merge;
function merge(collection_1, collection_2, collection_3) {
    const result = [];
    let i = 0; 
    let j = 0; 
    let k = collection_3.length - 1; 
    while (i < collection_1.length || j < collection_2.length || k >= 0) {
        const a = i < collection_1.length ? collection_1[i] : Infinity;
        const b = j < collection_2.length ? collection_2[j] : Infinity;
        const c = k >= 0 ? collection_3[k] : Infinity;
        // เลือกตัวที่น้อยที่สุด
        if (a <= b && a <= c) {
            result.push(a);
            i++;
        }
        else if (b <= a && b <= c) {
            result.push(b);
            j++;
        }
        else {
            result.push(c);
            k--;
        }
    }
    return result;
}
