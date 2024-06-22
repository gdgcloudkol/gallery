

export const truncateUrl = (url: string) => {
    const match = url?.match(/^(https:\/\/.*?-h\d+)/);
    return match ? match[1] : url;
}

export function gcd(a: number, b: number): number {
    return b === 0 ? a : gcd(b, a % b);
}

export function getAspectRatio(width: number, height: number): string {
    const ratioGCD = gcd(width, height);
    return `${width / ratioGCD}:${height / ratioGCD}`;
}

export function extractAspectRatio(url: string): string | null {
    const regex = /w(\d+)-h(\d+)/;
    const match = url.match(regex);

    if (match) {
        const width = parseInt(match[1], 10);
        const height = parseInt(match[2], 10);
        return getAspectRatio(width, height);
    } else {
        return null;
    }
}

const predefinedRatios: { [key: string]: number } = {
    '16:9': 16 / 9,
    '9:16': 9 / 16,
    '1:1': 1,
    '4:3': 4 / 3,
    '21:9': 21 / 9
};

export function findClosestAspectRatio(aspectRatio: string): string {
    const [width, height] = aspectRatio.split(':').map(Number);
    const ratio = width / height;

    let closestRatio: string | null = null;
    let minDifference = Infinity;

    for (const [key, value] of Object.entries(predefinedRatios)) {
        const difference = Math.abs(ratio - value);
        if (difference < minDifference) {
            minDifference = difference;
            closestRatio = key;
        }
    }

    return closestRatio || '1:1';
}


export function calculateAspectRatio(url: string): string {
    const aspectRatio = extractAspectRatio(url);
    if (aspectRatio) {
        return findClosestAspectRatio(aspectRatio);
    } else {
        return '1:1';
    }
}

export const minAspectRatioDimensions: {
    [key: string]: { width: number; height: number };
} = {
    "16:9": { width: 480, height: 270 },
    "9:16": { width: 270, height: 480 },
    "1:1": { width: 300, height: 300 },
    "4:3": { width: 400, height: 300 },
    "21:9": { width: 630, height: 270 },
};