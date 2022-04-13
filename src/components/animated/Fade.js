import { AnimatePresence, motion } from "framer-motion"
import { useEffect, useState } from "react"

export default function MyComponent({ children, active = true }) {
    const [isActive, setIsActive] = useState(false)

    useEffect(() => {
        setIsActive(active)
    }, [active])

    return (
        isActive && <AnimatePresence>
            <motion.div className="h-100"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1, ease: "easeInOut" }}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    )
}