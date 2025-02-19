import Memory from './memory';
import App from './page_object';
import localServer from './support/server';

const common = {
    paths: ['test-e2e/features/*.feature'],
    require: ['test-e2e/step-definitions/*.ts', 'src/*.ts'],
    browser: {
        logLevel: 'warn',
        timeout: {
            page: 5000
        },
        capabilities: {
            browserName: 'chromium'
        },
        trace: {
            event: ['onFail'],
            dir: 'dirToStoreTraces',
            attach: true
        }
    },
    format: [
        '@qavajs/console-formatter',
        '@qavajs/xunit-formatter:test-e2e/report.xml'
    ],
    memory: new Memory(),
    pageObject: new App(),
    parallel: 4,
    publishQuiet: true,
    retry: 1,
    service: [localServer],
    screenshot: ['onFail']
}

export default common;

export const debug = {
    ...common,
    retry: 0,
    tags: '@debug',
    browser: {
        logLevel: 'warn',
        timeout: {
            page: 5000
        },
        capabilities: {
            browserName: 'chromium',
            headless: false
        },
        trace: {
            event: 'onFail',
            dir: 'customDir',
            attach: true
        }
    }
}
