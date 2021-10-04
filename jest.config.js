module.exports = {
	testEnvironment: 'jsdom',
	testPathIgnorePatterns: ['/node_modules/', '/next/'],
	collectCoverage: true,
	ccollectCoverageFrom: ['src/**/*.ts(x)?', '!src/**/stories.tsx'],
	setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
	modulePaths: ['<rootDir>/src/'],
};
