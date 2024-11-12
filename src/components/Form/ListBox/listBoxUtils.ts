import { OptionForListBoxProps } from "./constants";

export const levenshteinDistance = (a: string, b: string): number => {
    const matrix = [];

    const aLength = a.length;
    const bLength = b.length;

    // Early exit if one of the strings is empty
    if (aLength === 0) return bLength;
    if (bLength === 0) return aLength;

    // Initialize the first row and column of the matrix
    for (let i = 0; i <= bLength; i++) {
        matrix[i] = [ i ];
    }
    for (let j = 0; j <= aLength; j++) {
        matrix[0][j] = j;
    }

    // Fill in the rest of the matrix
    for (let i = 1; i <= bLength; i++) {
        for (let j = 1; j <= aLength; j++) {
            if (b[i - 1] === a[j - 1]) {
                matrix[i][j] = matrix[i - 1][j - 1];
            } else {
                matrix[i][j] = Math.min(
                    matrix[i - 1][j] + 1,     // Deletion
                    matrix[i][j - 1] + 1,     // Insertion
                    matrix[i - 1][j - 1] + 1,  // Substitution
                );
            }
        }
    }

    return matrix[bLength][aLength];
};

export const isSubsequence = (search: string, target: string): boolean => {
    let searchIndex = 0;
    let targetIndex = 0;

    while (searchIndex < search.length && targetIndex < target.length) {
        if (search[searchIndex] === target[targetIndex]) {
            searchIndex++;
        }
        targetIndex++;
    }

    return searchIndex === search.length;
};

export const generateAcronym = (label: string): string => {
    return label
        .split(/[\s\-_]+/)
        .map(word => word.slice(0, 2)) // Take first two letters
        .join("")
        .toLowerCase();
};

// Handle partial matches and common typos =============================================================================
export const searchOptions = (options: OptionForListBoxProps[], searchTerm: string) => {
    if (!searchTerm) return options;

    const normalizedSearch = searchTerm.toLowerCase().trim();

    const maxDistance = Math.floor(normalizedSearch.length / 2);

    const matchedOptions = options
        .map(option => {
            const normalizedLabel = option.label.toLowerCase();

            const distance = levenshteinDistance(normalizedSearch, normalizedLabel);

            const words       = normalizedLabel.split(/[\s\-_]+/);
            const searchWords = normalizedSearch.split(/[\s\-_]+/);

            const isPartialMatch =
                      normalizedLabel.includes(normalizedSearch) ||
                      searchWords.every(searchWord =>
                          words.some(word => word.startsWith(searchWord)),
                      );

            const acronym = generateAcronym(normalizedLabel);

            const isAcronymMatch = isSubsequence(normalizedSearch, acronym);

            return {
                option,
                distance,
                isPartialMatch,
                isAcronymMatch,
            };
        })
        .filter(({ distance, isPartialMatch, isAcronymMatch }) =>
            isPartialMatch || isAcronymMatch || distance <= maxDistance,
        )
        .sort((a, b) => {
            if (a.isPartialMatch && !b.isPartialMatch) return -1;
            if (!a.isPartialMatch && b.isPartialMatch) return 1;

            if (a.isAcronymMatch && !b.isAcronymMatch) return -1;
            if (!a.isAcronymMatch && b.isAcronymMatch) return 1;

            return a.distance - b.distance;
        })
        .map(({ option }) => option);

    return matchedOptions;
};
