import { demoImportFunction } from "./util";

/*:
 * @plugindesc Plugin template
 * @author Plugin author
 *
 * @param pluginString
 * @desc a plugin string
 * @default hello
 */
(function () {
  let params = PluginManager.parameters("Plugin_template");
  let pluginString = params["pluginString"].toLowerCase();

  let importedString = demoImportFunction(pluginString);
});
