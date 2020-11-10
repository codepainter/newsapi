// import { LoggerInterface } from './index'
import pino from "pino"

export default function makePinoLogger ({ name = "defaultLoggerName" }: { name: string }) {
    const isLocal = process.env.NODE_ENV === "local"

    return pino({ name, prettyPrint: isLocal })
}
