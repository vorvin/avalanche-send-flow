import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin'
import { NextConfig } from 'next'

const withVanillaExtract = createVanillaExtractPlugin()

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {}

export default withVanillaExtract(nextConfig)
