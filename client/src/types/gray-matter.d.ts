declare module "gray-matter" {
  import { GrayMatterFile, Input, Options } from "gray-matter";
  function matter<T = any>(input: Input, options?: Options): GrayMatterFile<T>;
  export = matter;
}
