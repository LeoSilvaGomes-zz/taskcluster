// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import Client from '../Client';

export default class Index extends Client {
  constructor(options = {}) {
    super({
      baseUrl: 'https://index.taskcluster.net/v1',
      exchangePrefix: '',
      ...options
    });
    
    this.findTask.entry = {type:'function',method:'get',route:'/task/<indexPath>',query:[],args:['indexPath'],name:'findTask',stability:'stable',output:true};
    this.listNamespaces.entry = {type:'function',method:'post',route:'/namespaces/<namespace>',query:[],args:['namespace'],name:'listNamespaces',stability:'stable',input:true,output:true};
    this.listTasks.entry = {type:'function',method:'post',route:'/tasks/<namespace>',query:[],args:['namespace'],name:'listTasks',stability:'stable',input:true,output:true};
    this.insertTask.entry = {type:'function',method:'put',route:'/task/<namespace>',query:[],args:['namespace'],name:'insertTask',stability:'stable',scopes:[['index:insert-task:<namespace>']],input:true,output:true};
    this.findArtifactFromTask.entry = {type:'function',method:'get',route:'/task/<indexPath>/artifacts/<name>',query:[],args:['indexPath','name'],name:'findArtifactFromTask',stability:'stable',scopes:[['queue:get-artifact:<name>']]};
    this.ping.entry = {type:'function',method:'get',route:'/ping',query:[],args:[],name:'ping',stability:'stable'};
  }

  // Find a task by index path, returning the highest-rank task with that path. If no
  // task exists for the given path, this API end-point will respond with a 404 status.
  findTask(...args) {
    this.validate(this.findTask.entry, args);
    return this.request(this.findTask.entry, args);
  }

  // List the namespaces immediately under a given namespace.
  // This endpoint
  // lists up to 1000 namespaces. If more namespaces are present, a
  // `continuationToken` will be returned, which can be given in the next
  // request. For the initial request, the payload should be an empty JSON
  // object.
  listNamespaces(...args) {
    this.validate(this.listNamespaces.entry, args);
    return this.request(this.listNamespaces.entry, args);
  }

  // List the tasks immediately under a given namespace.
  // This endpoint
  // lists up to 1000 tasks. If more tasks are present, a
  // `continuationToken` will be returned, which can be given in the next
  // request. For the initial request, the payload should be an empty JSON
  // object.
  // **Remark**, this end-point is designed for humans browsing for tasks, not
  // services, as that makes little sense.
  listTasks(...args) {
    this.validate(this.listTasks.entry, args);
    return this.request(this.listTasks.entry, args);
  }

  // Insert a task into the index.  If the new rank is less than the existing rank
  // at the given index path, the task is not indexed but the response is still 200 OK.
  // Please see the introduction above for information
  // about indexing successfully completed tasks automatically using custom routes.
  insertTask(...args) {
    this.validate(this.insertTask.entry, args);
    return this.request(this.insertTask.entry, args);
  }

  // Find a task by index path and redirect to the artifact on the most recent
  // run with the given `name`.
  // Note that multiple calls to this endpoint may return artifacts from differen tasks
  // if a new task is inserted into the index between calls. Avoid using this method as
  // a stable link to multiple, connected files if the index path does not contain a
  // unique identifier.  For example, the following two links may return unrelated files:
  // * https://index.taskcluster.net/task/some-app.win64.latest.installer/artifacts/public/installer.exe`
  // * https://index.taskcluster.net/task/some-app.win64.latest.installer/artifacts/public/debug-symbols.zip`
  // This problem be remedied by including the revision in the index path or by bundling both
  // installer and debug symbols into a single artifact.
  // If no task exists for the given index path, this API end-point responds with 404.
  findArtifactFromTask(...args) {
    this.validate(this.findArtifactFromTask.entry, args);
    return this.request(this.findArtifactFromTask.entry, args);
  }

  // Respond without doing anything.
  // This endpoint is used to check that the service is up.
  ping(...args) {
    this.validate(this.ping.entry, args);
    return this.request(this.ping.entry, args);
  }
}
