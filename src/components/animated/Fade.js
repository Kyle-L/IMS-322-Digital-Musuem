import { AnimatePresence, motion } from "framer-motion"
import { useEffect, useState } from "react"
import LoadingIcon from "./LoadingIcon"

export default function MyComponent({ children, active = true, includeLoader = false }) {
    const [isActive, setIsActive] = useState(false)

    useEffect(() => {
        setIsActive(active)
    }, [active])

    return (
        <div style={{ position: 'relative', height: '100%' }}>
            {includeLoader && !isActive && (<LoadingIcon />)}
            {isActive && (<AnimatePresence>
                <motion.div className="h-100"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                >
                    {children}
                </motion.div>
            </AnimatePresence>)}
        </div>

    )
}