import { NextRequest } from 'next/server'

type RateLimitBucket = {
    count: number
    resetAt: number
}

const rateLimitStore = new Map<string, RateLimitBucket>()

export function getClientIp(req: NextRequest): string {
    const forwardedFor = req.headers.get('x-forwarded-for')
    const realIp = req.headers.get('x-real-ip')

    if (forwardedFor) {
        const firstIp = forwardedFor.split(',')[0]?.trim()
        if (firstIp) return firstIp
    }

    if (realIp) return realIp
    return 'unknown'
}

export function checkRateLimit(params: {
    key: string
    limit: number
    windowMs: number
}) {
    const now = Date.now()
    const bucket = rateLimitStore.get(params.key)

    if (!bucket || bucket.resetAt <= now) {
        const nextBucket: RateLimitBucket = {
            count: 1,
            resetAt: now + params.windowMs,
        }
        rateLimitStore.set(params.key, nextBucket)

        return {
            success: true,
            remaining: params.limit - 1,
            resetAt: nextBucket.resetAt,
        }
    }

    if (bucket.count >= params.limit) {
        return {
            success: false,
            remaining: 0,
            resetAt: bucket.resetAt,
        }
    }

    bucket.count += 1
    rateLimitStore.set(params.key, bucket)

    return {
        success: true,
        remaining: params.limit - bucket.count,
        resetAt: bucket.resetAt,
    }
}

export function hasValidAdminKey(req: NextRequest): boolean {
    const configuredKey = process.env.ADMIN_API_KEY
    if (!configuredKey) return true

    const headerKey = req.headers.get('x-admin-api-key')
    return headerKey === configuredKey
}