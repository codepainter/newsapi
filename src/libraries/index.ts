import { pino } from "@libs/logger"

import makeAccessEnv from "@libs/access-env"
export const accessEnv = makeAccessEnv({ logger: pino })

export default {
    accessEnv,
}
