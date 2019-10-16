import { BuilderOptions } from "@pika/types";

export async function beforeBuild({ reporter }: BuilderOptions): Promise<void> {
  reporter.info("beforeBuild");
}

export async function beforeJob({ reporter }: BuilderOptions): Promise<void> {
  reporter.info("beforeJob");
}

export async function build({ reporter }: BuilderOptions): Promise<void> {
  reporter.info("build");
}

export async function afterJob({ reporter }: BuilderOptions): Promise<void> {
  reporter.info("afterJob");
}

export async function afterBuild({ reporter }: BuilderOptions) {
  reporter.info("afterBuild");
}

export async function manifest(newManifest: any): Promise<any> {
  return newManifest;
}
