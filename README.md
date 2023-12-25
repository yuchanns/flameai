# flameai

[![npm version](https://badge.fury.io/js/@yuchanns%2Fflameai.svg)](https://badge.fury.io/js/@yuchanns%2Fflameai)

An Incomplete implementation of Azure OpenAI SDK for Cloudflare

## Why Develop Another Azure OpenAI SDK?

While the OpenAI SDK NPM packages are excellent, they cannot be used in Cloudflare Workers due to their close association with the NodeJS runtime. As a result, I have **re-implemented** an incomplete SDK specifically for Cloudflare.

As I have limited time and energy, I have added features based on my own needs. However, anyone is welcome to submit Pull Requests if they require additional features.

## How to use
See [tests](./src/ai.test.ts)
