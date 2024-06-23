// Given two strings s and t, determine if they are isomorphic.

// Two strings s and t are isomorphic if the characters in s can be replaced to get t.

// All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

function isIsomorphic(s, t) {
    if (s.length !== t.length) return false;

    const mapST = {};
    const mapTS = {};

    for (let i = 0; i < s.length; i++) {
        const charS = s[i];
        const charT = t[i];

        // Check if current character of s is already mapped to a different character in t
        if (mapST[charS] !== undefined) {
            if (mapST[charS] !== charT) {
                console.log(`Failed at s[${i}] = ${charS}, t[${i}] = ${charT}`);
                return false;
            }
        } else {
            mapST[charS] = charT;
        }

        // Check if current character of t is already mapped to a different character in s
        if (mapTS[charT] !== undefined) {
            if (mapTS[charT] !== charS) {
                console.log(`Failed at t[${i}] = ${charT}, s[${i}] = ${charS}`);
                return false;
            }
        } else {
            mapTS[charT] = charS;
        }

        console.log(`mapST: ${JSON.stringify(mapST)}, mapTS: ${JSON.stringify(mapTS)}`);
    }

    return true;
}

// Test Case
console.log(isIsomorphic("abba", "abab")); // Expected output: false
