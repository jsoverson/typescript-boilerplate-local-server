import { expect } from 'chai';
import { describe } from 'mocha';
import { start, TestServer } from '@jsoverson/test-server';
import fetch from 'node-fetch';

import main from '../src';

import pkg from '../package.json';
import { readProjectFile } from '../src/project';

describe('main', function () {
  it('should have been changed', () => {
    expect(main()).to.not.throw();
  });

  describe('package.json', function () {
    it('name should be filled out', () => {
      expect(pkg.name).to.not.equal('');
    });
    it('description should be filled out', () => {
      expect(pkg.description).to.not.equal('');
    });
    it('author should be filled out', () => {
      expect(pkg.author).to.not.equal('');
    });
  });

  describe('local HTTP tests', () => {
    // Setup and teardown for a local HTTP server.
    // Remove this section if you don't need to make HTTP requests.
    // More info: https://github.com/jsoverson/test-server

    /******************************
     *   HTTP test server setup   *
     ******************************/
    let server: TestServer;

    before(async () => {
      server = await start(__dirname, 'server_root');
    });

    after(async () => {
      await server.stop();
    });
    /******************************
     * End HTTP test server setup *
     ******************************/

    it('should make a request to the local server', async () => {
      const originalFile = await readProjectFile('test', 'server_root', 'index.html');
      const response = await fetch(server.url('/index.html'));
      const text = await response.text();
      expect(text).to.equal(originalFile);
    });
  });
});
