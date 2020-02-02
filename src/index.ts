import { BuilderOptions } from "@pika/types";

export function beforeBuild({ reporter }: BuilderOptions): void {
  reporter.info("beforeBuild");
}

export function beforeJob({ reporter }: BuilderOptions): void {
  reporter.info("beforeJob");
}

export function build({ reporter }: BuilderOptions): void {
  reporter.info("build");
}

export function afterJob({ reporter }: BuilderOptions): void {
  reporter.info("afterJob");
}

export function afterBuild({ reporter }: BuilderOptions): void {
  reporter.info("afterBuild");
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function manifest(newManifest: any): Promise<any> {
  return newManifest;
}
