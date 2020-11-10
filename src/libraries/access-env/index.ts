export default function makeAccessEnv ({ logger }) {
    var cache = {}
    return function accessEnv (key: string, value?: string): string {
        const log = logger.child({ functionName: "accessEnv" })
        if (process.env.NODE_ENV === "local") log.info({ key, value })
        if (!(key in process.env)) {
            if (value) return value
            throw new Error(`400|${key} not found in process.env!`)
        }

        if (cache[key]) return cache[key]

        cache[key] = process.env[key]

        return process.env[key]
    }
}
