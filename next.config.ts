import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin'
import { NextConfig } from 'next'

const withVanillaExtract = createVanillaExtractPlugin()

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  webpack: config => {
    config.externals.push('pino-pretty', 'lokijs', 'encoding')
    return config
  }
}

export default withVanillaExtract(nextConfig)
