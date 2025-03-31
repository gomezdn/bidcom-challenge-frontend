export const {
    HOMEPAGE_DATA_URL,
    CAROUSEL_DATA_URL
} = process.env

if (!HOMEPAGE_DATA_URL) {
    throw new Error('HOMEPAGE_DATA_URL must be set in .env file')
} else if (!CAROUSEL_DATA_URL) {
    throw new Error('CAROUSEL_DATA_URL must be set in .env file')
}