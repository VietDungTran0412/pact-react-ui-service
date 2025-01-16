module.exports = {
    transform: {
        '^.+\\.[tj]sx?$': 'babel-jest',
    },
    testEnvironment: 'jsdom',
    extensionsToTreatAsEsm: ['.jsx', '.js'],
    transformIgnorePatterns: [
        '/node_modules/(?!(axios)/)', // Add more packages here if needed
    ],
};
