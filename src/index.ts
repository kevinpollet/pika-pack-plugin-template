import { BuilderOptions } from "@pika/types";

export const beforeBuild = async (opts: BuilderOptions): Promise<void> =>
  opts.reporter.info("beforeBuild");

export const afterBuild = async (opts: BuilderOptions): Promise<void> =>
  opts.reporter.info("beforeBuild");

export const beforeJob = async (opts: BuilderOptions): Promise<void> =>
  opts.reporter.info("beforeJob");

export const afterJob = async (opts: BuilderOptions): Promise<void> =>
  opts.reporter.info("beforeJob");

export const build = async (opts: BuilderOptions): Promise<void> =>
  opts.reporter.info("Build");

export const manifest = async (
  manifest: any,
  opts: BuilderOptions
): Promise<any> => {
  opts.reporter.info(`Manifest: ${manifest}`);
  return manifest;
};
