import { pino } from "./logger"

import makeAccessEnv from "./access-env"
export const accessEnv = makeAccessEnv({ logger: pino })

export default {
    accessEnv,
}
