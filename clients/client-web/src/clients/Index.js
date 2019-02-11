// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import Client from '../Client';

export default class Index extends Client {
  constructor(options = {}) {
    super({
      serviceName: 'index',
      serviceVersion: 'v1',
      exchangePrefix: '',
      ...options,
    });
    this.ping.entry = {"args":[],"method":"get","name":"ping","query":[],"route":"/ping","stability":"stable","type":"function"}; // eslint-disable-line
    this.findTask.entry = {"args":["indexPath"],"method":"get","name":"findTask","output":true,"query":[],"route":"/task/<indexPath>","stability":"stable","type":"function"}; // eslint-disable-line
    this.listNamespaces.entry = {"args":["namespace"],"method":"get","name":"listNamespaces","output":true,"query":["continuationToken","limit"],"route":"/namespaces/<namespace>","stability":"stable","type":"function"}; // eslint-disable-line
    this.listTasks.entry = {"args":["namespace"],"method":"get","name":"listTasks","output":true,"query":["continuationToken","limit"],"route":"/tasks/<namespace>","stability":"stable","type":"function"}; // eslint-disable-line
    this.insertTask.entry = {"args":["namespace"],"input":true,"method":"put","name":"insertTask","output":true,"query":[],"route":"/task/<namespace>","scopes":"index:insert-task:<namespace>","stability":"stable","type":"function"}; // eslint-disable-line
    this.findArtifactFromTask.entry = {"args":["indexPath","name"],"method":"get","name":"findArtifactFromTask","query":[],"route":"/task/<indexPath>/artifacts/<name>","scopes":{"if":"private","then":"queue:get-artifact:<name>"},"stability":"stable","type":"function"}; // eslint-disable-line
  }
  /* eslint-disable max-len */
  // Respond without doing anything.
  // This endpoint is used to check that the service is up.
  /* eslint-enable max-len */
  ping(...args) {
    this.validate(this.ping.entry, args);

    return this.request(this.ping.entry, args);
  }
  /* eslint-disable max-len */
  // Find a task by index path, returning the highest-rank task with that path. If no
  // task exists for the given path, this API end-point will respond with a 404 status.
  /* eslint-enable max-len */
  findTask(...args) {
    this.validate(this.findTask.entry, args);

    return this.request(this.findTask.entry, args);
  }
  /* eslint-disable max-len */
  // List the namespaces immediately under a given namespace.
  // This endpoint
  // lists up to 1000 namespaces. If more namespaces are present, a
  // `continuationToken` will be returned, which can be given in the next
  // request. For the initial request, the payload should be an empty JSON
  // object.
  /* eslint-enable max-len */
  listNamespaces(...args) {
    this.validate(this.listNamespaces.entry, args);

    return this.request(this.listNamespaces.entry, args);
  }
  /* eslint-disable max-len */
  // List the tasks immediately under a given namespace.
  // This endpoint
  // lists up to 1000 tasks. If more tasks are present, a
  // `continuationToken` will be returned, which can be given in the next
  // request. For the initial request, the payload should be an empty JSON
  // object.
  // **Remark**, this end-point is designed for humans browsing for tasks, not
  // services, as that makes little sense.
  /* eslint-enable max-len */
  listTasks(...args) {
    this.validate(this.listTasks.entry, args);

    return this.request(this.listTasks.entry, args);
  }
  /* eslint-disable max-len */
  // Insert a task into the index.  If the new rank is less than the existing rank
  // at the given index path, the task is not indexed but the response is still 200 OK.
  // Please see the introduction above for information
  // about indexing successfully completed tasks automatically using custom routes.
  /* eslint-enable max-len */
  insertTask(...args) {
    this.validate(this.insertTask.entry, args);

    return this.request(this.insertTask.entry, args);
  }
  /* eslint-disable max-len */
  // Find a task by index path and redirect to the artifact on the most recent
  // run with the given `name`.
  // Note that multiple calls to this endpoint may return artifacts from differen tasks
  // if a new task is inserted into the index between calls. Avoid using this method as
  // a stable link to multiple, connected files if the index path does not contain a
  // unique identifier.  For example, the following two links may return unrelated files:
  // * https://tc.example.com/api/index/v1/task/some-app.win64.latest.installer/artifacts/public/installer.exe`
  // * https://tc.example.com/api/index/v1/task/some-app.win64.latest.installer/artifacts/public/debug-symbols.zip`
  // This problem be remedied by including the revision in the index path or by bundling both
  // installer and debug symbols into a single artifact.
  // If no task exists for the given index path, this API end-point responds with 404.
  /* eslint-enable max-len */
  findArtifactFromTask(...args) {
    this.validate(this.findArtifactFromTask.entry, args);

    return this.request(this.findArtifactFromTask.entry, args);
  }
}
