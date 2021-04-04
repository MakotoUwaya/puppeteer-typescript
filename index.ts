import puppeteer from 'puppeteer';

class Sample {
  run = async () => {
    const browser = await puppeteer.launch();
    const currentPage = (await browser.pages())[0];
    await currentPage.goto('https://example.com');
    await currentPage.screenshot({ path: 'example.png' });

    await browser.close();
  }
}

new Sample()
  .run()
  .then(() => console.log('Success'))
  .catch(e => console.log('Fail', e));
