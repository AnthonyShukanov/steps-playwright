import { resolve } from 'path';
import { Response } from '@playwright/test';
const file = (path: string) => `file://${path}`
export default class Memory {
    valuesPage = file(resolve('./test-e2e/apps/values.html'));
    actionsPage = file(resolve('./test-e2e/apps/actions.html'));
    framePage = file(resolve('./test-e2e/apps/frame.html'));
    waitsPage = file(resolve('./test-e2e/apps/waits.html'));
    mockPage = file(resolve('./test-e2e/apps/mock.html'));
    storagePage = file(resolve('./test-e2e/apps/storage.html'));
    dragDropPage = file(resolve('./test-e2e/apps/dragdrop.html'));

    array = (...args: Array<any>) => args;

    // @ts-ignore
    setInputValue = () => document.querySelector('#input').value = 'some value';

    // @ts-ignore
    getActionInnerText = () => document.querySelector("#action").innerText;

    // @ts-ignore
    clickJS = target => target.click();

    // @ts-ignore
    getInnerText = target => target.innerText;

    userFromMemory = 'Mock 3';

    users = JSON.stringify([
        {"name": "Memory Mock 1"},
        {"name": "Memory Mock 2"},
        {"name": "Memory Mock 3"}
    ]);

    uploadFile = resolve('./test-e2e/apps/actions.html');

    button2 = 'Button2';

    userInterceptionPredicate = (response: Response) => response.url().includes('users');
}

